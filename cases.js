// ✏️ Case study content. Each entry renders at #case-<id>.
// Section kinds:
//   (default)  h + p[] + optional list[[title,desc]] + optional img/cap + optional options[]
//   "tldr"     items[[label,text]]
//   "chapter"  big chapter divider: label + h
//   "problems" items[[title,desc]]
//   "flow"     h + items[[step,desc]]  (numbered steps)
//   "insights" h + items[[title,desc]] (numbered insights)
//   "stats"    h + items[[number,label]]
// options on a decision: [[verdict,title,why]] where verdict is "Considered" or "Chosen"
window.CASES = {
  "water": {
    "title": "Arizona Water Chatbot",
    "kicker": "Conversational AI",
    "headline": "I designed Blue, a chatbot that helps residents <b>understand Arizona's water story</b> without knowing what to ask.",
    "colors": [
      "#cc5500",
      "#f5a25d"
    ],
    "cover": "water-home",
    "facts": [
      [
        "What",
        "An AI guide to drought, water sources and conservation in Arizona"
      ],
      [
        "For",
        "Residents, students, newcomers"
      ],
      [
        "Role",
        "Product & conversation designer · UX, UI, prototyping"
      ],
      [
        "Status",
        "Research preview · working prototype"
      ]
    ],
    "live": [
      [
        "Try the prototype",
        "prototypes/water/"
      ]
    ],
    "sections": [
      {
        "kind": "tldr",
        "items": [
          [
            "Problem",
            "Arizona's water information is accurate but inaccessible. It's buried in technical reports, and a plain chatbot doesn't help people who don't know what to ask."
          ],
          [
            "Solution",
            "Blue: a friendly guide that starts the conversation with prompt cards, lets people choose how deep the answers go and is honest about its limits."
          ],
          [
            "My role",
            "Product and conversation design: onboarding, empty states, answer controls, the trust layer, visual identity and the prototype."
          ],
          [
            "Outcome",
            "A complete conversational experience, from first visit to saved chats, ready for testing with residents."
          ]
        ]
      },
      {
        "kind": "chapter",
        "label": "01 · The problem",
        "h": "Everyone depends on water. Few people know its story."
      },
      {
        "h": "Arizona's water is a big, complicated topic.",
        "p": [
          "Arizona is in a long-running drought. Its water comes from a mix of the Colorado River, in-state rivers and underground aquifers, and the rules about who gets what are complex. These decisions affect everyone's bills, gardens, jobs and future.",
          "The information is out there, from state agencies, water associations and researchers. But it's written for specialists. <b>For an ordinary resident, finding a clear answer to a simple question is hard work.</b>",
          "A chatbot seems like the obvious fix. Just ask! But a chatbot on its own brings new problems."
        ]
      },
      {
        "kind": "problems",
        "items": [
          [
            "People don't know what to ask.",
            "An empty text box assumes you already understand the topic well enough to form a question. Most people don't, so they leave."
          ],
          [
            "One answer doesn't fit everyone.",
            "A resident wants a quick fact. A student wants depth. A single answer style frustrates both."
          ],
          [
            "Confident AI is a trust risk.",
            "On public issues, an answer that sounds certain but is wrong can mislead people and damage trust in the whole effort."
          ],
          [
            "Sign-up walls kill curiosity.",
            "Asking for an account before someone has seen any value is the fastest way to lose them."
          ]
        ]
      },
      {
        "kind": "chapter",
        "label": "02 · Understanding people",
        "h": "I designed around how curiosity actually works."
      },
      {
        "kind": "insights",
        "h": "What I learned.",
        "items": [
          [
            "Curiosity is fragile.",
            "People arrive with a vague interest, not a question. If the first step takes effort, they leave. The first interaction has to be one tap."
          ],
          [
            "People ask about their own lives, not about policy.",
            "\"Is my tap water safe?\" comes before \"How does the Colorado River compact work?\" Prompts need to start from everyday concerns."
          ],
          [
            "Depth is a personal choice.",
            "The same person may want a one-liner today and a full explanation tomorrow. Depth should be easy to control, not fixed."
          ],
          [
            "Trust comes from honesty, not polish.",
            "Being clear about what the bot is, and isn't, builds more trust than sounding authoritative."
          ]
        ]
      },
      {
        "h": "Who I designed for.",
        "list": [
          [
            "Curious residents",
            "Low domain knowledge, real stakes. They want plain answers about their water, their bills and the drought."
          ],
          [
            "Students and educators",
            "They need deeper explanations and pointers to credible sources they can cite."
          ],
          [
            "Newcomers to the state",
            "They're learning the basics: where water comes from, and what's expected of them."
          ]
        ]
      },
      {
        "h": "Goals and constraints.",
        "list": [
          [
            "Goal: no blank-page problem",
            "Anyone can start a useful conversation in one tap."
          ],
          [
            "Goal: the user controls depth",
            "Both quick answers and deep dives feel natural."
          ],
          [
            "Goal: honest about limits",
            "Clearly not an official voice, and always points to trusted sources."
          ],
          [
            "Goal: approachable",
            "Warm, friendly and welcoming, never like a government form."
          ],
          [
            "Constraint: AI can be wrong",
            "The design must plan for incorrect answers, not pretend they won't happen."
          ],
          [
            "Constraint: privacy",
            "Collect as little as possible. Ideally nothing at all."
          ]
        ]
      },
      {
        "kind": "chapter",
        "label": "03 · Design decisions",
        "h": "How I made it approachable, flexible and honest."
      },
      {
        "kind": "flow",
        "h": "My process.",
        "items": [
          [
            "Frame",
            "I listed the questions residents are most likely to have and grouped them into themes."
          ],
          [
            "Define the voice",
            "I created Blue's personality: friendly, curious, plain-spoken and honest about uncertainty."
          ],
          [
            "Design the first minute",
            "I designed onboarding, the empty state and the first-run tour before the chat itself."
          ],
          [
            "Build the trust layer",
            "Disclaimers, FAQs and source links became a permanent part of the layout."
          ],
          [
            "Prototype and refine",
            "I built a working prototype and refined it through walkthroughs of real questions."
          ]
        ]
      },
      {
        "h": "Decision 1: a character, not a console.",
        "img": "water-welcome",
        "cap": "Welcome screen: Blue introduces itself and asks for just one optional thing",
        "p": [
          "Water policy is a dry subject (sorry). To make it inviting, I created <b>Blue, a friendly water-droplet guide</b>. Blue gives the product a warm voice and a face, which makes asking a \"silly\" question feel safe.",
          "The welcome screen splits in two. The left side sets the scene: what you can ask about and three short promises (ask anything, choose your answer style, see where to learn more). The right side asks for just one thing: <b>your first name, and even that is optional.</b>",
          "There's no account and no password. Chats are kept in the browser only, and that's stated right under the button in plain language."
        ],
        "options": [
          [
            "Considered",
            "Account sign-up to save history",
            "Useful for returning users, but it's a wall in front of people who aren't sure yet."
          ],
          [
            "Chosen",
            "Optional name, local history",
            "Zero friction to start, and history still works on the same device."
          ]
        ]
      },
      {
        "h": "Decision 2: the empty state asks the questions for you.",
        "img": "water-home",
        "cap": "Home: Blue's greeting, four prompt cards and an always-visible panel of FAQs and trusted links",
        "p": [
          "The biggest risk in any chatbot is the empty box. So the home screen leads with Blue's greeting and <b>four prompt cards</b> built from everyday concerns:",
          "<b>How are the droughts in Arizona?</b> (rainfall, dry spells and planning) · <b>What chemicals are in the water?</b> (minerals, testing and safety) · <b>Where do we get water from?</b> (rivers, canals and aquifers) · <b>Water conservation practices</b> (saving water at home).",
          "Each card has an icon and a short subtitle that previews what the answer covers, so tapping one never feels like a gamble."
        ],
        "options": [
          [
            "Considered",
            "A long list of suggested questions",
            "More coverage, but too much to read, and it recreates the feeling of a reference manual."
          ],
          [
            "Chosen",
            "Four themed cards with previews",
            "Easy to scan, covers most first questions and invites a follow-up."
          ]
        ]
      },
      {
        "h": "Decision 3: the trust layer is always visible.",
        "p": [
          "On wide screens, a right-hand panel stays in view next to every conversation. It explains what Blue is, answers common questions in an FAQ and links to trusted organizations like the <b>Arizona Department of Water Resources</b>.",
          "Under the message box, a short disclaimer is always visible: <b>Blue may produce inaccurate information, and answers are not official policy positions.</b> I didn't hide it in a footer or a modal. Honesty that you have to go looking for isn't honesty."
        ]
      },
      {
        "h": "Decision 4: you choose the depth before you ask.",
        "img": "water-tour",
        "cap": "First-run tour: a short walkthrough introducing answer styles, history and the info panel",
        "p": [
          "A small control in the message box lets people choose <b>Short, Bullet points or Descriptive</b> before they send a question.",
          "Choosing depth up front is cheaper than asking a follow-up like \"can you explain more?\". It also respects that a quick fact and a homework question are different jobs.",
          "Because this is a new idea for most people, a <b>short first-run tour</b> points it out, along with chat history and the info panel. The tour can be skipped in one click and never appears again."
        ],
        "options": [
          [
            "Considered",
            "Let the AI guess the right length",
            "Invisible, but unpredictable. People can't tell why answers are long one time and short the next."
          ],
          [
            "Considered",
            "Ask \"more or less detail?\" after every answer",
            "Adds a step to every exchange and feels repetitive."
          ],
          [
            "Chosen",
            "A visible depth control in the composer",
            "Predictable, quick to change and taught once."
          ]
        ]
      },
      {
        "h": "Decision 5: a visual identity rooted in the desert.",
        "p": [
          "The look borrows from Arizona itself: <b>deep maroon and warm gold</b> for grounding, with <b>water blues and aqua</b> for everything related to water. Blue's droplet, the soft wave shapes and the sun in the welcome illustration make the theme obvious without a word.",
          "A rounded display typeface keeps it friendly, and a clean, highly readable body typeface keeps answers easy to read. The whole experience works in <b>light and dark mode</b>."
        ]
      },
      {
        "h": "The details that make it work.",
        "list": [
          [
            "Chat history",
            "Recent chats are listed in the sidebar, with a clear empty state the first time."
          ],
          [
            "Keyboard shortcut",
            "Start a new chat instantly with a shortcut shown on the button."
          ],
          [
            "Collapsible sidebar",
            "More room for the conversation on smaller screens."
          ],
          [
            "Accessible contrast",
            "Text and controls meet contrast guidelines in both themes."
          ]
        ]
      },
      {
        "kind": "chapter",
        "label": "04 · Outcome",
        "h": "What I delivered, and what's next."
      },
      {
        "kind": "stats",
        "h": "What I built",
        "items": [
          [
            "0",
            "accounts needed to start"
          ],
          [
            "4",
            "prompt themes from everyday concerns"
          ],
          [
            "3",
            "answer styles, chosen before you ask"
          ]
        ]
      },
      {
        "h": "A complete conversational experience.",
        "p": [
          "The prototype covers the full journey: welcome, a guided first run, prompt-led conversations, depth control, saved history and an always-on trust panel. It's ready to put in front of residents."
        ]
      },
      {
        "h": "How I'd measure success.",
        "list": [
          [
            "Start rate",
            "How many visitors send a first message, and whether they start from a card or type their own."
          ],
          [
            "Answer-style use",
            "Whether people switch depth, or set it once and leave it."
          ],
          [
            "Source clicks",
            "Whether the trust panel leads people to authoritative information."
          ],
          [
            "Return visits",
            "Whether people come back with new questions."
          ]
        ]
      },
      {
        "h": "What I learned.",
        "p": [
          "Most of conversational design happens outside the conversation. The empty state, the first minute, the expectations you set and the exits you offer decide whether anyone talks to the bot at all.",
          "<b>The model writes the answers. Design decides whether people trust them.</b>"
        ]
      }
    ]
  },
  "care": {
    "nda": true,
    "title": "HealthWink",
    "kicker": "Healthcare · Smart Care · two connected apps",
    "headline": "I designed a nursing station board and a caregiver tablet so <b>the right resident gets help first</b>, and no one is woken for a check they didn't need.",
    "colors": [
      "#3d6b16",
      "#8fb35a"
    ],
    "cover": "hw-board",
    "facts": [
      [
        "Company",
        "Smart Care · UX/UI Designer"
      ],
      [
        "What",
        "Two connected apps for continence care in long-term care: a Nursing Station board and a Caregiver Tablet"
      ],
      [
        "For",
        "Charge nurses at the station, caregivers on the floor and care leadership"
      ],
      [
        "Role",
        "UX/UI Designer at Smart Care · end to end, across both apps"
      ],
      [
        "Status",
        "Two demo prototypes · nursing station desktop + caregiver tablet"
      ]
    ],
    "live": [],
    "locked": true,
    "teaser": [
      [
        "The problem",
        "Care teams needed to know which resident needs help first, without needless checks."
      ],
      [
        "What I did",
        "Designed two connected apps end to end: a nursing station board and a caregiver tablet."
      ],
      [
        "Inside",
        "Research, flows, design decisions and both clickable prototypes."
      ]
    ],
    "sections": []
  },
  "curo": {
    "title": "Curo",
    "kicker": "Oncology · in collaboration with Mayo Clinic",
    "headline": "I designed Curo, a two-sided app that helps cancer care teams <b>see side effects early, before they become emergencies</b>.",
    "colors": [
      "#2f6fe4",
      "#8fb4ff"
    ],
    "cover": "curo-dashboard",
    "facts": [
      [
        "Collaboration",
        "In collaboration with Mayo Clinic"
      ],
      [
        "What",
        "A weekly symptom check-in app for patients, and a clinician portal that turns answers into PRO-CTCAE grades, alerts, trends and follow-up decisions"
      ],
      [
        "For",
        "Patients on breast cancer treatment, oncologists and research nurses"
      ],
      [
        "Role",
        "Product designer · patient app and clinician portal"
      ],
      [
        "Status",
        "Prototype with fictional patients"
      ]
    ],
    "live": [
      [
        "Patient app",
        "prototypes/curo-patient/"
      ],
      [
        "Clinician portal",
        "prototypes/curo-clinician/"
      ]
    ],
    "sections": [
      {
        "kind": "chapter",
        "label": "01 · The problem",
        "h": "Side effects get worse between visits, and clinicians find out too late."
      },
      {
        "h": "Treatment happens at home, between appointments.",
        "p": [
          "Chemotherapy and hormone therapy cause side effects like fatigue, neuropathy, nausea and pain. Patients live with them day to day, but their care team usually only hears about them at the next clinic visit, often weeks later.",
          "Oncology already has a standard for capturing this: <b>PRO-CTCAE</b>, a validated set of patient-reported symptom questions that map to toxicity grades. But the full form is long, it asks every patient every question, and the answers rarely reach the clinician in a form they can act on quickly."
        ]
      },
      {
        "kind": "problems",
        "em": [
          "📋",
          "🚨",
          "📝",
          "🤷"
        ],
        "items": [
          [
            "The full form asks everything, every time.",
            "23 questions, most of them irrelevant to a given patient that week. People stop filling it in."
          ],
          [
            "Severe symptoms hide in a pile of data.",
            "A grade 3 report looks the same as everything else unless someone goes looking for it."
          ],
          [
            "Patient notes get lost.",
            "What patients write in their own words never reaches the doctor next to the scores."
          ],
          [
            "Nobody owns the follow-up.",
            "Even when a severe symptom is spotted, there's no clear record of who decided what, and when."
          ]
        ]
      },
      {
        "kind": "chapter",
        "label": "02 · Understanding the work",
        "h": "Two people, two very different jobs, one shared record."
      },
      {
        "h": "Who I designed for.",
        "list": [
          [
            "Patients in treatment",
            "Tired, often anxious, using their phone. They need a check-in that's short, kind and doesn't feel like a medical form."
          ],
          [
            "Oncologists",
            "Responsible for many patients. They need to know who needs attention this week, and why, in seconds."
          ],
          [
            "Research nurses",
            "They need standardized, comparable data across patients and drugs, not free-text impressions."
          ]
        ]
      },
      {
        "kind": "insights",
        "h": "What shaped the design.",
        "items": [
          [
            "Relevance beats completeness for patients.",
            "A check-in that only asks about symptoms you actually have gets finished. One that asks all 23 every week doesn't."
          ],
          [
            "Clinicians need standard data, not chat logs.",
            "Whatever the patient experience feels like, every answer still has to map to a PRO-CTCAE item and score."
          ],
          [
            "Severity is the triage signal.",
            "Grade 3 is the line where a clinician must act. Everything in the portal should make that line obvious."
          ],
          [
            "An alert isn't done until someone decides.",
            "Closing the loop with a recorded decision is what makes the system trustworthy."
          ]
        ]
      },
      {
        "h": "Design principles.",
        "list": [
          [
            "Ask less, learn the same",
            "Only follow up on what the patient has or had last week."
          ],
          [
            "Standard underneath",
            "Every answer maps to a PRO-CTCAE item and score."
          ],
          [
            "Grade 3 first",
            "Severe reports rise to the top and stay there until handled."
          ],
          [
            "The patient's voice travels",
            "Notes sit next to the scores, not in a separate inbox."
          ]
        ]
      },
      {
        "kind": "chapter",
        "label": "03 · Design decisions",
        "h": "How I turned a long clinical form into a two-minute conversation."
      },
      {
        "h": "Decision 1: a weekly check-in with Remi, not a form.",
        "img": "curo-home",
        "cap": "Patient app: Remi's weekly check-in sits at the top of the patient's tasks, next to their next appointment",
        "p": [
          "On the patient side, the weekly check-in is a short conversation with <b>Remi</b>, a friendly assistant. It's the first task on the home screen, with the patient's next appointment right below it.",
          "Remi greets the patient by name, mentions their treatment, and says up front that it takes about two minutes, that they can add a note for their doctor at any point, and that they can pause and come back."
        ],
        "options": [
          [
            "Considered",
            "The full PRO-CTCAE form, digitized",
            "Complete and familiar to clinicians, but long and impersonal. Completion drops week after week."
          ],
          [
            "Chosen",
            "A conversational check-in that maps to the same items",
            "Feels like a conversation to patients, and still produces standardized data for clinicians."
          ]
        ]
      },
      {
        "h": "Decision 2: only ask what matters this week.",
        "img": "curo-checkin",
        "cap": "Check-in in progress: each answer maps live to a PRO-CTCAE item and score, with the counter showing how much of the 23-question form was skipped",
        "p": [
          "Remi asks follow-ups only about symptoms the patient has now, or reported last week. It remembers context too: <i>\"Last time, you mentioned your knees and shoulders were hurting.\"</i> If nothing has changed, Remi carries last week's answer forward instead of asking again.",
          "Then Remi checks a short list the oncologist picked for this patient's treatment: <i>\"Dr. Hart also asked me to check on a few things your treatment can cause.\"</i> The patient taps any that apply, and only those get follow-up questions.",
          "Every answer still maps to a PRO-CTCAE item (severity, interference or frequency) and a score, so the clinician gets the same standardized data the full form would give, from a fraction of the <b>23 questions</b>. A progress bar shows the step, and pain lets patients pick several body areas at once."
        ]
      },
      {
        "h": "Decision 3: the dashboard leads with who needs a decision.",
        "img": "curo-dashboard",
        "cap": "Clinician dashboard: open alerts, this week's check-ins and the patients who need a follow-up decision",
        "p": [
          "The clinician portal opens with one line: <b>\"4 patients need review.\"</b> Four numbers give the week at a glance: open alerts waiting for a decision, check-ins this week, overdue check-ins and average adherence.",
          "<b>Needs review</b> lists every report at or above that patient's alert threshold, with the symptom, how it changed and the treatment cycle, for example \"Fatigue severe, up from severe · Docetaxel, cycle 4\". Alerts stay there until a follow-up decision is recorded.",
          "Next to it, <b>Latest Remi check-ins</b> shows who answered, how long it took and the highest grade, and flags incomplete check-ins in red."
        ]
      },
      {
        "h": "Decision 4: one patient page that tells the whole story.",
        "img": "curo-report",
        "cap": "Patient page: diagnosis, treatment and schedule up top, an interactive body map of symptoms, and the selected symptom's grade over 6 weeks",
        "p": [
          "Opening a patient shows the essentials in one header: diagnosis, current treatment and cycle, last and next check-in, and their questionnaire schedule. Tabs cover Remi check-ins, symptom trends, the patient's app notes, treatment and questionnaire.",
          "The overview is an <b>interactive body map</b> with front, side and back views, filtered by body system. Each marker shows a symptom and its grade; selecting one opens the detail: severity, interference, last week's answer and a 6-week trend.",
          "<b>Key insights</b> summarise the trend in plain language, for example \"Fatigue has risen to severe over 6 weeks\", next to quality of life and the latest vitals."
        ]
      },
      {
        "h": "Decision 5: every alert ends with a recorded decision.",
        "img": "curo-decision",
        "cap": "Follow-up decision panel: the alert stays open until the clinician picks a next step, with the patient's own words next to the trend",
        "p": [
          "The clinician closes an alert by choosing a follow-up: <b>Call patient today, Hold next dose, Reduce dose, Schedule clinic visit, Start supportive medicine</b> or <b>Keep monitoring</b>. \"Record decision\" is also always available at the top of the page.",
          "Recording a decision closes the alert, logs who decided and when, and updates the dashboard count. The patient's own note sits right next to the trend, so the numbers and the person's words are read together."
        ],
        "options": [
          [
            "Considered",
            "Dismiss alerts with an \"acknowledge\" button",
            "Fast, but it records that someone saw the alert, not what they decided to do."
          ],
          [
            "Chosen",
            "Close alerts only with a specific follow-up decision",
            "Creates an accountable record and makes the next step explicit."
          ]
        ]
      },
      {
        "h": "Decision 6: clinicians decide what Remi asks, and when.",
        "img": "curo-schedule",
        "cap": "Questionnaire defaults: frequency, reminder day and time, PRO-CTCAE items with treatment presets, language and alert threshold, with a live preview of what the patient sees",
        "p": [
          "Every patient and treatment is different, so the questionnaire isn't fixed. Oncologists set a default schedule and can change it for each patient: <b>how often</b> Remi checks in (daily to every 2 weeks), <b>which day and time</b> the reminder goes out, and an extra check-in 2 days after each infusion.",
          "They choose <b>which symptoms Remi asks about</b> from the full NCI PRO-CTCAE library (80 symptoms, 124 questions), starting from presets like Taxane chemotherapy or Hormonal therapy. Core symptoms are always included.",
          "Two more rules shape the alerts: <b>adaptive questions</b> (follow up only on symptoms reported now or last time) and an <b>alert threshold</b> of grade 2+ or grade 3 only. A live preview shows what the patient will see: questions per check-in, check-ins per month and when an alert fires."
        ],
        "options": [
          [
            "Considered",
            "One fixed weekly questionnaire for everyone",
            "Simple to run, but it asks about symptoms a patient's drug doesn't cause and misses the ones it does."
          ],
          [
            "Chosen",
            "Presets by treatment, adjustable per patient",
            "Starts from a sensible default and keeps every answer on the standard PRO-CTCAE items."
          ]
        ]
      },
      {
        "h": "The details that make it work.",
        "list": [
          [
            "The full item library",
            "Every PRO-CTCAE question and answer choice Remi can ask, searchable and grouped by body system."
          ],
          [
            "Same items in other languages",
            "Remi uses NCI's official translations, so answers compare directly with English check-ins."
          ],
          [
            "Reports by patient or by drug",
            "Compare toxicity across treatments, and read every patient note in one place."
          ],
          [
            "Honest prototype labels",
            "Fictional patients, and a clear note that grades use a simplified mapping, not the validated composite algorithm."
          ],
          [
            "Never color alone",
            "Every grade shows its number and label, not just a color."
          ]
        ]
      },
      {
        "kind": "chapter",
        "label": "04 · Outcome",
        "h": "A complete loop, from a patient's check-in to a clinician's decision."
      },
      {
        "kind": "stats",
        "h": "What I built",
        "items": [
          [
            "2",
            "connected apps: patient and clinician"
          ],
          [
            "124",
            "PRO-CTCAE questions clinicians can choose from"
          ],
          [
            "6",
            "one-tap follow-up decisions that close an alert"
          ]
        ]
      },
      {
        "h": "How I'd measure success.",
        "list": [
          [
            "Weekly check-in completion",
            "Compared with the full PRO-CTCAE form."
          ],
          [
            "Time to follow-up decision",
            "From an alert to a recorded decision."
          ],
          [
            "Questions asked per check-in",
            "Against the full form for the same symptoms."
          ],
          [
            "Clinician trust in the data",
            "Whether grades from the conversational check-in match the full form."
          ]
        ]
      },
      {
        "h": "What I learned.",
        "p": [
          "In clinical tools, the patient experience and the clinician's data needs often pull in opposite directions. The design work here was keeping both: a check-in that feels human, built on a structure that stays standardized underneath.",
          "And an alert system is only as good as how it ends. <b>Requiring a decision to close an alert</b> turned a notification into accountable care."
        ]
      }
    ]
  },
  "qnet": {
    "title": "Qnet · Project Phoenix",
    "kicker": "B2B SaaS redesign",
    "headline": "I redesigned Qnet, TQS's field operations app, so a rep can open any page and know <b>in seconds what needs attention</b> and what to do next.",
    "colors": [
      "#4f46e5",
      "#a5b4fc"
    ],
    "cover": "qnet-dashboard",
    "facts": [
      [
        "What",
        "Qnet rep portal, rebuilt as Project Phoenix: Dashboard, Action Center, Part Management, Location Agreements"
      ],
      [
        "For",
        "TQS field reps working inside OEM assembly plants"
      ],
      [
        "Role",
        "UI/UX Design Specialist: research, information architecture, UI, design system, UI testing and developer handoff"
      ],
      [
        "Status",
        "Oct to Nov 2026 · rep testing next"
      ]
    ],
    "live": [],
    "locked": true,
    "teaser": [
      [
        "The problem",
        "Field reps couldn't tell at a glance what needed attention across their plants."
      ],
      [
        "What I did",
        "Research, information architecture, a new design system and a rebuilt rep portal."
      ],
      [
        "Inside",
        "Before/after screens, design decisions, the clickable prototype and what's next."
      ]
    ],
    "sections": []
  },
  "web": {
    "title": "TQS Website Redesign",
    "kicker": "Marketing website redesign",
    "headline": "I redesigned teamqualityservices.com so a supplier can <b>find coverage at their plant, see the price and start a quote</b> from the first screen.",
    "colors": [
      "#8a6d00",
      "#ffd400"
    ],
    "cover": "web-new-hero",
    "beforeTag": "Before · Feb 2026 site",
    "afterTag": "After · new site",
    "facts": [
      [
        "What",
        "The TQS marketing website, homepage first: navigation, coverage search, services, Qnet, pricing and footer"
      ],
      [
        "For",
        "Quality managers, directors and engineers at Tier 1 automotive suppliers"
      ],
      [
        "Company",
        "Team Quality Services (TQS)"
      ],
      [
        "Role",
        "UX/UI Design Specialist: information architecture, UI and visual design for the homepage and its sections"
      ],
      [
        "Status",
        "Live on teamqualityservices.com · 2026"
      ]
    ],
    "live": [
      [
        "Visit the live site",
        "https://teamqualityservices.com/"
      ],
      [
        "See the old site (Feb 2026)",
        "https://web.archive.org/web/20260212030513/https://teamqualityservices.com/"
      ]
    ],
    "media": {
      "__video": "vid/web.mp4",
      "__poster": "vid/web.jpg"
    },
    "sections": [
      {
        "kind": "chapter",
        "label": "01 · The problem",
        "h": "The old site told suppliers TQS could help. It didn't let them get help."
      },
      {
        "h": "A brochure, not a tool.",
        "before": "web-old-hero",
        "bcap": "The February 2026 homepage: headline on the left, a stock photo of engineers and two vehicles on the right",
        "p": [
          "TQS puts resident engineers and inspectors on the floor of OEM plants for Tier 1 automotive suppliers. The people who visit the site usually have one question: <b>can TQS cover my parts at this plant, and what will it cost?</b>",
          "The old homepage answered with claims and photos. To find coverage, a visitor picked a country from eight flags and clicked through to another page. Pricing lived on a separate page behind a banner. Every section ended in a different call to action."
        ]
      },
      {
        "h": "Six problems ran through the homepage.",
        "p": [
          "Each one is covered under Design decisions, with the fix and how I'll measure it."
        ]
      },
      {
        "kind": "problems",
        "em": [
          "🖼️",
          "🚩",
          "💲",
          "🎨",
          "📱",
          "🔀"
        ],
        "items": [
          [
            "The hero didn't do anything.",
            "Most of the first screen was a stock photo. The only actions were Get Started and Learn More."
          ],
          [
            "Coverage was organised by country.",
            "Eight country cards plus \"Other\". Suppliers think in OEMs and plants, not countries, and every card led to another page."
          ],
          [
            "Pricing was hidden.",
            "A \"pricing made simple\" banner linked away to another page, so buyers couldn't compare before talking to sales."
          ],
          [
            "Three visual styles on one page.",
            "A dark hero, white sections, grey cards and a near-black video band, with isometric clip art in between."
          ],
          [
            "Qnet was shown as clip art.",
            "The software TQS sells was represented by an illustrated phone covered in cartoon people."
          ],
          [
            "Too many competing actions.",
            "Get Started, Learn More, Request a Call, Request a demo, Schedule a call, See Pricing Details and Sign me up, all on one page."
          ]
        ]
      },
      {
        "kind": "chapter",
        "label": "02 · Understanding the work",
        "h": "I designed around the question every visitor arrives with."
      },
      {
        "h": "Who I designed for.",
        "list": [
          [
            "Quality managers at Tier 1 suppliers",
            "They need someone on the floor at a specific OEM plant, often urgently, and want to know if TQS is already there."
          ],
          [
            "Directors",
            "They compare cost and coverage across plants and want pricing they can take to a budget conversation."
          ],
          [
            "Engineers",
            "They want to see how the service and Qnet actually work before recommending TQS."
          ]
        ]
      },
      {
        "h": "Goals for the redesign.",
        "list": [
          [
            "Goal: coverage in one step",
            "A visitor can search a city, OEM or plant from the first screen."
          ],
          [
            "Goal: price up front",
            "Monthly prices show next to plants and in full plans on the homepage."
          ],
          [
            "Goal: show the real product",
            "Qnet appears as its interface, not an illustration."
          ],
          [
            "Goal: one visual system",
            "One dark theme from nav to footer, with yellow kept for actions."
          ],
          [
            "Constraint: keep the brand voice",
            "The headline, the yellow Q and \"We're there, so you don't have to be\" stay."
          ],
          [
            "Constraint: four lines of business",
            "Resident liaisons, inspection, infrastructure and government work all need a place."
          ]
        ]
      },
      {
        "kind": "chapter",
        "label": "03 · Design decisions",
        "h": "Six problems, six fixes, each with a way to measure it."
      },
      {
        "h": "Decision 1: lead with a coverage search.",
        "before": "web-old-coverage",
        "bcap": "Old coverage finder: eight country cards, each a link to a list of locations",
        "img": "web-new-search",
        "cap": "New coverage search for \"Detroit\": three plants, reps on site and a starting price, with Add to Quote on each",
        "p": [
          "<b>The issue:</b> finding coverage meant choosing a country, then a location, on another page. The hero itself had nothing to do."
        ],
        "bullets": [
          "The hero is now a search box over a live coverage globe, with suggestions like Detroit, Honda and Rivian.",
          "Popular plants (BMW Spartanburg, Ford Oakville, GM Flint, GM Fort Wayne) sit under the search with a monthly price and an Add button.",
          "A search opens a results panel beside the map: match count, starting price, sort, and filters for OEM, platform, country and rating.",
          "The map legend separates coverage locations from reps on site right now, which makes the 24/7 promise visible.",
          "The coverage claim changed from \"150+ OEMs\" to a live badge reading 115 OEMs, a number the map can back up."
        ],
        "metric": "Share of visitors who run a search from the hero, and Add to Quote clicks per search."
      },
      {
        "h": "Decision 2: put pricing on the homepage.",
        "before": "web-old-pricing",
        "bcap": "Old pricing teaser: a banner and a link to a separate page",
        "img": "web-new-pricing",
        "cap": "New pricing section: four Representation plans, tabs for Inspection and Other Quality, and an annual / monthly toggle",
        "p": [
          "<b>The issue:</b> buyers couldn't see what coverage cost without leaving the page or talking to someone."
        ],
        "bullets": [
          "Four Representation plans (Lite, Starter, Standard, Advanced) sit on the homepage, with Standard marked as the plan that fits most Tier 1 suppliers.",
          "Tabs switch between Representation, Inspection and Other Quality. A toggle switches between annual and monthly prices.",
          "Each plan lists hours per month, the effective hourly rate, overtime and weekend rates, so plans can be compared line by line."
        ],
        "metric": "Plan selections by tab, and drop in \"how much does it cost\" questions to sales."
      },
      {
        "h": "Decision 3: one visual system, dark from top to bottom.",
        "before": "web-old-goodbye",
        "bcap": "Old benefit cards: isometric illustrations on grey cards on a white page",
        "img": "web-new-there",
        "cap": "New \"We're there\" section: same message, a real photo, one primary and one secondary action",
        "p": [
          "<b>The issue:</b> the page switched between dark, white and grey sections and leaned on stock isometric illustrations, so it didn't read as one product."
        ],
        "bullets": [
          "The whole site runs on one dark theme. Yellow is kept for the primary button, highlights and the Q.",
          "Clip art is replaced with photography of people on the plant floor.",
          "Services became a scannable list of four lines of business: Resident Liaisons, Inspection, Infrastructure and Government Capabilities.",
          "The persona row (Managers / Directors / Engineers) and the illustrated benefit cards were removed. Their content moved into services, How we work and pricing."
        ],
        "metric": "Scroll depth to pricing, and time on page compared with the old homepage."
      },
      {
        "h": "Decision 4: show Qnet instead of illustrating it.",
        "before": "web-old-qnet",
        "bcap": "Old Qnet section: a checklist beside an illustrated phone",
        "img": "web-new-qnet",
        "cap": "New Qnet section: the same four benefits next to the real Qnet interface, with Request Demo",
        "p": [
          "<b>The issue:</b> Qnet is a real product, but the site showed it as a cartoon. Engineers evaluating TQS had nothing concrete to look at."
        ],
        "bullets": [
          "The four Qnet benefits stay word for word, now with icons.",
          "The picture is the Qnet interface: quality issues by day, NCTs issued and avoided, issue status and a per-location card.",
          "The section ends in Request Demo, with Request On-Site Representation as the secondary action."
        ],
        "metric": "Demo requests from the Qnet section, compared with Schedule a call on the old page."
      },
      {
        "h": "Decision 5: answer the next question, in order.",
        "img": "web-new-how",
        "cap": "How we work: Identify, Isolate, Communicate on a timeline",
        "p": [
          "<b>The issue:</b> the old page jumped between claims, a country picker, persona blurbs, a video and benefit cards, with no clear order.",
          "The new homepage follows the questions a buyer asks: where can you cover me, what do you do, how do you work, what does the software do, what does it cost, who trusts you."
        ],
        "bullets": [
          "A new How we work section explains the service in three steps: Identify, Isolate, Communicate.",
          "A logo marquee (Autoliv, Eaton, Bosch, Federal-Mogul, Magna) and a testimonials carousel close the page.",
          "The email sign-up band was removed."
        ],
        "metric": "Click-through from How we work and testimonials to Order Coverage."
      },
      {
        "h": "Decision 6: fewer, clearer actions.",
        "before": "web-old-footer",
        "bcap": "Old footer with the email sign-up band and a row of badges",
        "img": "web-new-footer",
        "cap": "New footer: links organised by the four services, About and Contact",
        "p": [
          "<b>The issue:</b> seven different calls to action on one page, and a nav with no button."
        ],
        "bullets": [
          "Get Started sits in the nav as the only yellow button.",
          "Each section ends in one order action (Order Coverage, Add to Quote, Select Plan) and one talk-to-us action (Request On-Site Representation, Request Demo).",
          "The nav went from six items (Services, Use Cases, Why TQS, Pricing, Resources, Join Our Team) to five (Home, Services, Pricing, Resources, Company).",
          "The footer is organised by service, so it doubles as a sitemap."
        ],
        "metric": "Share of clicks going to primary actions versus secondary links."
      },
      {
        "kind": "chapter",
        "label": "04 · Outcome",
        "h": "The new site is live. The next step is measuring it."
      },
      {
        "kind": "stats",
        "h": "What I built",
        "items": [
          [
            "8 → 1",
            "country cards replaced by one coverage search"
          ],
          [
            "4",
            "pricing plans now on the homepage, with 3 service tabs"
          ],
          [
            "7 → 5",
            "homepage calls to action, each with a clear role"
          ]
        ]
      },
      {
        "kind": "table",
        "eb": "Outcome metrics",
        "h": "How I'll know it worked.",
        "note": "These haven't been measured yet, so this table sets the baseline, target and method for each one. Results will be added once there's enough traffic on the new site.",
        "cols": [
          "Metric",
          "Baseline (old site)",
          "Target",
          "How to measure"
        ],
        "rows": [
          [
            "Searches from the hero",
            "No search (country picker)",
            "Most coverage visits start with a search",
            "Search events vs country-page visits"
          ],
          [
            "Add to Quote rate",
            "No quote flow",
            "Up month on month",
            "Add to Quote clicks per search"
          ],
          [
            "Visitors reaching pricing",
            "Separate page",
            "Up from baseline",
            "Scroll depth and pricing tab clicks"
          ],
          [
            "Demo requests",
            "To pull from analytics",
            "Up from baseline",
            "Request Demo vs old Schedule a call"
          ],
          [
            "Inbound leads",
            "To pull from CRM",
            "Up from baseline",
            "Coverage and demo forms per month"
          ]
        ],
        "after": "Search and Add to Quote are the most direct check of the main goal: can a supplier find coverage and a price without talking to anyone."
      },
      {
        "h": "What's next.",
        "bullets": [
          "Set up analytics events for search, Add to Quote, plan selection and demo requests, and pull baselines from the old site.",
          "Check whether removing the certification badges from mid-page (SDVOSB, ISO 9001:2015, AIAG) affects government and SDVOSB leads.",
          "Test the coverage search on mobile, where the globe and results panel have to share a small screen."
        ]
      }
    ]
  }
};
