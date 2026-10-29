export type LipidCategory =
  | 'Fatty Acid Oxidation'
  | 'Lipogenesis & TAGs'
  | 'Ketone Bodies'
  | 'Cholesterol & Steroids'
  | 'Plasma Lipoproteins'
  | 'Phospholipids & Sphingolipids';

export type QuestionDifficulty = 'Foundational' | 'Intermediate' | 'Advanced';

export type QuestionStyle =
  | 'clinical_vignette'
  | 'enzyme_mechanism'
  | 'energetics_calculation'
  | 'pharmacology'
  | 'pathology_match';

export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface LipidQuestion {
  id: string;
  category: LipidCategory;
  difficulty: QuestionDifficulty;
  style: QuestionStyle;
  vignette: string;
  options: QuestionOption[];
  correctAnswerId: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  keyEnzymeOrConcept: string;
  clinicalCorrelation?: string;
  highYieldFact?: string;
}

export interface QuizAnswer {
  questionId: string;
  selectedOptionId: 'A' | 'B' | 'C' | 'D' | null;
  isCorrect: boolean;
  timeSpentSeconds: number;
  timedOut?: boolean;
}

export interface WeaknessRecord {
  questionId: string;
  timesMissed: number;
  lastMissedAt: string;
  lastSelectedOptionId: 'A' | 'B' | 'C' | 'D' | null;
  mastered?: boolean;
}

export interface CategoryStat {
  answered: number;
  correct: number;
}

export interface StudentStats {
  totalAnswered: number;
  totalCorrect: number;
  totalTimeSeconds: number;
  categoryStats: Record<LipidCategory, CategoryStat>;
  testsCompleted: number;
  bestStreak: number;
}

export type ViewState = 'dashboard' | 'arena' | 'results' | 'weaknesses' | 'bank';
