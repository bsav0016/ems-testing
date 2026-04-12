import type { Source, Question } from '../types'

export const SOURCES: Source[] = [
  { id: 'study-guide', label: 'Test 3 Study Guide' },
  { id: 'test-1a', label: 'Test 1A Practice' },
  { id: 'test-2a', label: 'Test 2A Practice' },
]

function q(
  questionText: string,
  correct: string,
  wrong: [string, string, string],
  reference: string,
  source = 'study-guide',
): Question {
  return {
    questionText,
    source,
    reference,
    answerOptions: [
      { text: correct, isCorrect: true },
      { text: wrong[0], isCorrect: false },
      { text: wrong[1], isCorrect: false },
      { text: wrong[2], isCorrect: false },
    ],
  }
}

// For questions without a study guide reference
function qa(
  questionText: string,
  correct: string,
  wrong: [string, string, string],
  source: string,
): Question {
  return {
    questionText,
    source,
    answerOptions: [
      { text: correct, isCorrect: true },
      { text: wrong[0], isCorrect: false },
      { text: wrong[1], isCorrect: false },
      { text: wrong[2], isCorrect: false },
    ],
  }
}

export const QUESTIONS: Question[] = [
  q(
    'You arrive on scene and find a patient who is unresponsive with pinpoint pupils. Which of the following substances is most likely responsible?',
    'Opioids such as fentanyl.',
    ['Stimulants such as cocaine or methamphetamine.', 'Carbon monoxide.', 'Alcohol.'],
    '3',
  ),
  q(
    'You are called to a residence where three members of the same household are all complaining of headache, nausea, and flu-like symptoms, but none of them have a fever. Which of the following should be your primary concern?',
    'Carbon monoxide poisoning.',
    ['A shared viral illness such as influenza.', 'Food poisoning from a shared meal.', 'A mass opioid overdose.'],
    '4',
  ),
  q(
    'A 40-year-old male is found slumped in a chair with slurred speech and an unsteady gait. His family insists he has not been drinking. Which of the following best explains why you should check his blood glucose before assuming intoxication?',
    'Hypoglycemia can mimic the signs and symptoms of intoxication.',
    [
      'Alcohol directly suppresses insulin production and must be ruled out via BG.',
      'Intoxicated patients are at higher risk for developing hyperglycemia.',
      'Blood glucose levels determine whether to contact medical direction.',
    ],
    '11',
  ),
  q(
    'Which of the following correctly identifies the signs and symptoms of hyperglycemia?',
    'Warm/dry skin, dehydration, increased urination, and present/increasing hunger.',
    [
      'Shallow/rapid breathing, pale moist skin, diaphoresis, and rapid pulse.',
      'Pinpoint pupils, slowed breathing, and bradycardia.',
      'Salivation, lacrimation, urination, and muscle twitching.',
    ],
    '12',
  ),
  q(
    'Which of the following correctly identifies the signs and symptoms of hypoglycemia?',
    'Shallow/rapid breathing, pale moist skin, diaphoresis, rapid pulse, and altered mental status.',
    [
      'Warm dry skin, dehydration, increased urination, and increasing hunger.',
      'Fruity breath odor, altered mental status, and weakness on one side of the body.',
      'Headache, nausea, and flu-like symptoms without fever.',
    ],
    '12',
  ),
  q(
    'You are treating an unresponsive diabetic patient and upon assessment you note a fruity odor on his breath. Which of the following conditions is most likely responsible?',
    'Diabetic Ketoacidosis (DKA).',
    ['Hypoglycemia.', 'Carbon monoxide poisoning.', 'Opioid overdose.'],
    '18',
  ),
  q(
    'You are called to a home for a 4-year-old who ingested an unknown substance from under the kitchen sink. Which of the following most accurately describes how pediatric overdoses most commonly occur?',
    'Accidentally by ingestion.',
    [
      'Intentional self-harm.',
      'Intravenous injection by a caregiver.',
      'Inhalation of aerosolized household chemicals.',
    ],
    '6',
  ),
  q(
    'You are responding to a behavioral health call for a patient who is agitated and making statements that concern family members. Which of the following is the most appropriate approach when assessing this patient?',
    'Be patient, use reflective listening, be honest, and remain calm.',
    [
      'Use firm commands and take charge to establish authority quickly.',
      'Ask rapid, direct questions to complete your assessment and clear the scene.',
      'Have the patient answer a series of memory questions to determine orientation.',
    ],
    '8',
  ),
  q(
    'Which of the following best describes the patient population most commonly diagnosed with Type 1 diabetes?',
    'Children, as their body does not produce insulin.',
    [
      'Adults over 40, as the body gradually develops insulin resistance.',
      'Elderly patients, as insulin production naturally slows with age.',
      'Middle-aged patients with a history of obesity and poor diet.',
    ],
    '9',
  ),
  q(
    'Which of the following best distinguishes Type 1 from Type 2 diabetes?',
    'Type 1 patients cannot produce insulin, while Type 2 patients produce insulin but it does not enter cells correctly.',
    [
      'Type 1 develops later in life, while Type 2 is typically diagnosed in childhood.',
      'Type 1 is managed with diet alone, while Type 2 always requires insulin injections.',
      'Type 1 causes hyperglycemia only, while Type 2 causes hypoglycemia only.',
    ],
    '38',
  ),
  q(
    'Which of the following is a potential long-term complication of uncontrolled diabetes?',
    'Loss of limbs, loss of eyesight, seizures, and stroke.',
    [
      'Renal calculi (kidney stones) and flank pain.',
      'Pelvic inflammatory disease and lower abdominal pain.',
      'Spontaneous pneumothorax and sudden chest pain.',
    ],
    '29',
  ),
  q(
    'You realize you made an error while writing a paper PCR. Which of the following is the correct way to fix it?',
    'Draw a single line through the mistake in pen and initial it.',
    [
      'Use correction fluid to cover the error and write over it.',
      'Erase the mistake and write the correct information above it.',
      'Discard the form and start a new PCR from the beginning.',
    ],
    '10',
  ),
  q(
    'Which of the following best explains why accurate run reports are critical for EMS providers?',
    'If the report is taken to court, you may be questioned about the entire content of the document.',
    [
      'Run reports are reviewed after each shift to schedule future EMS assignments.',
      'Inaccurate reports can be amended after the call without consequence.',
      'Reports are only reviewed if a patient files a formal complaint.',
    ],
    '1',
  ),
  q(
    'Which of the following best describes what "omission" means in the context of a pre-hospital care report (PCR)?',
    'Leaving out important information that could result in legal or medical consequences.',
    [
      "Incorrectly documenting the patient's chief complaint.",
      'Writing illegibly on a paper report.',
      'Using abbreviations that are not approved for use on run reports.',
    ],
    '23',
  ),
  q(
    'Which of the following is true regarding EMS run reports and the legal system?',
    'Run reports can be subpoenaed and used as legal documents in court.',
    [
      'Run reports are protected under HIPAA and can never be introduced in court.',
      'Run reports can only be reviewed by hospital medical staff.',
      "Only the patient's primary care physician may legally access a run report.",
    ],
    '16',
  ),
  q(
    'You are on scene at a suspected crime and need to properly collect biological evidence. Which type of bag should be used?',
    'Brown paper bags.',
    [
      'Clear plastic zip-lock bags.',
      'Red biohazard bags.',
      'Any available bag at the scene to preserve chain of custody.',
    ],
    '17',
  ),
  q(
    'During your assessment, you note that a patient with chest pain has no jugular venous distension, no tracheal deviation, and equal lung sounds. These findings are best described as which of the following?',
    'Pertinent negatives.',
    ['Omitted findings.', 'Contraindications to treatment.', 'Normal baseline vital signs.'],
    '13',
  ),
  q(
    'A 24-year-old female calls EMS reporting mid-abdominal pain that she says occurs every month around the same time. She denies fever, discharge, or urinary symptoms. Which of the following conditions best describes what she is likely experiencing?',
    'Mittelschmerz - mid-abdominal pain that occurs during ovulation.',
    ['Pelvic inflammatory disease (PID).', 'A urinary tract infection (UTI).', 'Kidney stones (renal calculi).'],
    '14',
  ),
  q(
    'A 28-year-old female calls EMS complaining of lower abdominal pain, foul-smelling discharge, and fever. She reports the pain worsens with sexual activity. Which of the following conditions is most consistent with these findings?',
    'Pelvic Inflammatory Disease (PID).',
    ['Urinary tract infection (UTI).', 'Mittelschmerz.', 'Kidney stones (renal calculi).'],
    '22',
  ),
  q(
    'An elderly female patient is brought in by her family who reports she has been confused and disoriented for the past day with no known cause. Which of the following additional findings would most suggest a urinary tract infection (UTI)?',
    'Excessive urination, foul odor, and burning with urination.',
    [
      'Fruity breath, increased thirst, and frequent urination.',
      'Fever, chills, and foul-smelling vaginal discharge.',
      'Flank pain radiating toward the groin and nausea.',
    ],
    '21',
  ),
  q(
    'A 45-year-old male calls EMS reporting sudden severe flank pain that radiates toward the groin, accompanied by nausea and vomiting. Which of the following conditions is most consistent with this presentation?',
    'Kidney stones (renal calculi).',
    ['Pelvic inflammatory disease (PID).', 'Mittelschmerz pain.', 'A urinary tract infection (UTI).'],
    '25',
  ),
  q(
    'A patient is diagnosed with renal calculi. Which of the following best defines this condition?',
    'Renal calculi are kidney stones that form when chemicals in the urine crystallize over time.',
    [
      'Renal calculi are blood clots that form within the kidney tissue.',
      'Renal calculi refer to a bacterial kidney infection causing flank pain and fever.',
      'Renal calculi are crystalline deposits that form exclusively in the bladder.',
    ],
    '43',
  ),
  q(
    "Which of the following correctly describes the AVPU scale used to assess a patient's level of consciousness?",
    'Alert, Verbal, Pain, Unresponsive.',
    [
      'Airway, Ventilation, Pulse, Unresponsive.',
      'Alert, Verbal, Pupils, Unresponsive.',
      'Awake, Verbal, Perfusion, Unresponsive.',
    ],
    '26',
  ),
  q(
    'Which of the following correctly identifies the organs that make up the genitourinary system?',
    'Kidneys, ureters, bladder, urethra, and the reproductive organs.',
    [
      'Heart, lungs, kidneys, and bladder.',
      'Kidneys, liver, pancreas, and bladder.',
      'Bladder, urethra, and large intestine.',
    ],
    '37',
  ),
  q(
    'During your behavioral health assessment, you document the patient\'s "affect." Which of the following best describes what affect refers to?',
    "The outward expression of the patient's emotional state.",
    [
      "The patient's level of consciousness on the AVPU scale.",
      "The patient's verbal response to painful stimuli.",
      "The patient's orientation to person, place, and time.",
    ],
    '24',
  ),
  q(
    'You arrive on scene and find a patient with excessive salivation, tearing eyes, uncontrolled urination, diarrhea, and muscle twitching. Which mnemonic best categorizes these findings?',
    'SLUDGE - consistent with organophosphate or nerve agent exposure.',
    [
      'AVPU - indicating a decreased level of consciousness.',
      'OPQRST - used to characterize onset and quality of pain.',
      'SAMPLE - used to gather a patient\'s medical history.',
    ],
    '19',
  ),
  q(
    'Which of the following correctly defines the acronym SLUDGE?',
    'Salivation, Lacrimation, Urination, Defecation, Gastric upset, Emesis.',
    [
      'Sweating, Lacrimation, Urination, Dilation, Gastric upset, Emesis.',
      'Salivation, Lacrimation, Unconsciousness, Defecation, Gastric upset, Emesis.',
      'Salivation, Lethargy, Urination, Defecation, Gastric upset, Emesis.',
    ],
    '19',
  ),
  q(
    'You are treating a patient with chest pain who has prescribed nitroglycerin. Which of the following is the correct route of administration for nitroglycerin tablets and spray?',
    'Sublingual (under the tongue).',
    [
      'Oral - swallowed with water.',
      'Intramuscular injection into the thigh.',
      'Buccal - placed between the cheek and gum.',
    ],
    '27',
  ),
  q(
    'A bystander calls 911 reporting a man collapsed and is not breathing. Which of the following best describes the role of the Emergency Medical Dispatcher (EMD) before units arrive?',
    'The EMD can provide pre-arrival instructions such as how to perform CPR.',
    [
      'The EMD coordinates hospital bed assignments for incoming critical patients.',
      'The EMD determines which medications should be administered based on symptoms.',
      "The EMD confirms the patient's insurance information before dispatching units.",
    ],
    '28',
  ),
  q(
    'You are transporting a dialysis patient who becomes lightheaded and pale en route to the hospital. Which of the following vital sign findings would you most expect in this patient?',
    'Hypotension.',
    ['Hypertension.', 'Bradycardia.', 'Hypoglycemia.'],
    '30',
  ),
  q(
    'Which of the following best explains why a patient would require dialysis?',
    'The patient is in renal failure and requires dialysis to filter and cleanse the blood of toxins.',
    [
      'The patient has uncontrolled diabetes requiring insulin regulation through filtration.',
      'The patient has a cardiac condition requiring blood pressure management.',
      'The patient requires removal of excess fluid from the lungs due to pneumonia.',
    ],
    '32',
  ),
  q(
    "You are on scene with a critically ill patient and contact medical direction for orders. The physician's response is broken and unclear. Which of the following is the most appropriate action?",
    'Ask the physician to repeat the order, or contact them by phone.',
    [
      'Carry out the last order you received and document that radio communication was unclear.',
      'Have your partner attempt to contact a different medical director.',
      'Proceed without orders using your best clinical judgment and document accordingly.',
    ],
    '36',
  ),
  q(
    'Which of the following best describes appropriate radio communication conduct for EMS providers?',
    'Professional language must be used at all times; profanity is not permitted on the radio.',
    [
      'Radio transmissions are encrypted, so informal language is acceptable.',
      'Profanity is acceptable in high-stress emergency situations to convey urgency.',
      'Only specific medical terminology is restricted from radio transmissions.',
    ],
    '33',
  ),
  q(
    'You are treating a patient with anaphylaxis who has a prescribed auto-injector. Which of the following correctly describes the route of administration for an auto-injector?',
    'Intramuscular.',
    ['Sublingual.', 'Intravenous.', 'Subcutaneous.'],
    '40',
  ),
  q(
    'You are treating a patient who has been exposed to a toxin through the mouth. Which of the following areas are primarily responsible for absorption of substances in the oral cavity?',
    'Buccal mucosa and mucous membranes.',
    [
      'The hard palate and the surface of the tongue.',
      'The esophagus and soft palate.',
      'The gums and teeth.',
    ],
    '39',
  ),
  q(
    'Which of the following best describes proper documentation practices when completing a pre-hospital care report (PCR)?',
    'Abbreviations should not be used, as they can create confusion and legal issues.',
    [
      'Abbreviations approved by the receiving hospital may be freely used on any PCR.',
      'All standard medical abbreviations are acceptable on any run report.',
      'Abbreviations are acceptable as long as they are explained later in the narrative.',
    ],
    '42',
  ),
  q(
    'You are called to a retirement community for a 68-year-old male who is found unresponsive. Bystanders report he was using recreational drugs. Which of the following is most accurate?',
    'Elderly patients can overdose on recreational drugs, as their metabolism processes substances more slowly.',
    [
      'Elderly patients are unlikely to overdose on recreational drugs due to reduced sensitivity.',
      'Recreational drug use in elderly patients is rarely life-threatening.',
      'Elderly patients are not affected by stimulants due to age-related receptor changes.',
    ],
    '44',
  ),
  q(
    'You are called to a home where a patient has ingested an unknown number of pills. Beyond the pill count, which of the following pieces of information is most critical to obtain?',
    'The time the patient took the pills, to determine when effects may peak or may have already peaked.',
    [
      'The brand name of the medication to identify the manufacturer.',
      "The patient's last meal before ingestion to assess absorption rate.",
      'Whether the patient has a prior history of overdose.',
    ],
    '46',
  ),
  q(
    'Which of the following correctly describes a mobile radio used in EMS?',
    'It is installed in a vehicle and operates at lower power than a base station, with a 10-15 mile range.',
    [
      'It is a handheld device that can be carried anywhere on scene.',
      'It operates at higher power than a base station to reach hospitals directly.',
      'It is only used as a backup when a portable radio fails.',
    ],
    '2',
  ),

  // ── Test 1A Practice ──────────────────────────────────────────────────────
  qa(
    'Two providers finish a call in which a teenager died from a self-inflicted gunshot wound. On the way back to station, both are quiet and one begins second-guessing the care they provided. What is the most appropriate action for the crew to take?',
    'Have dispatch notify a supervisor to arrange a critical incident stress debriefing.',
    [
      'Review the regional protocols together to confirm proper procedures were followed.',
      'Contact the hospital to ask whether a different intervention could have saved the patient.',
      'Share the details of the call with a trusted family member that evening to process the experience.',
    ],
    'test-1a',
  ),
  qa(
    'You are assessing a patient who is alert, cooperative, and insisting that you only need to look at his ankle. Which of the following best justifies why you should continue with a broader physical examination?',
    'The physical exam is used to investigate areas the provider suspects are involved, not just what the patient reports.',
    [
      'A full head-to-toe assessment is required on every patient regardless of their chief complaint.',
      'Performing a broader assessment improves documentation quality for the run report.',
      'Patients must consent to each component of the physical exam before it can be performed.',
    ],
    'test-1a',
  ),
  qa(
    'A newly hired EMT asks who in the EMS system is ultimately responsible for authorizing which medical procedures and equipment are permitted for use by their unit. What is the correct answer?',
    'The medical director.',
    [
      'The senior paramedic on the unit.',
      "The regional hospital's emergency department.",
      'The state health department.',
    ],
    'test-1a',
  ),
  qa(
    'An EMT wants to learn how colleagues across the country are managing emerging challenges in prehospital care. Which of the following is the most effective way to engage with those developments?',
    'Attend EMS conferences where professionals present research and share protocol developments.',
    [
      'Read general news publications for coverage of local emergency incidents.',
      'Watch documentary programs about trauma centers and hospital medicine.',
      'Rely on conversations with experienced coworkers at your own station.',
    ],
    'test-1a',
  ),
  qa(
    'You respond to a call for a 9-year-old who fell off a bicycle. Which developmental classification applies to this patient?',
    'School-age child.',
    ['Toddler.', 'Adolescent.', 'Early adult.'],
    'test-1a',
  ),
  qa(
    'You are on scene with an alert, stable trauma patient when a bystander asks why you are gathering allergy information when the patient clearly does not need medication right now. Which of the following is the best justification?',
    "The patient's condition may deteriorate, making allergy information critical for providers who care for him later.",
    [
      'Allergy information is a required documentation field but has minimal clinical value in trauma situations.',
      'It demonstrates to the patient and bystanders that a thorough assessment is being performed.',
      'We ask in case we need to administer pain control medications before arrival at the hospital.',
    ],
    'test-1a',
  ),
  qa(
    'An EMT tells you she has been struggling with chronic stress and irritability since starting her EMS career and asks what she can do to sustainably manage it. Which of the following would be your most appropriate recommendation?',
    'Commit to a consistent physical exercise routine.',
    [
      'Ask your physician to prescribe a short-term anti-anxiety medication.',
      'Increase the amount of sleep you get each night to recover from demanding shifts.',
      'Remind yourself that EMS is a profession and try not to take cases home with you.',
    ],
    'test-1a',
  ),
  qa(
    'You respond to a 62-year-old male who collapsed while playing golf and is now conscious with chest tightness. He has a complex medical history. Which of the following historical findings is most critical to relay to the receiving hospital?',
    'He underwent coronary artery stent placement 18 months ago.',
    [
      'He has smoked moderately for the past decade.',
      'He has a history of well-controlled hypertension.',
      'He reports mild arthritis in both knees.',
    ],
    'test-1a',
  ),
  qa(
    'You arrive on scene to a domestic dispute that has already been secured by law enforcement. As you prepare to enter, which of the following most accurately describes your responsibility regarding scene safety?',
    "You must conduct your own scene size-up, as conditions may have changed since police first arrived.",
    [
      "You may rely on the officer's assessment since they are trained in scene security.",
      'You should enter immediately to begin patient care, as time is critical.',
      'Your scene safety responsibility begins only after you make physical contact with the patient.',
    ],
    'test-1a',
  ),
  qa(
    'Which of the following combinations of findings would lead you to suspect shock rather than cardiac arrest in a patient?',
    'Weak rapid carotid pulse, absent radial pulse, rapid shallow breathing, and pale diaphoretic skin.',
    [
      'Absent carotid pulse, apnea, and no response to painful stimuli.',
      'Bounding peripheral pulses, flushed warm skin, and altered mental status.',
      'Labored breathing with bilateral wheezing and accessory muscle use.',
    ],
    'test-1a',
  ),
  qa(
    "You have just completed your primary assessment and confirmed the patient's airway, breathing, and circulation are intact. Which assessment component comes next, and at what point are baseline vital signs first obtained?",
    'The secondary assessment — baseline vital signs are first taken during this phase.',
    [
      'Vital signs are first obtained during scene size-up before patient contact.',
      'Vital signs are obtained immediately after the primary assessment as a standalone step.',
      'Baseline vital signs are first taken during reassessment after interventions have been made.',
    ],
    'test-1a',
  ),
  qa(
    'A provider lifts a heavy patient by bending at the waist and reaching forward with outstretched arms rather than lowering themselves to the patient\'s level. Which principle of safe patient handling is this provider violating?',
    'Body mechanics.',
    [
      'The urgent move protocol.',
      'Standard of care for patient handling.',
      'Power positioning technique.',
    ],
    'test-1a',
  ),
  qa(
    'You are dispatched to an unconscious adult male. As you approach, before making patient contact, which of the following describes what you should be doing?',
    "Forming a general impression to determine the patient's initial priority and urgency of care.",
    [
      'Beginning the primary assessment by opening and checking the airway.',
      'Gathering information from bystanders to understand what led to the call.',
      'Selecting the appropriate equipment based on the dispatch information.',
    ],
    'test-1a',
  ),
  qa(
    'You perform orthostatic vital signs on a patient complaining of dizziness. When moved from lying to sitting, you record a heart rate increase of 30 BPM and a blood pressure drop of 20 mmHg. Which of the following correctly interprets this result?',
    'This is a positive tilt test, suggesting significant volume depletion.',
    [
      'This is a negative tilt test, as these values fall within acceptable physiological variation.',
      'This result is inconclusive because only one value needs to change for the test to be positive.',
      'The tilt test is only positive if the patient also reports dizziness when repositioned.',
    ],
    'test-1a',
  ),
  qa(
    'You are documenting a call for a 15-year-old patient. Which developmental classification applies?',
    'Adolescent.',
    ['School-age child.', 'Early adult.', 'Young adult.'],
    'test-1a',
  ),
  qa(
    'Your patient has a right arm cast from shoulder to wrist and a functioning IV line in the left arm that cannot be used for a blood pressure cuff. Where is the most appropriate alternative location to obtain a blood pressure?',
    'Popliteal artery, using a thigh cuff.',
    [
      'Femoral artery at the groin.',
      'Radial artery just below the right-arm cast.',
      'Carotid artery in the neck.',
    ],
    'test-1a',
  ),
  qa(
    'After a multi-vehicle fatality, your partner is functional on scene but later at the hospital cannot recall the patient\'s name, cannot remember the sequence of events, and seems uncertain of where they are. Which of the following signs most specifically suggests a critical stress response?',
    'Disorientation.',
    [
      'Crying, which is a healthy emotional release following a traumatic call.',
      'Mild headache, which is a common response to prolonged physical exertion.',
      'Elevated heart rate, which is an expected physiological response to adrenaline.',
    ],
    'test-1a',
  ),
  qa(
    'You are the only EMS provider on scene and a bystander physician asks you to administer an IV medication that is not in your certification level. Which of the following most accurately explains why you cannot comply?',
    'Scope of practice defines the specific skills and treatments you are licensed, authorized, and trained to perform.',
    [
      'Standard of care requires that only the highest-trained provider on scene administer medications.',
      'Duty to act obligates you to follow the instructions of any licensed physician on scene.',
      "Medical oversight only applies to protocols issued in writing by your own service's director.",
    ],
    'test-1a',
  ),
  qa(
    'You are transporting a 55-year-old insulin-dependent diabetic patient whose only complaint is a forearm laceration from a kitchen accident. His initial assessment was completely normal. Twelve minutes into transport, the patient becomes diaphoretic, stops answering questions, and his skin turns pale. What is the most appropriate next action?',
    'Reassess using the primary assessment and upgrade to an emergent transport.',
    [
      'Continue at the current transport priority and notify the hospital of the status change.',
      'Stop the ambulance and have your partner assist with a full secondary assessment before proceeding.',
      'Assume the laceration is bleeding more than expected and apply additional direct pressure.',
    ],
    'test-1a',
  ),
  qa(
    'While obtaining a SAMPLE history, you ask your patient about the "E." What information are you trying to gather?',
    'Events leading up to the current illness or injury.',
    [
      'Whether the patient has any known environmental allergies.',
      "The patient's level of exertion prior to symptom onset.",
      'Any existing medications the patient takes on a regular basis.',
    ],
    'test-1a',
  ),
  qa(
    'Your patient was struck by a vehicle and has an open femur fracture, an altered mental status, and a blood pressure of 74/40. You have managed life threats and are loading for transport. Which of the following should be deferred until you are en route rather than completed on scene?',
    'Secondary assessment.',
    ['Primary assessment.', 'Oxygen therapy and airway management.', 'Spinal motion restriction.'],
    'test-1a',
  ),
  qa(
    'You are en route with a trauma patient and your partner asks whether it\'s worth performing the head-to-toe assessment during the short transport. Which of the following best justifies completing it?',
    'The secondary assessment helps identify injuries that were not found during the rapid on-scene evaluation.',
    [
      'A secondary assessment must be documented before transmitting a radio report to the hospital.',
      'Completing the assessment during transport reduces scene time on future calls.',
      'It reassures the patient that care is ongoing and attentive throughout the ride.',
    ],
    'test-1a',
  ),

  // ── Test 2A Practice ──────────────────────────────────────────────────────
  qa(
    'You arrive to find a 72-year-old woman sitting at her kitchen table complaining of substernal chest pressure that radiates to her left shoulder. She has a prescription bottle of nitroglycerin on the counter. Which of the following is the most important criterion before assisting her with this medication?',
    'The patient has a valid, current prescription for nitroglycerin.',
    [
      'Her blood pressure is elevated above 140/90.',
      'Her pain is rated 9 out of 10 in severity.',
      'She has a documented history of coronary artery disease.',
    ],
    'test-2a',
  ),
  qa(
    'A 31-year-old female with a history of asthma reports sudden sharp right-sided chest pain and shortness of breath that started while she was exercising. She describes the pain as unlike any asthma attack she has had before. Which physical exam finding would most help you differentiate a spontaneous pneumothorax from an asthma exacerbation?',
    'Unilateral hyperresonance on percussion of the affected side.',
    [
      'Bilateral diminished breath sounds on auscultation.',
      'Tracheal deviation toward the affected side.',
      'A productive cough with blood-tinged sputum.',
    ],
    'test-2a',
  ),
  qa(
    'You are on scene with a patient who has an evisceration and is displaying early signs of hemorrhagic shock. Your partner asks how long you should remain on scene to stabilize the patient before loading. What is the correct answer?',
    'No more than 10 minutes on scene.',
    [
      'Until all wounds have been dressed and active bleeding is fully controlled.',
      "Until the patient's systolic blood pressure has risen above 90 mmHg.",
      'Until a complete secondary assessment has been documented.',
    ],
    'test-2a',
  ),
  qa(
    'You respond to an 81-year-old male in a nursing facility who suddenly became unable to speak or swallow. His left arm and leg are flaccid. He is breathing at 22 times per minute but shallowly, and his SpO2 reads 91%. Which of the following is the most appropriate management plan?',
    'Position the patient on his affected (left) side and assist ventilations.',
    [
      'Transport the patient supine and apply a 15 LPM non-rebreather mask.',
      'Assist him to a seated position and monitor without further intervention.',
      'Transport on his unaffected side and initiate positive pressure ventilation.',
    ],
    'test-2a',
  ),
  qa(
    'You are caring for a conscious 68-year-old stroke patient who cannot produce any verbal speech. His airway is clear and oxygen has been applied. He appears anxious and frustrated. Which of the following should be your priority at this point?',
    'Speak calmly and continue reassuring the patient throughout transport.',
    [
      'Elevate his head to 45 degrees to promote cerebral blood flow.',
      'Place the patient in a position of comfort and allow family to ride along.',
      'Recheck his pulse oximetry and blood pressure every two minutes.',
    ],
    'test-2a',
  ),
  qa(
    "Dispatch reads you a caller's chief complaint over the radio. Which of the following is most consistent with how a person without medical training would typically report their symptoms?",
    "My chest has been feeling funny and I've been more sweaty than usual.",
    [
      'I believe I am experiencing an acute myocardial infarction with radiation to the jaw.',
      'I am presenting with acute onset palpitations and near-syncopal episodes.',
      'I sustained a comminuted fracture of the proximal radius during a fall at home.',
    ],
    'test-2a',
  ),
  qa(
    'You are monitoring a 70-year-old male cardiac patient when you observe his heart rate drop from 84 to 46 on the cardiac monitor. Which of the following physiological consequences would you most expect to follow?',
    'Decreased cardiac output.',
    [
      'Increased blood pressure as the heart compensates for the slower rate.',
      'Slower respiratory rate as overall metabolic demand decreases.',
      'Improved tissue perfusion as the ventricles have more time to fill completely.',
    ],
    'test-2a',
  ),
  qa(
    'During your assessment of a seizing patient, you observe the body transition from sustained, rigid muscle contractions into rhythmic, repetitive jerking movements. What is the name of the phase involving the rhythmic jerking?',
    'Clonic phase.',
    ['Tonic phase.', 'Postictal phase.', 'Aura phase.'],
    'test-2a',
  ),
  qa(
    'A 19-year-old tall, thin male college student calls EMS after developing sudden left-sided chest pain and shortness of breath while sitting in class. He denies trauma or prior respiratory illness. Breath sounds are slightly reduced on the left, trachea is midline, and neck veins are flat. What is the most appropriate initial treatment?',
    'Administer supplemental oxygen.',
    [
      'Begin positive pressure ventilations via BVM immediately.',
      'Apply a three-sided occlusive dressing to the chest wall.',
      'Administer a nebulized bronchodilator treatment.',
    ],
    'test-2a',
  ),
  qa(
    'A 38-year-old female flags down your ambulance reporting sudden onset chest pain that started 20 minutes ago. She has no medical history and takes no medications. Which assessment tool will provide the most clinically useful information about her current complaint?',
    'OPQRST.',
    ['DCAP-BTLS.', 'AVPU scale.', 'Reviewing any medication labels found on scene.'],
    'test-2a',
  ),
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function getActiveQuestions(selectedSources: string[]): Question[] {
  return QUESTIONS.filter((q) => selectedSources.includes(q.source)).map((q) => ({
    ...q,
    answerOptions: shuffle(q.answerOptions),
  }))
}
