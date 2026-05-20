// src/components/sections/checklist.tsx

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, Backpack, PartyPopper } from "lucide-react";
import useLocalStorage from "@/hooks/use-local-storage";

const items = [
  { label: "Maillot de bain", hint: "Cascades & piscine prévus", emoji: "🩱" },
  { label: "Appareil photo", hint: "Les paysages valent le détour", emoji: "📷" },
  { label: "Vêtements de rechange", hint: "Minimum pour 2 jours", emoji: "👕" },
  { label: "Chaussures de marche", hint: "Terrain variable en montagne", emoji: "👟" },
  { label: "Crème solaire", hint: "Journée entière en extérieur", emoji: "🧴" },
  { label: "Bouteille d'eau", hint: "Reste hydraté sur le trajet", emoji: "💧" },
  { label: "Médicaments perso", hint: "En cas de besoin", emoji: "💊" },
  { label: "Bonne humeur", hint: "Indispensable, non négociable", emoji: "😄" },
];

export default function ChecklistSection() {
  const [checked, setChecked] = useLocalStorage<string[]>("trip-checklist", []);

  const toggle = (label: string) =>
    setChecked(
      checked.includes(label)
        ? checked.filter((i) => i !== label)
        : [...checked, label]
    );

  const progress = Math.round((checked.length / items.length) * 100);
  const allDone = checked.length === items.length;

  return (
    <section
      style={{
        background: "var(--bg-dark)",
        paddingBlock: "clamp(4rem, 9vw, 7rem)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ position: "sticky", top: "40px" }}
          >
            <span
              className="badge"
              style={{ background: "rgba(26,63,204,0.2)", color: "#7a9fff" }}
            >
              Checklist
            </span>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(34px, 4.5vw, 52px)",
                fontWeight: 800,
                color: "#fff",
                marginTop: "20px",
                marginBottom: "16px",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Prépare<br />ton sac
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "15px",
                lineHeight: 1.75,
                marginBottom: "48px",
                maxWidth: "340px",
              }}
            >
              Coche chaque élément avant le départ.
              Ta progression est sauvegardée automatiquement.
            </p>

            {/* Progress ring + number */}
            <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
              {/* Circular progress */}
              <div style={{ position: "relative", width: "96px", height: "96px", flexShrink: 0 }}>
                <svg width="96" height="96" style={{ transform: "rotate(-90deg)" }}>
                  <circle
                    cx="48" cy="48" r="40"
                    fill="none"
                    stroke="rgba(255,255,255,0.07)"
                    strokeWidth="6"
                  />
                  <motion.circle
                    cx="48" cy="48" r="40"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    animate={{
                      strokeDashoffset: 2 * Math.PI * 40 * (1 - progress / 100),
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </svg>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "#fff",
                      lineHeight: 1,
                    }}
                  >
                    {progress}%
                  </span>
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "4px",
                  }}
                >
                  {checked.length} / {items.length} éléments
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
                  {allDone
                    ? "Tu es prêt(e) pour l'aventure !"
                    : `Plus que ${items.length - checked.length} à cocher`}
                </div>
              </div>
            </div>

            {/* All done message */}
            <AnimatePresence>
              {allDone && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  style={{
                    marginTop: "32px",
                    padding: "16px 20px",
                    background: "rgba(22,163,74,0.15)",
                    border: "1px solid rgba(22,163,74,0.3)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <PartyPopper size={20} color="#4ade80" />
                  <span style={{ fontSize: "14px", color: "#4ade80", fontWeight: 600 }}>
                    Sac bouclé — on est prêts !
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Right — list ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {items.map((item, i) => {
              const isChecked = checked.includes(item.label);
              return (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  onClick={() => toggle(item.label)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "18px 20px",
                    background: isChecked
                      ? "rgba(26,63,204,0.15)"
                      : "rgba(255,255,255,0.04)",
                    border: `1px solid ${isChecked ? "rgba(26,63,204,0.4)" : "rgba(255,255,255,0.07)"}`,
                    borderRadius: "var(--radius-md)",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s ease",
                  }}
                >
                  {/* Emoji */}
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: isChecked ? "rgba(26,63,204,0.2)" : "rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      flexShrink: 0,
                      transition: "all 0.2s ease",
                    }}
                  >
                    {isChecked ? <Check size={18} color="#7a9fff" strokeWidth={2.5} /> : item.emoji}
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: isChecked ? "rgba(255,255,255,0.4)" : "#fff",
                        textDecoration: isChecked ? "line-through" : "none",
                        transition: "all 0.2s ease",
                        marginBottom: "2px",
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
                      {item.hint}
                    </div>
                  </div>

                  {/* Status dot */}
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: isChecked ? "var(--primary)" : "rgba(255,255,255,0.12)",
                      flexShrink: 0,
                      transition: "all 0.2s ease",
                    }}
                  />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
