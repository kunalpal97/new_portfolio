"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-(--background)]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg overflow-hidden">
            <Image
              src="/profile.png"
              alt="Kunal Pal logo"
              width={36}
              height={36}
              className="object-cover w-full h-full"
            />
          </div>
          {/* <span className="text-lg font-semibold tracking-tight hidden sm:block">
            Kunal
          </span> */}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block text-sm font-medium px-4 py-2 rounded-full bg-(--accent)] text-black hover:opacity-90 transition-opacity"
        >
          Resume
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-full bg-(--accent)] text-black text-center"
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  );
}
