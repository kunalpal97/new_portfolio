"use client";

import { motion } from "framer-motion";

export default function About() {
  const techPills = ["Backend", "Frontend", "CI/CD", "Docker", "Kubernetes", "Terraform", "Azure", "Python", "Linux"];

  return (
    <section id="about" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <p className="text-sm text-[var(--accent)] font-medium mb-2">About Me</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Who I Am</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch">
          <div className="md:col-span-3 space-y-6">
            <div className="text-white/70 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                I&apos;m a Software Engineer comfortable across the full stack — backend, frontend, and the infrastructure that ties it together. I build and ship applications, then take them the rest of the way with CI/CD pipelines, containerization, and cloud deployment.
              </p>
              <p>
                Day to day, that means working with Docker, Kubernetes, and Terraform to keep environments consistent and deployments predictable — mostly on Azure. Python and Linux are where I&apos;m most at home under the hood.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {techPills.map((tech) => (
                <span key={tech} className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/15 text-white/70">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <div className="col-span-2 p-6 rounded-2xl bg-[var(--accent)] text-black flex flex-col justify-between">
              <p className="text-4xl font-bold">3+</p>
              <p className="text-sm font-medium mt-1">Internships across DevOps &amp; Backend roles</p>
            </div>
            <div className="p-5 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-xl font-bold text-white mb-1">B.E. IT</p>
              <p className="text-xs text-white/50">Graduate</p>
            </div>
            <div className="p-5 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-xl font-bold text-white mb-1">India</p>
              <p className="text-xs text-white/50">Remote-ready</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}