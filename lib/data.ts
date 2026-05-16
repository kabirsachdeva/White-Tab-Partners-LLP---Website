// ─── FIRM DATA ───────────────────────────────────────────────────────────────

export const firmData = {
  name: "White Tab Partners LLP",
  tagline: "Craft. Clarity. Commitment.",
  description: "A full-service law firm with offices in New Delhi and Dubai.",
  heroDescription:
    "A senior-led Indian law firm with offices in New Delhi and Dubai — built for disputes, investigations, and cross-border matters that demand more than routine legal work.",
  email: "info@whitetabpartners.com",
  phone: "011-41326301",
  phones: ["011-41326301", "+91-81818-11881", "+91-87430-09300"],
  whatsapp: "https://wa.me/918181811881",
  linkedin: "https://linkedin.com/company/whitetabpartners",
  careerEmail: "career@whitetabpartners.com",
};

export const offices = [
  {
    city: "New Delhi",
    addresses: [
      "C-30, LGF, Geetanjali Enclave\nNew Delhi – 110 017",
      "T-17, Green Park Main\nNew Delhi – 110 016",
    ],
  },
  {
    city: "Dubai",
    addresses: ["HDS Tower, Cluster F, JLT\nOffice No. 3601, Dubai, UAE"],
  },
];

// ─── STATS ──────────────────────────────────────────────────────────────────

export const stats = [
  { value: "30+", label: "Years of Combined Experience" },
  { value: "India & UAE", label: "Active Presence" },
  { value: "Pan-India", label: "Client Base" },
  { value: "12", label: "Practice Areas" },
  { value: "CA & CS", label: "In-House Financial Professionals" },
  { value: "₹200 Cr+", label: "Recovered in Litigation & Enforcement" },
];

// ─── PARTNERS ───────────────────────────────────────────────────────────────

export const partners = [
  {
    id: "randeep-sachdeva",
    name: "Randeep Sachdeva",
    role: "Managing Partner",
    enrollment: "2018, Bar Council of Delhi, Supreme Court of India",
    email: "randeepsachdeva@whitetabpartners.com",
    image: "/images/randeep-sachdeva.jpg",
    bio: "Focuses on litigation and advisory work spanning arbitration, commercial disputes, civil matters, white collar issues, and financial fraud. Has collaborated with the Enforcement Directorate and the Additional Solicitor General's office, providing dual-perspective expertise in financial crime. Appeared in significant money laundering and criminal proceedings. Also advises on Dubai Golden Visa applications including alternative pathways.",
    associations: [
      "Justice Amit Mahajan",
      "Mr. Abhimanyu Bhandari (Senior Advocate)",
      "Mr. Jayant K. Sud (former Additional Solicitor General)",
    ],
    practiceAreas: [
      "Arbitration & ADR",
      "White Collar Crime & PMLA",
      "Civil Litigation",
      "Commercial Litigation",
      "Cross-Border Disputes",
      "Dubai Golden Visa",
    ],
  },
  {
    id: "prashant-sodhi",
    name: "Prashant Sodhi",
    role: "Managing Partner",
    enrollment: "2019, Bar Council of Delhi, Delhi High Court",
    email: "prashantsodhi@whitetabpartners.com",
    image: "/images/prashant-sodhi.jpg",
    bio: "Specialises in white collar crime, financial disputes, criminal trials, and civil litigation. Regularly appears before the Delhi High Court and district courts on sensitive matters. Known for meticulous preparation, sharp drafting, and a practical instinct for litigation strategy.",
    associations: [],
    practiceAreas: [
      "White Collar Crime",
      "High-Value Financial Disputes",
      "Criminal Trials",
      "Civil Litigation",
      "Drafting & Strategy",
    ],
  },
  {
    id: "shivaang-gupta",
    name: "Shivaang Gupta",
    role: "Associate Partner",
    enrollment: "2015, Bar Council of Delhi",
    email: "shivaanggupta@whitetabpartners.com",
    image: "/images/shivaang-gupta.jpg",
    bio: "Litigation specialist with extensive trial court experience in civil and criminal matters. Represents clients in commercial disputes, arbitration, and financial recovery before the Delhi High Court and district courts. Manages SARFAESI Act and Negotiable Instruments Act enforcement proceedings. Has handled Prohibition of Child Marriage Act, Mental Health Act, and Constitutional matters.",
    associations: [],
    practiceAreas: [
      "Civil & Criminal Litigation",
      "Commercial Disputes",
      "Arbitration",
      "Financial Recovery",
      "Constitutional Matters",
    ],
  },
  {
    id: "tanpreet-kohli",
    name: "Tanpreet Singh Kohli",
    role: "Of Counsel, CA & Advocate",
    enrollment: "2022, Bar Council of Delhi; ICAI (Chartered Accountant)",
    email: "tanpreetkohli@whitetabpartners.com",
    image: "/images/tanpreet-kohli.jpg",
    bio: "Dual-qualified professional providing integrated legal and financial expertise. Advises on tax matters that intersect legal and accounting analysis, and supports the firm's disputes and forensic financial practice. Represents clients before tax authorities and appellate bodies.",
    associations: [],
    practiceAreas: [
      "Tax Advisory",
      "International Taxation",
      "Statutory Compliance",
      "Tax Litigation",
    ],
  },
];

// ─── PRACTICE AREAS ─────────────────────────────────────────────────────────

export const practiceAreaGroups = [
  {
    id: "corporate",
    title: "Corporate",
    overview:
      "White Tab Partners advises companies, promoters, founders, investors, and private clients on corporate structuring, governance, transactions, and control-related matters.",
    sectors: ["Fintech", "Manufacturing", "Real Estate", "Private Equity", "Life Sciences"],
    areas: [
      {
        name: "Corporate Governance",
        items: [
          "Board and shareholder advisory",
          "Governance policies and internal protocols",
          "Directors' duties, conflicts, and related party issues",
          "Shareholder rights and reserved matters",
          "Corporate records, resolutions, and compliance",
        ],
      },
      {
        name: "Employment",
        items: [
          "Employment and consultancy agreements",
          "Senior management exits and settlements",
          "Non-compete, non-solicit, and confidentiality matters",
          "Disciplinary and misconduct proceedings",
          "Employment aspects of transactions and restructurings",
        ],
      },
      {
        name: "Mergers and Acquisitions",
        items: [
          "Legal due diligence and risk assessment",
          "Share purchase and business transfer documentation",
          "Structuring of acquisitions and exits",
          "Closing mechanics and post-closing obligations",
          "Promoter and control-related advisory",
        ],
      },
      {
        name: "Private Client",
        items: [
          "Succession and family arrangements",
          "Family settlements and private agreements",
          "Asset ownership and title review",
          "Strategy in business-linked personal disputes",
          "Founder and promoter advisory",
        ],
      },
      {
        name: "Private Equity",
        items: [
          "Term sheets, subscription and shareholders' agreements",
          "Investor rights and exit mechanisms",
          "Transaction structuring and control analysis",
          "Due diligence on target entities",
          "Post-investment governance support",
        ],
      },
      {
        name: "Real Estate",
        items: [
          "Title due diligence",
          "Sale, purchase, lease, and development documentation",
          "Joint development arrangements",
          "Possession and specific performance claims",
          "Landholding and transfer advisory",
        ],
      },
      {
        name: "Taxation",
        items: [
          "Direct and indirect tax advisory",
          "Tax structuring in transactions",
          "Assessment and appellate representation",
          "Demands, penalties, and interpretation disputes",
          "Tax exposure linked to enforcement actions",
        ],
      },
    ],
  },
  {
    id: "finance",
    title: "Finance",
    overview:
      "The firm advises lenders, borrowers, creditors, and regulated entities on financing transactions, enforcement strategy, and restructuring.",
    sectors: ["Banking", "NBFCs", "Infrastructure", "Renewable Energy", "Stressed Assets"],
    areas: [
      {
        name: "Banking and Finance",
        items: [
          "Facility and security documentation",
          "Guarantees and collateral enforcement",
          "Debt structuring and negotiations",
          "Default and restructuring advisory",
          "Disputes arising from finance documents",
        ],
      },
      {
        name: "Financial Regulatory",
        items: [
          "Regulatory review of business models",
          "Licensing and compliance obligations",
          "Responses to regulatory notices",
          "Structuring regulated financial activity",
          "Governance framework review",
        ],
      },
      {
        name: "Infrastructure and Project Finance",
        items: [
          "Project and finance documentation review",
          "Security structuring",
          "Concession and EPC advisory",
          "Delay and performance disputes",
          "Recovery and claim representation",
        ],
      },
      {
        name: "Insolvency and Bankruptcy",
        items: [
          "Initiation and defence of insolvency proceedings",
          "Claims before resolution professionals",
          "Committee of creditors advisory",
          "Resolution plan and restructuring support",
          "Appellate proceedings",
        ],
      },
      {
        name: "Recovery of Dues",
        items: [
          "Demand notices and pre-litigation strategy",
          "Proceedings before DRT and civil courts",
          "Enforcement of finance and security documents",
          "Execution of decrees and settlements",
          "Recovery in fraud-linked matters",
        ],
      },
    ],
  },
  {
    id: "dispute-resolution",
    title: "Dispute Resolution",
    overview:
      "The firm appears before the Supreme Court of India, High Courts, tribunals, and arbitral forums.",
    sectors: [
      "Commercial Contracts",
      "Financial Services",
      "Regulated Businesses",
      "Promoter Disputes",
      "Cross-Border Enforcement",
    ],
    areas: [
      {
        name: "Arbitration",
        items: [
          "Arbitration strategy from notice to award",
          "Claims, defences, and procedural applications",
          "Section 9, 11, 34, and 37 proceedings",
          "Award enforcement and challenge",
          "Drafting and review of arbitration clauses",
        ],
      },
      {
        name: "Civil and Criminal Litigation",
        items: [
          "Civil suits and injunctions",
          "Criminal complaints, bail, and trial defence",
          "Commercial and contractual disputes",
          "Appellate and revisional proceedings",
          "Multi-forum litigation strategy",
        ],
      },
      {
        name: "White Collar Crime and Investigations",
        items: [
          "PMLA and fraud-related proceedings",
          "Representation before investigative agencies",
          "Search, summons, and seizure advisory",
          "Internal fact review and investigation support",
          "Parallel civil, criminal, and regulatory strategy",
        ],
      },
      {
        name: "Commercial Litigation",
        items: [
          "Shareholder and promoter disputes",
          "Contractual claims and damages",
          "Injunctions and urgent reliefs",
          "Commercial execution proceedings",
          "Multi-jurisdictional litigation strategy",
        ],
      },
    ],
  },
  {
    id: "markets",
    title: "Markets",
    overview:
      "Advising issuers, promoters, investors, and regulated entities on securities, capital markets, and cross-border matters.",
    sectors: [
      "Capital Raising",
      "Listed Entities",
      "Cross-Border Trade",
      "India-UAE Structuring",
      "Regulated Markets",
    ],
    areas: [
      {
        name: "Capital Markets",
        items: [
          "Equity issuance documentation",
          "Disclosure and governance review",
          "Securities transactions",
          "Investor and promoter rights",
          "Market-related disputes and regulatory issues",
        ],
      },
      {
        name: "Debt Markets",
        items: [
          "Debt issuance documentation",
          "Security and covenant analysis",
          "Issuer and investor rights",
          "Regulatory compliance support",
          "Default and enforcement disputes",
        ],
      },
      {
        name: "Securities and Regulatory Advisory",
        items: [
          "Securities law compliance",
          "Regulatory notices and representation",
          "Disclosure and governance obligations",
          "Transaction review with securities implications",
          "Enforcement-sensitive strategic advice",
        ],
      },
      {
        name: "Cross-Border Matters",
        items: [
          "Cross-border dispute strategy",
          "Coordination with foreign counsel",
          "Jurisdiction and governing law advisory",
          "International transaction support",
          "Cross-border enforcement and recovery",
        ],
      },
      {
        name: "International Desk Support",
        items: [
          "India-UAE transaction and dispute coordination",
          "Cross-border commercial advisory",
          "International structuring support",
          "Residency and mobility-linked legal advisory",
          "Coordination with overseas advisers",
        ],
      },
    ],
  },
];

// ─── ABOUT KEY DIFFERENTIATORS ──────────────────────────────────────────────

export const differentiators = [
  {
    number: "01",
    title: "Proven Courtroom Authority",
    body: "Our partners have appeared before the Supreme Court of India, including Constitution Bench matters, the Delhi High Court, and specialist tribunals across India. We have also recovered over ₹200 crores for clients in civil litigation and enforcement matters.",
  },
  {
    number: "02",
    title: "Forensic & Financial Integration",
    body: "Our advocates work alongside in-house Chartered Accountants and Company Secretaries — not on referral, but as part of the same team. This gives clients coordinated advice across litigation strategy, financial analysis, compliance, and forensic review in a single instruction.",
  },
  {
    number: "03",
    title: "Cross-Border Capability",
    body: "With an office in Dubai and international working relationships in multiple jurisdictions, we advise on cross-border matters including DIFC proceedings, global mobility issues, and enforcement of foreign awards in India.",
  },
  {
    number: "04",
    title: "White Collar & Enforcement Expertise",
    body: "With direct prior experience at the Enforcement Directorate and the Office of the Additional Solicitor General of India, we offer defence and advisory in financial crime matters with an authority that comes only from having worked both sides of the enforcement process.",
  },
];

export const sectors = [
  "Manufacturing",
  "Renewable Energy",
  "Fintech & NBFC",
  "FMCG",
  "Life Sciences & Pharma",
  "Real Estate",
  "Technology & AI",
  "Consumer Electronics",
  "Insurance",
  "Mobility & EV",
  "Food & Hospitality",
  "GovTech & Digital Services",
  "Entertainment & Media",
  "Commodities & Mining (International)",
  "LegalTech",
];

// ─── INTERNATIONAL DESK ─────────────────────────────────────────────────────

export const internationalServices = [
  {
    title: "Dubai Golden Visa",
    description:
      "Advisory on standard and non-standard Dubai Golden Visa applications, including alternative eligibility pathways for entrepreneurs, investors, and professionals.",
  },
  {
    title: "Cross-Border Dispute Resolution",
    description:
      "Representation and strategy in DIFC arbitration and international dispute forums, with seamless coordination between our New Delhi and Dubai offices.",
  },
  {
    title: "Enforcement of Orders Abroad",
    description:
      "Enforcement strategy for Indian court orders and arbitral awards abroad, with coordinated recovery proceedings across jurisdictions.",
  },
  {
    title: "Financial Fraud Audits",
    description:
      "In-house Chartered Accountants conducting financial fraud investigations and forensic audits for cross-border matters involving India and the UAE.",
  },
  {
    title: "International Corporate Structuring",
    description:
      "Advisory on India-UAE entity structuring, cross-border transactions, and governance frameworks for businesses operating across both markets.",
  },
  {
    title: "Global Mobility Solutions",
    description:
      "Second passport and residency advisory for high-net-worth individuals, including Tier-1 investor visas and global mobility strategy.",
  },
];

// ─── NAV LINKS ───────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "International Desk", href: "/international-desk" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];
