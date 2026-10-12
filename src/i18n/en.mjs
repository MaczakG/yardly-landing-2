// English copy. Mirrors the structure of hu.mjs.
export default {
  lang: "en",
  dateLocale: "en-GB",

  ui: {
    skip: "Skip to content",
    homeLabel: "Yardly home",
    menu: "Menu",
    langLabel: "Choose language",
    nav: {
      home: "Home",
      solutions: "Solutions",
      cases: "Case studies",
      blog: "Blog",
      about: "About",
      contact: "Contact",
    },
    cta: "Get in touch",
    footer: {
      desc: "Maintenance and operations software for logistics companies, built to extend the systems you already use.",
      colSolutions: "Solutions",
      colCompany: "Company",
      colLegal: "Legal",
      automation: "Workflow automation",
      modules: "Modules",
      operations: "Hosting and security",
      pricing: "Pricing",
      privacy: "Privacy notice",
      imprint: "Imprint",
      cookies: "Cookie settings",
      madeIn: "Made in Hungary.",
      rights: "All rights reserved.",
      top: "Back to top",
      soon: "coming soon",
    },
    consent: {
      text: "We measure visits with Google Analytics, but only if you agree.",
      more: "Details",
      accept: "Accept",
      reject: "Decline",
    },
    readMore: "Read more",
    minutes: (n) => `${n} min read`,
    backToBlog: "Back to the blog",
    shotUrl: "yardly.hu",
    shotNote: "Real screenshot from the Yardly test environment with demo data. The interface is currently in Hungarian.",
    draft: "Draft. Before launch, fill in the highlighted parts and have the text reviewed by a lawyer. The Hungarian version prevails.",
  },

  // -------------------------------------------------------------------------
  home: {
    title: "Maintenance management software for logistics | Yardly",
    description:
      "Maintenance, deadlines and costs for vehicles, forklifts and warehouse equipment in one place, connected to the systems you already use. Free assessment.",
    hero: {
      eyebrow: "Maintenance and operations",
      title: "Automated operations, built around how you work.",
      lead: "Yardly sits alongside the systems you already run and automates maintenance for vehicles, forklifts and equipment, deadline tracking and reporting. It is not off-the-shelf software: we tailor it to your company and keep supporting it after go-live.",
      note: "The first assessment is free.",
    },
    diagram: {
      title: "How Yardly connects a company's systems",
      desc: "On the left, the company's existing systems: ERP, warehouse management, document management, fuel card data and spreadsheets. In the middle, Yardly connects them. On the right, the automated processes: service scheduling, fleet, equipment, expiry alerts and cost reports.",
      bar: "Example: a logistics company's systems",
      legend: "Data in transit",
      figLabel: "Fig. 1",
      caption: "Yardly takes data from where it already lives, automates maintenance and operations workflows, and turns them into continuous reporting.",
      left: [
        { cat: "ERP", name: "Business system" },
        { cat: "WMS", name: "Warehouse system" },
        { cat: "DMS", name: "Document management" },
        { cat: "FUEL", name: "Fuel card data" },
        { cat: "EXCEL", name: "Spreadsheets" },
      ],
      right: [
        { cat: "MAINTENANCE", name: "Service scheduling" },
        { cat: "FLEET", name: "Vehicles, drivers" },
        { cat: "ASSETS", name: "Forklifts, machines" },
        { cat: "DEADLINES", name: "Expiry alerts" },
        { cat: "REPORTS", name: "Costs, summaries" },
      ],
      mobileTop: [
        { cat: "ERP", name: "Business" },
        { cat: "WMS", name: "Warehouse" },
        { cat: "EXCEL", name: "Sheets" },
      ],
      mobileBottom: [
        { cat: "SERVICE", name: "Schedules" },
        { cat: "FLEET", name: "Vehicles" },
        { cat: "REPORTS", name: "Costs" },
      ],
      hub: { title: "Operations layer", pills: ["Connect", "Automate", "Report"], status: "In sync", last: "Last run 09:14" },
    },
    benefits: {
      eyebrow: "What you gain",
      title: "Less manual work. Clear processes. Data entered once.",
      lead: "Most companies don't lack systems. They lack what connects them. Yardly turns what lives in spreadsheets and people's heads into one clear system.",
      items: [
        {
          title: "Saves time",
          text: "Repetitive admin runs on its own: the system calculates due dates, sends reminders on time and keeps reports up to date.",
          ticks: ["Due dates by mileage, operating hours or calendar", "Reminders in several steps before each deadline", "8 hours a month down to 10 minutes at one client"],
        },
        {
          title: "Clear processes",
          text: "Everyone sees the same picture: what is due, what is late, what is done. Who can see and change what is set per role.",
          ticks: ["One view for maintenance and deadlines", "Role-based permissions and a change log", "Reports in PDF and Excel"],
        },
        {
          title: "No double data entry",
          text: "Yardly connects the systems you already use, so the same data never has to be typed in twice.",
          ticks: ["Your existing systems stay in place", "Custom connections to the software you use", "Master data is recorded once"],
        },
      ],
      trace: {
        head: "RUN · FORKLIFT #12",
        status: "Done · 1 h 41 m",
        steps: [
          { what: "Operating hours received", sub: "Warehouse system", time: "08:00:12" },
          { what: "Due date calculated", sub: "Mandatory service in 14 days", time: "08:00:13" },
          { what: "Reminder sent", sub: "Maintenance lead", time: "08:00:14" },
          { what: "Work order approved", sub: "Site manager · manual step", time: "09:41:02", human: true },
          { what: "Report updated", sub: "Monthly cost report", time: "09:41:05" },
        ],
      },
      board: {
        head: "UPCOMING DEADLINES",
        bad: "2 overdue",
        warn: "3 due soon",
        rows: [
          { name: "ABC-123", sub: "Roadworthiness test", due: "Overdue", tone: "bad" },
          { name: "Compressor", sub: "Annual inspection", due: "8 days", tone: "warn" },
          { name: "Forklift #12", sub: "Mandatory service", due: "14 days", tone: "warn" },
          { name: "ABC-133", sub: "Vehicle insurance", due: "Overdue", tone: "bad" },
          { name: "Warehouse B, row 2", sub: "Racking inspection", due: "32 days", tone: "ok" },
        ],
      },
      mesh: {
        title: "Six systems need fifteen point-to-point links, but only six through Yardly.",
        leftKey: "POINT TO POINT",
        leftValue: "15 links",
        rightKey: "THROUGH YARDLY",
        rightValue: "6 links",
      },
    },
    product: {
      eyebrow: "The interface",
      title: "One screen shows what needs attention.",
      lead: "Yardly opens with what is overdue or due soon: documents, inspections and maintenance in one list, with the state of your fleet and equipment below.",
      alt: "Yardly dashboard: overdue and upcoming documents, inspections and maintenance, with vehicle and equipment counts below.",
    },
    proof: {
      eyebrow: "Case study",
      title: "10 minutes a month instead of 8 hours.",
      lead: "A logistics provider for pharmaceuticals, crop protection products and beverages tracked forklift and warehouse equipment maintenance in a complex spreadsheet that was hard to follow. Today the same process runs automatically.",
      link: "Read the case study",
      before: "8 hours",
      after: "10 minutes",
      unit: "of monthly admin for maintenance",
      beforeLabel: "Before",
      afterLabel: "With Yardly",
      commitTitle: "What we commit to for every client",
      commits: [
        { title: "Free assessment", text: "The first meeting and the assessment cost nothing." },
        { title: "Fixed monthly fee", text: "Agreed in advance, so costs are predictable." },
        { title: "Data in the EU", text: "AWS Frankfurt, or your own server." },
        { title: "Ongoing support", text: "We stay with you after go-live." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Worth knowing before you decide.",
      lead: "Can't find your question? Write to us and we'll answer.",
      items: [
        {
          q: "Do we need to replace our existing systems?",
          a: "No. Yardly is added alongside the solutions that already work for you, so your existing systems stay. It takes data from where it already lives.",
        },
        {
          q: "Which systems can it connect to?",
          a: "Connections are built as custom development, so they adapt to the software you already use. During the assessment we check how each system can be accessed.",
        },
        {
          q: "Where is our data stored?",
          a: "On AWS servers in Frankfurt (EU), in a dedicated environment, or on your own server inside your network.",
        },
        {
          q: "Who runs the system?",
          a: "If Yardly runs on AWS, we operate both the server and the application. If it runs on your server, your internal or external IT team operates the server and we operate the application.",
        },
        {
          q: "What happens if something goes wrong?",
          a: "Let us know, and we'll find the cause and fix it as quickly as possible. Support continues after go-live.",
        },
        {
          q: "How much does Yardly cost?",
          a: "Pricing is individual. Once we understand and have discussed your needs, we quote an exact price and monthly fee. The assessment is free.",
        },
      ],
    },
    cta: {
      eyebrow: "Next step",
      title: "Tell us where your process gets stuck today.",
      lead: "In a short meeting we learn what you have in mind and show how Yardly can help. The first assessment is free.",
      note: "No obligation.",
    },
  },

  // -------------------------------------------------------------------------
  solutions: {
    title: "Maintenance, fleet and asset management | Yardly",
    description:
      "Maintenance scheduling, expiry alerts, fleet management, asset register and cost reports, with modules adapted to the way your company works.",
    hero: {
      eyebrow: "Solutions",
      title: "Proven modules, tailored to your processes.",
      lead: "Yardly is built on ready-made modules: fleet, maintenance, documents, equipment and reports. We adapt them to how you work, connect them to your existing systems and add your own business rules.",
      fitLabel: "Built for",
      fit: ["Logistics companies", "Warehousing and distribution", "Transport", "Multi-site operations"],
    },
    automation: {
      eyebrow: "Workflow automation",
      title: "What runs on spreadsheets and e-mail today becomes a system.",
      lead: "Every company works differently, so we don't hand you a ready-made process. We automate yours, alongside the systems you already have.",
      items: [
        {
          label: "Connect",
          title: "Extend your existing systems",
          text: "Yardly is added alongside the systems you already use and takes data from where it already lives.",
          ticks: ["Custom connections to your software", "Fuel, document and asset data in one place", "Existing systems stay in place"],
        },
        {
          label: "Automate",
          title: "Business logic, by your rules",
          text: "Due dates, approvals, notifications: we build the steps around the way you work.",
          ticks: ["Scheduling by mileage, hours or date", "Approval and inspection steps", "E-mail and SMS reminders in several steps"],
        },
        {
          label: "Forecast",
          title: "Maintenance you can plan",
          text: "From existing mileage and usage data, the system estimates when the next mandatory service is due.",
          ticks: ["Estimated date for mileage-based schedules", "Transparent calculation from your own data", "Cost and cost-per-km ranking"],
        },
        {
          label: "Report",
          title: "Reporting that keeps up",
          text: "Costs and deadlines summarised automatically, ready for accounting and management decisions.",
          ticks: ["Costs by category and by vehicle", "Management summary in PDF", "CSV and Excel export"],
        },
      ],
    },
    modules: {
      eyebrow: "Modules",
      title: "Eight modules to build your system from.",
      lead: "You don't need all of them. Based on the assessment, we switch on and tailor the ones you need.",
      items: [
        { title: "Fleet management", text: "Vehicle and driver records, service log, maintenance and fuel in one register.", ticks: ["Assignment to sites and drivers", "Fuel consumption per refuelling", "Excel import from your current list"] },
        { title: "Documents and expiry alerts", text: "Every document linked to a vehicle, driver or asset, with an expiry date. The system warns you in time.", ticks: ["Your own document types, versioning", "Alerts 30, 14, 7 and 1 day ahead", "E-mail and SMS"] },
        { title: "Condition checks", text: "Your own checklists, completed by staff on their phone without logging in.", ticks: ["Drag-and-drop template editor", "One-time link sent by e-mail", "Searchable history"] },
        { title: "Equipment", text: "Forklifts, machines, tools and IT equipment, tracked down to the warehouse and shelf.", ticks: ["Your own categories and locations", "Owner and purchase value", "Stocktake by e-mail with a PDF report"] },
        { title: "Costs and reports", text: "Insurance, leasing, fuel and service by category, vehicle and period.", ticks: ["Automatic categorisation", "Management summary in PDF", "Full database export to Excel"] },
        { title: "Analytics and forecasting", text: "From your own history: cost-per-km ranking, estimated service dates, threshold-based replacement suggestions.", ticks: ["Estimated dates for mileage schedules", "Explainable, threshold-based rules", "For vehicles and equipment"] },
        { title: "Team and permissions", text: "As many roles as you need, with per-feature permissions and multiple sites.", ticks: ["Custom roles", "Four-level permission matrix", "Breakdown by site"] },
        { title: "Customisation", text: "The interface carries your brand, and you decide what the lists contain.", ticks: ["Your logo and accent colour", "Editable catalogues", "Change log"] },
      ],
    },
    tour: {
      eyebrow: "What it looks like",
      title: "A system your maintenance lead will actually want to open.",
      items: [
        { shot: "maintenance", title: "Due dates by mileage or calendar", text: "Maintenance schedules are set by mileage or by calendar period. The system recalculates due dates every day and highlights anything overdue.", alt: "Maintenance schedules per vehicle with due date and status." },
        { shot: "forecast", title: "Service dates estimated from your own data", text: "For mileage-based schedules, the system uses each vehicle's monthly average to estimate when service is due, so you can put it in the calendar.", alt: "Maintenance forecast: remaining kilometres and estimated date per vehicle." },
        { shot: "equipment", title: "Forklifts and machines in one register", text: "Every asset has its own category, site, location and status. Service and stocktakes are handled in the same place.", alt: "Equipment list with forklifts, category, site and status." },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "From a free assessment to ongoing support.",
      lead: "Every project starts with a conversation and doesn't end at go-live.",
      steps: [
        { label: "Free", title: "Assessment", text: "We learn your processes and the systems you use, and find where most time is lost." },
        { label: "Together", title: "Design", text: "We decide which modules and what custom logic you need, and send an individual quote." },
        { label: "Tailoring", title: "Delivery", text: "We tailor the system, connect your data sources and bring over your existing records." },
        { label: "Ongoing", title: "Operation and support", text: "We stay with you after go-live: we find the cause of any issue and fix it as quickly as possible." },
      ],
    },
    operations: {
      eyebrow: "Hosting and security",
      title: "Your data stays in the EU or on your own server.",
      lead: "Choose between two ways of running Yardly. The system and its security measures are the same in both.",
      options: [
        { tag: "Cloud", title: "AWS, Frankfurt (EU)", text: "We run the application in Amazon Web Services' Frankfurt data centre and operate both the server and the application." },
        { tag: "On premises", title: "Your own server", text: "The application runs on your server. Your internal or external IT team operates the server, we operate the application." },
      ],
      securityTitle: "Security measures",
      security: [
        "Role-based permissions, per feature",
        "Change log: who changed what, and when",
        "Encrypted connections (HTTPS/TLS, HSTS)",
        "Two-step sign-in with a code sent by e-mail",
        "Data separated per company",
        "Penetration testing",
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "An individual quote with a fixed monthly fee.",
      text: "There are no packages, because no two projects are the same. After the free assessment, once we know exactly what you need, we send a quote. Pricing covers implementation, a fixed monthly usage fee agreed in advance, and ongoing support.",
      points: ["Free assessment", "Individual quote", "Fixed monthly fee"],
    },
    cta: {
      eyebrow: "Next step",
      title: "Start with the process that takes the most time today.",
      lead: "In a short meeting we'll look at it together and show what automating it would involve.",
      note: "The first assessment is free.",
    },
  },

  // -------------------------------------------------------------------------
  cases: {
    title: "Case study: forklift and fleet maintenance | Yardly",
    description:
      "How we automated forklift and fleet maintenance for a logistics company and cut monthly manual work from 8 hours to 10 minutes.",
    hero: {
      eyebrow: "Case studies",
      title: "Forklift and fleet maintenance without the spreadsheet.",
      lead: "How 8 hours of monthly admin became 10 minutes at a logistics provider.",
    },
    case: {
      factsTitle: "The client",
      facts: [
        { k: "Client", v: "Logistics provider (anonymised)" },
        { k: "Industry", v: "Pharmaceutical, crop protection and beverage logistics" },
        { k: "Systems involved", v: "GLPI (asset register), Therefore (document management), DKV (fuel card data), MNB (Hungarian central bank exchange rates)" },
        { k: "Focus", v: "Maintenance, forecasting, reporting" },
      ],
      sections: [
        { title: "Starting point", text: "Maintenance for warehouse equipment and forklifts was tracked in a complex spreadsheet. It was hard to follow, and maintenance admin took a full working day every month." },
        { title: "Solution", text: "We automated the complete maintenance workflow for the warehouse forklifts and equipment, as well as maintenance for the vehicle fleet. The system estimates the date of each mandatory service in advance, using existing mileage data and usage patterns. Yardly extended the existing systems with continuous reporting and business logic." },
      ],
      resultTitle: "Result",
      resultText: "Monthly maintenance admin went from 8 hours to 10 minutes.",
    },
    cta: {
      eyebrow: "Next step",
      title: "We have a spreadsheet like that too.",
      lead: "Show it to us and we'll look at what can be automated. The first assessment is free.",
      note: "No obligation.",
    },
  },

  // -------------------------------------------------------------------------
  blog: {
    title: "Blog: maintenance, operations, automation | Yardly",
    description: "Practical articles on tracking maintenance, forecasting service dates and extending the systems you already use.",
    hero: {
      eyebrow: "Blog",
      title: "Practical writing on operations and maintenance.",
      lead: "Short, practical articles on turning manual record-keeping into a clear, automated process.",
    },
    postCta: {
      title: "Questions about this article?",
      text: "Write to us and we'll look at how this would work in your company. The first assessment is free.",
    },
  },

  // -------------------------------------------------------------------------
  about: {
    title: "About: tailored operations software | Yardly",
    description:
      "Yardly builds maintenance and operations software in Budapest for mid-sized companies. It extends the software you already use rather than replacing it.",
    hero: {
      eyebrow: "About",
      title: "Less admin, easier days.",
      lead: "We want Yardly to be a constructive and affordable solution that makes companies run more smoothly, makes employees' days easier and gives them time back.",
    },
    story: {
      eyebrow: "Why Yardly?",
      title: "The name comes from the yard, where a company's equipment works.",
      paragraphs: [
        "A yard is the site where a company's vehicles, forklifts and machines are parked and at work. There are many of them, and each has its own deadlines, services and costs.",
        "Gergő Maczák founded Yardly in Budapest so that keeping track of all this no longer depends on complicated spreadsheets and manual admin, but on a clear system shaped around how each company works.",
      ],
      plan: { title: "A company site from above: a warehouse with forklifts and parked vehicles, with equipment due for service highlighted.", warehouse: "WAREHOUSE", forklifts: "FORKLIFTS", parking: "PARKING", gate: "GATE" },
      caption: "Fig. 2 · The yard: the site where a company's equipment works. Highlighted: what is due for service.",
    },
    principles: {
      eyebrow: "What we believe",
      title: "Four principles we work by.",
      lead: "They shape what we build and how we work with our clients.",
      items: [
        { title: "Automation helps, it doesn't replace", text: "Automation doesn't take jobs away. It makes everyday work easier by taking the repetitive, error-prone part off people's shoulders." },
        { title: "We adapt to your processes", text: "We don't sell off-the-shelf software. We build an application around how your company works and support it after go-live." },
        { title: "Your existing systems stay", text: "We add Yardly alongside the solutions that already work. Nothing needs replacing to get your processes in order." },
        { title: "Predictable pricing", text: "We work with a fixed monthly fee agreed in advance, so cost is a planned line item rather than a surprise." },
      ],
    },
    cta: {
      eyebrow: "Next step",
      title: "Let's talk about what takes the most time today.",
      lead: "A short meeting, with no obligation. The first assessment is free.",
      note: "",
    },
  },

  // -------------------------------------------------------------------------
  contact: {
    title: "Contact: free process assessment | Yardly",
    description:
      "Request a free assessment: we review your maintenance and operations processes and send an individual quote with a fixed monthly fee.",
    hero: {
      eyebrow: "Contact",
      title: "Get in touch with us.",
      lead: "Tell us briefly which processes and systems you work with. We'll contact you and arrange a meeting.",
    },
    stepsLabel: "What happens next",
    steps: [
      { title: "We contact you", text: "Gergő Maczák, Yardly's founder, will get in touch with you personally." },
      { title: "A meeting", text: "We learn what you have in mind and discuss how Yardly can help." },
      { title: "Free assessment and quote", text: "Based on your exact needs, we send an individual quote with a fixed monthly fee." },
    ],
    direct: [{ k: "E-mail", email: true }, { k: "Based in", v: "Budapest, Hungary" }],
    form: {
      title: "Write to us",
      intro: "It only takes a few minutes. Fields marked with an asterisk are required.",
      name: "Name",
      email: "Work e-mail",
      company: "Company",
      role: "Job title",
      size: "Company size",
      sizeSelect: "Select…",
      sizes: ["Fewer than 50 employees", "50–149 employees", "150–499 employees", "500 or more employees"],
      systems: "Which systems are involved?",
      systemsHint: "Select all that apply",
      systemOptions: ["ERP", "Warehouse (WMS)", "Fleet and vehicles", "Asset register", "Document management", "Excel spreadsheets", "Other"],
      message: "Which process would you automate first?",
      placeholder: "For example: we track forklift maintenance in Excel and every check takes half a day.",
      consent: "I agree that Yardly may use these details to respond to my enquiry. See the",
      consentLink: "privacy notice",
      submit: "Send message",
      note: "No obligation.",
      errors: {
        name: "Please enter your name.",
        email: "Please enter a valid e-mail address.",
        company: "Please enter your company name.",
        size: "Please choose a company size.",
        consent: "We need your consent to reply.",
      },
      sending: "Sending…",
      successTitle: "Thank you, we've received your message.",
      successText: "We'll be in touch shortly to arrange a meeting.",
      mailtoTitle: "Almost done: just press send.",
      mailtoText: "We've opened your e-mail program with your message. If it didn't open, write to us directly at {email}.",
      errorText: "We couldn't send your message right now. Please write to us directly at {email}.",
      mailSubject: "Enquiry from yardly.hu",
      back: "Back to the homepage",
    },
  },

  // -------------------------------------------------------------------------
  privacy: {
    title: "Privacy notice | Yardly",
    description: "How Yardly handles personal data submitted on this website and generated during your visit.",
    heading: "Privacy notice",
    intro: "This notice covers the yardly.hu website: data entered in the contact form, e-mail enquiries and visit analytics. Data processed while using the Yardly application is covered by a separate notice.",
    body: `
<h2>1. Data controller</h2>
<p><mark class="ph">[Company name]</mark><br>Registered office: <mark class="ph">[address]</mark>, Budapest, Hungary<br>Company registration number: <mark class="ph">[number]</mark><br>Tax number: <mark class="ph">[number]</mark><br>E-mail: <a href="mailto:{email}">{email}</a></p>

<h2>2. What data we process</h2>
<h3>Contact form and e-mail</h3>
<p>Name, work e-mail address, company name, job title, company size, the systems involved and the content of your message, plus anything you choose to share with us by e-mail.</p>
<h3>Visit analytics (only with your consent)</h3>
<p>If you agree, we use Google Analytics cookies to measure which pages are visited and how: pages viewed, time of visit, device and browser type, and approximate location. Without your consent, no such cookies are set.</p>
<h3>Technical logs</h3>
<p>Our hosting provider's servers log IP addresses and request times in order to serve pages and prevent abuse.</p>

<h2>3. Purposes and legal bases</h2>
<ul>
<li><strong>Responding to enquiries and sending quotes:</strong> your consent (GDPR Art. 6(1)(a)) and steps prior to entering into a contract (GDPR Art. 6(1)(b)).</li>
<li><strong>Visit analytics:</strong> your consent (GDPR Art. 6(1)(a)), which you can withdraw at any time.</li>
<li><strong>Technical logs:</strong> our legitimate interest in running the website securely (GDPR Art. 6(1)(f)).</li>
</ul>
<p><mark class="ph">[Legal review: confirm legal bases.]</mark></p>

<h2>4. How long we keep data</h2>
<ul>
<li>Enquiries: <mark class="ph">[e.g. 1 year from the enquiry, or until the end of the contract if one is signed]</mark>.</li>
<li>Analytics data: as configured in Google Analytics, <mark class="ph">[2 or 14 months]</mark>.</li>
<li>Technical logs: <mark class="ph">[retention period]</mark>.</li>
</ul>

<h2>5. Who has access</h2>
<p>Yardly staff have access to the data as far as their work requires. We use the following providers:</p>
<ul>
<li><strong>Amazon Web Services EMEA SARL</strong> (Luxembourg): hosting and operation of the website in the Frankfurt (EU) region.</li>
<li><strong>E-mail provider:</strong> <mark class="ph">[name of provider]</mark>, to deliver messages.</li>
<li><strong>Google Ireland Ltd.</strong>: visit analytics, only with your consent. Data may be transferred to the United States; Google participates in the EU–US Data Privacy Framework.</li>
</ul>
<p><mark class="ph">[Legal review: data processing agreements.]</mark></p>

<h2>6. Cookies</h2>
<p>Your cookie choice is stored in your browser without using a cookie. If you consent, Google Analytics sets the <code>_ga</code> and <code>_ga_*</code> cookies for up to 2 years. You can change your choice at any time using the "Cookie settings" link at the bottom of the page.</p>

<h2>7. Your rights</h2>
<p>You can request access to your personal data, its rectification, erasure or restriction of processing, exercise your rights to data portability and to object, and withdraw your consent at any time. Send requests to <a href="mailto:{email}">{email}</a>.</p>

<h2>8. Complaints</h2>
<p>If you believe your data is processed unlawfully, you can lodge a complaint with the Hungarian National Authority for Data Protection and Freedom of Information (NAIH, Falk Miksa utca 9–11, 1055 Budapest, <a href="https://naih.hu" rel="noopener">naih.hu</a>) or go to court.</p>

<p class="legal-meta">Effective from: <mark class="ph">[date]</mark></p>`,
  },

  imprint: {
    title: "Imprint | Yardly",
    description: "Details of the operator of the yardly.hu website.",
    heading: "Imprint",
    intro: "Pursuant to Hungarian Act CVIII of 2001 on electronic commerce services.",
    body: `
<h2>Service provider</h2>
<dl class="legal-dl">
<div><dt>Company name</dt><dd><mark class="ph">[company name]</mark></dd></div>
<div><dt>Registered office</dt><dd><mark class="ph">[address]</mark>, Budapest, Hungary</dd></div>
<div><dt>Registration number</dt><dd><mark class="ph">[number]</mark></dd></div>
<div><dt>Registry court</dt><dd><mark class="ph">[Court of Registration of the Budapest-Capital Regional Court]</mark></dd></div>
<div><dt>Tax number</dt><dd><mark class="ph">[number]</mark></dd></div>
<div><dt>Represented by</dt><dd><mark class="ph">[name]</mark></dd></div>
<div><dt>E-mail</dt><dd><a href="mailto:{email}">{email}</a></dd></div>
</dl>
<h2>Hosting provider</h2>
<dl class="legal-dl">
<div><dt>Name</dt><dd>Amazon Web Services EMEA SARL</dd></div>
<div><dt>Address</dt><dd>38 Avenue John F. Kennedy, L-1855 Luxembourg</dd></div>
<div><dt>Website</dt><dd><a href="https://aws.amazon.com" rel="noopener">aws.amazon.com</a></dd></div>
</dl>`,
  },

  notFound: {
    title: "Page not found | Yardly",
    eyebrow: "404",
    heading: "We can't find this page.",
    text: "It may have moved, or there may be a typo in the address.",
    back: "Back to the homepage",
  },
};
