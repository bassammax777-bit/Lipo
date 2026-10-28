import React from 'react';
import { LipidCategory, StudentStats, WeaknessRecord } from '../types';
import { CATEGORIES, CATEGORY_INFO, QUESTION_BANK } from '../data/questionBank';
import { Zap, ShieldCheck, Target, Sparkles, Clock, CheckCircle2, ChevronRight, Award } from 'lucide-react';

interface DashboardProps {
  stats: StudentStats;
  weaknesses: WeaknessRecord[];
  onStartQuiz: (options: {
    mode: 'sprint' | 'century' | 'category' | 'retest';
    category?: LipidCategory;
    questionCount?: number;
    timePerQuestion?: number;
  }) => void;
  onNavigateToBank: () => void;
  onNavigateToWeaknesses: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  stats,
  weaknesses,
  onStartQuiz,
  onNavigateToBank,
  onNavigateToWeaknesses,
}) => {
  const accuracyPercent =
    stats.totalAnswered > 0
      ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100)
      : 0;

  const avgSpeed =
    stats.totalAnswered > 0
      ? (stats.totalTimeSeconds / stats.totalAnswered).toFixed(1)
      : '0.0';

  const bankCoverage = Math.min(
    100,
    Math.round((stats.totalAnswered / QUESTION_BANK.length) * 100)
  );

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Welcome & Quick Mission */}
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-300 uppercase mb-2">
            <span>USMLE &amp; Medical Biochemistry</span>
            <span aria-hidden="true">·</span>
            <span>Timed Clinical Exam Arena</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-3 text-balance">
            Master Lipid Metabolism &amp; Chemistry with Rapid-Fire Clinical Precision
          </h1>
          <p className="text-sm md:text-base text-slate-300 mb-6 leading-relaxed">
            Test your quick reflexes with high-yield board vignettes. Get immediate encouraging feedback on correct deductions, clear biochemical breakdowns on errors, and automatic weakness tracking.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onStartQuiz({ mode: 'sprint', questionCount: 15, timePerQuestion: 25 })}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl shadow transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>Start 25s Rapid Sprint (15 Qs)</span>
            </button>

            {weaknesses.length > 0 && (
              <button
                onClick={() => onStartQuiz({ mode: 'retest' })}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500 active:bg-rose-700 rounded-xl shadow transition-all cursor-pointer"
              >
                <Target className="w-4 h-4" />
                <span>Drill {weaknesses.length} Weakness{weaknesses.length > 1 ? 'es' : ''}</span>
              </button>
            )}

            <button
              onClick={() => onStartQuiz({ mode: 'century', questionCount: 100, timePerQuestion: 30 })}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-white/10 hover:bg-white/20 active:bg-white/25 rounded-xl border border-white/10 transition-all cursor-pointer"
            >
              <span>The 100-Question Century</span>
            </button>
          </div>
        </div>

        {/* Ambient subtle decorative element */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-blue-500/15 to-transparent pointer-events-none" />
      </div>

      {/* Metrics Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium mb-1 flex items-center justify-between">
            <span>Accuracy Rate</span>
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
            {accuracyPercent}%
          </div>
          <div className="text-xs text-slate-400 mt-1">
            {stats.totalCorrect} of {stats.totalAnswered} correct
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium mb-1 flex items-center justify-between">
            <span>Avg Response Speed</span>
            <Clock className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
            {avgSpeed}s
          </div>
          <div className="text-xs text-slate-400 mt-1">
            {parseFloat(avgSpeed) <= 12 && stats.totalAnswered > 0 ? '⚡ Rapid recall zone' : 'Target: < 15s per Q'}
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium mb-1 flex items-center justify-between">
            <span>Weakness Vault</span>
            <Target className="w-4 h-4 text-rose-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
            {weaknesses.length}
          </div>
          <div className="text-xs text-slate-400 mt-1">
            {weaknesses.length > 0 ? (
              <button
                onClick={onNavigateToWeaknesses}
                className="text-rose-600 hover:underline font-medium"
              >
                Review mistakes &rarr;
              </button>
            ) : (
              'All questions mastered!'
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium mb-1 flex items-center justify-between">
            <span>100-Bank Coverage</span>
            <Award className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
            {QUESTION_BANK.length} Qs
          </div>
          <div className="text-xs text-slate-400 mt-1">
            {stats.testsCompleted} test{stats.testsCompleted === 1 ? '' : 's'} completed
          </div>
        </div>
      </div>

      {/* Exam Modes Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900">Choose Exam Arena Mode</h2>
          <button
            onClick={onNavigateToBank}
            className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
          >
            <span>Explore 100-Question Bank</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Card 1: Rapid Recall Sprint */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Rapid Reflex Sprint
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                25 seconds per question. Measures presence of mind, instinctual enzyme recall, and diagnostic speed.
              </p>
              <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Speed bonuses for fast correct answers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Immediate diagnostic explanation on mistake</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => onStartQuiz({ mode: 'sprint', questionCount: 10, timePerQuestion: 25 })}
                className="flex-1 py-2 text-xs font-semibold bg-slate-100 hover:bg-blue-600 hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                10 Questions
              </button>
              <button
                onClick={() => onStartQuiz({ mode: 'sprint', questionCount: 20, timePerQuestion: 25 })}
                className="flex-1 py-2 text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
              >
                20 Questions
              </button>
            </div>
          </div>

          {/* Card 2: The 100 Century Challenge */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                The 100-Question Century
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                The complete comprehensive board exam covering every reaction, cofactor, apolipoprotein, and lysosomal storage disease.
              </p>
              <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Full curriculum coverage (100 distinct questions)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Detailed 6-pathway mastery radar report</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onStartQuiz({ mode: 'century', questionCount: 100, timePerQuestion: 30 })}
              className="w-full py-2.5 text-xs font-bold text-amber-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
            >
              Launch 100-Question Challenge
            </button>
          </div>

          {/* Card 3: Targeted Weakness Retest */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 hover:border-rose-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Weakness Remediation
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Focus strictly on your personal error bank. Every question you miss is automatically saved here until you master it.
              </p>
              <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{weaknesses.length} question{weaknesses.length === 1 ? '' : 's'} currently in vault</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Clears from weakness list once answered right</span>
                </div>
              </div>
            </div>

            <button
              disabled={weaknesses.length === 0}
              onClick={() => onStartQuiz({ mode: 'retest' })}
              className={`w-full py-2.5 text-xs font-bold rounded-lg transition-colors ${
                weaknesses.length > 0
                  ? 'bg-rose-600 text-white hover:bg-rose-700 cursor-pointer'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              {weaknesses.length > 0 ? `Retest Missed Questions (${weaknesses.length})` : 'No Missed Questions Yet'}
            </button>
          </div>
        </div>
      </div>

      {/* Pathway Deep Dives (6 Categories) */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Drill by Lipid Pathway</h2>
            <p className="text-xs text-slate-500">
              Select any specific biochemical discipline to test focused questions.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => {
            const info = CATEGORY_INFO[cat];
            const catStat = stats.categoryStats[cat];
            const catAccuracy =
              catStat && catStat.answered > 0
                ? Math.round((catStat.correct / catStat.answered) * 100)
                : null;
            const questionCount = QUESTION_BANK.filter((q) => q.category === cat).length;

            return (
              <div
                key={cat}
                className="bg-white rounded-xl p-4 border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-slate-900">{cat}</span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {questionCount} Qs
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mb-3 line-clamp-2">
                    {info.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {info.keyPathways.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-500">
                    {catAccuracy !== null ? (
                      <span className="font-mono font-semibold text-slate-700">
                        {catAccuracy}% mastery
                      </span>
                    ) : (
                      <span className="text-slate-400">Not started</span>
                    )}
                  </div>

                  <button
                    onClick={() =>
                      onStartQuiz({
                        mode: 'category',
                        category: cat,
                        questionCount: Math.min(questionCount, 15),
                        timePerQuestion: 25,
                      })
                    }
                    className="px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-lg transition-colors cursor-pointer"
                  >
                    Start Drill
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
