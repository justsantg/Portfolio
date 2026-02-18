"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/justsantg",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/santiago-reyes-8a90b1350",
    icon: Linkedin,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/573003719503",
    icon: MessageCircle,
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            {t("contact.number")}
          </p>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground text-balance">
            {t("contact.title")}
          </h2>
        </motion.div>

        <div className="max-w-2xl">
          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl leading-relaxed text-muted-foreground mb-12"
          >
            {t("contact.cta")}
          </motion.p>

          {/* Social Links */}
          <div className="flex flex-col gap-0">
            {socialLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  className="group flex items-center justify-between py-6 border-b border-border hover:border-foreground transition-colors duration-500"
                >
                  <div className="flex items-center gap-6">
                    <Icon size={24} className="text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
                    <span className="font-serif text-2xl md:text-3xl text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {link.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </motion.a>
              );
            })}
          </div>

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 inline-flex items-center gap-3"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm tracking-widest uppercase text-muted-foreground">
              {t("contact.available")}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
