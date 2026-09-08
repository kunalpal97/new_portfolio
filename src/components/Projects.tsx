import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const featuredProject = {
  title: "Textify",
  description: "A real-time chat application enabling instant messaging between users. Built with WebSocket-based communication for live, low-latency conversations, backed by a persistent message store.",
  tech: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
  image: "/projects/textify.png",
  live: "https://textify-azure.vercel.app",
  github: "https://github.com/kunalpal97/Textify",
};

const otherProjects = [
  { title: "Project Two", description: "Add a short description of what this project does and the problem it solves.", tech: ["Tech", "Stack", "Here"], image: null, live: "#", github: "#" },
  { title: "Project Three", description: "Add a short description of what this project does and the problem it solves.", tech: ["Tech", "Stack", "Here"], image: null, live: "#", github: "#" },
  { title: "Project Four", description: "Add a short description of what this project does and the problem it solves.", tech: ["Tech", "Stack", "Here"], image: null, live: "#", github: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-[var(--accent)] font-medium mb-2">Projects</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Things I&apos;ve Built</h2>

        <div className="mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <p className="text-xs text-white/40 uppercase tracking-wider">Featured Project</p>
        </div>

        <div className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden mb-8 hover:border-[var(--accent)]/40 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative w-full aspect-video md:aspect-auto overflow-hidden">
              {featuredProject.image ? (
                <Image src={featuredProject.image} alt={`${featuredProject.title} screenshot`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10">
                  <Code2 size={40} className="text-white/20" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 md:bg-gradient-to-r md:from-transparent md:to-black/20" />
            </div>

            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-3">{featuredProject.title}</h3>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-5">{featuredProject.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-white/15 text-white/70">{t}</span>
                ))}
              </div>

              <div className="flex items-center gap-5">
                <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:opacity-80 transition-opacity">
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors">
                  <FaGithub size={16} />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-white/40 uppercase tracking-wider mb-6">More Projects</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {otherProjects.map((project, index) => (
            <div key={project.title} className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-[var(--accent)]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="relative w-full aspect-video overflow-hidden">
                {project.image ? (
                  <Image src={project.image} alt={`${project.title} screenshot`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10">
                    <Code2 size={28} className="text-white/20" />
                  </div>
                )}
                <span className="absolute top-3 left-3 text-xs font-mono text-white/30">{String(index + 2).padStart(2, "0")}</span>
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/50">{t}</span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs font-medium text-[var(--accent)] hover:opacity-80 transition-opacity">
                    <ExternalLink size={13} />
                    Live
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs font-medium text-white/60 hover:text-white transition-colors">
                    <FaGithub size={13} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}