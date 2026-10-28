import { LipidQuestion } from '../../types';

export const oxidationQuestions: LipidQuestion[] = [
  {
    id: 'ox-01',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Advanced',
    style: 'clinical_vignette',
    vignette:
      'A 3-month-old infant is brought to the emergency department after experiencing lethargy and seizures following a prolonged 14-hour overnight fast due to gastroenteritis. Laboratory workup reveals severe non-ketotic hypoglycemia (glucose: 28 mg/dL, ketones: trace), hyperammonemia, elevated liver enzymes, and elevated blood levels of C8–C10 acylcarnitines. Urinalysis shows prominent dicarboxylic aciduria.',
    options: [
      { id: 'A', text: 'Carnitine palmitoyltransferase I (CPT-I) deficiency' },
      { id: 'B', text: 'Medium-chain acyl-CoA dehydrogenase (MCAD) deficiency' },
      { id: 'C', text: 'Pyruvate carboxylase deficiency' },
      { id: 'D', text: 'Glucose-6-phosphatase deficiency (Von Gierke disease)' },
    ],
    correctAnswerId: 'B',
    explanation:
      'MCAD deficiency is the most common inborn error of fatty acid oxidation. Fasting triggers lipolysis, but medium-chain fatty acids (C6–C10) cannot be oxidized, preventing gluconeogenesis activation (lack of acetyl-CoA allosteric activation of pyruvate carboxylase) and preventing ketogenesis, resulting in classic hypoketotic hypoglycemia and dicarboxylic aciduria (from alternative omega-oxidation).',
    keyEnzymeOrConcept: 'Medium-chain acyl-CoA dehydrogenase (MCAD)',
    clinicalCorrelation: 'Hypoketotic hypoglycemia after fasting; avoid prolonged fasting and give frequent high-carbohydrate meals.',
    highYieldFact: 'MCAD mutation c.985A>G in ACADM causes accumulation of octanoylcarnitine (C8).',
  },
  {
    id: 'ox-02',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'During fatty acid beta-oxidation, the acyl-CoA molecule must traverse the inner mitochondrial membrane. Which metabolite acts as a potent physiological allosteric inhibitor of Carnitine Palmitoyltransferase I (CPT-I), thereby preventing futile cycling between fatty acid synthesis and degradation?',
    options: [
      { id: 'A', text: 'Citrate' },
      { id: 'B', text: 'Malonyl-CoA' },
      { id: 'C', text: 'Acetyl-CoA' },
      { id: 'D', text: 'Propionyl-CoA' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Malonyl-CoA, the first committed intermediate in fatty acid synthesis synthesized by Acetyl-CoA Carboxylase (ACC) in the cytosol, allosterically inhibits CPT-I on the outer mitochondrial membrane. When FA synthesis is active in the fed state, high malonyl-CoA shuts down CPT-I, preventing newly formed fatty acids from immediately entering the mitochondria to be oxidized.',
    keyEnzymeOrConcept: 'Carnitine Palmitoyltransferase I (CPT-I) Allosteric Regulation',
    clinicalCorrelation: 'Reciprocal regulation between ACC and CPT-I prevents concurrent FA synthesis and breakdown.',
    highYieldFact: 'CPT-I is the primary rate-limiting and committed gatekeeper for mitochondrial beta-oxidation.',
  },
  {
    id: 'ox-03',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Advanced',
    style: 'energetics_calculation',
    vignette:
      'Calculate the NET yield of ATP generated from the complete mitochondrial beta-oxidation and subsequent TCA cycle / oxidative phosphorylation of one molecule of Palmitate (16:0), assuming modern P/O ratios (1 NADH = 2.5 ATP, 1 FADH2 = 1.5 ATP, 1 Acetyl-CoA = 10 ATP).',
    options: [
      { id: 'A', text: '129 ATP' },
      { id: 'B', text: '106 ATP' },
      { id: 'C', text: '108 ATP' },
      { id: 'D', text: '96 ATP' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Palmitate (16 carbons) undergoes 7 cycles of beta-oxidation: yields 7 FADH2 (7 × 1.5 = 10.5 ATP), 7 NADH (7 × 2.5 = 17.5 ATP), and 8 Acetyl-CoA (8 × 10 = 80 ATP). Gross ATP = 10.5 + 17.5 + 80 = 108 ATP. Fatty acid activation to palmitoyl-CoA cleaves ATP to AMP + PPi (equivalent to 2 high-energy phosphoanhydride bonds consumed). Net ATP = 108 - 2 = 106 ATP.',
    keyEnzymeOrConcept: 'Palmitate Complete Oxidation Stoichiometry',
    clinicalCorrelation: 'High energy density of lipids: ~9 kcal/g vs ~4 kcal/g for carbohydrates.',
    highYieldFact: 'Number of cleavage cycles = (n/2) - 1, producing (n/2) acetyl-CoA molecules.',
  },
  {
    id: 'ox-04',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Advanced',
    style: 'clinical_vignette',
    vignette:
      'A 19-year-old male presents with recurrent episodes of severe muscle cramping, pain, and dark reddish-brown urine following strenuous exercise or prolonged fasting. Serum creatine kinase (CK) is markedly elevated during episodes (35,000 U/L), and urinalysis is positive for myoglobinuria. Muscle biopsy reveals elevated lipid droplets. Activity of which enzyme is most likely deficient?',
    options: [
      { id: 'A', text: 'Myophosphorylase (McArdle disease)' },
      { id: 'B', text: 'Carnitine palmitoyltransferase II (CPT-II)' },
      { id: 'C', text: 'Succinate dehydrogenase' },
      { id: 'D', text: 'Lipoprotein lipase (LPL)' },
    ],
    correctAnswerId: 'B',
    explanation:
      'The adult muscular form of CPT-II deficiency is the most common disorder of lipid metabolism affecting skeletal muscle. Triggered by prolonged exercise, fasting, or cold exposure, long-chain fatty acids cannot be translocated into the mitochondrial matrix to regenerate acyl-CoA, precipitating rhabdomyolysis and myoglobinuria without hypoglycemia (unlike hepatic CPT-I deficiency).',
    keyEnzymeOrConcept: 'Carnitine Palmitoyltransferase II (CPT-II)',
    clinicalCorrelation: 'CPT-II deficiency: classic trigger is strenuous endurance exercise causing rhabdomyolysis and red-brown urine.',
    highYieldFact: 'McArdle is triggered by brief intense sprint exercise; CPT-II is triggered by prolonged endurance exertion.',
  },
  {
    id: 'ox-05',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Advanced',
    style: 'enzyme_mechanism',
    vignette:
      'Beta-oxidation of odd-chain fatty acids yields acetyl-CoA units until the terminal 3-carbon fragment is produced as propionyl-CoA. Conversion of propionyl-CoA into succinyl-CoA for TCA cycle entry requires three sequential enzymes. Which vitamin is the essential prosthetic cofactor for the final isomerization step catalyzed by Methylmalonyl-CoA mutase?',
    options: [
      { id: 'A', text: 'Biotin (Vitamin B7)' },
      { id: 'B', text: 'Cobalamin (Vitamin B12)' },
      { id: 'C', text: 'Thiamine (Vitamin B1)' },
      { id: 'D', text: 'Pyridoxine (Vitamin B6)' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Propionyl-CoA is carboxylated by propionyl-CoA carboxylase (requires Biotin / B7) to D-methylmalonyl-CoA, epimerized to L-methylmalonyl-CoA, and then converted to Succinyl-CoA by Methylmalonyl-CoA Mutase, which requires 5-deoxyadenosylcobalamin (Vitamin B12). Deficiency in B12 leads to methylmalonic acidemia and subacute combined degeneration of the spinal cord.',
    keyEnzymeOrConcept: 'Methylmalonyl-CoA Mutase & Propionate Metabolism',
    clinicalCorrelation: 'Odd-chain fatty acids are uniquely glucogenic because their terminal propionyl-CoA yields succinyl-CoA.',
    highYieldFact: 'B12 deficiency results in elevated serum and urinary methylmalonic acid (MMA) as well as homocysteine.',
  },
  {
    id: 'ox-06',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Advanced',
    style: 'pathology_match',
    vignette:
      'A 14-year-old boy presents with progressive night blindness, sensorineural hearing loss, ataxia, and scaly skin (ichthyosis). Plasma testing demonstrates markedly elevated levels of phytanic acid. This patient has a genetic defect in peroxisomal alpha-oxidation, specifically in which enzyme?',
    options: [
      { id: 'A', text: 'Peroxin-1 (PEX1)' },
      { id: 'B', text: 'Phytanoyl-CoA hydroxylase (Refsum disease)' },
      { id: 'C', text: 'Peroxisomal acyl-CoA oxidase' },
      { id: 'D', text: 'Alpha-galactosidase A' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Refsum disease is an autosomal recessive peroxisomal disorder caused by a deficiency in phytanoyl-CoA hydroxylase (alpha-oxidation). Phytanic acid (derived from dietary chlorophyll) has a methyl group at its beta-carbon (3-position), blocking direct beta-oxidation. Hydroxylation at the alpha-carbon removes the steric block. Accumulation of phytanic acid damages myelin, retina, and cerebellum.',
    keyEnzymeOrConcept: 'Peroxisomal Alpha-Oxidation & Refsum Disease',
    clinicalCorrelation: 'Treatment involves strict restriction of dairy products and ruminant meats to eliminate phytanic acid intake.',
    highYieldFact: 'Beta-methyl branching prevents direct beta-oxidation, necessitating initial peroxisomal alpha-oxidation.',
  },
  {
    id: 'ox-07',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'Very long chain fatty acids (VLCFAs, C22 and longer) cannot be transported directly into mitochondria by the carnitine shuttle. In which subcellular organelle do VLCFAs undergo initial chain shortening down to medium- and short-chain acyl-CoA intermediates?',
    options: [
      { id: 'A', text: 'Smooth endoplasmic reticulum' },
      { id: 'B', text: 'Peroxisomes' },
      { id: 'C', text: 'Lysosomes' },
      { id: 'D', text: 'Golgi apparatus' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Peroxisomes carry out beta-oxidation of VLCFAs (C22–C26) using peroxisomal acyl-CoA oxidase. Unlike mitochondrial oxidation which couples FADH2 directly to CoQ/ETC yielding ATP, the peroxisomal flavoprotein transfers electrons directly to molecular O2, generating toxic Hydrogen Peroxide (H2O2), which is detoxified by Catalase. The shortened fatty acids then transfer to mitochondria via carnitine.',
    keyEnzymeOrConcept: 'Peroxisomal Beta-Oxidation of VLCFAs',
    clinicalCorrelation: 'Zellweger syndrome: failure of peroxisome biogenesis leads to toxic VLCFA accumulation in CNS and liver.',
    highYieldFact: 'Peroxisomal beta-oxidation does not produce ATP from the first oxidation step; energy is dissipated as heat/H2O2.',
  },
  {
    id: 'ox-08',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Advanced',
    style: 'clinical_vignette',
    vignette:
      'A neonate presents with severe hypotonia ("floppy baby"), prominent craniofacial dysmorphism (high forehead, wide fontanelles, epicanthal folds), hepatomegaly, and seizure activity. Biochemical evaluation confirms markedly elevated plasma levels of hexacosanoic acid (C26:0) and tetracosanoic acid (C24:0). Brain MRI reveals polymicrogyria and demyelination. Which organelle biogenesis disorder is present?',
    options: [
      { id: 'A', text: 'Zellweger spectrum disorder (Peroxisome biogenesis defect)' },
      { id: 'B', text: 'Pompe disease (Lysosomal alpha-glucosidase)' },
      { id: 'C', text: 'Niemann-Pick type C (Cholesterol trafficking)' },
      { id: 'D', text: 'Leigh syndrome (Mitochondrial complex IV)' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Zellweger syndrome is a lethal autosomal recessive peroxisomal biogenesis disorder caused by mutations in PEX genes (especially PEX1). With non-functional peroxisomes, the infant cannot shorten VLCFAs (C24, C26), accumulate branched-chain fatty acids (phytanic/pristanic acid), or synthesize plasmalogens, leading to severe neurologic, craniofacial, and hepatic destruction.',
    keyEnzymeOrConcept: 'Zellweger Syndrome & Peroxisome Biogenesis',
    clinicalCorrelation: 'Hallmark finding: extremely elevated plasma VLCFAs (C26:0 and C26:1) in a floppy hypotonic infant.',
    highYieldFact: 'PEX genes encode peroxins necessary for peroxisomal membrane assembly and protein import.',
  },
  {
    id: 'ox-09',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'The four repetitive enzymatic steps in one round of mitochondrial beta-oxidation proceed in a defined order. What is the correct sequence of these reactions?',
    options: [
      { id: 'A', text: 'Oxidation (FAD) → Hydration → Oxidation (NAD+) → Thiolysis' },
      { id: 'B', text: 'Reduction (NADPH) → Dehydration → Reduction (FADH2) → Condensation' },
      { id: 'C', text: 'Hydration → Oxidation (FAD) → Thiolysis → Carboxylation' },
      { id: 'D', text: 'Thiolysis → Oxidation (NAD+) → Hydration → Oxidation (FAD)' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Mnemonic: "OH-OT" (Oxidation, Hydration, Oxidation, Thiolysis). Step 1: Acyl-CoA dehydrogenase produces trans-Δ2-enoyl-CoA and FADH2. Step 2: Enoyl-CoA hydratase adds H2O across the double bond forming L-beta-hydroxyacyl-CoA. Step 3: Beta-hydroxyacyl-CoA dehydrogenase produces beta-ketoacyl-CoA and NADH. Step 4: Beta-ketoacyl-CoA thiolase cleaves with CoASH, yielding Acetyl-CoA and an acyl-CoA shortened by 2 carbons.',
    keyEnzymeOrConcept: 'Four Core Steps of Mitochondrial Beta-Oxidation',
    clinicalCorrelation: 'Fatty acid synthesis follows the exact reverse logic: Condensation, Reduction, Dehydration, Reduction (CRDR).',
    highYieldFact: 'Thiolysis is irreversible under physiological conditions, driving beta-oxidation forward.',
  },
  {
    id: 'ox-10',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Advanced',
    style: 'clinical_vignette',
    vignette:
      'An infant suffering from recurrent vomiting and hypoglycemia during viral illnesses is found to have a defect in the carnitine transporter (SLC22A5) responsible for carnitine uptake into cardiac and skeletal myocytes. In Primary Systemic Carnitine Deficiency, what characteristic laboratory pattern is observed in plasma?',
    options: [
      { id: 'A', text: 'Extremely high plasma free carnitine and low urine carnitine' },
      { id: 'B', text: 'Extremely low plasma free carnitine (< 5 µmol/L) and massive urinary carnitine wasting' },
      { id: 'C', text: 'Elevated blood ketones with ketoacidosis' },
      { id: 'D', text: 'Elevated branched-chain amino acids' },
    ],
    correctAnswerId: 'B',
    explanation:
      'In Primary Carnitine Deficiency (due to organic cation/carnitine transporter OCTN2 / SLC22A5 defect), renal reabsorption of carnitine fails, spilling carnitine into the urine and exhausting plasma stores. Tissues cannot import carnitine for FA oxidation, causing cardiomyopathy, muscle weakness, and hypoketotic hypoglycemia. Responds dramatically to oral L-carnitine supplementation.',
    keyEnzymeOrConcept: 'Primary Systemic Carnitine Deficiency (OCTN2 / SLC22A5)',
    clinicalCorrelation: 'Dilated cardiomyopathy in early childhood accompanied by hypoketotic hypoglycemia should prompt carnitine analysis.',
    highYieldFact: 'Secondary carnitine deficiency occurs in MCAD/organic acidurias where carnitine is bound and excreted as acylcarnitine esters.',
  },
  {
    id: 'ox-11',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'When fatty acids with cis-double bonds (such as oleate 18:1 or linoleate 18:2) undergo beta-oxidation, the normal enoyl-CoA hydratase enzyme cannot recognize the cis isomer. Which auxiliary enzyme is essential to convert cis-3-enoyl-CoA into trans-2-enoyl-CoA?',
    options: [
      { id: 'A', text: 'Enoyl-CoA isomerase' },
      { id: 'B', text: '2,4-Dienoyl-CoA reductase' },
      { id: 'C', text: 'Malonyl-CoA decarboxylase' },
      { id: 'D', text: 'Acyl-CoA synthetase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Natural unsaturated fatty acids contain cis double bonds. As beta-oxidation shortens the chain, a cis-Δ3-enoyl-CoA intermediate is generated, which cannot be acted upon by enoyl-CoA hydratase (which strictly requires a trans-Δ2 double bond). Enoyl-CoA isomerase shifts the double bond from position 3 to 2 and converts the cis geometry into trans.',
    keyEnzymeOrConcept: 'Beta-Oxidation of Unsaturated Fatty Acids (Isomerase)',
    clinicalCorrelation: 'Polyunsaturated fatty acids require both enoyl-CoA isomerase and NADPH-dependent 2,4-dienoyl-CoA reductase.',
    highYieldFact: 'Unsaturated fatty acids yield slightly less ATP per carbon than saturated fatty acids because one FAD-reduction step is bypassed.',
  },
  {
    id: 'ox-12',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Advanced',
    style: 'enzyme_mechanism',
    vignette:
      'Where within the cell is fatty acyl-CoA synthetase (thiokinase) localized to catalyze the ATP-dependent activation of long-chain fatty acids into fatty acyl-CoA?',
    options: [
      { id: 'A', text: 'Mitochondrial matrix' },
      { id: 'B', text: 'Outer mitochondrial membrane and endoplasmic reticulum' },
      { id: 'C', text: 'Nucleolus' },
      { id: 'D', text: 'Inner mitochondrial membrane' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Fatty acid activation occurs on the outer mitochondrial membrane and endoplasmic reticulum. Fatty acyl-CoA synthetase consumes 1 ATP to form an enzyme-bound acyl-AMP intermediate and pyrophosphate (PPi). Inorganic pyrophosphatase immediately hydrolyzes PPi to 2 Pi, driving the activation to completion (costing 2 high-energy phosphoanhydride bonds).',
    keyEnzymeOrConcept: 'Fatty Acyl-CoA Synthetase Subcellular Localization',
    clinicalCorrelation: 'Because activation occurs on the outer membrane, activated long-chain acyl-CoA requires the carnitine shuttle to enter the matrix.',
    highYieldFact: 'Pyrophosphate hydrolysis ensures that fatty acid activation is virtually irreversible in vivo.',
  },
  {
    id: 'ox-13',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Advanced',
    style: 'clinical_vignette',
    vignette:
      'A 6-year-old Jamaican child is brought to the clinic comatose and severely hypoglycemic (glucose 19 mg/dL) with profound metabolic acidosis and hypoketonemia. His mother states he consumed unripened ackee fruit. The toxin hypoglycin A in unripe ackee fruit is metabolized to methylenecyclopropylacetyl-CoA (MCPA-CoA), which irreversibly inhibits which enzyme?',
    options: [
      { id: 'A', text: 'Short- and medium-chain acyl-CoA dehydrogenases' },
      { id: 'B', text: 'Glycogen phosphorylase' },
      { id: 'C', text: 'Carnitine acylcarnitine translocase' },
      { id: 'D', text: 'HMG-CoA lyase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Jamaican Vomiting Sickness is caused by ingesting hypoglycin A found in unripe ackee fruit. Its metabolite MCPA-CoA inhibits short- and medium-chain acyl-CoA dehydrogenases, completely halting beta-oxidation. This abolishes hepatic ATP production, shuts down gluconeogenesis, prevents ketogenesis, and causes severe, fatal hypoketotic hypoglycemia.',
    keyEnzymeOrConcept: 'Jamaican Vomiting Sickness & Hypoglycin A',
    clinicalCorrelation: 'Presents identically to severe MCAD deficiency but with acute environmental toxin exposure.',
    highYieldFact: 'Inhibition of beta-oxidation also depletes free carnitine and CoASH as they are sequestered with toxic organic acids.',
  },
  {
    id: 'ox-14',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'Short-chain fatty acids (C4–C6) and medium-chain fatty acids (C8–C10) differ from long-chain fatty acids (C12–C20) in their mechanism of mitochondrial entry. What unique transport property do medium-chain fatty acids possess?',
    options: [
      { id: 'A', text: 'They require active ATP-dependent pinocytosis' },
      { id: 'B', text: 'They cross the inner mitochondrial membrane directly without requiring the carnitine shuttle' },
      { id: 'C', text: 'They must be packaged into chylomicrons' },
      { id: 'D', text: 'They require caveolin-mediated endocytosis' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Medium-chain fatty acids (MCFAs, 8–10 carbons) are sufficiently water-soluble to cross both mitochondrial membranes by simple diffusion without needing activation to acylcarnitine or the carnitine shuttle. Once in the matrix, they are activated by a mitochondrial medium-chain acyl-CoA synthetase and enter beta-oxidation directly.',
    keyEnzymeOrConcept: 'Carnitine-Independent Diffusion of MCFAs',
    clinicalCorrelation: 'MCT (medium-chain triglyceride) oil is clinically fed to patients with CPT-I, CPT-II, or carnitine transporter deficiencies.',
    highYieldFact: 'MCFAs are absorbed directly into the portal venous circulation without incorporation into lymphatic chylomicrons.',
  },
  {
    id: 'ox-15',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Advanced',
    style: 'enzyme_mechanism',
    vignette:
      'In the mitochondrial carnitine shuttle, which protein is responsible for antiporter exchange of acylcarnitine into the matrix while simultaneously translocating free carnitine back into the intermembrane space?',
    options: [
      { id: 'A', text: 'Carnitine-acylcarnitine translocase (CACT)' },
      { id: 'B', text: 'Voltage-dependent anion channel (VDAC)' },
      { id: 'C', text: 'Adenine nucleotide translocase (ANT)' },
      { id: 'D', text: 'Thermogenin (UCP-1)' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Carnitine-acylcarnitine translocase (CACT, encoded by SLC25A20) is an inner mitochondrial membrane antiporter. It imports one molecule of acylcarnitine into the matrix in exchange for exporting one molecule of free carnitine back out to the intermembrane space, maintaining mitochondrial carnitine balance.',
    keyEnzymeOrConcept: 'Carnitine-Acylcarnitine Translocase (CACT)',
    clinicalCorrelation: 'CACT deficiency is a rare, severe autosomal recessive disorder presenting with neonatal cardiomyopathy and arrhythmias.',
    highYieldFact: 'Once inside the matrix, CPT-II transfers the acyl group back from carnitine onto mitochondrial CoASH.',
  },
  {
    id: 'ox-16',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Advanced',
    style: 'energetics_calculation',
    vignette:
      'During complete oxidation of a 17-carbon odd-chain fatty acid (heptadecanoic acid), how many molecules of Acetyl-CoA and Propionyl-CoA are generated?',
    options: [
      { id: 'A', text: '8 Acetyl-CoA and 0 Propionyl-CoA' },
      { id: 'B', text: '7 Acetyl-CoA and 1 Propionyl-CoA' },
      { id: 'C', text: '6 Acetyl-CoA and 2 Propionyl-CoA' },
      { id: 'D', text: '5 Acetyl-CoA and 1 Propionyl-CoA' },
    ],
    correctAnswerId: 'B',
    explanation:
      'A 17-carbon odd-chain fatty acid undergoes 7 cycles of beta-oxidation. Each of the first 6 cycles cleaves an acetyl-CoA (6 Acetyl-CoA). The 7th cycle cleaves a 5-carbon beta-ketoacyl-CoA into 1 Acetyl-CoA and 1 Propionyl-CoA (3 carbons). Total products: 7 Acetyl-CoA and 1 Propionyl-CoA.',
    keyEnzymeOrConcept: 'Odd-Chain Fatty Acid Cleavage Stoichiometry',
    clinicalCorrelation: 'Propionyl-CoA provides a minor substrate for gluconeogenesis during prolonged starvation.',
    highYieldFact: 'Even-chain fatty acids cannot yield net glucose in humans because pyruvate dehydrogenase is irreversible.',
  },
  {
    id: 'ox-17',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Intermediate',
    style: 'pathology_match',
    vignette:
      'When mitochondrial beta-oxidation is impaired (e.g. in MCAD deficiency or extreme starvation), alternative omega-oxidation occurs in the smooth endoplasmic reticulum. What is the characteristic metabolic product of omega-oxidation excreted in urine?',
    options: [
      { id: 'A', text: 'Dicarboxylic acids (adipic and suberic acids)' },
      { id: 'B', text: 'Acetoacetate and beta-hydroxybutyrate' },
      { id: 'C', text: 'Hippuric acid' },
      { id: 'D', text: 'Homogentisic acid' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Omega-oxidation occurs in the microsomal smooth ER via cytochrome P450 enzymes (CYP4A), which oxidize the terminal methyl (omega) carbon into a primary alcohol, then aldehyde, then dicarboxylic acid (e.g. 6-carbon adipic acid, 8-carbon suberic acid). When mitochondrial oxidation is blocked, dicarboxylic acids accumulate and spill into urine.',
    keyEnzymeOrConcept: 'Microsomal Omega-Oxidation & Dicarboxylic Aciduria',
    clinicalCorrelation: 'Dicarboxylic aciduria without ketonuria is the diagnostic hallmark of impaired mitochondrial beta-oxidation.',
    highYieldFact: 'Omega-oxidation normally accounts for < 5% of fatty acid oxidation but ramps up when beta-oxidation is choked.',
  },
  {
    id: 'ox-18',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Advanced',
    style: 'enzyme_mechanism',
    vignette:
      'The first dehydrogenation step of beta-oxidation in mitochondria reduces FAD to FADH2. How do electrons from this FADH2 enter the mitochondrial electron transport chain?',
    options: [
      { id: 'A', text: 'Directly via Complex I (NADH dehydrogenase)' },
      { id: 'B', text: 'Via Electron-Transferring Flavoprotein (ETF) and ETF:ubiquinone oxidoreductase (ETF-QO) to Coenzyme Q' },
      { id: 'C', text: 'Directly through Cytochrome c' },
      { id: 'D', text: 'Through the malate-aspartate shuttle' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Acyl-CoA dehydrogenase holds FAD. Upon oxidizing acyl-CoA to trans-2-enoyl-CoA, FADH2 transfers electrons to the Electron-Transferring Flavoprotein (ETF) in the matrix, which transfers them to ETF:ubiquinone oxidoreductase (ETF-QO) in the inner membrane, reducing Coenzyme Q (ubiquinone) to ubiquinol.',
    keyEnzymeOrConcept: 'Electron-Transferring Flavoprotein (ETF) & Glutaric Acidemia Type II',
    clinicalCorrelation: 'Mutations in ETF or ETF-QO cause Multiple Acyl-CoA Dehydrogenase Deficiency (MADD / Glutaric Acidemia Type II).',
    highYieldFact: 'Because electrons enter at CoQ (bypassing Complex I), each FADH2 from beta-oxidation yields ~1.5 ATP.',
  },
  {
    id: 'ox-19',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Intermediate',
    style: 'clinical_vignette',
    vignette:
      'A marathon runner in the 22nd mile of a race relies primarily on fatty acids for skeletal muscle ATP production. At this stage, which hormone has stimulated intracellular lipolysis in adipocytes to release free fatty acids into the bloodstream?',
    options: [
      { id: 'A', text: 'Insulin' },
      { id: 'B', text: 'Epinephrine and Glucagon' },
      { id: 'C', text: 'Acetylcholine' },
      { id: 'D', text: 'Somatostatin' },
    ],
    correctAnswerId: 'B',
    explanation:
      'During prolonged exercise or fasting, elevated Epinephrine and Glucagon bind Gs-protein coupled receptors on adipocytes, activating adenylyl cyclase, elevating cAMP, and activating Protein Kinase A (PKA). PKA phosphorylates and activates Hormone-Sensitive Lipase (HSL) and Perilipin, releasing free fatty acids bound to albumin.',
    keyEnzymeOrConcept: 'Hormonal Activation of Adipocyte Lipolysis',
    clinicalCorrelation: 'High insulin in the fed state dephosphorylates and shuts down HSL, suppressing free fatty acid release.',
    highYieldFact: 'Circulating free fatty acids are hydrophobic and must travel non-covalently bound to serum albumin.',
  },
  {
    id: 'ox-20',
    category: 'Fatty Acid Oxidation',
    difficulty: 'Advanced',
    style: 'clinical_vignette',
    vignette:
      'An infant is diagnosed with an inborn error of metabolism characterized by severe ketoacidosis-negative hypoglycemia. Genetic sequencing confirms hepatic CPT-I deficiency (CPT1A mutation). In contrast to CPT-II deficiency, which organ is primarily protected and which is severely damaged in CPT1A deficiency?',
    options: [
      { id: 'A', text: 'Skeletal and cardiac muscle are spared (different isoform); liver is severely affected' },
      { id: 'B', text: 'Liver is spared; skeletal muscle undergoes severe rhabdomyolysis' },
      { id: 'C', text: 'Brain is spared; adipose tissue undergoes lipoatrophy' },
      { id: 'D', text: 'Kidneys are spared; lungs collapse from surfactant loss' },
    ],
    correctAnswerId: 'A',
    explanation:
      'CPT-I has tissue-specific isoforms: CPT-1A (liver and kidney) and CPT-1B (muscle and heart). Mutations in CPT1A affect hepatic fatty acid oxidation, resulting in severe fasting hypoketotic hypoglycemia and hepatomegaly, while skeletal muscle and myocardium are spared because they express the unaffected CPT-1B isoform.',
    keyEnzymeOrConcept: 'CPT-1A vs CPT-1B Tissue Isoform Specificity',
    clinicalCorrelation: 'Hepatic CPT-I deficiency presents with fasting hypoketotic hypoglycemia without muscle weakness or elevated CK.',
    highYieldFact: 'Muscle CPT-1B is roughly 50 to 100 times more sensitive to malonyl-CoA inhibition than liver CPT-1A.',
  },
];
