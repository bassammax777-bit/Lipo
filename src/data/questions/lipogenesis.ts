import { LipidQuestion } from '../../types';

export const lipogenesisQuestions: LipidQuestion[] = [
  {
    id: 'lg-21',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'What is the rate-limiting and committed step in de novo fatty acid synthesis, and which allosteric metabolite acts as its potent feedforward activator promoting polymerization of inactive protomers into active filaments?',
    options: [
      { id: 'A', text: 'Fatty acid synthase; activated by NADPH' },
      { id: 'B', text: 'Acetyl-CoA carboxylase (ACC); activated by Citrate' },
      { id: 'C', text: 'ATP-citrate lyase; activated by Insulin' },
      { id: 'D', text: 'Malic enzyme; activated by Malate' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Acetyl-CoA carboxylase (ACC) catalyzes the ATP-dependent carboxylation of acetyl-CoA to malonyl-CoA using biotin. It is the committed and rate-limiting step of lipogenesis. Citrate, signaling an abundance of mitochondrial acetyl-CoA and energy, acts as an allosteric activator causing inactive ACC dimers to polymerize into active filamentous polymers.',
    keyEnzymeOrConcept: 'Acetyl-CoA Carboxylase (ACC) Rate-Limiting Step & Allostery',
    clinicalCorrelation: 'In the well-fed state, excess carbohydrate is converted to citrate in mitochondria and exported to fuel ACC.',
    highYieldFact: 'Palmitoyl-CoA (the end product of fatty acid synthesis) is the primary allosteric inhibitor of ACC, causing depolymerization.',
  },
  {
    id: 'lg-22',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Advanced',
    style: 'enzyme_mechanism',
    vignette:
      'In response to fasting or glucagon/epinephrine release, lipogenesis must be rapidly switched off. Which master metabolic kinase directly phosphorylates and inactivates Acetyl-CoA Carboxylase (ACC)?',
    options: [
      { id: 'A', text: 'AMP-activated protein kinase (AMPK)' },
      { id: 'B', text: 'Protein Phosphatase 1 (PP1)' },
      { id: 'C', text: 'Hexokinase IV (Glucokinase)' },
      { id: 'D', text: 'Glycogen synthase kinase 3 (GSK-3)' },
    ],
    correctAnswerId: 'A',
    explanation:
      'AMP-activated protein kinase (AMPK) acts as the cellular fuel sensor. When AMP/ATP ratio is high (low energy state) or when glucagon/epinephrine activate PKA which also activates AMPK kinases, AMPK phosphorylates ACC at Ser79, converting it to an inactive monomer. Insulin reverses this via Protein Phosphatase 1 (PP1), dephosphorylating and activating ACC.',
    keyEnzymeOrConcept: 'Hormonal & Energy Covalent Regulation of ACC (AMPK vs PP1)',
    clinicalCorrelation: 'Metformin activates AMPK in the liver, suppressing ACC, shutting down lipogenesis, and reducing hepatic steatosis.',
    highYieldFact: 'ACC is active when DEPHOSPHORYLATED (fed/insulin state) and inactive when PHOSPHORYLATED (fasting/AMPK/glucagon state).',
  },
  {
    id: 'lg-23',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'Acetyl-CoA is generated in the mitochondrial matrix by pyruvate dehydrogenase, but de novo fatty acid synthesis occurs in the cytosol. Because Acetyl-CoA cannot cross the inner mitochondrial membrane, in what form are acetyl units transported into the cytoplasm?',
    options: [
      { id: 'A', text: 'Oxaloacetate' },
      { id: 'B', text: 'Citrate' },
      { id: 'C', text: 'Carnitine' },
      { id: 'D', text: 'Acetoacetate' },
    ],
    correctAnswerId: 'B',
    explanation:
      'The inner mitochondrial membrane is impermeable to acetyl-CoA. Acetyl-CoA condenses with oxaloacetate via citrate synthase to form Citrate. When high ATP inhibits isocitrate dehydrogenase, citrate accumulates and is exported via the tricarboxylate carrier into the cytosol. There, ATP-citrate lyase cleaves citrate back into cytosolic Acetyl-CoA and Oxaloacetate.',
    keyEnzymeOrConcept: 'The Citrate Shuttle for Cytosolic Acetyl-CoA Transport',
    clinicalCorrelation: 'Bempedoic acid is an oral prodrug that inhibits ATP-citrate lyase, lowering LDL-cholesterol.',
    highYieldFact: 'ATP-citrate lyase requires ATP and CoASH to cleave citrate into acetyl-CoA + oxaloacetate + ADP + Pi.',
  },
  {
    id: 'lg-24',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Advanced',
    style: 'energetics_calculation',
    vignette:
      'Synthesis of one molecule of Palmitate (16:0) by the Fatty Acid Synthase (FAS) homodimer complex requires 1 Acetyl-CoA primer and 7 Malonyl-CoA molecules. How many molecules of NADPH reducing equivalents are consumed during this complete synthesis?',
    options: [
      { id: 'A', text: '7 NADPH' },
      { id: 'B', text: '14 NADPH' },
      { id: 'C', text: '16 NADPH' },
      { id: 'D', text: '8 NADPH' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Each 2-carbon elongation cycle in fatty acid synthase involves two reductive steps: ketoacyl reduction (beta-ketoacyl-ACP reductase) and enoyl reduction (enoyl-ACP reductase). Each reduction consumes 1 NADPH (2 NADPH per round). For 7 elongation rounds yielding 16-carbon palmitate: 7 × 2 = 14 NADPH consumed.',
    keyEnzymeOrConcept: 'Stoichiometry of Palmitate De Novo Biosynthesis',
    clinicalCorrelation: 'Tissues with high lipogenesis (liver, lactating mammary gland, adipose) require an active Pentose Phosphate Pathway for NADPH.',
    highYieldFact: 'Net reaction: Acetyl-CoA + 7 Malonyl-CoA + 14 NADPH + 14 H+ → Palmitate + 7 CO2 + 14 NADP+ + 8 CoASH + 6 H2O.',
  },
  {
    id: 'lg-25',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'Which two major enzymatic pathways supply the vast majority of cytosolic NADPH required to drive reductive biosynthesis of fatty acids in human hepatocytes?',
    options: [
      { id: 'A', text: 'Glycolysis and TCA cycle' },
      { id: 'B', text: 'Pentose Phosphate Pathway (G6PD/6PGD) and Malic Enzyme' },
      { id: 'C', text: 'Mitochondrial Complex I and Complex II' },
      { id: 'D', text: 'Gluconeogenesis and Urea Cycle' },
    ],
    correctAnswerId: 'B',
    explanation:
      'NADPH for lipogenesis comes from two primary sources: (1) The oxidative branch of the Pentose Phosphate Pathway (catalyzed by Glucose-6-Phosphate Dehydrogenase and 6-Phosphogluconate Dehydrogenase), and (2) Cytosolic Malic Enzyme, which oxidatively decarboxylates malate to pyruvate while reducing NADP+ to NADPH as part of the citrate shuttle.',
    keyEnzymeOrConcept: 'Cellular Sources of Cytosolic NADPH for Lipogenesis',
    clinicalCorrelation: 'G6PD deficiency impairs RBC antioxidant defense, but hepatocytes also utilize malic enzyme for lipogenic NADPH.',
    highYieldFact: 'For every molecule of citrate cleaved, one NADPH can be regenerated by malic enzyme when malate converts to pyruvate.',
  },
  {
    id: 'lg-26',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Advanced',
    style: 'enzyme_mechanism',
    vignette:
      'The multifunctional eukaryotic Fatty Acid Synthase (FAS) polypeptide carries growing acyl intermediates between catalytic domains via a phosphopantetheine arm attached to the Acyl Carrier Protein (ACP) domain. From which B-complex vitamin is 4\'-phosphopantetheine derived?',
    options: [
      { id: 'A', text: 'Pantothenic acid (Vitamin B5)' },
      { id: 'B', text: 'Riboflavin (Vitamin B2)' },
      { id: 'C', text: 'Niacin (Vitamin B3)' },
      { id: 'D', text: 'Folic acid (Vitamin B9)' },
    ],
    correctAnswerId: 'A',
    explanation:
      'The Acyl Carrier Protein (ACP) domain contains a 4\'-phosphopantetheine prosthetic group attached covalently to a serine residue. Phosphopantetheine is derived from Pantothenic acid (Vitamin B5, also the precursor for Coenzyme A). Its long flexible thiol arm swings intermediates between active sites on the dimeric enzyme complex.',
    keyEnzymeOrConcept: 'Fatty Acid Synthase ACP Domain & Vitamin B5',
    clinicalCorrelation: 'Vitamin B5 (pantothenic acid) deficiency is extraordinarily rare because it is ubiquitous in foods (Greek "pantothen" = from everywhere).',
    highYieldFact: 'FAS in humans is a homodimer of two identical 260 kDa multifunctional polypeptides organized in a head-to-tail fashion.',
  },
  {
    id: 'lg-27',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'Human Fatty Acid Synthase (FAS) terminates fatty acid chain elongation specifically at 16 carbons (Palmitate). Which specific enzymatic domain of FAS hydrolyzes the thioester bond releasing free palmitate from ACP?',
    options: [
      { id: 'A', text: 'Beta-ketoacyl-ACP synthase' },
      { id: 'B', text: 'Thioesterase (TE)' },
      { id: 'C', text: 'Enoyl-ACP reductase' },
      { id: 'D', text: 'Malonyl/acetyl-CoA transacylase' },
    ],
    correctAnswerId: 'B',
    explanation:
      'The final enzymatic domain on the C-terminus of fatty acid synthase is Thioesterase (TE). The binding pocket of TE specifically accommodates a 16-carbon palmitoyl-ACP chain; once 16 carbons are reached, TE hydrolyzes the thioester bond, releasing free Palmitic acid (16:0).',
    keyEnzymeOrConcept: 'Fatty Acid Synthase Thioesterase (TE) Domain',
    clinicalCorrelation: 'Further elongation beyond 16 carbons (e.g. to stearate 18:0) requires fatty acid elongase enzymes located in the ER.',
    highYieldFact: 'FAS cannot synthesize fatty acids longer than 16 carbons; all longer fatty acids and double bonds are introduced in the ER.',
  },
  {
    id: 'lg-28',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Advanced',
    style: 'enzyme_mechanism',
    vignette:
      'Humans possess fatty acyl-CoA desaturases (Δ5, Δ6, and Δ9 desaturases) in the endoplasmic reticulum. Why are Linoleic acid (18:2 cis-Δ9,12, an omega-6) and Alpha-linolenic acid (18:3 cis-Δ9,12,15, an omega-3) considered nutritionally essential fatty acids for humans?',
    options: [
      { id: 'A', text: 'Humans lack desaturase enzymes capable of introducing double bonds beyond carbon 9 (between C9 and the methyl omega end)' },
      { id: 'B', text: 'Humans cannot transport unsaturated fatty acids across the intestinal enterocytes' },
      { id: 'C', text: 'Human fatty acid elongases cannot accept unsaturated acyl-CoAs' },
      { id: 'D', text: 'Human cells rapidly oxidize all double bonds into ketones' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Mammalian ER desaturases can only insert cis-double bonds up to carbon 9 counting from the carboxyl end (Δ9 desaturase). Humans completely lack Δ12 and Δ15 desaturases, making them incapable of synthesizing linoleic acid (18:2, ω-6) and alpha-linolenic acid (18:3, ω-3). These must be supplied by the diet to serve as precursors for arachidonic acid and eicosanoids.',
    keyEnzymeOrConcept: 'Essential Fatty Acids & Mammalian Desaturase Limitations',
    clinicalCorrelation: 'Essential fatty acid deficiency manifests as scaly dermatitis, poor wound healing, alopecia, and thrombocytopenia.',
    highYieldFact: 'Linoleic acid is converted to Arachidonic acid (20:4, ω-6) by alternating Δ6 desaturation and 2-carbon elongation.',
  },
  {
    id: 'lg-29',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Intermediate',
    style: 'pathology_match',
    vignette:
      'Triacylglycerol (TAG) synthesis requires Glycerol-3-Phosphate as the initial backbone. Adipose tissue lacks Glycerol Kinase and cannot phosphorylate free glycerol. From which glycolytic intermediate must adipocytes derive Glycerol-3-Phosphate?',
    options: [
      { id: 'A', text: 'Phosphoenolpyruvate' },
      { id: 'B', text: 'Dihydroxyacetone phosphate (DHAP)' },
      { id: 'C', text: 'Fructose-1,6-bisphosphate' },
      { id: 'D', text: '1,3-Bisphosphoglycerate' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Unlike the liver, which expresses Glycerol Kinase (which converts free glycerol + ATP to glycerol-3-phosphate), adipose tissue lacks glycerol kinase. Adipose tissue is entirely dependent on Glycolysis to produce Dihydroxyacetone Phosphate (DHAP), which is reduced to Glycerol-3-Phosphate by Glycerol-3-Phosphate Dehydrogenase. Therefore, adipocytes can only synthesize TAG when glucose is available.',
    keyEnzymeOrConcept: 'Adipose Tissue TAG Synthesis Dependency on Glycolysis (DHAP)',
    clinicalCorrelation: 'In untreated type 1 diabetes with low insulin and impaired GLUT4 uptake in fat, adipocytes cannot synthesize TAG and undergo unrestrained lipolysis.',
    highYieldFact: 'The liver can synthesize TAG in both fed and fasted states because it possesses glycerol kinase.',
  },
  {
    id: 'lg-30',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Advanced',
    style: 'enzyme_mechanism',
    vignette:
      'In the synthesis of Triacylglycerols via the glycerol-3-phosphate pathway, what is the key branch-point intermediate that can either be dephosphorylated into Diacylglycerol (DAG) or conjugated with CDP-alcohol to form phospholipids?',
    options: [
      { id: 'A', text: 'Lysophosphatidic acid' },
      { id: 'B', text: 'Phosphatidic acid (1,2-diacylglycerol phosphate)' },
      { id: 'C', text: 'Ceramide' },
      { id: 'D', text: 'Cardiolipin' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Glycerol-3-phosphate is sequentially acylated by GPAT and AGPAT with two fatty acyl-CoAs to produce Phosphatidic Acid. Phosphatidic acid is the central branch-point: dephosphorylation by Phosphatidic Acid Phosphatase (Lipin-1) yields 1,2-diacylglycerol (DAG) for TAG synthesis via DGAT, or it reacts with CTP to form CDP-DAG for phospholipid synthesis.',
    keyEnzymeOrConcept: 'Phosphatidic Acid as Central Intermediate in TAG & Phospholipids',
    clinicalCorrelation: 'DGAT (diacylglycerol acyltransferase) catalyzes the only committed step unique to triacylglycerol synthesis.',
    highYieldFact: 'Phosphatidic acid consists of a glycerol backbone, two fatty acids esterified at C1 and C2, and a phosphate group at C3.',
  },
  {
    id: 'lg-31',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Intermediate',
    style: 'clinical_vignette',
    vignette:
      'A patient with metabolic syndrome exhibits elevated circulating free fatty acids and hepatic steatosis (non-alcoholic fatty liver disease). Which transcription factor is induced by hyperinsulinemia to upregulate the entire transcription program of lipogenic enzymes, including ACC, FAS, and Stearoyl-CoA Desaturase?',
    options: [
      { id: 'A', text: 'SREBP-1c (Sterol Regulatory Element-Binding Protein 1c)' },
      { id: 'B', text: 'PPAR-alpha' },
      { id: 'C', text: 'CREB' },
      { id: 'D', text: 'HNF-4alpha' },
    ],
    correctAnswerId: 'A',
    explanation:
      'SREBP-1c is the master transcriptional regulator of de novo lipogenesis in the liver. High insulin activates SREBP-1c gene expression and proteolytic processing via mTORC1. In insulin resistance, hyperinsulinemia continues to drive SREBP-1c-mediated hepatic lipogenesis even while hepatic gluconeogenesis fails to be suppressed, leading to severe fatty liver.',
    keyEnzymeOrConcept: 'SREBP-1c Transcriptional Activation by Insulin',
    clinicalCorrelation: 'SREBP-1c controls fatty acid synthesis, whereas SREBP-2 specifically controls cholesterol synthesis and LDL receptor.',
    highYieldFact: 'ChREBP (Carbohydrate Response Element-Binding Protein) acts synergistically with SREBP-1c in response to high glucose.',
  },
  {
    id: 'lg-32',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Advanced',
    style: 'enzyme_mechanism',
    vignette:
      'In adipocytes, the complete hydrolytic mobilization of triacylglycerol into 3 free fatty acids and 1 glycerol is executed by three lipases acting in cascade. Which lipase executes the rate-limiting initial cleavage converting Triacylglycerol into Diacylglycerol?',
    options: [
      { id: 'A', text: 'Hormone-Sensitive Lipase (HSL)' },
      { id: 'B', text: 'Adipose Triglyceride Lipase (ATGL)' },
      { id: 'C', text: 'Monoacylglycerol Lipase (MGL)' },
      { id: 'D', text: 'Lipoprotein Lipase (LPL)' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Adipose Triglyceride Lipase (ATGL) catalyzes the initial and rate-limiting step of adipocyte lipolysis, hydrolyzing TAG to DAG. Hormone-Sensitive Lipase (HSL) preferentially acts on Diacylglycerol to produce Monoacylglycerol. Finally, Monoacylglycerol Lipase (MGL) cleaves MAG into the final fatty acid and free glycerol.',
    keyEnzymeOrConcept: 'Adipose Lipolysis Cascade (ATGL → HSL → MGL)',
    clinicalCorrelation: 'Perilipin coats lipid droplets. Phosphorylation of perilipin by PKA allows CGI-58 to bind and co-activate ATGL.',
    highYieldFact: 'Although historically HSL was thought to be rate-limiting, modern biochemistry confirms ATGL initiates > 90% of TAG cleavage in adipocytes.',
  },
  {
    id: 'lg-33',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'Lipoprotein Lipase (LPL) is anchored to the luminal surface of capillary endothelial cells in heart, skeletal muscle, and adipose tissue. Which apolipoprotein present on chylomicrons and VLDL serves as the mandatory, essential cofactor required to activate LPL?',
    options: [
      { id: 'A', text: 'Apolipoprotein A-I' },
      { id: 'B', text: 'Apolipoprotein C-II' },
      { id: 'C', text: 'Apolipoprotein B-100' },
      { id: 'D', text: 'Apolipoprotein E' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Apolipoprotein C-II (ApoC-II), acquired by chylomicrons and VLDL from circulating HDL, is the essential cofactor for Lipoprotein Lipase (LPL). Genetic deficiency of either LPL or ApoC-II causes Familial Hyperchylomicronemia (Fredrickson Type I), leading to massive hypertriglyceridemia and acute recurrent pancreatitis.',
    keyEnzymeOrConcept: 'ApoC-II Activation of Lipoprotein Lipase (LPL)',
    clinicalCorrelation: 'Type I hyperlipoproteinemia presents in childhood with eruptive xanthomas, lipemia retinalis, and pancreatitis.',
    highYieldFact: 'ApoC-III does the opposite: it inhibits LPL and delays lipoprotein clearance.',
  },
  {
    id: 'lg-34',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Advanced',
    style: 'pharmacology',
    vignette:
      'Bariatric patients and individuals taking Orlistat (a potent irreversible inhibitor of gastric and pancreatic lipases) experience reduced intestinal fat absorption. Which clinical adverse effect and nutrient deficiency risk must clinicians monitor?',
    options: [
      { id: 'A', text: 'Hyperglycemia and Vitamin C deficiency' },
      { id: 'B', text: 'Steatorrhea, fecal urgency, and fat-soluble vitamin malabsorption (Vitamins A, D, E, K)' },
      { id: 'C', text: 'Hyperkalemia and iron overload' },
      { id: 'D', text: 'Renal stones from phosphate wasting' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Orlistat inhibits gastric and pancreatic lipases, blocking hydrolysis of dietary triglycerides into absorbable free fatty acids and 2-monoacylglycerols (~30% fat excreted unabsorbed). This causes steatorrhea, oily stools, fecal urgency, and impaired absorption of fat-soluble vitamins (A, D, E, and K), requiring multivitamin supplementation taken at a separate time.',
    keyEnzymeOrConcept: 'Orlistat Mechanism & Fat-Soluble Vitamin Malabsorption',
    clinicalCorrelation: 'Dietary triglycerides require pancreatic lipase and colipase in the duodenum for micellar incorporation and absorption.',
    highYieldFact: 'Unabsorbed fatty acids bind luminal calcium, leading to increased free oxalate absorption and calcium oxalate kidney stones.',
  },
  {
    id: 'lg-35',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'In brown adipose tissue (BAT), cold exposure induces rapid lipolysis. The released free fatty acids directly activate which inner mitochondrial membrane protein to uncouple oxidative phosphorylation and generate heat (non-shivering thermogenesis)?',
    options: [
      { id: 'A', text: 'Uncoupling Protein 1 (UCP-1 / Thermogenin)' },
      { id: 'B', text: 'Carnitine palmitoyltransferase I' },
      { id: 'C', text: 'ATP Synthase (Complex V)' },
      { id: 'D', text: 'Cytochrome P450 oxidoreductase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Brown adipose tissue is specialized for non-shivering thermogenesis. Sympathetic stimulation releases norepinephrine (beta-3 adrenergic receptors), activating lipolysis. The released fatty acids activate UCP-1 (Thermogenin), an inner mitochondrial membrane channel that dissipates the proton gradient without synthesizing ATP, releasing energy purely as heat.',
    keyEnzymeOrConcept: 'UCP-1 / Thermogenin & Non-Shivering Thermogenesis',
    clinicalCorrelation: 'Newborns have abundant brown fat around the interscapular region to defend against hypothermia.',
    highYieldFact: 'Chemical uncouplers like 2,4-dinitrophenol (DNP) act identically to UCP-1, dissipating the proton motive force as heat.',
  },
  {
    id: 'lg-36',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Advanced',
    style: 'clinical_vignette',
    vignette:
      'A 45-year-old female presents with severe recurrent attacks of colicky right upper quadrant pain after eating greasy, high-fat fried meals. Which gastrointestinal peptide hormone is released by duodenal and jejunal I-cells in response to dietary lipids to stimulate gallbladder contraction and pancreatic enzyme secretion?',
    options: [
      { id: 'A', text: 'Cholecystokinin (CCK)' },
      { id: 'B', text: 'Secretin' },
      { id: 'C', text: 'Gastrin' },
      { id: 'D', text: 'Motilin' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Dietary lipids (fatty acids and monoglycerides) entering the duodenum trigger I-cells to release Cholecystokinin (CCK). CCK acts via CCK-A receptors to: (1) stimulate gallbladder smooth muscle contraction, ejecting bile into the duodenum, (2) stimulate acinar cells of the pancreas to release digestive enzymes, and (3) relax the sphincter of Oddi.',
    keyEnzymeOrConcept: 'Cholecystokinin (CCK) Release & Gallbladder Contraction',
    clinicalCorrelation: 'Biliary colic occurs when CCK-induced gallbladder contraction forces a gallstone against the cystic duct opening.',
    highYieldFact: 'Secretin is released by S-cells in response to low duodenal pH and stimulates pancreatic bicarbonate secretion.',
  },
  {
    id: 'lg-37',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'What is the fundamental thermodynamic reason that animals, including humans, cannot convert fatty acids into a net yield of glucose (gluconeogenesis)?',
    options: [
      { id: 'A', text: 'Fatty acids cannot enter the liver' },
      { id: 'B', text: 'The Pyruvate Dehydrogenase (PDH) complex reaction is physiologically irreversible' },
      { id: 'C', text: 'Fatty acid beta-oxidation does not produce acetyl-CoA' },
      { id: 'D', text: 'Citrate cannot cross into the mitochondrial matrix' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Acetyl-CoA from fatty acid oxidation cannot be converted back into pyruvate because the Pyruvate Dehydrogenase (PDH) reaction is completely irreversible. In the TCA cycle, the 2 carbons entering as acetyl-CoA are released as 2 molecules of CO2 (by isocitrate DH and alpha-ketoglutarate DH) before oxaloacetate is reached, yielding zero net carbons for gluconeogenesis.',
    keyEnzymeOrConcept: 'Irreversibility of PDH & Inability to Produce Glucose from Even-Chain FAs',
    clinicalCorrelation: 'During starvation, fatty acids provide the ATP and NADH to fuel gluconeogenesis, but amino acids and glycerol provide the carbon skeletons.',
    highYieldFact: 'Glycerol (from TAG breakdown) can enter gluconeogenesis via glycerol kinase and DHAP, but acyl chains cannot.',
  },
  {
    id: 'lg-38',
    category: 'Lipogenesis & TAGs',
    difficulty: 'Advanced',
    style: 'enzyme_mechanism',
    vignette:
      'During fatty acid synthesis, what is the role of biotin as the prosthetic group of Acetyl-CoA Carboxylase (ACC)?',
    options: [
      { id: 'A', text: 'It transfers one-carbon methyl groups derived from SAM' },
      { id: 'B', text: 'It serves as a mobile carrier of activated carbon dioxide (carboxybiotin) from bicarbonate to acetyl-CoA' },
      { id: 'C', text: 'It acts as an electron acceptor reducing double bonds' },
      { id: 'D', text: 'It cleaves thioester bonds by nucleophilic attack' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Biotin is covalently attached to a lysine epsilon-amino group on ACC. In the first step (biotin carboxylase domain), ATP activates HCO3- to form carboxybiotin. The flexible biotinyl-lysine arm swings to the transcarboxylase domain, transferring the carboxyl group to Acetyl-CoA to synthesize 3-carbon Malonyl-CoA.',
    keyEnzymeOrConcept: 'Biotin-Dependent Carboxylation in Acetyl-CoA Carboxylase',
    clinicalCorrelation: 'Avidin (found in raw egg whites) binds biotin with extreme affinity, causing biotin deficiency if consumed in large quantities.',
    highYieldFact: 'All 4 ABC carboxylases (Acetyl-CoA, Pyruvate, Propionyl-CoA, and beta-Methylcrotonyl-CoA carboxylase) require ATP, Biotin, and CO2.',
  },
];
