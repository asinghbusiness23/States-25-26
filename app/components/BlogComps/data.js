const PHOTOS = {
  food: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80&auto=format&fit=crop",
  food2:
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80&auto=format&fit=crop",
  housing:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop",
  housing2:
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80&auto=format&fit=crop",
  health:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop",
  health2:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80&auto=format&fit=crop",
  jobs: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format&fit=crop",
  education:
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80&auto=format&fit=crop",
  emergency:
    "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&q=80&auto=format&fit=crop",
  community:
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80&auto=format&fit=crop",
  community2:
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80&auto=format&fit=crop",
  volunteers:
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80&auto=format&fit=crop",
  hero: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&q=80&auto=format&fit=crop",
  meal: "https://images.unsplash.com/photo-1536010305525-f7aa0834e2c7?w=800&q=80&auto=format&fit=crop",
  clinic:
    "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80&auto=format&fit=crop",
  all: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80&auto=format&fit=crop",
};

const ALL_POSTS2 = [
  {
    id: 1,
    featured: true,
    category: "food",
    title: "How to Get Free Food in Chester County",
    summary:
      "A complete, step-by-step guide to every free food program in Chester County — from walk-in pantries to weekly distributions and hot meal sites.",
    readTime: 5,
    date: "Mar 18, 2025",
    resource:
      "Chester County Food Bank, Phoenixville Good Samaritan Services, West Chester Food Cupboard",
    photo: PHOTOS.food,
    steps: [
      "Find your nearest food bank using Chester Bridge",
      "Check hours and walk-in vs. appointment policy",
      "Bring a photo ID — most programs don't require proof of income",
      "Ask about additional programs at pickup",
    ],
    content: [
      {
        type: "intro",
        text: "If you're struggling to put food on the table, you're not alone — and you don't have to navigate this by yourself. Chester County has a network of food assistance programs that serve thousands of families every year, many of them quietly and without fanfare. This guide covers every realistic option, what to expect, and exactly how to access them.",
      },
      { type: "h2", text: "Chester County Food Bank" },
      {
        type: "p",
        text: "The Chester County Food Bank, located at 650 Pennsylvania Drive in Exton, is the county's primary food distribution hub. They supply food to over 50 partner agencies and run their own direct distribution programs. Their Client Choice Pantry lets families choose their own groceries — which matters a lot when you have dietary restrictions or kids who are picky eaters.",
      },
      {
        type: "p",
        text: "To access the pantry, you don't need documentation proving income or residency. You'll want to bring a photo ID and, if you have it, something showing your Chester County address (a bill, lease, or mail). The pantry is open Monday through Friday 9am to 5pm, with some evening hours available. Call (610) 873-6000 to confirm before you go.",
      },
      {
        type: "tip",
        text: "Pro tip: Ask a staff member about SNAP enrollment when you visit. The Food Bank has on-site navigators who can walk you through the application on the spot — it takes about 20 minutes.",
      },
      { type: "h2", text: "Phoenixville Good Samaritan Services" },
      {
        type: "p",
        text: "If you need a hot meal today — not next week — Phoenixville Good Samaritan Services at 265 Church Street serves lunch every day at 11:30am. Walk in, no questions asked. They serve anyone, regardless of ZIP code or income, and the meal is free.",
      },
      { type: "h2", text: "What to bring" },
      {
        type: "list",
        items: [
          "A photo ID (driver's license, state ID, or passport)",
          "Something showing your Chester County address if you have it",
          "A bag or box to carry groceries",
          "Any household members' names if you're picking up for a family",
        ],
      },
    ],
  },
  {
    id: 2,
    featured: true,
    category: "housing",
    title: "Emergency Housing: What to Do Tonight",
    summary:
      "If you or someone you know needs shelter tonight, here's exactly who to call, where to go, and what to expect when you arrive.",
    readTime: 4,
    date: "Mar 12, 2025",
    resource: "Chester County Night Shelter, 211 PA, YWCA Chester County",
    photo: PHOTOS.housing,
    content: [
      {
        type: "intro",
        text: "Finding yourself without a place to sleep tonight is terrifying. The good news is that Chester County has real options, and you don't need to have everything figured out to access them.",
      },
      { type: "h2", text: "Step 1: Call 211 first" },
      {
        type: "p",
        text: "211 is Pennsylvania's statewide social services hotline. It's free, available 24 hours a day, and the staff are trained to route you to an available shelter bed.",
      },
      {
        type: "tip",
        text: "If you have pets: the Night Shelter does not accept animals. Contact 211 for pet-friendly shelter options.",
      },
      {
        type: "list",
        items: [
          "Photo ID — if you don't have one, you can still get in at most low-barrier shelters",
          "Medications you currently take",
          "A phone charger if you have one",
        ],
      },
    ],
  },
  {
    id: 3,
    featured: true,
    category: "health",
    title: "Free Clinics Near You — No Insurance Needed",
    summary:
      "You don't need insurance, a referral, or money to see a doctor in Chester County. Here's where to go and what to expect.",
    readTime: 6,
    date: "Mar 5, 2025",
    resource:
      "Community Health Clinics of Chester County, Devereux Advanced Behavioral Health",
    steps: [
      "Search Chester Bridge for 'health' and filter by 'free'",
      "Call ahead to confirm hours and if walk-ins are accepted",
      "Bring ID and a list of any medications you're taking",
      "Ask about mental health and dental services at the same visit",
    ],
    photo: PHOTOS.health,
    content: [
      {
        type: "intro",
        text: "Skipping the doctor because you don't have insurance is one of those things that seems like the only option — until you find out there are clinics that will see you for free or on a sliding scale based on what you earn. Chester County has several. This guide breaks down who they serve, what they offer, and how to get an appointment.",
      },
      { type: "h2", text: "Community Health Clinics of Chester County" },
      {
        type: "p",
        text: "The Community Health Clinics of Chester County (CHCCC) operate on a sliding-fee scale that goes all the way down to $0 for people below a certain income level. They have several locations across the county and offer primary care, women's health, pediatrics, and behavioral health services.",
      },
      {
        type: "p",
        text: "You don't need insurance to become a patient. When you call to schedule — (610) 738-3922 — they'll ask about your income and household size to determine your fee level. Even if you're working, you may qualify for $0 or very low-cost visits. Most new patient appointments are available within a week or two.",
      },
      {
        type: "p",
        text: "Hours at most locations are Monday through Saturday, 8am to 6pm. They do accept Medicaid and Medicare, so if you've recently enrolled, this is a great place to establish care.",
      },
      {
        type: "tip",
        text: "If you need care today: CHCCC occasionally has same-day appointments for acute illness. Call early in the morning — they set aside a small number of urgent slots each day.",
      },
      { type: "h2", text: "What about mental health?" },
      {
        type: "p",
        text: "Devereux Advanced Behavioral Health at 655 Sugartown Road in Malvern provides outpatient mental health services for adults and children. They offer individual therapy, group therapy, and psychiatric medication management. They accept Medicaid and offer a sliding-scale fee for uninsured patients.",
      },
      {
        type: "p",
        text: "Wait times for new outpatient therapy appointments can range from two to four weeks, which is actually shorter than most private practices in the area. Call (610) 431-8900 to start the intake process. If you're in crisis and cannot wait, they can direct you to same-day crisis services.",
      },
      { type: "h2", text: "What to bring to your first appointment" },
      {
        type: "list",
        items: [
          "Photo ID",
          "Any insurance cards you have (Medicaid, Medicare, employer coverage)",
          "A list of current medications and dosages",
          "The name and number of any previous doctors if you have them",
          "Your income information — a recent pay stub or a note of approximate monthly earnings",
        ],
      },
      {
        type: "p",
        text: "You won't be turned away if you don't have all of this. It just makes the intake process smoother.",
      },
    ],
  },
  {
    id: 4,
    featured: false,
    category: "housing",
    title: "Step-by-Step: Applying for Housing Assistance",
    summary:
      "The housing assistance application process can be confusing. We break it down into simple steps you can actually follow.",
    readTime: 7,
    date: "Feb 28, 2025",
    resource:
      "Chester County Department of Community Development, Chester County Housing Authority",
    photo: PHOTOS.housing2,
    content: [
      {
        type: "intro",
        text: "Applying for housing assistance in Chester County feels complicated because it actually is — there are multiple programs, different eligibility rules, and waiting lists that can stretch for years.",
      },
      { type: "h2", text: "First: Know the difference between the programs" },
      {
        type: "p",
        text: "There are two main housing assistance paths in Chester County. The first is emergency/short-term assistance through the Chester County Department of Community Development (CCDCD).",
      },
    ],
  },
  {
    id: 5,
    featured: false,
    category: "food",
    title: "Where to Get Free Meals This Week",
    summary:
      "Hot meals available daily across Chester County — updated with current hours and locations.",
    readTime: 3,
    date: "Feb 24, 2025",
    resource: "Phoenixville Good Samaritan Services, Chester County Food Bank",
    photo: PHOTOS.meal,
    content: [
      {
        type: "intro",
        text: "Sometimes you just need to know where you can eat today. Chester County has a handful of programs that serve free hot meals with no paperwork, no income verification, and no appointment.",
      },
      {
        type: "h2",
        text: "Phoenixville Good Samaritan Services — Hot Lunch Daily",
      },
      {
        type: "p",
        text: "265 Church Street, Phoenixville. Lunch is served Monday through Saturday starting at 11:30am.",
      },
    ],
  },
  {
    id: 6,
    featured: false,
    category: "health",
    title: "What to Bring to a Free Clinic Visit",
    summary:
      "Don't show up empty-handed. This checklist ensures your clinic visit goes smoothly and you get the most out of it.",
    readTime: 4,
    date: "Feb 20, 2025",
    resource: "Community Health Clinics of Chester County",
    photo: PHOTOS.clinic,
    content: [
      {
        type: "intro",
        text: "Free and sliding-scale clinics serve people from all walks of life, and their intake staff have seen every situation imaginable.",
      },
      {
        type: "list",
        items: [
          "Photo ID",
          "Insurance cards",
          "A list of your current medications",
          "Your allergies",
        ],
      },
    ],
  },
  {
    id: 7,
    featured: false,
    category: "jobs",
    title: "Free Job Training Programs in Chester County",
    summary:
      "From CDL certification to IT bootcamps — here are the no-cost workforce training programs available to Chester County residents.",
    readTime: 6,
    date: "Feb 15, 2025",
    resource: "PA CareerLink Chester County, Chester County OIC",
    photo: PHOTOS.jobs,
    content: [
      {
        type: "intro",
        text: "If you're out of work or looking to change careers, Chester County has several programs that will train you for free — not just workshops, but real certifications in fields that are actively hiring.",
      },
      { type: "h2", text: "PA CareerLink Chester County" },
      {
        type: "p",
        text: "PA CareerLink at 479 Thomas Jones Way in Exton is the starting point for most workforce programs in the county.",
      },
    ],
  },
  {
    id: 8,
    featured: false,
    category: "education",
    title: "How to Get a Free GED Prep Course",
    summary:
      "Chester County offers free GED preparation through several programs. Here's how to enroll and what the process looks like.",
    readTime: 5,
    date: "Feb 10, 2025",
    resource:
      "Chester County OIC, Chester County Library, PA CareerLink Chester County",
    photo: PHOTOS.education,
    content: [
      {
        type: "intro",
        text: "Getting your GED as an adult is more manageable than most people expect — especially in Chester County, where free prep courses are available through multiple organizations.",
      },
      { type: "h2", text: "What the GED involves" },
      {
        type: "p",
        text: "The GED is four subject tests: Reasoning Through Language Arts, Mathematical Reasoning, Science, and Social Studies.",
      },
    ],
  },
  {
    id: 9,
    featured: false,
    category: "emergency",
    title: "Crisis Lines: Who to Call and When",
    summary:
      "A clear breakdown of every crisis hotline serving Chester County residents — mental health, domestic violence, substance use, and more.",
    readTime: 4,
    date: "Feb 5, 2025",
    resource:
      "Crisis Text Line, YWCA Chester County, Devereux Advanced Behavioral Health, PA Warmline",
    photo: PHOTOS.emergency,
    content: [
      {
        type: "intro",
        text: "When something is wrong and you don't know who to call, that moment of not knowing can make things worse.",
      },
      { type: "h2", text: "Mental health crisis — right now" },
      {
        type: "p",
        text: "If you or someone else is in immediate danger of suicide or self-harm, call or text 988.",
      },
    ],
  },
  {
    id: 10,
    featured: false,
    category: "food",
    title: "SNAP Benefits: Are You Eligible?",
    summary:
      "A plain-language guide to SNAP eligibility in Pennsylvania, how to apply, and what to do if you're denied.",
    readTime: 5,
    date: "Jan 30, 2025",
    resource: "PA COMPASS, Chester County Assistance Office",
    photo: PHOTOS.food2,
    content: [
      {
        type: "intro",
        text: "SNAP (Supplemental Nutrition Assistance Program) is one of the most impactful federal benefits available to low-income households.",
      },
      { type: "h2", text: "Basic eligibility in Pennsylvania" },
      {
        type: "p",
        text: "Pennsylvania uses expanded SNAP eligibility under a provision called Categorical Eligibility.",
      },
    ],
  },
  {
    id: 11,
    featured: false,
    category: "housing",
    title: "Understanding Section 8 Vouchers in Chester County",
    summary:
      "The waitlist is long, but you need to know how it works. This guide explains Section 8, how to apply, and how to keep your spot.",
    readTime: 8,
    date: "Jan 22, 2025",
    resource: "Chester County Housing Authority",
    photo: PHOTOS.housing,
    content: [
      {
        type: "intro",
        text: "Section 8 — officially called the Housing Choice Voucher Program — is the federal government's primary tool for helping low-income families afford private market rent.",
      },
    ],
  },
  {
    id: 12,
    featured: false,
    category: "health",
    title: "Mental Health Resources with No Waitlist",
    summary:
      "These Chester County programs offer same-week appointments or walk-in availability for mental health support.",
    readTime: 5,
    date: "Jan 15, 2025",
    resource:
      "Devereux Advanced Behavioral Health, PA Warmline, Crisis Text Line (988)",
    photo: PHOTOS.health2,
    content: [
      {
        type: "intro",
        text: "Finding a therapist in Chester County who's taking new patients, accepts your insurance or lack thereof, and has an appointment available in the next month can feel nearly impossible.",
      },
      { type: "h2", text: "988 — The Suicide and Crisis Lifeline" },
      {
        type: "p",
        text: "If you're in mental health crisis right now, call or text 988.",
      },
    ],
  },
];
export const ALL_POSTS = [
  {
    id: 1,
    featured: true,
    category: "food",
    title: "How to Get Free Food in Chester County",
    summary:
      "A complete, step-by-step guide to every free food program in Chester County — from walk-in pantries to weekly distributions and hot meal sites.",
    readTime: 5,
    date: "Mar 18, 2025",
    photo: PHOTOS.food,
    resource:
      "Chester County Food Bank, Phoenixville Good Samaritan Services, West Chester Food Cupboard",
    steps: [
      "Find your nearest food bank using Chester Bridge",
      "Check hours and walk-in vs. appointment policy",
      "Bring a photo ID — most programs don't require proof of income",
      "Ask about additional programs at pickup",
    ],
    content: [
      {
        type: "intro",
        text: "If you're struggling to put food on the table, you're not alone, and you don't have to navigate this by yourself. Chester County has a network of food assistance programs that serve thousands of families every year, many of them quietly and without fanfare. This guide covers every realistic option, what to expect, and exactly how to access them.",
      },
      { type: "h2", text: "Chester County Food Bank" },
      {
        type: "p",
        text: "The Chester County Food Bank, located at 650 Pennsylvania Drive in Exton, is the county's primary food distribution hub. They supply food to over 50 partner agencies and run their own direct distribution programs. Their Client Choice Pantry lets families choose their own groceries — which matters a lot when you have dietary restrictions or kids who are picky eaters.",
      },
      {
        type: "p",
        text: "To access the pantry, you don't need documentation proving income or residency. You'll want to bring a photo ID and, if you have it, something showing your Chester County address (a bill, lease, or mail). The pantry is open Monday through Friday 9am to 5pm, with some evening hours available. Call (610) 873-6000 to confirm before you go.",
      },
      {
        type: "tip",
        text: "Pro tip: Ask a staff member about SNAP enrollment when you visit. The Food Bank has on-site navigators who can walk you through the application on the spot — it takes about 20 minutes.",
      },
      { type: "h2", text: "Phoenixville Good Samaritan Services" },
      {
        type: "p",
        text: "If you need a hot meal today — not next week — Phoenixville Good Samaritan Services at 265 Church Street serves lunch every day at 11:30am. Walk in, no questions asked. They serve anyone, regardless of ZIP code or income, and the meal is free.",
      },
      {
        type: "p",
        text: "They also run a grab-and-go pantry with shelf-stable items you can take home. The pantry doesn't require an appointment on most days — just show up before 1pm. Call (610) 933-0741 to verify hours.",
      },
      { type: "h2", text: "West Chester Food Cupboard" },
      {
        type: "p",
        text: "The West Chester Food Cupboard at 228 W Gay Street is open Tuesdays and Fridays from 10am to 1pm. No income documentation required. They primarily serve West Chester Borough and surrounding townships, but they don't turn people away for being outside their zone. Walk-ins are welcome on Fridays.",
      },
      { type: "h2", text: "What to bring" },
      {
        type: "list",
        items: [
          "A photo ID (driver's license, state ID, or passport)",
          "Something showing your Chester County address if you have it (not always required)",
          "A bag or box to carry groceries — some sites provide bags but not always",
          "Any household members' names if you're picking up for a family",
        ],
      },
      {
        type: "p",
        text: "The most important thing to know: you will not be turned away for not having paperwork. These programs exist specifically for moments of need, and their staff have seen every situation. Just show up.",
      },
    ],
  },
  {
    id: 2,
    featured: true,
    category: "housing",
    title: "Emergency Housing: What to Do Tonight",
    summary:
      "If you or someone you know needs shelter tonight, here's exactly who to call, where to go, and what to expect when you arrive.",
    readTime: 4,
    date: "Mar 12, 2025",
    photo: PHOTOS.housing,
    resource: "Chester County Night Shelter, 211 PA, YWCA Chester County",
    steps: [
      "Call 211 for immediate routing to an open shelter",
      "Go to Chester County Night Shelter after 5pm (walk-in accepted)",
      "Bring ID if you have it — most shelters accept you without it",
      "Ask shelter staff about transitional housing options",
    ],
    content: [
      {
        type: "intro",
        text: "Finding yourself without a place to sleep tonight is terrifying. The good news is that Chester County has real options, and you don't need to have everything figured out to access them. This guide tells you exactly what to do, in order, right now.",
      },
      { type: "h2", text: "Step 1: Call 211 first" },
      {
        type: "p",
        text: "211 is Pennsylvania's statewide social services hotline. It's free, available 24 hours a day, and the staff are trained to route you to an available shelter bed — not just give you a list to call yourself. When you call, tell them you need emergency housing tonight in Chester County. They will check real-time availability across multiple shelters and either connect you directly or give you a confirmed intake contact.",
      },
      {
        type: "p",
        text: "If calling is hard, you can text your ZIP code to 898-211. You can also reach 211 from the 211 PA website, which has a chat option.",
      },
      { type: "h2", text: "Chester County Night Shelter" },
      {
        type: "p",
        text: "The Chester County Night Shelter at 235 W Market Street in West Chester accepts walk-ins every evening starting at 5pm. It is a low-barrier shelter, which means they do not require sobriety, ID, or a referral to enter. They operate on a first-come basis, so arriving closer to 5pm gives you a better chance of getting a bed on a busy night.",
      },
      {
        type: "p",
        text: "The shelter provides a cot, a hot meal, and access to case managers who can help you start working on next steps the following morning. The phone number is (610) 696-6877.",
      },
      {
        type: "tip",
        text: "If you have pets: the Night Shelter does not accept animals. Contact 211 for pet-friendly shelter options or ask about emergency boarding assistance.",
      },
      { type: "h2", text: "YWCA Chester County — Domestic Violence Shelter" },
      {
        type: "p",
        text: "If you are fleeing domestic violence, call the YWCA crisis line at (610) 692-7273. Their shelter location is confidential for safety reasons, but the crisis line operates 24/7 and will coordinate transportation if needed. You don't need to have a police report or any documentation to access DV shelter services.",
      },
      { type: "h2", text: "What to bring if you can" },
      {
        type: "list",
        items: [
          "Photo ID — if you don't have one, you can still get in at most low-barrier shelters",
          "Medications you currently take",
          "A phone charger if you have one",
          "Any documents you may need (Social Security card, birth certificate, lease, etc.) — even photocopies help",
        ],
      },
      {
        type: "p",
        text: "Case managers at the shelter can help you apply for Rapid Rehousing assistance, which pays first month's rent and deposit for people transitioning out of emergency shelter. Ask about it on your first morning — waitlists fill quickly.",
      },
    ],
  },
  {
    id: 3,
    featured: true,
    category: "health",
    title: "Free Clinics Near You — No Insurance Needed",
    summary:
      "You don't need insurance, a referral, or money to see a doctor in Chester County. Here's where to go and what to expect.",
    readTime: 6,
    date: "Mar 5, 2025",
    photo: PHOTOS.health,
    resource:
      "Community Health Clinics of Chester County, Devereux Advanced Behavioral Health",
    steps: [
      "Search Chester Bridge for 'health' and filter by 'free'",
      "Call ahead to confirm hours and if walk-ins are accepted",
      "Bring ID and a list of any medications you're taking",
      "Ask about mental health and dental services at the same visit",
    ],
    content: [
      {
        type: "intro",
        text: "Skipping the doctor because you don't have insurance is one of those things that seems like the only option — until you find out there are clinics that will see you for free or on a sliding scale based on what you earn. Chester County has several. This guide breaks down who they serve, what they offer, and how to get an appointment.",
      },
      { type: "h2", text: "Community Health Clinics of Chester County" },
      {
        type: "p",
        text: "The Community Health Clinics of Chester County (CHCCC) operate on a sliding-fee scale that goes all the way down to $0 for people below a certain income level. They have several locations across the county and offer primary care, women's health, pediatrics, and behavioral health services.",
      },
      {
        type: "p",
        text: "You don't need insurance to become a patient. When you call to schedule — (610) 738-3922 — they'll ask about your income and household size to determine your fee level. Even if you're working, you may qualify for $0 or very low-cost visits. Most new patient appointments are available within a week or two.",
      },
      {
        type: "p",
        text: "Hours at most locations are Monday through Saturday, 8am to 6pm. They do accept Medicaid and Medicare, so if you've recently enrolled, this is a great place to establish care.",
      },
      {
        type: "tip",
        text: "If you need care today: CHCCC occasionally has same-day appointments for acute illness. Call early in the morning — they set aside a small number of urgent slots each day.",
      },
      { type: "h2", text: "What about mental health?" },
      {
        type: "p",
        text: "Devereux Advanced Behavioral Health at 655 Sugartown Road in Malvern provides outpatient mental health services for adults and children. They offer individual therapy, group therapy, and psychiatric medication management. They accept Medicaid and offer a sliding-scale fee for uninsured patients.",
      },
      {
        type: "p",
        text: "Wait times for new outpatient therapy appointments can range from two to four weeks, which is actually shorter than most private practices in the area. Call (610) 431-8900 to start the intake process. If you're in crisis and cannot wait, they can direct you to same-day crisis services.",
      },
      { type: "h2", text: "What to bring to your first appointment" },
      {
        type: "list",
        items: [
          "Photo ID",
          "Any insurance cards you have (Medicaid, Medicare, employer coverage)",
          "A list of current medications and dosages",
          "The name and number of any previous doctors if you have them",
          "Your income information — a recent pay stub or a note of approximate monthly earnings",
        ],
      },
      {
        type: "p",
        text: "You won't be turned away if you don't have all of this. It just makes the intake process smoother.",
      },
    ],
  },
  {
    id: 4,
    featured: false,
    category: "housing",
    title: "Step-by-Step: Applying for Housing Assistance",
    summary:
      "The housing assistance application process can be confusing. We break it down into simple steps you can actually follow.",
    readTime: 7,
    date: "Feb 28, 2025",
    photo: PHOTOS.housing2,
    resource:
      "Chester County Department of Community Development, Chester County Housing Authority",
    content: [
      {
        type: "intro",
        text: "Applying for housing assistance in Chester County feels complicated because it actually is — there are multiple programs, different eligibility rules, and waiting lists that can stretch for years. But knowing which program fits your situation and applying correctly from the start makes a real difference. This guide walks you through it.",
      },
      { type: "h2", text: "First: Know the difference between the programs" },
      {
        type: "p",
        text: "There are two main housing assistance paths in Chester County. The first is emergency/short-term assistance through the Chester County Department of Community Development (CCDCD), which can help with back rent, utility shutoffs, or first month's rent to move out of a shelter. The second is long-term affordable housing through the Chester County Housing Authority (CCHA), which administers Section 8 Housing Choice Vouchers.",
      },
      {
        type: "p",
        text: "Most people in immediate need should start with CCDCD. The Housing Authority waitlist is often years long and isn't a solution for a crisis happening right now.",
      },
      { type: "h2", text: "Applying for Emergency Rental Assistance (CCDCD)" },
      {
        type: "p",
        text: "The Chester County Department of Community Development is located at 601 Westtown Road, Suite 270, in West Chester. Their main line is (610) 344-6900. They administer the Emergency Rental Assistance Program (ERAP) and other short-term housing stabilization funds.",
      },
      {
        type: "p",
        text: "To apply, you'll need to document that you're a Chester County resident, that you're at risk of eviction or currently behind on rent, and that your income falls below 80% of the Area Median Income (which for a family of four in Chester County is roughly $88,000/year — most renters qualify).",
      },
      {
        type: "list",
        items: [
          "Completed application form (available at their office or by request)",
          "Proof of Chester County residency (lease, utility bill, or mail)",
          "A copy of your lease",
          "Landlord name and contact information",
          "Documentation of financial hardship (eviction notice, layoff letter, medical bills, etc.)",
          "Recent pay stubs or benefit statements showing current income",
        ],
      },
      {
        type: "tip",
        text: "Call before you go. CCDCD staff can pre-screen you over the phone and tell you whether you qualify before you gather documents. This saves a trip if you're in a program that's currently full.",
      },
      {
        type: "h2",
        text: "Applying for Section 8 (Chester County Housing Authority)",
      },
      {
        type: "p",
        text: "The Chester County Housing Authority is at 8 N Church Street in West Chester, (610) 436-9200. They manage the Housing Choice Voucher (Section 8) program, which gives eligible low-income households a voucher to rent from a private landlord — with the government paying a portion of the rent.",
      },
      {
        type: "p",
        text: "The waitlist for Section 8 in Chester County is typically 2 to 5 years long and is only open intermittently. When the waitlist opens, it's usually announced on CCHA's website and through local social service agencies. Apply the moment it opens — even if you're not currently in crisis — because by the time your name comes up, your situation may be more stable.",
      },
    ],
  },
  {
    id: 5,
    featured: false,
    category: "food",
    title: "Where to Get Free Meals This Week",
    summary:
      "Hot meals available daily across Chester County — updated with current hours and locations.",
    readTime: 3,
    date: "Feb 24, 2025",
    photo: PHOTOS.meal,
    resource: "Phoenixville Good Samaritan Services, Chester County Food Bank",
    content: [
      {
        type: "intro",
        text: "Sometimes you just need to know where you can eat today. Chester County has a handful of programs that serve free hot meals with no paperwork, no income verification, and no appointment. Here's where they are and when they're open.",
      },
      {
        type: "h2",
        text: "Phoenixville Good Samaritan Services — Hot Lunch Daily",
      },
      {
        type: "p",
        text: "265 Church Street, Phoenixville. Lunch is served Monday through Saturday starting at 11:30am, with serving typically ending by 1pm. This is a walk-in meal, no reservation needed, and anyone is welcome regardless of income or ZIP code. The menu changes daily but always includes a hot entrée, bread, and a drink. Call (610) 933-0741 if you want to confirm they're open on a particular day.",
      },
      { type: "h2", text: "Chester County Food Bank — Client Choice Pantry" },
      {
        type: "p",
        text: "650 Pennsylvania Drive, Exton. The Food Bank operates a Client Choice Pantry where you can select your own groceries (not a prepared meal, but food you take home). Hours are Monday through Friday, 9am to 5pm, with some extended hours available. Call (610) 873-6000 to schedule a pantry appointment or ask about walk-in availability. You can visit once per month.",
      },
      { type: "h2", text: "West Chester Food Cupboard" },
      {
        type: "p",
        text: "228 W Gay Street, West Chester. Open Tuesdays and Fridays from 10am to 1pm. The Cupboard stocks a rotating selection of dry goods, canned items, and when available, fresh produce and bread. Friday is walk-in day — no appointment needed.",
      },
      {
        type: "tip",
        text: "Most of these programs also distribute surplus bakery goods and produce on an irregular basis. If you're able to be flexible about timing, ask staff when they expect their next fresh food delivery — it's often worth the wait.",
      },
    ],
  },
  {
    id: 6,
    featured: false,
    category: "health",
    title: "What to Bring to a Free Clinic Visit",
    summary:
      "Don't show up empty-handed. This checklist ensures your clinic visit goes smoothly and you get the most out of it.",
    readTime: 4,
    date: "Feb 20, 2025",
    photo: PHOTOS.health2,
    resource: "Community Health Clinics of Chester County",
    content: [
      {
        type: "intro",
        text: "Free and sliding-scale clinics serve people from all walks of life, and their intake staff have seen every situation imaginable. You won't be judged for what you don't have. But bringing the right things to your appointment does make a real difference — it helps the provider give you better care and can speed up your visit significantly.",
      },
      { type: "h2", text: "The essentials" },
      {
        type: "list",
        items: [
          "Photo ID — a driver's license, state ID, passport, or consular ID card. If you don't have one, bring whatever you do have and let the front desk know.",
          "Insurance cards — any of them, including Medicaid, Medicare, or an old employer plan. Even if you think it's lapsed, bring it. Staff can often verify coverage you weren't aware of.",
          "A list of your current medications — name, dosage, and how often you take them. Phone photos of your pill bottles work perfectly.",
          "Your allergies — especially medication allergies, including what happens when you take them.",
        ],
      },
      { type: "h2", text: "Things that help but aren't required" },
      {
        type: "list",
        items: [
          "The name and number of your last doctor or clinic, if applicable",
          "Any test results, X-rays, or records you've received in the past",
          "A summary of your symptoms and how long you've had them — writing this down in advance helps you remember everything once you're in the room",
          "For children: immunization records if you have them",
        ],
      },
      { type: "h2", text: "For your income documentation" },
      {
        type: "p",
        text: "Most sliding-scale clinics will ask about household income to determine your fee. A recent pay stub is ideal. If you're unemployed, a note or statement saying so is fine. If you receive Social Security, SSI, or disability benefits, a recent award letter works. If you earn cash income with no documentation, staff are used to working through this — just be honest about your approximate monthly earnings.",
      },
      {
        type: "tip",
        text: "At Community Health Clinics of Chester County ((610) 738-3922), you can ask to speak with a Patient Services Representative before your appointment who can pre-process your income information and tell you exactly what your visit will cost. For many patients, it's $0.",
      },
      { type: "h2", text: "During your visit" },
      {
        type: "p",
        text: "Be direct about everything that's going on, even things that feel embarrassing. Free clinic providers are specifically trained for complex, multi-layered situations. If you're struggling with housing, food, or mental health on top of a physical issue, say so — they can often connect you with additional resources or referrals while you're there.",
      },
    ],
  },
  {
    id: 7,
    featured: false,
    category: "jobs",
    title: "Free Job Training Programs in Chester County",
    summary:
      "From CDL certification to IT bootcamps — here are the no-cost workforce training programs available to Chester County residents.",
    readTime: 6,
    date: "Feb 15, 2025",
    photo: PHOTOS.jobs,
    resource: "PA CareerLink Chester County, Chester County OIC",
    content: [
      {
        type: "intro",
        text: "If you're out of work or looking to change careers, Chester County has several programs that will train you for free — not just workshops, but real certifications in fields that are actively hiring. Here's what's available, who qualifies, and how to get started.",
      },
      { type: "h2", text: "PA CareerLink Chester County" },
      {
        type: "p",
        text: "PA CareerLink at 479 Thomas Jones Way in Exton is the starting point for most workforce programs in the county. Walk in Monday through Friday between 8:30am and 4:30pm, or call (610) 280-1010 to schedule an intake appointment.",
      },
      {
        type: "p",
        text: "Through CareerLink, you can access the Individual Training Account (ITA) program, which provides up to $10,000 in funding for approved training programs — including CDL licensing, healthcare certifications (CNA, phlebotomy, medical assistant), HVAC, welding, IT certifications (CompTIA, AWS, Google), and more. You don't repay this money. Eligibility is based on your employment status and income; most people who walk in qualify for something.",
      },
      {
        type: "p",
        text: "They also offer free resume writing assistance, interview coaching, and access to job banks that aren't publicly listed. Their staff can connect you with employers in Chester County who are actively hiring and have agreed to consider CareerLink referrals.",
      },
      {
        type: "tip",
        text: "Show up early on Monday morning. CareerLink staff set aside walk-in slots for job seekers, and those spots fill by mid-morning. If you have a specific program in mind, call ahead to confirm it's an approved training provider.",
      },
      { type: "h2", text: "Chester County OIC" },
      {
        type: "p",
        text: "Chester County OIC (Opportunities Industrialization Center) at 28 W Miner Street in West Chester focuses specifically on workforce development for adults who face significant barriers to employment — including people with criminal records, long gaps in employment, or limited formal education.",
      },
      {
        type: "p",
        text: "They offer free GED prep classes, computer skills training, customer service certifications, and job placement support. The vibe is supportive and non-judgmental — many of their staff have personal experience with the barriers their participants face. Call (610) 692-6810 to schedule an intake.",
      },
    ],
  },
  {
    id: 8,
    featured: false,
    category: "education",
    title: "How to Get a Free GED Prep Course",
    summary:
      "Chester County offers free GED preparation through several programs. Here's how to enroll and what the process looks like.",
    readTime: 5,
    date: "Feb 10, 2025",
    photo: PHOTOS.education,
    resource:
      "Chester County OIC, Chester County Library, PA CareerLink Chester County",
    content: [
      {
        type: "intro",
        text: "Getting your GED as an adult is more manageable than most people expect — especially in Chester County, where free prep courses are available through multiple organizations. This guide covers your options, what the GED actually involves, and how to start without feeling overwhelmed.",
      },
      { type: "h2", text: "What the GED involves" },
      {
        type: "p",
        text: "The GED is four subject tests: Reasoning Through Language Arts (reading and writing), Mathematical Reasoning, Science, and Social Studies. You can take the tests one at a time, in any order, and you only have to retake the ones you don't pass. The passing score is 145 out of 200 on each test. Each test costs $30 in Pennsylvania, but the prep programs listed here can often cover that cost or connect you with fee waivers.",
      },
      { type: "h2", text: "Chester County OIC — Free GED Prep Classes" },
      {
        type: "p",
        text: "Chester County OIC at 28 W Miner Street in West Chester runs structured GED prep classes that meet on a regular schedule. Classes are free, and they accept students at any skill level. Their instructors are used to working with adults who haven't been in school for years or decades — no judgment, no pressure.",
      },
      {
        type: "p",
        text: "To enroll, call (610) 692-6810 and ask about their Adult Education program. They'll do a brief intake assessment to understand where you are in each subject area, then place you in the appropriate class level.",
      },
      {
        type: "h2",
        text: "Chester County Library — Adult Literacy and GED Support",
      },
      {
        type: "p",
        text: "The Chester County Library system (main branch at 450 Exton Square Pkwy, Exton) offers free one-on-one tutoring through their Adult Literacy program, which can include GED prep. If you prefer self-paced study or need to work around a complicated schedule, the library also provides free access to GED prep software and study materials.",
      },
      {
        type: "p",
        text: "Call the main branch at (610) 280-2600 and ask for the Adult Literacy department. They'll match you with a volunteer tutor who can meet weekly at a library location convenient to you.",
      },
      {
        type: "tip",
        text: "If you're already enrolled at PA CareerLink, ask your case manager about GED prep as part of your employment plan. CareerLink can pay for your GED test fees as part of a training agreement, which means you could complete the whole thing for free — prep and testing.",
      },
    ],
  },
  {
    id: 9,
    featured: false,
    category: "emergency",
    title: "Crisis Lines: Who to Call and When",
    summary:
      "A clear breakdown of every crisis hotline serving Chester County residents — mental health, domestic violence, substance use, and more.",
    readTime: 4,
    date: "Feb 5, 2025",
    photo: PHOTOS.emergency,
    resource:
      "Crisis Text Line, YWCA Chester County, Devereux Advanced Behavioral Health, PA Warmline",
    content: [
      {
        type: "intro",
        text: "When something is wrong and you don't know who to call, that moment of not knowing can make things worse. This guide is meant to cut through the uncertainty. Here are the actual phone numbers and text lines for every kind of crisis a Chester County resident might face — and a plain-language explanation of when to use each one.",
      },
      { type: "h2", text: "Mental health crisis — right now" },
      {
        type: "p",
        text: "If you or someone else is in immediate danger of suicide or self-harm, call or text 988. This is the Suicide and Crisis Lifeline, and it connects you to a trained counselor within minutes. It's free, confidential, and available 24/7. You can also text if calling feels like too much.",
      },
      {
        type: "p",
        text: "For mental health crises that are serious but not immediately life-threatening, the PA Warmline is a good option: 1-855-PA-WARM-LINE (1-855-729-2754). This is staffed by people who have personal experience with mental health challenges. They're not there to assess risk — they're there to listen and help you think through what to do next.",
      },
      { type: "h2", text: "Domestic violence" },
      {
        type: "p",
        text: "The YWCA Chester County crisis line is (610) 692-7273, available 24 hours a day. If you're in a domestic violence situation — or think you might be — this is your first call. They can help you safety-plan without leaving, or arrange confidential shelter and transportation if you're ready to leave. Nothing you say obligates you to take any particular action.",
      },
      { type: "h2", text: "Substance use crisis" },
      {
        type: "p",
        text: "For overdose emergencies, call 911. Pennsylvania's Good Samaritan Law protects you and the person you're calling about from drug possession charges when you call for help in an overdose situation.",
      },
      {
        type: "p",
        text: "For help with addiction that isn't an emergency right now, call the PA Get Help Now Hotline: 1-800-662-HELP (4357). This connects you to the Substance Abuse and Mental Health Services Administration (SAMHSA) referral line, which can locate treatment programs near you, including ones that accept Medicaid or charge on a sliding scale.",
      },
      { type: "h2", text: "Food or housing emergency" },
      {
        type: "p",
        text: "Call 211. This is Pennsylvania's social services hotline and operates around the clock. If you're about to lose your housing tonight, need food for your children, or don't know where to turn for any basic need — this is your starting point. The staff are trained to navigate the whole system and will do the searching for you.",
      },
      {
        type: "tip",
        text: "Save these numbers in your phone now, before you need them. In a crisis, the last thing you want to do is Google anything.",
      },
    ],
  },
  {
    id: 10,
    featured: false,
    category: "food",
    title: "SNAP Benefits: Are You Eligible?",
    summary:
      "A plain-language guide to SNAP eligibility in Pennsylvania, how to apply, and what to do if you're denied.",
    readTime: 5,
    date: "Jan 30, 2025",
    photo: PHOTOS.food2,
    resource:
      "PA COMPASS (SNAP Application Portal), Chester County Assistance Office",
    content: [
      {
        type: "intro",
        text: "SNAP (Supplemental Nutrition Assistance Program — formerly food stamps) is one of the most impactful federal benefits available to low-income households, and a significant percentage of people who qualify haven't applied. If you're not sure whether you'd be eligible, the short answer is: if you're earning under about $2,000/month for a single person or $2,700 for a family of two, you probably are.",
      },
      { type: "h2", text: "Basic eligibility in Pennsylvania" },
      {
        type: "p",
        text: "Pennsylvania uses expanded SNAP eligibility under a provision called Categorical Eligibility, which means that if your gross monthly income is at or below 160% of the federal poverty level, you're likely eligible. For a family of three, that's roughly $3,800/month or about $45,600/year. Assets generally aren't counted in PA's eligibility determination.",
      },
      {
        type: "p",
        text: "Even if you're working, you may qualify. SNAP is designed for working families and individuals, not just people who are unemployed. Part-time workers, gig workers, and people with irregular income frequently receive benefits.",
      },
      { type: "h2", text: "How to apply" },
      {
        type: "p",
        text: "The easiest way to apply is online through PA COMPASS at compass.state.pa.us. You can complete the application in about 20 to 30 minutes and upload documents directly. You'll need to do a brief phone interview after submitting — the County Assistance Office will call you within about 10 business days to schedule it.",
      },
      {
        type: "p",
        text: "You can also apply in person at the Chester County Assistance Office at 601 Westtown Road in West Chester. Walk-ins are accepted Monday through Friday. If you need help with the application, a navigator at the Chester County Food Bank ((610) 873-6000) can sit with you and complete it together — for free.",
      },
      { type: "h2", text: "What if you're denied?" },
      {
        type: "p",
        text: "If your application is denied, you have the right to a fair hearing — a formal review of the decision. Request one within 90 days of the denial. Many denials are reversed at the fair hearing stage, especially if the denial was due to missing documentation rather than genuine ineligibility. Legal Aid of Southeastern Pennsylvania offers free representation for SNAP fair hearings — call 1-877-429-5994.",
      },
      {
        type: "tip",
        text: "SNAP benefits are loaded onto an EBT card that works like a debit card at most grocery stores, including Aldi, Walmart, Giant, and Acme. You can check your balance and transaction history at compass.state.pa.us or by calling the number on the back of your card.",
      },
    ],
  },
  {
    id: 11,
    featured: false,
    category: "housing",
    title: "Understanding Section 8 Vouchers in Chester County",
    summary:
      "The waitlist is long, but you need to know how it works. This guide explains Section 8, how to apply, and how to keep your spot.",
    readTime: 8,
    date: "Jan 22, 2025",
    photo: PHOTOS.housing2,
    resource: "Chester County Housing Authority",
    content: [
      {
        type: "intro",
        text: "Section 8 — officially called the Housing Choice Voucher Program — is the federal government's primary tool for helping low-income families afford private market rent. In Chester County, it's administered by the Chester County Housing Authority. The waitlist is genuinely long, but understanding how the program works and applying correctly is worth your time.",
      },
      { type: "h2", text: "How Section 8 works" },
      {
        type: "p",
        text: "When you receive a Housing Choice Voucher, you're responsible for finding your own landlord and apartment. The voucher covers the difference between 30% of your household's adjusted income and the fair market rent for your area. In Chester County's current rental market, that's a significant subsidy — it can make rent in the $1,200 to $1,800/month range genuinely affordable on a low income.",
      },
      {
        type: "p",
        text: "The apartment has to pass a Housing Quality Standards inspection conducted by the Housing Authority, and the landlord has to agree to participate in the program. Many landlords in Chester County do accept vouchers, though it sometimes takes time to find one.",
      },
      { type: "h2", text: "The waitlist" },
      {
        type: "p",
        text: "The Chester County Housing Authority waitlist is typically closed except for brief windows when they accept new applications. When it opens, it's announced on the CCHA website (chestercountyha.org) and through local social service networks. Applications must be submitted during the open window — there's no way to get on the list when it's closed.",
      },
      {
        type: "p",
        text: "Once on the waitlist, your wait time will depend on your preference factors. Households that include a person with a disability, veterans, and people currently homeless receive preference points that move them up the list. Contact CCHA at (610) 436-9200 to ask about your current preference status.",
      },
      { type: "h2", text: "Keeping your spot" },
      {
        type: "p",
        text: "Once you're on the waitlist, you're required to keep your address current with CCHA. If they can't reach you when your name comes up, you lose your spot. Update your mailing address every time you move — in writing, by mail or in person — and keep copies of everything you send them.",
      },
      {
        type: "tip",
        text: "While you wait for Section 8, apply for every other housing assistance program available. The Chester County Department of Community Development's programs, emergency rental assistance, and transitional housing through local nonprofits can bridge the gap in the meantime.",
      },
    ],
  },
  {
    id: 12,
    featured: false,
    category: "health",
    title: "Mental Health Resources with No Waitlist",
    summary:
      "These Chester County programs offer same-week appointments or walk-in availability for mental health support.",
    readTime: 5,
    date: "Jan 15, 2025",
    photo: PHOTOS.health2,
    resource:
      "Devereux Advanced Behavioral Health, PA Warmline, Crisis Text Line (988)",
    content: [
      {
        type: "intro",
        text: "Finding a therapist in Chester County who's taking new patients, accepts your insurance or lack thereof, and has an appointment available in the next month can feel nearly impossible. This guide is about what to do when the standard approach isn't working — real options that don't require a three-month wait.",
      },
      { type: "h2", text: "988 — The Suicide and Crisis Lifeline" },
      {
        type: "p",
        text: "If you're in mental health crisis right now, call or text 988. This is not just for people who are suicidal — it's for anyone experiencing a mental health emergency, panic attack, severe anxiety, psychosis, or any moment where you feel you can't cope. Counselors are available around the clock and will stay on the line with you.",
      },
      { type: "h2", text: "PA Warmline — Non-Crisis Emotional Support" },
      {
        type: "p",
        text: "The PA Warmline (1-855-729-2754) is staffed by people with lived experience of mental health challenges and is available for moments when you're struggling but not in immediate crisis. It's a place to talk, get perspective, and figure out your next steps. Available evenings and weekends when most offices are closed.",
      },
      { type: "h2", text: "Devereux Advanced Behavioral Health" },
      {
        type: "p",
        text: "Devereux at 655 Sugartown Road in Malvern offers outpatient therapy with wait times that are typically shorter than private practices — often two to four weeks for a first appointment. They accept Medicaid and offer sliding-scale fees for uninsured patients. For psychiatric medication management (not just talk therapy), they can sometimes see new patients faster than for therapy alone.",
      },
      {
        type: "p",
        text: "Call (610) 431-8900 to begin the intake process. Be upfront about your urgency — staff can sometimes expedite intake for people in significant distress even without a formal crisis.",
      },
      { type: "h2", text: "Community Health Clinics of Chester County" },
      {
        type: "p",
        text: "CHCCC's behavioral health department, reached through their main line at (610) 738-3922, offers integrated mental health care alongside primary care. If you're already a patient or becoming one, ask about same-day behavioral health support during your medical visit. Their integrated model means the mental health provider is literally in the same building — no separate referral required.",
      },
      {
        type: "tip",
        text: "If you're working with a primary care provider anywhere in Chester County, ask them directly for a behavioral health referral. PCPs have relationships with mental health providers and can often get you seen faster than if you cold-call a therapist yourself.",
      },
    ],
  },
];
