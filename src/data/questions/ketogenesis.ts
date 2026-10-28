import { LipidQuestion } from '../../types';

export const ketogenesisQuestions: LipidQuestion[] = [
  {
    id: 'kt-39',
    category: 'Ketone Bodies',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'What is the rate-limiting enzyme in hepatic ketone body synthesis (ketogenesis), and in which subcellular compartment is it localized?',
    options: [
      { id: 'A', text: 'Cytosolic HMG-CoA reductase' },
      { id: 'B', text: 'Mitochondrial HMG-CoA synthase' },
      { id: 'C', text: 'Mitochondrial Thiolase' },
      { id: 'D', text: 'Cytosolic HMG-CoA lyase' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Mitochondrial 3-hydroxy-3-methylglutaryl-CoA (HMG-CoA) synthase is the rate-limiting and committed enzyme of ketogenesis in hepatocytes. It condenses acetoacetyl-CoA with acetyl-CoA to produce HMG-CoA. In contrast, the cytosolic isozyme of HMG-CoA synthase participates in cholesterol biosynthesis.',
    keyEnzymeOrConcept: 'Mitochondrial HMG-CoA Synthase (Ketogenesis Rate-Limiting Step)',
    clinicalCorrelation: 'Hepatic HMG-CoA synthase expression is upregulated by fasting, glucagon, and high levels of free fatty acids.',
    highYieldFact: 'Mitochondria = Ketogenesis (HMG-CoA synthase); Cytosol/SER = Cholesterol synthesis (HMG-CoA reductase).',
  },
  {
    id: 'kt-40',
    category: 'Ketone Bodies',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'Although the liver is the primary factory responsible for producing circulating ketone bodies (acetoacetate and beta-hydroxybutyrate), hepatocytes cannot utilize ketone bodies for their own energy needs. Which key enzyme is completely absent in the liver?',
    options: [
      { id: 'A', text: 'Beta-hydroxybutyrate dehydrogenase' },
      { id: 'B', text: 'Succinyl-CoA:3-ketoacid CoA transferase (SCOT / Thiophorase)' },
      { id: 'C', text: 'Acetoacetyl-CoA thiolase' },
      { id: 'D', text: 'Pyruvate carboxylase' },
    ],
    correctAnswerId: 'B',
    explanation:
      'The liver lacks Succinyl-CoA:3-ketoacid CoA transferase (also known as SCOT or Thiophorase, encoded by OXCT1). This enzyme transfers a CoASH from succinyl-CoA onto acetoacetate to form acetoacetyl-CoA in extrahepatic target tissues (brain, heart, skeletal muscle). Without SCOT, hepatocytes cannot activate acetoacetate, guaranteeing that all produced ketone bodies are exported to peripheral tissues.',
    keyEnzymeOrConcept: 'Absence of SCOT / Thiophorase in Hepatic Tissue',
    clinicalCorrelation: 'Prevents a futile cycle in hepatocytes where newly synthesized ketone bodies would immediately be consumed locally.',
    highYieldFact: 'SCOT is abundantly expressed in brain, heart, and kidney, allowing them to utilize ketones efficiently.',
  },
  {
    id: 'kt-41',
    category: 'Ketone Bodies',
    difficulty: 'Advanced',
    style: 'clinical_vignette',
    vignette:
      'A 16-year-old with poorly controlled Type 1 Diabetes arrives at the emergency department with Kussmaul respirations, fruity breath odor, and abdominal pain. Arterial blood gas shows pH 7.15, bicarbonate 9 mEq/L, and anion gap 24 mEq/L. Standard nitroprusside urine dipstick test is only weakly positive despite profound metabolic ketoacidosis. What biochemical phenomenon explains this discrepancy?',
    options: [
      { id: 'A', text: 'The dipstick detects beta-hydroxybutyrate, which is low in DKA' },
      { id: 'B', text: 'The high mitochondrial NADH/NAD+ ratio shifts the equilibrium almost entirely to Beta-hydroxybutyrate, which nitroprusside does not detect' },
      { id: 'C', text: 'Acetone has completely decomposed into lactic acid' },
      { id: 'D', text: 'Glucagon has inhibited acetoacetate excretion in urine' },
    ],
    correctAnswerId: 'B',
    explanation:
      'The nitroprusside reaction detects Acetoacetate (and to a lesser degree acetone), but CANNOT detect Beta-hydroxybutyrate. In severe DKA, massive fatty acid beta-oxidation floods the mitochondria with NADH, generating a very high NADH/NAD+ ratio. This drives the beta-hydroxybutyrate dehydrogenase reaction forward, converting virtually all acetoacetate into beta-hydroxybutyrate (ratio can exceed 10:1 vs normal 1:1), causing a false-negative or falsely low urine dipstick reading.',
    keyEnzymeOrConcept: 'Beta-Hydroxybutyrate vs Acetoacetate Ratio & Dipstick Testing',
    clinicalCorrelation: 'Direct serum beta-hydroxybutyrate measurement is the standard of care for diagnosing and monitoring DKA resolution.',
    highYieldFact: 'During recovery with insulin therapy, beta-hydroxybutyrate oxidizes back to acetoacetate, causing urine dipstick to look "worse" even as the patient improves.',
  },
  {
    id: 'kt-42',
    category: 'Ketone Bodies',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'Which ketone body is biologically volatile, non-metabolizable for energy, and produced solely by the non-enzymatic spontaneous decarboxylation of acetoacetate?',
    options: [
      { id: 'A', text: 'Beta-hydroxybutyrate' },
      { id: 'B', text: 'Acetone' },
      { id: 'C', text: 'Acetoacetyl-CoA' },
      { id: 'D', text: 'Beta-hydroxy-beta-methylglutaryl-CoA' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Acetone is formed by slow, non-enzymatic spontaneous decarboxylation of unstable acetoacetate in the blood. Acetone cannot be reactivated or metabolized for ATP generation in significant amounts; it is volatile and is exhaled through the lungs, imparting the characteristic sweet, fruity, or nail-polish-remover breath odor in patients with severe ketosis.',
    keyEnzymeOrConcept: 'Acetone Production & Characteristic Breath Odor',
    clinicalCorrelation: 'Fruity breath odor in an altered patient is an immediate clinical sign of diabetic ketoacidosis or starvation ketosis.',
    highYieldFact: 'The three physiological ketone bodies are acetoacetate, beta-hydroxybutyrate, and acetone (only the first two produce ATP).',
  },
  {
    id: 'kt-43',
    category: 'Ketone Bodies',
    difficulty: 'Advanced',
    style: 'clinical_vignette',
    vignette:
      'During starvation day 3 and onward, the brain adapts to use ketone bodies for up to 60–70% of its energy requirements. Why cannot mature erythrocytes (red blood cells) utilize ketone bodies under any circumstances, even during prolonged starvation?',
    options: [
      { id: 'A', text: 'Erythrocytes lack GLUT transporters' },
      { id: 'B', text: 'Erythrocytes lack mitochondria' },
      { id: 'C', text: 'Erythrocyte membranes are impermeable to monocarboxylates' },
      { id: 'D', text: 'Erythrocytes lack glycolytic enzymes' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Ketolysis requires mitochondrial enzymes: beta-hydroxybutyrate dehydrogenase converts beta-hydroxybutyrate to acetoacetate, SCOT transfers CoA from succinyl-CoA, and mitochondrial thiolase cleaves acetoacetyl-CoA to 2 acetyl-CoA for the TCA cycle. Mature red blood cells lack mitochondria entirely and therefore can NEVER oxidize ketone bodies or fatty acids; they rely exclusively on anaerobic glycolysis.',
    keyEnzymeOrConcept: 'Mitochondrial Obligation for Ketolysis & RBC Metabolism',
    clinicalCorrelation: 'RBCs, renal medulla, and lens of the eye have an obligate requirement for glucose even in deep starvation.',
    highYieldFact: 'Brain adaptation to ketones during prolonged starvation spares skeletal muscle protein by reducing the need for gluconeogenesis.',
  },
  {
    id: 'kt-44',
    category: 'Ketone Bodies',
    difficulty: 'Advanced',
    style: 'enzyme_mechanism',
    vignette:
      'In hepatic mitochondria during fasting, why does the accumulation of acetyl-CoA divert preferentially into ketogenesis rather than entering the citric acid (TCA) cycle?',
    options: [
      { id: 'A', text: 'Citrate synthase is completely destroyed by lysosomes' },
      { id: 'B', text: 'Oxaloacetate is depleted as it is consumed by active gluconeogenesis, leaving insufficient substrate to condense with Acetyl-CoA' },
      { id: 'C', text: 'Pyruvate carboxylase is inhibited by acetyl-CoA' },
      { id: 'D', text: 'Isocitrate dehydrogenase is hyperactivated' },
    ],
    correctAnswerId: 'B',
    explanation:
      'In fasting and DKA, hepatic gluconeogenesis is hyperactive, continuously pulling Oxaloacetate (OAA) out of the mitochondria into glucose synthesis. Additionally, high mitochondrial NADH (from beta-oxidation) pushes the malate dehydrogenase equilibrium towards malate. With OAA depleted, Acetyl-CoA cannot condense with OAA to enter the TCA cycle, overflowing instead into the HMG-CoA synthase ketogenesis pathway.',
    keyEnzymeOrConcept: 'Oxaloacetate Depletion & Acetyl-CoA Overflow into Ketogenesis',
    clinicalCorrelation: '"Fat burns in the flame of carbohydrate": without sufficient OAA, acetyl-CoA from fat cannot enter the TCA cycle and forms ketones.',
    highYieldFact: 'Acetyl-CoA also allosterically activates Pyruvate Carboxylase to attempt to replenish OAA.',
  },
  {
    id: 'kt-45',
    category: 'Ketone Bodies',
    difficulty: 'Intermediate',
    style: 'energetics_calculation',
    vignette:
      'When one molecule of Acetoacetate is taken up by cardiac myocytes and metabolized completely to CO2 and H2O, how many net molecules of Acetyl-CoA are produced for the TCA cycle, and what is the net ATP yield (using 10 ATP/acetyl-CoA and 1 GTP/ATP lost in activation)?',
    options: [
      { id: 'A', text: '1 Acetyl-CoA; 10 ATP' },
      { id: 'B', text: '2 Acetyl-CoA; 19 ATP' },
      { id: 'C', text: '3 Acetyl-CoA; 30 ATP' },
      { id: 'D', text: '2 Acetyl-CoA; 21.5 ATP' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Acetoacetate is activated by SCOT (thiophorase), consuming 1 succinyl-CoA (which bypasses the succinyl-CoA synthetase step in the TCA cycle, forfeiting 1 GTP = 1 ATP). The resulting acetoacetyl-CoA is cleaved by thiolase into 2 molecules of Acetyl-CoA. In the TCA cycle, 2 Acetyl-CoA yield 2 × 10 = 20 ATP. Net ATP yield = 20 - 1 = 19 ATP.',
    keyEnzymeOrConcept: 'Acetoacetate Ketolysis Energetics & ATP Yield',
    clinicalCorrelation: 'Beta-hydroxybutyrate yields 21.5 ATP because its initial oxidation back to acetoacetate generates 1 NADH (+2.5 ATP).',
    highYieldFact: 'Beta-hydroxybutyrate is energetically richer than acetoacetate by exactly 1 NADH molecule.',
  },
  {
    id: 'kt-46',
    category: 'Ketone Bodies',
    difficulty: 'Advanced',
    style: 'enzyme_mechanism',
    vignette:
      'Which enzyme cleaves 3-hydroxy-3-methylglutaryl-CoA (HMG-CoA) in hepatic mitochondria to yield free Acetoacetate and Acetyl-CoA?',
    options: [
      { id: 'A', text: 'HMG-CoA lyase' },
      { id: 'B', text: 'HMG-CoA reductase' },
      { id: 'C', text: 'HMG-CoA isomerase' },
      { id: 'D', text: 'Mevalonate kinase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Mitochondrial HMG-CoA lyase catalyzes the final cleavage of HMG-CoA into Acetoacetate and Acetyl-CoA. Genetic deficiency of HMG-CoA lyase is a rare autosomal recessive disorder presenting with severe hypoketotic hypoglycemia, metabolic acidosis, and leucine catabolic metabolite accumulation.',
    keyEnzymeOrConcept: 'HMG-CoA Lyase in Ketogenesis & Leucine Catabolism',
    clinicalCorrelation: 'HMG-CoA lyase is also the terminal enzyme in the catabolism of the ketogenic essential amino acid Leucine.',
    highYieldFact: 'HMG-CoA lyase deficiency mimics Reye syndrome or MCAD deficiency with non-ketotic hypoglycemia.',
  },
  {
    id: 'kt-47',
    category: 'Ketone Bodies',
    difficulty: 'Intermediate',
    style: 'clinical_vignette',
    vignette:
      'A healthy medical student begins a 36-hour fast. What is the chronological progression of primary circulating fuels used to support whole-body energy expenditure during this timeframe?',
    options: [
      { id: 'A', text: 'Exogenous glucose → Hepatic glycogenolysis → Hepatic gluconeogenesis & Free Fatty Acids / Ketone bodies' },
      { id: 'B', text: 'Muscle protein breakdown → Exogenous glucose → Ketones' },
      { id: 'C', text: 'Free fatty acids → Muscle glycogenolysis → Lactic acid' },
      { id: 'D', text: 'Ketone bodies → Exogenous glucose → Glycerol' },
    ],
    correctAnswerId: 'A',
    explanation:
      '0–4 hours postprandial: exogenous glucose. 4–18 hours: hepatic glycogenolysis dominates. Beyond 16–24 hours: hepatic glycogen stores are largely depleted; gluconeogenesis and lipolysis (FFAs) rise, with ketone body production accelerating significantly after 24–36 hours.',
    keyEnzymeOrConcept: 'Fasting Fuel Timeline & Transition to Ketosis',
    clinicalCorrelation: 'Hepatic glycogen is exhausted within 24 hours of fasting; survival thereafter depends on fatty acid mobilization and ketogenesis.',
    highYieldFact: 'Muscle glycogen cannot supply blood glucose because skeletal muscle lacks Glucose-6-Phosphatase.',
  },
  {
    id: 'kt-48',
    category: 'Ketone Bodies',
    difficulty: 'Advanced',
    style: 'pathology_match',
    vignette:
      'A ketogenic diet (high fat, adequate protein, very low carbohydrate) is clinically prescribed as an effective non-pharmacological therapy for which refractory medical condition in pediatric neurology?',
    options: [
      { id: 'A', text: 'Refractory drug-resistant pediatric epilepsy (e.g. GLUT1 deficiency syndrome, Dravet syndrome)' },
      { id: 'B', text: 'Hyperkalemic periodic paralysis' },
      { id: 'C', text: 'Myasthenia gravis' },
      { id: 'D', text: 'Familial Mediterranean fever' },
    ],
    correctAnswerId: 'A',
    explanation:
      'The classic ketogenic diet (4:1 fat to carb+protein ratio) forces the brain to utilize ketone bodies as its primary fuel. In GLUT1 deficiency syndrome (where glucose cannot cross the blood-brain barrier) and Pyruvate Dehydrogenase deficiency, ketone bodies cross the blood-brain barrier via monocarboxylate transporters (MCT1) and bypass the block, dramatically reducing intractable epileptic seizures.',
    keyEnzymeOrConcept: 'Clinical Use of Ketogenic Diet in GLUT1 Deficiency & Intractable Epilepsy',
    clinicalCorrelation: 'Ketone bodies also enhance GABA synthesis and hyperpolarize neuronal membranes, dampening hyperexcitability.',
    highYieldFact: 'Monocarboxylate transporter 1 (MCT1) expression on the blood-brain barrier is upregulated during chronic ketosis.',
  },
  {
    id: 'kt-49',
    category: 'Ketone Bodies',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'Which interconversion is catalyzed by the reversible mitochondrial enzyme Beta-hydroxybutyrate Dehydrogenase?',
    options: [
      { id: 'A', text: 'Acetoacetate + NADH + H+ ⇌ D-beta-hydroxybutyrate + NAD+' },
      { id: 'B', text: 'HMG-CoA + 2 NADPH ⇌ Mevalonate + 2 NADP+' },
      { id: 'C', text: 'Acetoacetyl-CoA + Acetyl-CoA ⇌ HMG-CoA' },
      { id: 'D', text: 'Succinyl-CoA + Acetoacetate ⇌ Succinate + Acetoacetyl-CoA' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Beta-hydroxybutyrate dehydrogenase is an inner mitochondrial membrane enzyme that interconverts acetoacetate and D-beta-hydroxybutyrate. In the liver during fasting, high NADH/NAD+ drives reduction to beta-hydroxybutyrate. In peripheral target tissues, lower NADH/NAD+ drives oxidation of beta-hydroxybutyrate back to acetoacetate, generating 1 NADH.',
    keyEnzymeOrConcept: 'Beta-Hydroxybutyrate Dehydrogenase Interconversion',
    clinicalCorrelation: 'Beta-hydroxybutyrate is chemically a hydroxy-acid rather than a true ketone, but is biologically grouped with ketone bodies.',
    highYieldFact: 'The ratio of beta-hydroxybutyrate to acetoacetate reflects the mitochondrial free NADH/NAD+ ratio.',
  },
  {
    id: 'kt-50',
    category: 'Ketone Bodies',
    difficulty: 'Advanced',
    style: 'clinical_vignette',
    vignette:
      'A chronic alcohol use disorder patient is admitted after a 4-day heavy drinking binge with virtually no food intake ("alcoholic ketoacidosis"). Blood ethanol is zero, but severe high anion gap metabolic acidosis is present. Why does massive ethanol oxidation uniquely trigger profound ketosis with a high beta-hydroxybutyrate/acetoacetate ratio?',
    options: [
      { id: 'A', text: 'Alcohol dehydrogenase and aldehyde dehydrogenase both reduce NAD+ to NADH, creating an extreme cytosolic and mitochondrial NADH overload' },
      { id: 'B', text: 'Ethanol is directly converted into acetoacetate by catalase' },
      { id: 'C', text: 'Ethanol prevents fatty acids from binding to albumin' },
      { id: 'D', text: 'Alcohol stimulates insulin hypersecretion' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Hepatic metabolism of ethanol consumes 2 NAD+ (via Alcohol Dehydrogenase and Aldehyde Dehydrogenase), generating massive amounts of NADH. The resulting sky-high NADH/NAD+ ratio: (1) blocks gluconeogenesis by shifting pyruvate → lactate and OAA → malate, (2) stimulates lipolysis and ketogenesis, and (3) drives all acetoacetate into beta-hydroxybutyrate.',
    keyEnzymeOrConcept: 'Alcoholic Ketoacidosis (AKA) & NADH Reductive Stress',
    clinicalCorrelation: 'Treatment of AKA requires IV dextrose and saline; dextrose stimulates insulin, which halts lipolysis and resolves ketosis.',
    highYieldFact: 'Always administer Thiamine (B1) before or with IV dextrose in alcoholic patients to prevent Wernicke encephalopathy.',
  },
  {
    id: 'kt-51',
    category: 'Ketone Bodies',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'What is the initial reaction in the hepatic ketogenesis pathway, catalyzed by mitochondrial Acetoacetyl-CoA Thiolase (thiolase II)?',
    options: [
      { id: 'A', text: 'Condensation of two molecules of Acetyl-CoA into Acetoacetyl-CoA and CoASH' },
      { id: 'B', text: 'Hydrolysis of HMG-CoA to mevalonate' },
      { id: 'C', text: 'Carboxylation of pyruvate to oxaloacetate' },
      { id: 'D', text: 'Transamination of acetoacetate to aspartate' },
    ],
    correctAnswerId: 'A',
    explanation:
      'The entry step into ketogenesis is the reversible Claisen condensation of two molecules of Acetyl-CoA into Acetoacetyl-CoA, catalyzed by mitochondrial thiolase (acetoacetyl-CoA thiolase). When mitochondrial acetyl-CoA concentration is extremely high from rapid beta-oxidation, the equilibrium is pushed toward acetoacetyl-CoA synthesis.',
    keyEnzymeOrConcept: 'Thiolase Reversible Condensation in Ketogenesis',
    clinicalCorrelation: 'Beta-ketothiolase deficiency is an inherited disorder of isoleucine catabolism and ketone body utilization.',
    highYieldFact: 'Thiolase operates in the synthetic direction during ketogenesis, but in the cleavage direction during beta-oxidation.',
  },
  {
    id: 'kt-52',
    category: 'Ketone Bodies',
    difficulty: 'Advanced',
    style: 'clinical_vignette',
    vignette:
      'A patient with diabetic ketoacidosis receives IV regular insulin. Within 4 hours, what biochemical changes occur in adipocyte lipolysis, hepatic malonyl-CoA, and mitochondrial CPT-I activity?',
    options: [
      { id: 'A', text: 'Lipolysis is suppressed; malonyl-CoA rises; CPT-I is inhibited, shutting down ketogenesis' },
      { id: 'B', text: 'Lipolysis increases; malonyl-CoA falls; CPT-I is stimulated' },
      { id: 'C', text: 'Lipolysis is unchanged; CPT-I is degraded by proteasomes' },
      { id: 'D', text: 'Hepatic beta-oxidation accelerates 10-fold' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Insulin administration: (1) dephosphorylates and inhibits Hormone-Sensitive Lipase (HSL) in fat, abruptly shutting off free fatty acid influx to the liver, (2) activates Acetyl-CoA Carboxylase (ACC) via PP1, rapidly elevating cytosolic Malonyl-CoA, and (3) Malonyl-CoA potently inhibits CPT-I, preventing fatty acids from entering mitochondria, rapidly terminating ketogenesis.',
    keyEnzymeOrConcept: 'Insulin-Mediated Resolution of Ketogenesis',
    clinicalCorrelation: 'Insulin is the physiological brake on ketogenesis; even low basal insulin is sufficient to prevent DKA.',
    highYieldFact: 'Hyperglycemic Hyperosmolar State (HHS) in Type 2 Diabetes produces little or no ketoacidosis because residual insulin suppresses HSL.',
  },
];
