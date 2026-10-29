import { LipidQuestion } from '../../types';

export const phospholipidQuestions: LipidQuestion[] = [
  {
    id: 'pl-87',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'A premature infant born at 28 weeks develops grunting, retractions, and cyanosis shortly after birth. Chest X-ray reveals diffuse ground-glass atelectasis. Deficiency of which phospholipid in lung surfactant causes Neonatal Respiratory Distress Syndrome (NRDS)?',
    options: [
      { id: 'A', text: 'Dipalmitoylphosphatidylcholine (DPPC / Dipalmitoyl Lecithin)' },
      { id: 'B', text: 'Sphingomyelin' },
      { id: 'C', text: 'Triacylglycerol' },
      { id: 'D', text: 'Cholesterol ester' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Dipalmitoylphosphatidylcholine (DPPC), the main phospholipid in pulmonary surfactant produced by Type II pneumocytes, reduces alveolar surface tension to prevent alveolar collapse at the end of expiration. Deficiency in preemies causes Neonatal Respiratory Distress Syndrome (NRDS).',
    keyEnzymeOrConcept: 'DPPC (Lecithin) & Neonatal Respiratory Distress Syndrome',
    clinicalCorrelation: 'An amniotic fluid Lecithin-to-Sphingomyelin (L/S) ratio >= 2.0 indicates fetal lung maturity (achieved ~35 weeks).',
    highYieldFact: 'Maternal corticosteroids (betamethasone) given before preterm delivery stimulate surfactant synthesis.',
  },
  {
    id: 'pl-88',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'A 6-month-old infant of Ashkenazi Jewish descent presents with developmental regression, exaggerated startle to sound (hyperacusis), and a "cherry-red spot" on the macula of both eyes. Crucially, the liver and spleen are NOT enlarged (no hepatosplenomegaly). Which lysosomal storage disease is this?',
    options: [
      { id: 'A', text: 'Tay-Sachs disease (Beta-hexosaminidase A deficiency)' },
      { id: 'B', text: 'Niemann-Pick disease' },
      { id: 'C', text: 'Gaucher disease' },
      { id: 'D', text: 'Hunter syndrome' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Tay-Sachs disease is an autosomal recessive deficiency of Beta-hexosaminidase A, causing buildup of GM2 ganglioside in neurons. Classic signs: developmental regression, hyperacusis (startle reflex), cherry-red spot, and NO hepatosplenomegaly (key differentiator from Niemann-Pick).',
    keyEnzymeOrConcept: 'Tay-Sachs Disease (Beta-Hexosaminidase A & GM2 Ganglioside)',
    clinicalCorrelation: 'Remember: Tay-Sachs has NO hepatosplenomegaly, while Niemann-Pick HAS hepatosplenomegaly.',
    highYieldFact: 'Histology shows "onion-skin" concentric lysosomal lamellae on electron microscopy.',
  },
  {
    id: 'pl-89',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'A 9-month-old infant presents with developmental regression, a cherry-red macular spot, and prominent enlargement of the liver and spleen (hepatosplenomegaly). Bone marrow shows characteristic "foam cells" (lipid-laden macrophages). Which enzyme is deficient in Niemann-Pick disease?',
    options: [
      { id: 'A', text: 'Sphingomyelinase (accumulation of Sphingomyelin)' },
      { id: 'B', text: 'Beta-hexosaminidase A' },
      { id: 'C', text: 'Amylase' },
      { id: 'D', text: 'Hexokinase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Niemann-Pick disease (Type A) is caused by deficiency of acid Sphingomyelinase, leading to massive accumulation of Sphingomyelin. Hallmarks: neurodegeneration, cherry-red macular spot, hepatosplenomegaly, and foamy histiocytes on bone marrow.',
    keyEnzymeOrConcept: 'Niemann-Pick Disease (Sphingomyelinase Defect)',
    clinicalCorrelation: 'Mnemonic: "No man picks his nose with his big foamy cherry-red liver" (Niemann-Pick, foam cells, cherry red spot, hepatomegaly).',
    highYieldFact: 'Sphingomyelin is unique among sphingolipids because it contains a phosphate group.',
  },
  {
    id: 'pl-90',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Foundational',
    style: 'clinical_vignette',
    vignette:
      'A 25-year-old patient presents with severe bone pain, an atraumatic femur fracture, easy bruising from thrombocytopenia, and massive splenomegaly. Bone marrow biopsy reveals pathognomonic macrophages with a "wrinkled tissue paper" or "crumpled silk" appearance. What is the most common lysosomal storage disease?',
    options: [
      { id: 'A', text: 'Gaucher disease (Glucocerebrosidase deficiency)' },
      { id: 'B', text: 'Tay-Sachs disease' },
      { id: 'C', text: 'Fabry disease' },
      { id: 'D', text: 'Zellweger syndrome' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Gaucher disease is the most common lysosomal storage disorder, caused by deficiency of Glucocerebrosidase (acid beta-glucosidase). Glucocerebroside accumulates in macrophages, creating classic "crumpled tissue paper" Gaucher cells, splenomegaly, pancytopenia, and bone crises.',
    keyEnzymeOrConcept: 'Gaucher Disease (Glucocerebrosidase Defect)',
    clinicalCorrelation: 'Treated with enzyme replacement therapy (Imiglucerase). Often shows Erlenmeyer flask bone deformities on X-ray.',
    highYieldFact: 'Gaucher cells stain strongly positive for Tartrate-Resistant Acid Phosphatase (TRAP).',
  },
  {
    id: 'pl-91',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Intermediate',
    style: 'clinical_vignette',
    vignette:
      'An 18-year-old male presents with burning neuropathic pain in his hands and feet (acroparesthesias), inability to sweat (hypohidrosis), and dark reddish-purple spots around his navel and groin (angiokeratomas). Which X-linked recessive lysosomal disorder is this?',
    options: [
      { id: 'A', text: 'Fabry disease (Alpha-galactosidase A deficiency)' },
      { id: 'B', text: 'Gaucher disease' },
      { id: 'C', text: 'Niemann-Pick disease' },
      { id: 'D', text: 'Krabbe disease' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Fabry disease is an X-linked recessive disorder caused by deficiency of Alpha-galactosidase A, leading to accumulation of ceramide trihexoside (Gb3). Triad: burning acroparesthesias, angiokeratomas, and hypohidrosis. Later complications include renal and heart failure.',
    keyEnzymeOrConcept: 'Fabry Disease (Alpha-Galactosidase A Defect)',
    clinicalCorrelation: 'Unique among lipid storage diseases for being X-linked recessive.',
    highYieldFact: 'Slit-lamp exam often reveals asymptomatic whorled corneal opacities (cornea verticillata).',
  },
  {
    id: 'pl-92',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Intermediate',
    style: 'clinical_vignette',
    vignette:
      'A 5-month-old infant presents with extreme irritability, hypertonia, optic atrophy, and developmental regression. Histology shows loss of myelin and presence of multinucleated "globoid cells" in white matter. What enzyme is deficient in Krabbe disease?',
    options: [
      { id: 'A', text: 'Galactocerebrosidase' },
      { id: 'B', text: 'Pancreatic lipase' },
      { id: 'C', text: 'Amylase' },
      { id: 'D', text: 'Glucose-6-phosphate dehydrogenase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Krabbe disease (globoid cell leukodystrophy) is caused by deficiency of Galactocerebrosidase, leading to accumulation of toxic galactosylsphingosine (psychosine), which destroys myelin-producing oligodendrocytes. Globoid cells are characteristic multinucleated macrophages.',
    keyEnzymeOrConcept: 'Krabbe Disease (Galactocerebrosidase Defect & Globoid Cells)',
    clinicalCorrelation: 'Rapidly progressive, severe infantile demyelinating disease.',
    highYieldFact: 'Psychosine is toxic to oligodendrocytes, driving near-total myelin destruction.',
  },
  {
    id: 'pl-93',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Intermediate',
    style: 'clinical_vignette',
    vignette:
      'Metachromatic Leukodystrophy (MLD) causes central and peripheral demyelination with ataxia and dementia. Which enzyme is deficient, leading to the accumulation of sulfatides that stain reddish-brown with toluidine blue dye?',
    options: [
      { id: 'A', text: 'Arylsulfatase A' },
      { id: 'B', text: 'Alpha-glucosidase' },
      { id: 'C', text: 'Citrate lyase' },
      { id: 'D', text: 'HMG-CoA lyase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Metachromatic Leukodystrophy is caused by deficiency of Arylsulfatase A. Cerebroside sulfate (sulfatides) accumulates in myelin sheaths, producing metachromasia (changing the color of basic dyes from blue to red-brown) on nerve biopsy.',
    keyEnzymeOrConcept: 'Metachromatic Leukodystrophy (Arylsulfatase A & Sulfatides)',
    clinicalCorrelation: 'Presents in toddlers with gait ataxia, optic atrophy, and loss of cognitive milestones.',
    highYieldFact: 'Sulfatides are sulfated galactocerebrosides, major lipids of myelin.',
  },
  {
    id: 'pl-94',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'What is the fundamental structural backbone that distinguishes Sphingolipids from Glycerophospholipids?',
    options: [
      { id: 'A', text: 'Sphingolipids are built on the 18-carbon amino alcohol Sphingosine; Glycerophospholipids are built on 3-carbon Glycerol' },
      { id: 'B', text: 'Sphingolipids are made entirely of pure water' },
      { id: 'C', text: 'Glycerophospholipids do not contain any fatty acids' },
      { id: 'D', text: 'Sphingolipids contain steroid rings' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Glycerophospholipids have a 3-carbon Glycerol backbone. Sphingolipids are built on Sphingosine (an 18-carbon unsaturated amino alcohol synthesized from palmitoyl-CoA and serine). Adding a fatty acid to sphingosine makes Ceramide, the base of all sphingolipids.',
    keyEnzymeOrConcept: 'Sphingosine Backbone vs Glycerol Backbone',
    clinicalCorrelation: 'Ceramide serves as the core hydrophobic anchor for sphingomyelin and all glycosphingolipids.',
    highYieldFact: 'Serine palmitoyltransferase requires Vitamin B6 (pyridoxal phosphate) to start sphingosine synthesis.',
  },
  {
    id: 'pl-95',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'Cardiolipin (diphosphatidylglycerol) is a unique phospholipid containing four fatty acyl tails. Where is cardiolipin exclusively found in human cells, where it anchors the complexes of the respiratory chain?',
    options: [
      { id: 'A', text: 'Inner mitochondrial membrane' },
      { id: 'B', text: 'Nuclear pore' },
      { id: 'C', text: 'Cell exterior' },
      { id: 'D', text: 'Salivary glands' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Cardiolipin is localized almost exclusively in the Inner Mitochondrial Membrane (~20% of its lipids), where it stabilizes respiratory chain complexes I, III, IV, and ATP synthase into respirasomes.',
    keyEnzymeOrConcept: 'Cardiolipin in the Inner Mitochondrial Membrane',
    clinicalCorrelation: 'Barth syndrome (defect in cardiolipin remodeling by tafazzin) causes cardiomyopathy and neutropenia.',
    highYieldFact: 'Cardiolipin is also the target antigen in the VDRL / RPR test for syphilis and antiphospholipid syndrome.',
  },
  {
    id: 'pl-96',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Foundational',
    style: 'enzyme_mechanism',
    vignette:
      'When hormones bind Gq-protein coupled receptors, which enzyme cleaves membrane PIP2 into the second messengers IP3 (which releases calcium) and DAG (which activates Protein Kinase C)?',
    options: [
      { id: 'A', text: 'Phospholipase C (PLC)' },
      { id: 'B', text: 'Phospholipase A2' },
      { id: 'C', text: 'Lipoprotein lipase' },
      { id: 'D', text: 'Amylase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Phospholipase C (PLC) cleaves PIP2 into Inositol 1,4,5-trisphosphate (IP3) and Diacylglycerol (DAG). IP3 triggers calcium release from the endoplasmic reticulum, while DAG and calcium activate Protein Kinase C (PKC).',
    keyEnzymeOrConcept: 'Phospholipase C & The IP3/DAG Pathway',
    clinicalCorrelation: 'Gq receptors mnemonic: "HAVe 1 M&M": H1, Alpha-1, V1, M1, M3 all signal via Phospholipase C.',
    highYieldFact: 'Lithium inhibits inositol monophosphatase, dampening hyperactive PIP2 signaling in bipolar disorder.',
  },
  {
    id: 'pl-97',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Foundational',
    style: 'pharmacology',
    vignette:
      'Which enzyme cleaves membrane phospholipids at the sn-2 position to release free Arachidonic Acid for inflammatory prostaglandin synthesis, and is inhibited by Corticosteroids (via lipocortin/annexin A1)?',
    options: [
      { id: 'A', text: 'Phospholipase A2 (PLA2)' },
      { id: 'B', text: 'HMG-CoA reductase' },
      { id: 'C', text: 'Pepsin' },
      { id: 'D', text: 'Lactase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Phospholipase A2 (PLA2) cleaves the sn-2 fatty acid from membrane phospholipids, liberating free Arachidonic acid. Corticosteroids (e.g. Dexamethasone, Prednisone) induce Lipocortin (Annexin A1), which inhibits PLA2, blocking both prostaglandins (COX) and leukotrienes (LOX).',
    keyEnzymeOrConcept: 'Phospholipase A2 (PLA2) Releases Arachidonic Acid',
    clinicalCorrelation: 'Corticosteroids are powerful anti-inflammatories because they block the very first step of all eicosanoid production.',
    highYieldFact: 'Snake venoms (like cobra or rattlesnake) contain hyperactive PLA2 that hemolyzes red blood cells.',
  },
  {
    id: 'pl-98',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Foundational',
    style: 'pharmacology',
    vignette:
      'Unlike reversible NSAIDs (ibuprofen, naproxen), how does Aspirin (Acetylsalicylic Acid) inhibit Cyclooxygenase (COX-1 and COX-2) to prevent platelet blood clots for the lifetime of the platelet?',
    options: [
      { id: 'A', text: 'Irreversible covalent acetylation of a serine residue in the COX active site' },
      { id: 'B', text: 'Destruction of the cell nucleus' },
      { id: 'C', text: 'Direct binding to blood oxygen' },
      { id: 'D', text: 'Freezing platelet membranes' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Aspirin is the only NSAID that irreversibly and covalently acetylates Cyclooxygenase (Ser529 in COX-1). Because platelets lack nuclei and cannot make new proteins, platelet Thromboxane A2 (TXA2) is blocked for the entire 7–10 day lifespan of the platelet.',
    keyEnzymeOrConcept: 'Aspirin Irreversible Covalent Acetylation of COX',
    clinicalCorrelation: 'Low-dose aspirin (81 mg) is taken daily for cardiovascular prevention to inhibit platelet clots.',
    highYieldFact: 'Endothelial cells have nuclei and can resynthesize COX to continue making vasodilating prostacyclin (PGI2).',
  },
  {
    id: 'pl-99',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Foundational',
    style: 'pharmacology',
    vignette:
      'Montelukast (Singulair) is a medication used in asthma maintenance. Which group of inflammatory molecules made from arachidonic acid does it block by antagonizing the CysLT1 receptor?',
    options: [
      { id: 'A', text: 'Leukotrienes (LTC4, LTD4, LTE4)' },
      { id: 'B', text: 'Insulin' },
      { id: 'C', text: 'Glucagon' },
      { id: 'D', text: 'Bilirubin' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Montelukast and Zafirlukast are Leukotriene Receptor Antagonists (LTRAs) that block CysLT1 receptors on airway smooth muscle, preventing the intense bronchoconstriction and mucus secretion caused by cysteinyl leukotrienes.',
    keyEnzymeOrConcept: 'Montelukast Blocks Cysteinyl Leukotriene Receptors',
    clinicalCorrelation: 'Especially beneficial in exercise-induced bronchospasm and aspirin-exacerbated respiratory disease (AERD).',
    highYieldFact: 'Zileuton acts upstream by directly inhibiting the 5-Lipoxygenase (5-LOX) enzyme.',
  },
  {
    id: 'pl-100',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Foundational',
    style: 'pathology_match',
    vignette:
      'Which vascular endothelial prostaglandin promotes vasodilation and inhibits platelet aggregation, balancing the blood-clotting action of platelet Thromboxane A2 (TXA2)?',
    options: [
      { id: 'A', text: 'Prostacyclin (PGI2)' },
      { id: 'B', text: 'Collagen' },
      { id: 'C', text: 'Fibrinogen' },
      { id: 'D', text: 'Thrombin' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Prostacyclin (PGI2), produced by vascular endothelial cells, causes vasodilation and inhibits platelet aggregation. It counterbalances platelet-derived Thromboxane A2 (TXA2), which causes vasoconstriction and platelet clumping.',
    keyEnzymeOrConcept: 'Prostacyclin (PGI2) vs Thromboxane A2 (TXA2) Balance',
    clinicalCorrelation: 'Mnemonic: PGI2 = "Platelet Gathering Inhibited"; TXA2 = "Thrombus Activator".',
    highYieldFact: 'Selective COX-2 inhibitors impaired endothelial PGI2 without blocking platelet TXA2, increasing thrombotic risk.',
  },
];
