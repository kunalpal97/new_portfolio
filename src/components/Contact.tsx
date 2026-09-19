"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Loader2, CheckCircle2, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-sm text-(--accent)] font-medium mb-2">Contact</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Connect</h2>
        <p className="text-white/60 mb-12">
          I&apos;m open to new opportunities and interesting conversations. Drop a message and I&apos;ll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="text-left space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm text-white/60 mb-2">
                Name
              </label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-(--accent)] transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-(--accent)] transition-colors"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-white/60 mb-2">
              Message
            </label>
            <div className="relative">
              <MessageSquare size={16} className="absolute left-4 top-4 text-white/30" />
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-(--accent)] transition-colors resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-(--accent)] text-black font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </>
            ) : status === "success" ? (
              <>
                <CheckCircle2 size={18} />
                Message Sent!
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>

          {status === "error" && (
            <p className="text-sm text-red-400">Something went wrong. Please try again or email me directly.</p>
          )}
        </form>

        <div className="mt-10 pt-10 border-t border-white/10">
          <p className="text-sm text-white/50 mb-2">Or reach me directly at</p>
          <a
            href="mailto:kunalpal460@gmail.com"
            className="inline-flex items-center gap-2 text-(--accent) hover:opacity-80 transition-opacity">
            <Mail size={16} />
            kunalpal460@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  );
}