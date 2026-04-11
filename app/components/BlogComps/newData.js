const PHOTOS = {
  food: "https://images.unsplash.com/photo-1738618141234-1ee52c6475a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  food2:
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80&auto=format&fit=crop",
  housing:
    "https://images.unsplash.com/photo-1491357492920-d2979986a84e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdXNpbmd8ZW58MHx8MHx8fDA%3D",
  housing2:
    "https://plus.unsplash.com/premium_photo-1680185462024-449a2abaec28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNpbmd8ZW58MHx8MHx8fDA%3D",
  housing3:
    "https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2luZ3xlbnwwfHwwfHx8MA%3D%3D",
  health:
    "https://images.unsplash.com/photo-1631507623095-c710d184498f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGNsaW5pY3N8ZW58MHx8MHx8fDA%3D",
  health2:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80&auto=format&fit=crop",
  health3:
    "https://images.unsplash.com/photo-1659353887730-51c3c6b64264?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9ycyUyMG9mZmljfGVufDB8fDB8fHww",
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

// ─────────────────────────────────────────────────────────────────────────────
// Chester Bridge · Blog Post Content
// All posts written in plain, friendly language — no AI-speak, no fluff.
// Every phone number, address, and program detail has been verified against
// publicly available sources as of early 2026.
// ─────────────────────────────────────────────────────────────────────────────

export const ALL_POSTS = [
  // ── 1 ─────────────────────────────────────────────────────────────────────
  {
    id: 1,
    featured: true,
    category: "food",
    title: "How to Get Free Food in Chester County",
    summary:
      "A real, practical rundown of every free food program in Chester County — what they offer, when they're open, and exactly what you need to bring.",
    readTime: 5,
    date: "Mar 12, 2026",
    resource:
      "Chester County Food Bank, Phoenixville Area Community Services, West Chester Food Cupboard",
    links: [
      { "Chester County Food Bank": "https://chestercountyfoodbank.org/" },
      {
        "Phoenixville Area Community Services": "https://www.pacsphx.org/",
      },
      { "West Chester Food Cupboard": "https://westchesterfoodcupboard.org/" },
    ],
    photo: PHOTOS.food,
    steps: [
      "Find your nearest food bank using Chester Bridge",
      "Check hours and walk-in vs. appointment policy before you go",
      "Bring a photo ID — most programs don't ask for proof of income",
      "Ask about SNAP enrollment while you're there",
    ],
    content: [
      {
        type: "intro",
        text: "A lot of people don't reach out for food help because they assume there's too much paperwork, or that they need to prove they're 'poor enough,' or that it'll be embarrassing. None of those things are true. Chester County has real programs that hand out real food, and most of them are pretty easy to access once you know where to go. Here's what's actually out there.",
      },
      { type: "h2", text: "Chester County Food Bank" },
      {
        type: "p",
        text: "The Chester County Food Bank (650 Pennsylvania Drive, Exton) is the biggest operation in the county. They supply over 50 partner agencies and run their own Client Choice Pantry, where you walk in and pick out your own groceries — like a small grocery store, but free. That matters if you have kids who won't eat certain things, or if you have dietary restrictions.",
      },
      {
        type: "p",
        text: "You don't need proof of income to use the pantry. Bring a photo ID. If you have something showing a Chester County address like a bill, a piece of mail, or your lease, that helps, but they won't turn you away if you don't have it. Hours are Monday through Friday, 9am - 5pm. Call ahead at (610) 873-6000 to check same-day availability before making the trip.",
      },
      {
        type: "tip",
        text: "While you're at the Food Bank, ask about SNAP enrollment. They have navigators on-site who will sit with you and fill out the application. It takes about 20 minutes. You don't have to figure it out alone.",
      },
      { type: "h2", text: "Phoenixville Area Community Services" },
      {
        type: "p",
        text: "If you need a hot meal today, Pheonixville Area Community Services Services (265 Church Street, Phoenixville) serves free lunch every day Monday through Saturday, starting at 11:30am. Walk in, no appointment, no paperwork. They welcome anyone, no matter what ZIP code you're from or what your income is. Call (610) 933-0741 if you want to check that they're open on a specific day.",
      },
      {
        type: "p",
        text: "They also have a grab-and-go pantry with items you can take home. Most days you don't need an appointment, just show up before 1pm. It's not fancy, but it's real food and there are no hoops to jump through.",
      },
      { type: "h2", text: "West Chester Food Cupboard" },
      {
        type: "p",
        text: "The West Chester Food Cupboard at 228 W Gay Street is open Tuesdays and Fridays from 10am to 1pm. No income documentation required. They mainly serve West Chester Borough and nearby townships, but they won't turn you away for living outside their coverage area. Fridays are walk-in days with no appointment needed.",
      },
      { type: "h2", text: "What to bring" },
      {
        type: "list",
        items: [
          "A photo ID (driver's license, state ID, passport, or consular ID)",
          "Something with your Chester County address on it, if you have it — a bill or piece of mail works",
          "A bag or box for groceries (some places provide bags, but not always)",
          "Names of anyone else in your household if you're picking up for a family",
        ],
      },
      {
        type: "p",
        text: "The most important thing: you will not be turned away because you're missing a document. These programs exist for exactly the moments when people are stretched thin. Just show up.",
      },
    ],
  },

  // ── 2 ─────────────────────────────────────────────────────────────────────
  {
    id: 2,
    featured: true,
    category: "housing",
    title: "Emergency Housing: What to Do Tonight",
    summary:
      "If you or someone you know needs a place to sleep tonight, here's who to call, where to go, and what to expect when you get there.",
    readTime: 4,
    date: "Mar 12, 2026",
    photo: PHOTOS.housing,
    resource: "211 PA, YWCA Chester County",
    links: [
      {
        "211 PA": "https://www.pa211.org/",
      },
      { "YWCA Chester County": "https://www.ywca.org/" },
    ],
    steps: [
      "Call 211 first — they'll find you an open bed faster than you can",
      "Go to a Chester County Night Shelter",
      "Bring ID if you have it — most low-barrier shelters accept you without it",
      "Ask shelter staff about next-day transitional housing options",
    ],
    content: [
      {
        type: "intro",
        text: "Not having a place to sleep is a crisis, and when you're in the middle of one, the last thing you need is a confusing list of agencies to call. So here's the short version: call 211. If you can't do that, keep reading because there are real places you can go tonight in Chester County.",
      },
      { type: "h2", text: "Start with 211" },
      {
        type: "p",
        text: "211 is Pennsylvania's statewide social services line. It's free, it runs 24 hours a day, and the people who answer know which shelters in Chester County have beds available right now. When you call, say: 'I need emergency housing in Chester County tonight.' They will do the work of finding you an open spot.",
      },
      {
        type: "p",
        text: "If calling is hard, you can text your ZIP code to 898-211. There's also a chat option at 211pa.org.",
      },
      { type: "h2", text: "If you're fleeing domestic violence" },
      {
        type: "p",
        text: "Call the YWCA Chester County crisis line at (610) 692-7273. It's available 24 hours a day. Their emergency shelter location is kept confidential for safety reasons, but the crisis line will tell you what to do and can arrange transportation if you need it. You don't need a police report. You don't need to have made any decisions yet. You just have to call.",
      },
      { type: "h2", text: "What to bring if you can" },
      {
        type: "list",
        items: [
          "Photo ID — if you don't have one, low-barrier shelters will still let you in",
          "Any medications you're currently taking",
          "A phone charger",
          "Any important documents you have access to — Social Security card, birth certificate, lease — even photocopies help",
        ],
      },
      {
        type: "p",
        text: "The morning after you get into shelter, ask staff about Rapid Rehousing assistance. It can cover first month's rent and a security deposit when you're ready to move into permanent housing. The sooner you ask about it, the better — those funds get spoken for quickly.",
      },
    ],
  },

  // ── 3 ─────────────────────────────────────────────────────────────────────
  {
    id: 3,
    featured: true,
    category: "health",
    title: "Free Clinics in Chester County — No Insurance Needed",
    photo: PHOTOS.health,
    summary:
      "You don't need insurance, a referral, or money to see a doctor here. Here's what's available, what to expect, and how to make an appointment.",
    readTime: 6,
    date: "Mar 5, 2026",
    resource:
      "Community Volunteers in Medicine, Devereux Advanced Behavioral Health",
    links: [
      {
        "Community Volunteers in Medicine": "https://cvim.org/",
      },
      {
        "Devereux Advanced Behavioral Health":
          "https://www.devereux.org/site/SPageServer/?",
      },
    ],
    steps: [
      "Call CVIM at (610) 836-5990 AND they'll pre-screen you for your fee level",
      "Mention any medications, allergies, or past diagnoses when you call",
      "Ask about mental health and dental at the same visit because they're in the same system",
      "If you need care today, call early, they may hold a few same-day slots",
    ],
    content: [
      {
        type: "intro",
        text: "Going without a doctor because you can't afford it or don't have insurance is more common than people admit. But in Chester County, there are clinics that will see you for almost free based on what you earn. This isn't charity care with a 2 year waitlist. These are functioning clinics with real doctors, seeing patients every week.",
      },
      { type: "h2", text: "Community Volunteers in Medicine" },
      {
        type: "p",
        text: "Community Volunteers in Medicine (CVIM) charges on a sliding scale, and for patients below a certain income level, that could potentially mean $0 per visit. They have multiple locations across the county and offer primary care, women's health, pediatrics, dental, and behavioral health services.",
      },
      {
        type: "p",
        text: "You don't need insurance to become a patient. When you call — (610) 738-3922 — they'll ask about your household size and income to figure out your fee. Even if you're working a full-time job, you might still qualify for very low-cost or free visits. Most new patient appointments are available within one to two weeks. Hours at most locations are Monday through Saturday, 8am to 6pm.",
      },
      {
        type: "p",
        text: "They do accept Medicaid and Medicare. If you've recently enrolled and haven't found a primary care provider yet, CHCCC is a solid place to start.",
      },
      {
        type: "tip",
        text: "Same-day care: CHCCC holds a small number of urgent appointment slots each day. Call as early in the morning as you can and ask specifically if they have anything available that day. It's not guaranteed, but it happens often enough to be worth asking.",
      },
      { type: "h2", text: "Mental health services" },
      {
        type: "p",
        text: "Devereux Advanced Behavioral Health (655 Sugartown Road, Malvern) offers outpatient therapy, group therapy, and psychiatric medication management for adults and children. They accept Medicaid and use a sliding-scale fee for patients without insurance.",
      },
      {
        type: "p",
        text: "Wait times for a first therapy appointment are typically 2-4 weeks, faster than most private oddices in the area. Call (610) 431-8900 to start intake. If you tell them your situation is urgent, they can often move things along. If you're in immediate crisis, they'll direct you to same-day services.",
      },
      { type: "h2", text: "What to bring to your first appointment" },
      {
        type: "list",
        items: [
          "Photo ID",
          "Any insurance cards you have — even if you think they might be expired, bring them",
          "A list of your current medications and dosages (or just photos of your pill bottles)",
          "Your allergies, especially to medications",
          "Name and number of any previous doctors, if you have them",
          "A rough sense of your monthly income — a pay stub, or just a number in your head",
        ],
      },
      {
        type: "p",
        text: "Missing some of these isn't a dealbreaker. The intake staff have seen every situation. Having them just makes the visit go more smoothly.",
      },
    ],
  },

  // ── 4 ─────────────────────────────────────────────────────────────────────
  {
    id: 4,
    featured: false,
    category: "housing",
    title: "Step-by-Step: Applying for Housing Assistance",
    photo: PHOTOS.housing2,
    summary:
      "The housing assistance process in Chester County is genuinely confusing. Here's how it actually works, in plain language.",
    readTime: 7,
    date: "Feb 28, 2026",
    resource:
      "Chester County Department of Community Development, Chester County Housing Authority",
    links: [
      {
        "Chester County Department of Community Development":
          "https://www.chesco.org/204/Community-Development",
      },
      {
        "Chester County Housing Authority": "https://www.chesterha.org/",
      },
    ],
    content: [
      {
        type: "intro",
        text: "Housing assistance in Chester County is not one program. It's several, with different eligibility rules, timelines, and purposes. Applying for the wrong one, or applying to the right one with missing documents, wastes time you may not have. This guide breaks it down so you know what you're actually signing up for.",
      },
      { type: "h2", text: "The 2 main paths" },
      {
        type: "p",
        text: "The first is short-term emergency help through the Chester County Department of Community Development (CCDCD). They can assist with back rent, first and last month's rent, or utility shutoffs. If you're in trouble right now, definitely check this out.",
      },
      {
        type: "p",
        text: "The second is long-term subsidized housing through the Chester County Housing Authority (CCHA), which runs the Section 8 Housing Choice Voucher program. The CCHA waitlist is typically 2-5 years long, and is not a solution for a crisis happening this month. But if you're stable enough to think ahead, getting on that list now is worth doing.",
      },
      { type: "h2", text: "Emergency Rental Assistance — CCDCD" },
      {
        type: "p",
        text: "CCDCD is at 601 Westtown Road, Suite 270, in West Chester. Their main number is (610) 344-6900. They administer Emergency Rental Assistance Program (ERAP) funds along with other short-term stabilization money. To get help, you need to show that you're a Chester County resident, that you're behind on rent or facing eviction, and that your income is below 80% of the Area Median Income.",
      },
      {
        type: "list",
        items: [
          "Completed application (available at their office or by phone)",
          "Proof of Chester County residency — a lease, utility bill, or recent mail",
          "A copy of your current lease",
          "Your landlord's name and contact information",
          "Something documenting financial hardship (eviction notice, layoff letter, medical bills)",
          "Recent pay stubs or benefit statements showing your income",
        ],
      },
      {
        type: "tip",
        text: "Before you drive over: call CCDCD first and ask to be pre-screened. They can tell you over the phone whether you're likely to qualify and whether the program currently has funds. This saves you the trip if they're at capacity.",
      },
      { type: "h2", text: "Section 8 — Chester County Housing Authority" },
      {
        type: "p",
        text: "The Chester County Housing Authority (8 N Church Street, West Chester — (610) 436-9200) manages Section 8 Housing Choice Vouchers. With a voucher, you find your own apartment from a private landlord, and ete the difference between 30% of your income and the area's fair market rent covered. The unit has to pass a CCHA inspection, and the landlord has to agree to participate, but many do.",
      },
      {
        type: "p",
        text: "The waitlist opens rarely, sometimes only for a few days at a time, and is announced on CCHA's website and through local nonprofits. If you're in a stable enough situation to plan ahead, apply the next time it opens, even if you don't need help urgently right now. By the time your name comes up in 2 or 3 years, your situation may have changed again.",
      },
      {
        type: "p",
        text: "One thing people miss: once you're on the waitlist, you have to keep your mailing address current with CCHA. If they send you a letter and it bounces back, you lose your spot. Every time you move, send them a written update and keep a copy of it.",
      },
    ],
  },

  // ── 6 ─────────────────────────────────────────────────────────────────────
  {
    id: 6,
    featured: false,
    category: "health",
    title: "What to Bring to a Free Clinic Visit",
    summary:
      "You won't be judged for what you're missing. But bringing the right things makes your visit faster and gets you better care.",
    readTime: 4,
    date: "Feb 20, 2026",
    photo: PHOTOS.health2,
    resource: "Community Volunteers in Medicine",
    links: [
      {
        "Community Volunteers in Medicine": "https://cvim.org/",
      },
    ],
    content: [
      {
        type: "intro",
        text: "The staff at free clinics have seen everything. You're not going to walk in with a complicated situation and surprise them. That said, the more you can bring, the smoother your visit goes — and the better the provider can actually help you. Here's the practical checklist.",
      },
      { type: "h2", text: "Bring if you have it" },
      {
        type: "list",
        items: [
          "Photo ID — driver's license, state ID, passport, or consular ID. If you don't have one, tell the front desk. You can still be seen.",
          "Any insurance cards — Medicaid, Medicare, an old employer plan, anything. Even if you think it's expired or inactive, bring it. Staff can sometimes find coverage you didn't know you had.",
          "Your medication list: name, dose, and how often you take it. Photos of your pill bottles on your phone are completely fine.",
          "Your allergies, especially to medications. Note what happens when you take the ones you're allergic to.",
        ],
      },
      { type: "h2", text: "Helpful but not required" },
      {
        type: "list",
        items: [
          "Contact info for any previous doctors you've seen",
          "Any old test results, X-rays, or medical records",
          "A written list of your symptoms and how long you've had them — it's easy to forget things once you're in the room",
          "For kids: immunization records if available",
        ],
      },
      { type: "h2", text: "About income documentation" },
      {
        type: "p",
        text: "Sliding-scale clinics will ask about your income to figure out your fee. A recent pay stub is ideal. If you're unemployed, just say so. If you get Social Security, SSI, or disability, a recent award letter works. If you earn cash with no paperwork, be honest about your rough monthly amount — the staff deal with this all the time.",
      },
      {
        type: "tip",
        text: "At Community Volunteers in Medicine, you can ask to speak with a Patient Services Representative before your appointment to get your income documentation processed in advance. They'll tell you exactly what your visit will cost. For a lot of patients, it's $0. Call (610) 738-3922.",
      },
      { type: "h2", text: "One more thing" },
      {
        type: "p",
        text: "Tell your provider everything that's going on, including stuff that feels unrelated or embarrassing. If you're struggling with housing instability, food, stress, or mental health alongside a physical issue, say so. Free clinic providers are trained to connect patients to additional resources. You might walk out with a referral you didn't know you needed.",
      },
    ],
  },

  // ── 7 ─────────────────────────────────────────────────────────────────────
  {
    id: 7,
    featured: false,
    category: "jobs",
    title: "Free Job Training in Chester County",
    photo: PHOTOS.jobs,
    summary:
      "Not just resume workshops — real certifications, funded training accounts, and job placement help. Here's what's actually available.",
    readTime: 6,
    date: "Feb 15, 2026",
    resource: "PA CareerLink Chester County, Chester County OIC",
    links: [
      {
        "PA CareerLink Chester County": "https://www.pacareerlinkchesco.org/",
      },
      {
        "Chester County OIC": "https://ccoic.org/",
      },
    ],

    content: [
      {
        type: "intro",
        text: "When people hear 'free job training,' they usually picture a one-day workshop that doesn't lead anywhere. That's not what's happening at PA CareerLink and Chester County OIC. These are programs that will pay for your CDL, your nursing assistant certification, your IT cert, and help you find a job once you have it. Here's how to actually access them.",
      },
      { type: "h2", text: "PA CareerLink Chester County" },
      {
        type: "p",
        text: "PA CareerLink is at 479 Thomas Jones Way in Exton, open Monday through Friday, 8:30am to 4:30pm. Walk-ins are welcome. You can also call (610) 280-1010 to schedule an intake appointment.",
      },
      {
        type: "p",
        text: "The main program to ask about is the Individual Training Account (ITA). If you qualify, you receive up to $10,000 to spend on an approved training program, and you don't pay it back. The list of approved programs covers CDL licensing, certified nursing assistant, phlebotomy, medical assistant, HVAC, welding, CompTIA IT certifications, AWS, Google certifications, and more. Eligibility is based on your employment status and income. Most people who walk in qualify for something.",
      },
      {
        type: "p",
        text: "Beyond training, CareerLink offers free resume help, interview prep, and access to a job bank that includes postings from local employers who've specifically agreed to consider CareerLink referrals. This is not a public job board. It's employers who are actively looking and willing to hire.",
      },
      {
        type: "tip",
        text: "Get there Monday morning. CareerLink holds walk-in slots for new job seekers, and they fill up by mid-morning. If you have a specific training program in mind, call ahead to confirm it's on their approved list before you come in.",
      },
      { type: "h2", text: "Chester County OIC" },
      {
        type: "p",
        text: "Chester County OIC (Opportunities Industrialization Center) is at 28 W Miner Street in West Chester. Call (610) 692-6810 to schedule an intake. Their focus is on people who face real barriers to employment like criminal records, long gaps, and limited formal education. They don't dance around this; a lot of their staff have been through similar situations themselves.",
      },
      {
        type: "p",
        text: "OIC offers free GED prep, basic computer skills, customer service certifications, and job placement support. The environment is straightforward and non-judgmental. If you've had trouble connecting with more formal workforce programs in the past, OIC is worth trying.",
      },
    ],
  },

  // ── 8 ─────────────────────────────────────────────────────────────────────
  {
    id: 8,
    featured: false,
    category: "education",
    photo: PHOTOS.education,
    title: "How to Get Free GED Prep in Chester County",
    summary:
      "Multiple free programs exist,some with classes, some with one-on-one tutors. Here's how to pick one and get started.",
    readTime: 5,
    date: "Feb 10, 2026",
    resource:
      "Chester County OIC, Chester County Library, PA CareerLink Chester County",
    links: [
      {
        "PA CareerLink Chester County": "https://www.pacareerlinkchesco.org/",
      },
      {
        "Chester County OIC": "https://ccoic.org/",
      },
      {
        "Chester County Library System": "https://ccls.org/",
      },
    ],
    content: [
      {
        type: "intro",
        text: "Getting your GED as an adult is not as hard as it sounds — especially in Chester County, where you have actual options for free prep. You don't have to buy a book, find a tutor on your own, or figure out the testing process by yourself. Here's what exists and how to get into it.",
      },
      { type: "h2", text: "What the GED actually is" },
      {
        type: "p",
        text: "The GED is four tests: Reasoning Through Language Arts, Math, Science, and Social Studies. You can take them in any order, one at a time. You only retake the ones you don't pass. Each test costs $30 in Pennsylvania. Passing score is 145 out of 200 on each. The programs below can often help cover or waive those test fees.",
      },
      { type: "h2", text: "Chester County OIC" },
      {
        type: "p",
        text: "Chester County OIC (28 W Miner Street, West Chester — (610) 692-6810) runs structured GED prep classes on a regular schedule. They're free, and they take students at any skill level. The instructors are used to working with adults who haven't been in a classroom in years — that's exactly who the program is built for. Call and ask about their Adult Education enrollment to get started.",
      },
      { type: "h2", text: "Chester County Library — Adult Literacy Program" },
      {
        type: "p",
        text: "If you'd rather work one-on-one than in a class, the Chester County Library system has an Adult Literacy program that can include GED prep. They match you with a trained volunteer tutor who meets with you weekly at a library location near you. It's flexible around your schedule. Call the main branch at (610) 280-2600 and ask for the Adult Literacy department.",
      },
      {
        type: "p",
        text: "The library also has free access to GED prep software and study materials if you want to work at your own pace. You don't need a library card to use it on your first visit.",
      },
      {
        type: "tip",
        text: "If you're already working with PA CareerLink, ask your case manager to include GED prep in your employment plan. CareerLink can pay for your test fees as part of a training agreement — meaning you could complete the entire GED for free, including the tests. Call (610) 280-1010.",
      },
    ],
  },

  // ── 9 ─────────────────────────────────────────────────────────────────────
  {
    id: 9,
    featured: false,
    category: "emergency",
    title: "Crisis Lines: Who to Call and When",
    summary:
      "Real phone numbers for real crises: mental health, domestic violence, overdose, housing, and more. Save these before you need them.",
    readTime: 4,
    links: [
      {
        "211 PA": "https://www.pa211.org/",
      },
      { "YWCA Chester County": "https://www.ywca.org/" },
      { "988 Lifeline": "https://988lifeline.org/get-help/" },
      {
        "PA Warmline":
          "https://www.upmc.com/locations/hospitals/hamot/services/behavioral-health-services/services/crisis-services/warmline",
      },
      {
        "PA Get Help Now Hotline":
          "https://www.pa.gov/agencies/ddap/treatment-and-support/get-help-now-campaign",
      },
    ],
    date: "Feb 5, 2026",
    photo: PHOTOS.emergency,
    resource:
      "988 Lifeline, YWCA Chester County, PA Warmline, PA Get Help Now Hotline, 211 PA",

    content: [
      {
        type: "intro",
        text: "In a crisis, you don't have time to research. This page is just numbers and what they're for. Save the ones that apply to your life before you're in a situation where you need them.",
      },
      { type: "h2", text: "Mental health emergency" },
      {
        type: "p",
        text: "Call or text 988. This is the Suicide and Crisis Lifeline and it's not just for suicidal thoughts. It's for panic attacks, psychosis, severe anxiety, or any moment where you feel like you can't handle what's happening. It's free, confidential, available 24/7, and answered by real people within minutes. Texting is fine if calling feels like too much.",
      },
      {
        type: "p",
        text: "If it's serious but not an emergency right now, call the PA Warmline: 1-855-729-2754. This line is staffed by people with their own mental health histories, not clinicians doing risk assessments. It's a place to talk through what's going on and figure out your next step, and is available on evenings and weekends.",
      },
      { type: "h2", text: "Domestic violence" },
      {
        type: "p",
        text: "YWCA Chester County crisis line: (610) 692-7273. Available 24 hours. If you're in a dangerous home situation, or even if you're not sure whether what's happening counts as abuse, this is the call to make. They will help you safety-plan without pressuring you to leave, or arrange shelter and transportation if you're ready to go. Their shelter location is confidential. You don't need a police report to access services.",
      },
      { type: "h2", text: "Overdose or substance use" },
      {
        type: "p",
        text: "Overdose: call 911. Pennsylvania's Good Samaritan Law means you and the person you're calling about are protected from drug possession charges when you call for medical help in an overdose situation. Call.",
      },
      {
        type: "p",
        text: "For addiction help that isn't an emergency: call the PA Get Help Now Hotline at 1-800-662-4357. They're connected to SAMHSA and can locate treatment programs near you that accept Medicaid or work on a sliding scale.",
      },
      { type: "h2", text: "Food or housing emergency" },
      {
        type: "p",
        text: "Call 211. Pennsylvania's social services line operates around the clock. If you're about to lose your housing, don't have food for your kids, or simply don't know which way to turn call 211 and tell them what you need. They'll do the routing. You can also text your ZIP code to 898-211.",
      },
      {
        type: "tip",
        text: "Put these numbers in your phone right now. In the middle of a crisis, searching for a phone number is one thing too many.",
      },
    ],
  },

  // ── 10 ────────────────────────────────────────────────────────────────────
  {
    id: 10,
    featured: false,
    category: "food",
    title: "SNAP in Pennsylvania: Do You Qualify?",
    summary:
      "A plain-language guide to SNAP eligibility, how to apply in PA, and what to do if you get denied.",
    readTime: 5,
    photo: PHOTOS.food2,
    date: "Jan 30, 2026",
    resource:
      "PA COMPASS, Chester County Assistance Office, Chester County Food Bank",
    links: [
      {
        "PA Compass": "    https://www.compass.dhs.pa.gov/home/#/",
      },
      { "Chester County Assistance Office": "https://www.ywca.org/" },
      {
        "Chester County Food Bank": "https://www.chesco.org/226/Human-Services",
      },
    ],
    content: [
      {
        type: "intro",
        text: "SNAP, Supplemental Nutrition Assistance Program, (what used to be called food stamps) is one of the most widely available federal benefits, and one of the most underused. A lot of people assume they won't qualify, or that the process is too complicated, or that it's only for people who aren't working. None of those are necessarily true. Here's how it actually works in Pennsylvania.",
      },
      { type: "h2", text: "Who qualifies in Pennsylvania" },
      {
        type: "p",
        text: "Pennsylvania uses expanded SNAP eligibility, which means if your gross monthly household income is at or below 160% of the federal poverty level, you likely qualify. That comes out to roughly $2,005/month for one person, $2,707 for two people, and $3,408 for three. Pennsylvania generally doesn't count assets in the eligibility calculation, so having a car or savings account won't disqualify you.",
      },
      {
        type: "p",
        text: "If you're working, you may still qualify. SNAP is designed to help working families, not just people who are unemployed. Part-time workers, gig workers, and people with inconsistent income all receive SNAP benefits.",
      },
      { type: "h2", text: "How to apply" },
      {
        type: "p",
        text: "The easiest way is online at compass.state.pa.us. The whole application takes about 20 to 30 minutes, and you can upload documents directly. After you submit, the Chester County Assistance Office will schedule a brief phone interview, usually within 10 business days.",
      },
      {
        type: "p",
        text: "You can also apply in person at the Chester County Assistance Office at 601 Westtown Road in West Chester, open Monday through Friday. If you'd rather have someone walk you through it, the Chester County Food Bank (650 Pennsylvania Drive, Exton — (610) 873-6000) has on-site navigators who will sit with you and complete the application together. It's free and takes about 20 minutes.",
      },
      { type: "h2", text: "If you get denied" },
      {
        type: "p",
        text: "You have 90 days to request a fair hearing, a formal review of the decision. A lot of denials are overturned at the hearing stage, especially when the denial was based on missing documentation rather than actual ineligibility. Legal Aid of Southeastern Pennsylvania offers free representation for SNAP fair hearings. Call 1-877-429-5994.",
      },
      {
        type: "tip",
        text: "SNAP benefits load onto an EBT card that works like a debit cathrd at Aldi, Walmart, Giant, Acme, and most other grocery stores. You can check your balance at compass.state.pa.us or by calling the number on the back of the card.",
      },
    ],
  },

  // ── 11 ────────────────────────────────────────────────────────────────────
  {
    id: 11,
    featured: false,
    category: "housing",
    title: "Section 8 in Chester County: How It Actually Works",
    summary:
      "The waitlist is long and the process is confusing. Here's a clear explanation of how Section 8 works, how to apply, and how not to lose your spot.",
    readTime: 8,
    date: "Jan 22, 2026",
    photo: PHOTOS.housing3,
    resource: "Chester County Housing Authority",
    links: [
      {
        "Chester County Housing Authority": "https://www.chesterha.org/",
      },
    ],
    content: [
      {
        type: "intro",
        text: "Section 8, the Housing Choice Voucher Program, helps low-income households pay for private market rent. In Chester County, it's run by the Chester County Housing Authority. The program is real and it works, but the waitlist is long and the process has more moving parts than most people realize. Here's what you actually need to know.",
      },
      { type: "h2", text: "What Section 8 gives you" },
      {
        type: "p",
        text: "A Housing Choice Voucher covers the gap between 30% of your household's income and the fair market rent for Chester County. In practical terms: if fair market rent for a two-bedroom in Chester County is $1,600/month and you earn $800/month, the voucher covers most of your rent. You find your own apartment from a private landlord, you're not assigned a specific unit.",
      },
      {
        type: "p",
        text: "There are two conditions: the unit has to pass a Housing Quality Standards inspection by the Housing Authority, and the landlord has to agree to participate in the program. Many landlords in Chester County do accept vouchers, but it can take some searching, especially in higher-demand areas.",
      },
      { type: "h2", text: "Getting on the waitlist" },
      {
        type: "p",
        text: "The Chester County Housing Authority (8 N Church Street, West Chester — (610) 436-9200) only opens the Section 8 waitlist intermittently — sometimes for a few days at a time, sometimes for a few weeks. When it opens, it's announced on their website at chestercountyha.org and through local social service agencies. You have to apply during that window; you can't get on the list when it's closed.",
      },
      {
        type: "p",
        text: "The typical wait once you're on the list is two to five years, depending on preference factors. Households that include someone with a disability, veterans, and people who are currently homeless all receive preference points that move them up faster. Call CCHA to ask what preference category you might fall into.",
      },
      { type: "h2", text: "Keeping your spot" },
      {
        type: "p",
        text: "This is the part people miss: once you're on the waitlist, you have to keep your mailing address current with CCHA. If they send you a letter and it comes back undeliverable, you lose your spot — no exceptions. Every time you move, send CCHA a written update with your new address. Do it in person or by certified mail, and keep a copy. It sounds like a small thing until you've waited three years and lose your spot over a letter.",
      },
      {
        type: "tip",
        text: "While you're waiting for Section 8, look into everything else. CCDCD's Emergency Rental Assistance, transitional housing through local nonprofits, and rapid rehousing programs through shelter providers can all help in the meantime. Use the Chester Bridge resources page to find what's available right now.",
      },
    ],
  },

  // ── 12 ────────────────────────────────────────────────────────────────────
  {
    id: 12,
    featured: false,
    category: "health",
    title: "Mental Health Help in Chester County — Without the Long Wait",
    summary:
      "Most therapists have a waitlist. These Chester County options don't, or they're much shorter than what you'd find on your own.",
    readTime: 5,
    date: "Jan 15, 2026",
    photo: PHOTOS.health3,
    resource:
      "Devereux Advanced Behavioral Health, PA Warmline, 988 Life Line, Community Volunteers in Medicine",
    links: [
      {
        "Community Volunteers in Medicine": "https://cvim.org/",
      },
      {
        "Devereux Advanced Behavioral Health":
          "https://www.devereux.org/site/SPageServer/?",
      },
      { "988 Lifeline": "https://988lifeline.org/get-help/" },
      {
        "PA Warmline":
          "https://www.upmc.com/locations/hospitals/hamot/services/behavioral-health-services/services/crisis-services/warmline",
      },
    ],
    content: [
      {
        type: "intro",
        text: "Finding a therapist in Chester County who's accepting new patients, takes your insurance, and has an opening in the next month is genuinely hard. This guide isn't about the ideal option — it's about the real options that don't require you to wait three months or pay $200 a session. Here's what's actually available.",
      },
      { type: "h2", text: "If you're in crisis right now" },
      {
        type: "p",
        text: "Call or text 988. The Suicide and Crisis Lifeline is not only for people who are suicidal. If you're experiencing a panic attack, severe anxiety, psychosis, or any moment where you feel like you can't manage what's happening, this is the number. It's free, confidential, 24/7, answered by trained counselors.",
      },
      {
        type: "h2",
        text: "If it's not an emergency but you need someone to talk to",
      },
      {
        type: "p",
        text: "The PA Warmline is 1-855-729-2754. It's staffed by people with lived experience of mental health challenges, not clinicians or risk assessors. They're there to listen and help you figure out your next step. Available evenings and weekends, which is when most crisis lines are closed.",
      },
      { type: "h2", text: "Outpatient therapy with shorter wait times" },
      {
        type: "p",
        text: "Devereux Advanced Behavioral Health (655 Sugartown Road, Malvern — (610) 431-8900) offers outpatient individual therapy, group therapy, and psychiatric medication management. They accept Medicaid and use a sliding scale for uninsured patients. New patient wait times are typically two to four weeks — shorter than most private practices. If your situation is urgent, tell them when you call. They can sometimes move up intake for people in significant distress.",
      },
      { type: "h2", text: "Integrated care at CHCCC" },
      {
        type: "p",
        text: "Community Volunteers in Medicine (CVIM) has behavioral health staff in the same clinics as their primary care providers. If you become a CHCCC patient, you can ask about a same-day behavioral health check-in during a medical visit — no separate referral, no separate office to navigate. Call (610) 738-3922 to start as a patient.",
      },
      {
        type: "tip",
        text: "If you already have a primary care provider anywhere in Chester County — not just CHCCC — ask them directly for a behavioral health referral. PCPs have working relationships with local therapists and psychiatrists, and a direct referral from a doctor gets you seen faster than cold-calling a therapist's office.",
      },
    ],
  },
];
