import React, { useState } from 'react';
import { WeaknessRecord, LipidCategory } from '../types';
import { QUESTION_BANK, CATEGORIES } from '../data/questionBank';
import {
  Target,
  RotateCcw,
  Trash2,
  CheckCircle,
  Filter,
  Search,
  BookOpen,
  Zap,
} from 'lucide-react';

interface WeaknessDeckProps {
  weaknesses: WeaknessRecord[];
  onStartRetest: (questionIds: string[]) => void;
  onRemoveWeakness: (questionId: string) => void;
  onClearAll: () => void;
  onNavigateToBank: () => void;
}

export const WeaknessDeck: React.FC<WeaknessDeckProps> = ({
  weaknesses,
  onStartRetest,
  onRemoveWeakness,
  onClearAll,
  onNavigateToBank,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const questionMap = new Map(QUESTION_BANK.map((q) => [q.id, q]));

  // Filter weaknesses
  const filteredWeaknesses = weaknesses.filter((item) => {
    const q = questionMap.get(item.questionId);
    if (!q) return false;

    if (selectedCategory !== 'all' && q.category !== selectedCategory) {
      return false;
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchVignette = q.vignette.toLowerCase().includes(query);
      const matchEnzyme = q.keyEnzymeOrConcept.toLowerCase().includes(query);
      const matchExplanation = q.explanation.toLowerCase().includes(query);
      if (!matchVignette && !matchEnzyme && !matchExplanation) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-600 uppercase tracking-wider mb-1">
              <Target className="w-4 h-4" />
              <span>Targeted Remediation Vault</span>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Personal Weakness Review Deck
            </h1>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Every question you miss during exams is preserved here automatically. Drill these specific items repeatedly until you achieve 100% mastery.
            </p>
          </div>

          {weaknesses.length > 0 && (
            <button
              onClick={() => onStartRetest(filteredWeaknesses.map((w) => w.questionId))}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 active:bg-rose-800 rounded-xl shadow-sm transition-all whitespace-nowrap cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retest Filtered ({filteredWeaknesses.length})</span>
            </button>
          )}
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3 border-t border-slate-100">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by enzyme, disease, or symptom..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
              <option value="all">All Pathways ({weaknesses.length})</option>
              {CATEGORIES.map((cat) => {
                const count = weaknesses.filter(
                  (w) => questionMap.get(w.questionId)?.category === cat
                ).length;
                return (
                  <option key={cat} value={cat}>
                    {cat} ({count})
                  </option>
                );
              })}
            </select>

            {weaknesses.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-slate-400 hover:text-rose-600 px-2 py-2 flex items-center gap-1 transition-colors"
                title="Clear all saved weaknesses"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Clear All</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Empty State vs List */}
      {weaknesses.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 border border-slate-200 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8" />
          </div>
          <div className="space-y-1 max-w-md mx-auto">
            <h2 className="text-lg font-bold text-slate-900">
              Weakness Vault is Completely Clear!
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              You haven&apos;t logged any missed questions, or you&apos;ve successfully cleared them all. Take a fresh 25-second sprint to test your knowledge!
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={onNavigateToBank}
              className="px-5 py-2 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer"
            >
              Browse 100-Question Bank
            </button>
          </div>
        </div>
      ) : filteredWeaknesses.length === 0 ? (
        <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center space-y-3">
          <p className="text-sm text-slate-500">
            No saved weaknesses match your search criteria.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="text-xs text-blue-600 font-semibold hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredWeaknesses.map((item) => {
            const q = questionMap.get(item.questionId);
            if (!q) return null;

            return (
              <div
                key={item.questionId}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4 hover:border-slate-300 transition-all"
              >
                {/* Card Top: Category, Times Missed, Actions */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                      {q.category}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs text-rose-600 font-mono font-medium">
                      Missed {item.timesMissed} time{item.timesMissed > 1 ? 's' : ''}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onRemoveWeakness(q.id)}
                      className="text-xs text-slate-400 hover:text-emerald-600 flex items-center gap-1 px-2.5 py-1 rounded hover:bg-slate-50 transition-colors"
                      title="Mark as mastered and remove from weakness list"
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Mark Mastered</span>
                    </button>

                    <button
                      onClick={() => onStartRetest([q.id])}
                      className="text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 px-3 py-1 rounded-md transition-colors cursor-pointer"
                    >
                      Drill This Q
                    </button>
                  </div>
                </div>

                {/* Vignette */}
                <p className="text-sm sm:text-base text-slate-900 font-medium leading-relaxed">
                  {q.vignette}
                </p>

                {/* Options Review */}
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  {q.options.map((opt) => {
                    const isCorrect = opt.id === q.correctAnswerId;
                    const wasSelected = opt.id === item.lastSelectedOptionId;

                    let rowStyle = 'bg-slate-50 border-slate-200 text-slate-600';
                    if (isCorrect) {
                      rowStyle = 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold';
                    } else if (wasSelected) {
                      rowStyle = 'bg-rose-50 border-rose-300 text-rose-950';
                    }

                    return (
                      <div
                        key={opt.id}
                        className={`p-2.5 rounded-lg border flex items-start gap-2 ${rowStyle}`}
                      >
                        <span className="font-mono font-bold">{opt.id}.</span>
                        <span className="flex-1">{opt.text}</span>
                        {isCorrect && (
                          <span className="text-[10px] text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded font-bold uppercase">
                            Correct
                          </span>
                        )}
                        {wasSelected && !isCorrect && (
                          <span className="text-[10px] text-rose-700 bg-rose-100 px-1.5 py-0.5 rounded font-bold uppercase">
                            Your Choice
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation Box */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800 uppercase tracking-wider">
                    <Zap className="w-3.5 h-3.5 text-blue-600 fill-current" />
                    <span>Biochemical Breakdown</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{q.explanation}</p>

                  <div className="pt-2 border-t border-slate-200/70 flex flex-wrap gap-4 text-slate-600">
                    <div>
                      <strong>Enzyme / Target:</strong> {q.keyEnzymeOrConcept}
                    </div>
                    {q.clinicalCorrelation && (
                      <div>
                        <strong>Clinical Pearl:</strong> {q.clinicalCorrelation}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
