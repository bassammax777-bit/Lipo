import { LipidQuestion } from '../../types';

export const cholesterolQuestions: LipidQuestion[] = [
  {
    id: 'ch-53',
    category: 'Cholesterol & Steroids',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'What is the key rate-limiting and committed enzyme in cholesterol synthesis, which is targeted and competitively inhibited by statin drugs?',
    options: [
      { id: 'A', text: 'HMG-CoA reductase' },
      { id: 'B', text: 'Lipoprotein lipase' },
      { id: 'C', text: 'ATP-citrate lyase' },
      { id: 'D', text: 'Squalene synthase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'HMG-CoA reductase (HMGR) is the rate-limiting and committed enzyme in cholesterol biosynthesis. It converts HMG-CoA to Mevalonate using 2 NADPH. It is the target of statin medications (atorvastatin, rosuvastatin, simvastatin).',
    keyEnzymeOrConcept: 'HMG-CoA Reductase (HMGR)',
    clinicalCorrelation: 'Statins competitively inhibit HMGR, lowering intracellular cholesterol and causing hepatocytes to upregulate LDL receptors.',
    highYieldFact: 'HMGR is embedded in the smooth endoplasmic reticulum membrane.',
  },
  {
    id: 'ch-54',
    category: 'Cholesterol & Steroids',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'When intracellular cholesterol levels fall inside liver cells, which transcription factor is cleaved and sent to the nucleus to increase the synthesis of LDL receptors and HMG-CoA reductase?',
    options: [
      { id: 'A', text: 'SREBP-2' },
      { id: 'B', text: 'p53' },
      { id: 'C', text: 'NF-kappa-B' },
      { id: 'D', text: 'Estrogen receptor' },
    ],
    correctAnswerId: 'A',
    explanation:
      'SREBP-2 senses low cholesterol via SCAP, moves from the ER to the Golgi, and is cleaved by S1P/S2P proteases. Its active fragment travels to the nucleus to turn ON the transcription of both HMG-CoA reductase and the LDL receptor.',
    keyEnzymeOrConcept: 'SREBP-2 Regulation of Cholesterol & LDL Receptors',
    clinicalCorrelation: 'When statins lower hepatic cholesterol, SREBP-2 upregulates LDL receptors, which clear bad LDL cholesterol from the blood.',
    highYieldFact: 'High sterols keep SCAP anchored to Insig in the ER, preventing SREBP-2 activation.',
  },
  {
    id: 'ch-55',
    category: 'Cholesterol & Steroids',
    difficulty: 'Foundational',
    style: 'pharmacology',
    vignette:
      'How do statin drugs (e.g., Atorvastatin, Simvastatin) chemically interact with HMG-CoA reductase?',
    options: [
      { id: 'A', text: 'They act as competitive inhibitors by structurally mimicking the HMG-CoA intermediate' },
      { id: 'B', text: 'They destroy the liver cell membrane' },
      { id: 'C', text: 'They bind directly to DNA to block transcription' },
      { id: 'D', text: 'They inactivate insulin receptors' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Statins possess a dihydroxyheptanoic acid moiety that structurally resembles HMG-CoA. They bind directly into the catalytic site of HMG-CoA reductase as reversible, competitive inhibitors.',
    keyEnzymeOrConcept: 'Competitive Inhibition of HMGR by Statins',
    clinicalCorrelation: 'Common side effect: muscle aches (myopathy); rare risk of rhabdomyolysis.',
    highYieldFact: 'Taking statins in the evening or at bedtime was traditionally recommended because hepatic cholesterol synthesis peaks at night.',
  },
  {
    id: 'ch-56',
    category: 'Cholesterol & Steroids',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'During cholesterol synthesis, two 15-carbon Farnesyl Pyrophosphate (FPP) molecules condense together head-to-head. What 30-carbon intermediate is formed?',
    options: [
      { id: 'A', text: 'Squalene' },
      { id: 'B', text: 'Mevalonate' },
      { id: 'C', text: 'Citrate' },
      { id: 'D', text: 'Acetate' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Squalene synthase couples two 15-carbon Farnesyl Pyrophosphate (FPP) molecules head-to-head using NADPH to make 30-carbon Squalene, the first non-polar hydrocarbon in the pathway.',
    keyEnzymeOrConcept: 'Squalene Synthesis (15C + 15C → 30C)',
    clinicalCorrelation: 'Farnesyl pyrophosphate is also needed to make Coenzyme Q (ubiquinone) and for protein prenylation.',
    highYieldFact: 'Squalene is a linear triterpene that gets folded into rings in the next step.',
  },
  {
    id: 'ch-57',
    category: 'Cholesterol & Steroids',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'What is the first cyclic sterol intermediate in animal cholesterol synthesis that contains the 4-ring steroid nucleus?',
    options: [
      { id: 'A', text: 'Lanosterol' },
      { id: 'B', text: 'Palmitate' },
      { id: 'C', text: 'Glycerol' },
      { id: 'D', text: 'Pyruvate' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Oxidosqualene cyclase folds squalene epoxide into Lanosterol (30 carbons), the first molecule in the pathway possessing the characteristic 4-ring steroid nucleus.',
    keyEnzymeOrConcept: 'Lanosterol (First Steroid Ring Intermediate)',
    clinicalCorrelation: 'Lanosterol undergoes 19 further enzyme steps (removing 3 methyl groups) to become 27-carbon Cholesterol.',
    highYieldFact: 'In fungi, lanosterol is converted to ergosterol; antifungal azoles inhibit this step.',
  },
  {
    id: 'ch-58',
    category: 'Cholesterol & Steroids',
    difficulty: 'Intermediate',
    style: 'clinical_vignette',
    vignette:
      'Smith-Lemli-Opitz syndrome (SLOS) is an inherited disorder presenting with microcephaly, fused 2nd and 3rd toes (syndactyly), and low blood cholesterol. It is caused by a deficiency in which enzyme?',
    options: [
      { id: 'A', text: '7-Dehydrocholesterol reductase (DHCR7)' },
      { id: 'B', text: 'Pancreatic lipase' },
      { id: 'C', text: 'Lactase' },
      { id: 'D', text: 'Amylase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Smith-Lemli-Opitz syndrome is caused by deficiency of 7-Dehydrocholesterol Reductase (DHCR7), which catalyzes the final step of cholesterol synthesis. This results in toxic buildup of 7-dehydrocholesterol and lack of cholesterol.',
    keyEnzymeOrConcept: 'Smith-Lemli-Opitz Syndrome (DHCR7 Defect)',
    clinicalCorrelation: 'Cholesterol is needed for normal Sonic Hedgehog signaling during fetal limb and facial development.',
    highYieldFact: '7-Dehydrocholesterol in the skin is also converted to Vitamin D3 by sunlight (UVB).',
  },
  {
    id: 'ch-59',
    category: 'Cholesterol & Steroids',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'What is the rate-limiting and committed enzyme that converts cholesterol into bile acids in the liver?',
    options: [
      { id: 'A', text: 'Cholesterol 7alpha-hydroxylase (CYP7A1)' },
      { id: 'B', text: 'HMG-CoA synthase' },
      { id: 'C', text: 'Lipoprotein lipase' },
      { id: 'D', text: 'Alkaline phosphatase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Cholesterol 7alpha-hydroxylase (CYP7A1) is the rate-limiting enzyme in bile acid synthesis. It adds an -OH group at carbon 7 of cholesterol. It is inhibited by bile acids returning via the enterohepatic circulation.',
    keyEnzymeOrConcept: 'Cholesterol 7alpha-Hydroxylase (CYP7A1)',
    clinicalCorrelation: 'Making bile acids is the principal quantitative route for eliminating excess cholesterol from the body.',
    highYieldFact: 'Fibrate drugs inhibit CYP7A1, which can increase the risk of cholesterol gallstones.',
  },
  {
    id: 'ch-60',
    category: 'Cholesterol & Steroids',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'What are the two primary bile acids produced directly by the human liver from cholesterol?',
    options: [
      { id: 'A', text: 'Cholic acid and Chenodeoxycholic acid' },
      { id: 'B', text: 'Uric acid and Lactic acid' },
      { id: 'C', text: 'Hydrochloric acid and Acetic acid' },
      { id: 'D', text: 'Palmitic acid and Stearic acid' },
    ],
    correctAnswerId: 'A',
    explanation:
      'The liver synthesizes two primary bile acids: Cholic acid and Chenodeoxycholic acid. In the intestine, gut bacteria dehydroxylate them into secondary bile acids (deoxycholic acid and lithocholic acid).',
    keyEnzymeOrConcept: 'Primary Bile Acids (Cholic & Chenodeoxycholic Acids)',
    clinicalCorrelation: 'Before excretion into bile, primary bile acids are conjugated with Glycine or Taurine to make bile salts.',
    highYieldFact: 'Bile salts are amphipathic molecules that emulsify dietary fats into micelles.',
  },
  {
    id: 'ch-61',
    category: 'Cholesterol & Steroids',
    difficulty: 'Foundational',
    style: 'pharmacology',
    vignette:
      'Bile acid sequestrants like Cholestyramine and Colesevelam bind bile acids in the intestine and prevent them from being reabsorbed. How does this lower blood cholesterol?',
    options: [
      { id: 'A', text: 'The liver is forced to consume its own cholesterol to make new bile acids, causing it to pull more LDL out of the blood' },
      { id: 'B', text: 'They destroy all red blood cells' },
      { id: 'C', text: 'They block breathing' },
      { id: 'D', text: 'They directly digest arterial plaques' },
    ],
    correctAnswerId: 'A',
    explanation:
      'By blocking the reabsorption of bile acids in the ileum, bile acid sequestrants force the liver to convert more cholesterol into new bile acids. Falling liver cholesterol triggers upregulation of LDL receptors, which clear atherogenic LDL from circulation.',
    keyEnzymeOrConcept: 'Bile Acid Sequestrants Mechanism',
    clinicalCorrelation: 'Used to treat hypercholesterolemia, especially when statins are not tolerated.',
    highYieldFact: 'Over 95% of bile acids are normally reabsorbed in the terminal ileum (enterohepatic circulation).',
  },
  {
    id: 'ch-62',
    category: 'Cholesterol & Steroids',
    difficulty: 'Foundational',
    style: 'pharmacology',
    vignette:
      'Ezetimibe is a cholesterol-lowering pill that selectively blocks cholesterol absorption in the small intestine. Which intestinal brush-border transporter does it inhibit?',
    options: [
      { id: 'A', text: 'NPC1L1 (Niemann-Pick C1-Like 1)' },
      { id: 'B', text: 'SGLT-2' },
      { id: 'C', text: 'H+/K+ ATPase' },
      { id: 'D', text: 'Insulin receptor' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Ezetimibe inhibits the NPC1L1 cholesterol transporter located on the brush border of jejunal enterocytes, cutting dietary and biliary cholesterol absorption by about 50%.',
    keyEnzymeOrConcept: 'Ezetimibe Inhibits NPC1L1 Transporter',
    clinicalCorrelation: 'Commonly added to statin therapy to achieve an additional 15–20% reduction in LDL cholesterol.',
    highYieldFact: 'Does not affect the absorption of triglycerides, fat-soluble vitamins, or bile acids.',
  },
  {
    id: 'ch-63',
    category: 'Cholesterol & Steroids',
    difficulty: 'Foundational',
    style: 'pathology_match',
    vignette:
      'Cholesterol gallstones form in the gallbladder when cholesterol becomes insoluble. Which two components in bile normally keep cholesterol dissolved in liquid solution?',
    options: [
      { id: 'A', text: 'Bile salts and Phosphatidylcholine (Lecithin)' },
      { id: 'B', text: 'Albumin and Glucose' },
      { id: 'C', text: 'Uric acid and Calcium' },
      { id: 'D', text: 'Iron and Bilirubin' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Hydrophobic cholesterol is kept soluble in bile by forming mixed micelles with Bile Salts and Phosphatidylcholine (Lecithin). If cholesterol levels exceed the capacity of bile salts and lecithin, cholesterol precipitates into gallstones.',
    keyEnzymeOrConcept: 'Solubilization of Cholesterol in Bile (Bile Salts + Lecithin)',
    clinicalCorrelation: 'Risk factors for cholesterol gallstones: the 4 Fs (Female, Fat, Forty, Fertile) due to estrogen increasing cholesterol secretion into bile.',
    highYieldFact: 'Yellow-green stones are cholesterol stones; black stones are calcium bilirubinate (pigment stones).',
  },
  {
    id: 'ch-64',
    category: 'Cholesterol & Steroids',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Which intracellular enzyme esterifies excess free cholesterol into cholesteryl esters for safe storage inside cell lipid droplets?',
    options: [
      { id: 'A', text: 'ACAT (Acyl-CoA:cholesterol acyltransferase)' },
      { id: 'B', text: 'LCAT' },
      { id: 'C', text: 'Amylase' },
      { id: 'D', text: 'Lactate dehydrogenase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'ACAT (Acyl-CoA:cholesterol acyltransferase) is the intracellular enzyme that attaches a fatty acid to cholesterol, creating cholesteryl esters stored in cytosolic droplets. (In contrast, LCAT works in the extracellular blood plasma on HDL).',
    keyEnzymeOrConcept: 'ACAT (Intracellular) vs LCAT (Extracellular in Blood)',
    clinicalCorrelation: 'Excess unesterified free cholesterol is toxic to cell membranes; ACAT packages it into inert storage droplets.',
    highYieldFact: 'In atherosclerosis, macrophages use ACAT to store cholesterol, transforming into foam cells.',
  },
  {
    id: 'ch-65',
    category: 'Cholesterol & Steroids',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'In steroid hormone production (cortisol, aldosterone, testosterone), what is the first, rate-limiting enzyme that cleaves the side-chain of cholesterol to produce Pregnenolone?',
    options: [
      { id: 'A', text: 'Desmolase (CYP11A1 / Cholesterol side-chain cleavage enzyme)' },
      { id: 'B', text: 'Aromatase' },
      { id: 'C', text: '5-alpha reductase' },
      { id: 'D', text: 'Pepsin' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Cholesterol Desmolase (CYP11A1) in the inner mitochondrial membrane cleaves the 6-carbon side chain of 27-carbon cholesterol to form 21-carbon Pregnenolone, the parent molecule for all steroid hormones.',
    keyEnzymeOrConcept: 'Cholesterol Desmolase (CYP11A1)',
    clinicalCorrelation: 'ACTH stimulates cortisol production in the adrenal gland by activating Desmolase.',
    highYieldFact: 'Ketoconazole inhibits desmolase at high doses, sometimes used to treat Cushing syndrome.',
  },
  {
    id: 'ch-66',
    category: 'Cholesterol & Steroids',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'The 5-carbon active building blocks for all steroid and isoprenoid molecules in the body are:',
    options: [
      { id: 'A', text: 'Isopentenyl pyrophosphate (IPP) and Dimethylallyl pyrophosphate (DMAPP)' },
      { id: 'B', text: 'Glucose and Fructose' },
      { id: 'C', text: 'Glycine and Alanine' },
      { id: 'D', text: 'Urea and Ammonia' },
    ],
    correctAnswerId: 'A',
    explanation:
      'IPP and DMAPP are the active 5-carbon isoprene building blocks synthesized from mevalonate. They condense together in units of 5 carbons: 5C + 5C = 10C (geranyl), + 5C = 15C (farnesyl), 15C + 15C = 30C (squalene).',
    keyEnzymeOrConcept: '5-Carbon Active Isoprene Units (IPP and DMAPP)',
    clinicalCorrelation: 'Isoprenoids are also used to make Coenzyme Q10 and dolichol.',
    highYieldFact: 'Mevalonate is the 6-carbon precursor produced by HMG-CoA reductase.',
  },
  {
    id: 'ch-67',
    category: 'Cholesterol & Steroids',
    difficulty: 'Intermediate',
    style: 'pharmacology',
    vignette:
      'When cellular cholesterol levels are very high, how does the cell rapidly destroy existing HMG-CoA reductase enzymes to stop making more cholesterol?',
    options: [
      { id: 'A', text: 'Sterols bind Insig, which triggers ubiquitin tagging and proteasome degradation of HMG-CoA reductase' },
      { id: 'B', text: 'The cell vomits the enzyme into the bloodstream' },
      { id: 'C', text: 'The enzyme turns into glucose' },
      { id: 'D', text: 'DNA polymerase deletes the gene' },
    ],
    correctAnswerId: 'A',
    explanation:
      'High intracellular sterols cause Insig proteins to bind HMG-CoA reductase. This recruits ubiquitin ligases, tagging HMGR for rapid destruction in the proteasome, shutting off further synthesis.',
    keyEnzymeOrConcept: 'Feedback Proteasomal Degradation of HMG-CoA Reductase',
    clinicalCorrelation: 'Direct feedback mechanism ensuring cells do not overaccumulate toxic levels of cholesterol.',
    highYieldFact: 'Reduces the half-life of HMG-CoA reductase from >12 hours down to <1 hour.',
  },
  {
    id: 'ch-68',
    category: 'Cholesterol & Steroids',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'Why is cholesterol vital in the lipid bilayer of human cell membranes?',
    options: [
      { id: 'A', text: 'It modulates membrane fluidity, keeping membranes stable at high temperatures and flexible at low temperatures' },
      { id: 'B', text: 'It creates holes so cells leak' },
      { id: 'C', text: 'It turns cell membranes into rigid bone' },
      { id: 'D', text: 'It conducts electrical lightning' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Cholesterol acts as a membrane fluidity buffer: its rigid steroid rings prevent excessive fluidity at high body temperatures, while its presence prevents fatty acid tails from packing together tightly and freezing at cold temperatures.',
    keyEnzymeOrConcept: 'Cholesterol as a Membrane Fluidity Buffer',
    clinicalCorrelation: 'Essential for lipid rafts, caveolae, and receptor signaling on the plasma membrane.',
    highYieldFact: 'Bacteria generally lack cholesterol in their cell membranes (except Mycoplasma).',
  },
];
