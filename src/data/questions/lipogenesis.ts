import { LipidQuestion } from '../../types';

export const lipogenesisQuestions: LipidQuestion[] = [
  {
    id: 'lg-21',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'What is the rate-limiting and committed enzyme in fatty acid synthesis (lipogenesis), which converts Acetyl-CoA into Malonyl-CoA?',
    options: [
      { id: 'A', text: 'Acetyl-CoA Carboxylase (ACC)' },
      { id: 'B', text: 'Fatty Acid Synthase (FAS)' },
      { id: 'C', text: 'Carnitine palmitoyltransferase I' },
      { id: 'D', text: 'Citrate synthase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Acetyl-CoA Carboxylase (ACC) is the primary rate-limiting and committed enzyme of lipogenesis. It carboxylates Acetyl-CoA into 3-carbon Malonyl-CoA using ATP and Biotin (Vitamin B7). It is allosterically activated by Citrate and inhibited by Palmitoyl-CoA.',
    keyEnzymeOrConcept: 'Acetyl-CoA Carboxylase (ACC)',
    clinicalCorrelation: 'Active in the well-fed state when high carbohydrates stimulate insulin.',
    highYieldFact: 'ACC uses biotin as a cofactor to transfer CO2.',
  },
  {
    id: 'lg-22',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Under which physiological condition is Acetyl-CoA Carboxylase (ACC) in its active, dephosphorylated form to synthesize fatty acids?',
    options: [
      { id: 'A', text: 'Well-fed state with high Insulin' },
      { id: 'B', text: 'Starvation with high Glucagon' },
      { id: 'C', text: 'Intense exercise with high Epinephrine' },
      { id: 'D', text: 'High cellular AMP levels' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Insulin activates Protein Phosphatase 1 (PP1), which dephosphorylates and activates ACC. Conversely, glucagon, epinephrine, and AMPK phosphorylate and inactivate ACC to preserve energy.',
    keyEnzymeOrConcept: 'Insulin Activation of ACC via Dephosphorylation',
    clinicalCorrelation: 'Lipogenesis is turned ON when well-fed (insulin) and turned OFF when fasting (glucagon/AMPK).',
    highYieldFact: 'Dephosphorylated = active (fed); Phosphorylated = inactive (fasted).',
  },
  {
    id: 'lg-23',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Acetyl-CoA is made inside mitochondria, but fatty acid synthesis occurs in the cytoplasm. Because Acetyl-CoA cannot cross the inner mitochondrial membrane, in what form does it exit into the cytoplasm?',
    options: [
      { id: 'A', text: 'Citrate (via the Citrate Shuttle)' },
      { id: 'B', text: 'Urea' },
      { id: 'C', text: 'Glycogen' },
      { id: 'D', text: 'Carnitine' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Mitochondrial Acetyl-CoA condenses with oxaloacetate to form Citrate. Citrate crosses into the cytoplasm, where ATP-citrate lyase cleaves it back into Acetyl-CoA and oxaloacetate for fatty acid synthesis.',
    keyEnzymeOrConcept: 'The Citrate Shuttle',
    clinicalCorrelation: 'High citrate signals an abundance of cellular energy, fueling lipogenesis.',
    highYieldFact: 'ATP-citrate lyase is the cytosolic enzyme that frees Acetyl-CoA from citrate.',
  },
  {
    id: 'lg-24',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Intermediate',
    style: 'energetics_calculation',
    vignette:
      'Synthesis of one 16-carbon Palmitate molecule by Fatty Acid Synthase requires 7 elongation rounds. How many molecules of NADPH reducing equivalents are consumed?',
    options: [
      { id: 'A', text: '14 NADPH (2 per round)' },
      { id: 'B', text: '2 NADPH' },
      { id: 'C', text: '7 NADPH' },
      { id: 'D', text: '28 NADPH' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Each of the 7 elongation cycles uses 2 reductive steps (ketoacyl-ACP reduction and enoyl-ACP reduction). Each step consumes 1 NADPH (2 per cycle). For 7 cycles: 7 × 2 = 14 NADPH.',
    keyEnzymeOrConcept: 'NADPH Stoichiometry in Palmitate Synthesis (14 NADPH)',
    clinicalCorrelation: 'Tissues actively synthesizing fat (liver, lactating breast) rely heavily on the Pentose Phosphate Pathway for NADPH.',
    highYieldFact: 'Each cycle reduces a carbonyl group to a fully saturated methylene group (-CH2-).',
  },
  {
    id: 'lg-25',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Which metabolic pathway is the primary cellular source of NADPH required to drive fatty acid and cholesterol synthesis?',
    options: [
      { id: 'A', text: 'Pentose Phosphate Pathway (G6PD reaction)' },
      { id: 'B', text: 'Anaerobic Glycolysis' },
      { id: 'C', text: 'Beta-oxidation' },
      { id: 'D', text: 'Urea cycle' },
    ],
    correctAnswerId: 'A',
    explanation:
      'The Pentose Phosphate Pathway (HMP shunt), catalyzed by Glucose-6-Phosphate Dehydrogenase (G6PD), produces the majority of cytosolic NADPH needed for reductive lipid synthesis.',
    keyEnzymeOrConcept: 'Pentose Phosphate Pathway as NADPH Source',
    clinicalCorrelation: 'A secondary source of NADPH in the liver is cytosolic Malic Enzyme (part of the citrate shuttle).',
    highYieldFact: 'NADH is used for ATP generation in mitochondria; NADPH is used for reductive biosynthesis and antioxidant defense.',
  },
  {
    id: 'lg-26',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'The Acyl Carrier Protein (ACP) domain of Fatty Acid Synthase carries growing fatty acid chains on a flexible arm made of 4\'-phosphopantetheine. Which B-vitamin is this arm derived from?',
    options: [
      { id: 'A', text: 'Pantothenic acid (Vitamin B5)' },
      { id: 'B', text: 'Vitamin B12' },
      { id: 'C', text: 'Folic acid' },
      { id: 'D', text: 'Vitamin B6' },
    ],
    correctAnswerId: 'A',
    explanation:
      'The 4\'-phosphopantetheine arm on ACP is derived from Pantothenic acid (Vitamin B5). It provides a flexible thiol (-SH) group that swings acyl intermediates between the active sites of Fatty Acid Synthase.',
    keyEnzymeOrConcept: 'Vitamin B5 & Phosphopantetheine on ACP',
    clinicalCorrelation: 'Vitamin B5 is also the essential component of Coenzyme A (CoA).',
    highYieldFact: 'Mnemonic: B5 = "panto-thenic" (Greek for "from everywhere" / ubiquitous).',
  },
  {
    id: 'lg-27',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Human Fatty Acid Synthase (FAS) is a multifunctional enzyme that terminates synthesis and releases the finished fatty acid when it reaches which chain length?',
    options: [
      { id: 'A', text: '16 carbons (Palmitate)' },
      { id: 'B', text: '6 carbons' },
      { id: 'C', text: '24 carbons' },
      { id: 'D', text: '30 carbons' },
    ],
    correctAnswerId: 'A',
    explanation:
      'The thioesterase domain of human Fatty Acid Synthase specifically fits a 16-carbon chain. Once palmitoyl-ACP is formed, it hydrolyzes the bond to release free Palmitic acid (16:0).',
    keyEnzymeOrConcept: 'Palmitate (16:0) as End Product of FAS',
    clinicalCorrelation: 'Any further elongation (to 18 carbons or longer) occurs in the endoplasmic reticulum.',
    highYieldFact: 'Palmitate is the most common saturated fatty acid in human body fat.',
  },
  {
    id: 'lg-28',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Why are Linoleic acid (omega-6) and Alpha-linolenic acid (omega-3) classified as "essential fatty acids" that must be eaten in the human diet?',
    options: [
      { id: 'A', text: 'Humans lack desaturase enzymes capable of placing double bonds beyond carbon 9' },
      { id: 'B', text: 'Humans cannot digest plant oils' },
      { id: 'C', text: 'They are only found in bacteria' },
      { id: 'D', text: 'They are toxic to liver cells' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Human desaturases in the ER can only insert double bonds up to carbon 9 (Δ9 desaturase). Humans cannot insert double bonds at carbon 12 or 15, making linoleic and alpha-linolenic acids essential dietary nutrients.',
    keyEnzymeOrConcept: 'Essential Fatty Acids (Omega-3 and Omega-6)',
    clinicalCorrelation: 'Dietary linoleic acid is elongated and desaturated to form Arachidonic acid (20:4) for prostaglandins.',
    highYieldFact: 'Deficiency causes scaly dermatitis, hair loss, and impaired wound healing.',
  },
  {
    id: 'lg-29',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Foundational',
    style: 'pathology_match',
    vignette:
      'To store fat as Triacylglycerols (TAGs), adipose tissue needs Glycerol-3-Phosphate. Because fat cells lack Glycerol Kinase, where do they get Glycerol-3-Phosphate from?',
    options: [
      { id: 'A', text: 'From Glucose through Glycolysis (via DHAP)' },
      { id: 'B', text: 'Directly from drinking water' },
      { id: 'C', text: 'From cholesterol breakdown' },
      { id: 'D', text: 'From lactic acid in muscles' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Adipocytes lack Glycerol Kinase (which the liver has) and cannot reuse free glycerol. Instead, adipocytes take up glucose via insulin-dependent GLUT4, perform glycolysis to make DHAP, and reduce it to Glycerol-3-Phosphate.',
    keyEnzymeOrConcept: 'Adipose Tissue Requires Glycolysis (DHAP) for TAG Storage',
    clinicalCorrelation: 'In untreated Type 1 Diabetes with no insulin, fat cells cannot take up glucose, cannot make TAG, and lose weight rapidly.',
    highYieldFact: 'The liver has glycerol kinase and can phosphorylate free glycerol in both fed and fasted states.',
  },
  {
    id: 'lg-30',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'What is the common branch-point lipid intermediate that can either be converted into Triacylglycerol (TAG) or into membrane Phospholipids?',
    options: [
      { id: 'A', text: 'Phosphatidic acid' },
      { id: 'B', text: 'Cholesterol' },
      { id: 'C', text: 'Glycogen' },
      { id: 'D', text: 'Bilirubin' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Phosphatidic acid (1,2-diacylglycerol phosphate) is the core branch point. Dephosphorylating it yields Diacylglycerol (DAG) for TAG synthesis, while adding CTP forms CDP-DAG for phospholipid synthesis.',
    keyEnzymeOrConcept: 'Phosphatidic Acid as Branch Point',
    clinicalCorrelation: 'Lipin-1 (phosphatidic acid phosphatase) controls the flow into storage TAG.',
    highYieldFact: 'DGAT catalyzes the final dedicated step of adding the 3rd fatty acid to form TAG.',
  },
  {
    id: 'lg-31',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'Which transcription factor is stimulated by insulin to upregulate the expression of lipogenic enzymes (ACC and FAS) in hepatocytes?',
    options: [
      { id: 'A', text: 'SREBP-1c' },
      { id: 'B', text: 'NF-kappa-B' },
      { id: 'C', text: 'p53' },
      { id: 'D', text: 'HIF-1alpha' },
    ],
    correctAnswerId: 'A',
    explanation:
      'SREBP-1c is the master transcription factor for fatty acid synthesis, stimulated by insulin. (In contrast, SREBP-2 specifically controls cholesterol synthesis and the LDL receptor).',
    keyEnzymeOrConcept: 'SREBP-1c for Fatty Acid Synthesis',
    clinicalCorrelation: 'Hyperinsulinemia in metabolic syndrome overactivates SREBP-1c, causing non-alcoholic fatty liver disease (NAFLD).',
    highYieldFact: 'SREBP-1c works alongside ChREBP (activated by high glucose).',
  },
  {
    id: 'lg-32',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'In fat cells, which lipase initiates the first and rate-limiting step of lipolysis by cleaving Triacylglycerol into Diacylglycerol?',
    options: [
      { id: 'A', text: 'Adipose Triglyceride Lipase (ATGL)' },
      { id: 'B', text: 'Pancreatic amylase' },
      { id: 'C', text: 'Lingual lipase' },
      { id: 'D', text: 'Phospholipase C' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Adipose Triglyceride Lipase (ATGL) catalyzes the initial, rate-limiting cleavage of TAG into DAG. Hormone-Sensitive Lipase (HSL) then cleaves DAG into MAG, and Monoacylglycerol Lipase (MGL) releases the final fatty acid.',
    keyEnzymeOrConcept: 'ATGL as Initial Rate-Limiting Lipase in Adipose',
    clinicalCorrelation: 'Perilipin phosphorylation by PKA allows CGI-58 to bind and activate ATGL during fasting.',
    highYieldFact: 'The lipolysis sequence is: ATGL (TAG → DAG) → HSL (DAG → MAG) → MGL (MAG → Glycerol).',
  },
  {
    id: 'lg-33',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Lipoprotein Lipase (LPL) on blood vessel walls breaks down triglycerides in chylomicrons and VLDL. Which apolipoprotein is the mandatory cofactor required to activate LPL?',
    options: [
      { id: 'A', text: 'Apolipoprotein C-II (ApoC-II)' },
      { id: 'B', text: 'Apolipoprotein A-I' },
      { id: 'C', text: 'Apolipoprotein B-48' },
      { id: 'D', text: 'Apolipoprotein (a)' },
    ],
    correctAnswerId: 'A',
    explanation:
      'ApoC-II is the required cofactor that activates Lipoprotein Lipase (LPL). Genetic deficiency of either LPL or ApoC-II prevents clearance of triglycerides, causing Familial Hyperchylomicronemia (Type I) with recurrent pancreatitis.',
    keyEnzymeOrConcept: 'ApoC-II Activates Lipoprotein Lipase (LPL)',
    clinicalCorrelation: 'Mnemonic: "C-II Cleaves triglycerides".',
    highYieldFact: 'Chylomicrons acquire ApoC-II from HDL in the bloodstream.',
  },
  {
    id: 'lg-34',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Foundational',
    style: 'pharmacology',
    vignette:
      'Orlistat is a weight-loss medication that inhibits pancreatic and gastric lipases in the gut. What is its main side effect and risk?',
    options: [
      { id: 'A', text: 'Steatorrhea (oily stools) and reduced absorption of fat-soluble vitamins (A, D, E, K)' },
      { id: 'B', text: 'High blood pressure and insomnia' },
      { id: 'C', text: 'Hyperglycemia' },
      { id: 'D', text: 'Severe iron overload' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Orlistat blocks pancreatic lipase, preventing ~30% of dietary fat from being digested. This causes oily stools (steatorrhea) and reduces absorption of fat-soluble vitamins (A, D, E, K), requiring multivitamin supplementation.',
    keyEnzymeOrConcept: 'Orlistat (Pancreatic Lipase Inhibitor)',
    clinicalCorrelation: 'Patients taking Orlistat should take a fat-soluble multivitamin at bedtime (separated from the drug).',
    highYieldFact: 'Unabsorbed fat in the gut can also bind calcium, increasing risk of kidney oxalate stones.',
  },
  {
    id: 'lg-35',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Brown adipose tissue generates body heat in newborns through non-shivering thermogenesis. Which mitochondrial protein uncouples electron transport from ATP synthesis to release energy as heat?',
    options: [
      { id: 'A', text: 'Thermogenin (UCP-1)' },
      { id: 'B', text: 'Complex I' },
      { id: 'C', text: 'Hexokinase' },
      { id: 'D', text: 'ATP synthase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Uncoupling Protein 1 (UCP-1 / Thermogenin) creates a leak in the inner mitochondrial membrane, allowing protons to flow back into the matrix without making ATP, dissipating the energy purely as Heat.',
    keyEnzymeOrConcept: 'UCP-1 / Thermogenin in Brown Adipose Tissue',
    clinicalCorrelation: 'Protects newborns from hypothermia in cold environments.',
    highYieldFact: 'Brown fat is rich in mitochondria, giving it its characteristic brown color.',
  },
  {
    id: 'lg-36',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'When fatty food enters the duodenum, which hormone is secreted by intestinal I-cells to cause the gallbladder to contract and empty bile?',
    options: [
      { id: 'A', text: 'Cholecystokinin (CCK)' },
      { id: 'B', text: 'Insulin' },
      { id: 'C', text: 'Glucagon' },
      { id: 'D', text: 'Thyroid hormone' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Cholecystokinin (CCK) is released in response to dietary fats and peptides. It causes gallbladder contraction (releasing bile), pancreatic enzyme secretion, and relaxation of the sphincter of Oddi.',
    keyEnzymeOrConcept: 'Cholecystokinin (CCK) Stimulates Gallbladder Contraction',
    clinicalCorrelation: 'Eating a fatty meal triggers biliary colic pain in patients with gallstones due to CCK-induced gallbladder contraction.',
    highYieldFact: 'CCK also slows gastric emptying to allow time for fat digestion in the small intestine.',
  },
  {
    id: 'lg-37',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Why can humans and animals NOT convert even-chain fatty acids into new glucose (gluconeogenesis)?',
    options: [
      { id: 'A', text: 'The Pyruvate Dehydrogenase reaction (Pyruvate → Acetyl-CoA) is completely irreversible' },
      { id: 'B', text: 'Fatty acids do not enter liver cells' },
      { id: 'C', text: 'Glucose cannot contain carbon atoms' },
      { id: 'D', text: 'Fatty acids are completely destroyed by stomach acid' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Pyruvate Dehydrogenase is completely irreversible; Acetyl-CoA cannot be turned back into Pyruvate. In the TCA cycle, the 2 carbons from Acetyl-CoA are released as 2 CO2, so there is zero net gain of carbons for gluconeogenesis.',
    keyEnzymeOrConcept: 'Irreversibility of Pyruvate Dehydrogenase',
    clinicalCorrelation: 'Fatty acids provide ATP to power gluconeogenesis during fasting, but amino acids and glycerol provide the actual glucose carbons.',
    highYieldFact: 'Glycerol from triglyceride breakdown CAN make glucose via glycerol kinase and DHAP.',
  },
  {
    id: 'lg-38',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Which vitamin acts as the essential coenzyme for Acetyl-CoA Carboxylase (ACC) to carry and add CO2?',
    options: [
      { id: 'A', text: 'Biotin (Vitamin B7)' },
      { id: 'B', text: 'Vitamin C' },
      { id: 'C', text: 'Vitamin A' },
      { id: 'D', text: 'Vitamin E' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Biotin (Vitamin B7) is the essential prosthetic group for carboxylase enzymes (Acetyl-CoA carboxylase, Pyruvate carboxylase, and Propionyl-CoA carboxylase), acting as a mobile carrier of activated carbon dioxide.',
    keyEnzymeOrConcept: 'Biotin (B7) in Carboxylation Reactions',
    clinicalCorrelation: 'Eating large amounts of raw egg whites (which contain avidin) binds biotin and causes deficiency.',
    highYieldFact: 'Carboxylation mnemonic: "ABC" (ATP, Biotin, CO2).',
  },
];
