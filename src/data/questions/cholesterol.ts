import { LipidQuestion } from '../../types';

export const cholesterolQuestions: LipidQuestion[] = [
  {
    id: 'ch-53',
    category: 'Cholesterol & Steroids',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'What is the rate-limiting and committed enzyme in de novo cholesterol biosynthesis, and what high-energy reducing cofactor is consumed during this step?',
    options: [
      { id: 'A', text: 'HMG-CoA synthase; consumes 1 NADH' },
      { id: 'B', text: 'HMG-CoA reductase; consumes 2 NADPH' },
      { id: 'C', text: 'Squalene synthase; consumes 1 FADH2' },
      { id: 'D', text: '7-Dehydrocholesterol reductase; consumes 2 ATP' },
    ],
    correctAnswerId: 'B',
    explanation:
      'HMG-CoA reductase (HMGR), an integral glycoprotein of the smooth endoplasmic reticulum, catalyzes the irreversible four-electron reduction of 3-hydroxy-3-methylglutaryl-CoA (HMG-CoA) to Mevalonate. This reaction consumes 2 molecules of NADPH and releases CoASH. It is the primary rate-limiting and pharmacologically targeted step in cholesterol synthesis.',
    keyEnzymeOrConcept: 'HMG-CoA Reductase (HMGR) Committed Step',
    clinicalCorrelation: 'Statins are structural analogs of HMG-CoA that competitively inhibit HMGR, reducing cardiovascular disease mortality.',
    highYieldFact: 'HMGR is embedded in the ER membrane with its catalytic domain projecting into the cytosol.',
  },
  {
    id: 'ch-54',
    category: 'Cholesterol & Steroids',
    difficulty: 'Advanced',
    style: 'enzyme_mechanism',
    vignette:
      'When intracellular cholesterol levels in hepatocytes fall, how does the SREBP-2 (Sterol Regulatory Element-Binding Protein 2) / SCAP complex respond to upregulate cholesterol synthesis and LDL uptake?',
    options: [
      { id: 'A', text: 'SCAP senses sterol depletion, escorting SREBP-2 from the ER to the Golgi, where Site-1 and Site-2 proteases (S1P/S2P) cleave and release the active basic helix-loop-helix transcription factor to the nucleus' },
      { id: 'B', text: 'SREBP-2 is directly phosphorylated by AMPK and binds directly to the plasma membrane' },
      { id: 'C', text: 'SCAP degrades HMG-CoA reductase in the lysosome' },
      { id: 'D', text: 'Cholesterol directly binds RNA polymerase II to stop transcription' },
    ],
    correctAnswerId: 'A',
    explanation:
      'In cholesterol depletion, SCAP undergoes a conformational shift and escorts SREBP-2 from the ER membrane to the Golgi via COPII vesicles. In the Golgi, two sequential proteases (S1P and S2P) cleave SREBP-2, liberating its N-terminal bHLH transcription factor fragment. This fragment travels to the nucleus and binds Sterol Regulatory Elements (SRE), upregulating both HMG-CoA Reductase and the LDL Receptor.',
    keyEnzymeOrConcept: 'SREBP-2 / SCAP Sterol Sensing & Proteolytic Activation',
    clinicalCorrelation: 'When statins inhibit HMGR and lower intracellular cholesterol, SREBP-2 upregulates LDL receptors on hepatocytes, clearing atherogenic LDL from circulation.',
    highYieldFact: 'When cholesterol is high, sterols bind SCAP directly, keeping it tethered to Insig in the ER and preventing Golgi translocation.',
  },
  {
    id: 'ch-55',
    category: 'Cholesterol & Steroids',
    difficulty: 'Intermediate',
    style: 'pharmacology',
    vignette:
      'Statin medications (e.g., Atorvastatin, Rosuvastatin) act as competitive inhibitors of HMG-CoA reductase. What chemical moiety in statin molecules makes them such potent competitive inhibitors?',
    options: [
      { id: 'A', text: 'A beta-lactam ring that acylates the active site serine' },
      { id: 'B', text: 'A dihydroxyheptanoic acid moiety that structurally mimics the HMG-CoA substrate transition state' },
      { id: 'C', text: 'A steroid tetracyclic cyclopentanoperhydrophenanthrene ring' },
      { id: 'D', text: 'A pyrophosphate chain mimicking isopentenyl pyrophosphate' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Statins possess an active 3,5-dihydroxyheptanoic acid side chain (or a lactone ring that is hydrolyzed to it in vivo). This moiety is an almost exact structural mimic of the 3-hydroxy-3-methylglutaryl (HMG) portion of HMG-CoA, binding the active site of HMGR with a Ki in the nanomolar range (1,000 to 10,000 times higher affinity than the natural substrate HMG-CoA).',
    keyEnzymeOrConcept: 'Statin Pharmacophore & Transition-State Mimicry',
    clinicalCorrelation: 'Statins can cause myopathy and elevated CK; rare risk of rhabdomyolysis is increased when combined with fibrates or CYP3A4 inhibitors.',
    highYieldFact: 'Lovastatin and simvastatin are prodrug lactones; atorvastatin and rosuvastatin are administered in their active open-ring form.',
  },
  {
    id: 'ch-56',
    category: 'Cholesterol & Steroids',
    difficulty: 'Advanced',
    style: 'enzyme_mechanism',
    vignette:
      'During the condensation of isoprenoid units in cholesterol biosynthesis, two 15-carbon Farnesyl Pyrophosphate (FPP) molecules condense head-to-head in an NADPH-dependent reaction. What 30-carbon hydrocarbon is formed?',
    options: [
      { id: 'A', text: 'Geranyl pyrophosphate' },
      { id: 'B', text: 'Squalene' },
      { id: 'C', text: 'Lanosterol' },
      { id: 'D', text: 'Zymosterol' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Squalene synthase, an ER membrane enzyme, couples two molecules of Farnesyl Pyrophosphate (FPP, 15 carbons each) head-to-head with the consumption of 1 NADPH, releasing 2 inorganic pyrophosphates (PPi) to yield Squalene (30 carbons). Squalene is the first uncharged, completely hydrophobic hydrocarbon intermediate in the pathway.',
    keyEnzymeOrConcept: 'Squalene Synthase & Condensation of Isoprenoids',
    clinicalCorrelation: 'Farnesyl pyrophosphate (FPP) is also required for protein prenylation (Ras GTPase anchoring) and Coenzyme Q (ubiquinone) synthesis.',
    highYieldFact: 'Squalene is a non-cyclic triterpene; cyclization to Lanosterol is catalyzed by squalene monooxygenase and oxidosqualene cyclase.',
  },
  {
    id: 'ch-57',
    category: 'Cholesterol & Steroids',
    difficulty: 'Advanced',
    style: 'enzyme_mechanism',
    vignette:
      'What is the first cyclic sterol intermediate formed in animal cholesterol biosynthesis, containing the characteristic four-ring steroid nucleus?',
    options: [
      { id: 'A', text: 'Cholesterol' },
      { id: 'B', text: 'Lanosterol' },
      { id: 'C', text: '7-Dehydrocholesterol' },
      { id: 'D', text: 'Desmosterol' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Squalene is epoxidized by squalene monooxygenase to squalene 2,3-epoxide. Then, oxidosqualene:lanosterol cyclase catalyzes a spectacular concerted cationic polycyclization, folding the linear squalene into the 4-ring tetracyclic steroid nucleus, generating Lanosterol (30 carbons). Subsequent 19-step enzymatic processing (demethylations, double bond migrations) converts lanosterol to 27-carbon Cholesterol.',
    keyEnzymeOrConcept: 'Lanosterol Polycyclization & First Steroid Intermediate',
    clinicalCorrelation: 'In fungi, lanosterol is converted to ergosterol; azole antifungals (e.g. fluconazole) inhibit 14alpha-demethylase in this pathway.',
    highYieldFact: 'Lanosterol retains 3 extra methyl groups (one at C14, two at C4) that must be removed by oxidative demethylation to form cholesterol.',
  },
  {
    id: 'ch-58',
    category: 'Cholesterol & Steroids',
    difficulty: 'Intermediate',
    style: 'clinical_vignette',
    vignette:
      'An infant presents with microcephaly, syndactyly of the second and third toes, cleft palate, and ambiguous genitalia. Serum biochemical analysis reveals profoundly low cholesterol and massively elevated levels of 7-dehydrocholesterol. What autosomal recessive syndrome is this?',
    options: [
      { id: 'A', text: 'Smith-Lemli-Opitz syndrome (SLOS)' },
      { id: 'B', text: 'Zellweger syndrome' },
      { id: 'C', text: 'Refsum disease' },
      { id: 'D', text: 'Fabry disease' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Smith-Lemli-Opitz syndrome (SLOS) is caused by mutations in DHCR7, encoding 7-Dehydrocholesterol Reductase, which catalyzes the final step in cholesterol biosynthesis (reduction of the Δ7 double bond of 7-dehydrocholesterol to form cholesterol). Lack of cholesterol and accumulation of toxic 7-DHC causes severe malformations, mental retardation, and syndactyly (2-3 toe fusion).',
    keyEnzymeOrConcept: 'Smith-Lemli-Opitz Syndrome (7-Dehydrocholesterol Reductase / DHCR7)',
    clinicalCorrelation: 'Cholesterol is essential for Hedgehog signaling (Sonic Hedgehog autoproteolytic cleavage and palmitoylation/cholesterol addition) during embryogenesis.',
    highYieldFact: '7-Dehydrocholesterol in the skin is also the photochemical precursor of Vitamin D3 upon exposure to ultraviolet B (UVB) light.',
  },
  {
    id: 'ch-59',
    category: 'Cholesterol & Steroids',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'What is the rate-limiting and committed enzyme in the conversion of cholesterol into bile acids in the liver, and what cofactor is required?',
    options: [
      { id: 'A', text: 'Cholesterol 7alpha-hydroxylase (CYP7A1); requires NADPH and O2' },
      { id: 'B', text: 'HMG-CoA reductase; requires NADH' },
      { id: 'C', text: 'Sterol 27-hydroxylase; requires FAD' },
      { id: 'D', text: 'Bile salt export pump (BSEP); requires ATP' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Cholesterol 7alpha-hydroxylase (CYP7A1), a microsomal cytochrome P450 enzyme in hepatocytes, catalyzes the rate-limiting and committed step in bile acid synthesis by introducing a hydroxyl group at carbon 7 of cholesterol. It requires NADPH and molecular O2.',
    keyEnzymeOrConcept: 'Cholesterol 7alpha-hydroxylase (CYP7A1)',
    clinicalCorrelation: 'CYP7A1 is feedback-inhibited by bile acids returning via the portal circulation through activation of the FXR nuclear receptor and FGF19.',
    highYieldFact: 'Conversion to bile acids is the principal quantitative route for cholesterol elimination from the human body.',
  },
  {
    id: 'ch-60',
    category: 'Cholesterol & Steroids',
    difficulty: 'Intermediate',
    style: 'enzyme_mechanism',
    vignette:
      'What are the two primary bile acids synthesized directly from cholesterol by human hepatocytes prior to conjugation?',
    options: [
      { id: 'A', text: 'Deoxycholic acid and Lithocholic acid' },
      { id: 'B', text: 'Cholic acid and Chenodeoxycholic acid' },
      { id: 'C', text: 'Ursodeoxycholic acid and Taurocholic acid' },
      { id: 'D', text: 'Glycocholic acid and Taurochenodeoxycholic acid' },
    ],
    correctAnswerId: 'B',
    explanation:
      'The two primary bile acids synthesized in human hepatocytes are Cholic Acid (a trihydroxy bile acid: 3alpha, 7alpha, 12alpha) and Chenodeoxycholic Acid (a dihydroxy bile acid: 3alpha, 7alpha). In the distal ileum and colon, bacterial 7alpha-dehydroxylase strips the 7-OH group, converting them to secondary bile acids: deoxycholic acid and lithocholic acid.',
    keyEnzymeOrConcept: 'Primary Bile Acids (Cholic & Chenodeoxycholic Acids)',
    clinicalCorrelation: 'Ursodeoxycholic acid (UDCA) is a hydrophilic secondary bile acid used clinically to dissolve radiolucent cholesterol gallstones.',
    highYieldFact: 'Before secretion into bile canaliculi, primary bile acids are conjugated with Glycine or Taurine in a ~3:1 ratio to lower their pKa.',
  },
  {
    id: 'ch-61',
    category: 'Cholesterol & Steroids',
    difficulty: 'Advanced',
    style: 'pharmacology',
    vignette:
      'Bile acid sequestrants such as Cholestyramine and Colesevelam bind negatively charged bile acids in the intestinal lumen, preventing their reabsorption in the terminal ileum. How does this lower circulating serum LDL cholesterol?',
    options: [
      { id: 'A', text: 'By interrupting enterohepatic circulation, the liver converts more intracellular cholesterol into new bile acids, reducing hepatic sterol and upregulating LDL receptors' },
      { id: 'B', text: 'By directly inhibiting intestinal pancreatic lipase' },
      { id: 'C', text: 'By covalently inactivating ApoB-100' },
      { id: 'D', text: 'By destroying circulating LDL particles via lipid peroxidation' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Over 95% of bile acids are normally reabsorbed in the terminal ileum (enterohepatic circulation). Sequestrants prevent reabsorption, causing bile acid wasting in feces. To compensate, hepatic CYP7A1 derepresses, converting hepatocyte cholesterol into new bile acids. Falling intracellular cholesterol triggers SREBP-2 to upregulate LDL receptors on hepatocytes, clearing atherogenic LDL from plasma.',
    keyEnzymeOrConcept: 'Bile Acid Sequestrants & Interruption of Enterohepatic Circulation',
    clinicalCorrelation: 'Sequestrants can cause a compensatory rise in hepatic VLDL synthesis, potentially worsening baseline hypertriglyceridemia.',
    highYieldFact: 'Colesevelam does not impair the absorption of other medications as significantly as older resins like cholestyramine.',
  },
  {
    id: 'ch-62',
    category: 'Cholesterol & Steroids',
    difficulty: 'Advanced',
    style: 'pharmacology',
    vignette:
      'Ezetimibe selectively reduces the intestinal absorption of dietary and biliary cholesterol without inhibiting triglyceride or fat-soluble vitamin uptake. Which apical brush-border transport protein does Ezetimibe specifically inhibit?',
    options: [
      { id: 'A', text: 'Niemann-Pick C1-Like 1 (NPC1L1)' },
      { id: 'B', text: 'ABCA1' },
      { id: 'C', text: 'SGLT-1' },
      { id: 'D', text: 'Microsomal Triglyceride Transfer Protein (MTP)' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Ezetimibe localizes to the brush border of enterocytes in the small intestine and selectively inhibits the Niemann-Pick C1-Like 1 (NPC1L1) cholesterol transporter. This reduces intestinal cholesterol delivery to the liver by ~50%, reducing hepatic cholesterol stores and inducing hepatic LDL receptor expression. Typically combined with statins (IMPROVE-IT trial).',
    keyEnzymeOrConcept: 'Ezetimibe & NPC1L1 Transporter Inhibition',
    clinicalCorrelation: 'Adding ezetimibe to statin therapy produces an additional ~15-20% reduction in circulating LDL-C.',
    highYieldFact: 'ABCG5 and ABCG8 transporters pump plant sterols and excess cholesterol back out of enterocytes into the lumen.',
  },
  {
    id: 'ch-63',
    category: 'Cholesterol & Steroids',
    difficulty: 'Intermediate',
    style: 'pathology_match',
    vignette:
      'Cholesterol gallstone formation (cholelithiasis) occurs when bile becomes supersaturated with cholesterol relative to solubilizing agents. Which two components in bile are responsible for forming mixed micelles to keep hydrophobic cholesterol in aqueous solution?',
    options: [
      { id: 'A', text: 'Bile salts (bile acids) and Phosphatidylcholine (Lecithin)' },
      { id: 'B', text: 'Albumin and Bilirubin' },
      { id: 'C', text: 'Cholesterol ester and Triglycerides' },
      { id: 'D', text: 'Bicarbonate and Alkaline phosphatase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Cholesterol is insoluble in water. In gallbladder bile, it is held in liquid solution within mixed macromolecular micelles and unilamellar vesicles composed of Bile Salts and Phosphatidylcholine (Lecithin). If cholesterol secretion increases (e.g. obesity, estrogens) or bile salt/lecithin secretion drops (e.g. ileal resection, fibrates inhibiting CYP7A1), cholesterol precipitates as gallstones.',
    keyEnzymeOrConcept: 'Solubilization of Cholesterol in Bile by Bile Salts & Lecithin',
    clinicalCorrelation: 'Risk factors for cholesterol gallstones: the 4 Fs (Female, Fat, Fertile/Forty, Fair) due to estrogen upregulating HMG-CoA reductase and progesterone causing biliary stasis.',
    highYieldFact: 'Fibrate medications (e.g. gemfibrozil) inhibit CYP7A1, increasing biliary cholesterol saturation and raising gallstone risk.',
  },
  {
    id: 'ch-64',
    category: 'Cholesterol & Steroids',
    difficulty: 'Advanced',
    style: 'enzyme_mechanism',
    vignette:
      'Which intracellular enzyme catalyzes the esterification of excess free cholesterol with a fatty acyl-CoA into hydrophobic Cholesteryl Esters for storage in cytosolic lipid droplets within hepatocytes and macrophages?',
    options: [
      { id: 'A', text: 'Lecithin-cholesterol acyltransferase (LCAT)' },
      { id: 'B', text: 'Acyl-CoA:cholesterol acyltransferase (ACAT / SOAT)' },
      { id: 'C', text: 'Cholesteryl ester transfer protein (CETP)' },
      { id: 'D', text: 'Hormone-sensitive lipase (HSL)' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Acyl-CoA:cholesterol acyltransferase (ACAT, also known as sterol O-acyltransferase / SOAT) is an intracellular ER enzyme that transfers an acyl group from fatty acyl-CoA to the 3-OH group of cholesterol, forming cholesteryl ester for storage. In contrast, LCAT is an extracellular plasma enzyme on HDL that uses phosphatidylcholine as the fatty acid donor.',
    keyEnzymeOrConcept: 'ACAT (Intracellular) vs LCAT (Extracellular) Esterification',
    clinicalCorrelation: 'Excess unesterified free cholesterol is toxic to cell membranes; ACAT converts it into inert droplets, forming foam cells in macrophages.',
    highYieldFact: 'ACAT-1 is ubiquitous (macrophages); ACAT-2 is localized to liver and intestine for lipoprotein core packaging.',
  },
  {
    id: 'ch-65',
    category: 'Cholesterol & Steroids',
    difficulty: 'Intermediate',
    style: 'clinical_vignette',
    vignette:
      'In steroid hormone biosynthesis, what is the initial, rate-limiting enzymatic reaction that cleaves the 6-carbon side chain of cholesterol (27 carbons) to generate Pregnenolone (21 carbons), and where does it occur?',
    options: [
      { id: 'A', text: 'Cholesterol side-chain cleavage enzyme (CYP11A1 / Desmolase) in the inner mitochondrial membrane' },
      { id: 'B', text: '17alpha-hydroxylase in the smooth ER' },
      { id: 'C', text: 'Aromatase (CYP19A1) in the cytoplasm' },
      { id: 'D', text: '21-hydroxylase in peroxisomes' },
    ],
    correctAnswerId: 'A',
    explanation:
      'The committed and rate-limiting step in all steroidogenesis is the cleavage of the side chain of cholesterol by mitochondrial Cholesterol Side-Chain Cleavage Enzyme (CYP11A1, also known as Desmolase / P450scc). It oxidizes and removes carbons 22–27 (isocaproaldehyde) to produce Pregnenolone (21 carbons), the universal precursor of all steroid hormones.',
    keyEnzymeOrConcept: 'Cholesterol Desmolase (CYP11A1) in Steroidogenesis',
    clinicalCorrelation: 'ACTH stimulates steroidogenesis in the adrenal cortex by activating StAR (steroidogenic acute regulatory protein) and CYP11A1.',
    highYieldFact: 'StAR protein transports hydrophobic cholesterol across the aqueous intermembrane space into the inner mitochondrial membrane.',
  },
  {
    id: 'ch-66',
    category: 'Cholesterol & Steroids',
    difficulty: 'Advanced',
    style: 'enzyme_mechanism',
    vignette:
      'The 5-carbon active building blocks for all isoprenoid and sterol biosynthesis are Isopentenyl Pyrophosphate (IPP) and Dimethylallyl Pyrophosphate (DMAPP). Which enzyme interconverts these two allylic isomers?',
    options: [
      { id: 'A', text: 'Isopentenyl pyrophosphate isomerase' },
      { id: 'B', text: 'Mevalonate kinase' },
      { id: 'C', text: 'Phosphomevalonate kinase' },
      { id: 'D', text: 'Pyrophosphomevalonate decarboxylase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Decarboxylation of 6-carbon mevalonate pyrophosphate yields Isopentenyl pyrophosphate (IPP). Isopentenyl pyrophosphate isomerase catalyzes the reversible allylic isomerization of IPP into its electrophilic isomer, Dimethylallyl pyrophosphate (DMAPP). Head-to-tail condensation of one DMAPP with one IPP then generates 10-carbon Geranyl pyrophosphate.',
    keyEnzymeOrConcept: 'Isopentenyl Pyrophosphate Isomerase & Active Isoprenes',
    clinicalCorrelation: 'Isoprenoids are building blocks not only for cholesterol, but also for dolichol (N-glycosylation), heme A, and ubiquinone.',
    highYieldFact: 'IPP and DMAPP are both 5-carbon active isoprene units; IPP is nucleophilic and DMAPP is electrophilic.',
  },
  {
    id: 'ch-67',
    category: 'Cholesterol & Steroids',
    difficulty: 'Advanced',
    style: 'pharmacology',
    vignette:
      'Which regulatory protein accelerates the ubiquitin-proteasome degradation of HMG-CoA reductase in the endoplasmic reticulum when intracellular sterol or oxysterol concentrations are high?',
    options: [
      { id: 'A', text: 'Insig (Insulin-induced gene protein)' },
      { id: 'B', text: 'Clathrin' },
      { id: 'C', text: 'Apolipoprotein E' },
      { id: 'D', text: 'PCSK9' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Insig-1 and Insig-2 proteins in the ER membrane serve dual sensory roles. When sterols (cholesterol/oxysterols) are abundant, Insig binds the sterol-sensing domain of HMG-CoA reductase, recruiting membrane-bound E3 ubiquitin ligases (gp78 / TRC8). This polyubiquitinates HMGR, extracting it from the ER membrane for proteasomal degradation (reducing its half-life from >12 hours to <1 hour).',
    keyEnzymeOrConcept: 'Insig-Mediated Sterol-Accelerated Degradation of HMGR',
    clinicalCorrelation: 'Feedback degradation ensures that when cholesterol is abundant, HMGR protein is rapidly cleared.',
    highYieldFact: 'Insig also binds the SCAP-SREBP complex in the ER, preventing its translocation to the Golgi when sterols are high.',
  },
  {
    id: 'ch-68',
    category: 'Cholesterol & Steroids',
    difficulty: 'Intermediate',
    style: 'clinical_vignette',
    vignette:
      'A 52-year-old male with severe hypercholesterolemia has palmar and tendon xanthomas. His physician prescribes Atorvastatin. When statin therapy depletes intracellular hepatic mevalonate and cholesterol, what compensatory upregulation of another lipid pathway frequently occurs that explains why statins do not eliminate all cardiovascular risk?',
    options: [
      { id: 'A', text: 'SREBP-2 also transactivates the PCSK9 gene, promoting degradation of some LDL receptors' },
      { id: 'B', text: 'Direct activation of glucagon receptors' },
      { id: 'C', text: 'Downregulation of HDL apolipoprotein A-I' },
      { id: 'D', text: 'Inhibition of lipoprotein lipase' },
    ],
    correctAnswerId: 'A',
    explanation:
      'SREBP-2 transcribes not only the LDL receptor and HMG-CoA reductase, but ALSO PCSK9 (proprotein convertase subtilisin/kexin type 9). PCSK9 binds the LDL receptor and directs it to lysosomal destruction instead of recycling. Consequently, statin therapy paradoxically increases circulating PCSK9 levels, blunting the full therapeutic potential of LDL receptor upregulation.',
    keyEnzymeOrConcept: 'PCSK9 Upregulation by Statins via SREBP-2',
    clinicalCorrelation: 'Combining statins with PCSK9 monoclonal antibodies (Evolocumab / Alirocumab) prevents LDL receptor degradation, lowering LDL by up to 60-70%.',
    highYieldFact: 'PCSK9 prevents the conformational change required for LDL receptor release from LDL in the endosome, targeting it to lysosomes.',
  },
];
