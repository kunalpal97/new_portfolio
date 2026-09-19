import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    href: "https://github.com/kunalpal97",
    label: "GitHub",
    icon: FaGithub,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/kunal-pal-bb0220235/",
    label: "LinkedIn",
    icon: FaLinkedin,
    external: true,
  },
  {
    href: "https://leetcode.com/u/Kunal_7179/",
    label: "LeetCode",
    icon: SiLeetcode,
    external: true,
  },
  {
    href: "https://x.com/Kunalpal7981",
    label: "X (Twitter)",
    icon: FaXTwitter,
    external: true,
  },
  {
    href: "mailto:kunalpal460@gmail.com",
    label: "Email",
    icon: Mail,
    external: false,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-(--background)]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-7 sm:flex-row">
        <p className="text-sm text-white/50">
          © {currentYear}{" "}
          <span className="text-white/80">Kunal Pal</span>. All rights reserved.
        </p>

        <div className="flex items-center gap-2.5">
          {socialLinks.map(({ href, label, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/3 text-white/50 transition-all duration-200 hover:border-(--accent)/40 hover:bg-(--accent)/5 hover:text-(--accent)"
            >
              <Icon size={16} />
            </a>
          ))}

          <a
            href="#home"
            aria-label="Back to top"
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/3 text-white/50 transition-all duration-200 hover:border-(--accent)]/40 hover:bg-(--accent)]/5 hover:text-(--accent)]"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}