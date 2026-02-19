"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";

const skills = [
  "JavaScript",
  "Python",
  "Java",
  "ReactJS",
  "Node.js",
  "Express",
  "Django",
  "NestJS",
  "Laravel",
  "Flutter",
  "Angular",
  "HTML",
  "CSS",
  "Azure",
  "Agile",
  "Scrum",
];

const storyImages = [
  {
    src: "/casual_photo.jpeg",
    captionKey: "about.imgCaption1" as const,
  },
  {
    src: "/child.jpeg",
    captionKey: "about.imgCaption2" as const,
  },
  {
    src: "/workspace.jpeg",
    captionKey: "about.imgCaption3" as const,
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section
      id="about"
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
            {t("about.number")}
          </p>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground text-balance">
            {t("about.title")}
          </h2>
        </motion.div>

        {/* Intro bio with portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-24">
          {/* Portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 relative aspect-[3/4] overflow-hidden border border-border group"
          >
            <Image
              src="/profile.jpg"
              alt={t("about.imgCaption1")}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-all duration-700" />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-4 left-4 right-4 text-xs tracking-widest uppercase text-foreground/70 bg-background/60 backdrop-blur-sm px-3 py-2 border border-border/50"
            >
              {t("about.imgCaption1")}
            </motion.p>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-3 flex flex-col gap-6 justify-center"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("about.bio1")}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("about.bio2")}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("about.bio3")}
            </p>
          </motion.div>
        </div>

        {/* My Story - Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-24"
        >
          <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
            {t("about.storyTitle")}
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground mb-10 max-w-3xl">
            {t("about.storyText")}
          </p>

          {/* Photo grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {storyImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/3] overflow-hidden border border-border group cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={t(img.captionKey)}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs tracking-widest uppercase text-foreground/80">
                    {t(img.captionKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-serif text-2xl text-foreground mb-2">
              {t("about.details")}
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground uppercase tracking-widest text-xs mb-1">
                  {t("about.labelName")}
                </p>
                <p className="text-foreground">{t("about.valueName")}</p>
              </div>
              <div>
                <p className="text-muted-foreground uppercase tracking-widest text-xs mb-1">
                  {t("about.labelLocation")}
                </p>
                <p className="text-foreground">{t("about.valueLocation")}</p>
              </div>
              <div>
                <p className="text-muted-foreground uppercase tracking-widest text-xs mb-1">
                  {t("about.labelEmail")}
                </p>
                <p className="text-foreground">{t("about.valueEmail")}</p>
              </div>
              <div>
                <p className="text-muted-foreground uppercase tracking-widest text-xs mb-1">
                  {t("about.labelEducation")}
                </p>
                <p className="text-foreground">{t("about.valueEducation")}</p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h3 className="font-serif text-2xl text-foreground mb-4">
              {t("about.skills")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.06, duration: 0.4 }}
                  className="px-4 py-2 border border-border text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-500"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
