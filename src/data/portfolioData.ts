export interface CaseStudy {
  id: string;
  client: string;
  domain?: string;
  title: string;
  category: 'Healthcare' | 'Enterprise Tech' | 'Federal & Gov' | 'FinTech & Talent';
  timeframe: string;
  executiveSummary: string;
  technicalArchitecture: string[];
  keyStack: string[];
  impactMetrics: { label: string; value: string }[];
  fullCaseDescription: string;
  roiHighlight: string;
  systemsArchitected: string[];
}

export interface CapabilityPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Product & Strategy' | 'Agentic & RAG' | 'Vision & OCR';
  iconName: string;
  technicalDeliverables: string[];
  sampleArchitectureCode?: string;
}

export const EXECUTIVE_PROFILE = {
  name: "Matthew Lowinger",
  title: "Senior AI Product Manager",
  tagline: "Product Managing Enterprise Agentic AI, Intelligent OCR, & Hybrid RAG Platforms",
  bio: [
    "Matthew Lowinger is a Senior AI Product Manager with over 8 years of experience leading multi-million-dollar AI product lifecycles and digital transformations across Fortune 500s, federal research labs, and high-growth venture studios.",
    "Specializing in Agentic Multi-Agent Workflows, Intelligent OCR & Document Vision, Hybrid RAG Systems, and LLM Evaluation Pipelines, Matthew bridges C-suite product strategy with production-grade AI system execution.",
    "He has product managed mission-critical systems for Bain & Company, Cisco Meraki, the National Institutes of Health (NIH), MedStar Health, Allegis Group, and CHIME—embedding trustworthy AI governance, measurable ROI, and seamless user experiences into every release."
  ],
  location: "Washington, D.C.",
  email: "matt.lowinger@gmail.com",
  linkedin: "https://www.linkedin.com/in/mattlowinger/",
  stats: [
    { value: "50+", label: "Enterprise AI Engagements", subtext: "Fortune 500s, Gov, & Startups" },
    { value: "8+", label: "Years AI Product Leadership", subtext: "Product Strategy & Execution" },
    { value: "$100M+", label: "Value Unlocked", subtext: "Product ROI & Efficiency Gains" },
    { value: "100%", label: "Client Recommendation", subtext: "Across B2B Partners" }
  ]
};

export const PARTNER_LOGOS = [
  { name: "Bain & Company", domain: "bain.com", category: "Strategy Consulting" },
  { name: "Cisco", domain: "cisco.com", category: "Enterprise Tech" },
  { name: "National Institutes of Health", domain: "nih.gov", category: "Federal Research" },
  { name: "Johnson & Johnson", domain: "jnj.com", category: "Healthcare & Life Sciences" },
  { name: "Johns Hopkins Medicine", domain: "hopkinsmedicine.org", category: "Healthcare" },
  { name: "Allegis Group", domain: "allegisgroup.com", category: "Talent & Enterprise" },
  { name: "MedStar Health", domain: "medstarhealth.org", category: "Healthcare Network" },
  { name: "CHIME Healthcare", domain: "chimecentral.org", category: "Executive Leadership" },
  { name: "IHG Hotels & Resorts", domain: "ihg.com", category: "Global Hospitality" },
  { name: "Techstars", domain: "techstars.com", category: "Venture Accelerator" },
  { name: "NY Blood Center", domain: "nybc.org", category: "Life Sciences" },
  { name: "American University", domain: "american.edu", category: "Higher Ed" },
  { name: "Loyola Maryland", domain: "loyola.edu", category: "Higher Ed" },
  { name: "UMBC", domain: "umbc.edu", category: "Research University" },
  { name: "MICA", domain: "mica.edu", category: "Design & Innovation" },
  { name: "Towson University", domain: "towson.edu", category: "Higher Ed" }
];

export const CAPABILITIES: CapabilityPillar[] = [
  {
    id: "ai-product-management",
    title: "AI Product Management & Strategy",
    tagline: "End-to-End Product Discovery, Roadmapping & Value Delivery",
    category: "Product & Strategy",
    iconName: "Layers",
    description: "Leading cross-functional teams of engineers, data scientists, and UX designers to discover, build, and scale enterprise AI products that solve high-value customer problems with measurable ROI.",
    technicalDeliverables: [
      "Product vision, PRDs & user story mapping",
      "AI feasibility analysis & model build-vs-buy frameworks",
      "Backlog prioritization (RICE / WSJF) & sprint ops",
      "North Star metrics, CSAT & product telemetry tracking"
    ]
  },
  {
    id: "agentic-systems",
    title: "Agentic Systems & Multi-Agent PM",
    tagline: "Autonomous Workflow Orchestration & Directed Graphs",
    category: "Agentic & RAG",
    iconName: "Bot",
    description: "Product managing and architecting stateful multi-agent systems capable of autonomous reasoning, tool execution, and dynamic task decomposition for complex enterprise workflows.",
    technicalDeliverables: [
      "LangGraph & AutoGen multi-agent architectures",
      "Human-in-the-Loop (HITL) approval gates & audit logs",
      "Self-correcting agent evaluation loops",
      "Deterministic tool calling & API integration"
    ],
    sampleArchitectureCode: `// Multi-Agent Workflow Supervisor Routing
const orchestrateTask = async (userGoal: string) => {
  const plan = await plannerAgent.evaluate(userGoal);
  const result = await executorAgent.runToolGraph(plan.graph);
  return await verifierAgent.auditOutput(result);
};`
  },
  {
    id: "intelligent-ocr-vision",
    title: "Intelligent OCR & Document Vision",
    tagline: "Multimodal Document Intelligence & Unstructured Extraction",
    category: "Vision & OCR",
    iconName: "Scan",
    description: "Architecting high-precision OCR and document intelligence pipelines that transform complex PDF, scan, and unstructured medical/financial documents into structured database records.",
    technicalDeliverables: [
      "Layout-aware OCR & table extraction (LayoutLM, Vision LLMs)",
      "Automated schema mapping & validation (Pydantic)",
      "Zero-shot document classification & routing",
      "High-throughput batch document processing engines"
    ],
    sampleArchitectureCode: `// Intelligent OCR & Document Vision Extraction Pipeline
const processDocumentScan = async (pdfBuffer: Buffer) => {
  const layout = await visionOCR.extractLayout(pdfBuffer);
  const structuredData = await llmParser.extractSchema(layout, ComplianceSchema);
  return await confidenceScorer.validate(structuredData);
};`
  },
  {
    id: "enterprise-rag",
    title: "Enterprise RAG Architectures",
    tagline: "Context Retrieval, Vector Search & Zero-Hallucination Guardrails",
    category: "Agentic & RAG",
    iconName: "Database",
    description: "Designing enterprise Retrieval-Augmented Generation systems powered by dense/sparse hybrid search, reranking models, and contextual chunking for zero-hallucination document querying.",
    technicalDeliverables: [
      "Hybrid Vector Search (pgvector, Pinecone, Qdrant)",
      "Cohere & Cross-Encoder reranking pipelines",
      "Metadata filtering & tenant isolation security",
      "Context quality metrics & hallucination detection"
    ],
    sampleArchitectureCode: `// Hybrid Dense + Sparse RAG Pipeline
const retrieveContext = async (query: string, tenantId: string) => {
  const dense = await vectorDB.search(await embed(query), { tenantId });
  const sparse = await bm25Search(query, { tenantId });
  return await crossEncoderRerank(merge(dense, sparse), query);
};`
  },
  {
    id: "llm-evals-guardrails",
    title: "LLM Fine-Tuning, Evals & Guardrails",
    tagline: "Programmatic Prompt Engineering & Trustworthy AI Governance",
    category: "Product & Strategy",
    iconName: "Terminal",
    description: "Implementing automated LLM evaluation benchmarks, DSPy prompt compilation, toxicity filtering, and regulatory compliance frameworks (EU AI Act, HIPAA) for enterprise deployments.",
    technicalDeliverables: [
      "DSPy programmatic prompt optimization & tuning",
      "Automated eval suites (Ragas, DeepEval, TruLens)",
      "Prompt injection defense & PII redaction guardrails",
      "Model fine-tuning data pipeline curation"
    ]
  },
  {
    id: "ai-systems-architecture",
    title: "AI Infrastructure & Cloud Systems Architecture",
    tagline: "Scalable Enterprise Topology & LLMOps",
    category: "Product & Strategy",
    iconName: "Network",
    description: "Architecting cloud-native AI microservices on AWS, GCP, and Azure featuring private VPC endpoints, streaming APIs, model caching, and cost-effective GPU inference routing.",
    technicalDeliverables: [
      "VPC Service Controls & Private Model Endpoints",
      "LLMOps observability, distributed tracing & telemetry",
      "Model quantization (vLLM, TensorRT) & caching layers",
      "FinOps cost management & token budget controls"
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "bain-compliance",
    client: "Bain & Company",
    domain: "bain.com",
    title: "Healthcare Compliance Software — AI Product Discovery & OCR / RAG Roadmap",
    category: "Healthcare",
    timeframe: "Apr 2023 — Aug 2024",
    executiveSummary: "Partnered with Bain & Company strategy teams on market discovery, user research, and AI product architecture for a global healthcare compliance software platform.",
    technicalArchitecture: [
      "Natural Language Regulatory Mapping Engine",
      "Automated Gap Analysis via Intelligent OCR & Document Parsing",
      "Multi-tenant Tiered SaaS Architecture with Hybrid RAG"
    ],
    keyStack: ["AI Product Management", "Intelligent OCR", "RAG Document Extraction", "Regulatory AI"],
    impactMetrics: [
      { label: "Target Market", value: "3.2x Expansion" },
      { label: "Audit Prep Speed", value: "65% Faster" },
      { label: "Product Roadmap", value: "100% Validated" }
    ],
    fullCaseDescription: "Led product discovery, customer interviews with hospital compliance officers, and competitive analysis. Product managed the roadmap for integrating AI-driven document OCR and automated regulatory gap analysis across enterprise hospital networks.",
    roiHighlight: "Delivered actionable market entry strategy and prioritized feature PRDs, securing C-suite buy-in for multi-million-dollar AI product investment.",
    systemsArchitected: ["Intelligent OCR Document Parser", "Hybrid RAG Search", "Compliance Mapping Engine"]
  },
  {
    id: "cisco-meraki",
    client: "Cisco Meraki Ecosystem",
    domain: "cisco.com",
    title: "Distributed Release Management & AI Operations Platform",
    category: "Enterprise Tech",
    timeframe: "May 2022 — Aug 2023",
    executiveSummary: "Product managed a distributed engineering team of 10 developers across 5 time zones for a Cisco Premier Partner, building release pipelines and API integrations.",
    technicalArchitecture: [
      "Automated CI/CD Quality Gates & Testing Pipelines",
      "Agile Scrum Operations & Jira Telemetry Tracking",
      "Cisco Meraki Cloud API Integration Suite"
    ],
    keyStack: ["Product Operations", "Agile Leadership", "Cisco Meraki APIs", "Release Management"],
    impactMetrics: [
      { label: "Time-to-Market", value: "40% Faster" },
      { label: "Dev Cost Reduction", value: "28% Saved" },
      { label: "Release CSAT", value: "4.9 / 5.0" }
    ],
    fullCaseDescription: "Served as Product Lead and Agile Scrum Master. Re-engineered sprint workflows, eliminated timezone delivery friction, and enforced strict change management protocols for enterprise cloud networking software.",
    roiHighlight: "Reduced release rollbacks to near zero while accelerating feature delivery velocity by 40%.",
    systemsArchitected: ["Automated Release Gatekeeper", "Cloud API Integrator"]
  },
  {
    id: "nih-hemacomply",
    client: "National Institutes of Health (NIH)",
    domain: "nih.gov",
    title: "HemaComply EMAC — Intelligent OCR & Compliance Automation Platform",
    category: "Federal & Gov",
    timeframe: "Feb 2021 — Nov 2021",
    executiveSummary: "AI Product & Implementation Lead for HemaComply EMAC—a critical federal healthcare compliance system managing blood research quality across NIH facilities.",
    technicalArchitecture: [
      "Real-Time Equipment Telemetry & Alerting Engine",
      "FDA/HIPAA Compliant Audit Trail & OCR Maintenance Logs",
      "Asset Barcode & Calibration Verification Pipeline"
    ],
    keyStack: ["Federal AI Product", "FDA Audit Trails", "Intelligent OCR", "System Integration"],
    impactMetrics: [
      { label: "Compliance Rate", value: "99.8% Verified" },
      { label: "Maintenance Errors", value: "82% Reduction" },
      { label: "Audit Readiness", value: "1-Click Instant" }
    ],
    fullCaseDescription: "Gathered clinical requirements from NIH lab directors, defined PRDs, and led system configuration for automated real-time alert modules. Lab supervisors gained instant visibility into calibration history and document logs.",
    roiHighlight: "Streamlined federal audit preparation from weeks to minutes while maintaining 100% uptime for critical research equipment.",
    systemsArchitected: ["OCR Maintenance Document Extractor", "Telemetry Alert System"]
  },
  {
    id: "allegis-lifevue",
    client: "Allegis Group",
    domain: "allegisgroup.com",
    title: "LifeVue — AI Talent Intelligence & Candidate Skill Extraction Platform",
    category: "FinTech & Talent",
    timeframe: "Jun 2020 — Jan 2021",
    executiveSummary: "Product Manager & Product Owner for LifeVue at Allegis Group ($13B+ global staffing leader). Architected product roadmap from initial concept to commercial launch.",
    technicalArchitecture: [
      "NLP Skill Extraction & Candidate Matching Algorithm",
      "Freemium SaaS User Onboarding & Portfolio Builder",
      "Microservice Profile Aggregator"
    ],
    keyStack: ["AI Product Management", "NLP Skill Parsing", "SaaS Monetization", "Talent Intelligence"],
    impactMetrics: [
      { label: "User Engagement", value: "310% Growth" },
      { label: "Match Accuracy", value: "45% Increase" },
      { label: "Product Launch", value: "On-Time / On-Budget" }
    ],
    fullCaseDescription: "Managed product backlogs, customer discovery interviews, and engineering sprints. Integrated machine learning skill parsing to enrich candidate portfolios beyond traditional static resumes.",
    roiHighlight: "Successfully commercialized the platform, expanding Allegis Group's high-fidelity candidate pipeline with automated skill matching.",
    systemsArchitected: ["NLP Candidate Skill Parser", "Talent Matching Engine"]
  },
  {
    id: "medstar-oct",
    client: "MedStar Health",
    domain: "medstarhealth.org",
    title: "Optical Coherence Tomography (OCT) Medical Vision Mobile Product",
    category: "Healthcare",
    timeframe: "Mar 2020 — Feb 2021",
    executiveSummary: "Founding Product Manager for MedStar Health ($6B+ system), designing a specialized medical computer vision mobile app for cardiologists to diagnose in-stent restenosis.",
    technicalArchitecture: [
      "DICOM & High-Resolution Optical Image Processing Pipeline",
      "Cardiology Image Classifier & Annotation Tool",
      "HIPAA-Compliant Peer Consultation Sharing Protocol"
    ],
    keyStack: ["Medical Computer Vision", "Mobile AI UX", "HIPAA Architecture", "Clinical Product Management"],
    impactMetrics: [
      { label: "Cath Lab Adoption", value: "88% Doctors" },
      { label: "Diagnosis Speed", value: "3x Acceleration" },
      { label: "Physician CSAT", value: "4.9 Stars" }
    ],
    fullCaseDescription: "Designed product vision and UI tailored to interventional cardiologists in catheterization labs. Integrated fast image viewing, favorite case repositories, and peer consultation tools.",
    roiHighlight: "Significantly improved in-stent restenosis classification speed and diagnostic accuracy across regional cath labs.",
    systemsArchitected: ["Medical Computer Vision Pipeline", "DICOM Image Viewer"]
  },
  {
    id: "chime-ecosystem",
    client: "CHIME Healthcare",
    domain: "chimecentral.org",
    title: "Executive Health IT Digital Ecosystem & Product Operations",
    category: "Healthcare",
    timeframe: "Aug 2022 — Oct 2023",
    executiveSummary: "Head of Program Management for CHIME, leading 25 engineers and product leads across 4 core executive digital platforms.",
    technicalArchitecture: [
      "Unified Healthcare CIO Portal & Learning Management System",
      "Cross-Platform Mobile App Suite for Executive Summits",
      "Enterprise CMS & Identity Integration"
    ],
    keyStack: ["Product Operations", "Executive Platforms", "Cross-Functional Leadership", "Agile PMO"],
    impactMetrics: [
      { label: "Program Budget", value: "$600K Managed" },
      { label: "Team Led", value: "25 Engineers/PMs" },
      { label: "Member Engagement", value: "+32% Boost" }
    ],
    fullCaseDescription: "Unified disparate web and mobile applications under a cohesive product architecture. Managed budget allocation, cross-functional delivery, and strategic product roadmaps for thousands of hospital CIOs.",
    roiHighlight: "Optimized product operational efficiency by 35% while expanding digital engagement across national summits.",
    systemsArchitected: ["Executive Member Portal", "Summit Mobile App Suite"]
  },
  {
    id: "johns-hopkins-lms",
    client: "Johns Hopkins Medicine",
    domain: "hopkinsmedicine.org",
    title: "Psychiatric Medical Education Platform & Quality Assurance",
    category: "Healthcare",
    timeframe: "May 2019 — Aug 2019",
    executiveSummary: "Product Manager for Johns Hopkins Medicine's psychiatric training software, ensuring rigorous quality assurance and user testing.",
    technicalArchitecture: [
      "SCORM Compliant Medical LMS Engine",
      "Automated Quality Assurance Script Suite",
      "Interactive Case Simulator for Medical Residents"
    ],
    keyStack: ["EdTech Product Management", "QA Engineering", "Medical UX", "SCORM Architecture"],
    impactMetrics: [
      { label: "Defects Resolved", value: "100% Critical" },
      { label: "Learner Completion", value: "94% Rate" }
    ],
    fullCaseDescription: "Conducted user research, stakeholder review sessions, and automated QA testing to ensure reliability for medical faculty and residents.",
    roiHighlight: "Delivered a rock-solid educational platform aligned with Johns Hopkins' rigorous medical standards.",
    systemsArchitected: ["SCORM Interactive LMS", "Clinical Simulator"]
  }
];

export const TESTIMONIALS = [
  {
    quote: "Matthew is one of the hardest-working, passionate, and genuine AI product leaders I've ever worked with. He was a technical leader, strategy consultant, and true partner to every enterprise client he worked with.",
    name: "Emily Miller",
    role: "Former Head of Account Management, ByteLion",
    initials: "EM"
  },
  {
    quote: "Matthew jumped right in and started our product management team when we were scaling up. He brought clear product vision, deep AI strategy, took complete ownership, and put a relentless focus on customer happiness and business value.",
    name: "Greg Micek",
    role: "CEO, Octaria Software",
    initials: "GM"
  }
];

export const AWARDS = [
  {
    title: "2023 Culture Builder of the Year Nominee",
    organization: "Technical.ly",
    description: "Celebrated for 'leading from the passenger seat'—driving high-impact AI product strategies while empowering cross-functional teams.",
    year: "2023",
    category: "Leadership"
  },
  {
    title: "2020 RealLIST Connectors — Baltimore",
    organization: "Technical.ly",
    description: "Recognized for influential contributions in connecting, mentoring, and advancing the regional tech and AI venture ecosystem.",
    year: "2020",
    category: "Community & Venture"
  }
];

export const AI_KNOWLEDGE_BASE = [
  {
    keywords: ["who", "matthew", "about", "background", "bio", "experience"],
    answer: "Matthew Lowinger is a Senior AI Product Manager & AI Systems Architect with 8+ years of experience partnering with Fortune 500s, federal research labs, and venture studios. He specializes in AI Product Strategy, Agentic Systems, Intelligent OCR, and RAG Architectures."
  },
  {
    keywords: ["agentic", "agents", "autogen", "langgraph", "autonomous"],
    answer: "Matthew product manages and architects stateful multi-agent systems using frameworks like LangGraph and AutoGen. He implements Human-in-the-Loop (HITL) safety gates, self-correcting evaluation loops, and deterministic tool execution."
  },
  {
    keywords: ["ocr", "vision", "document", "pdf", "extraction", "scanning"],
    answer: "Matthew has extensive experience architecting Intelligent OCR and Document Vision pipelines that extract structured data from complex scans, medical DICOM images, and unstructured regulatory filings with high precision."
  },
  {
    keywords: ["rag", "retrieval", "vector", "search", "embeddings", "pinecone"],
    answer: "For Enterprise RAG Architectures, Matthew builds zero-hallucination hybrid dense/sparse vector search pipelines with reranking (Cohere), metadata filtering, and automated evaluation metrics."
  },
  {
    keywords: ["projects", "clients", "portfolio", "case studies", "bain", "cisco", "nih", "medstar"],
    answer: "Matthew has led AI product engagements for 50+ organizations including Bain & Company (Healthcare Compliance OCR/RAG), Cisco Meraki (Distributed Release PMO), NIH (HemaComply Federal Automation), Allegis Group ($13B Talent SaaS), MedStar Health ($6B Medical Vision), and CHIME Healthcare."
  },
  {
    keywords: ["contact", "email", "hire", "consult", "book", "linkedin"],
    answer: "You can reach Matthew directly via email at matt.lowinger@gmail.com or connect on LinkedIn at linkedin.com/in/mattlowinger/. He is available for AI Product Leadership, Advisory, and Systems Architecture engagements."
  }
];
