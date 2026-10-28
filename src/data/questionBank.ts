import { LipidQuestion, LipidCategory } from '../types';
import { oxidationQuestions } from './questions/oxidation';
import { lipogenesisQuestions } from './questions/lipogenesis';
import { ketogenesisQuestions } from './questions/ketogenesis';
import { cholesterolQuestions } from './questions/cholesterol';
import { lipoproteinQuestions } from './questions/lipoproteins';
import { phospholipidQuestions } from './questions/phospholipids';

export const QUESTION_BANK: LipidQuestion[] = [
  ...oxidationQuestions,
  ...lipogenesisQuestions,
  ...ketogenesisQuestions,
  ...cholesterolQuestions,
  ...lipoproteinQuestions,
  ...phospholipidQuestions,
];

export const CATEGORIES: LipidCategory[] = [
  'Fatty Acid Oxidation',
  'Lipogenesis & TAGs',
  'Ketone Bodies',
  'Cholesterol & Steroids',
  'Plasma Lipoproteins',
  'Phospholipids & Sphingolipids',
];

export const CATEGORY_INFO: Record<
  LipidCategory,
  {
    shortName: string;
    description: string;
    keyPathways: string[];
    color: string;
  }
> = {
  'Fatty Acid Oxidation': {
    shortName: 'Beta-Oxidation',
    description: 'Mitochondrial beta-oxidation, carnitine shuttle, CPT-I/II, MCAD deficiency, and peroxisomal processing.',
    keyPathways: ['Carnitine Shuttle', 'MCAD', 'VLCFA Peroxisomes', 'Propionyl-CoA'],
    color: 'emerald',
  },
  'Lipogenesis & TAGs': {
    shortName: 'Lipogenesis',
    description: 'De novo fatty acid synthesis, citrate shuttle, ACC regulation, FAS complex, and adipose lipolysis.',
    keyPathways: ['ACC Allostery', 'Citrate Shuttle', 'FAS Domain', 'ATGL / HSL'],
    color: 'blue',
  },
  'Ketone Bodies': {
    shortName: 'Ketogenesis',
    description: 'Hepatic ketogenesis, mitochondrial HMG-CoA synthase, absence of SCOT, DKA, and starvation fuel kinetics.',
    keyPathways: ['HMG-CoA Synthase', 'SCOT Absence', 'Beta-OHB/AcAc Ratio', 'DKA Acidosis'],
    color: 'amber',
  },
  'Cholesterol & Steroids': {
    shortName: 'Cholesterol & Steroids',
    description: 'HMG-CoA reductase, SREBP-2/SCAP regulation, statin pharmacology, bile acids, and steroidogenesis.',
    keyPathways: ['HMG-CoA Reductase', 'SREBP-2', '7alpha-Hydroxylase', 'Desmolase CYP11A1'],
    color: 'indigo',
  },
  'Plasma Lipoproteins': {
    shortName: 'Lipoproteins',
    description: 'Chylomicrons, VLDL, LDL, HDL, ApoB-48/100, ApoC-II, ApoE, LCAT, CETP, PCSK9, and Fredrickson phenotypes.',
    keyPathways: ['ApoB-48 RNA Editing', 'Fredrickson Types I-V', 'LCAT / CETP', 'PCSK9 / LDLR'],
    color: 'violet',
  },
  'Phospholipids & Sphingolipids': {
    shortName: 'Phospholipids & Sphingolipids',
    description: 'Pulmonary surfactant (DPPC), Gaucher, Tay-Sachs, Niemann-Pick, Fabry, and arachidonic acid / COX pathway.',
    keyPathways: ['DPPC / NRDS', 'Gaucher vs Tay-Sachs', 'Niemann-Pick', 'COX-1/2 & PLA2'],
    color: 'rose',
  },
};
