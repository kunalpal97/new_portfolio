"use client";

import { useState } from "react";
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
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3, color: "#1572B6" },
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Terraform", icon: SiTerraform, color: "#844FBA" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Azure", icon: VscAzure, color: "#0078D4" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Databricks", icon: SiDatabricks, color: "#FF3621" },
      { name: "Hadoop", icon: SiApachehadoop, color: "#66CCFF" },
    ],
  },
  {
    title: "Tools & Others",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

function TechCard({ name, icon: Icon, color }: { name: string; icon: React.ElementType; color: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] whitespace-nowrap shrink-0 transition-all duration-200"
      style={{ borderColor: hovered ? color : undefined }}
    >
      <Icon size={14} style={{ color: hovered ? color : "rgba(255,255,255,0.5)" }} className="transition-colors duration-200" />
      <span className="text-xs text-white/60">{name}</span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="skills" className="py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-(--accent) font-medium mb-2">Tech Stack</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technologies I Work With</h2>
        <p className="text-white/50 text-sm sm:text-base mb-12 max-w-2xl">
          A snapshot of the languages, frameworks, and tools I use to build and ship software end-to-end.
        </p>

        <div className="space-y-8">
          {categories.map((category, catIndex) => (
            <div key={category.title}>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-(--accent)" />
                <p className="text-sm text-white/60 font-medium uppercase tracking-wider">
                  {category.title}
                </p>
              </div>

              <div className="group/row relative w-full overflow-hidden mask-fade">
                <div
                  className={`flex gap-3 w-max group-hover/row:[animation-play-state:paused] ${
                    catIndex % 2 === 0 ? "animate-marquee-left" : "animate-marquee-right"
                  }`}
                >
                  {[...category.items, ...category.items].map((tech, i) => (
                    <TechCard key={`${tech.name}-${i}`} name={tech.name} icon={tech.icon} color={tech.color} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}