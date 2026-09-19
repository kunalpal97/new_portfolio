"use client";

import { motion } from "framer-motion";

export default function About() {
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex flex-col justify-center space-y-4">
            <p className="text-white/70 text-base leading-relaxed">
              I&apos;m a Software Engineer who doesn&apos;t stop at writing code — I ship it, deploy it, and keep it running.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              My work spans full-stack development and the infrastructure layer that turns a working app into a production-ready system.
            </p>
            <div className="flex items-center gap-6 pt-2">
              <div>
                <p className="text-2xl font-bold text-[var(--accent)]">3+</p>
                <p className="text-xs text-white/50">Internships</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--accent)]">B.E. IT</p>
                <p className="text-xs text-white/50">Graduate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--accent)]">India</p>
                <p className="text-xs text-white/50">Remote-ready</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-xl border border-white/10 bg-[#0d0d0d] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-white/40 font-mono">about-me.ts</span>
            </div>
            <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
              <pre className="whitespace-pre">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">kunal</span>{" "}
                <span className="text-white/60">=</span> {"{"}
                {"\n"}  <span className="text-cyan-300">role</span>
                <span className="text-white/60">:</span>{" "}
                <span className="text-emerald-300">&quot;Software Engineer&quot;</span>,
                {"\n"}  <span className="text-cyan-300">stack</span>
                <span className="text-white/60">:</span> [
                <span className="text-emerald-300">&quot;Backend&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;Frontend&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;DevOps&quot;</span>],
                {"\n"}  <span className="text-cyan-300">tools</span>
                <span className="text-white/60">:</span> [
                <span className="text-emerald-300">&quot;Docker&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;Kubernetes&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;Terraform&quot;</span>],
                {"\n"}  <span className="text-cyan-300">cloud</span>
                <span className="text-white/60">:</span>{" "}
                <span className="text-emerald-300">&quot;Azure&quot;</span>,
                {"\n"}  <span className="text-cyan-300">languages</span>
                <span className="text-white/60">:</span> [
                <span className="text-emerald-300">&quot;Python&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;JavaScript&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;TypeScript&quot;</span>],
                {"\n"}  <span className="text-cyan-300">currentlyBuilding</span>
                <span className="text-white/60">:</span>{" "}
                <span className="text-emerald-300">&quot;reliable, scalable systems&quot;</span>,
                {"\n"}  <span className="text-cyan-300">openTo</span>
                <span className="text-white/60">:</span>{" "}
                <span className="text-emerald-300">&quot;new opportunities&quot;</span>
                {"\n"}
                {"}"};
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <p className="text-sm text-white/60 font-medium uppercase tracking-wider">
              A Year of Building
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 overflow-x-auto">
            <img
              src="https://contribkit.app/user/kunalpal97.svg?palette=tokyonight&background=transparent&shape=rounded"
              alt="Kunal's GitHub contribution graph"
              className="w-full min-w-[600px]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}