import { LipidQuestion } from '../../types';

export const ketogenesisQuestions: LipidQuestion[] = [
  {
    id: 'kt-39',
    category: 'Ketone Bodies',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'What is the rate-limiting and committed enzyme in hepatic ketone body synthesis (ketogenesis)?',
    options: [
      { id: 'A', text: 'Mitochondrial HMG-CoA synthase' },
      { id: 'B', text: 'Cytosolic HMG-CoA reductase' },
      { id: 'C', text: 'Fatty acid synthase' },
      { id: 'D', text: 'Lactate dehydrogenase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Mitochondrial HMG-CoA synthase is the rate-limiting enzyme for ketogenesis in liver mitochondria. (In contrast, cytosolic HMG-CoA reductase is the rate-limiting enzyme for cholesterol synthesis).',
    keyEnzymeOrConcept: 'Mitochondrial HMG-CoA Synthase (Ketogenesis)',
    clinicalCorrelation: 'Mitochondria = Ketone synthesis; Cytosol/SER = Cholesterol synthesis.',
    highYieldFact: 'Ketogenesis occurs almost exclusively in the liver during fasting.',
  },
  {
    id: 'kt-40',
    category: 'Ketone Bodies',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Although the liver is the main organ that produces ketone bodies, hepatocytes cannot use ketone bodies for their own energy. Which enzyme is completely missing in the liver?',
    options: [
      { id: 'A', text: 'Thiophorase (SCOT / Succinyl-CoA:3-ketoacid CoA transferase)' },
      { id: 'B', text: 'Beta-oxidation enzymes' },
      { id: 'C', text: 'Citrate synthase' },
      { id: 'D', text: 'Cytochrome c' },
    ],
    correctAnswerId: 'A',
    explanation:
      'The liver lacks Thiophorase (SCOT), the enzyme that activates acetoacetate into acetoacetyl-CoA. Because the liver cannot use ketones, all the ketones it synthesizes are exported to peripheral tissues (brain, heart, skeletal muscle).',
    keyEnzymeOrConcept: 'Liver Lacks Thiophorase (SCOT)',
    clinicalCorrelation: 'Prevents a futile cycle where the liver would immediately consume the ketones it just made.',
    highYieldFact: 'The brain, heart, and skeletal muscle have abundant thiophorase and can readily burn ketones.',
  },
  {
    id: 'kt-41',
    category: 'Ketone Bodies',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'In severe Diabetic Ketoacidosis (DKA), why can standard urine dipstick tests underestimate the true severity of ketoacidosis?',
    options: [
      { id: 'A', text: 'The urine dipstick only detects Acetoacetate, but high NADH converts most ketones into Beta-hydroxybutyrate' },
      { id: 'B', text: 'Ketone bodies are destroyed by urine bacteria' },
      { id: 'C', text: 'Urine cannot contain acidic molecules' },
      { id: 'D', text: 'Insulin destroys all dipsticks' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Standard nitroprusside urine dipsticks detect Acetoacetate, but CANNOT detect Beta-hydroxybutyrate. High mitochondrial NADH in DKA converts almost all acetoacetate into beta-hydroxybutyrate, making direct blood beta-hydroxybutyrate testing the gold standard.',
    keyEnzymeOrConcept: 'Beta-Hydroxybutyrate vs Acetoacetate in DKA',
    clinicalCorrelation: 'Always measure serum beta-hydroxybutyrate directly when diagnosing or treating DKA.',
    highYieldFact: 'Beta-hydroxybutyrate is technically a hydroxy-acid, not a true ketone.',
  },
  {
    id: 'kt-42',
    category: 'Ketone Bodies',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Which ketone body is volatile, exhaled through the lungs, and gives patients in diabetic ketoacidosis (DKA) their classic fruity or sweet breath odor?',
    options: [
      { id: 'A', text: 'Acetone' },
      { id: 'B', text: 'Acetoacetate' },
      { id: 'C', text: 'Beta-hydroxybutyrate' },
      { id: 'D', text: 'Pyruvate' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Acetone is produced by the non-enzymatic spontaneous decarboxylation of acetoacetate. It cannot be used for energy and is exhaled through the breath, causing the characteristic fruity/nail-polish breath in DKA.',
    keyEnzymeOrConcept: 'Acetone Exhaled in Breath',
    clinicalCorrelation: 'Fruity breath odor is a classic bedside physical exam finding of ketoacidosis.',
    highYieldFact: 'The three ketone bodies are acetoacetate, beta-hydroxybutyrate, and acetone.',
  },
  {
    id: 'kt-43',
    category: 'Ketone Bodies',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'During prolonged fasting, the brain adapts to use ketone bodies for energy. Why can mature red blood cells (erythrocytes) NEVER use ketone bodies, even in extreme starvation?',
    options: [
      { id: 'A', text: 'Erythrocytes completely lack mitochondria' },
      { id: 'B', text: 'Erythrocytes have no hemoglobin' },
      { id: 'C', text: 'Erythrocytes do not need ATP' },
      { id: 'D', text: 'Erythrocytes only burn pure fat' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Using ketone bodies (ketolysis) requires mitochondrial enzymes (beta-hydroxybutyrate dehydrogenase, thiophorase, and thiolase). Because mature RBCs have no mitochondria, they rely strictly on anaerobic glycolysis for ATP.',
    keyEnzymeOrConcept: 'RBCs Lack Mitochondria (Cannot Use Ketones)',
    clinicalCorrelation: 'RBCs, lens of the eye, and renal medulla have an obligate glucose requirement even during prolonged starvation.',
    highYieldFact: 'Brain ketone utilization spares muscle protein by decreasing the need for gluconeogenesis.',
  },
  {
    id: 'kt-44',
    category: 'Ketone Bodies',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'During fasting, why does excess Acetyl-CoA from beta-oxidation divert into ketone body synthesis instead of entering the TCA cycle in the liver?',
    options: [
      { id: 'A', text: 'Oxaloacetate is depleted because it is actively being pulled into Gluconeogenesis' },
      { id: 'B', text: 'Citrate synthase has disappeared' },
      { id: 'C', text: 'ATP cannot be made in liver' },
      { id: 'D', text: 'Insulin has blocked the mitochondria' },
    ],
    correctAnswerId: 'A',
    explanation:
      'In fasting, hepatic gluconeogenesis is working at maximum speed, draining Oxaloacetate (OAA) to make glucose. Without OAA, Acetyl-CoA cannot condense to enter the TCA cycle, overflowing instead into Ketogenesis.',
    keyEnzymeOrConcept: 'Oxaloacetate Depletion Leads to Ketone Synthesis',
    clinicalCorrelation: '"Fat burns in the flame of carbohydrates": without OAA, acetyl-CoA forms ketones.',
    highYieldFact: 'High NADH from beta-oxidation also shifts OAA into malate, further reducing free OAA.',
  },
  {
    id: 'kt-45',
    category: 'Ketone Bodies',
    difficulty: 'Foundational',
    style: 'energetics_calculation',
    vignette:
      'When acetoacetate is taken up by the heart or skeletal muscle, which molecule activates it by transferring a Coenzyme A group?',
    options: [
      { id: 'A', text: 'Succinyl-CoA' },
      { id: 'B', text: 'Citrate' },
      { id: 'C', text: 'Lactate' },
      { id: 'D', text: 'Urea' },
    ],
    correctAnswerId: 'A',
    explanation:
      'The enzyme thiophorase (SCOT) transfers Coenzyme A from Succinyl-CoA onto acetoacetate to produce Acetoacetyl-CoA, which is then cleaved into 2 Acetyl-CoA for the TCA cycle.',
    keyEnzymeOrConcept: 'Thiophorase Uses Succinyl-CoA as CoA Donor',
    clinicalCorrelation: 'Yields ~19 net ATP per molecule of acetoacetate.',
    highYieldFact: 'Beta-hydroxybutyrate yields an extra ~2.5 ATP (total ~21.5 ATP) because its first step generates 1 NADH.',
  },
  {
    id: 'kt-46',
    category: 'Ketone Bodies',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'In hepatic mitochondria, which enzyme cleaves HMG-CoA into free Acetoacetate and Acetyl-CoA?',
    options: [
      { id: 'A', text: 'HMG-CoA lyase' },
      { id: 'B', text: 'HMG-CoA reductase' },
      { id: 'C', text: 'Lipoprotein lipase' },
      { id: 'D', text: 'Hexokinase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Mitochondrial HMG-CoA lyase splits HMG-CoA into Acetoacetate (the first ketone body) and Acetyl-CoA. Deficiency of this enzyme causes severe non-ketotic hypoglycemia.',
    keyEnzymeOrConcept: 'HMG-CoA Lyase in Ketogenesis',
    clinicalCorrelation: 'HMG-CoA lyase is also required for catabolism of the ketogenic amino acid Leucine.',
    highYieldFact: 'Acetoacetate can then be reduced to Beta-hydroxybutyrate or spontaneously decarboxylate to acetone.',
  },
  {
    id: 'kt-47',
    category: 'Ketone Bodies',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'In a healthy individual fasting for 24 to 36 hours, what happens as liver glycogen stores are depleted?',
    options: [
      { id: 'A', text: 'Fatty acid beta-oxidation and blood ketone body levels rise significantly' },
      { id: 'B', text: 'Blood ketones fall to zero' },
      { id: 'C', text: 'Lactic acid replaces all blood cells' },
      { id: 'D', text: 'Insulin surges 10-fold' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Liver glycogen is depleted within 24 hours of fasting. The body transitions to burning stored adipose fatty acids, and the liver ramps up ketone body synthesis to fuel peripheral tissues and the brain.',
    keyEnzymeOrConcept: 'Transition to Ketone Utilization During Fasting',
    clinicalCorrelation: 'Mild ketosis is a normal physiological adaptation to fasting and carbohydrate restriction.',
    highYieldFact: 'Blood ketone levels in fasting are ~2–5 mM (compared to >15–20 mM in uncontrolled DKA).',
  },
  {
    id: 'kt-48',
    category: 'Ketone Bodies',
    difficulty: 'Foundational',
    style: 'pathology_match',
    vignette:
      'A ketogenic diet (high fat, very low carbohydrate) is clinically used in pediatric neurology as an effective treatment for:',
    options: [
      { id: 'A', text: 'Drug-resistant pediatric epilepsy and GLUT1 deficiency' },
      { id: 'B', text: 'Type 1 diabetes' },
      { id: 'C', text: 'Gout' },
      { id: 'D', text: 'Rickets' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Ketone bodies cross the blood-brain barrier via monocarboxylate transporters. In GLUT1 deficiency (where glucose cannot enter the brain) and refractory childhood seizures, ketones supply the brain with energy and suppress seizures.',
    keyEnzymeOrConcept: 'Ketogenic Diet for Intractable Seizures & GLUT1 Deficiency',
    clinicalCorrelation: 'Ketones enhance GABA inhibitory signaling and reduce neuronal hyperexcitability.',
    highYieldFact: 'Monocarboxylate transporter 1 (MCT1) brings ketones across the blood-brain barrier.',
  },
  {
    id: 'kt-49',
    category: 'Ketone Bodies',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Which reversible enzyme interconverts Acetoacetate and Beta-hydroxybutyrate using NADH/NAD+?',
    options: [
      { id: 'A', text: 'Beta-hydroxybutyrate dehydrogenase' },
      { id: 'B', text: 'Glycogen phosphorylase' },
      { id: 'C', text: 'Pancreatic lipase' },
      { id: 'D', text: 'Fatty acyl-CoA synthetase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Beta-hydroxybutyrate dehydrogenase reduces acetoacetate to beta-hydroxybutyrate using NADH in the liver, and oxidizes it back to acetoacetate in target tissues using NAD+.',
    keyEnzymeOrConcept: 'Beta-Hydroxybutyrate Dehydrogenase',
    clinicalCorrelation: 'The ratio of beta-hydroxybutyrate to acetoacetate directly reflects the mitochondrial NADH/NAD+ ratio.',
    highYieldFact: 'In severe alcoholism and DKA, high NADH pushes the ratio up to 10:1 in favor of beta-hydroxybutyrate.',
  },
  {
    id: 'kt-50',
    category: 'Ketone Bodies',
    difficulty: 'Intermediate',
    style: 'clinical_vignette',
    vignette:
      'A chronic alcoholic on a multi-day drinking binge without eating develops Alcoholic Ketoacidosis (AKA). What causes this rapid rise in ketones?',
    options: [
      { id: 'A', text: 'Ethanol metabolism produces massive amounts of NADH, which shuts down gluconeogenesis and stimulates ketogenesis' },
      { id: 'B', text: 'Ethanol is directly converted into table sugar' },
      { id: 'C', text: 'Alcohol destroys all fat cells' },
      { id: 'D', text: 'Alcohol blocks insulin receptors' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Alcohol dehydrogenase and aldehyde dehydrogenase both reduce NAD+ to NADH. The resulting high NADH/NAD+ ratio blocks gluconeogenesis (pyruvate → lactate), drives lipolysis, and floods the liver with ketones (predominantly beta-hydroxybutyrate).',
    keyEnzymeOrConcept: 'Alcoholic Ketoacidosis & High NADH',
    clinicalCorrelation: 'Treated with IV dextrose and saline. Dextrose raises insulin to shut down lipolysis and ketogenesis.',
    highYieldFact: 'Always give thiamine (B1) before dextrose in alcoholics to prevent Wernicke encephalopathy.',
  },
  {
    id: 'kt-51',
    category: 'Ketone Bodies',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'What is the very first step in hepatic ketone body synthesis, which condenses two molecules of Acetyl-CoA together?',
    options: [
      { id: 'A', text: 'Thiolase (forming Acetoacetyl-CoA)' },
      { id: 'B', text: 'Amylase' },
      { id: 'C', text: 'ATP synthase' },
      { id: 'D', text: 'Pepsin' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Mitochondrial Thiolase (acetoacetyl-CoA thiolase) condenses two Acetyl-CoA molecules into 4-carbon Acetoacetyl-CoA, releasing one CoASH. This is the entry step into ketogenesis.',
    keyEnzymeOrConcept: 'Thiolase Condensation Step in Ketogenesis',
    clinicalCorrelation: 'Reversible step: runs backward during beta-oxidation to cleave acyl chains.',
    highYieldFact: 'Next, HMG-CoA synthase adds a 3rd Acetyl-CoA to form HMG-CoA.',
  },
  {
    id: 'kt-52',
    category: 'Ketone Bodies',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'When a patient with Diabetic Ketoacidosis (DKA) receives insulin, what is the primary biochemical reason that ketogenesis rapidly stops?',
    options: [
      { id: 'A', text: 'Insulin inhibits lipolysis in fat cells, stopping the delivery of free fatty acids to the liver' },
      { id: 'B', text: 'Insulin makes the liver destroy its own mitochondria' },
      { id: 'C', text: 'Insulin converts all ketones into cholesterol' },
      { id: 'D', text: 'Insulin blocks the kidneys from making urine' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Insulin turns OFF Hormone-Sensitive Lipase (HSL) in adipocytes, shutting off the flood of free fatty acids entering the liver. Without free fatty acid substrate, hepatic ketogenesis abruptly terminates.',
    keyEnzymeOrConcept: 'Insulin Shuts Down Lipolysis & Ketogenesis',
    clinicalCorrelation: 'Insulin also activates ACC to make malonyl-CoA, which inhibits CPT-I, further blocking ketone formation.',
    highYieldFact: 'Even small basal levels of insulin are sufficient to prevent ketoacidosis, which is why Type 2 diabetes rarely presents with DKA.',
  },
];
