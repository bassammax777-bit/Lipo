import { LipidQuestion } from '../../types';

export const oxidationQuestions: LipidQuestion[] = [
  {
    id: 'ox-01',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'A 4-month-old infant presents with lethargy and seizures after a 12-hour overnight fast. Labs reveal severe fasting hypoglycemia with trace/absent ketones (hypoketotic hypoglycemia) and elevated C8-C10 acylcarnitines. Which classic inborn error of fatty acid oxidation is most likely?',
    options: [
      { id: 'A', text: 'Carnitine palmitoyltransferase I (CPT-I) deficiency' },
      { id: 'B', text: 'Medium-chain acyl-CoA dehydrogenase (MCAD) deficiency' },
      { id: 'C', text: 'Glycogen storage disease type I' },
      { id: 'D', text: 'Pyruvate dehydrogenase deficiency' },
    ],
    correctAnswerId: 'B',
    explanation:
      'MCAD deficiency is the most common fatty acid oxidation defect. Classic presentation: fasting hypoketotic hypoglycemia (low blood glucose without ketones) and elevated octanoylcarnitine (C8). Treatment is avoiding prolonged fasting.',
    keyEnzymeOrConcept: 'Medium-chain acyl-CoA dehydrogenase (MCAD)',
    clinicalCorrelation: 'Classic triad: fasting, hypoketotic hypoglycemia, and elevated C8 acylcarnitine.',
    highYieldFact: 'MCAD deficiency leads to dicarboxylic aciduria via alternative omega-oxidation.',
  },
  {
    id: 'ox-02',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'In the well-fed state, the liver synthesizes new fatty acids. Which metabolite acts as an allosteric inhibitor of Carnitine Palmitoyltransferase I (CPT-I) to stop fatty acids from entering mitochondria to be degraded?',
    options: [
      { id: 'A', text: 'Citrate' },
      { id: 'B', text: 'Malonyl-CoA' },
      { id: 'C', text: 'Acetyl-CoA' },
      { id: 'D', text: 'Succinate' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Malonyl-CoA (produced by acetyl-CoA carboxylase during fatty acid synthesis) inhibits CPT-I. This prevents newly synthesized fatty acids from immediately being destroyed by mitochondrial beta-oxidation.',
    keyEnzymeOrConcept: 'CPT-I Inhibition by Malonyl-CoA',
    clinicalCorrelation: 'Ensures fatty acid synthesis and beta-oxidation do not happen at the same time.',
    highYieldFact: 'CPT-I is the main rate-limiting gatekeeper for fatty acid entry into mitochondria.',
  },
  {
    id: 'ox-03',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Intermediate',
    style: 'energetics_calculation',
    vignette:
      'Palmitate is a 16-carbon saturated fatty acid. How many molecules of Acetyl-CoA (2-carbon units) are produced from its complete mitochondrial beta-oxidation?',
    options: [
      { id: 'A', text: '4 Acetyl-CoA' },
      { id: 'B', text: '8 Acetyl-CoA' },
      { id: 'C', text: '16 Acetyl-CoA' },
      { id: 'D', text: '7 Acetyl-CoA' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Each cycle of beta-oxidation cleaves off a 2-carbon Acetyl-CoA unit. For 16-carbon palmitate: 16 ÷ 2 = 8 Acetyl-CoA molecules are produced in total through 7 cleavage cycles.',
    keyEnzymeOrConcept: 'Palmitate Beta-Oxidation Yield (16 C → 8 Acetyl-CoA)',
    clinicalCorrelation: 'High energy density of lipids: complete oxidation of palmitate generates ~106 net ATP.',
    highYieldFact: 'Formula: n carbons yield (n/2) Acetyl-CoA and undergo (n/2 - 1) cleavage cycles.',
  },
  {
    id: 'ox-04',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Intermediate',
    style: 'clinical_vignette',
    vignette:
      'A 20-year-old athlete develops severe muscle aches, weakness, and dark red-brown urine (myoglobinuria) after running a 20-mile marathon. Serum creatine kinase (CK) is markedly elevated. Which carnitine-related muscle enzyme deficiency is the most common cause?',
    options: [
      { id: 'A', text: 'Carnitine palmitoyltransferase II (CPT-II) deficiency' },
      { id: 'B', text: 'Medium-chain acyl-CoA dehydrogenase deficiency' },
      { id: 'C', text: 'Glucose-6-phosphatase deficiency' },
      { id: 'D', text: 'Lipoprotein lipase deficiency' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Adult CPT-II deficiency is the most common lipid disorder affecting skeletal muscle. Prolonged strenuous endurance exercise triggers muscle breakdown (rhabdomyolysis) and red-brown urine (myoglobinuria) due to inability to oxidize long-chain fatty acids in muscle.',
    keyEnzymeOrConcept: 'CPT-II Deficiency in Muscle',
    clinicalCorrelation: 'Triggered by prolonged exercise or fasting; causes muscle pain and dark urine.',
    highYieldFact: 'Unlike hepatic CPT-I deficiency, adult CPT-II deficiency typically does not cause hypoglycemia.',
  },
  {
    id: 'ox-05',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Odd-chain fatty acids undergo beta-oxidation until a final 3-carbon unit called propionyl-CoA remains. Which B-vitamin is required as a cofactor for Methylmalonyl-CoA mutase to convert it into succinyl-CoA?',
    options: [
      { id: 'A', text: 'Vitamin C' },
      { id: 'B', text: 'Vitamin B12 (Cobalamin)' },
      { id: 'C', text: 'Vitamin B1 (Thiamine)' },
      { id: 'D', text: 'Vitamin D' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Methylmalonyl-CoA mutase requires Vitamin B12 (deoxyadenosylcobalamin). Deficiency of Vitamin B12 leads to buildup of methylmalonic acid (MMA) in blood and urine.',
    keyEnzymeOrConcept: 'Methylmalonyl-CoA Mutase & Vitamin B12',
    clinicalCorrelation: 'B12 deficiency causes megaloblastic anemia and subacute combined degeneration of the spinal cord with high methylmalonic acid.',
    highYieldFact: 'Odd-chain fatty acids are uniquely glucogenic because succinyl-CoA enters the TCA cycle for gluconeogenesis.',
  },
  {
    id: 'ox-06',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Intermediate',
    style: 'pathology_match',
    vignette:
      'Refsum disease is characterized by night blindness, ataxia, and scaly skin due to inability to break down phytanic acid from dietary plants. In which cellular organelle does the alpha-oxidation of branched phytanic acid take place?',
    options: [
      { id: 'A', text: 'Peroxisome' },
      { id: 'B', text: 'Mitochondrial matrix' },
      { id: 'C', text: 'Rough endoplasmic reticulum' },
      { id: 'D', text: 'Golgi complex' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Phytanic acid has a methyl branch on its beta-carbon that blocks beta-oxidation. It must first undergo alpha-oxidation in Peroxisomes (via phytanoyl-CoA hydroxylase) before beta-oxidation can proceed.',
    keyEnzymeOrConcept: 'Peroxisomal Alpha-Oxidation (Refsum Disease)',
    clinicalCorrelation: 'Patients are treated with dietary avoidance of dairy and ruminant meat containing phytanic acid.',
    highYieldFact: 'Peroxisomes specialize in oxidizing branched-chain fatty acids and very long chain fatty acids.',
  },
  {
    id: 'ox-07',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Very long chain fatty acids (VLCFAs, having 22 or more carbons) cannot enter mitochondria directly. Which organelle shortens VLCFAs down to medium-chain lengths first?',
    options: [
      { id: 'A', text: 'Peroxisomes' },
      { id: 'B', text: 'Lysosomes' },
      { id: 'C', text: 'Nucleus' },
      { id: 'D', text: 'Ribosomes' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Peroxisomes oxidize VLCFAs (C22–C26) down to shorter acyl chains using acyl-CoA oxidase, which generates hydrogen peroxide (H2O2). The shortened chains then travel to mitochondria for full oxidation.',
    keyEnzymeOrConcept: 'Peroxisomal Oxidation of VLCFAs',
    clinicalCorrelation: 'Defective peroxisomes cause accumulation of C26:0 fatty acids in blood.',
    highYieldFact: 'Catalase inside peroxisomes converts toxic H2O2 into water and oxygen.',
  },
  {
    id: 'ox-08',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Intermediate',
    style: 'clinical_vignette',
    vignette:
      'A newborn presents with severe hypotonia ("floppy infant"), high forehead, hepatomegaly, and high blood levels of very long chain fatty acids (C26:0). This genetic failure of peroxisome assembly is known as:',
    options: [
      { id: 'A', text: 'Zellweger syndrome' },
      { id: 'B', text: 'Tay-Sachs disease' },
      { id: 'C', text: 'Gaucher disease' },
      { id: 'D', text: 'Niemann-Pick disease' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Zellweger syndrome is a lethal peroxisome biogenesis disorder caused by mutations in PEX genes. Without peroxisomes, the infant cannot shorten VLCFAs, leading to neurological and hepatic failure.',
    keyEnzymeOrConcept: 'Zellweger Syndrome (Peroxisome Biogenesis Defect)',
    clinicalCorrelation: 'Hallmark: hypotonic infant with craniofacial dysmorphism and high plasma VLCFAs.',
    highYieldFact: 'PEX1 mutation is the most frequent genetic cause.',
  },
  {
    id: 'ox-09',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'What is the recurring 4-step sequence of reactions in each cycle of mitochondrial beta-oxidation?',
    options: [
      { id: 'A', text: 'Oxidation → Hydration → Oxidation → Thiolysis' },
      { id: 'B', text: 'Reduction → Dehydration → Reduction → Condensation' },
      { id: 'C', text: 'Decarboxylation → Methylation → Hydrolysis → Cleavage' },
      { id: 'D', text: 'Phosphorylation → Isomerization → Cleavage → Oxidation' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Mnemonic "OH-OT": Oxidation (FAD), Hydration (add H2O), Oxidation (NAD+), and Thiolysis (CoASH cleaves off Acetyl-CoA). Fatty acid synthesis follows the reverse pattern (CRDR).',
    keyEnzymeOrConcept: 'Four Core Steps of Beta-Oxidation',
    clinicalCorrelation: 'Each turn generates 1 FADH2, 1 NADH, and 1 Acetyl-CoA.',
    highYieldFact: 'Thiolase performs the final thiolytic cleavage using coenzyme A.',
  },
  {
    id: 'ox-10',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Intermediate',
    style: 'clinical_vignette',
    vignette:
      'In Primary Carnitine Deficiency (defect in the OCTN2 carnitine transporter), which clinical finding is characteristically seen?',
    options: [
      { id: 'A', text: 'Extremely low plasma carnitine levels with muscle weakness and cardiomyopathy' },
      { id: 'B', text: 'Extremely high blood ketones with ketoacidosis' },
      { id: 'C', text: 'Hyperglycemia and high insulin' },
      { id: 'D', text: 'Elevated uric acid in joints' },
    ],
    correctAnswerId: 'A',
    explanation:
      'In primary carnitine deficiency, the kidney wastes carnitine in urine, causing very low plasma carnitine (< 5 µmol/L). Cells cannot import fatty acids into mitochondria, causing cardiomyopathy, muscle weakness, and hypoketotic hypoglycemia.',
    keyEnzymeOrConcept: 'Primary Carnitine Deficiency (OCTN2 / SLC22A5)',
    clinicalCorrelation: 'Responds remarkably well to oral L-carnitine replacement therapy.',
    highYieldFact: 'Carnitine is derived from lysine and methionine, synthesized mainly in liver and kidneys.',
  },
  {
    id: 'ox-11',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Natural dietary unsaturated fatty acids (like oleic acid in olive oil) contain cis double bonds. Which auxiliary enzyme changes cis-3 double bonds into trans-2 double bonds so beta-oxidation can continue?',
    options: [
      { id: 'A', text: 'Enoyl-CoA isomerase' },
      { id: 'B', text: 'Pyruvate dehydrogenase' },
      { id: 'C', text: 'Lactate dehydrogenase' },
      { id: 'D', text: 'Citrate synthase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Enoyl-CoA isomerase shifts the double bond from position 3 to 2 and converts the cis configuration into trans, allowing enoyl-CoA hydratase to act on it.',
    keyEnzymeOrConcept: 'Enoyl-CoA Isomerase for Unsaturated Fatty Acids',
    clinicalCorrelation: 'Allows the body to easily metabolize olive oil and other unsaturated vegetable oils.',
    highYieldFact: 'Polyunsaturated fatty acids additionally require 2,4-dienoyl-CoA reductase.',
  },
  {
    id: 'ox-12',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Before a long-chain fatty acid can be metabolized, it must be "activated" to fatty acyl-CoA by consuming ATP. Which enzyme performs this initial activation step on the outer mitochondrial membrane?',
    options: [
      { id: 'A', text: 'Fatty acyl-CoA synthetase (Thiokinase)' },
      { id: 'B', text: 'Carnitine palmitoyltransferase II' },
      { id: 'C', text: 'HMG-CoA reductase' },
      { id: 'D', text: 'Acetyl-CoA carboxylase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Fatty acyl-CoA synthetase (thiokinase) activates fatty acids into fatty acyl-CoA, converting ATP to AMP + PPi (costing the energy of 2 high-energy phosphate bonds).',
    keyEnzymeOrConcept: 'Fatty Acyl-CoA Synthetase (Fatty Acid Activation)',
    clinicalCorrelation: 'Activation occurs on the outer mitochondrial membrane; entry into matrix requires carnitine.',
    highYieldFact: 'Pyrophosphate (PPi) is cleaved by pyrophosphatase, making activation irreversible.',
  },
  {
    id: 'ox-13',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'Ingesting unripe ackee fruit causes Jamaican vomiting sickness, leading to severe hypoglycemia. The toxin hypoglycin A acts by inhibiting which group of enzymes?',
    options: [
      { id: 'A', text: 'Acyl-CoA dehydrogenases (blocking fatty acid oxidation)' },
      { id: 'B', text: 'Pancreatic amylase' },
      { id: 'C', text: 'ATP synthase' },
      { id: 'D', text: 'Alcohol dehydrogenase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Hypoglycin A is metabolized to MCPA-CoA, which inhibits short- and medium-chain acyl-CoA dehydrogenases. This halts beta-oxidation and causes severe hypoketotic hypoglycemia.',
    keyEnzymeOrConcept: 'Jamaican Vomiting Sickness (Hypoglycin A)',
    clinicalCorrelation: 'Presents identically to acute MCAD deficiency after eating unripe ackee fruit.',
    highYieldFact: 'Treatment involves IV glucose and supportive care.',
  },
  {
    id: 'ox-14',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Why can medium-chain fatty acids (like octanoic acid, C8) enter the mitochondrial matrix much faster and easier than long-chain fatty acids (like palmitate, C16)?',
    options: [
      { id: 'A', text: 'They cross mitochondrial membranes freely without needing the carnitine shuttle' },
      { id: 'B', text: 'They are water-insoluble gases' },
      { id: 'C', text: 'They bind directly to DNA' },
      { id: 'D', text: 'They do not contain carbon atoms' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Medium-chain fatty acids (MCFAs, 6–10 carbons) are water-soluble enough to diffuse directly across mitochondrial membranes without the carnitine shuttle.',
    keyEnzymeOrConcept: 'Carnitine-Independent Diffusion of MCFAs',
    clinicalCorrelation: 'MCT oil is used therapeutically in patients with carnitine shuttle or CPT-I/II defects.',
    highYieldFact: 'MCFAs are absorbed directly into portal blood rather than lymphatic chylomicrons.',
  },
  {
    id: 'ox-15',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'In the mitochondrial carnitine shuttle, which protein translocates fatty acylcarnitine across the inner mitochondrial membrane into the matrix in exchange for free carnitine moving out?',
    options: [
      { id: 'A', text: 'Carnitine-acylcarnitine translocase (CACT)' },
      { id: 'B', text: 'GLUT4 transporter' },
      { id: 'C', text: 'Sodium-potassium pump' },
      { id: 'D', text: 'Complex IV' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Carnitine-acylcarnitine translocase (CACT) is an antiporter in the inner mitochondrial membrane that carries acylcarnitine inward and free carnitine outward.',
    keyEnzymeOrConcept: 'Carnitine-Acylcarnitine Translocase (CACT)',
    clinicalCorrelation: 'Rare CACT mutations cause severe neonatal arrhythmias and fasting hypoglycemia.',
    highYieldFact: 'Once inside, CPT-II puts the acyl group back onto CoASH to regenerate acyl-CoA.',
  },
  {
    id: 'ox-16',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Intermediate',
    style: 'energetics_calculation',
    vignette:
      'Unlike even-chain fatty acids, odd-chain fatty acids can produce a small amount of new glucose during prolonged starvation. Which 3-carbon product from their final cleavage makes this possible?',
    options: [
      { id: 'A', text: 'Propionyl-CoA (which converts to Succinyl-CoA)' },
      { id: 'B', text: 'Ethanol' },
      { id: 'C', text: 'Urea' },
      { id: 'D', text: 'Formic acid' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Odd-chain fatty acids end in 3-carbon Propionyl-CoA, which is converted to Succinyl-CoA, entering the TCA cycle and forming oxaloacetate for gluconeogenesis.',
    keyEnzymeOrConcept: 'Glucogenic Potential of Odd-Chain Fatty Acids',
    clinicalCorrelation: 'Even-chain fatty acids cannot yield net glucose in humans.',
    highYieldFact: 'Propionyl-CoA requires biotin (B7) and cobalamin (B12) to reach succinyl-CoA.',
  },
  {
    id: 'ox-17',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Foundational',
    style: 'pathology_match',
    vignette:
      'When mitochondrial beta-oxidation is blocked (such as in MCAD deficiency), the endoplasmic reticulum uses omega-oxidation as a backup. Which abnormal compounds appear in the urine?',
    options: [
      { id: 'A', text: 'Dicarboxylic acids (like adipic and suberic acids)' },
      { id: 'B', text: 'Bilirubin' },
      { id: 'C', text: 'Albumin crystals' },
      { id: 'D', text: 'High ketones' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Omega-oxidation oxidizes the terminal methyl (omega) group into a carboxylic acid, creating 6- and 8-carbon dicarboxylic acids (adipic/suberic acid) that spill into the urine.',
    keyEnzymeOrConcept: 'Omega-Oxidation & Dicarboxylic Aciduria',
    clinicalCorrelation: 'Dicarboxylic aciduria without ketones is a strong diagnostic sign of blocked beta-oxidation.',
    highYieldFact: 'CYP4A enzymes in the smooth ER perform omega-oxidation.',
  },
  {
    id: 'ox-18',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'The first reaction of beta-oxidation reduces FAD to FADH2. How do electrons from this FADH2 enter the electron transport chain?',
    options: [
      { id: 'A', text: 'Via Electron-Transferring Flavoprotein (ETF) to Coenzyme Q' },
      { id: 'B', text: 'Directly through Complex I' },
      { id: 'C', text: 'Through hemeprotein catalase' },
      { id: 'D', text: 'Via cytoplasmic NADH' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Acyl-CoA dehydrogenase transfers electrons from FADH2 to the Electron-Transferring Flavoprotein (ETF), which shuttles them to Coenzyme Q (ubiquinone) in the inner membrane.',
    keyEnzymeOrConcept: 'ETF & Coenzyme Q Electron Delivery',
    clinicalCorrelation: 'Defects in ETF cause Glutaric Acidemia Type II (MADD).',
    highYieldFact: 'Because electrons enter at CoQ, each FADH2 yields ~1.5 ATP.',
  },
  {
    id: 'ox-19',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'During prolonged fasting or exercise, which hormone stimulates Hormone-Sensitive Lipase (HSL) in adipose tissue to release free fatty acids into the blood?',
    options: [
      { id: 'A', text: 'Epinephrine and Glucagon' },
      { id: 'B', text: 'Insulin' },
      { id: 'C', text: 'Melatonin' },
      { id: 'D', text: 'Oxytocin' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Glucagon and Epinephrine activate the cAMP-PKA pathway in fat cells, phosphorylating and activating Hormone-Sensitive Lipase (HSL) to release fatty acids for energy.',
    keyEnzymeOrConcept: 'Hormonal Activation of Lipolysis (Glucagon / Epinephrine)',
    clinicalCorrelation: 'Insulin does the opposite: it dephosphorylates and turns OFF HSL.',
    highYieldFact: 'Free fatty acids circulate in the blood non-covalently bound to serum albumin.',
  },
  {
    id: 'ox-20',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'Why is free fatty acid beta-oxidation so vital during fasting to help maintain normal blood glucose levels (gluconeogenesis)?',
    options: [
      { id: 'A', text: 'It supplies the necessary ATP, NADH, and Acetyl-CoA (which allosterically activates Pyruvate Carboxylase)' },
      { id: 'B', text: 'Fatty acids turn directly into glucose' },
      { id: 'C', text: 'It consumes all available oxygen' },
      { id: 'D', text: 'It blocks amino acid absorption' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Fatty acid oxidation provides the huge amounts of ATP and NADH needed to run gluconeogenesis. Furthermore, Acetyl-CoA is an obligate allosteric activator of Pyruvate Carboxylase, the first step of gluconeogenesis.',
    keyEnzymeOrConcept: 'Beta-Oxidation Fuels Gluconeogenesis',
    clinicalCorrelation: 'If beta-oxidation fails (like in MCAD deficiency), gluconeogenesis cannot run, leading to fatal hypoglycemia.',
    highYieldFact: 'Acetyl-CoA also inhibits Pyruvate Dehydrogenase, preserving pyruvate for glucose synthesis.',
  },
];
