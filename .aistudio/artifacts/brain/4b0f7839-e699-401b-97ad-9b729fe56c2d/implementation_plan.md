# LipidIQ: Advanced Lipid Chemistry & Metabolism Examination Platform

A high-yield, interactive medical biochemistry exam platform focusing on Lipid Chemistry and Metabolism. Features a comprehensive 100-question medical question bank, rapid-fire competitive per-question timers, instant diagnostic feedback with encouraging reinforcement, mechanistic explanations, granular pathway-level weakness tracking, and an interactive review deck for targeted remediation.

### User Review & Critical Decisions

> [!IMPORTANT]
> **Revised Bank Capacity (User Request)**:
> - **100 Diverse Questions**: The platform will come equipped with an expansive, fully curated 100-question medical biochemistry bank across diverse question styles (clinical vignettes, laboratory lipid panel interpretation, enzymatic regulation & hormonal control, energetics & ATP calculations, pharmacological mechanisms, and lysosomal storage disease diagnoses).
> - **Difficulty Distribution**: Calibrated predominantly to Intermediate (60%) and Advanced / USMLE Board-level (40%), challenging students to apply chemical logic rather than simple memorization.
> - **Language & Terminology**: Full English questions, choices, clinical scenarios, and detailed explanations.
> - **Timing Mode**: Fast & competitive per-question countdown timer (e.g., 25s rapid-fire with dynamic progress bar, speed bonus calculation, and timeout handling) to test rapid recall and presence of mind.
> - **Performance Analytics & Remediation**: Pathway-by-pathway mastery radar and automatic logging of every incorrect answer to the "Weakness Vault" for dedicated re-testing.

---

### 1. Overview & Core Concept

**LipidIQ** provides medical, pharmacy, and biochemistry students with an authentic, fast-paced testing arena to master lipid chemistry and metabolic pathways. Unlike dry quiz forms, it combines the urgency of timed board exams with active learning:
- **100-Question Comprehensive Medical Bank**: Spans 6 critical lipid disciplines with diverse question styles:
  1. *Fatty Acid Oxidation & Carnitine Shuttle* (20 questions): CPT-I & CPT-II deficiencies, MCAD deficiency, ATP net yields, odd-chain propionyl-CoA pathway, peroxisomal oxidation (Zellweger, Refsum).
  2. *Lipogenesis & Triacylglycerol Metabolism* (18 questions): Citrate shuttle, Acetyl-CoA Carboxylase regulation, Fatty Acid Synthase, glycerol-3-phosphate pathways, Hormone-Sensitive Lipase.
  3. *Ketogenesis & Ketolysis* (14 questions): Mitochondrial vs cytosolic HMG-CoA synthase, lack of thiophorase (SCOT) in hepatic tissue, diabetic ketoacidosis, fasting adaptations.
  4. *Cholesterol & Bile Acid Metabolism* (16 questions): HMG-CoA reductase, SREBP-2/SCAP regulation, primary/secondary bile acids, enterohepatic circulation, cholelithiasis, statins.
  5. *Plasma Lipoproteins & Dyslipidemias* (18 questions): ApoB-48, ApoB-100, ApoC-II, ApoE, ApoA-I, LCAT, CETP, LDL receptor endocytosis, Fredrickson phenotypes (Types I–V), PCSK9, atherosclerosis.
  6. *Phospholipids, Sphingolipidoses & Eicosanoids* (14 questions): DPPC and infant respiratory distress syndrome, Gaucher, Tay-Sachs, Niemann-Pick, Fabry, Krabbe disease, COX pathway and prostaglandins.
- **Immediate Diagnostic Feedback**: Every answer choice triggers instant validation. Correct selections receive encouraging praise and speed recognition; incorrect selections reveal the correct answer alongside high-yield chemical mechanisms, key regulatory enzymes, and clinical mnemonics.
- **Automatic Mistake Log & Targeted Remediation**: Missed questions automatically populate a dedicated "Weakness Vault". Students can inspect their missed questions, filter by biochemical category, and launch a targeted "Remediation Quiz" restricted purely to items they previously missed.
- **Biochemical Performance Profiling**: Detailed post-quiz analytics quantify accuracy, average reaction speed, and pathway-by-pathway mastery scores with clear visual indicators to pinpoint exact gaps.

---

### 2. User Experience & Visual Design

#### Key User Flows
1. **Dashboard & Exam Setup**:
   - Welcome header displaying student stats (Total Questions Taken, Overall Accuracy, Weaknesses Pending Review, 100-Question Bank Coverage Progress).
   - Mode Selection:
     - **Sprint Exam (Rapid Recall)**: 10, 20, 30, or 50 questions randomly sampled from the 100-question bank with a 25-second countdown per question.
     - **Full Century Exam (The 100 Challenge)**: Complete simulation testing all 100 questions.
     - **Custom Pathway Deep-Dive**: Filter by specific topics (e.g., Fatty Acid β-Oxidation, Lipoproteins & Atherosclerosis, Sphingolipidoses).
     - **Weakness Retest Mode**: Instant drill session generated exclusively from logged incorrect answers.
     - **Question Bank Explorer**: Search, filter, and study all 100 questions and biochemical explanations without time limits.
2. **Interactive Exam Arena**:
   - Visual countdown timer bar with dynamic color transitions (Calm Teal $\to$ Amber $\to$ Urgent Crimson when $< 5\text{s}$ remain).
   - Board-style clinical vignette or mechanistic query with highlighted chemical terms.
   - Interactive options ($A, B, C, D$) with keyboard shortcuts (`1`, `2`, `3`, `4` or `A`, `B`, `C`, `D`).
   - Instant response banner:
     - **Correct**: Uplifting praise banner ("Spot on!", "Masterful enzyme recall!", "Lightning reflex! +25 bonus") with subtle particle celebration.
     - **Incorrect / Time Out**: Clear distinction between user choice and correct answer, followed by a succinct "Why this is correct" breakdown highlighting the rate-limiting enzyme, cofactor, cellular compartment, or clinical presentation.
   - Action buttons: "Next Question", "Bookmark for Review", or "Flag for Remediation".
3. **Comprehensive Performance Summary**:
   - Overall Score, Time Spent, and Quick-Thinking Speed Index.
   - **Lipid Mastery Radar / Breakdown**: Category bars showing percentage mastery across the 6 lipid disciplines.
   - One-click CTA: **"Retest Missed Questions Now"** or **"Start Fresh Sprint"**.
4. **Weakness Vault & Review Deck**:
   - Filterable list of all logged mistakes with expandable biochemical reasoning, timestamps, and mistake frequency.
   - Remove mastered questions or reset the review bank.

#### Visual Identity & Theme
- **Aesthetic Direction**: Clean, high-contrast, publication-grade scientific laboratory workbench (`Plus Jakarta Sans` typography, sharp tabular figures `tabular-nums`).
- **Color Palette (60-30-10 discipline)**:
  - Canvas (60%): Clean clinical light surface (`#F8FAFC` slate-50) and crisp white cards (`#FFFFFF`).
  - Structural Panels & Dividers (30%): Hairline borders (`#E2E8F0`), subtle neutral surfaces (`#F1F5F9`), and muted deep slate text (`#0F172A`).
  - Semantic Accents (10%):
    - Deep Scientific Indigo/Blue (`#2563EB`) for active tabs, primary navigation, and quiz controls.
    - Success Emerald (`#059669`) with positive feedback tags.
    - Urgent Amber/Coral (`#E11D48` & `#D97706`) for the countdown timer and error callouts.
- **Zero-Pill Discipline**: Unboxed metadata text separated by typographic middots (`·`), clean segmented tab buttons for filtering, and no decorative floating status dots.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Full In-Memory 100-Question High-Yield Medical Bank**
  - *Chosen Approach*: Deliver 100 meticulously written, scientifically accurate medical biochemistry questions stored in a modular TypeScript structure (`/src/data/questionBank.ts`).
  - *Why*: Guarantees instant zero-latency loading, rock-solid reliability during high-speed 25-second countdowns, zero external rate-limiting, and 100% curriculum coverage across all lipid biochemistry board topics.
  - *Question Diversity*: Structured with varying formats including Clinical Case Vignettes, Enzymatic Regulation & Allostery, Energetics/ATP Calculations, Laboratory Lipid Profiles, and Diagnostic Pharmacology.

- **Decision 2: Fast Per-Question Countdown with Automatic Transitions**
  - *Chosen Approach*: 25-second timer per question. If time expires, it automatically locks the question, marks it as "Timed Out", logs it to the Weakness Vault, and displays the full clinical explanation before moving on.
  - *Why*: Directly aligns with the user's explicit preference for testing presence of mind and rapid recall.

- **Decision 3: Persistent LocalStorage Weakness Vault**
  - *Chosen Approach*: Save missed question IDs, student choices, and mistake counters in browser `localStorage`.
  - *Why*: Enables students to build a personal remediation repository that survives page reloads without requiring backend database authentication setup.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                               App.tsx                                  │
│  State: activeView ('home' | 'quiz' | 'results' | 'review' | 'bank')   │
│  Global Stores: questionBank (100 Qs), userStats, weaknessVault        │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
       ┌────────────────────────────┼────────────────────────────┐
       ▼                            ▼                            ▼
┌──────────────┐             ┌──────────────┐             ┌──────────────┐
│  Dashboard   │             │   QuizArena  │             │ WeaknessDeck │
│ - Quick Stats│             │ - Per-Q Timer│             │ - Saved Errs │
│ - Mode Picker│             │ - Q Presenter│             │ - Cat Filter │
│ - Topic Grid │             │ - Encouraging│             │ - Retest CTA │
└──────────────┘             │   Praise FX  │             └──────────────┘
                             │ - Explanator │
                             └──────┬───────┘
                                    │
                                    ▼
                             ┌──────────────┐
                             │ QuizResults  │
                             │ - Score Card │
                             │ - Speed Stat │
                             │ - Pathway Map│
                             │ - Retest CTA │
                             └──────────────┘
```

#### Data Model Entities
- `LipidQuestion`: `id`, `category` (Beta-Oxidation, Lipogenesis, Ketogenesis, Cholesterol, Lipoproteins, Complex Lipids), `difficulty` ('Intermediate' | 'Advanced'), `style` ('clinical_vignette' | 'enzyme_mechanism' | 'energetics_calculation' | 'pharmacology' | 'pathology_match'), `vignette` (scenario / clinical case), `options` (`[{ id, text }]`), `correctAnswerId`, `explanation`, `keyEnzymeOrConcept`, `clinicalCorrelation`.
- `QuizSession`: `questions`, `currentIndex`, `answers` (`questionId`, `selectedOptionId`, `isCorrect`, `timeSpentSeconds`), `timePerQuestion`, `isFinished`.
- `WeaknessItem`: `questionId`, `timesMissed`, `lastAttemptDate`, `lastSelectedOptionId`.
- `StudentAnalytics`: `totalAnswered`, `totalCorrect`, `averageSpeedSeconds`, `categoryBreakdown: Record<Category, { answered, correct }>`.
