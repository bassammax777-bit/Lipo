import React, { useState } from 'react';
import { LipidQuestion, LipidCategory, QuestionDifficulty, QuestionStyle } from '../types';
import { QUESTION_BANK, CATEGORIES, CATEGORY_INFO } from '../data/questionBank';
import {
  BookOpen,
  Search,
  Filter,
  Eye,
  EyeOff,
  Play,
  Bookmark,
  BookmarkCheck,
  Zap,
} from 'lucide-react';

interface QuestionBankExplorerProps {
  onStartQuizWithQuestions: (questions: LipidQuestion[]) => void;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (questionId: string) => void;
}

export const QuestionBankExplorer: React.FC<QuestionBankExplorerProps> = ({
  onStartQuizWithQuestions,
  bookmarkedIds,
  onToggleBookmark,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set());
  const [revealAll, setRevealAll] = useState(false);

  const toggleReveal = (id: string) => {
    setRevealedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredQuestions = QUESTION_BANK.filter((q) => {
    if (selectedCategory !== 'all' && q.category !== selectedCategory) return false;
    if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;
    if (selectedStyle !== 'all' && q.style !== selectedStyle) return false;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchVignette = q.vignette.toLowerCase().includes(query);
      const matchEnzyme = q.keyEnzymeOrConcept.toLowerCase().includes(query);
      const matchExplanation = q.explanation.toLowerCase().includes(query);
      if (!matchVignette && !matchEnzyme && !matchExplanation) return false;
    }

    return true;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
              <BookOpen className="w-4 h-4" />
              <span>Full Curriculum Repository</span>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              100-Question Medical Bank Explorer
            </h1>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Untimed study deck covering all 100 high-yield questions. Review biochemical mechanisms, practice clinical vignettes, and test your knowledge.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setRevealAll(!revealAll)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              {revealAll ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{revealAll ? 'Hide All Solutions' : 'Reveal All Solutions'}</span>
            </button>

            <button
              disabled={filteredQuestions.length === 0}
              onClick={() => onStartQuizWithQuestions(filteredQuestions)}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm transition-all cursor-pointer disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Test This Filter ({filteredQuestions.length})</span>
            </button>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100 text-xs">
          {/* Search */}
          <div className="relative sm:col-span-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concepts..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>

          {/* Category */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          >
            <option value="all">All Pathways (100 Qs)</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat} ({QUESTION_BANK.filter((q) => q.category === cat).length})
              </option>
            ))}
          </select>

          {/* Difficulty */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          >
            <option value="all">All Difficulties</option>
            <option value="Foundational">Foundational / Easy (أسهل)</option>
            <option value="Intermediate">Intermediate (متوسط)</option>
          </select>

          {/* Question Style */}
          <select
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          >
            <option value="all">All Question Styles</option>
            <option value="clinical_vignette">Clinical Vignette</option>
            <option value="enzyme_mechanism">Enzyme Mechanism</option>
            <option value="energetics_calculation">Energetics Calculation</option>
            <option value="pharmacology">Pharmacology</option>
            <option value="pathology_match">Pathology Match</option>
          </select>
        </div>
      </div>

      {/* Questions Listing */}
      <div className="space-y-4">
        {filteredQuestions.map((q, index) => {
          const isRevealed = revealAll || revealedIds.has(q.id);
          const isBookmarked = bookmarkedIds.has(q.id);

          return (
            <div
              key={q.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4 hover:border-slate-300 transition-all"
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    #{index + 1}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    {q.category}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {q.style.replace('_', ' ')}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-[11px] text-slate-400">
                    {q.difficulty}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onToggleBookmark(q.id)}
                    className={`p-1.5 rounded transition-colors ${
                      isBookmarked
                        ? 'text-amber-600 bg-amber-50'
                        : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                    }`}
                    title={isBookmarked ? 'Bookmarked' : 'Add bookmark'}
                  >
                    {isBookmarked ? (
                      <BookmarkCheck className="w-4 h-4 fill-current" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    onClick={() => toggleReveal(q.id)}
                    className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-blue-600 bg-slate-50 hover:bg-slate-100 px-2.5 py-1 rounded transition-colors"
                  >
                    {isRevealed ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Hide Solution</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Reveal Solution</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Vignette */}
              <p className="text-sm sm:text-base text-slate-900 font-medium leading-relaxed">
                {q.vignette}
              </p>

              {/* Options */}
              <div className="grid sm:grid-cols-2 gap-2 text-xs">
                {q.options.map((opt) => {
                  const isCorrect = opt.id === q.correctAnswerId;

                  let style = 'bg-slate-50 border-slate-200 text-slate-700';
                  if (isRevealed && isCorrect) {
                    style = 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold';
                  }

                  return (
                    <div
                      key={opt.id}
                      className={`p-2.5 rounded-lg border flex items-start gap-2 ${style}`}
                    >
                      <span className="font-mono font-bold">{opt.id}.</span>
                      <span className="flex-1">{opt.text}</span>
                      {isRevealed && isCorrect && (
                        <span className="text-[10px] text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded font-bold uppercase">
                          Correct
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Solution breakdown (when revealed) */}
              {isRevealed && (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2 animate-in fade-in duration-200">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800 uppercase tracking-wider">
                    <Zap className="w-3.5 h-3.5 text-blue-600 fill-current" />
                    <span>Biochemical Explanation</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{q.explanation}</p>

                  <div className="pt-2 border-t border-slate-200/70 grid sm:grid-cols-2 gap-2 text-slate-600">
                    <div>
                      <strong>Target Concept:</strong> {q.keyEnzymeOrConcept}
                    </div>
                    {q.clinicalCorrelation && (
                      <div>
                        <strong>Clinical Pearl:</strong> {q.clinicalCorrelation}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
