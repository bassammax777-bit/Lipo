import React, { useState, useEffect } from 'react';
import { ViewState, LipidQuestion, QuizAnswer, LipidCategory } from './types';
import { QUESTION_BANK } from './data/questionBank';
import {
  getSavedStats,
  getSavedWeaknesses,
  addOrUpdateWeakness,
  removeWeakness,
  clearAllWeaknesses,
  updateStatsWithQuiz,
} from './utils/storage';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { QuizArena } from './components/QuizArena';
import { QuizResults } from './components/QuizResults';
import { WeaknessDeck } from './components/WeaknessDeck';
import { QuestionBankExplorer } from './components/QuestionBankExplorer';

const BOOKMARKS_STORAGE_KEY = 'lipidiq_bookmarks_v1';

export default function App() {
  const [activeView, setActiveView] = useState<ViewState>('dashboard');
  const [stats, setStats] = useState(getSavedStats());
  const [weaknesses, setWeaknesses] = useState(getSavedWeaknesses());
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [activeQuizQuestions, setActiveQuizQuestions] = useState<LipidQuestion[]>([]);
  const [timePerQuestion, setTimePerQuestion] = useState(25);
  const [lastQuizAnswers, setLastQuizAnswers] = useState<QuizAnswer[]>([]);

  // Sync bookmarks to localStorage
  const handleToggleBookmark = (questionId: string) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) next.delete(questionId);
      else next.add(questionId);

      try {
        localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(Array.from(next)));
      } catch (e) {
        console.error('Failed to save bookmarks', e);
      }
      return next;
    });
  };

  // Record an incorrect question or timeout to Weakness Vault
  const handleRecordWeakness = (
    questionId: string,
    selectedOptionId: 'A' | 'B' | 'C' | 'D' | null
  ) => {
    addOrUpdateWeakness(questionId, selectedOptionId);
    setWeaknesses(getSavedWeaknesses());
  };

  // Remove mastered question from Weakness Vault
  const handleRemoveWeakness = (questionId: string) => {
    removeWeakness(questionId);
    setWeaknesses(getSavedWeaknesses());
  };

  // Clear all weaknesses
  const handleClearAll = () => {
    clearAllWeaknesses();
    setWeaknesses([]);
  };

  // Shuffle helper
  const shuffleArray = <T,>(arr: T[]): T[] => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  // Start exam with configuration
  const handleStartQuiz = ({
    mode,
    category,
    questionCount = 15,
    timePerQuestion: timeLimit = 25,
  }: {
    mode: 'sprint' | 'century' | 'category' | 'retest';
    category?: LipidCategory;
    questionCount?: number;
    timePerQuestion?: number;
  }) => {
    setTimePerQuestion(timeLimit);

    let selected: LipidQuestion[] = [];

    if (mode === 'century') {
      selected = shuffleArray(QUESTION_BANK);
    } else if (mode === 'category' && category) {
      const pool = QUESTION_BANK.filter((q) => q.category === category);
      selected = shuffleArray(pool).slice(0, questionCount);
    } else if (mode === 'retest') {
      const weaknessIds = new Set(weaknesses.map((w) => w.questionId));
      const pool = QUESTION_BANK.filter((q) => weaknessIds.has(q.id));
      selected = shuffleArray(pool);
    } else {
      // Sprint mode: diverse mix from all categories
      selected = shuffleArray(QUESTION_BANK).slice(0, questionCount);
    }

    if (selected.length === 0) {
      selected = shuffleArray(QUESTION_BANK).slice(0, 10);
    }

    setActiveQuizQuestions(selected);
    setActiveView('arena');
  };

  // Start retest with specific IDs
  const handleStartRetest = (questionIds: string[]) => {
    const idSet = new Set(questionIds);
    const pool = QUESTION_BANK.filter((q) => idSet.has(q.id));
    if (pool.length > 0) {
      setActiveQuizQuestions(shuffleArray(pool));
      setTimePerQuestion(25);
      setActiveView('arena');
    }
  };

  // Finish exam
  const handleFinishQuiz = (answers: QuizAnswer[]) => {
    setLastQuizAnswers(answers);

    // Build category map
    const categoryMap: Record<string, LipidCategory> = {};
    QUESTION_BANK.forEach((q) => {
      categoryMap[q.id] = q.category;
    });

    const updated = updateStatsWithQuiz(answers, categoryMap);
    setStats(updated);

    // If an answer was correct, remove it from weakness vault if it was in it
    answers.forEach((ans) => {
      if (ans.isCorrect) {
        removeWeakness(ans.questionId);
      }
    });
    setWeaknesses(getSavedWeaknesses());

    setActiveView('results');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] text-slate-900">
      <Navbar
        activeView={activeView}
        onNavigate={setActiveView}
        weaknessCount={weaknesses.length}
        onStartQuickSprint={() =>
          handleStartQuiz({ mode: 'sprint', questionCount: 15, timePerQuestion: 25 })
        }
        isQuizActive={activeQuizQuestions.length > 0 && activeView === 'arena'}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeView === 'dashboard' && (
          <Dashboard
            stats={stats}
            weaknesses={weaknesses}
            onStartQuiz={handleStartQuiz}
            onNavigateToBank={() => setActiveView('bank')}
            onNavigateToWeaknesses={() => setActiveView('weaknesses')}
          />
        )}

        {activeView === 'arena' && (
          <QuizArena
            questions={activeQuizQuestions}
            timePerQuestion={timePerQuestion}
            onFinishQuiz={handleFinishQuiz}
            onExitQuiz={() => setActiveView('dashboard')}
            onRecordWeakness={handleRecordWeakness}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {activeView === 'results' && (
          <QuizResults
            answers={lastQuizAnswers}
            onRetestMissed={() => {
              const missedIds = lastQuizAnswers
                .filter((a) => !a.isCorrect)
                .map((a) => a.questionId);
              handleStartRetest(missedIds);
            }}
            onStartNewSprint={() =>
              handleStartQuiz({ mode: 'sprint', questionCount: 15, timePerQuestion: 25 })
            }
            onNavigateToBank={() => setActiveView('bank')}
            onNavigateToWeaknesses={() => setActiveView('weaknesses')}
          />
        )}

        {activeView === 'weaknesses' && (
          <WeaknessDeck
            weaknesses={weaknesses}
            onStartRetest={handleStartRetest}
            onRemoveWeakness={handleRemoveWeakness}
            onClearAll={handleClearAll}
            onNavigateToBank={() => setActiveView('bank')}
          />
        )}

        {activeView === 'bank' && (
          <QuestionBankExplorer
            onStartQuizWithQuestions={(filtered) => {
              setActiveQuizQuestions(shuffleArray(filtered));
              setTimePerQuestion(25);
              setActiveView('arena');
            }}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
          />
        )}
      </main>

      {/* Clean Scientific Footer */}
      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">LipidIQ</span>
            <span aria-hidden="true">·</span>
            <span>100 Board-Style Clinical &amp; Biochemical Questions</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Fatty Acid Oxidation</span>
            <span aria-hidden="true">·</span>
            <span>Lipogenesis</span>
            <span aria-hidden="true">·</span>
            <span>Ketone Bodies</span>
            <span aria-hidden="true">·</span>
            <span>Lipoproteins</span>
            <span aria-hidden="true">·</span>
            <span>Sphingolipidoses</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
