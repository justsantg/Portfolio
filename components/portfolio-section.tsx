"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const projectKeys = [
  { key: "1", technologies: ["Flutter", "Supabase", "Google API"], liveUrl: "#", githubUrl: "https://github.com/justsantg/HandleCrash.git", image: "/HandleCrash.png" },
  { key: "2", technologies: ["Laravel", "Voyager", "MAMP"], liveUrl: "#", githubUrl: "https://github.com/justsantg/EventoYa.git", image: "/EventoYa.png" },
  { key: "3", technologies: ["Angular", "Postgres", "NestJS"], liveUrl: "#", githubUrl: "https://github.com/justsantg/bank-app.git", image: "/BankApp.jpeg" },
  { key: "4", technologies: ["TypeScript", "React", "Supabase"], liveUrl: "https://www.avcinmobiliariayconstructora.com/", githubUrl: "https://github.com/ElevaForge/FrontEnd_AVC.git", image: "/AVC.png" },
] as const;

function ProjectCard({
  projectKey,
  technologies,
  liveUrl,
  githubUrl,
  image,
  index,
  isInView,
}: {
  projectKey: string;
  technologies: readonly string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  index: number;
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useI18n();

  const title = t(`portfolio.${projectKey}.title` as Parameters<typeof t>[0]);
  const description = t(`portfolio.${projectKey}.description` as Parameters<typeof t>[0]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: 0.3 + index * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border border-border p-6 md:p-8 transition-all duration-700 hover:border-foreground"
    >
      {/* Project number */}
      <span className="absolute top-4 right-6 text-xs text-muted-foreground tracking-widest">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Project image */}
      <motion.div
        animate={{ height: isHovered ? 200 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden mb-0 group-hover:mb-6 bg-secondary/50 relative"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <p className="absolute bottom-2 left-2 text-xs text-white/80 tracking-widest uppercase bg-black/50 px-2 py-1">
          {title}
        </p>
      </motion.div>

      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3 group-hover:translate-x-2 transition-transform duration-500">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-muted-foreground mb-6 max-w-lg">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs tracking-widest uppercase text-muted-foreground border border-border"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {liveUrl !== "#" ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            aria-label={`${t("contact.viewDemo")} ${title}`}
          >
            <ExternalLink size={14} />
            {t("portfolio.liveDemo")}
          </a>
        ) : (
          <span className="flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground/50 cursor-not-allowed">
            <ExternalLink size={14} />
            {t("portfolio.noDemo")}
          </span>
        )}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
          aria-label={`${t("contact.viewCode")} ${title}`}
        >
          <Github size={14} />
          {t("portfolio.source")}
        </a>
      </div>
    </motion.article>
  );
}

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section
      id="portfolio"
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
            {t("portfolio.number")}
          </p>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground text-balance">
            {t("portfolio.title")}
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectKeys.map((project, i) => (
            <ProjectCard
              key={project.key}
              projectKey={project.key}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              image={project.image}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
