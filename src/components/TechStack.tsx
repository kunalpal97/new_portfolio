import {
  SiCplusplus, SiPython, SiJavascript, SiTypescript, SiMysql,
  SiReact, SiNextdotjs, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiFlask, SiFastapi, SiPostgresql, SiMongodb,
  SiDocker, SiKubernetes, SiTerraform, SiLinux,
  SiGithubactions, SiDatabricks, SiApachehadoop,
  SiGit, SiGithub, SiFigma,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaCss3, FaAws } from "react-icons/fa";

const categories = [
  {
    title: "Languages",
    items: [
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "SQL", icon: SiMysql },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: FaCss3 },
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Flask", icon: SiFlask },
      { name: "FastAPI", icon: SiFastapi },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: SiTerraform },
      { name: "AWS", icon: FaAws },
      { name: "Azure", icon: VscAzure },
      { name: "Linux", icon: SiLinux },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Databricks", icon: SiDatabricks },
      { name: "Hadoop", icon: SiApachehadoop },
    ],
  },
  {
    title: "Tools & Others",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-[var(--accent)] font-medium mb-2">Tech Stack</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Tools I Work With</h2>

        <div className="space-y-8">
          {categories.map((category, catIndex) => (
            <div key={category.title}>
              <p className="text-sm text-white/50 font-medium mb-3">
                {category.title}
              </p>
              <div className="relative w-full overflow-hidden mask-fade">
                <div
                  className={`flex gap-3 sm:gap-4 w-max ${
                    catIndex % 2 === 0 ? "animate-marquee-left" : "animate-marquee-right"
                  }`}
                >
                  {[...category.items, ...category.items].map((tech, i) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={`${tech.name}-${i}`}
                        className="group flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-white/10 bg-white/5 whitespace-nowrap shrink-0 hover:border-[var(--accent)]/50 transition-colors"
                      >
                        <Icon size={16} className="sm:w-[18px] sm:h-[18px] text-white/50 group-hover:text-[var(--accent)] transition-colors" />
                        <span className="text-xs sm:text-sm text-white/70 group-hover:text-white transition-colors">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}