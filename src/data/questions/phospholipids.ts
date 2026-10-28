import { LipidQuestion } from '../../types';

export const phospholipidQuestions: LipidQuestion[] = [
  {
    id: 'pl-87',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Intermediate',
    style: 'clinical_vignette',
    vignette:
      'A premature infant born at 28 weeks gestation develops severe tachypnea, grunting, nasal flaring, and cyanosis within 30 minutes of birth. Chest X-ray reveals a diffuse "ground-glass" reticulogranular pattern with air bronchograms. Deficiency of which specific phospholipid component of pulmonary surfactant is the direct cause of Neonatal Respiratory Distress Syndrome (NRDS)?',
    options: [
      { id: 'A', text: 'Dipalmitoylphosphatidylcholine (DPPC / Lecithin)' },
      { id: 'B', text: 'Sphingomyelin' },
      { id: 'C', text: 'Phosphatidylserine' },
      { id: 'D', text: 'Cardiolipin (Diphosphatidylglycerol)' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Dipalmitoylphosphatidylcholine (DPPC), also known as dipalmitoyl lecithin, makes up >80% of the phospholipid fraction of pulmonary surfactant synthesized by type II pneumocytes. Surfactant lowers alveolar surface tension according to the Law of Laplace (P = 2T/r), preventing end-expiratory alveolar collapse (atelectasis). Antenatal corticosteroids (e.g. betamethasone) accelerate surfactant synthesis.',
    keyEnzymeOrConcept: 'Dipalmitoylphosphatidylcholine (DPPC) & NRDS',
    clinicalCorrelation: 'Amniotic fluid lecithin-to-sphingomyelin (L/S) ratio >= 2.0 indicates fetal pulmonary maturity (at ~35 weeks gestation).',
    highYieldFact: 'Surfactant proteins SP-B and SP-C are hydrophobic and essential for spreading DPPC into a lipid monolayer across the alveolar surface.',
  },
  {
    id: 'pl-88',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Advanced',
    style: 'clinical_vignette',
    vignette:
      'A 6-month-old infant of Ashkenazi Jewish ancestry presents with developmental regression, exaggerated startle response to acoustic stimuli (hyperacusis), generalized hypotonia, and progressive blindness. Fundoscopic examination reveals a vivid bilateral "cherry-red spot" at the macula. Crucially, there is NO hepatosplenomegaly. Electron microscopy demonstrates lysosomes with "onion-skin" concentric whorled lamellae. Deficiency of which lysosomal enzyme is present?',
    options: [
      { id: 'A', text: 'Beta-hexosaminidase A (Tay-Sachs disease)' },
      { id: 'B', text: 'Sphingomyelinase (Niemann-Pick disease)' },
      { id: 'C', text: 'Glucocerebrosidase (Gaucher disease)' },
      { id: 'D', text: 'Galactocerebrosidase (Krabbe disease)' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Tay-Sachs disease (GM2 gangliosidosis) is an autosomal recessive lysosomal storage disease caused by deficiency of Beta-hexosaminidase A (HEXA gene mutation), causing toxic accumulation of GM2 ganglioside in neuronal lysosomes. Presentation: neurodevelopmental regression, cherry-red macular spot, hyperacusis, and onion-skin lysosomes. It is distinguished from Niemann-Pick by the complete ABSENCE of hepatosplenomegaly.',
    keyEnzymeOrConcept: 'Tay-Sachs Disease (Beta-Hexosaminidase A & GM2 Ganglioside)',
    clinicalCorrelation: 'Classic board differentiator: Tay-Sachs has NO hepatosplenomegaly; Niemann-Pick HAS hepatosplenomegaly.',
    highYieldFact: 'The macular cherry-red spot occurs because the macula is surrounded by pale, lipid-engorged ganglion cells, contrasting with the red choroid behind the thin fovea.',
  },
  {
    id: 'pl-89',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Intermediate',
    style: 'clinical_vignette',
    vignette:
      'A 9-month-old infant presents with neurodegeneration, progressive loss of motor milestones, a macular cherry-red spot on fundoscopy, and marked hepatosplenomegaly. Bone marrow aspirate reveals lipid-laden "foam cells" (macrophages filled with foamy, vacuolated cytoplasm). What lysosomal enzyme is deficient and what substrate accumulates?',
    options: [
      { id: 'A', text: 'Sphingomyelinase deficiency; accumulation of Sphingomyelin (Niemann-Pick disease Type A)' },
      { id: 'B', text: 'Beta-hexosaminidase A deficiency; accumulation of GM2 ganglioside' },
      { id: 'C', text: 'Glucocerebrosidase deficiency; accumulation of Glucocerebroside' },
      { id: 'D', text: 'Alpha-galactosidase A deficiency; accumulation of Ceramide trihexoside' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Niemann-Pick disease Type A is caused by severe deficiency of acid Sphingomyelinase (SMPD1 gene), leading to massive accumulation of Sphingomyelin in lysosomes throughout the reticuloendothelial system and CNS. Symptoms include early progressive neurodegeneration, cherry-red macular spot, prominent hepatosplenomegaly, and characteristic foamy histiocytes on bone marrow biopsy.',
    keyEnzymeOrConcept: 'Niemann-Pick Disease (Acid Sphingomyelinase & Sphingomyelin)',
    clinicalCorrelation: 'Mnemonic: "No man picks his nose with his big foamy cherry red liver" (Niemann-Pick, foam cells, cherry-red spot, hepatomegaly).',
    highYieldFact: 'Sphingomyelin is unique among sphingolipids because it contains a phosphate group (sphingophospholipid rather than a glycolipid).',
  },
  {
    id: 'pl-90',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Intermediate',
    style: 'clinical_vignette',
    vignette:
      'A 30-year-old female presents with severe fatigue, easy bruising, bone pain, and an atraumatic femoral neck fracture. Exam reveals massive splenomegaly. CBC shows pancytopenia (anemia and thrombocytopenia). Bone marrow biopsy demonstrates characteristic "wrinkled tissue paper" or "crumpled tissue paper" appearance of macrophage cytoplasm engorged with lipid. What is the most common lysosomal storage disorder diagnosed here?',
    options: [
      { id: 'A', text: 'Gaucher disease (Glucocerebrosidase / beta-glucosidase deficiency)' },
      { id: 'B', text: 'Tay-Sachs disease' },
      { id: 'C', text: 'Fabry disease' },
      { id: 'D', text: 'Metachromatic leukodystrophy' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Gaucher disease is the most common lysosomal storage disease worldwide, caused by autosomal recessive deficiency of Glucocerebrosidase (acid beta-glucosidase / GBA gene), leading to accumulation of Glucocerebroside (glucosylceramide). Type 1 (non-neuropathic) presents in adolescence/adulthood with splenomegaly, cytopenias, Erlenmeyer flask bone deformities, avascular necrosis, and pathognomonic "crumpled tissue paper" Gaucher cells.',
    keyEnzymeOrConcept: 'Gaucher Disease (Glucocerebrosidase & Glucocerebroside)',
    clinicalCorrelation: 'Treated very effectively with recombinant enzyme replacement therapy (Imiglucerase) or substrate reduction therapy (Miglustat).',
    highYieldFact: 'Gaucher cells are lipid-laden macrophages with fibrillary striations that stain strongly positive for Tartrate-Resistant Acid Phosphatase (TRAP).',
  },
  {
    id: 'pl-91',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Advanced',
    style: 'clinical_vignette',
    vignette:
      'An 18-year-old male presents with burning neuropathic pain in his hands and feet (acroparesthesias) that worsens with exercise or fever, hypohidrosis (inability to sweat), and clusters of dark reddish-purple punctate macules on his groin and umbilicus (angiokeratomas). Renal biopsy reveals zebra bodies on electron microscopy. Which X-linked recessive lysosomal storage disease does he have?',
    options: [
      { id: 'A', text: 'Fabry disease (Alpha-galactosidase A deficiency)' },
      { id: 'B', text: 'Hunter syndrome (Iduronate-2-sulfatase)' },
      { id: 'C', text: 'Lesch-Nyhan syndrome' },
      { id: 'D', text: 'Menkes disease' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Fabry disease is an X-linked recessive lysosomal storage disease caused by deficiency of Alpha-galactosidase A (GLA gene), leading to progressive accumulation of globotriaosylceramide (Gb3 / ceramide trihexoside) in vascular endothelial cells. Classic triad: burning acroparesthesias, angiokeratomas, and hypohidrosis. Without enzyme replacement therapy, patients succumb to premature stroke, hypertrophic cardiomyopathy, or progressive renal failure in their 30s–40s.',
    keyEnzymeOrConcept: 'Fabry Disease (Alpha-Galactosidase A & Ceramide Trihexoside)',
    clinicalCorrelation: 'Unique among lipid storage diseases for being X-linked recessive (along with Hunter syndrome among mucopolysaccharidoses).',
    highYieldFact: 'Whorled corneal opacities (cornea verticillata) on slit-lamp examination are an early asymptomatic diagnostic clue in Fabry disease.',
  },
  {
    id: 'pl-92',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Advanced',
    style: 'clinical_vignette',
    vignette:
      'A 4-month-old infant develops severe irritability, hypertonia, optic atrophy, and progressive spastic quadriparesis with loss of all motor milestones. Brain MRI reveals severe leukodystrophy with loss of myelin in the cerebral hemispheres. Histopathology shows multinucleated globoid cells in the white matter. Deficiency of which enzyme confirms Krabbe disease?',
    options: [
      { id: 'A', text: 'Galactocerebrosidase (Galactosylceramidase)' },
      { id: 'B', text: 'Arylsulfatase A' },
      { id: 'C', text: 'Sphingomyelinase' },
      { id: 'D', text: 'Alpha-L-iduronidase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Krabbe disease (globoid cell leukodystrophy) is an autosomal recessive disorder caused by deficiency of Galactocerebrosidase (GALC gene). This causes toxic accumulation of Galactosylceramide and Psychosine (galactosylsphingosine) in oligodendrocytes, leading to near-total destruction of myelin in the CNS and PNS. Histology shows characteristic multinucleated engorged macrophages known as "Globoid cells".',
    keyEnzymeOrConcept: 'Krabbe Disease (Galactocerebrosidase & Psychosine Toxicity)',
    clinicalCorrelation: 'Presents in early infancy with extreme irritability, hyperreflexia, spasticity, and rapid death before age 2.',
    highYieldFact: 'Psychosine is exquisitely cytotoxic to oligodendrocytes, driving rapid demyelination.',
  },
  {
    id: 'pl-93',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Advanced',
    style: 'clinical_vignette',
    vignette:
      'A 3-year-old child presents with progressive motor deterioration, ataxia, and dementia. Nerve biopsy demonstrates accumulation of sulfatides that change the color of toluidine blue dye from blue to reddish-brown (metachromasia). What enzyme is deficient in Metachromatic Leukodystrophy (MLD)?',
    options: [
      { id: 'A', text: 'Arylsulfatase A' },
      { id: 'B', text: 'Alpha-galactosidase A' },
      { id: 'C', text: 'Beta-glucosidase' },
      { id: 'D', text: 'Hexosaminidase B' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Metachromatic Leukodystrophy (MLD) is an autosomal recessive lysosomal storage disease caused by deficiency of Arylsulfatase A (ARSA gene), resulting in the accumulation of Cerebroside Sulfate (sulfatides) in myelin sheaths throughout the CNS and peripheral nerves. The sulfatide deposits exhibit "metachromasia" (changing the color of cationic dyes like cresyl violet or toluidine blue).',
    keyEnzymeOrConcept: 'Metachromatic Leukodystrophy (Arylsulfatase A & Sulfatides)',
    clinicalCorrelation: 'Causes progressive central and peripheral demyelination, loss of vision, ataxia, and spasticity in early childhood.',
    highYieldFact: 'Sulfatides are sulfated galactocerebrosides that constitute a major lipid component of the myelin sheath.',
  },
  {
    id: 'pl-94',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'What is the fundamental structural difference between the backbone of Glycerophospholipids and Sphingolipids?',
    options: [
      { id: 'A', text: 'Glycerophospholipids are built on a 3-carbon glycerol backbone; Sphingolipids are built on an 18-carbon amino alcohol sphingosine backbone' },
      { id: 'B', text: 'Glycerophospholipids contain no fatty acids' },
      { id: 'C', text: 'Sphingolipids contain three phosphate groups' },
      { id: 'D', text: 'Glycerophospholipids contain a steroid ring' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Glycerophospholipids (e.g. phosphatidylcholine, phosphatidylethanolamine) consist of a 3-carbon Glycerol backbone esterified with two fatty acids and a phosphorylated alcohol head group. Sphingolipids are built upon Sphingosine (an 18-carbon unsaturated amino alcohol synthesized from L-serine and palmitoyl-CoA). Attaching a fatty acid via an amide bond to sphingosine generates Ceramide, the parent precursor for all sphingolipids.',
    keyEnzymeOrConcept: 'Glycerol vs Sphingosine Backbone & Ceramide Structure',
    clinicalCorrelation: 'Ceramide serves as the core hydrophobic anchor for sphingomyelin and all glycosphingolipids (cerebrosides, gangliosides).',
    highYieldFact: 'Condensation of serine and palmitoyl-CoA to form 3-ketosphinganine is catalyzed by Serine Palmitoyltransferase (requires Vitamin B6 / PLP).',
  },
  {
    id: 'pl-95',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'Cardiolipin (diphosphatidylglycerol) is a structurally unique phospholipid that contains four fatty acyl chains and two phosphate groups. Where is cardiolipin exclusively found within human cells, where it is essential for the structural integrity of respiratory chain complexes?',
    options: [
      { id: 'A', text: 'Inner mitochondrial membrane' },
      { id: 'B', text: 'Outer nuclear envelope' },
      { id: 'C', text: 'Rough endoplasmic reticulum' },
      { id: 'D', text: 'Peroxisomal membrane' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Cardiolipin (diphosphatidylglycerol) is synthesized and localized almost exclusively in the Inner Mitochondrial Membrane (~20% of total inner membrane lipid). It acts as an insulating barrier against proton leakage and anchors respiratory chain complexes (Complexes I, III, IV, and ATP synthase) into active supercomplexes (respirasomes).',
    keyEnzymeOrConcept: 'Cardiolipin Localization & Mitochondrial Energetics',
    clinicalCorrelation: 'Barth syndrome (X-linked defect in the cardiolipin transacylase Tafazzin) causes dilated cardiomyopathy, neutropenia, and skeletal myopathy.',
    highYieldFact: 'Cardiolipin is also the target antigen in the VDRL/RPR screening tests for Treponema pallidum (Syphilis) and in Antiphospholipid Syndrome.',
  },
  {
    id: 'pl-96',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Advanced',
    style: 'enzyme_mechanism',
    vignette:
      'Which phospholipase is activated by Gq-coupled receptor signaling (e.g., via alpha-1 adrenergic, V1 vasopressin, or H1 histamine receptors) to cleave membrane Phosphatidylinositol 4,5-bisphosphate (PIP2) into Inositol 1,4,5-trisphosphate (IP3) and Diacylglycerol (DAG)?',
    options: [
      { id: 'A', text: 'Phospholipase C (PLC)' },
      { id: 'B', text: 'Phospholipase A2 (PLA2)' },
      { id: 'C', text: 'Phospholipase D (PLD)' },
      { id: 'D', text: 'Phospholipase A1 (PLA1)' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Phospholipase C (PLC-beta / PLC-gamma) hydrolyzes the phosphodiester bond on the glycerol side of the phosphate in PIP2, releasing soluble Inositol 1,4,5-trisphosphate (IP3) into the cytoplasm and leaving Diacylglycerol (DAG) in the plasma membrane. IP3 opens calcium channels on the endoplasmic reticulum, while DAG and calcium activate Protein Kinase C (PKC).',
    keyEnzymeOrConcept: 'Phospholipase C & The IP3/DAG Second Messenger Cascade',
    clinicalCorrelation: 'Gq signaling mnemonic: "HAVe 1 M&M": H1, Alpha-1, V1, M1, M3 receptors all signal through Phospholipase C.',
    highYieldFact: 'Lithium (used in bipolar disorder) inhibits inositol monophosphatase, depleting free inositol and dampening hyperactive PIP2 signaling.',
  },
  {
    id: 'pl-97',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Intermediate',
    style: 'pharmacology',
    vignette:
      'Arachidonic acid (20:4 cis-Δ5,8,11,14) is esterified primarily at the C2 position of membrane glycerophospholipids. Which enzyme is responsible for cleaving and mobilizing free arachidonic acid in response to inflammatory stimuli, and which drug class directly inhibits this enzyme via lipocortin/annexin A1 induction?',
    options: [
      { id: 'A', text: 'Phospholipase A2 (PLA2); inhibited by Glucocorticoids (Corticosteroids)' },
      { id: 'B', text: 'Cyclooxygenase-1; inhibited by Acetaminophen' },
      { id: 'C', text: 'Lipoprotein lipase; inhibited by Heparin' },
      { id: 'D', text: 'Pancreatic lipase; inhibited by Statins' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Phospholipase A2 (PLA2) specifically hydrolyzes the sn-2 ester bond of membrane phospholipids, releasing free Arachidonic Acid, the rate-limiting substrate for eicosanoid synthesis. Glucocorticoids (e.g. Dexamethasone, Prednisone) induce the synthesis of Lipocortin-1 (Annexin A1), which potently inhibits PLA2, shutting down production of all downstream prostaglandins, thromboxanes, and leukotrienes.',
    keyEnzymeOrConcept: 'Phospholipase A2 (PLA2) & Corticosteroid Inhibition',
    clinicalCorrelation: 'Because glucocorticoids block PLA2, they suppress both the Cyclooxygenase (COX) and Lipoxygenase (LOX) pathways simultaneously.',
    highYieldFact: 'Snake venom toxins (such as from rattlesnakes or cobras) contain hyperactive PLA2 that destroys RBC membranes and causes massive hemolysis.',
  },
  {
    id: 'pl-98',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Intermediate',
    style: 'pharmacology',
    vignette:
      'Aspirin (Acetylsalicylic Acid) differs fundamentally from other Non-Steroidal Anti-Inflammatory Drugs (NSAIDs like Ibuprofen and Naproxen) in its mechanism of Cyclooxygenase (COX-1 and COX-2) inhibition. What is the unique biochemical mechanism of Aspirin?',
    options: [
      { id: 'A', text: 'Irreversible covalent acetylation of a serine residue (Ser529 in COX-1, Ser516 in COX-2) in the active site channel' },
      { id: 'B', text: 'Reversible competitive inhibition of the heme cofactor' },
      { id: 'C', text: 'Allosteric chelation of iron' },
      { id: 'D', text: 'Ubiquitination of the COX enzyme' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Aspirin is the only NSAID that causes Irreversible Covalent Acetylation of Cyclooxygenase. It transfers its acetyl group to a serine residue (Ser529 in COX-1) near the catalytic pocket, permanently blocking arachidonate entry. Because platelets lack nuclei and cannot synthesize new protein, low-dose aspirin inhibits platelet Thromboxane A2 (TXA2) generation for the entire lifetime of the platelet (7–10 days).',
    keyEnzymeOrConcept: 'Aspirin Covalent Inactivation of COX-1 vs Reversible NSAIDs',
    clinicalCorrelation: 'Low-dose aspirin (81 mg) selectively knocks out platelet TXA2 (prothrombotic) while vascular endothelial cells resynthesize COX to make PGI2 (antithrombotic).',
    highYieldFact: 'Ibuprofen and naproxen are reversible, competitive inhibitors; they can block aspirin from reaching the catalytic serine if taken concurrently.',
  },
  {
    id: 'pl-99',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Advanced',
    style: 'pharmacology',
    vignette:
      'A 35-year-old asthmatic patient takes Montelukast (Singulair) for maintenance therapy. Which class of inflammatory eicosanoids synthesized via the 5-Lipoxygenase (5-LOX) pathway does Montelukast block by antagonizing the CysLT1 receptor?',
    options: [
      { id: 'A', text: 'Cysteinyl Leukotrienes (LTC4, LTD4, LTE4)' },
      { id: 'B', text: 'Prostacyclin (PGI2)' },
      { id: 'C', text: 'Thromboxane A2 (TXA2)' },
    { id: 'D', text: 'Prostaglandin E2 (PGE2)' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Arachidonic acid is converted by 5-Lipoxygenase (5-LOX) into LTA4, which is converted to the slow-reacting substance of anaphylaxis: Cysteinyl Leukotrienes (LTC4, LTD4, LTE4). These produce intense bronchoconstriction, increased vascular permeability, and mucosal edema. Montelukast and Zafirlukast are competitive antagonists of the Cysteinyl Leukotriene Receptor 1 (CysLT1).',
    keyEnzymeOrConcept: '5-LOX Pathway & Cysteinyl Leukotriene Receptor Antagonists',
    clinicalCorrelation: 'Zileuton acts upstream by directly inhibiting the 5-Lipoxygenase enzyme itself.',
    highYieldFact: 'LTB4 is a non-cysteinyl leukotriene that acts as a potent neutrophil chemoattractant ("Neutrophils arrive B-4 all others").',
  },
  {
    id: 'pl-100',
    category: 'Phospholipids & Sphingolipids',
    difficulty: 'Intermediate',
    style: 'pathology_match',
    vignette:
      'Which vascular endothelial eicosanoid opposes the platelet-aggregating and vasoconstricting actions of Thromboxane A2 (TXA2) by promoting potent vasodilation and inhibiting platelet aggregation via increased cAMP?',
    options: [
      { id: 'A', text: 'Prostacyclin (PGI2)' },
      { id: 'B', text: 'Prostaglandin F2alpha' },
      { id: 'C', text: 'Leukotriene C4' },
      { id: 'D', text: 'Thromboxane B2' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Prostacyclin (PGI2) is synthesized primarily by vascular endothelial cells via prostacyclin synthase. PGI2 acts on IP receptors on platelets and vascular smooth muscle to stimulate adenylyl cyclase and elevate cAMP. This produces profound vasodilation and inhibits platelet aggregation, acting in dynamic homeostatic opposition to platelet-derived TXA2.',
    keyEnzymeOrConcept: 'Prostacyclin (PGI2) vs Thromboxane A2 (TXA2) Balance',
    clinicalCorrelation: 'Selective COX-2 inhibitors (e.g. Rofecoxib / Celecoxib) suppressed endothelial PGI2 without suppressing platelet TXA2 (COX-1), increasing thrombotic cardiovascular events.',
    highYieldFact: 'Mnemonic: PGI2 = "Platelet Gathering Inhibited"; TXA2 = "Thrombosis Activator".',
  },
];
