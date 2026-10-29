import React, { useState, useEffect, useRef, useCallback } from 'react';
import { LipidQuestion, QuizAnswer } from '../types';
import {
  playSuccessChime,
  playErrorTone,
  playTickWarning,
  getRandomEncouragingMessage,
} from '../utils/audioAndFeedback';
import {
  Clock,
  TimerOff,
  Pause,
  Play,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  AlertTriangle,
  Sparkles,
  Zap,
} from 'lucide-react';

interface QuizArenaProps {
  questions: LipidQuestion[];
  timePerQuestion: number;
  initialTimerEnabled?: boolean;
  onFinishQuiz: (answers: QuizAnswer[]) => void;
  onExitQuiz: () => void;
  onRecordWeakness: (questionId: string, selectedOptionId: 'A' | 'B' | 'C' | 'D' | null) => void;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (questionId: string) => void;
}

export const QuizArena: React.FC<QuizArenaProps> = ({
  questions,
  timePerQuestion,
  initialTimerEnabled = false,
  onFinishQuiz,
  onExitQuiz,
  onRecordWeakness,
  bookmarkedIds,
  onToggleBookmark,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTimerEnabled, setIsTimerEnabled] = useState(initialTimerEnabled);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timePerQuestion);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isTimedOut, setIsTimedOut] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [praiseData, setPraiseData] = useState<{
    message: string;
    speedBadge: string;
    speedBonusPoints: number;
  } | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const currentQuestion = questions[currentIndex];
  const isBookmarked = currentQuestion ? bookmarkedIds.has(currentQuestion.id) : false;

  // Handle timeout
  const handleTimeout = useCallback(() => {
    if (isAnswered || !isTimerEnabled) return;
    setIsAnswered(true);
    setIsTimedOut(true);
    playErrorTone();

    const timeSpent = timePerQuestion;
    const answerRecord: QuizAnswer = {
      questionId: currentQuestion.id,
      selectedOptionId: null,
      isCorrect: false,
      timeSpentSeconds: timeSpent,
      timedOut: true,
    };

    setAnswers((prev) => [...prev, answerRecord]);
    onRecordWeakness(currentQuestion.id, null);
  }, [isAnswered, isTimerEnabled, currentQuestion, timePerQuestion, onRecordWeakness]);

  // Per-question countdown timer (runs only when isTimerEnabled and !isTimerPaused)
  useEffect(() => {
    if (isAnswered) return;

    setTimeLeft(timePerQuestion);
    startTimeRef.current = Date.now();

    if (!isTimerEnabled || isTimerPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeout();
          return 0;
        }
        if (prev === 6 || prev === 4 || prev === 2) {
          playTickWarning();
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isAnswered, isTimerEnabled, isTimerPaused, timePerQuestion, handleTimeout]);

  // Answer selection handler
  const handleSelectOption = (optionId: 'A' | 'B' | 'C' | 'D') => {
    if (isAnswered) return;

    if (timerRef.current) clearInterval(timerRef.current);

    const timeSpent = Math.max(1, Math.round((Date.now() - startTimeRef.current) / 1000));
    const isCorrect = optionId === currentQuestion.correctAnswerId;

    setSelectedOption(optionId);
    setIsAnswered(true);

    if (isCorrect) {
      playSuccessChime();
      const praise = getRandomEncouragingMessage(timeLeft);
      setPraiseData(praise);
    } else {
      playErrorTone();
      onRecordWeakness(currentQuestion.id, optionId);
    }

    const answerRecord: QuizAnswer = {
      questionId: currentQuestion.id,
      selectedOptionId: optionId,
      isCorrect,
      timeSpentSeconds: timeSpent,
      timedOut: false,
    };

    setAnswers((prev) => [...prev, answerRecord]);
  };

  // Next Question or Finish
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsTimedOut(false);
      setPraiseData(null);
    } else {
      onFinishQuiz(answers);
    }
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isAnswered) {
        if (e.key === '1' || e.key.toUpperCase() === 'A') handleSelectOption('A');
        if (e.key === '2' || e.key.toUpperCase() === 'B') handleSelectOption('B');
        if (e.key === '3' || e.key.toUpperCase() === 'C') handleSelectOption('C');
        if (e.key === '4' || e.key.toUpperCase() === 'D') handleSelectOption('D');
      } else {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  if (!currentQuestion) {
    return null;
  }

  // Timer visualization
  const timerPercentage = Math.max(0, Math.min(100, (timeLeft / timePerQuestion) * 100));
  const isUrgent = timeLeft <= 5 && !isAnswered;

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Top Header: Progress, Category, Timer Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold text-slate-500">
              Question {currentIndex + 1} of {questions.length}
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
              {currentQuestion.category}
            </span>
            <span className="hidden sm:inline-block text-slate-300">·</span>
            <span className="hidden sm:inline-block text-xs text-slate-400">
              {currentQuestion.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(currentQuestion.id)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                isBookmarked
                  ? 'text-amber-600 bg-amber-50 hover:bg-amber-100'
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
              }`}
              title={isBookmarked ? 'Remove bookmark' : 'Bookmark this question'}
            >
              {isBookmarked ? (
                <BookmarkCheck className="w-4 h-4 fill-current" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>

            {/* Exit button */}
            <button
              onClick={onExitQuiz}
              className="text-xs text-slate-400 hover:text-slate-600 hover:underline px-2 py-1"
            >
              Exit Exam
            </button>
          </div>
        </div>

        {/* Timer Control & Progress */}
        {!isTimerEnabled ? (
          <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs">
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <TimerOff className="w-4 h-4 text-emerald-600" />
              <span>المؤقت متوقف / Untimed Mode (Take your time)</span>
            </div>
            <button
              onClick={() => {
                setIsTimerEnabled(true);
                setIsTimerPaused(false);
                setTimeLeft(timePerQuestion);
              }}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 bg-white border border-slate-200 hover:border-blue-300 px-3 py-1 rounded-lg transition-colors cursor-pointer"
            >
              تشغيل المؤقت (Enable Timer)
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between text-xs font-mono font-semibold mb-1.5">
              <div className="flex items-center gap-2 text-slate-600">
                <Clock
                  className={`w-4 h-4 ${
                    isUrgent ? 'text-rose-600 animate-pulse' : 'text-blue-600'
                  }`}
                />
                <span>
                  {isTimerPaused ? 'المؤقت موقّف مؤقتاً (Paused)' : 'Reflex Countdown'}
                </span>
                <button
                  onClick={() => setIsTimerPaused(!isTimerPaused)}
                  className="text-[11px] font-sans font-medium text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded transition-colors cursor-pointer flex items-center gap-1"
                >
                  {isTimerPaused ? (
                    <>
                      <Play className="w-3 h-3 fill-current" />
                      <span>استئناف</span>
                    </>
                  ) : (
                    <>
                      <Pause className="w-3 h-3" />
                      <span>إيقاف مؤقت</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className={`tabular-nums text-sm font-bold ${
                    isUrgent ? 'text-rose-600 animate-bounce' : 'text-slate-800'
                  }`}
                >
                  {timeLeft}s
                </div>

                <button
                  onClick={() => {
                    setIsTimerEnabled(false);
                    if (timerRef.current) clearInterval(timerRef.current);
                  }}
                  className="text-[11px] font-sans font-medium text-rose-600 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 px-2 py-0.5 rounded transition-colors cursor-pointer flex items-center gap-1"
                  title="إيقاف المؤقت نهائياً"
                >
                  <TimerOff className="w-3 h-3" />
                  <span>إيقاف المؤقت (Turn Off)</span>
                </button>
              </div>
            </div>

            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-1000 ease-linear rounded-full ${
                  isTimerPaused
                    ? 'bg-slate-400'
                    : timeLeft > 10
                    ? 'bg-blue-600'
                    : timeLeft > 5
                    ? 'bg-amber-500'
                    : 'bg-rose-600'
                }`}
                style={{ width: `${timerPercentage}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        {/* Clinical Scenario / Vignette */}
        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Case Vignette &amp; Biochemical Scenario
          </div>
          <p className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed">
            {currentQuestion.vignette}
          </p>
        </div>

        {/* Options Grid (A, B, C, D) */}
        <div className="space-y-3 pt-2">
          {currentQuestion.options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            const isCorrect = opt.id === currentQuestion.correctAnswerId;

            let buttonStyle =
              'border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/40 text-slate-800';
            let badgeStyle = 'bg-slate-100 text-slate-600 border-slate-200';

            if (isAnswered) {
              if (isCorrect) {
                buttonStyle =
                  'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium shadow-xs';
                badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
              } else if (isSelected && !isCorrect) {
                buttonStyle =
                  'border-rose-400 bg-rose-50 text-rose-950';
                badgeStyle = 'bg-rose-600 text-white border-rose-600';
              } else {
                buttonStyle = 'border-slate-200 bg-slate-50/50 text-slate-400 opacity-60';
                badgeStyle = 'bg-slate-200 text-slate-400 border-slate-200';
              }
            }

            return (
              <button
                key={opt.id}
                disabled={isAnswered}
                onClick={() => handleSelectOption(opt.id)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-4 ${buttonStyle} ${
                  !isAnswered ? 'cursor-pointer active:scale-[0.99]' : 'cursor-default'
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-lg border font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${badgeStyle}`}
                >
                  {opt.id}
                </span>
                <span className="text-sm sm:text-base leading-snug pt-0.5 flex-1">
                  {opt.text}
                </span>

                {isAnswered && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Immediate Interactive Feedback Section */}
        {isAnswered && (
          <div className="pt-4 border-t border-slate-100 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {/* Encouraging Success Cheer OR Timeout/Incorrect Alert */}
            {selectedOption === currentQuestion.correctAnswerId ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 sm:p-5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 fill-current" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-emerald-900">
                      {praiseData?.message || 'Spot on deduction!'}
                    </span>
                    {praiseData?.speedBadge && (
                      <span className="text-[11px] font-mono font-medium text-emerald-800 bg-emerald-200/60 px-2 py-0.5 rounded">
                        {praiseData.speedBadge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-emerald-800">
                    Correct answer is <strong className="font-bold">Option {currentQuestion.correctAnswerId}</strong>.
                  </p>
                </div>
              </div>
            ) : isTimedOut ? (
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 sm:p-5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <span className="text-sm font-bold text-rose-900">
                    Time Expired! (Auto-saved to Weakness Vault)
                  </span>
                  <p className="text-xs text-rose-800">
                    The correct answer is{' '}
                    <strong className="font-bold underline">
                      Option {currentQuestion.correctAnswerId}:{' '}
                      {currentQuestion.options.find((o) => o.id === currentQuestion.correctAnswerId)?.text}
                    </strong>
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 sm:p-5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <span className="text-sm font-bold text-rose-900">
                    Incorrect — Saved to Weakness Vault for targeted review
                  </span>
                  <p className="text-xs text-rose-800">
                    The correct answer is{' '}
                    <strong className="font-bold underline">
                      Option {currentQuestion.correctAnswerId}:{' '}
                      {currentQuestion.options.find((o) => o.id === currentQuestion.correctAnswerId)?.text}
                    </strong>
                  </p>
                </div>
              </div>
            )}

            {/* High-Yield Biochemical Explanation Card */}
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-blue-600 fill-current" />
                <span>Biochemical Mechanism &amp; Rationale</span>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {currentQuestion.explanation}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="font-semibold text-slate-900 block mb-0.5">
                    Key Enzyme / Concept:
                  </span>
                  <span className="text-slate-600">{currentQuestion.keyEnzymeOrConcept}</span>
                </div>

                {currentQuestion.clinicalCorrelation && (
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                    <span className="font-semibold text-slate-900 block mb-0.5">
                      Clinical Correlation:
                    </span>
                    <span className="text-slate-600">{currentQuestion.clinicalCorrelation}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Next / Complete Button */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <span className="text-xs text-slate-400 hidden sm:inline">
                Press <kbd className="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200 font-mono">Enter</kbd> or <kbd className="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200 font-mono">Space</kbd> for next
              </span>
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>
                  {currentIndex < questions.length - 1 ? 'Next Question' : 'View Final Analysis'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
