/* All site copy and data. Pages read from this file, so text changes happen here.
   Positioning: MwegaTech is a business systems consultancy for established founders. */

export const siteConfig = {
  companyName: "MwegaTech",
  tagline: "Better systems. Better business.",
  description: "MwegaTech is a business systems consultancy for established founders. We connect your processes, data and technology so your business runs better, makes better decisions and grows with confidence.",
  location: "Embu, Kenya",
  formerly: "Comrades Market", brochure: "/downloads/comrades-market-services-brochure.pdf",
  // Training video: paste a YouTube or Vimeo link, or a file path such as "/videos/training-video.mp4". Empty hides the section.
  trainingVideo: "/videos/training-video.mp4", trainingVideoTitle: "Digital marketing and online business training at a local church",
  email: "hello@mwega.com", phone: "0718 367 110", phoneHref: "tel:+254718367110", whatsapp: "https://wa.me/254718367110", address: "", linkedin: "https://www.linkedin.com/company/comradesmarketke", instagram: "https://www.instagram.com/comradesmarket", facebook: "https://www.facebook.com/comradesmarketKE",
};

export const brand = { legacy: "/brand/comrades-market-logo.png" };

/* Calls to action. Keep these three consistent across the site. */
export const cta = {
  consult: ["Book a Business Systems Consultation", "/contact"],
  diagnostic: ["Start With a Business Systems Diagnostic", "/diagnostic"],
  discuss: ["Discuss Your Business Challenge", "/contact"],
  approach: ["Explore Our Approach", "/our-approach"],
};

/* The four consulting capabilities. They are one engagement, not four businesses. */
export const solutions = [
  { slug: "business-systems", name: "Business Systems & Process Improvement", short: "Business Systems", homeName: "Business Systems",
    homeText: "Design and improve the processes, workflows and operational structures that keep the business running.",
    problem: "Work depends on individuals, habit and the founder's memory. Quality varies from person to person, and every new customer adds more effort instead of more output.",
    does: "We map how work really flows, find the bottlenecks and duplication, then redesign processes, roles and handovers so the business runs consistently without constant founder input.",
    how: "We begin with one or two core processes. We document the current flow, agree the redesign with your team, and set out ownership, handovers and the measures that show it is working.",
    outcome: "Consistent operations, clear ownership and a business that no longer waits on you for every decision.",
    topic: "Business processes and operations" },
  { slug: "business-intelligence", name: "Data & Business Intelligence", short: "Business Intelligence", homeName: "Business Intelligence",
    homeText: "Connect business information and turn it into useful insights for better decisions.",
    problem: "The numbers exist in the accounting package, the spreadsheets, the M-Pesa statements and the CRM. Nobody sees one reliable picture, so decisions lean on instinct.",
    does: "We connect and clean the information you already hold, agree the measures that matter and build reporting and dashboards your management team can trust.",
    how: "We list the decisions you need to make, trace where the data lives, agree definitions with the people who use them, then build reports in tools you already use or can sensibly adopt.",
    outcome: "Management visibility across the business, faster reporting and decisions backed by figures people agree on.",
    topic: "Reporting and business intelligence" },
  { slug: "digital-systems", name: "Digital Systems & Integration", short: "Digital Systems", homeName: "Digital Systems",
    homeText: "Improve the technology, platforms and integrations supporting daily operations.",
    problem: "Too many disconnected tools, data typed in more than once, and software bought that never changed how the work gets done.",
    does: "We review the platforms behind daily operations, decide what to keep, connect, replace or leave alone, and integrate them around your processes.",
    how: "Technology follows process. We choose and configure tools against the requirements found in the diagnostic, then integrate, migrate and support the rollout with your team.",
    outcome: "Systems that share information, less duplicate entry and technology that earns what it costs.",
    topic: "Software and system integration" },
  { slug: "ai-automation", name: "AI & Workflow Automation", short: "AI & Automation", homeName: "AI & Automation",
    homeText: "Identify repetitive work and introduce practical automation that saves time and improves consistency.",
    problem: "Repetitive, rule-based work takes up your team's week, while AI stays an abstract promise that nobody has pointed at a real task.",
    does: "We find the repetitive work worth automating, then introduce practical automation and AI assistance, with a person still approving what matters.",
    how: "We start with one workflow, test it on real work, measure the time it saves and extend only when the result holds up.",
    outcome: "Time returned to your team, more consistent output and automation you can explain and control.",
    topic: "Automation and AI" },
];
export const getSolution = (slug) => solutions.find((s) => s.slug === slug);

export const navLinks = [["Home", "/"], ["What We Solve", "/what-we-solve"], ["Our Approach", "/our-approach"], ["About MwegaTech", "/about"], ["Resources", "/resources", [["Insights", "/insights"], ["The Business Clinic", "/resources#training"], ["Case Studies", "/case-studies"], ["SME Data & AI Toolkit", "/resources#toolkit"]]], ["Contact", "/contact"]];

export const footerCols = [
  ["Work with us", [["What We Solve", "/what-we-solve"], ["Our Approach", "/our-approach"], ["Business Systems Diagnostic", "/diagnostic"], ["Contact", "/contact"]]],
  ["Company", [["About MwegaTech", "/about"], ["Our Story", "/about#story"], ["Case Studies", "/case-studies"], ["Insights", "/insights"]]],
  ["Learn", [["Resources", "/resources"], ["Training and workshops", "/resources#training"], ["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"]]],
];
export const socials = [["LinkedIn", "linkedin"], ["Instagram", "instagram"], ["Facebook", "facebook"], ["WhatsApp", "whatsapp"]];

export const hero = {
  eyebrow: "BUSINESS SYSTEMS CONSULTANCY",
  title: "Your business has grown. Have your systems?",
  lead: "We help established founders connect their operations, data and technology to build businesses that work better.",
};

export const problem = {
  title: "Growth should make business better. Not more complicated.",
  lead: ["What worked when your business was smaller may now be slowing it down.", "You have more customers, more transactions, more people and more moving parts.", "But information is scattered, processes are inconsistent and too many decisions still depend on you."],
  items: [
    ["Your operations rely too heavily on you.", "Approvals, answers and exceptions all end up on your desk."],
    ["Your systems do not communicate.", "The same figures are typed into three tools and none of them agree."],
    ["Your team spends too much time on manual work.", "Copying, chasing and checking take the hours that should go to customers."],
    ["You cannot easily see what is happening across the business.", "Answers to simple questions about sales, cash or stock take days."],
    ["Growth is creating more complexity instead of more efficiency.", "Each new customer or hire adds friction rather than capacity."],
  ],
  conclusion: "You do not necessarily need more software. You need better systems.",
};

export const solutionIntro = { title: "We make your business work better.", lead: "MwegaTech examines how your business actually operates, then improves the systems underneath it: the processes people follow, the information they rely on and the technology that connects the two.", note: "These four capabilities work together as one consulting engagement. We bring in only the ones your business needs." };

export const clientProfile = {
  title: "For founders building businesses that are ready for their next stage.",
  lead: "We work with established, owner-led businesses that have outgrown informal ways of running things. You will recognise your business if:",
  traits: ["You run an operating business with an established customer base.", "You have a team and recurring operations that need to run reliably.", "Operational complexity is growing faster than your systems.", "You depend too heavily on yourself to coordinate the day.", "Your information lives in spreadsheets, chats and disconnected tools.", "You want to scale without creating more operational chaos."],
  situationsTitle: "Situations where founders call us",
  situations: ["You opened a second branch or added a team, and each now works slightly differently.", "Finance, sales and operations data sit in separate tools, and month-end reporting takes days.", "A key employee is leaving and much of how the work gets done is in their head.", "You invested in software, but the team still runs on spreadsheets and WhatsApp.", "You are the person everyone asks before anything can move forward."],
  notFor: "This is not entrepreneurship coaching or a generic digital service. If you are still validating your first idea, our Resources and Insights are a better starting point.",
};

/* The consulting method, used on the home page and on Our Approach. */
export const stages = [
  { n: "01", name: "Diagnose", line: "Understand the business, its operations, systems, processes and information flows.",
    expect: ["Conversations with you and the people who run daily operations", "A walk through how key processes actually work today", "A review of the tools, reports and spreadsheets in use"], result: "A clear, shared picture of where time, money and information are being lost." },
  { n: "02", name: "Design", line: "Identify gaps and opportunities, then design a practical improvement roadmap.",
    expect: ["Redesigned processes and responsibilities", "Requirements for data, reporting and technology", "Priorities set by business impact and effort"], result: "A prioritised roadmap you can act on, with or without us." },
  { n: "03", name: "Implement", line: "Build, integrate or improve the systems and processes required.",
    expect: ["Workflows, dashboards, integrations and automation built to the design", "Your team trained on the new way of working", "Changes introduced in steps so daily operations keep running"], result: "Working systems your team uses, not documents that sit in a drawer." },
  { n: "04", name: "Optimise", line: "Measure results, improve performance and strengthen the systems over time.",
    expect: ["Agreed measures reviewed on a regular rhythm", "Adjustments as the business and its volumes change", "Support for the founder and team as new needs appear"], result: "Systems that keep improving as the business grows." },
];

/* Entry offer and client journey. No prices are published. */
export const diagnostic = {
  name: "Business Systems Diagnostic",
  lead: "A structured assessment of how your business currently operates, and the first step with MwegaTech.",
  areas: ["Business processes", "Operational workflows", "Data and reporting", "Technology and software", "Manual tasks and automation opportunities", "Management visibility", "Operational bottlenecks"],
  deliverable: "A prioritised Business Systems Improvement Roadmap that identifies the most important opportunities, the recommended actions and the order in which to implement them.",
  steps: [["A first conversation", "We hear what is slowing the business down and agree whether a diagnostic is the right next step."], ["Access and interviews", "We speak to the people who run daily operations and look at the processes, tools and reports they use."], ["Analysis", "We find the bottlenecks, duplication and information gaps, and weigh each by its impact on the business."], ["Roadmap walkthrough", "We take you through the findings and the prioritised roadmap, and answer your questions."]],
  need: ["Time with you and one or two people who run daily operations", "Access to the tools, reports and spreadsheets the business uses", "Honesty about what is not working"],
  terms: "Scope, timeline and fee are agreed in writing after the first conversation, once we understand the size and shape of your business. We do not promise specific results in advance.",
};

export const offers = [
  { n: "1", name: "Business Systems Diagnostic", tag: "Entry point", text: "Assess the existing business environment, identify operational weaknesses and produce a prioritised improvement roadmap.", href: "/diagnostic" },
  { n: "2", name: "Business Systems Design", tag: "Strategy", text: "Redesign business processes, workflows, information structures and operational systems." },
  { n: "3", name: "Systems Implementation", tag: "Delivery", text: "Implement or integrate the processes, digital tools, dashboards and automation workflows identified in the roadmap." },
  { n: "4", name: "Ongoing Systems Optimisation", tag: "Partnership", text: "Support the founder and team as the business evolves, monitoring performance and continuously improving the systems." },
];

export const finalCta = { title: "Build a business that works beyond you.", text: "Let's identify what is holding your business back and design the systems that will support its next stage of growth." };

export const philosophy = [
  ["Process before technology", "Software cannot fix a process nobody has agreed on. We settle how the work should flow first, then choose tools to fit."],
  ["Information people can trust", "A dashboard is only as good as the definitions behind it. We agree what each number means before we draw a chart."],
  ["Build it so it lasts", "Systems should work when you are out of the office. We design for the people who will run them and train them to do it."],
];

export const founder = { name: "", role: "", bio: "" }; // add the founder's name, role and a short true bio here and the About page shows it

export const methodNote = "Every engagement follows the same four stages. How far we go with you depends on what the business needs.";

export const caseStudies = [
  { slug: "bcdip-12-days-of-christmas", status: "published", headline: 3, area: "Digital Systems", client: "BCDIP", kind: "Campaign strategy", period: "December 2023", deliveredAs: "Comrades Market",
    title: "A December campaign with three audiences and one emotion",
    challenge: "BCDIP runs learning and networking for Kenya's built industry. Its yearly 12 Days of Christmas offer had to do three jobs at once: win back customers from earlier campaigns, convert mailing-list subscribers who had never bought, and reach new leads.",
    approach: "We gave each audience its own job, then built the whole campaign on a single emotion, joy, so that twelve days of posts read as one story.",
    solution: "Twelve daily pieces of short video, carousels and one-line posts across LinkedIn, Facebook and X, with the managing director's own LinkedIn presence carrying the campaign.",
    result: "Half of the campaign's customers were returning customers.",
    metrics: [["3", "audience segments"], ["3", "channels"], ["12", "daily pieces"], ["50%", "returning customers"]],
    details: [
      ["Who we were talking to", "Customers from the 2020 and 2021 campaigns to win back, mailing-list subscribers who had never bought, and a wider list to grow into new leads."],
      ["The one emotion", "Joy, delivered as a daily source of good news: rising after every setback, pride in our own tenacity and the gifts of the season."],
      ["Look and tone", "Primarily red, with a holiday mood and one punchy line a day. Wholesome moments from the built industry, light political humour and the brand's heritage on show."],
      ["Where it ran", "Short video, carousels and reels on LinkedIn, Facebook and X, the channels the audience already lives on, with the managing director's own LinkedIn presence as the campaign's influencer."],
    ],
    images: [
      ["/case-studies/bcdip-12-days-christmas.png", "BCDIP 12 Days of Christmas graphic: red background, holiday foliage and the words 12 Days of Christmas", "One of the twelve daily pieces, December 2023."],
      ["/case-studies/bcdip-ppp-masterclass.jpeg", "Webinar poster for a PPP masterclass with a panel of experts and a three days to go countdown", "A countdown piece for the PPP masterclass webinar, December 2023."],
    ],
    testimonials: [["A natural marketing professional. She's able to seize the needs of the market and create imaginative promotion campaigns that encourage prospects towards conversion. Her marketing strategies are bound to build long term brand loyalty. Watching this space closely.", "Managing Director", "BCDIP"]] },
  { slug: "business-clinic-first-edition", status: "published", area: "Founder programme", client: "The Business Clinic, 1st Edition", kind: "Cohort training", period: "November 2024 to January 2025", deliveredAs: "Comrades Market",
    title: "Six weeks of business fundamentals for founders already in business",
    challenge: "Students and recent graduates were already running real businesses, with customers and cash coming in. They needed the fundamentals, in a format that respected how little time they had.",
    approach: "We kept it to six evenings with one fundamental each: product positioning, customer research, digital marketing, government compliance, sales and pitching, and financial literacy.",
    solution: "A six-week pilot cohort, with three sessions led by guest trainers and a recap email after every session so that missing an evening did not mean falling behind.",
    result: "Eighteen businesses from eleven industries took part and twelve founders earned a certificate of participation. The programme went on to a second edition.",
    metrics: [["18", "businesses"], ["11", "industries"], ["6", "live sessions"], ["12", "certificates"]],
    details: [
      ["Who took part", "Students and recent graduates already running something: a cake business, a travel company, a media production house, a cleaning service, an insurance agency. Eighteen businesses across eleven industries, from under a year to seven years in business."],
      ["How it ran", "Six evenings with one fundamental each. Three seasoned trainers took the marketing, sales and money sessions. Recap emails went out after every session, so a missed week never meant falling behind."],
      ["What came next", "Twelve founders earned a certificate of participation, the cohort got a follow-up in January and the 2nd Edition builds on all of it."],
    ],
    images: [["/case-studies/business-clinic-cohort.png", "People working on laptops around a table at a Business Clinic session", "Six evenings, each founder working on their own numbers, alongside other founders."]],
    schedule: [["Thu 7 Nov", "Product positioning"], ["Thu 14 Nov", "Customer research"], ["Thu 21 Nov", "Digital marketing", true], ["Thu 28 Nov", "Government compliance"], ["Thu 5 Dec", "Sales and pitching", true], ["Wed 11 Dec", "Financial literacy", true], ["Thu 9 Jan", "Cohort follow-up"]],
    room: ["Food & beverage", "Travel & logistics", "Media production", "Fashion & design", "Insurance", "Health, beauty & wellness", "Retail", "Kitchen appliances", "Cleaning services", "Data & AI", "Landscaping & construction"],
    testimonials: [
      ["The business clinic was an awesome experience. Although I didn't make it to all the live sessions, I did all the recaps through the emails. I really enjoyed the session on perfecting sales and pitching your business. I have learned a lot about record keeping and the procedure of taking care of my clients. I would recommend the business clinic 100%.", "Peter Gatitu", "Participant, Business Clinic 1st Edition"],
      ["Thank you so much for involving me in this clinic, especially at a time I am dormant in my business and actively pivoting. I really learnt very specific and important skills for start-ups and would love to be more active if you do another clinic.", "Maureen Mwaura", "Participant, Business Clinic 1st Edition"],
    ],
    cta: ["Discuss Your Business Challenge", "/contact"] },
  { slug: "reconciliation-under-ambiguity", status: "published", area: "Business Intelligence", client: "A financial institution", kind: "Reconciliation and controls", period: "April 2026", deliveredAs: "MwegaTech",
    title: "Reconciling payments and bank records when no transaction IDs match",
    challenge: "M-PESA payments, bank statements and refunds sat in separate systems with no shared transaction ID. Narrations were typed by hand, shortened or rewritten, and fees, delays and batching meant amounts and dates rarely lined up. Refunds carried the highest risk of fraud and over-payment.",
    approach: "We stopped trying to force exact matches. Each payment was treated as a claim that money should appear in the bank, and we weighed the evidence for it the way an experienced finance team would: how alike the narrations are, how close the amounts and dates sit, and whether the customer can be identified.",
    solution: "Narrations were cleaned into a common form, a shortlist of likely bank entries was drawn up for each payment, and every pair received a confidence score built from four signals. Scores sorted each item into auto-reconciled, review, weak match or unmatched. Refunds went through a stricter test that also checked refund size and timing. Every decision came with a plain-language reason, so finance, risk and audit could all read the same record.",
    result: "The institution saved Ksh 20 million by debiting the accounts behind the transactions flagged as auto-reconciled. Staff time went to the items that needed judgement, and every decision could be traced back to its evidence.",
    metrics: [["Ksh 20M", "saved"], ["4", "confidence bands"], ["2", "reconciliations: payments and refunds"], ["0", "shared transaction IDs needed"]] },
];

export const resourceCats = [["free-tools", "Free Tools"], ["premium-toolkits", "Premium Toolkits"], ["templates", "Templates"], ["reports", "Reports"], ["guides", "Guides"], ["ai-resources", "AI Resources"]];

export const resources = [
  { id: "toolkit", title: "SME Data & AI Toolkit", category: "premium-toolkits", access: "paid", price: "Ksh 3,500, one-time", // product facts and checkout link from the current site: confirm for MwegaTech
    description: "One workbook that connects your finance, operations, sales, marketing and compliance, with a prompt library for the AI assistant you already use.",
    points: ["Five linked sheets and one dashboard", "Prompt library for your AI assistant", "Compliance deadline tracker", "Works in Excel or Google Sheets"],
    cta: ["Get the Toolkit", "https://selar.com/782579po40"], note: "Checkout opens on Selar in a new tab." },
  { id: "checkup", title: "Business Data Checkup", category: "free-tools", access: "free", placeholder: true, description: "A short review of what you collect, where it lives and the first question worth answering.", cta: ["Get a Business Data Checkup", "/contact?challenge=Reporting%20and%20business%20intelligence"] },
  { id: "guide", title: "SME Data & AI Guide", category: "guides", access: "free", placeholder: true, description: "A plain-language guide to getting your business data in order before you bring in AI.", cta: ["Download the SME Data & AI Guide", "/contact"], note: "Download link to be added. For now this opens the enquiry form." },
  { id: "template", title: "Monthly business report template", category: "templates", access: "free", placeholder: true, description: "Placeholder. Template details to be added." },
  { id: "worksheet", title: "AI use-case worksheet", category: "ai-resources", access: "free", placeholder: true, description: "Placeholder. Resource details to be added." },
];


export const articleCats = ["Business Systems", "Operational Efficiency", "Data & Business Intelligence", "AI & Automation", "Founder Dependency"];

export const articles = [
  {
    slug: "founder-dependency-signs", category: "Founder Dependency", title: "Six signs your business depends too much on you",
    summary: "If everything stalls when you step away, the problem is usually the system, not your team. Here is how to spot it.",
    image: "/insights/founder-dependency.webp", alt: "A founder with his hand on his forehead, looking stressed at a laptop",
    body: [
      ["p", "Founder dependency rarely looks like a crisis. It looks like a busy, capable owner who is needed everywhere. It becomes a limit on growth when the business can only move as fast as you can answer."],
      ["h", "1. People wait for you to decide"],
      ["p", "Quotes, discounts, refunds and exceptions all wait for your approval because nobody else knows the rules. Write the rules down and a good part of the queue disappears."],
      ["h", "2. The answer lives in your head"],
      ["p", "Pricing logic, supplier history and customer promises sit in your memory or in a chat thread. If a new hire cannot find the answer without asking you, the business is storing knowledge in the wrong place."],
      ["h", "3. Reports are something you assemble"],
      ["p", "If you build the monthly numbers yourself, or ask for them and wait, you are acting as the reporting system. That is one of the first things worth connecting and automating."],
      ["h", "4. Work is done differently by each person"],
      ["p", "Two people handle the same request in two ways. Customers notice the difference, and you end up fixing the gap personally."],
      ["h", "5. Holidays are painful"],
      ["p", "A week away means a backlog or a stream of calls. That is a useful test of how much of the operation runs on process and how much runs on you."],
      ["h", "6. Growth adds work for you, not capacity"],
      ["p", "Each new customer or hire lands on your desk. When growth increases your hours rather than the business's output, the structure needs attention before the volume does."],
      ["h", "Where to start"],
      ["ul", ["Pick the three decisions you make most often and write down how you make them.", "List the questions your team asks you every week and note which could be answered by a document or a report.", "Choose one process that fails when you are away and map it step by step."]],
      ["p", "None of this requires new software. It requires deciding how the work should flow, and then making that visible to everyone who does it."],
    ],
  },
  {
    slug: "sales-records-customers", category: "Data & Business Intelligence", title: "What your sales records already know about your customers",
    summary: "Your M-Pesa statements, invoices and order chats already show who your best customers are. Here's how to read them.",
    image: "/insights/sales-records.png", alt: "Two colleagues reviewing sales charts on a laptop and a wall screen",
    body: [
      ["p", "Most small businesses think they need more data before they can understand their customers. Usually, they just need to look at what they already have."],
      ["p", "If you take payments on M-Pesa, send eTIMS invoices or confirm orders on WhatsApp, you already hold a record of who bought, what they bought, when and how much they paid. That is a customer history, sitting in your statements and chats."],
      ["p", "Here are three questions to put to it."],
      ["h", "1. Who are my best customers?"],
      ["p", "List the last six months of sales by customer and add up what each one spent. In many businesses, a small group of customers brings in most of the revenue. Once you know who they are, you know who to call first, who to thank and who to protect."],
      ["h", "2. Who comes back?"],
      ["p", "Count how many customers bought more than once, and how many bought only once. If most buy once and disappear, your challenge isn't finding customers. It's keeping them."],
      ["h", "3. What do they buy, and when?"],
      ["p", "Group sales by month, week or product. You may find a slow week that repeats every month, or two products that are nearly always bought together. Both are chances to plan better."],
      ["h", "How to start this week"],
      ["p", "Copy your sales into Excel or Google Sheets, one row per sale, with the date, customer, product and amount. Then use a pivot table to total sales by customer, by product and by month. It takes about an hour, and you don't need perfect records. You need them in one place."],
      ["h", "Then pick one action"],
      ["ul", ["Message your top ten customers to say thank you.", "Follow up with one-time buyers 30 days after their purchase.", "Try bundling the two products that sell together."]],
      ["p", "Your records are already telling you what your customers value. The SME Data & AI Toolkit gives you one workbook to keep sales next to your finance and operations, so the picture stays in one place."],
    ],
  },
  {
    slug: "where-ai-saves-time", category: "AI & Automation", title: "Where AI saves a small team time, and where it does not",
    summary: "AI can take repetitive work off your team's plate, but only if you know which jobs to give it. Here's how to tell.",
    image: "/insights/ai-small-teams.png", alt: "A woman wearing headphones working on a laptop in front of a wall reading Learn, Apply, Grow",
    body: [
      ["p", "AI tools are everywhere now, and most small teams feel they should be using them. The better question is which jobs they're good for."],
      ["h", "Where AI usually saves time"],
      ["ul", ["**First drafts:** replies to customers, quotations, social posts, job adverts.", "**Summaries:** long documents, meeting notes, email threads.", "**Tidying information:** sorting a messy list, standardising names, turning notes into a table.", "**Repetitive questions:** drafting answers to the questions customers ask every week."]],
      ["h", "Where it usually does not"],
      ["ul", ["**Decisions that need judgement**, like who to hire, which supplier to trust or what to charge.", "**Anything with numbers you can't check.** AI can sound confident and still be wrong, so verify every figure.", "**Sensitive information.** Don't paste customer details, bank records or staff data into a tool unless you know how it handles them.", "**Relationships.** A customer who is upset wants a person, not a polished paragraph."]],
      ["h", "A simple test"],
      ["p", "Pick one task your team repeats every week. Time how long it takes now, then try it with AI for two weeks, and compare the time and the quality. If it saves time and the output still needs only a light edit, keep it. If not, drop it and try another task."],
      ["h", "One rule to keep"],
      ["p", "AI drafts, a person decides. If someone on your team always reads and approves the result before it goes out, you get the speed without giving up control."],
      ["p", "Start small, with one task and one person, and add more once it's working."],
    ],
  },
  {
    slug: "digitise-without-new-software", category: "Business Systems", title: "Digitising a process without buying new software",
    summary: "You don't need a new system to fix a slow process. Start with the tools you already own.",
    image: "/insights/digitise-process.png", alt: "A shop owner using a tablet beside a sign reading Digital payments, better business",
    body: [
      ["p", "When work feels slow, the first instinct is often to buy software. But a tool can't fix a process that doesn't work. It just makes the same problems happen faster."],
      ["p", "Try this order instead."],
      ["h", "1. Write the process down"],
      ["p", "Take a single process, such as taking an order, issuing an invoice or onboarding a client. List every step from start to finish, including who does what and where the information goes."],
      ["h", "2. Find the step that costs the most"],
      ["p", "Look for re-typing the same information, waiting for approvals, searching for a file or chasing someone on WhatsApp. One step usually costs far more than the rest."],
      ["h", "3. Remove before you digitise"],
      ["p", "Ask whether each step needs to exist. A step that disappears needs no tool at all."],
      ["h", "4. Use what you already have"],
      ["p", "Many businesses can fix a lot with tools they already own:"],
      ["ul", ["A **Google Form** feeding a **shared sheet** instead of orders scattered across chats.", "A **WhatsApp Business** catalogue and quick replies for common questions.", "A **template** for quotes and invoices, instead of rebuilding them each time.", "A **shared folder** with a clear naming rule, so files can be found."]],
      ["h", "5. Run it for 30 days"],
      ["p", "Use the new way of working for a month. Note what's faster and what's still stuck."],
      ["h", "6. Only then ask if you need software"],
      ["p", "If you've outgrown a spreadsheet, you'll know exactly what the software must do, and you'll buy the right one rather than the most impressive one."],
      ["p", "Digital transformation doesn't have to start with a purchase. It can start with a pen, one process and an honest look at where time goes."],
    ],
  },
  {
    slug: "customers-driving-growth", category: "Data & Business Intelligence", title: "Finding out which customers are driving your growth",
    summary: "The customers who spend the most aren't always the ones who help you grow. Here's how to tell the difference.",
    image: "/insights/customer-growth.png", alt: "Four colleagues gathered around a laptop, discussing the numbers",
    body: [
      ["p", "Revenue is easy to see, but it can mislead. A customer who spends a lot but demands big discounts, pays late and takes up half your week may be costing you more than they bring in."],
      ["p", "To find who is really driving growth, look at your customers through four lenses."],
      ["h", "1. Revenue: who spends the most?"],
      ["p", "This is where most people stop, but it's only the start."],
      ["h", "2. Profit: who is worth the most after costs?"],
      ["p", "Subtract discounts, delivery, extra work and the cost of waiting for payment. Some mid-sized customers turn out to be more profitable than your biggest ones."],
      ["h", "3. Direction: who is growing?"],
      ["p", "Compare each customer's spending over time. Someone whose orders are rising may be worth more next year than someone who is flat."],
      ["h", "4. Influence: who brings others?"],
      ["p", "Note who refers friends, colleagues or other businesses. A customer who sends you three new ones is worth more than their own invoices suggest."],
      ["h", "How to do it"],
      ["p", "List your top 20 customers in a sheet. Add columns for revenue, discounts given, days taken to pay, repeat purchases and referrals. A few minutes of sorting will show patterns you can't see by memory."],
      ["h", "Then decide what to do with each"],
      ["ul", ["**Protect** the ones who are profitable and loyal.", "**Grow** the ones whose spending is rising.", "**Reprice** the ones who cost more than they bring in.", "**Let go**, politely, of the ones who never will be worth it."]],
      ["p", "Growth comes from knowing who to invest your time in, which is easier once you have the numbers in front of you."],
    ],
  },
  {
    slug: "measuring-marketing-returns", category: "Operational Efficiency", title: "Measuring what your marketing brings back",
    summary: "If you can't say what your marketing brings back, you can't tell what to keep. Here's a simple way to track it.",
    image: "/insights/marketing-returns.png", alt: "A team leader talking with colleagues at laptops in front of a wall of sticky notes",
    body: [
      ["p", "Many businesses spend on marketing, whether on ads, posts, boosts, flyers or events, and then judge it by feel. A post got lots of likes, so it must have worked. But likes don't pay rent."],
      ["p", "The question to answer is simple: **for every shilling I put in, what came back?**"],
      ["h", "1. Know where customers come from"],
      ["p", "Ask every new customer, \u201CHow did you hear about us?\u201D and write down the answer. Add that question to your WhatsApp greeting, your order form or your checkout. It's the cheapest data you'll ever collect."],
      ["h", "2. Give each channel its own trail"],
      ["p", "Use a different promo code, link or phone number for each channel, such as one for Instagram, one for a flyer and one for a referral. When someone uses it, you know where it came from."],
      ["h", "3. Track five numbers per channel"],
      ["p", "Put them in a simple sheet:"],
      ["table", ["Channel", "Spend", "Enquiries", "Sales", "Revenue"], [["Instagram", "", "", "", ""], ["WhatsApp status", "", "", "", ""], ["Referrals", "", "", "", ""]]],
      ["h", "4. Compare what came back"],
      ["p", "Divide revenue by spend for each channel. The ones that return more than they cost are worth growing, and the ones that don't deserve a second look."],
      ["h", "5. Look beyond the first sale"],
      ["p", "Check whether customers from a channel come back. A channel that brings fewer people but more repeat buyers may be the better one."],
      ["h", "A word of caution"],
      ["p", "Not everything shows up in a sheet. Some work, like building your name, pays off slowly. Don't cut it after one month. But do measure it, so that over time you can see what is really working."],
    ],
  },
];

export const values = [
  ["Integrity", "We say what the data says, including when it is not what anyone hoped."],
  ["Practical Innovation", "New ideas earn their place by solving a real problem."],
  ["Continuous Learning", "We keep learning, and we leave your team knowing more than when we arrived."],
  ["Customer-Centred Thinking", "We start with your customers and your business, not with a tool."],
  ["Impact", "We measure our work by what changes for you."],
  ["Collaboration", "We build with you, not for you from a distance."],
];

export const statements = [ // draft wording: confirm with the MwegaTech team
  ["Our purpose", "To help established founders build businesses that run well without depending on them for every decision."],
  ["Our vision", "Owner-led businesses across Kenya and the region that understand their numbers, trust their systems and grow with confidence."],
  ["Our mission", "To connect processes, data and technology into practical business systems that make operations more efficient, more measurable and ready for growth."],
];

export const timeline = [
  ["Comrades Market", "A platform helping businesses navigate digital marketing, research, technology and growth.", "2021"],
  ["Digital services", "Social media, campaigns and websites for growing brands.", "2022 to 2024"],
  ["Research & business support", "Research, analytics and The Business Clinic for founders.", "2024 to 2025"],
  ["Data & AI", "Training and tools that help businesses run on their own numbers.", "2025"],
  ["MwegaTech", "A focused business systems consultancy for established founders.", "2026"],
];

export const aiTasks = [
  ["Writing the same emails, messages and proposals", "Drafting assistant", "AI prepares a first draft in your tone from a few notes. A person edits and sends."],
  ["Compiling reports by hand", "AI-assisted reporting", "Routine reports are drafted from your data, ready for someone to check and sign off."],
  ["Answering the same customer questions", "Customer reply support", "Suggested answers drawn from your own FAQs and policies, so replies are faster and consistent."],
  ["Searching for documents and information", "A knowledge system", "Ask a question in plain language and get the answer from your own documents, with the source."],
  ["Copying data between systems", "Automation", "Rule-based steps move information between your tools without retyping."],
  ["Summarising meetings and long documents", "Summaries and action lists", "Notes, decisions and next steps captured in minutes."],
  ["Checking forms, invoices or records", "First-pass checking", "AI flags gaps and mismatches so your team reviews the exceptions, not every line."],
];


/* Contact form choices. app/api/contact/route.js validates against these same lists. */
export const businessStages = ["Established, owner-managed (up to 10 people)", "Growing team (11 to 50 people)", "Larger organisation (over 50 people)", "Not sure"];
export const challengeOptions = ["Business processes and operations", "Reporting and business intelligence", "Software and system integration", "Automation and AI", "Too much depends on me", "Not sure yet"];
export const consultMethods = ["Video call", "Phone call", "WhatsApp", "In person", "Email"];

export const nextSteps = ["We reply within 24 hours with next steps.", "A 30-minute conversation to understand the challenge and agree the right first step.", "A short written scope with deliverables, timeline and fee."]; // from the previous site's FAQ: confirm

export const seo = { // becomes generateMetadata() per route
  "/": "MwegaTech | Business systems consultancy for established founders",
  "/what-we-solve": "What We Solve | Business systems, BI, integration and automation | MwegaTech",
  "/our-approach": "Our Approach | Diagnose, Design, Implement, Optimise | MwegaTech",
  "/diagnostic": "Business Systems Diagnostic | MwegaTech",
  "/about": "About MwegaTech | Business systems consulting, formerly Comrades Market",
  "/insights": "Insights on business systems, data and automation | MwegaTech",
  "/resources": "Resources and training | MwegaTech",
  "/case-studies": "Case studies | MwegaTech",
  "/contact": "Book a Business Systems Consultation | MwegaTech",
};
export const seoDescriptions = {
  "/what-we-solve": "Business process improvement, business intelligence, digital systems integration and AI workflow automation for established, owner-led businesses.",
  "/our-approach": "A four-stage consulting method for growing businesses: diagnose how the business runs, design a roadmap, implement the systems and optimise over time.",
  "/diagnostic": "A structured assessment of how your business operates, ending in a prioritised Business Systems Improvement Roadmap.",
  "/about": "MwegaTech is a business systems consultancy in Embu, Kenya, evolved from Comrades Market, helping established founders connect processes, data and technology.",
  "/insights": "Practical articles on business systems for growing businesses, process improvement, business intelligence, automation and founder dependency.",
  "/contact": "Discuss a business systems challenge with MwegaTech. Tell us about your business and where operations are holding it back.",
};

export const legalPages = { // legal text, keyed by page title. Same block format as article bodies: "h", "p", "ul"
  "Privacy Policy": { updated: "27 October 2026", body: [
    ["h", "1. Introduction"],
    ["p", "Welcome to MwegaTech (“we,” “our,” or “us”)."],
    ["p", "We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit https://mwega.com or contact us through our website."],
    ["p", "We handle personal information in accordance with applicable Kenyan data protection laws, including the Data Protection Act, 2019, where applicable."],
    ["h", "2. Information We Collect"],
    ["p", "When you interact with our website, we may collect the following information:"],
    ["p", "**Information you provide:** When you submit our contact form, we may collect your name, email address, phone number if requested, and the contents of your message."],
    ["p", "**Technical information:** Our website hosting provider or other technical services may process information such as your IP address, browser type, device information, and server logs to operate, maintain, and secure the website."],
    ["p", "**Cookies and analytics:** Depending on our website configuration, cookies or similar technologies may collect information about website visits and usage. Please see the Cookies and Analytics section below."],
    ["p", "We aim to collect only the information reasonably necessary for the purposes described in this policy."],
    ["h", "3. How We Use Your Information"],
    ["p", "We may use your personal information to:"],
    ["ul", ["Respond to your questions, messages, and service enquiries.", "Provide information about our products or services that you have requested.", "Follow up on enquiries and maintain relevant business communications.", "Operate, maintain, troubleshoot, and secure our website.", "Understand website performance and improve our services, where applicable.", "Meet our legal and regulatory obligations."]],
    ["p", "We will process your personal information on an appropriate lawful basis under applicable law. Where consent is required, we will seek it before processing."],
    ["p", "We will not use your contact-form information for unrelated purposes without an appropriate lawful basis."],
    ["h", "4. Contact Form and Communications"],
    ["p", "When you submit a contact form, the information you provide may be processed by our website hosting provider, form-processing service, email provider, or other service providers involved in delivering your message."],
    ["p", "We use this information to respond to your enquiry and manage the resulting communication."],
    ["p", "Please avoid submitting passwords, payment card details, or other sensitive personal information through our contact form."],
    ["p", "If you wish to ask about, correct, or request deletion of personal information you have submitted, you may contact us using the details provided below, subject to applicable legal requirements."],
    ["h", "5. Cookies and Analytics"],
    ["p", "We are reviewing the technologies used on our website to determine whether cookies, analytics tools, or similar tracking technologies are active."],
    ["p", "If these technologies are used, we will update this section to identify the relevant purposes and services, explain what information may be collected, and describe the choices available to visitors."],
    ["p", "Where required by law, we will obtain consent before using non-essential cookies or tracking technologies."],
    ["p", "You may also manage certain cookies through your browser settings, although disabling some cookies may affect website functionality."],
    ["h", "6. Sharing of Personal Information"],
    ["p", "We may share personal information with service providers who help us host, maintain, secure, or operate our website and respond to enquiries."],
    ["p", "We may also disclose personal information where required by law or where necessary to establish, exercise, or defend legal claims."],
    ["p", "We will take appropriate steps to ensure that personal information shared with service providers is handled in accordance with applicable data protection requirements."],
    ["p", "We do not sell personal information as part of our stated website practices."],
    ["h", "7. International Data Transfers"],
    ["p", "Some website hosting, email, form-processing, or analytics providers may store or process information outside Kenya."],
    ["p", "Where personal information is transferred outside Kenya, we will take the steps required by applicable law to ensure that the transfer is lawful and that appropriate safeguards are in place."],
    ["h", "8. Data Retention"],
    ["p", "We retain contact-form submissions and related correspondence only for as long as reasonably necessary to respond to enquiries, manage relevant business relationships, meet legal obligations, and resolve disputes."],
    ["p", "We will periodically review the information we hold and securely delete or anonymise information when it is no longer required, subject to applicable legal retention requirements."],
    ["p", "Our retention periods will be determined by the purpose for which the information was collected and our actual operational and legal requirements."],
    ["h", "9. Data Security"],
    ["p", "We take reasonable technical and organisational measures to protect personal information against unauthorised access, alteration, loss, misuse, or disclosure."],
    ["p", "These measures may include access controls, secure hosting, appropriate account permissions, and secure handling of contact-form submissions."],
    ["p", "No method of transmission or electronic storage is completely secure. We will handle any personal data breach in accordance with applicable legal requirements."],
    ["h", "10. Your Privacy Rights"],
    ["p", "Under applicable Kenyan data protection law, you may have the right to:"],
    ["ul", ["Be informed about how your personal information is used.", "Request access to your personal information.", "Request correction of inaccurate or misleading information.", "Request deletion of personal information where applicable.", "Object to certain processing of your personal information.", "Exercise other applicable rights, including rights relating to data portability or restriction of processing, where provided by law.", "Lodge a complaint with the Office of the Data Protection Commissioner (ODPC)."]],
    ["p", "To exercise your rights, contact us using the details below. We may need to verify your identity before responding and will handle requests in accordance with applicable law."],
    ["h", "11. Third-Party Websites"],
    ["p", "Our website may contain links to external websites. Those websites operate under their own privacy practices, and we encourage you to review their privacy policies before providing them with personal information."],
    ["h", "12. Children’s Privacy"],
    ["p", "We will handle personal information relating to children in accordance with applicable Kenyan law and any additional safeguards required for the circumstances."],
    ["h", "13. Changes to This Privacy Policy"],
    ["p", "We may update this Privacy Policy to reflect changes in our website, business operations, technology, or legal obligations."],
    ["p", "The latest version will be published on this page with its updated date."],
    ["h", "14. Contact Us"],
    ["p", "For privacy-related questions or requests, please contact:"],
    ["p", "**Business name:** PLUG CONNECT LIMITED"],
    ["p", "**Website:** https://mwega.com"],
    ["p", "**Privacy contact email:** [hello@mwega.com](mailto:hello@mwega.com)"],
    ["p", "**Business address:** EMBU KENYA"],
    ["p", "We will handle your request in accordance with applicable data protection law."],
  ] },
  "Terms of Service": { effective: "27 October 2026", updated: "27 October 2026", body: [
    ["h", "1. Introduction"],
    ["p", "Welcome to MwegaTech (“MwegaTech,” “we,” “our,” or “us”)."],
    ["p", "MwegaTech provides AI training, data consulting, business cohort training, educational resources, and related services designed to help individuals and businesses make better decisions, build stronger systems, and achieve sustainable growth."],
    ["p", "These Terms of Service (“Terms”) govern your access to and use of https://mwega.com, including its content, enquiry forms, learning resources, and services made available through the website."],
    ["p", "By accessing or using the website, you agree to these Terms. If you do not agree, please discontinue use of the website."],
    ["p", "References to MwegaTech mean the business or legal entity operating the website."],
    ["h", "2. Our Services"],
    ["p", "MwegaTech may provide the following services:"],
    ["sh", "2.1 AI Training"],
    ["p", "AI training may include workshops, webinars, demonstrations, learning materials, practical exercises, and guidance on applying artificial intelligence tools to work and business processes."],
    ["p", "The availability, format, duration, and scope of each training programme will be communicated through the relevant programme description or registration materials."],
    ["sh", "2.2 Data Consulting"],
    ["p", "Data consulting may include data analysis, reporting, dashboard development, business intelligence, data management guidance, process improvement, and related advisory or implementation services."],
    ["p", "Specific deliverables, fees, timelines, responsibilities, and acceptance criteria may be agreed through a separate proposal, quotation, statement of work, or client agreement."],
    ["sh", "2.3 Business Cohort Training"],
    ["p", "Business cohort training may include structured learning programmes, group sessions, practical assignments, peer learning, mentoring, and business development activities."],
    ["p", "Participation may be subject to additional programme-specific terms, eligibility requirements, attendance expectations, deadlines, and fees disclosed before registration."],
    ["sh", "2.4 Changes to Services"],
    ["p", "We may update or improve our services, learning materials, website features, and programme formats as our business evolves. Where a change materially affects an existing paid commitment, we will handle it in accordance with the applicable agreement and law."],
    ["h", "3. Website Use and Eligibility"],
    ["p", "You agree to use our website lawfully and responsibly."],
    ["p", "You must not:"],
    ["ul", ["Use the website for unlawful, fraudulent, or misleading purposes.", "Attempt to gain unauthorised access to our systems, accounts, or data.", "Disrupt the security or operation of the website.", "Introduce malicious code or interfere with website functionality.", "Misrepresent your identity or submit false information through our forms.", "Copy or exploit our content in a manner that infringes intellectual property rights."]],
    ["p", "If a programme has specific age, experience, or eligibility requirements, those requirements will be communicated separately."],
    ["h", "4. AI Training and Educational Content"],
    ["p", "Our AI training and educational materials are intended to develop knowledge, skills, and practical understanding."],
    ["p", "Artificial intelligence tools and services may change over time. Examples, demonstrations, recommendations, and outputs may not always remain accurate, complete, or suitable for every situation."],
    ["p", "You are responsible for evaluating AI-generated outputs before relying on them, particularly where decisions involve financial, legal, medical, employment, security, or other material consequences."],
    ["p", "MwegaTech does not guarantee that participation in a training session will produce a particular qualification, business result, productivity improvement, income level, or employment outcome unless an explicit written agreement states otherwise."],
    ["p", "You remain responsible for complying with the terms, policies, and applicable laws governing any third-party AI tools you use."],
    ["h", "5. Data Consulting and Client Responsibilities"],
    ["p", "For data consulting engagements, clients are responsible for:"],
    ["ul", ["Providing accurate and sufficiently complete information relevant to the agreed work.", "Ensuring they have the necessary rights, permissions, and lawful basis to share data with MwegaTech.", "Identifying relevant confidentiality, security, contractual, or regulatory restrictions before providing data.", "Reviewing deliverables and communicating any concerns within agreed timeframes.", "Making final business decisions based on their own circumstances and appropriate professional advice."]],
    ["p", "MwegaTech will perform agreed services with reasonable care and in accordance with the applicable engagement terms."],
    ["p", "Unless expressly agreed in writing, consulting services do not constitute a guarantee of specific business performance, revenue growth, cost savings, or other commercial results."],
    ["p", "Where personal data is involved, the parties will comply with applicable data protection law and agree on any additional responsibilities necessary for the engagement."],
    ["h", "6. Business Cohorts and Community Participation"],
    ["p", "Participants in MwegaTech’s business cohorts are expected to engage respectfully, participate responsibly, and comply with programme-specific instructions."],
    ["p", "Unless expressly authorised, participants must not:"],
    ["ul", ["Share another participant’s confidential business information outside the programme.", "Record or distribute private sessions without permission.", "Harass, intimidate, mislead, or discriminate against other participants.", "Distribute unlawful, malicious, or unauthorised promotional material.", "Present another participant’s work or ideas as their own."]],
    ["p", "Cohort participation does not automatically establish a partnership, agency relationship, employment relationship, investment arrangement, or joint venture between MwegaTech and a participant or between participants."],
    ["p", "MwegaTech may take reasonable action in response to serious or repeated misconduct, subject to applicable agreements and law."],
    ["h", "7. Registration, Fees and Payments"],
    ["p", "Some MwegaTech services may be free, while others may require registration or payment."],
    ["p", "Where fees apply, the applicable programme description, quotation, invoice, or separate agreement will specify the relevant charges, payment deadlines, and payment arrangements."],
    ["p", "You are responsible for providing accurate registration and billing information and paying agreed fees when due."],
    ["p", "Any applicable taxes, additional charges, instalment arrangements, or payment-provider fees will be disclosed as appropriate."],
    ["p", "MwegaTech will not treat an enquiry as a confirmed booking or paid engagement unless the relevant confirmation requirements have been satisfied."],
    ["h", "8. Cancellations, Rescheduling and Refunds"],
    ["p", "Cancellation, rescheduling, withdrawal, and refund arrangements will be communicated in the relevant programme terms, registration materials, or client agreement."],
    ["p", "Where MwegaTech cancels or materially changes a paid programme, the available remedies will be determined by the applicable agreement and law."],
    ["p", "Nothing in these Terms removes any mandatory refund, cancellation, or consumer protection rights available under Kenyan law."],
    ["p", "Before registering for a paid programme, participants should review its specific cancellation and refund conditions."],
    ["h", "9. Intellectual Property"],
    ["p", "Unless otherwise stated, MwegaTech or its licensors own or have permission to use the intellectual property associated with the website and its original content."],
    ["p", "This may include branding, logos, written materials, training presentations, course resources, templates, frameworks, videos, graphics, and other learning materials."],
    ["p", "You may use materials made available to you for your personal learning or internal business purposes to the extent permitted by the relevant programme or service agreement."],
    ["p", "Unless authorised in writing or permitted by law, you must not reproduce, resell, redistribute, publicly publish, or commercially exploit MwegaTech’s proprietary materials."],
    ["p", "Clients retain rights to their pre-existing materials and data. Ownership and permitted use of client-specific deliverables, custom dashboards, reports, code, and other commissioned work will be determined by the applicable written agreement."],
    ["p", "Participants retain rights to their own original contributions, subject to any applicable programme rules and the rights of other parties."],
    ["h", "10. Confidentiality and Business Information"],
    ["p", "MwegaTech recognises that consulting engagements and business cohort programmes may involve confidential information."],
    ["p", "Each party should take reasonable steps to protect confidential information received from the other party and use it only for the purpose for which it was shared."],
    ["p", "Confidential information should not be disclosed to unauthorised third parties unless the disclosing party has consented, disclosure is authorised under an applicable agreement, or disclosure is required by law."],
    ["p", "Information that is publicly available, independently developed, or lawfully obtained without a confidentiality obligation may not qualify as confidential information."],
    ["p", "Where a consulting engagement requires more detailed confidentiality obligations, the parties should enter into a separate confidentiality agreement or include suitable provisions in the engagement contract."],
    ["h", "11. Privacy and Data Protection"],
    ["p", "MwegaTech may collect and process personal information when you visit the website, submit an enquiry, register for training, participate in a cohort, or engage us for consulting services."],
    ["p", "Our Privacy Policy explains how we handle personal information, the purposes for which it is used, and how you may exercise applicable privacy rights."],
    ["p", "Where client projects involve personal data, additional contractual safeguards or a data processing agreement may be necessary."],
    ["p", "MwegaTech and its clients will comply with their respective obligations under applicable Kenyan data protection law."],
    ["p", "**Privacy Policy:** [Read our Privacy Policy](/privacy)"],
    ["h", "12. Third-Party Tools and Services"],
    ["p", "MwegaTech may use or recommend third-party tools, including AI platforms, analytics software, online meeting platforms, learning systems, and data visualisation tools."],
    ["p", "These services may be governed by their own terms, privacy policies, licensing conditions, and security arrangements."],
    ["p", "Unless expressly agreed otherwise, MwegaTech does not control third-party services and cannot guarantee their continuous availability, functionality, or future terms."],
    ["p", "You are responsible for reviewing relevant third-party requirements before using those services or uploading information to them."],
    ["h", "13. Website Availability and Disclaimers"],
    ["p", "We aim to provide useful, accurate, and accessible website content. However, we do not guarantee that the website will always be available, uninterrupted, error-free, or fully up to date."],
    ["p", "We may temporarily suspend access for maintenance, security, upgrades, or operational reasons."],
    ["p", "To the extent permitted by law, the website and its general informational content are provided on an available basis."],
    ["p", "Nothing in these Terms excludes mandatory statutory rights, consumer protections, or obligations that cannot lawfully be excluded."],
    ["h", "14. Limitation of Liability"],
    ["p", "To the extent permitted by applicable law, MwegaTech will not be liable for indirect or consequential losses arising from the use of the website or general educational materials."],
    ["p", "MwegaTech does not exclude or limit liability where doing so would be prohibited by law."],
    ["p", "Liability arising from a specific consulting engagement, paid training programme, or other contracted service may be addressed in the relevant written agreement, subject to applicable legal requirements."],
    ["h", "15. Suspension and Termination"],
    ["p", "We may restrict or suspend access to the website or a programme where reasonably necessary to address unlawful conduct, serious misconduct, security risks, or material breaches of applicable terms."],
    ["p", "Where a paid service or programme is affected, we will consider the applicable agreement, the circumstances, and any mandatory legal rights."],
    ["p", "Termination of access does not automatically remove obligations that are intended to continue, including applicable confidentiality, intellectual property, payment, or legal obligations."],
    ["h", "16. Changes to These Terms"],
    ["p", "We may revise these Terms to reflect changes in our services, website, business practices, or legal obligations."],
    ["p", "The updated version will be published on this page with a revised date."],
    ["p", "Where required by law or an existing agreement, we will provide notice or obtain any necessary consent before changes take effect."],
    ["h", "17. Governing Law and Disputes"],
    ["p", "These Terms are governed by the laws of Kenya, subject to applicable mandatory legal protections."],
    ["p", "Where a dispute arises, the parties should first attempt to resolve it through good-faith communication where appropriate."],
    ["p", "Unresolved disputes may be referred to the competent courts or other appropriate dispute-resolution mechanisms in Kenya, subject to applicable law."],
    ["h", "18. Contact MwegaTech"],
    ["p", "For questions about these Terms or our services, please contact:"],
    ["p", "**Business name:** MwegaTech"],
    ["p", "**Website:** https://mwega.com"],
    ["p", "**Email:** [hello@mwega.com](mailto:hello@mwega.com)"],
    ["p", "**Legal entity:** PLUG CONNECT LIMITED"],
    ["p", "**Business address:** Embu, Kenya"],
    ["p", "We will review enquiries and respond as reasonably practicable."],
  ] },
};
