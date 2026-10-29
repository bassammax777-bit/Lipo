import { LipidQuestion } from '../../types';

export const lipoproteinQuestions: LipidQuestion[] = [
  {
    id: 'lp-69',
    category: 'Plasma Lipoproteins',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Apolipoprotein B exists as two forms: ApoB-100 made by the liver and ApoB-48 made by the intestine. What RNA modification creates the shorter ApoB-48 in the intestine?',
    options: [
      { id: 'A', text: 'RNA editing (cytidine deamination) introducing a premature stop codon' },
      { id: 'B', text: 'DNA deletion of half the gene' },
      { id: 'C', text: 'Protein digestion by stomach pepsin' },
      { id: 'D', text: 'Alternative translation on ribosomes' },
    ],
    correctAnswerId: 'A',
    explanation:
      'In intestinal cells, the enzyme APOBEC-1 deaminates a Cytidine (C) to Uridine (U) in the mRNA, changing a CAA (glutamine) codon to a UAA Stop codon. This produces ApoB-48 (exactly 48% of the full-length protein), which is packaged exclusively into dietary chylomicrons.',
    keyEnzymeOrConcept: 'ApoB-48 RNA Editing (APOBEC-1)',
    clinicalCorrelation: 'ApoB-48 = intestine (chylomicrons); ApoB-100 = liver (VLDL, IDL, LDL).',
    highYieldFact: 'Because ApoB-48 lacks the LDL receptor-binding domain, chylomicron remnants rely on ApoE for liver clearance.',
  },
  {
    id: 'lp-70',
    category: 'Plasma Lipoproteins',
    difficulty: 'Foundational',
    style: 'pathology_match',
    vignette:
      'Which apolipoprotein on the surface of "good" High-Density Lipoprotein (HDL) activates Lecithin-Cholesterol Acyltransferase (LCAT) to convert free cholesterol into cholesteryl esters?',
    options: [
      { id: 'A', text: 'Apolipoprotein A-I (ApoA-I)' },
      { id: 'B', text: 'Apolipoprotein B-100' },
      { id: 'C', text: 'Apolipoprotein C-II' },
      { id: 'D', text: 'Apolipoprotein (a)' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Apolipoprotein A-I (ApoA-I) is the primary structural protein of HDL. It activates LCAT in blood plasma, which esterifies cholesterol so it can be tucked into the core of HDL for reverse cholesterol transport back to the liver.',
    keyEnzymeOrConcept: 'ApoA-I Activates LCAT on HDL',
    clinicalCorrelation: 'High HDL and ApoA-I levels are cardioprotective and reduce coronary artery disease risk.',
    highYieldFact: 'Mnemonic: "Apo A-1 = Activates LCAT on HDL".',
  },
  {
    id: 'lp-71',
    category: 'Plasma Lipoproteins',
    difficulty: 'Intermediate',
    style: 'clinical_vignette',
    vignette:
      'A patient presents with enlarged orange-yellow tonsils, hepatosplenomegaly, and almost zero circulating HDL cholesterol in the blood. What genetic transport defect causes Tangier disease?',
    options: [
      { id: 'A', text: 'ABCA1 transporter deficiency' },
      { id: 'B', text: 'LDL receptor deficiency' },
      { id: 'C', text: 'Insulin receptor mutation' },
      { id: 'D', text: 'Pancreatic amylase deficiency' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Tangier disease is caused by mutations in the ABCA1 transporter. Without ABCA1, peripheral cells cannot efflux cholesterol to lipid-free ApoA-I to create nascent HDL. ApoA-I is rapidly destroyed in the kidneys, leaving almost no blood HDL and trapping cholesteryl esters in macrophages (orange tonsils).',
    keyEnzymeOrConcept: 'Tangier Disease (ABCA1 Defect)',
    clinicalCorrelation: 'Classic sign: large, yellow-orange tonsils and extremely low HDL (< 5 mg/dL).',
    highYieldFact: 'ABCA1 is essential for the first step of reverse cholesterol transport.',
  },
  {
    id: 'lp-72',
    category: 'Plasma Lipoproteins',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'A 30-year-old male has firm nodular deposits on his Achilles tendons (tendon xanthomas), premature coronary artery disease, and an LDL cholesterol of 320 mg/dL. His father died of a heart attack at 40. What is the most common cause of Familial Hypercholesterolemia (Type IIa)?',
    options: [
      { id: 'A', text: 'Defective or absent LDL Receptors' },
      { id: 'B', text: 'Lack of vitamin C' },
      { id: 'C', text: 'Excess pancreatic lipase' },
      { id: 'D', text: 'Lack of stomach acid' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Familial Hypercholesterolemia (Type IIa) is an autosomal dominant disorder caused by mutations in the LDL Receptor gene (LDLR). Without functional LDL receptors, hepatocytes cannot remove LDL from the blood, causing severe hypercholesterolemia, tendon xanthomas (especially Achilles tendon), and early heart attacks.',
    keyEnzymeOrConcept: 'Familial Hypercholesterolemia (LDL Receptor Defect)',
    clinicalCorrelation: 'Tendon xanthomas and corneal arcus in a young person are hallmark signs of familial hypercholesterolemia.',
    highYieldFact: 'Heterozygotes have 1 in 250 prevalence; homozygotes can have heart attacks in childhood.',
  },
  {
    id: 'lp-73',
    category: 'Plasma Lipoproteins',
    difficulty: 'Intermediate',
    style: 'clinical_vignette',
    vignette:
      'A patient has yellowish-orange lipid deposits in the creases of their palms (palmar xanthomas) and roughly equal elevations in both blood cholesterol and triglycerides. Genetic testing reveals an ApoE2/E2 homozygous genotype. What is this disorder?',
    options: [
      { id: 'A', text: 'Familial Dysbetalipoproteinemia (Type III)' },
      { id: 'B', text: 'Type I hyperchylomicronemia' },
      { id: 'C', text: 'Abetalipoproteinemia' },
      { id: 'D', text: 'Tangier disease' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Familial Dysbetalipoproteinemia (Type III) is caused by ApoE2/E2 homozygosity. ApoE2 binds poorly to hepatic clearance receptors, causing remnant particles (chylomicron remnants and IDL / beta-VLDL) to accumulate. Hallmark sign: palmar xanthomas (xanthoma striatum palmare).',
    keyEnzymeOrConcept: 'Type III Dysbetalipoproteinemia (ApoE2/E2)',
    clinicalCorrelation: 'Palmar crease xanthomas are virtually pathognomonic for Type III hyperlipoproteinemia.',
    highYieldFact: 'ApoE3 is normal; ApoE2 has defective binding; ApoE4 is linked to Alzheimer disease risk.',
  },
  {
    id: 'lp-74',
    category: 'Plasma Lipoproteins',
    difficulty: 'Foundational',
    style: 'pathology_match',
    vignette:
      'A blood tube drawn after an overnight fast is placed in a refrigerator at 4°C overnight. The next morning, a thick creamy white layer is seen floating on top of clear serum. Which lipoprotein particle floats to the top?',
    options: [
      { id: 'A', text: 'Chylomicrons (Type I hyperlipidemia)' },
      { id: 'B', text: 'LDL' },
      { id: 'C', text: 'HDL' },
      { id: 'D', text: 'Albumin' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Chylomicrons have the lowest density (< 0.95 g/mL) because they are >85% triglycerides. In the standing refrigeration test, chylomicrons float to form a creamy white top layer. Finding chylomicrons after a 12-hour fast indicates Type I hyperchylomicronemia.',
    keyEnzymeOrConcept: 'Refrigerated Standing Plasma Test for Chylomicrons',
    clinicalCorrelation: 'Normal fasting serum should contain ZERO chylomicrons.',
    highYieldFact: 'If the serum below the cream is milky/turbid, VLDL is also elevated (Type V).',
  },
  {
    id: 'lp-75',
    category: 'Plasma Lipoproteins',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'What is the function of Cholesteryl Ester Transfer Protein (CETP) in the bloodstream?',
    options: [
      { id: 'A', text: 'Transfers cholesteryl esters from HDL to VLDL/LDL in exchange for triglycerides' },
      { id: 'B', text: 'Destroys all cholesterol in the body' },
      { id: 'C', text: 'Helps digest food in the mouth' },
      { id: 'D', text: 'Transports oxygen in erythrocytes' },
    ],
    correctAnswerId: 'A',
    explanation:
      'CETP exchanges neutral lipids between lipoproteins: it moves cholesteryl esters from HDL onto ApoB-containing particles (VLDL/LDL) in exchange for triglycerides. Inhibiting CETP raises HDL cholesterol.',
    keyEnzymeOrConcept: 'CETP Neutral Lipid Exchange',
    clinicalCorrelation: 'Patients with genetic CETP deficiency have naturally high HDL levels.',
    highYieldFact: 'CETP connects the metabolism of HDL with VLDL and LDL in blood plasma.',
  },
  {
    id: 'lp-76',
    category: 'Plasma Lipoproteins',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'An infant has severe fat malabsorption, failure to thrive, ataxia, and thorny-looking red blood cells (acanthocytes/spur cells) on a blood smear. Blood lipid panel shows total cholesterol < 30 mg/dL and zero detectable ApoB lipoproteins (no chylomicrons, no VLDL, no LDL). What is the defect in Abetalipoproteinemia?',
    options: [
      { id: 'A', text: 'Microsomal Triglyceride Transfer Protein (MTTP) mutation' },
      { id: 'B', text: 'Stomach ulcer' },
      { id: 'C', text: 'Lack of vitamin C' },
      { id: 'D', text: 'Excess insulin' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Abetalipoproteinemia is an autosomal recessive mutation in the MTTP gene. MTTP is needed to load lipids onto ApoB-48 and ApoB-100. Without MTTP, the body cannot assemble or secrete any chylomicrons, VLDL, or LDL, causing fat/vitamin E malabsorption and thorny acanthocytes.',
    keyEnzymeOrConcept: 'Abetalipoproteinemia (MTTP Defect)',
    clinicalCorrelation: 'Treated with large oral doses of Vitamin E to prevent neuromuscular and retinal degeneration.',
    highYieldFact: 'Enterocyte biopsy shows intestinal mucosal cells packed with trapped lipid droplets.',
  },
  {
    id: 'lp-77',
    category: 'Plasma Lipoproteins',
    difficulty: 'Foundational',
    style: 'pharmacology',
    vignette:
      'PCSK9 inhibitor drugs (e.g., Evolocumab, Alirocumab) lower bad LDL cholesterol by 50-60%. How do they work?',
    options: [
      { id: 'A', text: 'They prevent PCSK9 from degrading LDL receptors, allowing receptors to recycle repeatedly to clear LDL from the blood' },
      { id: 'B', text: 'They destroy all fats in the gut' },
      { id: 'C', text: 'They inactivate all cholesterol genes' },
      { id: 'D', text: 'They stimulate bile vomiting' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Normally, PCSK9 binds LDL receptors and targets them for destruction in lysosomes. Monoclonal antibodies against PCSK9 prevent this destruction, allowing LDL receptors to recycle back to the hepatocyte surface up to 100 times to pull LDL out of the blood.',
    keyEnzymeOrConcept: 'PCSK9 Inhibitors Preserve LDL Receptor Recycling',
    clinicalCorrelation: 'PCSK9 inhibitors are powerful injectable drugs that dramatically lower LDL-C in high-risk cardiac patients.',
    highYieldFact: 'Inclisiran is an siRNA that shuts off PCSK9 production at the mRNA level.',
  },
  {
    id: 'lp-78',
    category: 'Plasma Lipoproteins',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Which scavenger receptor on liver cells binds mature HDL and takes up its cholesteryl esters without destroying the HDL particle?',
    options: [
      { id: 'A', text: 'Scavenger Receptor Class B Type 1 (SR-B1)' },
      { id: 'B', text: 'Amylase receptor' },
      { id: 'C', text: 'Thyroid receptor' },
      { id: 'D', text: 'GLUT1 receptor' },
    ],
    correctAnswerId: 'A',
    explanation:
      'SR-B1 on hepatocytes binds HDL and selectively takes up cholesteryl esters for bile acid synthesis, releasing the depleted HDL particle back into circulation to pick up more peripheral cholesterol.',
    keyEnzymeOrConcept: 'SR-B1 Receptor Mediates Selective HDL Uptake',
    clinicalCorrelation: 'Completes the final step of reverse cholesterol transport (carrying cholesterol from tissues back to the liver).',
    highYieldFact: 'Steroidogenic tissues (adrenals and ovaries) also express SR-B1 to obtain cholesterol for hormone synthesis.',
  },
  {
    id: 'lp-79',
    category: 'Plasma Lipoproteins',
    difficulty: 'Intermediate',
    style: 'pathology_match',
    vignette:
      'Lipoprotein(a) [Lp(a)] is an inherited risk factor for heart attacks and aortic stenosis. Why does its unique Apolipoprotein(a) protein promote blood clots?',
    options: [
      { id: 'A', text: 'It structurally mimics Plasminogen, competitively blocking clot breakdown (fibrinolysis)' },
      { id: 'B', text: 'It activates stomach pepsin' },
      { id: 'C', text: 'It creates holes in erythrocytes' },
      { id: 'D', text: 'It lowers body temperature' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Apolipoprotein(a) shares strong structural similarity with Plasminogen. It competes with plasminogen for binding to fibrin clots, inhibiting clot lysis (antifibrinolytic / prothrombotic effect) while also delivering atherogenic lipids to arterial walls.',
    keyEnzymeOrConcept: 'Lipoprotein(a) Mimics Plasminogen',
    clinicalCorrelation: 'Lp(a) levels are largely determined by genetics and do not respond strongly to lifestyle or standard statin doses.',
    highYieldFact: 'Lp(a) consists of an LDL particle covalently linked by a disulfide bridge to Apo(a).',
  },
  {
    id: 'lp-80',
    category: 'Plasma Lipoproteins',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'In the development of atherosclerosis (clogged arteries), what modification must LDL undergo inside the arterial wall before macrophages engulf it to turn into "foam cells"?',
    options: [
      { id: 'A', text: 'Oxidation (Oxidized LDL)' },
      { id: 'B', text: 'Phosphorylation' },
      { id: 'C', text: 'Digestion by saliva' },
      { id: 'D', text: 'Freezing' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Trapped LDL in the artery wall undergoes Oxidation. Macrophage scavenger receptors (SR-A, CD36) rapidly engulf oxidized LDL (Ox-LDL) without any feedback shut-off, filling with lipid droplets and becoming "foam cells" that form atherosclerotic plaques.',
    keyEnzymeOrConcept: 'Oxidized LDL (Ox-LDL) & Foam Cell Formation',
    clinicalCorrelation: 'Atherosclerosis begins with fatty streaks made of subendothelial foam cells.',
    highYieldFact: 'Normal LDL receptors are feedback-downregulated by cholesterol, but scavenger receptors never shut off.',
  },
  {
    id: 'lp-81',
    category: 'Plasma Lipoproteins',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'A patient with a fasting triglyceride level over 2,000 mg/dL presents with severe abdominal pain radiating to the back (acute pancreatitis) and tiny yellow bumps on their skin (eruptive xanthomas). Which lipoprotein condition is this?',
    options: [
      { id: 'A', text: 'Type I Hyperchylomicronemia (deficiency of LPL or ApoC-II)' },
      { id: 'B', text: 'Type IIa hypercholesterolemia' },
      { id: 'C', text: 'Iron deficiency' },
      { id: 'D', text: 'Gout' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Type I Hyperlipoproteinemia is caused by deficiency in Lipoprotein Lipase (LPL) or its cofactor ApoC-II. Dietary chylomicrons cannot be cleared, causing massive hypertriglyceridemia (>1,000 mg/dL), eruptive xanthomas, and high risk of acute pancreatitis.',
    keyEnzymeOrConcept: 'Type I Hyperchylomicronemia & Acute Pancreatitis',
    clinicalCorrelation: 'Severe hypertriglyceridemia requires urgent dietary fat restriction to protect the pancreas from life-threatening inflammation.',
    highYieldFact: 'Interestingly, pure Type I chylomicronemia does not significantly increase premature atherosclerosis.',
  },
  {
    id: 'lp-82',
    category: 'Plasma Lipoproteins',
    difficulty: 'Foundational',
    style: 'pathology_match',
    vignette:
      'Which circulating lipoprotein particle has the highest density and the highest percentage of protein (~50% protein)?',
    options: [
      { id: 'A', text: 'High-Density Lipoprotein (HDL)' },
      { id: 'B', text: 'Chylomicron' },
      { id: 'C', text: 'VLDL' },
      { id: 'D', text: 'LDL' },
    ],
    correctAnswerId: 'A',
    explanation:
      'HDL has the highest density because it has the highest protein-to-lipid ratio (~50% protein, 50% lipid). Chylomicrons have the lowest density (mostly fat, <2% protein).',
    keyEnzymeOrConcept: 'Lipoprotein Density Hierarchy',
    clinicalCorrelation: 'Density order (lowest to highest): Chylomicrons < VLDL < IDL < LDL < HDL.',
    highYieldFact: 'Particle size is the exact opposite of density: Chylomicrons are the largest; HDL is the smallest.',
  },
  {
    id: 'lp-83',
    category: 'Plasma Lipoproteins',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'Hepatic Lipase operates in the liver sinusoids to trim lipids. What key transformation does Hepatic Lipase perform in plasma?',
    options: [
      { id: 'A', text: 'Converts IDL into LDL by removing remaining triglycerides' },
      { id: 'B', text: 'Breaks down table sugar in the gut' },
      { id: 'C', text: 'Cleaves DNA in the nucleus' },
      { id: 'D', text: 'Activates thyroid hormone' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Hepatic Lipase hydrolyzes triglycerides in Intermediate-Density Lipoprotein (IDL), converting it into Low-Density Lipoprotein (LDL). It also hydrolyzes lipids in large HDL2 to regenerate smaller HDL3.',
    keyEnzymeOrConcept: 'Hepatic Lipase Converts IDL to LDL',
    clinicalCorrelation: 'Hepatic lipase is increased by male hormones (androgens), contributing to lower HDL in men.',
    highYieldFact: 'Unlike LPL, Hepatic Lipase does NOT require ApoC-II for activation.',
  },
  {
    id: 'lp-84',
    category: 'Plasma Lipoproteins',
    difficulty: 'Foundational',
    style: 'pharmacology',
    vignette:
      'Fibrate medications (e.g., Fenofibrate, Gemfibrozil) are the main drugs used to lower very high triglycerides. By what mechanism do they work?',
    options: [
      { id: 'A', text: 'They activate PPAR-alpha, which upregulates Lipoprotein Lipase (LPL) to clear triglycerides' },
      { id: 'B', text: 'They destroy the liver' },
      { id: 'C', text: 'They inhibit stomach acid' },
      { id: 'D', text: 'They stop bone growth' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Fibrates are PPAR-alpha agonists. Activating PPAR-alpha upregulates Lipoprotein Lipase (LPL) synthesis, decreases ApoC-III (an LPL inhibitor), and increases hepatic fatty acid oxidation, reducing blood triglycerides by up to 50%.',
    keyEnzymeOrConcept: 'Fibrates Activate PPAR-alpha to Lower Triglycerides',
    clinicalCorrelation: 'Gemfibrozil increases statin toxicity; Fenofibrate is safer when combined with a statin.',
    highYieldFact: 'Fibrates also modestly increase ApoA-I, slightly raising HDL cholesterol.',
  },
  {
    id: 'lp-85',
    category: 'Plasma Lipoproteins',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'The standard Friedewald formula calculates LDL-C as [Total Cholesterol - HDL - (Triglycerides / 5)]. When does this formula become inaccurate and fail?',
    options: [
      { id: 'A', text: 'When serum Triglycerides exceed 400 mg/dL' },
      { id: 'B', text: 'When the patient is resting' },
      { id: 'C', text: 'When HDL is normal' },
      { id: 'D', text: 'When blood pressure is normal' },
    ],
    correctAnswerId: 'A',
    explanation:
      'The Friedewald equation assumes a constant 5:1 ratio of triglycerides to cholesterol in VLDL. When triglycerides exceed 400 mg/dL, this assumption breaks down, underestimating LDL-C. In such cases, direct LDL measurement is required.',
    keyEnzymeOrConcept: 'Friedewald Formula Invalid When TG > 400 mg/dL',
    clinicalCorrelation: 'A direct enzymatic LDL test or Martin-Hopkins calculation should be ordered when triglycerides are high.',
    highYieldFact: 'The formula is also invalid if the patient is not fasting (due to presence of chylomicrons).',
  },
  {
    id: 'lp-86',
    category: 'Plasma Lipoproteins',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'What is the primary role of Apolipoprotein E (ApoE) on chylomicron remnants and IDL particles?',
    options: [
      { id: 'A', text: 'It serves as the recognition key that allows the liver to bind and clear remnant particles from the blood' },
      { id: 'B', text: 'It creates red blood cells' },
      { id: 'C', text: 'It activates pancreatic lipase' },
      { id: 'D', text: 'It binds oxygen' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Apolipoprotein E (ApoE) is the ligand on chylomicron remnants and IDL that binds LRP1 and LDL receptors on liver cells, allowing the liver to take up and clear remnant particles from the bloodstream.',
    keyEnzymeOrConcept: 'ApoE Mediates Remnant Uptake by the Liver',
    clinicalCorrelation: 'Mnemonic: "Apo E = Enables Entry of remnants into liver".',
    highYieldFact: 'The ApoE4 allele is the primary genetic risk factor for late-onset Alzheimer disease.',
  },
];
