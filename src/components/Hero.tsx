"use client";

import { useState, useEffect } from "react";
import { Mail, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const roles = [
  { text: "Software Engineer", color: "#22d3ee" },
  { text: "Full-Stack Developer", color: "#a78bfa" },
  { text: "DevOps Engineer", color: "#34d399" },
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex].text;

    if (!isDeleting && charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 40);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/3 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-white/60">Available for opportunities</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">Kunal Pal</h1>

        <h2
          className="text-2xl sm:text-4xl font-semibold mb-6 h-10 sm:h-12 transition-colors duration-500"
          style={{ color: roles[roleIndex].color }}
        >
          {displayText}
          <span
            className="inline-block w-0.75 h-6 sm:h-8 ml-1 animate-pulse align-middle transition-colors duration-500"
            style={{ backgroundColor: roles[roleIndex].color }}
          />
        </h2>

        <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-10">
          I build reliable, scalable systems — from backend services to cloud infrastructure. Currently focused on DevOps and cloud-native development.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href="#contact" className="w-full sm:w-auto px-6 py-3 rounded-full bg-(--accent)] text-black font-medium hover:opacity-90 transition-opacity">
            Contact Me
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
            View Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-5">
          <a href="https://github.com/kunalpal97" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white/60 hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/kunal-pal-bb0220235/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/60 hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://leetcode.com/u/Kunal_7179/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="text-white/60 hover:text-white transition-colors">
            <SiLeetcode size={20} />
          </a>
          <a href="https://x.com/Kunalpal7981" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-white/60 hover:text-white transition-colors">
            <FaXTwitter size={20} />
          </a>
          <a href="mailto:kunalpal460@gmail.com" aria-label="Email" className="text-white/60 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to About section" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}