import { WeaknessRecord, StudentStats, LipidCategory, QuizAnswer } from '../types';
import { CATEGORIES } from '../data/questionBank';

const WEAKNESSES_KEY = 'lipidiq_weaknesses_v1';
const STATS_KEY = 'lipidiq_stats_v1';

export function getSavedWeaknesses(): WeaknessRecord[] {
  try {
    const raw = localStorage.getItem(WEAKNESSES_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveWeaknesses(list: WeaknessRecord[]): void {
  try {
    localStorage.setItem(WEAKNESSES_KEY, JSON.stringify(list));
  } catch (err) {
    console.error('Failed to save weaknesses', err);
  }
}

export function addOrUpdateWeakness(
  questionId: string,
  selectedOptionId: 'A' | 'B' | 'C' | 'D' | null
): void {
  const current = getSavedWeaknesses();
  const existingIndex = current.findIndex((w) => w.questionId === questionId);

  if (existingIndex >= 0) {
    current[existingIndex].timesMissed += 1;
    current[existingIndex].lastMissedAt = new Date().toISOString();
    current[existingIndex].lastSelectedOptionId = selectedOptionId;
    current[existingIndex].mastered = false;
  } else {
    current.unshift({
      questionId,
      timesMissed: 1,
      lastMissedAt: new Date().toISOString(),
      lastSelectedOptionId: selectedOptionId,
      mastered: false,
    });
  }

  saveWeaknesses(current);
}

export function removeWeakness(questionId: string): void {
  const current = getSavedWeaknesses();
  const filtered = current.filter((w) => w.questionId !== questionId);
  saveWeaknesses(filtered);
}

export function clearAllWeaknesses(): void {
  saveWeaknesses([]);
}

export function getInitialStats(): StudentStats {
  const categoryStats: Record<LipidCategory, { answered: number; correct: number }> =
    CATEGORIES.reduce((acc, cat) => {
      acc[cat] = { answered: 0, correct: 0 };
      return acc;
    }, {} as Record<LipidCategory, { answered: number; correct: number }>);

  return {
    totalAnswered: 0,
    totalCorrect: 0,
    totalTimeSeconds: 0,
    categoryStats,
    testsCompleted: 0,
    bestStreak: 0,
  };
}

export function getSavedStats(): StudentStats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return getInitialStats();
    return JSON.parse(raw);
  } catch {
    return getInitialStats();
  }
}

export function updateStatsWithQuiz(
  answers: QuizAnswer[],
  categoryMap: Record<string, LipidCategory>
): StudentStats {
  const current = getSavedStats();
  let currentStreak = 0;
  let maxStreak = current.bestStreak;

  answers.forEach((ans) => {
    current.totalAnswered += 1;
    current.totalTimeSeconds += ans.timeSpentSeconds;

    if (ans.isCorrect) {
      current.totalCorrect += 1;
      currentStreak += 1;
      if (currentStreak > maxStreak) {
        maxStreak = currentStreak;
      }
    } else {
      currentStreak = 0;
    }

    const cat = categoryMap[ans.questionId];
    if (cat && current.categoryStats[cat]) {
      current.categoryStats[cat].answered += 1;
      if (ans.isCorrect) {
        current.categoryStats[cat].correct += 1;
      }
    }
  });

  current.bestStreak = maxStreak;
  current.testsCompleted += 1;

  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(current));
  } catch (err) {
    console.error('Failed to save stats', err);
  }

  return current;
}
