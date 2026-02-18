"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useI18n();

  return (
    <footer ref={ref} className="px-6 md:px-16 lg:px-24 py-12 border-t border-border">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <p className="font-serif text-xl text-foreground">{t("footer.name")}</p>
        <p className="text-xs tracking-widest uppercase text-muted-foreground">
          {t("footer.rights")}
        </p>
        <p className="text-xs text-muted-foreground">
          {t("footer.built")}
        </p>
      </motion.div>
    </footer>
  );
}
