# Full trainer quiz factual review — 11 October 2026

## Coverage and result

Reviewed **all 330 concepts and all 1,320 generated question variants** against repository snapshot `77285e73555c6c61fa48d6da15d3a2d682d7fe9e`, then reviewed the corrected definitions, examples, explanations, answer keys and distractor combinations. This completes the earlier 88-concept / 352-question sample with the remaining 242 concepts / 968 questions. Counts and question IDs remain unchanged: 11 categories, 30 concepts and 120 questions per category.

**34 concepts were corrected or clarified.** These represent 136 associated question variants; an example-only edit need not change all four prompts. The generator now keeps explicitly reviewed overlapping concepts apart, including comparisons among the three swapped distractors. Existing question IDs remain stable for saved study history.

The table distinguishes **direct** source support (180 concepts) from **applied** coaching/assessment examples (150 concepts). Applied examples use the cited principle and professional scope, but are not individually demonstrated clinical effects. No material factual conflict was identified in the retained wording within the stated scope. This is a content review, not certification, an official exam bank or proof that every coaching decision has exactly one universally correct implementation.

Some definitions have one authoritative source. Multiple chapters of the same book are not independent corroboration. The structural QA checks source IDs and answer generation, not scientific truth or source independence. NSK is used to verify examination scope, not as evidence for unrelated physiological mechanisms.

## Corrections

| IDs (four variants) | Concept | Revised fields | Evidence |
|---|---|---|---|
| 01-109–01-112 | začátek a úpon svalu | definition, importance | [E06], [E14], [E45] |
| 01-113–01-116 | čtyřhlavý sval stehenní | example | [E36], [E06] |
| 03-049–03-052 | celkový příjem vody | importance | [E21] |
| 03-061–03-064 | referenční rozmezí sacharidů | definition | [E21] |
| 03-069–03-072 | energetická hodnota sacharidů | definition, example, importance | [E23] |
| 03-101–03-104 | zásady racionální výživy | example | [E66] |
| 03-117–03-120 | modelový výpočet příjmu a výdeje | example | [E23], [E45] |
| 04-069–04-072 | jednoopakovací maximum | importance | [E53], [E10] |
| 04-085–04-088 | výkon | definition | [E53] |
| 04-101–04-104 | kruhový trénink | definition, importance | [E53], [E38] |
| 05-069–05-072 | délka jednotky | example | [E39], [E10] |
| 05-101–05-104 | doporučený objem pohybu podle WHO | definition | [E67] |
| 05-105–05-108 | silový trénink podle WHO | definition, example | [E67] |
| 06-101–06-104 | cviky na prsní svaly | definition | [E14], [E03], [E45] |
| 06-105–06-108 | cviky na zádové svaly | definition | [E14] |
| 06-109–06-112 | cviky na dolní končetiny | definition | [E36], [E53] |
| 07-101–07-104 | vnitřní motivace | definition, example, importance | [E39], [E56] |
| 07-105–07-108 | vnější motivace | definition, importance | [E56], [E39] |
| 07-113–07-116 | odpor ke změně | definition, importance | [E39], [E05] |
| 08-005–08-008 | spánek dospělého | definition | [E58], [E13], [E10] |
| 08-117–08-120 | přetížení a přetrénování | definition, example, importance | [E49] |
| 09-053–09-056 | zotavovací poloha | definition, importance | [E24] |
| 09-061–09-064 | těžké dušení | example | [E24] |
| 09-065–09-068 | bezvědomí při dušení | definition, example | [E24] |
| 09-077–09-080 | epileptický záchvat | importance | [E44], [E22] |
| 09-097–09-100 | ochlazení popáleniny | definition | [E12], [E43] |
| 09-113–09-116 | rozdělení první pomoci | definition, importance | [E32], [E45] |
| 10-101–10-104 | dvě skupiny preventivních opatření | definition | [E45] |
| 10-105–10-108 | seznámení s BOZP | example | [E45] |
| 10-109–10-112 | lékařské posouzení před zátěží | definition | [E55], [E37] |
| 11-021–11-024 | kritéria pro zařazení | definition | [E16], [E65] |
| 11-069–11-072 | M3 genový a buněčný doping | definition | [E65] |
| 11-089–11-092 | P1 beta-blokátory | importance | [E65] |
| 11-109–11-112 | zdravotní důsledky anabolik | example | [E01] |

Key repairs include: chest/back/leg exercise definitions no longer restrict entire muscle regions to one exercise type; intrinsic motivation is distinguished from autonomous extrinsic motivation; carbohydrate energy factors include the polyol/fibre exceptions; origin/insertion descriptions allow reversed movement roles; circuit training is not dismissed for hypertrophy; overreaching is separated from overtraining syndrome; adult/age/intensity scope is stated for WHO and sleep recommendations; choking instructions stop after successful clearance; trauma positioning is separated from CPR; seizure ambulance criteria are expanded; thermal burns specify at least 20 minutes; lay first aid can include an AED; screening considers intended intensity; doping criteria include masking, M3 potential and sport-specific out-of-competition beta-blocker prohibitions.

The source list now points to inspected factual content, including the 2026 ACSM RT Position Stand, ERC 2025 First Aid, the original sleep consensus and SDT paper, rather than relying on textbook sales pages or the qualification standard for those facts. Historical HZS material is used only for first-aid classification; procedures use ERC 2025 and the named current public guidance.

## Method and deterministic checks

All underlying definitions, examples and training explanations were read by category. All four variant templates were inspected, and every resulting distractor combination was reviewed against those definitions/examples. The compact combination inspection maps each option to its concept position, including the term/definition swaps in variant four. The exclusion groups are a reviewed item-design aid, not an automatic semantic truth detector.

Deterministic checks verify complete ID coverage, 120 questions per category, exactly one indexed answer, source/answer/explanation identity, and unchanged ordering/identity. Ten regression fixtures protect the concrete overlapping-answer cases. Existing study scheduling and examination scoring tests remain in place.

Local browser smoke testing covered the corrected explanation/source links for question 09-080 and a complete correct-answer flow for 09-092. At 1280×720, the old landscape height constraint pushed long answer cards above the question header. The scoped CSS correction allows the content panel to scroll instead of shrinking below the text height. Final DOM bounds and a visually inspected screenshot confirm readable answers, feedback, source link and next button; no console errors were reported. This is a representative browser check, not every question at every device size.

Validation: `npm run qa`, JavaScript syntax checks and `git diff --check` passed. The existing `npm run qa:links` checker accepted 65/67 HTTP responses; two OSHA requests returned 403. Both exact OSHA pages were separately opened and their actual content inspected with the web reader. Responses such as 202/203 can be empty or challenge pages and are not treated as factual content proof. During final evidence verification, substantive content was retrieved directly for 55 sources and inspected with the web reader for the other 12.

Recomputed examples: 3×8 = 24 repetitions; 2,000×0.45 = 900 kcal; 50×4 = 200 kcal; 30×4 = 120 kcal; 20×9 = 180 kcal; 250×4 + 120×4 + 70×9 = 2,110 kcal; 5×30 = 150 minutes. Energy examples refer to the specified digestible macronutrients, excluding fibre/polyol energy unless separately included.

Each source was inspected as actual HTML or PDF, with its relevant section and scope recorded below. Search snippets and a successful HTTP status alone are not evidence of factual support. Some sites block automated access: where needed, the exact URL was inspected through the web reader or by direct HTTP retrieval. Publication dates remain distinct from the 11 October 2026 access/review date. The link-audit command is a transport check, not a content verification gate.

## Per-concept evidence matrix

Each row covers exactly the four IDs shown. “Retained” means no material conflict found in the original wording within the stated evidence scope. “Corrected/clarified” includes pedagogical precision and wording improvements, not solely demonstrated wrong answer keys.

| IDs | Concept in source | Result | Evidence level | Source sections and review note | Evidence |
|---|---|---|---|---|---|
| 01-001–01-004 | [anatomická poloha](../public/data.js#L363) | Retained | direct | 1.6 anatomical position and planes. Definition and example agree. | [E50] |
| 01-005–01-008 | [sagitální rovina](../public/data.js#L364) | Retained | direct | 1.6 Anatomical planes; 9.5 Flexion. Sagittal division and elbow example agree. | [E50], [E40] |
| 01-009–01-012 | [frontální rovina](../public/data.js#L365) | Retained | direct | 1.6 Anatomical planes; 9.5 Abduction. Frontal division and abduction example agree. | [E50], [E40] |
| 01-013–01-016 | [transverzální rovina](../public/data.js#L366) | Retained | direct | 1.6 anatomical position and planes. Definition and example agree. | [E50] |
| 01-017–01-020 | [flexe](../public/data.js#L367) | Retained | direct | 9.5 movement definitions. Definition and example agree. | [E40] |
| 01-021–01-024 | [extenze](../public/data.js#L368) | Retained | direct | 9.5 movement definitions. Definition and example agree. | [E40] |
| 01-025–01-028 | [abdukce](../public/data.js#L369) | Retained | direct | 9.5 movement definitions. Definition and example agree. | [E40] |
| 01-029–01-032 | [addukce](../public/data.js#L370) | Retained | direct | 9.5 movement definitions. Definition and example agree. | [E40] |
| 01-033–01-036 | [vnitřní rotace](../public/data.js#L371) | Retained | direct | 9.5 movement definitions. Definition and example agree. | [E40] |
| 01-037–01-040 | [vnější rotace](../public/data.js#L372) | Retained | direct | 9.5 movement definitions. Definition and example agree. | [E40] |
| 01-041–01-044 | [koncentrická kontrakce](../public/data.js#L373) | Retained | direct | 10.4 concentric/eccentric/isometric. Definition and example agree. | [E18] |
| 01-045–01-048 | [excentrická kontrakce](../public/data.js#L374) | Retained | direct | 10.4 concentric/eccentric/isometric. Definition and example agree. | [E18] |
| 01-049–01-052 | [izometrická kontrakce](../public/data.js#L375) | Retained | direct | 10.4 concentric/eccentric/isometric. Definition and example agree. | [E18] |
| 01-053–01-056 | [agonista](../public/data.js#L376) | Retained | direct | 11.1 prime mover; 11.6 quadriceps. Prime mover matches knee extension. | [E06], [E36] |
| 01-057–01-060 | [antagonista](../public/data.js#L377) | Retained | direct | 11.1 antagonist and synergist. Definition and example agree. | [E06] |
| 01-061–01-064 | [synergista](../public/data.js#L378) | Retained | direct | 11.1 antagonist and synergist. Definition and example agree. | [E06] |
| 01-065–01-068 | [kosterní svalovina](../public/data.js#L379) | Retained | direct | 4.4 tissue types. Definition and example agree. | [E42] |
| 01-069–01-072 | [srdeční svalovina](../public/data.js#L380) | Retained | direct | 4.4 tissue types. Definition and example agree. | [E42] |
| 01-073–01-076 | [hladká svalovina](../public/data.js#L381) | Retained | direct | 4.4 tissue types. Definition and example agree. | [E42] |
| 01-077–01-080 | [epimysium](../public/data.js#L382) | Retained | direct | 10.2 connective tissue layers. Layer correctly surrounds whole muscle. | [E41] |
| 01-081–01-084 | [perimysium](../public/data.js#L383) | Retained | direct | 10.2 connective tissue layers. Layer correctly surrounds fascicle. | [E41] |
| 01-085–01-088 | [endomysium](../public/data.js#L384) | Retained | direct | 10.2 connective tissue layers. Layer correctly surrounds individual fiber. | [E41] |
| 01-089–01-092 | [synoviální kloub](../public/data.js#L385) | Retained | direct | 9.1 Synovial joints. Cavity and freely movable classification agree. | [E35] |
| 01-093–01-096 | [osová kostra](../public/data.js#L386) | Retained | direct | 7.1 skeleton divisions. Definition and example agree. | [E57] |
| 01-097–01-100 | [appendikulární kostra](../public/data.js#L387) | Retained | direct | 7.1 skeleton divisions. Definition and example agree. | [E57] |
| 01-101–01-104 | [vazivový kloub](../public/data.js#L388) | Retained | direct | 9.1 fibrous/cartilaginous; 7.3 discs. Definition and example agree. | [E35], [E59] |
| 01-105–01-108 | [chrupavčitý kloub](../public/data.js#L389) | Retained | direct | 9.1 fibrous/cartilaginous; 7.3 discs. Definition and example agree. | [E35], [E59] |
| 01-109–01-112 | [začátek a úpon svalu](../public/data.js#L390) | Corrected/clarified | direct | 11.1 attachments; 11.5 triceps; NSK. Conventional attachment labels; reversed action caveat. | [E06], [E14], [E45] |
| 01-113–01-116 | [čtyřhlavý sval stehenní](../public/data.js#L391) | Corrected/clarified | direct | 11.6 anterior thigh table; 11.1 agonists. Attachments and extension agree; rectus has multiple proximal attachments. | [E36], [E06] |
| 01-117–01-120 | [orgánové soustavy](../public/data.js#L392) | Retained | direct | 1.2 organ systems; NSK anatomy. Definition and example agree. | [E61], [E45] |
| 02-001–02-004 | [screening pohybu](../public/data.js#L396) | Retained | applied | Assessment/referral boundaries. Referral, not diagnosis. | [E02], [E55] |
| 02-005–02-008 | [statické pozorování](../public/data.js#L397) | Retained | direct | pp.10–11 static posture. Static posture example fits. | [E02] |
| 02-009–02-012 | [dynamické pozorování](../public/data.js#L398) | Retained | applied | ACE posture/movement; NSK assessment. Observation example. | [E02], [E45] |
| 02-013–02-016 | [přední pohled](../public/data.js#L399) | Retained | applied | ACE posture/movement; NSK assessment. Observation example. | [E02], [E45] |
| 02-017–02-020 | [boční pohled](../public/data.js#L400) | Retained | direct | pp.10–11 lateral view. Sagittal segment observation fits. | [E02] |
| 02-021–02-024 | [zadní pohled](../public/data.js#L401) | Retained | applied | ACE posture/movement; NSK assessment. Observation example. | [E02], [E45] |
| 02-025–02-028 | [standardizované podmínky](../public/data.js#L402) | Retained | applied | test protocols and repeated assessments. Same protocol improves comparability. | [E02] |
| 02-029–02-032 | [výchozí hodnota](../public/data.js#L403) | Retained | applied | Standardized assessment protocols. Comparability principle. | [E02] |
| 02-033–02-036 | [bolest při testu](../public/data.js#L404) | Retained | applied | Assessment/referral boundaries. Referral, not diagnosis. | [E02], [E55] |
| 02-037–02-040 | [pozorovaný znak](../public/data.js#L405) | Retained | applied | posture and assessment scope. Observation alone cannot establish a diagnosis. | [E02] |
| 02-041–02-044 | [aktivní rozsah pohybu](../public/data.js#L406) | Retained | direct | ROM assessment figure and protocol. Self-generated motion is active ROM. | [E02] |
| 02-045–02-048 | [pasivní rozsah pohybu](../public/data.js#L407) | Retained | applied | ROM, flexibility and movement phases. Movement-control definitions. | [E02], [E04] |
| 02-049–02-052 | [mobilita](../public/data.js#L408) | Retained | applied | ROM, flexibility and movement phases. Movement-control definitions. | [E02], [E04] |
| 02-053–02-056 | [flexibilita](../public/data.js#L409) | Retained | direct | flexibility and ROM assessments. Flexibility is one contributor to ROM. | [E02] |
| 02-057–02-060 | [stabilita](../public/data.js#L410) | Retained | applied | ROM, flexibility and movement phases. Movement-control definitions. | [E02], [E04] |
| 02-061–02-064 | [dřepový vzor](../public/data.js#L411) | Retained | applied | Movement assessment tasks. Functional movement example. | [E02], [E04], [E45] |
| 02-065–02-068 | [kyčelní ohyb](../public/data.js#L412) | Retained | applied | Movement training: bend-and-lift. Hip hinge example is consistent with the movement model. | [E04] |
| 02-069–02-072 | [chůze](../public/data.js#L413) | Retained | applied | Movement assessment tasks. Functional movement example. | [E02], [E04], [E45] |
| 02-073–02-076 | [stoj na jedné noze](../public/data.js#L414) | Retained | applied | Movement assessment tasks. Functional movement example. | [E02], [E04], [E45] |
| 02-077–02-080 | [postavení lopatek](../public/data.js#L415) | Retained | applied | ACE posture/movement; NSK assessment. Observation example. | [E02], [E45] |
| 02-081–02-084 | [poloha pánve](../public/data.js#L416) | Retained | applied | ACE posture/movement; NSK assessment. Observation example. | [E02], [E45] |
| 02-085–02-088 | [zakřivení páteře](../public/data.js#L417) | Retained | direct | 7.3 curvatures. Definition and example agree. | [E59] |
| 02-089–02-092 | [reprodukovatelnost](../public/data.js#L418) | Retained | applied | Standardized assessment protocols. Comparability principle. | [E02] |
| 02-093–02-096 | [retest](../public/data.js#L419) | Retained | applied | repeated assessment protocols. Retest describes repeating the assessment. | [E02] |
| 02-097–02-100 | [odeslání k odborníkovi](../public/data.js#L420) | Retained | applied | Assessment/referral boundaries. Referral, not diagnosis. | [E02], [E55] |
| 02-101–02-104 | [druhy diagnostiky](../public/data.js#L421) | Retained | applied | NSK diagnostic competency; screening. Assessment framework. | [E45], [E55] |
| 02-105–02-108 | [pohybová anamnéza](../public/data.js#L422) | Retained | applied | NSK diagnostic competency; screening. Assessment framework. | [E45], [E55] |
| 02-109–02-112 | [pohybový stereotyp](../public/data.js#L423) | Retained | applied | Movement assessment tasks. Functional movement example. | [E02], [E04], [E45] |
| 02-113–02-116 | [goniometrie](../public/data.js#L424) | Retained | direct | Printed p.3: joint ROM/goniometry. Basic measurement concept; clinical protocol not extrapolated. | [E28] |
| 02-117–02-120 | [modelová analýza držení těla](../public/data.js#L425) | Retained | applied | ACE posture/movement; NSK assessment. Observation example. | [E02], [E45] |
| 03-001–03-004 | [energetická bilance](../public/data.js#L429) | Retained | applied | EFSA Energy pp.11–12; FM nutrition. Energy framework. | [E21], [E10] |
| 03-005–03-008 | [energetický deficit](../public/data.js#L430) | Retained | applied | EFSA Energy pp.11–12; FM nutrition. Energy framework. | [E21], [E10] |
| 03-009–03-012 | [energetický nadbytek](../public/data.js#L431) | Retained | applied | EFSA Energy pp.11–12; FM nutrition. Energy framework. | [E21], [E10] |
| 03-013–03-016 | [sacharidy](../public/data.js#L432) | Retained | direct | EFSA carbohydrates/protein; FM §8-36. Definition and example agree. | [E21], [E46], [E10] |
| 03-017–03-020 | [bílkoviny](../public/data.js#L433) | Retained | direct | EFSA Protein pp.17–18; WHO Protein. Amino acids and tissue functions agree. | [E21], [E66] |
| 03-021–03-024 | [tuky](../public/data.js#L434) | Retained | direct | EFSA Fats; WHO Fats. Fat functions and unsaturated food examples agree. | [E21], [E66] |
| 03-025–03-028 | [vláknina](../public/data.js#L435) | Retained | direct | EFSA carbohydrates/protein; FM §8-36. Definition and example agree. | [E21], [E46], [E10] |
| 03-029–03-032 | [glykogen](../public/data.js#L436) | Retained | direct | EFSA carbohydrates/protein; FM §8-36. Definition and example agree. | [E21], [E46], [E10] |
| 03-033–03-036 | [esenciální aminokyseliny](../public/data.js#L437) | Retained | direct | EFSA carbohydrates/protein; FM §8-36. Definition and example agree. | [E21], [E46], [E10] |
| 03-037–03-040 | [vitaminy rozpustné v tucích](../public/data.js#L438) | Retained | direct | 24.7 vitamins/minerals. Definition and example agree. | [E46] |
| 03-041–03-044 | [vitaminy rozpustné ve vodě](../public/data.js#L439) | Retained | direct | 24.7 vitamins/minerals. Definition and example agree. | [E46] |
| 03-045–03-048 | [minerální látky](../public/data.js#L440) | Retained | direct | 24.7 vitamins/minerals. Definition and example agree. | [E46] |
| 03-049–03-052 | [celkový příjem vody](../public/data.js#L441) | Corrected/clarified | direct | Water pp.20–23, Table 2. 2.0/2.5 L includes food; moderate activity/temperature caveat. | [E21] |
| 03-053–03-056 | [individuální hydratace](../public/data.js#L442) | Retained | applied | EFSA Water; FM hydration. Individual needs vary. | [E21], [E10] |
| 03-057–03-060 | [elektrolyty](../public/data.js#L443) | Retained | direct | 24.7 vitamins/minerals. Definition and example agree. | [E46] |
| 03-061–03-064 | [referenční rozmezí sacharidů](../public/data.js#L444) | Corrected/clarified | direct | Table 2 printed p.23. Reference ranges, not individualized sports targets. | [E21] |
| 03-065–03-068 | [referenční rozmezí tuků](../public/data.js#L445) | Retained | direct | Table 2 printed p.23. Reference ranges, not individualized sports targets. | [E21] |
| 03-069–03-072 | [energetická hodnota sacharidů](../public/data.js#L446) | Corrected/clarified | direct | Annex XIV. Factors and numerical examples checked. | [E23] |
| 03-073–03-076 | [energetická hodnota bílkovin](../public/data.js#L447) | Retained | direct | Annex XIV protein conversion factor. 30 × 4 = 120 kcal; computed independently. | [E23] |
| 03-077–03-080 | [energetická hodnota tuků](../public/data.js#L448) | Retained | direct | Annex XIV. Factors and numerical examples checked. | [E23] |
| 03-081–03-084 | [bazální metabolismus](../public/data.js#L449) | Retained | applied | EFSA Energy pp.11–12; FM nutrition. Energy framework. | [E21], [E10] |
| 03-085–03-088 | [celkový denní energetický výdej](../public/data.js#L450) | Retained | direct | EFSA Energy printed p.11: TEE components. Whole-day energy framework; activity changes expenditure. | [E21], [E10] |
| 03-089–03-092 | [doplněk stravy](../public/data.js#L451) | Retained | applied | WHO diverse diet; FM 7-22 §8-48 supplements. Supplement is optional; food replacement claim avoided. | [E07], [E08], [E66] |
| 03-093–03-096 | [riziko kontaminace suplementu](../public/data.js#L452) | Retained | direct | Supplement contamination and batch testing. Definition and example agree. | [E64], [E07] |
| 03-097–03-100 | [hranice výživového poradenství](../public/data.js#L453) | Retained | applied | NSK nutrition scope; clinical referral. Clinical referral. | [E45], [E55] |
| 03-101–03-104 | [zásady racionální výživy](../public/data.js#L454) | Corrected/clarified | direct | Healthy diet: fruit/vegetables and free sugars. Definition and example agree. | [E66] |
| 03-105–03-108 | [volné cukry](../public/data.js#L455) | Retained | direct | Healthy diet: fruit/vegetables and free sugars. Definition and example agree. | [E66] |
| 03-109–03-112 | [sůl a sodík](../public/data.js#L456) | Retained | direct | Salt/sodium paragraph. Adult limit <5 g salt corresponds to 2 g sodium. | [E66] |
| 03-113–03-116 | [kategorizace doplňků stravy](../public/data.js#L457) | Retained | direct | ABCD categories; NSK supplements. Definition and example agree. | [E07], [E08], [E09], [E45] |
| 03-117–03-120 | [modelový výpočet příjmu a výdeje](../public/data.js#L458) | Corrected/clarified | direct | Annex XIV; NSK nutrition competency. 250×4 + 120×4 + 70×9 = 2,110 kcal. | [E23], [E45] |
| 04-001–04-004 | [princip specifičnosti](../public/data.js#L462) | Retained | applied | ACSM principles; FM training principles. Training principle. | [E53], [E10] |
| 04-005–04-008 | [progresivní přetížení](../public/data.js#L463) | Retained | applied | ACSM principles; FM training principles. Training principle. | [E53], [E10] |
| 04-009–04-012 | [princip progrese](../public/data.js#L464) | Retained | applied | ACSM principles; FM training principles. Training principle. | [E53], [E10] |
| 04-013–04-016 | [reverzibilita](../public/data.js#L465) | Retained | applied | ACSM principles; FM training principles. Training principle. | [E53], [E10] |
| 04-017–04-020 | [individualizace](../public/data.js#L466) | Retained | applied | ACSM principles; FM training principles. Training principle. | [E53], [E10] |
| 04-021–04-024 | [frekvence](../public/data.js#L467) | Retained | direct | ACSM Table 1 variables; FM prescription. Variable definition. | [E53], [E10] |
| 04-025–04-028 | [intenzita](../public/data.js#L468) | Retained | direct | §6-27; resistance prescription. Relative difficulty matches the example. | [E10] |
| 04-029–04-032 | [čas](../public/data.js#L469) | Retained | direct | §8-30 FITT. Duration is the FITT time component. | [E10] |
| 04-033–04-036 | [typ aktivity](../public/data.js#L470) | Retained | direct | ACSM Table 1 variables; FM prescription. Variable definition. | [E53], [E10] |
| 04-037–04-040 | [tréninkový objem](../public/data.js#L471) | Retained | direct | ACSM Table 1 variables; FM prescription. Variable definition. | [E53], [E10] |
| 04-041–04-044 | [vnější zátěž](../public/data.js#L472) | Retained | direct | ACSM Table 1 variables; FM prescription. Variable definition. | [E53], [E10] |
| 04-045–04-048 | [opakování](../public/data.js#L473) | Retained | direct | ACSM Table 1 variables; FM prescription. Variable definition. | [E53], [E10] |
| 04-049–04-052 | [série](../public/data.js#L474) | Retained | direct | ACSM Table 1 variables; FM prescription. Variable definition. | [E53], [E10] |
| 04-053–04-056 | [interval odpočinku](../public/data.js#L475) | Retained | direct | ACSM Table 1 variables; FM prescription. Variable definition. | [E53], [E10] |
| 04-057–04-060 | [tempo opakování](../public/data.js#L476) | Retained | direct | ACSM Table 1 variables; FM prescription. Variable definition. | [E53], [E10] |
| 04-061–04-064 | [rozsah pohybu](../public/data.js#L477) | Retained | direct | ACSM Table 1 variables; FM prescription. Variable definition. | [E53], [E10] |
| 04-065–04-068 | [RPE](../public/data.js#L478) | Retained | direct | §6-27 and Table 6-3. Higher perceived difficulty means higher RPE. | [E10] |
| 04-069–04-072 | [jednoopakovací maximum](../public/data.js#L479) | Corrected/clarified | direct | ACSM Table 1 variables; FM prescription. Variable definition. | [E53], [E10] |
| 04-073–04-076 | [svalová vytrvalost](../public/data.js#L480) | Retained | direct | Strength/endurance/hypertrophy/power sections. Definition and example agree. | [E53] |
| 04-077–04-080 | [hypertrofie](../public/data.js#L481) | Retained | direct | Strength/endurance/hypertrophy/power sections. Definition and example agree. | [E53] |
| 04-081–04-084 | [maximální síla](../public/data.js#L482) | Retained | direct | Strength training section and load prescription. Heavy low-repetition work is common, not exclusive. | [E10] |
| 04-085–04-088 | [výkon](../public/data.js#L483) | Corrected/clarified | direct | Strength/endurance/hypertrophy/power sections. Definition and example agree. | [E53] |
| 04-089–04-092 | [vícekloubový cvik](../public/data.js#L484) | Retained | applied | Exercise selection and form. Exercise-control example. | [E53], [E37] |
| 04-093–04-096 | [jednokloubový cvik](../public/data.js#L485) | Retained | applied | Exercise selection and form. Exercise-control example. | [E53], [E37] |
| 04-097–04-100 | [kvalita před kvantitou](../public/data.js#L486) | Retained | applied | Exercise selection and form. Exercise-control example. | [E53], [E37] |
| 04-101–04-104 | [kruhový trénink](../public/data.js#L487) | Corrected/clarified | direct | ACSM Table 6; circuit section. Circuit effects depend on prescription; hypertrophy not excluded. | [E53], [E38] |
| 04-105–04-108 | [superséria](../public/data.js#L488) | Retained | direct | Superset section. Paired exercises with little rest; qualified efficiency. | [E38] |
| 04-109–04-112 | [dropset](../public/data.js#L489) | Retained | direct | Drop-set section. Immediate load reduction; no inherent superiority. | [E38] |
| 04-113–04-116 | [pyramidová metoda](../public/data.js#L490) | Retained | direct | Pyramidal section. Load and repetition changes match ascending pyramid. | [E38] |
| 04-117–04-120 | [metoda rest-pause](../public/data.js#L491) | Retained | direct | Rest-pause section. Short intra-set pauses on similar load agree. | [E38] |
| 05-001–05-004 | [vstupní cíl](../public/data.js#L495) | Retained | applied | Action planning; session prescription. Planning example. | [E39], [E10] |
| 05-005–05-008 | [výchozí stav klienta](../public/data.js#L496) | Retained | applied | IFT individualized programs; §6-20. Starting dose follows current capability. | [E04], [E10] |
| 05-009–05-012 | [mikrocyklus](../public/data.js#L497) | Retained | direct | §5-9; NSK planning competency. Often weekly; not defined as exactly seven days. | [E10], [E45] |
| 05-013–05-016 | [rozcvičení](../public/data.js#L498) | Retained | applied | FM ch.5–7; ACSM variables. Programming example. | [E10], [E53] |
| 05-017–05-020 | [hlavní část tréninku](../public/data.js#L499) | Retained | direct | §6-22 session structure. Main part contains target workload. | [E10] |
| 05-021–05-024 | [závěrečná část](../public/data.js#L500) | Retained | applied | FM ch.5–7; ACSM variables. Programming example. | [E10], [E53] |
| 05-025–05-028 | [pořadí cviků](../public/data.js#L501) | Retained | applied | FM ch.5–7; ACSM variables. Programming example. | [E10], [E53] |
| 05-029–05-032 | [prioritní cvik](../public/data.js#L502) | Retained | applied | §6-15–17; §6-25. Priority before fatigue is a reasonable application. | [E10] |
| 05-033–05-036 | [týdenní frekvence](../public/data.js#L503) | Retained | applied | FM ch.5–7; ACSM variables. Programming example. | [E10], [E53] |
| 05-037–05-040 | [týdenní objem](../public/data.js#L504) | Retained | applied | FM ch.5–7; ACSM variables. Programming example. | [E10], [E53] |
| 05-041–05-044 | [počáteční intenzita](../public/data.js#L505) | Retained | applied | Mayo form/load; IFT movement phase. Technique and conservative initial load agree. | [E37], [E04] |
| 05-045–05-048 | [plánovaná progrese](../public/data.js#L506) | Retained | applied | FM ch.5–7; ACSM variables. Programming example. | [E10], [E53] |
| 05-049–05-052 | [odlehčovací období](../public/data.js#L507) | Retained | applied | FM ch.5–7; ACSM variables. Programming example. | [E10], [E53] |
| 05-053–05-056 | [adherence](../public/data.js#L508) | Retained | applied | MI autonomy; individualized client program. Feasibility example illustrates adherence, not quantified superiority. | [E39], [E04] |
| 05-057–05-060 | [měřitelný cíl](../public/data.js#L509) | Retained | applied | Action planning; session prescription. Planning example. | [E39], [E10] |
| 05-061–05-064 | [časově vymezený cíl](../public/data.js#L510) | Retained | applied | Goal-setting and action phase. Review deadline is an applied planning choice. | [E39] |
| 05-065–05-068 | [omezení klienta](../public/data.js#L511) | Retained | applied | Action planning; session prescription. Planning example. | [E39], [E10] |
| 05-069–05-072 | [délka jednotky](../public/data.js#L512) | Corrected/clarified | applied | Action planning; session prescription. Planning example. | [E39], [E10] |
| 05-073–05-076 | [rozložení zátěže](../public/data.js#L513) | Retained | applied | FM ch.5–7; ACSM variables. Programming example. | [E10], [E53] |
| 05-077–05-080 | [pohybová vyváženost](../public/data.js#L514) | Retained | applied | FM ch.5–7; ACSM variables. Programming example. | [E10], [E53] |
| 05-081–05-084 | [mobilizační technika](../public/data.js#L515) | Retained | applied | Mobility/ROM; preparation drills. Preparation example. | [E02], [E10] |
| 05-085–05-088 | [dynamické protažení](../public/data.js#L516) | Retained | applied | Mobility/ROM; preparation drills. Preparation example. | [E02], [E10] |
| 05-089–05-092 | [statické protažení](../public/data.js#L517) | Retained | direct | Stretching definition; flexibility assessment. Static hold definition fits; timing depends on aim. | [E60], [E02] |
| 05-093–05-096 | [tréninkový záznam](../public/data.js#L518) | Retained | applied | Action planning; session prescription. Planning example. | [E39], [E10] |
| 05-097–05-100 | [pravidelná revize plánu](../public/data.js#L519) | Retained | applied | Action planning; session prescription. Planning example. | [E39], [E10] |
| 05-101–05-104 | [doporučený objem pohybu podle WHO](../public/data.js#L520) | Corrected/clarified | direct | WHO Table 4, adults. Adult guidance and sedentary replacement. | [E67] |
| 05-105–05-108 | [silový trénink podle WHO](../public/data.js#L521) | Corrected/clarified | direct | WHO Table 4, adults. Adult guidance and sedentary replacement. | [E67] |
| 05-109–05-112 | [omezení sedavého chování](../public/data.js#L522) | Retained | direct | WHO Table 4, adults. Adult guidance and sedentary replacement. | [E67] |
| 05-113–05-116 | [mezocyklus](../public/data.js#L523) | Retained | applied | FM ch.5–7; ACSM variables. Programming example. | [E10], [E53] |
| 05-117–05-120 | [periodizace](../public/data.js#L524) | Retained | applied | FM ch.5–7; ACSM variables. Programming example. | [E10], [E53] |
| 06-001–06-004 | [jasná demonstrace](../public/data.js#L528) | Retained | applied | NSK practical demonstration; IFT movement education. Demonstration is appropriate; exact teaching sequence illustrative. | [E45], [E04] |
| 06-005–06-008 | [stručný pokyn](../public/data.js#L529) | Retained | applied | Attention review; clear teach-back communication. One cue is plausible; no universal one-cue optimum. | [E27], [E62] |
| 06-009–06-012 | [externí vodítko](../public/data.js#L530) | Retained | direct | Abstract and external focus definition. Effect on environment matches external focus. | [E27] |
| 06-013–06-016 | [interní vodítko](../public/data.js#L531) | Retained | direct | Internal versus external focus. Definition fits; no claim of universal superiority. | [E27] |
| 06-017–06-020 | [ověření porozumění](../public/data.js#L532) | Retained | applied | Teach-back method. Own words/procedure check understanding. | [E62] |
| 06-021–06-024 | [nastavení stanoviště](../public/data.js#L533) | Retained | applied | Equipment hazards; NSK practice. Professional practice. | [E48], [E45] |
| 06-025–06-028 | [dopomoc](../public/data.js#L534) | Retained | applied | Equipment hazards; NSK practice. Professional practice. | [E48], [E45] |
| 06-029–06-032 | [zpevnění trupu](../public/data.js#L535) | Retained | applied | Form, progression, load and readiness. Client-specific practice. | [E37], [E04], [E10] |
| 06-033–06-036 | [dýchání při cviku](../public/data.js#L536) | Retained | direct | Weight training do’s: Breathe. General breathing advice fits ordinary client exercise. | [E37] |
| 06-037–06-040 | [kontrolovaný rozsah](../public/data.js#L537) | Retained | applied | Form, progression, load and readiness. Client-specific practice. | [E37], [E04], [E10] |
| 06-041–06-044 | [kontrolované tempo](../public/data.js#L538) | Retained | applied | Form, progression, load and readiness. Client-specific practice. | [E37], [E04], [E10] |
| 06-045–06-048 | [volba zátěže](../public/data.js#L539) | Retained | applied | Form, progression, load and readiness. Client-specific practice. | [E37], [E04], [E10] |
| 06-049–06-052 | [regrese cviku](../public/data.js#L540) | Retained | applied | Form, progression, load and readiness. Client-specific practice. | [E37], [E04], [E10] |
| 06-053–06-056 | [progrese cviku](../public/data.js#L541) | Retained | applied | Form, progression, load and readiness. Client-specific practice. | [E37], [E04], [E10] |
| 06-057–06-060 | [reakce na bolest](../public/data.js#L542) | Retained | applied | Form, progression, load and readiness. Client-specific practice. | [E37], [E04], [E10] |
| 06-061–06-064 | [pozorování v rozcvičení](../public/data.js#L543) | Retained | applied | §6-27 RPE; Mayo reduce load if form fails. Warm-up guides adjustment; specific decision is applied. | [E10], [E37] |
| 06-065–06-068 | [aktivní naslouchání](../public/data.js#L544) | Retained | applied | Reflective listening; training records. Communication/record example. | [E39], [E10] |
| 06-069–06-072 | [souhlas s dotykem](../public/data.js#L545) | Retained | applied | Equipment hazards; NSK practice. Professional practice. | [E48], [E45] |
| 06-073–06-076 | [soukromí klienta](../public/data.js#L546) | Retained | applied | Equipment hazards; NSK practice. Professional practice. | [E48], [E45] |
| 06-077–06-080 | [kontrola vybavení](../public/data.js#L547) | Retained | applied | Equipment hazards; NSK practice. Professional practice. | [E48], [E45] |
| 06-081–06-084 | [monitorování RPE](../public/data.js#L548) | Retained | applied | Form, progression, load and readiness. Client-specific practice. | [E37], [E04], [E10] |
| 06-085–06-088 | [technika před navýšením](../public/data.js#L549) | Retained | applied | Form, progression, load and readiness. Client-specific practice. | [E37], [E04], [E10] |
| 06-089–06-092 | [kontrola prostředí](../public/data.js#L550) | Retained | applied | Equipment hazards; NSK practice. Professional practice. | [E48], [E45] |
| 06-093–06-096 | [záznam lekce](../public/data.js#L551) | Retained | applied | Reflective listening; training records. Communication/record example. | [E39], [E10] |
| 06-097–06-100 | [závěrečný check-in](../public/data.js#L552) | Retained | applied | Reflective listening; training records. Communication/record example. | [E39], [E10] |
| 06-101–06-104 | [cviky na prsní svaly](../public/data.js#L553) | Corrected/clarified | direct | OpenStax 11.5; ACE exercise list; NSK demonstration. Definition now includes flys as well as presses. | [E14], [E03], [E45] |
| 06-105–06-108 | [cviky na zádové svaly](../public/data.js#L554) | Corrected/clarified | direct | 11.5 upper limb/back muscles. Back work includes more than latissimus pulling. | [E14] |
| 06-109–06-112 | [cviky na dolní končetiny](../public/data.js#L555) | Corrected/clarified | direct | 11.6 lower limb; exercise selection. Leg work includes single- and multi-joint exercises. | [E36], [E53] |
| 06-113–06-116 | [devět předvedených cviků](../public/data.js#L556) | Retained | direct | Personal training competency, criterion a. Nine demonstrations are explicitly required. | [E45] |
| 06-117–06-120 | [hospodaření s časem v lekci](../public/data.js#L557) | Retained | applied | §6-22 priorities; NSK session plan. Time allocation is an applied coaching example. | [E10], [E45] |
| 07-001–07-004 | [otevřená otázka](../public/data.js#L561) | Retained | applied | MI strategies, OARS and change planning. Communication concept. | [E39], [E05] |
| 07-005–07-008 | [afirmace](../public/data.js#L562) | Retained | direct | Printed p.80, PDF p.84. Genuine recognition of strengths/effort fits. | [E05] |
| 07-009–07-012 | [reflexe](../public/data.js#L563) | Retained | applied | MI strategies, OARS and change planning. Communication concept. | [E39], [E05] |
| 07-013–07-016 | [shrnutí](../public/data.js#L564) | Retained | applied | MI strategies, OARS and change planning. Communication concept. | [E39], [E05] |
| 07-017–07-020 | [autonomie klienta](../public/data.js#L565) | Retained | applied | MI strategies, OARS and change planning. Communication concept. | [E39], [E05] |
| 07-021–07-024 | [spolupráce](../public/data.js#L566) | Retained | applied | MI strategies, OARS and change planning. Communication concept. | [E39], [E05] |
| 07-025–07-028 | [evokace](../public/data.js#L567) | Retained | applied | MI strategies, OARS and change planning. Communication concept. | [E39], [E05] |
| 07-029–07-032 | [empatické naslouchání](../public/data.js#L568) | Retained | direct | Reflective listening; patient-centred counseling. Understanding without judgment fits. | [E39] |
| 07-033–07-036 | [rada se svolením](../public/data.js#L569) | Retained | applied | MI strategies, OARS and change planning. Communication concept. | [E39], [E05] |
| 07-037–07-040 | [řeč ve prospěch změny](../public/data.js#L570) | Retained | applied | MI strategies, OARS and change planning. Communication concept. | [E39], [E05] |
| 07-041–07-044 | [řeč pro zachování stavu](../public/data.js#L571) | Retained | applied | MI strategies, OARS and change planning. Communication concept. | [E39], [E05] |
| 07-045–07-048 | [ambivalence](../public/data.js#L572) | Retained | applied | MI strategies, OARS and change planning. Communication concept. | [E39], [E05] |
| 07-049–07-052 | [škála sebedůvěry](../public/data.js#L573) | Retained | applied | MI strategies, OARS and change planning. Communication concept. | [E39], [E05] |
| 07-053–07-056 | [škála důležitosti](../public/data.js#L574) | Retained | applied | MI strategies, OARS and change planning. Communication concept. | [E39], [E05] |
| 07-057–07-060 | [vlastnictví cíle](../public/data.js#L575) | Retained | applied | Autonomy and internalization. Chosen value-aligned goals support autonomous motivation. | [E39], [E56] |
| 07-061–07-064 | [sebeúčinnost](../public/data.js#L576) | Retained | applied | MI strategies, OARS and change planning. Communication concept. | [E39], [E05] |
| 07-065–07-068 | [konkrétní pochvala](../public/data.js#L577) | Retained | applied | Affirmation and informative feedback. Specific positive feedback. | [E05], [E25] |
| 07-069–07-072 | [korekční zpětná vazba](../public/data.js#L578) | Retained | applied | Feedback and motor learning. Teaching example. | [E25], [E27] |
| 07-073–07-076 | [ukázka celého pohybu](../public/data.js#L579) | Retained | applied | Feedback and motor learning. Teaching example. | [E25], [E27] |
| 07-077–07-080 | [nácvik po částech](../public/data.js#L580) | Retained | applied | IFT staged learning; NSK pedagogy. Part learning example plausible; recombine skill. | [E04], [E45] |
| 07-081–07-084 | [postup od jednoduchého](../public/data.js#L581) | Retained | applied | IFT progression; Mayo technique before load. Simpler supported variant is a plausible progression. | [E04], [E37] |
| 07-085–07-088 | [znalost výsledku](../public/data.js#L582) | Retained | direct | Introduction: KR and KP definitions. Definition and example agree. | [E25] |
| 07-089–07-092 | [znalost provedení](../public/data.js#L583) | Retained | direct | Introduction: KR and KP definitions. Definition and example agree. | [E25] |
| 07-093–07-096 | [samostatné hodnocení](../public/data.js#L584) | Retained | applied | Feedback and motor learning. Teaching example. | [E25], [E27] |
| 07-097–07-100 | [bezpečné klima pro chybu](../public/data.js#L585) | Retained | applied | Nonjudgmental MI; SDT feedback discussion. Respectful feedback fits; disclosure effect not quantified. | [E39], [E56] |
| 07-101–07-104 | [vnitřní motivace](../public/data.js#L586) | Corrected/clarified | direct | MI theoretical underpinnings; SDT pp.71–73. Intrinsic enjoyment separated from value-aligned extrinsic motivation. | [E39], [E56] |
| 07-105–07-108 | [vnější motivace](../public/data.js#L587) | Corrected/clarified | direct | SDT pp.71–73; MI theoretical basis. Extrinsic motivation includes autonomous forms. | [E56], [E39] |
| 07-109–07-112 | [pedagogický přístup k nácviku techniky](../public/data.js#L588) | Retained | applied | NSK pedagogy; IFT movement learning. Pedagogical choice fits; example is illustrative. | [E45], [E04] |
| 07-113–07-116 | [odpor ke změně](../public/data.js#L589) | Corrected/clarified | applied | MI strategies, OARS and change planning. Communication concept. | [E39], [E05] |
| 07-117–07-120 | [komunikace bez odborného žargonu](../public/data.js#L590) | Retained | applied | MI strategies, OARS and change planning. Communication concept. | [E39], [E05] |
| 08-001–08-004 | [regenerace](../public/data.js#L594) | Retained | applied | Recovery discussion; FM readiness; NSK. Recovery practice. | [E52], [E10], [E45] |
| 08-005–08-008 | [spánek dospělého](../public/data.js#L595) | Corrected/clarified | direct | AASM p.591; CDC sleep schedule; FM ch.11. Sleep guidance; individualized need. | [E58], [E13], [E10] |
| 08-009–08-012 | [pravidelnost spánku](../public/data.js#L596) | Retained | direct | AASM p.591; CDC sleep schedule; FM ch.11. Sleep guidance; individualized need. | [E58], [E13], [E10] |
| 08-013–08-016 | [pasivní odpočinek](../public/data.js#L597) | Retained | applied | Recovery discussion; FM readiness; NSK. Recovery practice. | [E52], [E10], [E45] |
| 08-017–08-020 | [aktivní regenerace](../public/data.js#L598) | Retained | applied | Recovery discussion; FM readiness; NSK. Recovery practice. | [E52], [E10], [E45] |
| 08-021–08-024 | [rehydratace](../public/data.js#L599) | Retained | applied | Water/energy; FM post-exercise. Nutrition/hydration principle. | [E21], [E10] |
| 08-025–08-028 | [doplnění energie](../public/data.js#L600) | Retained | applied | Water/energy; FM post-exercise. Nutrition/hydration principle. | [E21], [E10] |
| 08-029–08-032 | [bílkoviny v regeneraci](../public/data.js#L601) | Retained | direct | EFSA Protein; FM 7-22 post-exercise nutrition. Amino acids support tissue rebuilding. | [E21], [E10] |
| 08-033–08-036 | [sacharidy v regeneraci](../public/data.js#L602) | Retained | direct | §8-36 post-exercise nutrition. Carbohydrate supports glycogen replenishment. | [E10] |
| 08-037–08-040 | [zklidnění po výkonu](../public/data.js#L603) | Retained | applied | Recovery discussion; FM readiness; NSK. Recovery practice. | [E52], [E10], [E45] |
| 08-041–08-044 | [DOMS](../public/data.js#L604) | Retained | direct | Introduction: delayed onset muscle soreness. Delayed soreness differs from acute injury. | [E52] |
| 08-045–08-048 | [bolest není měřítko kvality](../public/data.js#L605) | Retained | applied | Adaptations versus DOMS outcomes. Soreness is not a proxy for adaptation. | [E53], [E52] |
| 08-049–08-052 | [varovná bolest](../public/data.js#L606) | Retained | applied | Mayo pain; ACE referral boundaries. Stop and assess warning pain. | [E37], [E02] |
| 08-053–08-056 | [řízení tréninkové zátěže](../public/data.js#L607) | Retained | applied | Recovery discussion; FM readiness; NSK. Recovery practice. | [E52], [E10], [E45] |
| 08-057–08-060 | [odpočinek mezi náročnými podněty](../public/data.js#L608) | Retained | applied | Recovery discussion; FM readiness; NSK. Recovery practice. | [E52], [E10], [E45] |
| 08-061–08-064 | [individuální rychlost zotavení](../public/data.js#L609) | Retained | applied | Recovery discussion; FM readiness; NSK. Recovery practice. | [E52], [E10], [E45] |
| 08-065–08-068 | [masáž](../public/data.js#L610) | Retained | direct | Massage and DOMS/perceived fatigue discussion. Possible short-term symptom benefit, not universal repair. | [E52] |
| 08-069–08-072 | [foam rolling](../public/data.js#L611) | Retained | direct | Conclusion. Qualified short-term rolling claim. | [E26] |
| 08-073–08-076 | [statický strečink po tréninku](../public/data.js#L612) | Retained | direct | Conclusion and evidence certainty. Recovery benefit not established; flexibility is separate. | [E60] |
| 08-077–08-080 | [chladová metoda](../public/data.js#L613) | Retained | direct | Roberts abstract/results; recovery review. Cold immersion effect is context-specific. | [E17], [E52] |
| 08-081–08-084 | [tepelná metoda](../public/data.js#L614) | Retained | applied | Sauna precautions; rolling limitations. Method-specific precautions. | [E54], [E26], [E45] |
| 08-085–08-088 | [trénink při nemoci](../public/data.js#L615) | Retained | direct | Fever, fatigue and generalized symptoms. Definition and example agree. | [E33] |
| 08-089–08-092 | [psychický stres](../public/data.js#L616) | Retained | applied | Recovery discussion; FM readiness; NSK. Recovery practice. | [E52], [E10], [E45] |
| 08-093–08-096 | [spánkový dluh](../public/data.js#L617) | Retained | direct | AASM p.591; CDC sleep schedule; FM ch.11. Sleep guidance; individualized need. | [E58], [E13], [E10] |
| 08-097–08-100 | [monitorování regenerace](../public/data.js#L618) | Retained | applied | Recovery and sleep-readiness sections. Several consistent indicators form a practical check-in. | [E10] |
| 08-101–08-104 | [druhy regenerace](../public/data.js#L619) | Retained | applied | Recovery discussion; FM readiness; NSK. Recovery practice. | [E52], [E10], [E45] |
| 08-105–08-108 | [nežádoucí účinky regeneračních metod](../public/data.js#L620) | Retained | applied | Sauna precautions; rolling limitations. Method-specific precautions. | [E54], [E26], [E45] |
| 08-109–08-112 | [spánková hygiena](../public/data.js#L621) | Retained | direct | AASM p.591; CDC sleep schedule; FM ch.11. Sleep guidance; individualized need. | [E58], [E13], [E10] |
| 08-113–08-116 | [kompresní pomůcky](../public/data.js#L622) | Retained | direct | Compression garments; effect-size comparison. Qualified soreness/fatigue claim fits 2018 analysis. | [E52] |
| 08-117–08-120 | [přetížení a přetrénování](../public/data.js#L623) | Corrected/clarified | direct | ECSS/ACSM consensus abstract. Overreaching and OTS are distinct; OTS requires exclusion diagnosis. | [E49] |
| 09-001–09-004 | [bezpečnost místa](../public/data.js#L627) | Retained | direct | ERC adult BLS; high-quality CPR/AED. Definition and example agree. | [E11], [E51] |
| 09-005–09-008 | [časné přivolání pomoci](../public/data.js#L628) | Retained | direct | HZS numbers; dispatcher guidance. Definition and example agree. | [E31], [E11] |
| 09-009–09-012 | [kontrola reakce](../public/data.js#L629) | Retained | direct | ERC adult BLS; high-quality CPR/AED. Definition and example agree. | [E11], [E51] |
| 09-013–09-016 | [kontrola dýchání](../public/data.js#L630) | Retained | direct | ERC adult BLS; high-quality CPR/AED. Definition and example agree. | [E11], [E51] |
| 09-017–09-020 | [agonální dýchání](../public/data.js#L631) | Retained | direct | ERC adult BLS; high-quality CPR/AED. Definition and example agree. | [E11], [E51] |
| 09-021–09-024 | [komprese hrudníku](../public/data.js#L632) | Retained | direct | ERC adult BLS; high-quality CPR/AED. Definition and example agree. | [E11], [E51] |
| 09-025–09-028 | [poměr 30 ku 2](../public/data.js#L633) | Retained | direct | Adult CPR: rescue breaths. 30:2 for trained adult rescuer agrees. | [E11], [E51] |
| 09-029–09-032 | [KPR jen kompresemi](../public/data.js#L634) | Retained | direct | Compression-only; dispatcher guidance. Untrained/unwilling adult rescuer compresses continuously. | [E11], [E51] |
| 09-033–09-036 | [tempo kompresí](../public/data.js#L635) | Retained | direct | ERC adult BLS; high-quality CPR/AED. Definition and example agree. | [E11], [E51] |
| 09-037–09-040 | [hloubka kompresí](../public/data.js#L636) | Retained | direct | ERC adult BLS; high-quality CPR/AED. Definition and example agree. | [E11], [E51] |
| 09-041–09-044 | [úplné uvolnění hrudníku](../public/data.js#L637) | Retained | direct | ERC adult BLS; high-quality CPR/AED. Definition and example agree. | [E11], [E51] |
| 09-045–09-048 | [AED](../public/data.js#L638) | Retained | direct | ERC adult BLS; high-quality CPR/AED. Definition and example agree. | [E11], [E51] |
| 09-049–09-052 | [bezpečnost při výboji AED](../public/data.js#L639) | Retained | direct | ERC adult BLS; high-quality CPR/AED. Definition and example agree. | [E11], [E51] |
| 09-053–09-056 | [zotavovací poloha](../public/data.js#L640) | Corrected/clarified | direct | ERC First Aid: relevant procedure sections. Definition and example agree. | [E24] |
| 09-057–09-060 | [mírné dušení](../public/data.js#L641) | Retained | direct | ERC First Aid: relevant procedure sections. Definition and example agree. | [E24] |
| 09-061–09-064 | [těžké dušení](../public/data.js#L642) | Corrected/clarified | direct | ERC First Aid: relevant procedure sections. Definition and example agree. | [E24] |
| 09-065–09-068 | [bezvědomí při dušení](../public/data.js#L643) | Corrected/clarified | direct | Choking: unresponsive person. Start CPR when obstruction causes unresponsiveness. | [E24] |
| 09-069–09-072 | [silné krvácení](../public/data.js#L644) | Retained | direct | ERC First Aid: relevant procedure sections. Definition and example agree. | [E24] |
| 09-073–09-076 | [turniket](../public/data.js#L645) | Retained | direct | ERC First Aid: relevant procedure sections. Definition and example agree. | [E24] |
| 09-077–09-080 | [epileptický záchvat](../public/data.js#L646) | Corrected/clarified | direct | Ambulance criteria and protection. Ambulance criteria expanded; core protection retained. | [E44], [E22] |
| 09-081–09-084 | [hypoglykemie u vědomého](../public/data.js#L647) | Retained | direct | ERC First Aid: relevant procedure sections. Definition and example agree. | [E24] |
| 09-085–09-088 | [příznaky cévní mozkové příhody](../public/data.js#L648) | Retained | direct | ERC First Aid: relevant procedure sections. Definition and example agree. | [E24] |
| 09-089–09-092 | [anafylaxe](../public/data.js#L649) | Retained | direct | ERC First Aid: relevant procedure sections. Definition and example agree. | [E24] |
| 09-093–09-096 | [akutní astmatické obtíže](../public/data.js#L650) | Retained | direct | Asthma recommendations. Assist own reliever inhaler and escalate severe symptoms. | [E24] |
| 09-097–09-100 | [ochlazení popáleniny](../public/data.js#L651) | Corrected/clarified | direct | Cooling recommendations. At least 20 minutes; thermal-burn scope explicit. | [E12], [E43] |
| 09-101–09-104 | [postup ABCDE](../public/data.js#L652) | Retained | direct | ERC First Aid: relevant procedure sections. Definition and example agree. | [E24] |
| 09-105–09-108 | [šok](../public/data.js#L653) | Retained | direct | Printed pp.13–14 shock positioning. Supine; passive leg raising is not routine. | [E24] |
| 09-109–09-112 | [záchranné vdechy](../public/data.js#L654) | Retained | direct | ERC adult BLS; high-quality CPR/AED. Definition and example agree. | [E11], [E51] |
| 09-113–09-116 | [rozdělení první pomoci](../public/data.js#L655) | Corrected/clarified | direct | HZS p.1 classification; NSK. Lay care usually lacks specialized equipment; may include AED. | [E32], [E45] |
| 09-117–09-120 | [pomoc operátora tísňové linky](../public/data.js#L656) | Retained | direct | Dispatcher and speakerphone recommendations. Dispatcher guides CPR and AED access. | [E11], [E51] |
| 10-001–10-004 | [vstupní zdravotní informace](../public/data.js#L660) | Retained | applied | Screening and client suitability. Health restrictions influence suitability. | [E02], [E04] |
| 10-005–10-008 | [kontrola připravenosti](../public/data.js#L661) | Retained | applied | Recovery/readiness; pain guidance. Daily check is a practical risk-control step. | [E10], [E37] |
| 10-009–10-012 | [vizuální kontrola vybavení](../public/data.js#L662) | Retained | applied | Inspect workplace for safety hazards. Damaged equipment is a hazard. | [E48] |
| 10-013–10-016 | [bezpečné nastavení stroje](../public/data.js#L663) | Retained | applied | Equipment/space hazards and form. Gym risk-control practice. | [E48], [E37], [E10] |
| 10-017–10-020 | [volná cvičební zóna](../public/data.js#L664) | Retained | applied | Equipment/space hazards and form. Gym risk-control practice. | [E48], [E37], [E10] |
| 10-021–10-024 | [zajištění kotoučů](../public/data.js#L665) | Retained | applied | Equipment/space hazards and form. Gym risk-control practice. | [E48], [E37], [E10] |
| 10-025–10-028 | [dohodnutá dopomoc](../public/data.js#L666) | Retained | applied | Equipment/space hazards and form. Gym risk-control practice. | [E48], [E37], [E10] |
| 10-029–10-032 | [vhodná obuv a oděv](../public/data.js#L667) | Retained | applied | Equipment/space hazards and form. Gym risk-control practice. | [E48], [E37], [E10] |
| 10-033–10-036 | [postupné zvyšování zátěže](../public/data.js#L668) | Retained | applied | Gradual increase; staged progression. Small increases after proficiency are reasonable. | [E37], [E04] |
| 10-037–10-040 | [technická způsobilost](../public/data.js#L669) | Retained | applied | Form before load and progression. Technique example. | [E37], [E04] |
| 10-041–10-044 | [ukončení série při ztrátě kontroly](../public/data.js#L670) | Retained | applied | Form before load and progression. Technique example. | [E37], [E04] |
| 10-045–10-048 | [varovné příznaky](../public/data.js#L671) | Retained | direct | ABCDE; chest pain and stroke. Acute warning symptoms require stopping and help. | [E24] |
| 10-049–10-052 | [nouzový plán](../public/data.js#L672) | Retained | applied | AED access and maintained first-aid kits. Emergency preparation. | [E11], [E24] |
| 10-053–10-056 | [znalost umístění AED](../public/data.js#L673) | Retained | applied | AED access and maintained first-aid kits. Emergency preparation. | [E11], [E24] |
| 10-057–10-060 | [vybavená lékárnička](../public/data.js#L674) | Retained | applied | AED access and maintained first-aid kits. Emergency preparation. | [E11], [E24] |
| 10-061–10-064 | [hydratace v teple](../public/data.js#L675) | Retained | applied | NIOSH heat prevention and signs. Heat precautions. | [E29], [E30] |
| 10-065–10-068 | [aklimatizace na teplo](../public/data.js#L676) | Retained | direct | Acclimatization recommendations. 7–14 days is guidance; individual adaptation varies. | [E29] |
| 10-069–10-072 | [slabost nebo mdloba v horku](../public/data.js#L677) | Retained | applied | NIOSH heat prevention and signs. Heat precautions. | [E29], [E30] |
| 10-073–10-076 | [úpal](../public/data.js#L678) | Retained | direct | Heat stroke; active cooling recommendations. Confusion/high temperature warrants emergency response. | [E30], [E24] |
| 10-077–10-080 | [přímý dohled](../public/data.js#L679) | Retained | applied | Equipment/space hazards and form. Gym risk-control practice. | [E48], [E37], [E10] |
| 10-081–10-084 | [hygiena kontaktních ploch](../public/data.js#L680) | Retained | direct | Clean shared equipment after each use. Definition and example agree. | [E15] |
| 10-085–10-088 | [bezpečné odkládání činek](../public/data.js#L681) | Retained | applied | Equipment/space hazards and form. Gym risk-control practice. | [E48], [E37], [E10] |
| 10-089–10-092 | [kompetenční hranice trenéra](../public/data.js#L682) | Retained | direct | ACSM screening and symptoms. Referral; desired intensity also matters. | [E55], [E37] |
| 10-093–10-096 | [záznam incidentu](../public/data.js#L683) | Retained | applied | Incident investigation records. Document observed facts. | [E47] |
| 10-097–10-100 | [revize po incidentu](../public/data.js#L684) | Retained | applied | Root causes and corrective actions. Review seeks prevention of recurrence. | [E47] |
| 10-101–10-104 | [dvě skupiny preventivních opatření](../public/data.js#L685) | Corrected/clarified | applied | Prevention competency; examination BOZP. Pedagogical grouping, not a statutory universal taxonomy. | [E45] |
| 10-105–10-108 | [seznámení s BOZP](../public/data.js#L686) | Corrected/clarified | applied | Prevention competency; examination BOZP. Pedagogical grouping, not a statutory universal taxonomy. | [E45] |
| 10-109–10-112 | [lékařské posouzení před zátěží](../public/data.js#L687) | Corrected/clarified | direct | ACSM screening and symptoms. Referral; desired intensity also matters. | [E55], [E37] |
| 10-113–10-116 | [riziko u začátečníka](../public/data.js#L688) | Retained | applied | Equipment/space hazards and form. Gym risk-control practice. | [E48], [E37], [E10] |
| 10-117–10-120 | [prostředí a klimatické podmínky](../public/data.js#L689) | Retained | applied | NIOSH heat prevention and signs. Heat precautions. | [E29], [E30] |
| 11-001–11-004 | [WADA](../public/data.js#L693) | Retained | direct | Code arts.2.1.1 and 4.3; List introduction. Definition and example agree. | [E16], [E65] |
| 11-005–11-008 | [Seznam 2026](../public/data.js#L694) | Retained | direct | Relevant 2026 category and status sections. Definition and example agree. | [E65] |
| 11-009–11-012 | [zákaz stále](../public/data.js#L695) | Retained | direct | Relevant 2026 category and status sections. Definition and example agree. | [E65] |
| 11-013–11-016 | [zákaz při soutěži](../public/data.js#L696) | Retained | direct | Relevant 2026 category and status sections. Definition and example agree. | [E65] |
| 11-017–11-020 | [zákaz v určitých sportech](../public/data.js#L697) | Retained | direct | Relevant 2026 category and status sections. Definition and example agree. | [E65] |
| 11-021–11-024 | [kritéria pro zařazení](../public/data.js#L698) | Corrected/clarified | direct | Code arts.2.1.1 and 4.3; List introduction. Definition and example agree. | [E16], [E65] |
| 11-025–11-028 | [přísná odpovědnost](../public/data.js#L699) | Retained | direct | Code arts.2.1.1 and 4.3; List introduction. Definition and example agree. | [E16], [E65] |
| 11-029–11-032 | [terapeutická výjimka](../public/data.js#L700) | Retained | direct | Definition and four TUE criteria. Approved exception, not a trainer’s verbal permission. | [E63] |
| 11-033–11-036 | [neúplný výčet příkladů](../public/data.js#L701) | Retained | direct | Relevant 2026 category and status sections. Definition and example agree. | [E65] |
| 11-037–11-040 | [S0 neschválené látky](../public/data.js#L702) | Retained | direct | S0, printed p.4. No approval for human therapy; other sections excluded. | [E65] |
| 11-041–11-044 | [S1 anabolické látky](../public/data.js#L703) | Retained | direct | Relevant 2026 category and status sections. Definition and example agree. | [E65] |
| 11-045–11-048 | [S2 peptidové hormony](../public/data.js#L704) | Retained | direct | S2, printed pp.7–8. EPO and category status agree. | [E65] |
| 11-049–11-052 | [S3 beta-2 agonisté](../public/data.js#L705) | Retained | direct | S3, printed p.9. Inhaled exceptions are bounded by substance/dose. | [E65] |
| 11-053–11-056 | [S4 hormonální a metabolické modulátory](../public/data.js#L706) | Retained | direct | Relevant 2026 category and status sections. Definition and example agree. | [E65] |
| 11-057–11-060 | [S5 diuretika a maskovací látky](../public/data.js#L707) | Retained | direct | S5, printed p.12. Broad category correct; list also has explicit exceptions. | [E65] |
| 11-061–11-064 | [M1 manipulace s krví](../public/data.js#L708) | Retained | direct | Relevant 2026 category and status sections. Definition and example agree. | [E65] |
| 11-065–11-068 | [M2 chemická a fyzikální manipulace](../public/data.js#L709) | Retained | direct | Relevant 2026 category and status sections. Definition and example agree. | [E65] |
| 11-069–11-072 | [M3 genový a buněčný doping](../public/data.js#L710) | Corrected/clarified | direct | M3, printed p.14. Enhancement-potential technologies covered. | [E65] |
| 11-073–11-076 | [S6 stimulancia](../public/data.js#L711) | Retained | direct | Relevant 2026 category and status sections. Definition and example agree. | [E65] |
| 11-077–11-080 | [S7 narkotika](../public/data.js#L712) | Retained | direct | Relevant 2026 category and status sections. Definition and example agree. | [E65] |
| 11-081–11-084 | [S8 kanabinoidy](../public/data.js#L713) | Retained | direct | S8, printed p.18. In-competition prohibition; CBD exception does not ensure purity. | [E65], [E64] |
| 11-085–11-088 | [S9 glukokortikoidy](../public/data.js#L714) | Retained | direct | Relevant 2026 category and status sections. Definition and example agree. | [E65] |
| 11-089–11-092 | [P1 beta-blokátory](../public/data.js#L715) | Corrected/clarified | direct | Relevant 2026 category and status sections. Definition and example agree. | [E65] |
| 11-093–11-096 | [ověření léku](../public/data.js#L716) | Retained | direct | Current list and medicine verification. Check substance, route, dose and competition context. | [E65], [E19], [E63] |
| 11-097–11-100 | [minimalizace rizika doplňků](../public/data.js#L717) | Retained | direct | Need/risk/consequence and batch numbers. Definition and example agree. | [E64], [E07] |
| 11-101–11-104 | [Antidopingový výbor ČR](../public/data.js#L718) | Retained | direct | Organization role; TUE authority. Definition and example agree. | [E20], [E63] |
| 11-105–11-108 | [Mezinárodní testovací agentura](../public/data.js#L719) | Retained | direct | Testing, education, results and biological passport. Definition and example agree. | [E34] |
| 11-109–11-112 | [zdravotní důsledky anabolik](../public/data.js#L720) | Corrected/clarified | direct | Physical and psychological adverse effects. Definition and example agree. | [E01] |
| 11-113–11-116 | [šaržově testovaný doplněk](../public/data.js#L721) | Retained | direct | Need/risk/consequence and batch numbers. Definition and example agree. | [E64], [E07] |
| 11-117–11-120 | [látka zneužívaná ve společnosti](../public/data.js#L722) | Retained | direct | Relevant 2026 category and status sections. Definition and example agree. | [E65] |

## Public evidence and scope

- **E01** — [NHS — anabolic steroid misuse](https://www.nhs.uk/conditions/anabolic-steroid-misuse/). Health harms, not dosing advice.
- **E02** — [ACE GFI Assessments](https://www.acefitness.org/groupfitnessresources/pdfs/GFI_Assessments.pdf). Posture views, ROM and standardized assessment procedures. Fitness education, not clinical diagnosis.
- **E03** — [ACE — chest exercise research](https://www.acefitness.org/resources/pros/expert-articles/8972/be-a-chest-day-champion-an-evidence-based-approach-to-training-the-chest/?topicScope=workouts). Exercise classification and examples, not a guarantee of long-term hypertrophy from EMG.
- **E04** — [ACE IFT model, 2020](https://www.acefitness.org/continuing-education/certified/july-2020/7580/the-new-ace-integrated-fitness-training-reg-model-what-has-changed/). Individualized progression and movement training; applied examples are reviewer interpretation.
- **E05** — [MIA:STEP, 2006](https://motivationalinterviewing.org/sites/default/files/mia-step.pdf). NIDA/SAMHSA initiative educational material hosted by MINT; affirmations, printed p.80. Clinical context, applied cautiously to coaching.
- **E06** — [OpenStax A&P 2e — 11.1](https://openstax.org/books/anatomy-and-physiology-2e/pages/11-1-interactions-of-skeletal-muscles-their-fascicle-arrangement-and-their-lever-systems). Prime movers and antagonists.
- **E07** — [AIS — supplement framework](https://www.ausport.gov.au/ais/nutrition/supplements). ABCD classification, elite-sport context.
- **E08** — [AIS — Group A](https://www.ausport.gov.au/ais/nutrition/supplements/group_a). Strong evidence in specific situations; product purity is separate.
- **E09** — [AIS — Group D](https://www.ausport.gov.au/ais/nutrition/supplements/group_d). Banned or high-risk substances; annual WADA list remains authoritative.
- **E10** — [US Army FM 7-22](https://home.army.mil/hood/5517/2115/1094/FM_7-22.pdf). 2020 manual with change markings. General training principles only; no military dosing prescribed to civilian clients.
- **E11** — [ERC Adult BLS, 2025](https://www.erc.edu/media/wrhj5sye/gl2025-04-bls-e.pdf). Adult CPR, 30:2, compression-only and dispatcher instructions; no pediatric extrapolation.
- **E12** — [ANZCOR Guideline 9.1.3](https://www.anzcor.org/home/first-aid/guideline-9-1-3-first-aid-for-burns). Running water for at least 20 minutes, as soon as possible; may still help if begun up to three hours later.
- **E13** — [CDC — sleep and heart health](https://www.cdc.gov/heart-disease/about/sleep-and-heart-health.html). Regularity and sleep hygiene; page inspected via web.
- **E14** — [OpenStax A&P 2e — 11.5](https://openstax.org/books/anatomy-and-physiology-2e/pages/11-5-muscles-of-the-pectoral-girdle-and-upper-limbs). Pectoralis major location and action.
- **E15** — [CDC — athletic facilities MRSA, 2025](https://www.cdc.gov/mrsa/prevention/coaches-athletic-directors.html). Equipment cleaning and infection control, not all pathogens.
- **E16** — [World Anti-Doping Code 2021](https://www.wada-ama.org/sites/default/files/resources/files/2021_wada_code.pdf). Articles 2.1.1, 4.3.1 and 4.3.2, applicable code at audit date.
- **E17** — [Roberts et al. 2015 — cold immersion](https://pmc.ncbi.nlm.nih.gov/articles/PMC4594298/). Small resistance-training studies; cannot generalize to every cold exposure.
- **E18** — [OpenStax 10.4 — muscle tension](https://openstax.org/books/anatomy-and-physiology-2e/pages/10-4-nervous-system-control-of-muscle-tension). Contraction definitions only.
- **E19** — [Český Antidoping — current list](https://www.antidoping.cz/zakazane-latky/zakazane-latky-a-metody). 2026 list and medicine verification tool; contextual corroboration of WADA, not independent rules.
- **E20** — [Český Antidoping](https://www.antidoping.cz/). Institutional role, not independent medical evidence.
- **E21** — [EFSA DRV summary, 2017](https://www.efsa.europa.eu/sites/default/files/2017_09_DRVs_summary_report.pdf). Adult reference values; total water includes food and drinks. Water values assume moderate temperature and activity.
- **E22** — [Epilepsy Society — first aid](https://epilepsysociety.org.uk/about-epilepsy/first-aid-epileptic-seizures). Reviewed November 2025; prolonged seizures, injury, breathing and recovery.
- **E23** — [EU Regulation 1169/2011, Annex XIV](https://www.legislation.gov.uk/eur/2011/1169/annex/XIV). Food energy conversion factors. Actual Annex content retrieved by direct HTTP because web extraction failed.
- **E24** — [ERC First Aid, 2025](https://www.erc.edu/media/i2vllpae/gl2025-12-faid-e.pdf). Choking, asthma, shock and acute assessment. Passive leg raising is not routine; thermal burns outside this edition scope.
- **E25** — [Motor learning feedback review, 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8681883/). KR/KP definitions; no universal best feedback schedule.
- **E26** — [Wiewelhove et al. 2019](https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2019.00376/full). Qualified foam-rolling review; uncertain mechanisms and dosing.
- **E27** — [Wulf, 2013 attention review](https://gwulf.faculty.unlv.edu/wp-content/uploads/2018/11/Wulf_AF_review_2013.pdf). External focus definition and motor learning research. Author-hosted PDF retrieved by direct HTTP.
- **E28** — [NHS England — SDR assessment guide, 2014](https://www.england.nhs.uk/wp-content/uploads/sites/12/2014/03/ce-sdr-guide2.pdf). Confirms goniometry measures joint ROM; pediatric protocol is not prescribed to gym clients.
- **E29** — [CDC NIOSH — acclimatization](https://www.cdc.gov/niosh/heat-stress/recommendations/acclimatization.html). 7–14 days gradual exposure for workers; timing is general guidance, not a guaranteed individual adaptation.
- **E30** — [CDC NIOSH — heat illnesses](https://www.cdc.gov/niosh/heat-stress/about/illnesses.html). 3 March 2026 page; heatstroke signs, urgency and cooling.
- **E31** — [HZS ČR — emergency communication](https://hzscr.gov.cz/tisnova-komunikace-v-ceske-republice-2). Czech 155/112 telephone numbers.
- **E32** — [HZS ČR — basic first aid](https://archiv.hzscr.gov.cz/soubor/zakladni-znalosti-zasad-prvni-pomoci-pdf.aspx). Historical PDF used ONLY for first-aid classification, not resuscitation procedures.
- **E33** — [Mayo Clinic — exercise and illness, 2023](https://www.mayoclinic.org/healthy-lifestyle/fitness/expert-answers/exercise/faq-20058494). Fever/systemic symptoms; no general neck-rule prescription.
- **E34** — [ITA — expertise](https://ita.sport/expertise/). Testing, results management, education and passport roles.
- **E35** — [OpenStax A&P 2e — 9.1](https://openstax.org/books/anatomy-and-physiology-2e/pages/9-1-classification-of-joints). Synovial joint classification.
- **E36** — [OpenStax A&P 2e — 11.6](https://openstax.org/books/anatomy-and-physiology-2e/pages/11-6-appendicular-muscles-of-the-pelvic-girdle-and-lower-limbs). Quadriceps attachments and knee extension.
- **E37** — [Mayo Clinic — weight training, 21 January 2026](https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/weight-training/art-20045842?p=1). General weight training: form, breathing, progression and stopping for pain; not specialist maximal-lift instruction.
- **E38** — [Sports 2026;14(8):348](https://pmc.ncbi.nlm.nih.gov/articles/PMC13517766/). Narrative review of training methods. Definitions and qualified efficiency claims; no universal superiority. Direct HTTP article used because web extraction returned a challenge.
- **E39** — [Resnicow & McMaster, 2012](https://link.springer.com/article/10.1186/1479-5868-9-19). MI and self-determination theory applied to health behavior. Trainer examples are applications, not direct trial evidence.
- **E40** — [OpenStax A&P 2e — 9.5](https://openstax.org/books/anatomy-and-physiology-2e/pages/9-5-types-of-body-movements). Flexion, extension and abduction planes.
- **E41** — [OpenStax A&P 2e — 10.2](https://openstax.org/books/anatomy-and-physiology-2e/pages/10-2-skeletal-muscle). Connective tissue layers of skeletal muscle.
- **E42** — [OpenStax 4.4 — muscle tissues](https://openstax.org/books/anatomy-and-physiology-2e/pages/4-4-muscle-tissue-and-motion). Skeletal, smooth and cardiac tissues.
- **E43** — [NHS — burns and scalds](https://www.nhs.uk/conditions/burns-and-scalds/). 20 minutes within three hours, remove unattached items; do not use ice or creams.
- **E44** — [NHS — seizure first aid](https://www.nhs.uk/symptoms/what-to-do-if-someone-has-a-seizure-fit/). Protection and ambulance criteria, including first seizure and breathing problems.
- **E45** — [NSK — qualification 74-035-M](https://www.narodnikvalifikace.cz/kvalifikace-1850/hodnotici-standard). Assessment scope only; does not independently validate anatomy, nutrition or causal coaching claims.
- **E46** — [OpenStax 24.7 — nutrition](https://openstax.org/books/anatomy-and-physiology-2e/pages/24-7-nutrition-and-diet). Vitamin/mineral classification only; not its dated calorie/BMI estimates.
- **E47** — [OSHA — incident investigation](https://www.osha.gov/incident-investigation). Root causes and recurrence prevention; applied to gym example.
- **E48** — [OSHA — hazard identification](https://www.osha.gov/safety-management/hazard-Identification/). Equipment inspections and hazards; general practice, not a Czech legal compliance conclusion.
- **E49** — [ECSS/ACSM consensus, 2013](https://pubmed.ncbi.nlm.nih.gov/23247672/). PubMed abstract inspected: prolonged maladaptation and exclusion diagnosis.
- **E50** — [OpenStax A&P 2e — 1.6](https://openstax.org/books/anatomy-and-physiology-2e/pages/1-6-anatomical-terminology). Anatomical planes; textbook, 2022 edition.
- **E51** — [RCUK Adult BLS, 2025](https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/adult-basic-life-support-guidelines). Public implementation of ERC guidance; corroboration, not an independent evidence base.
- **E52** — [Dupuy et al., 2018 meta-analysis](https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2018.00403/full). Post-exercise soreness and perceived fatigue in healthy participants. Benefits do not establish injury treatment or full performance recovery.
- **E53** — [ACSM resistance training position stand, 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC12965823/). Healthy adult RT review; not rehabilitation or athlete-specific dosing.
- **E54** — [Harvard Health — sauna precautions](https://www.health.harvard.edu/healthy-aging-and-longevity/saunas-and-your-health). Medical education precautions; no individualized clearance.
- **E55** — [ACSM screening algorithm, 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC7059860/). Algorithm description only; old NHANES rates are not current population estimates.
- **E56** — [Ryan & Deci, 2000](https://www.selfdeterminationtheory.org/SDT/documents/2000_RyanDeci_SDT.pdf). Original SDT article; intrinsic versus integrated/identified extrinsic motivation.
- **E57** — [OpenStax 7.1 — skeleton](https://openstax.org/books/anatomy-and-physiology-2e/pages/7-1-divisions-of-the-skeletal-system). Axial and appendicular divisions.
- **E58** — [AASM/SRS sleep consensus, 2015](https://www.aasm.org/resources/pdf/adultsleepdurationconsensus.pdf). Adult 18–60 recommendation; individual sleep need varies.
- **E59** — [OpenStax 7.3 — vertebral column](https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column). Normal curves and intervertebral joints.
- **E60** — [Afonso et al., 2021 meta-analysis](https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2021.677581/full). Post-exercise stretching recovery evidence was insufficient and very low certainty; not proof that all stretching is useless.
- **E61** — [OpenStax 1.2 — organization](https://openstax.org/books/anatomy-and-physiology-2e/pages/1-2-structural-organization-of-the-human-body). Eleven systems in this textbook classification.
- **E62** — [AHRQ — Teach-back](https://www.ahrq.gov/patient-safety/reports/engage/teachback.html). Understanding checked in own words; clinical communication method, applied to trainer instruction.
- **E63** — [Český Antidoping — TUE](https://www.antidoping.cz/zakazane-latky/terapeuticke-vyjimky). TUE criteria and correct authority; a prescription does not automatically grant TUE.
- **E64** — [UKAD — supplement risks](https://www.ukad.org.uk/athletes/managing-supplement-risks). Batch tests reduce risk; not a guarantee.
- **E65** — [WADA Prohibited List 2026](https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf). Effective 1 January 2026; category summaries checked with exceptions, administration route and competition status.
- **E66** — [WHO — Healthy diet](https://www.who.int/news-room/fact-sheets/detail/healthy-diet). Protein, fats and adult salt guidance; not a prescription for a specific athlete.
- **E67** — [WHO 2020 guidelines — BJSM](https://pmc.ncbi.nlm.nih.gov/articles/PMC7719906/). Adult activity guidance; not a pediatric prescription.

[E01]: https://www.nhs.uk/conditions/anabolic-steroid-misuse/
[E02]: https://www.acefitness.org/groupfitnessresources/pdfs/GFI_Assessments.pdf
[E03]: https://www.acefitness.org/resources/pros/expert-articles/8972/be-a-chest-day-champion-an-evidence-based-approach-to-training-the-chest/?topicScope=workouts
[E04]: https://www.acefitness.org/continuing-education/certified/july-2020/7580/the-new-ace-integrated-fitness-training-reg-model-what-has-changed/
[E05]: https://motivationalinterviewing.org/sites/default/files/mia-step.pdf
[E06]: https://openstax.org/books/anatomy-and-physiology-2e/pages/11-1-interactions-of-skeletal-muscles-their-fascicle-arrangement-and-their-lever-systems
[E07]: https://www.ausport.gov.au/ais/nutrition/supplements
[E08]: https://www.ausport.gov.au/ais/nutrition/supplements/group_a
[E09]: https://www.ausport.gov.au/ais/nutrition/supplements/group_d
[E10]: https://home.army.mil/hood/5517/2115/1094/FM_7-22.pdf
[E11]: https://www.erc.edu/media/wrhj5sye/gl2025-04-bls-e.pdf
[E12]: https://www.anzcor.org/home/first-aid/guideline-9-1-3-first-aid-for-burns
[E13]: https://www.cdc.gov/heart-disease/about/sleep-and-heart-health.html
[E14]: https://openstax.org/books/anatomy-and-physiology-2e/pages/11-5-muscles-of-the-pectoral-girdle-and-upper-limbs
[E15]: https://www.cdc.gov/mrsa/prevention/coaches-athletic-directors.html
[E16]: https://www.wada-ama.org/sites/default/files/resources/files/2021_wada_code.pdf
[E17]: https://pmc.ncbi.nlm.nih.gov/articles/PMC4594298/
[E18]: https://openstax.org/books/anatomy-and-physiology-2e/pages/10-4-nervous-system-control-of-muscle-tension
[E19]: https://www.antidoping.cz/zakazane-latky/zakazane-latky-a-metody
[E20]: https://www.antidoping.cz/
[E21]: https://www.efsa.europa.eu/sites/default/files/2017_09_DRVs_summary_report.pdf
[E22]: https://epilepsysociety.org.uk/about-epilepsy/first-aid-epileptic-seizures
[E23]: https://www.legislation.gov.uk/eur/2011/1169/annex/XIV
[E24]: https://www.erc.edu/media/i2vllpae/gl2025-12-faid-e.pdf
[E25]: https://pmc.ncbi.nlm.nih.gov/articles/PMC8681883/
[E26]: https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2019.00376/full
[E27]: https://gwulf.faculty.unlv.edu/wp-content/uploads/2018/11/Wulf_AF_review_2013.pdf
[E28]: https://www.england.nhs.uk/wp-content/uploads/sites/12/2014/03/ce-sdr-guide2.pdf
[E29]: https://www.cdc.gov/niosh/heat-stress/recommendations/acclimatization.html
[E30]: https://www.cdc.gov/niosh/heat-stress/about/illnesses.html
[E31]: https://hzscr.gov.cz/tisnova-komunikace-v-ceske-republice-2
[E32]: https://archiv.hzscr.gov.cz/soubor/zakladni-znalosti-zasad-prvni-pomoci-pdf.aspx
[E33]: https://www.mayoclinic.org/healthy-lifestyle/fitness/expert-answers/exercise/faq-20058494
[E34]: https://ita.sport/expertise/
[E35]: https://openstax.org/books/anatomy-and-physiology-2e/pages/9-1-classification-of-joints
[E36]: https://openstax.org/books/anatomy-and-physiology-2e/pages/11-6-appendicular-muscles-of-the-pelvic-girdle-and-lower-limbs
[E37]: https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/weight-training/art-20045842?p=1
[E38]: https://pmc.ncbi.nlm.nih.gov/articles/PMC13517766/
[E39]: https://link.springer.com/article/10.1186/1479-5868-9-19
[E40]: https://openstax.org/books/anatomy-and-physiology-2e/pages/9-5-types-of-body-movements
[E41]: https://openstax.org/books/anatomy-and-physiology-2e/pages/10-2-skeletal-muscle
[E42]: https://openstax.org/books/anatomy-and-physiology-2e/pages/4-4-muscle-tissue-and-motion
[E43]: https://www.nhs.uk/conditions/burns-and-scalds/
[E44]: https://www.nhs.uk/symptoms/what-to-do-if-someone-has-a-seizure-fit/
[E45]: https://www.narodnikvalifikace.cz/kvalifikace-1850/hodnotici-standard
[E46]: https://openstax.org/books/anatomy-and-physiology-2e/pages/24-7-nutrition-and-diet
[E47]: https://www.osha.gov/incident-investigation
[E48]: https://www.osha.gov/safety-management/hazard-Identification/
[E49]: https://pubmed.ncbi.nlm.nih.gov/23247672/
[E50]: https://openstax.org/books/anatomy-and-physiology-2e/pages/1-6-anatomical-terminology
[E51]: https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/adult-basic-life-support-guidelines
[E52]: https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2018.00403/full
[E53]: https://pmc.ncbi.nlm.nih.gov/articles/PMC12965823/
[E54]: https://www.health.harvard.edu/healthy-aging-and-longevity/saunas-and-your-health
[E55]: https://pmc.ncbi.nlm.nih.gov/articles/PMC7059860/
[E56]: https://www.selfdeterminationtheory.org/SDT/documents/2000_RyanDeci_SDT.pdf
[E57]: https://openstax.org/books/anatomy-and-physiology-2e/pages/7-1-divisions-of-the-skeletal-system
[E58]: https://www.aasm.org/resources/pdf/adultsleepdurationconsensus.pdf
[E59]: https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column
[E60]: https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2021.677581/full
[E61]: https://openstax.org/books/anatomy-and-physiology-2e/pages/1-2-structural-organization-of-the-human-body
[E62]: https://www.ahrq.gov/patient-safety/reports/engage/teachback.html
[E63]: https://www.antidoping.cz/zakazane-latky/terapeuticke-vyjimky
[E64]: https://www.ukad.org.uk/athletes/managing-supplement-risks
[E65]: https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf
[E66]: https://www.who.int/news-room/fact-sheets/detail/healthy-diet
[E67]: https://pmc.ncbi.nlm.nih.gov/articles/PMC7719906/

## Security and limits of verification

This change updates static quiz data and deterministic generation. No new runtime/development dependencies, remote endpoints, forms or HTML-rendering sinks were introduced. The proportionate OWASP Top 10:2025 check covered A02 configuration (existing CSP/static hosting), A03 supply chain (zero project dependencies), A05 injection (question/source content still rendered through textContent and safe links) and A08 data integrity (generation/provenance tests and source review). This is not a full security certification. [OWASP Top 10:2025](https://top10.owasp.org/2025/).

The check does not certify clinical diagnosis, a personalized training prescription, all external links forever, or a production deployment of the branch. Public main is updated only after the pull request merges and hosting completes. No production-deployment claim follows solely from a commit or push.
