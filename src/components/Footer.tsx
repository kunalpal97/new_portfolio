import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/kunalpal97",
      label: "GitHub",
      icon: <FaGithub size={18} />,
      external: true,
    },
    {
      href: "https://www.linkedin.com/in/kunal-pal-2125411a8/",
      label: "LinkedIn",
      icon: <FaLinkedin size={18} />,
      external: true,
    },
    {
      href: "mailto:kunalpal.97@gmail.com",
      label: "Email",
      icon: <Mail size={18} />,
      external: false,
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-7 sm:flex-row">
        <p className="text-sm text-white/50">
          © {currentYear} <span className="text-white/80">Kunal Pal</span>. All rights reserved.
        </p>

        <div className="flex items-center gap-3 sm:gap-4">
          {socialLinks.map(({ href, label, icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              {icon}
            </a>
          ))}

          <a
            href="#home"
            aria-label="Back to top"
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}