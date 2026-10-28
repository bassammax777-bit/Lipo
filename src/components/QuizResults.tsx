import React from 'react';
import { QuizAnswer, LipidCategory } from '../types';
import { QUESTION_BANK, CATEGORIES, CATEGORY_INFO } from '../data/questionBank';
import {
  Award,
  CheckCircle2,
  XCircle,
  Clock,
  Target,
  RotateCcw,
  BookOpen,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

interface QuizResultsProps {
  answers: QuizAnswer[];
  onRetestMissed: () => void;
  onStartNewSprint: () => void;
  onNavigateToBank: () => void;
  onNavigateToWeaknesses: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({
  answers,
  onRetestMissed,
  onStartNewSprint,
  onNavigateToBank,
  onNavigateToWeaknesses,
}) => {
  const total = answers.length;
  const correctCount = answers.filter((a) => a.isCorrect).length;
  const incorrectCount = total - correctCount;
  const scorePercent = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  const totalTimeSeconds = answers.reduce((acc, a) => acc + a.timeSpentSeconds, 0);
  const avgTimePerQuestion = total > 0 ? (totalTimeSeconds / total).toFixed(1) : '0.0';

  // Category breakdown for this session
  const questionMap = new Map(QUESTION_BANK.map((q) => [q.id, q]));

  const categoryBreakdown: Record<LipidCategory, { total: number; correct: number }> =
    CATEGORIES.reduce((acc, cat) => {
      acc[cat] = { total: 0, correct: 0 };
      return acc;
    }, {} as Record<LipidCategory, { total: number; correct: number }>);

  answers.forEach((ans) => {
    const q = questionMap.get(ans.questionId);
    if (q && categoryBreakdown[q.category]) {
      categoryBreakdown[q.category].total += 1;
      if (ans.isCorrect) {
        categoryBreakdown[q.category].correct += 1;
      }
    }
  });

  // Determine Student Level & Assessment
  let levelTitle = 'Emerging Biochemist';
  let levelDescription =
    'Foundational concepts need reinforcement. Focus on pathway rate-limiting enzymes and the Weakness Vault.';
  let levelBadgeColor = 'text-amber-700 bg-amber-50 border-amber-200';

  if (scorePercent >= 90) {
    levelTitle = 'Board Honors / Master Biochemist';
    levelDescription =
      'Exceptional performance! You demonstrated stellar clinical acumen and instantaneous recall across complex lipid pathways.';
    levelBadgeColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
  } else if (scorePercent >= 75) {
    levelTitle = 'Clinical Competency / High Pass';
    levelDescription =
      'Solid command of lipid biochemistry with fast analytical reflexes. Polish targeted enzyme cofactors to reach honors.';
    levelBadgeColor = 'text-blue-700 bg-blue-50 border-blue-200';
  } else if (scorePercent >= 60) {
    levelTitle = 'Intermediate Mastery';
    levelDescription =
      'Good baseline understanding, but several clinical vignettes and regulation steps require dedicated review.';
    levelBadgeColor = 'text-slate-700 bg-slate-100 border-slate-300';
  }

  // Identify lowest and highest category
  const categoriesWithQuestions = CATEGORIES.filter(
    (cat) => categoryBreakdown[cat].total > 0
  );

  let strongestCategory: { cat: LipidCategory; pct: number } | null = null;
  let weakestCategory: { cat: LipidCategory; pct: number } | null = null;

  for (const cat of categoriesWithQuestions) {
    const data = categoryBreakdown[cat];
    const pct = Math.round((data.correct / data.total) * 100);
    if (!strongestCategory || pct > strongestCategory.pct) {
      strongestCategory = { cat, pct };
    }
    if (!weakestCategory || pct < weakestCategory.pct) {
      weakestCategory = { cat, pct };
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Result Hero Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${levelBadgeColor}`}>
                {levelTitle}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-500 font-mono">
                {total} Questions Evaluated
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Exam Complete: Performance Diagnostics
            </h1>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
              {levelDescription}
            </p>
          </div>

          {/* Big Score Display */}
          <div className="flex flex-col items-center justify-center p-5 bg-slate-50 rounded-2xl border border-slate-200 shrink-0 min-w-[140px]">
            <div className="text-4xl font-extrabold text-slate-900 font-mono tabular-nums">
              {scorePercent}%
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              {correctCount} / {total} Correct
            </div>
          </div>
        </div>

        {/* Quick KPI Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-xs text-slate-500 mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Correct Answers</span>
            </div>
            <div className="text-xl font-bold text-slate-900 font-mono tabular-nums">
              {correctCount}
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-xs text-slate-500 mb-1 flex items-center gap-1.5">
              <XCircle className="w-3.5 h-3.5 text-rose-600" />
              <span>Incorrect / Missed</span>
            </div>
            <div className="text-xl font-bold text-slate-900 font-mono tabular-nums">
              {incorrectCount}
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-xs text-slate-500 mb-1 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>Avg Reaction Time</span>
            </div>
            <div className="text-xl font-bold text-slate-900 font-mono tabular-nums">
              {avgTimePerQuestion}s
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-xs text-slate-500 mb-1 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
              <span>Reflex Rating</span>
            </div>
            <div className="text-sm font-bold text-slate-800 font-mono">
              {parseFloat(avgTimePerQuestion) <= 10
                ? '⚡ Lightning'
                : parseFloat(avgTimePerQuestion) <= 18
                ? '⏱️ Swift'
                : '🎯 Methodical'}
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {incorrectCount > 0 && (
            <button
              onClick={onRetestMissed}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 active:bg-rose-800 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retest {incorrectCount} Missed Question{incorrectCount > 1 ? 's' : ''} Now</span>
            </button>
          )}

          <button
            onClick={onStartNewSprint}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <span>Start Fresh Sprint</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onNavigateToWeaknesses}
            className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
          >
            Open Weakness Vault
          </button>

          <button
            onClick={onNavigateToBank}
            className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
          >
            Browse 100-Question Bank
          </button>
        </div>
      </div>

      {/* Granular Pathway Mastery Radar / Breakdown */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Lipid Metabolic Pathway Analysis
          </h2>
          <p className="text-xs text-slate-500">
            Breakdown of your accuracy across the six core areas of lipid chemistry and metabolism.
          </p>
        </div>

        {/* Highlight Insights */}
        {(strongestCategory || weakestCategory) && (
          <div className="grid sm:grid-cols-2 gap-4">
            {strongestCategory && (
              <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                  Top Strength
                </span>
                <span className="text-sm font-bold text-emerald-950 block">
                  {strongestCategory.cat}
                </span>
                <span className="text-xs text-emerald-700 font-mono mt-0.5 block">
                  {strongestCategory.pct}% accuracy in this session
                </span>
              </div>
            )}

            {weakestCategory && (
              <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800 block mb-1">
                  Primary Focus Area
                </span>
                <span className="text-sm font-bold text-rose-950 block">
                  {weakestCategory.cat}
                </span>
                <span className="text-xs text-rose-700 font-mono mt-0.5 block">
                  {weakestCategory.pct}% accuracy · Recommended for targeted remediation
                </span>
              </div>
            )}
          </div>
        )}

        {/* Progress Bars for all tested categories */}
        <div className="space-y-4 pt-2">
          {categoriesWithQuestions.map((cat) => {
            const data = categoryBreakdown[cat];
            const pct = Math.round((data.correct / data.total) * 100);
            const info = CATEGORY_INFO[cat];

            return (
              <div key={cat} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800">{cat}</span>
                  <span className="font-mono text-slate-500">
                    {data.correct} / {data.total} ({pct}%)
                  </span>
                </div>

                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      pct >= 80
                        ? 'bg-emerald-600'
                        : pct >= 60
                        ? 'bg-blue-600'
                        : pct >= 40
                        ? 'bg-amber-500'
                        : 'bg-rose-500'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Review All Questions In This Session */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            Detailed Question-by-Question Review
          </h2>
          <span className="text-xs text-slate-500">
            {correctCount} correct · {incorrectCount} incorrect
          </span>
        </div>

        <div className="space-y-4 divide-y divide-slate-100">
          {answers.map((ans, idx) => {
            const q = questionMap.get(ans.questionId);
            if (!q) return null;

            return (
              <div key={ans.questionId} className={`pt-4 ${idx === 0 ? 'pt-0' : ''} space-y-2`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {ans.isCorrect ? (
                      <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Correct</span>
                      </span>
                    ) : ans.timedOut ? (
                      <span className="flex items-center gap-1 text-xs font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Timed Out</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Incorrect</span>
                      </span>
                    )}

                    <span className="text-xs text-slate-400 font-mono">
                      Q{idx + 1}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs text-slate-500">{q.category}</span>
                  </div>

                  <span className="text-xs font-mono text-slate-400">
                    {ans.timeSpentSeconds}s
                  </span>
                </div>

                <p className="text-sm text-slate-800 font-medium leading-relaxed">
                  {q.vignette}
                </p>

                <div className="text-xs space-y-1 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-slate-900">Your choice:</span>
                    <span className={ans.isCorrect ? 'text-emerald-700 font-semibold' : 'text-rose-600 font-semibold'}>
                      {ans.selectedOptionId ? (
                        <>Option {ans.selectedOptionId}: {q.options.find(o => o.id === ans.selectedOptionId)?.text}</>
                      ) : (
                        '(No answer selected - Timed out)'
                      )}
                    </span>
                  </div>

                  {!ans.isCorrect && (
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-emerald-900">Correct answer:</span>
                      <span className="text-emerald-800 font-medium">
                        Option {q.correctAnswerId}: {q.options.find(o => o.id === q.correctAnswerId)?.text}
                      </span>
                    </div>
                  )}

                  <div className="pt-1.5 text-slate-600 border-t border-slate-200/60 mt-1.5">
                    <strong>Mechanism:</strong> {q.explanation}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
