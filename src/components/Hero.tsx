import { Mail, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* <p className="text-sm text-white/50 mb-4">Hi, my name is</p> */}

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">Kunal Pal</h1>

        <h2 className="text-2xl sm:text-4xl font-semibold text-(--accent) mb-6">Software Engineer</h2>

        <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-10">
          I build reliable, scalable systems — from backend services to cloud infrastructure. Currently focused on DevOps and cloud-native development.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href="#contact" className="px-6 py-3 rounded-full bg-(--accent) text-black font-medium hover:opacity-90 transition-opacity">
            Contact Me
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
            View Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/kunalpal97" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white/60 hover:text-white transition-colors">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/kunal-pal-bb0220235/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/60 hover:text-white transition-colors">
            <FaLinkedin size={22} />
          </a>
          <a href="mailto:kunalpal460@gmail.com" aria-label="Email" className="text-white/60 hover:text-white transition-colors">
            <Mail size={22} />
          </a>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to About section" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}