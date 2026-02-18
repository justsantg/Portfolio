"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function LanguageToggle() {
  const { locale, toggleLocale } = useI18n();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      onClick={toggleLocale}
      className="fixed bottom-8 right-8 z-50 group"
      aria-label={
        locale === "es" ? "Cambiar a ingles" : "Switch to Spanish"
      }
    >
      <div className="relative flex items-center border border-border hover:border-foreground bg-background/80 backdrop-blur-sm transition-all duration-500 overflow-hidden">
        {/* ES side */}
        <div
          className={`relative z-10 px-3 py-2 text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${
            locale === "es" ? "text-background" : "text-muted-foreground"
          }`}
        >
          ES
        </div>

        {/* Divider */}
        <div className="w-px h-4 bg-border" />

        {/* EN side */}
        <div
          className={`relative z-10 px-3 py-2 text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${
            locale === "en" ? "text-background" : "text-muted-foreground"
          }`}
        >
          EN
        </div>

        {/* Sliding active indicator */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
          className="absolute top-0 bottom-0 w-1/2 bg-foreground"
          style={{
            left: locale === "es" ? 0 : "50%",
          }}
        />
      </div>
    </motion.button>
  );
}
