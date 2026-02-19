"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/lib/i18n";

const timelineItems = [
  {
    key: "education" as const,
    icon: "mortarboard",
    technologies: ["React", "Django", "JavaScript", "Python", "Java", "Java", "Git", "Azure", "Agile", "Scrum"],
  },
  {
    key: "internship" as const,
    icon: "briefcase",
    technologies: ["Laravel", "PHP", "Boilerplate", "MySQL", "Angular", "CSS", "HTML", "Playwright", "Advanced Git", "Agile"],
  },
  {
    key: "projects" as const,
    icon: "code",
    technologies: ["Flutter", "Supabase", "REST APIs", "Firebase", "GitHub Actions", "Docker", "Kubernetes", "CI/CD", "Agile", "Scrum"],
  },
] as const;

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section
      id="experience"
      ref={ref}
      className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32"
    >
      {/* Background decorative text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.03 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 font-serif text-[20rem] md:text-[30rem] text-foreground select-none pointer-events-none leading-none hidden lg:block"
      >
        {"E"}
      </motion.span>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            {t("experience.number")}
          </p>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground text-balance">
            {t("experience.title")}
          </h2>
        </motion.div>

        {/* Subtitle note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-base leading-relaxed text-muted-foreground mb-16 max-w-2xl"
        >
          {t("experience.subtitle")}
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 md:left-8 top-0 w-px h-full bg-border origin-top"
          />

          <div className="flex flex-col gap-20 pl-8 md:pl-24">
            {timelineItems.map((item, i) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: 0.4 + i * 0.25,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative group"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.25, duration: 0.4 }}
                  className="absolute -left-8 md:-left-24 top-2 flex items-center justify-center"
                  style={{ marginLeft: "-4px" }}
                >
                  <span className="w-3 h-3 rounded-full bg-muted-foreground group-hover:bg-foreground transition-colors duration-500 block" />
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 0.3 } : {}}
                    transition={{ delay: 0.8 + i * 0.25, duration: 0.6 }}
                    className="absolute w-6 h-6 rounded-full border border-muted-foreground group-hover:border-foreground transition-colors duration-500"
                  />
                </motion.div>

                {/* Label tag */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 border border-border text-[10px] tracking-[0.3em] uppercase text-muted-foreground group-hover:border-foreground group-hover:text-foreground transition-all duration-500">
                    {t(`experience.${item.key}.tag`)}
                  </span>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                    {t(`experience.${item.key}.period`)}
                  </p>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-1">
                  {t(`experience.${item.key}.role`)}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 italic">
                  {t(`experience.${item.key}.company`)}
                </p>
                <p className="text-base leading-relaxed text-muted-foreground mb-4 max-w-2xl">
                  {t(`experience.${item.key}.description`)}
                </p>

                {/* Achievements */}
                <ul className="flex flex-col gap-2 mb-5 pl-4">
                  <li className="text-sm text-muted-foreground relative before:content-[''] before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-px before:bg-muted-foreground">
                    {t(`experience.${item.key}.achievement1`)}
                  </li>
                  <li className="text-sm text-muted-foreground relative before:content-[''] before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-px before:bg-muted-foreground">
                    {t(`experience.${item.key}.achievement2`)}
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 border border-border text-xs tracking-widest uppercase text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
