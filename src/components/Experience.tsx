const experiences = [
  {
    company: "Sigmoid Analytics",
    role: "DataOps Engineer Intern",
    duration: "Feb 2026 – Present",
    location: "Bengaluru, India (On-site)",
    points: [
      "Built Flask + FastAPI app to create AWS S3 buckets, upload and share files across buckets using Boto3; containerized via Docker, orchestrated with Kubernetes",
      "Provisioned AWS infrastructure using Terraform across dev / QA / prod environments; set up KIND clusters for local testing",
      "Built CI/CD pipelines via GitHub Actions; worked with Databricks and Snowflake for data pipeline monitoring across staging and production",
      "Automated tasks using Bash and Python on Linux (Ubuntu); managed infrastructure via CLI",
    ],
  },
  {
    company: "Intellectsia AI Services",
    role: "Full Stack Developer",
    duration: "Sept 2025 – Jan 2026",
    location: "Mumbai, India",
    points: [
      "Built backend for an AI-powered recruitment platform — developed REST APIs, middleware, and URL routing for seamless user experience",
      "Implemented authentication system with login, signup, session management, and Role-Based Access Control (RBAC) for multi-user access",
      "Integrated MySQL database layer ensuring reliable backend-to-DB communication; handled migrations and query optimization",
    ],
  },
  {
    company: "Protega.ai (OIL Green Solutions)",
    role: "SDE Intern",
    duration: "Apr 2025 – Aug 2025",
    location: "Mumbai, India (On-site)",
    points: [
      "Built full-stack insurance platform integrated with Shopify from scratch; live at protega.ai",
      "Led a 4-member team — owned frontend, backend, and Shopify repos; enforced code standards and managed PR reviews",
      "Developed JWT authentication, password reset flow, and RESTful APIs for core data operations",
      "Deployed custom Shopify app end-to-end on Hetzner — from build to domain; configured PM2 for production uptime",
      "Built CI/CD pipelines via GitHub Actions for automated testing, linting, and zero-downtime deployments",
      "UI improvements contributed to 2× increase in user engagement; handled client demos and Shopify App Store setup",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-[var(--accent)] font-medium mb-2">Experience</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Where I&apos;ve Worked</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative pl-8 border-l border-white/10">
              <div className="absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--accent)]" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                  <p className="text-[var(--accent)] text-sm font-medium">{exp.company}</p>
                </div>
                <div className="text-sm text-white/50 sm:text-right">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-white/60 text-sm leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-white/30" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}