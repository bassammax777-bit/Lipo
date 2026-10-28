import React from 'react';
import { ViewState } from '../types';
import { Activity, BookOpen, AlertCircle, Play } from 'lucide-react';

interface NavbarProps {
  activeView: ViewState;
  onNavigate: (view: ViewState) => void;
  weaknessCount: number;
  onStartQuickSprint: () => void;
  isQuizActive: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
  weaknessCount,
  onStartQuickSprint,
  isQuizActive,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('dashboard')}
          className="text-left group flex items-center gap-2.5 whitespace-nowrap shrink-0 focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
            L
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              LipidIQ
            </span>
            <span className="text-[10px] text-slate-400 font-medium -mt-1 tracking-wider uppercase">
              Biochemistry Exam Arena
            </span>
          </div>
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button
            onClick={() => onNavigate('dashboard')}
            className={`transition-colors hover:text-slate-900 whitespace-nowrap shrink-0 ${
              activeView === 'dashboard' ? 'text-blue-600 font-semibold' : ''
            }`}
          >
            Dashboard
          </button>

          {isQuizActive && (
            <button
              onClick={() => onNavigate('arena')}
              className={`flex items-center gap-1.5 transition-colors hover:text-slate-900 whitespace-nowrap shrink-0 ${
                activeView === 'arena' ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              <Activity className="w-4 h-4 text-emerald-500 animate-pulse" />
              <span>Live Exam</span>
            </button>
          )}

          <button
            onClick={() => onNavigate('weaknesses')}
            className={`flex items-center gap-1.5 transition-colors hover:text-slate-900 whitespace-nowrap shrink-0 ${
              activeView === 'weaknesses' ? 'text-blue-600 font-semibold' : ''
            }`}
          >
            <AlertCircle className="w-4 h-4 text-amber-500" />
            <span>Weakness Vault</span>
            {weaknessCount > 0 && (
              <span className="font-mono text-xs text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
                {weaknessCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onNavigate('bank')}
            className={`flex items-center gap-1.5 transition-colors hover:text-slate-900 whitespace-nowrap shrink-0 ${
              activeView === 'bank' ? 'text-blue-600 font-semibold' : ''
            }`}
          >
            <BookOpen className="w-4 h-4 text-slate-400" />
            <span>100-Question Bank</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onStartQuickSprint}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Quick 25s Sprint</span>
          </button>
        </div>
      </div>
    </header>
  );
};
