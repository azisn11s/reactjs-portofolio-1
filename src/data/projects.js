// Project images from Unsplash (free to use)
// Using URL imports for external images

export const projects = [
  {
    id: 'care-erp-phase1',
    title: "CARE ERP System - Phase 1",
    company: "PT Eigerindo MPI",
    period: "2022 - Present",
    desc: "Architected an integrated Enterprise Resource Planning system facilitating seamless synchronization between e-commerce platforms and SAP into Warehouse Management Systems.",
    longDesc: "CARE is a comprehensive ERP system designed to bridge the gap between multiple e-commerce platforms and enterprise backend systems. The first phase focused on building core integrations with SAP and developing a robust Warehouse Management System. Key achievements include engineering RESTful APIs using Laravel, building a high-performance frontend with Nuxt.js, implementing multi-database architecture for order processing, and deploying on AWS Lambda with Laravel Vapor for high availability.",
    technologies: ["Laravel", "Vue.js", "Nuxt.js", "MySQL", "AWS Lambda", "Laravel Vapor", "SAP Integration", "Datadog"],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    link: "#",
    role: "Development Engineer"
  },
  {
    id: 'care-erp-phase2',
    title: "CARE ERP System - Phase 2",
    company: "PT Eigerindo MPI",
    period: "2023 - Present",
    desc: "Led system re-engineering initiative to overhaul legacy architectures, achieving significant cloud cost optimization and performance improvements.",
    longDesc: "Spearheaded a comprehensive system re-engineering to establish a high-performance foundation using SQL Server. Led a team of 5 developers while implementing SymmetricDS for data synchronization between cloud backend and Desktop POS applications. Achieved drastic OpEx reduction by migrating from AWS SQS/Lambda to Redis, optimized AWS infrastructure for cost-efficiency, and refactored resource-heavy processes for a leaner, more scalable enterprise solution.",
    technologies: ["SQL Server", "Redis", "SymmetricDS", "AWS", "Laravel", "Vue.js", "Docker"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    link: "#",
    role: "Development Engineer & Tech Lead"
  },
  {
    id: 'siap-jabar',
    title: "SIAp Jabar - Integrated Staffing System",
    company: "Provincial Government of West Java",
    period: "2020 - 2022",
    desc: "Engineered core sub-systems for a comprehensive Human Capital Management System serving 40,000+ civil servants across West Java Province.",
    longDesc: "SIAp Jabar is a comprehensive Human Capital Management System (HCMS) built for the West Java Provincial Government. Developed and automated critical modules for employee retirement processing, recurring payroll management, and inter-departmental transfers (Mutasi). The system mitigated corruption risks by implementing transparent, end-to-end digital monitoring, eliminating illegal administrative fees and ensuring all processes are trackable and verifiable for over 40,000 civil servants.",
    technologies: ["Laravel", "Vue.js", "PostgreSQL", "Docker", "Redis"],
    img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80",
    link: "#",
    role: "Full-Stack Developer"
  },
  {
    id: 'finata-saas',
    title: "Finata - Financial Planning SaaS",
    company: "PT Reksa Finansial Tertata",
    period: "2019 - 2020",
    desc: "Developed a comprehensive SaaS platform for integrated financial planning, accounting, and real-time business monitoring.",
    longDesc: "Finata is a Software-as-a-Service platform designed for integrated financial planning, accounting, and real-time business monitoring. Engineered a proprietary budget forecasting module generating predictive financial insights from historical data. Implemented multi-tenant PostgreSQL architecture ensuring strict data isolation and security. Built an intuitive dashboard for monitoring KPIs and financial health, facilitating data-driven decision-making for business owners.",
    technologies: ["Laravel", "PostgreSQL", "Vue.js", "Multi-tenant Architecture", "Financial APIs"],
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    link: "#",
    role: "Software Engineer"
  },
  {
    id: 'pasarwarga-ecommerce',
    title: "Pasarwarga.com E-Commerce",
    company: "PT Siwarga Indo Media",
    period: "2016 - 2018",
    desc: "Spearheaded MVP development for a high-growth e-commerce marketplace with integrated FinTech services.",
    longDesc: "Led the development of the Minimum Viable Product for Pasarwarga.com, transitioning from the Ahloo App ecosystem. Architected seamless FinTech integrations with Kreditplus financing services, enabling credit-based purchasing and installment plans. Built a lightweight e-commerce engine using CodeIgniter prioritizing rapid deployment and optimized performance. Developed core marketplace functionalities including multi-vendor management, secure checkout, and official store modules.",
    technologies: ["CodeIgniter", "MySQL", "FinTech Integration", "Kreditplus API", "E-commerce"],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    link: "#",
    role: "Backend Developer"
  },
  {
    id: 'spisy-hris',
    title: "SPISy - Enterprise HRIS",
    company: "PT Sakura System Solutions",
    period: "2016 - 2017",
    desc: "Engineered a comprehensive Human Resource Information System designed to centralize and streamline Human Capital Management operations.",
    longDesc: "SPISy is a comprehensive HRIS designed for enterprise-scale organizations. Developed critical HR modules including Applicant Tracking Systems (ATS), automated payroll processing, and performance appraisal engines. Architected a 'Single Source of Truth' for personnel records with real-time data visibility. Implemented Employee Self-Service (ESS) portals reducing administrative overhead, and synchronized HR functions with accounting and financial reporting modules.",
    technologies: ["ASP.NET", "SQL Server", "C#", "HRIS", "Payroll Systems"],
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    link: "#",
    role: "ASP.Net Developer"
  }
];
