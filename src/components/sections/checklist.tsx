"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import useLocalStorage from "@/hooks/use-local-storage";

const items = [
  { label: "Maillot de bain", hint: "Cascades & piscine prévus" },
  { label: "Appareil photo", hint: "Les paysages valent le détour" },
  { label: "Vêtements de rechange", hint: "Minimum 2 jours" },
  { label: "Chaussures de marche", hint: "Terrain variable en montagne" },
  { label: "Bonne humeur", hint: "Indispensable, non négociable" },
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

  return (
    <section className="section-tinted section-py">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* Left — header + progress */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ position: "sticky", top: "40px" }}
          >
            <span className="badge badge-primary">Checklist</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(34px, 4.5vw, 48px)",
                fontWeight: 800,
                marginTop: "20px",
                marginBottom: "16px",
              }}
            >
              Prépare ton sac
            </h2>
            <p style={{ color: "var(--ink-3)", fontSize: "15px", lineHeight: 1.7, marginBottom: "40px" }}>
              Coche chaque élément au fur et à mesure. Ta progression est
              sauvegardée automatiquement.
            </p>

            {/* Progress */}
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "10px",
                }}
              >
                <span style={{ fontSize: "13px", fontWeight: 500, color: "var(--ink-2)" }}>
                  Progression
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "24px",
                    fontWeight: 800,
                    color: "var(--primary)",
                  }}
                >
                  {progress}%
                </span>
              </div>
              <div
                style={{
                  height: "6px",
                  background: "var(--primary-dim)",
                  borderRadius: "99px",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    height: "100%",
                    background: "var(--primary)",
                    borderRadius: "99px",
                  }}
                />
              </div>
              <p
                style={{
                  marginTop: "12px",
                  fontSize: "13px",
                  color: "var(--ink-3)",
                }}
              >
                {checked.length} / {items.length} éléments cochés
              </p>
            </div>
          </motion.div>

          {/* Right — list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {items.map((item, i) => {
              const isChecked = checked.includes(item.label);
              return (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  onClick={() => toggle(item.label)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "20px 24px",
                    background: isChecked ? "var(--primary-dim)" : "#fff",
                    border: `1px solid ${isChecked ? "var(--primary)" : "var(--border)"}`,
                    borderRadius: "var(--radius-md)",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s ease",
                    boxShadow: isChecked ? "none" : "var(--shadow-card)",
                  }}
                >
                  {/* Checkbox */}
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "7px",
                      border: `2px solid ${isChecked ? "var(--primary)" : "var(--border-md)"}`,
                      background: isChecked ? "var(--primary)" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.2s ease",
                    }}
                  >
                    {isChecked && <Check size={14} color="#fff" strokeWidth={2.5} />}
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "var(--ink)",
                        textDecoration: isChecked ? "line-through" : "none",
                        opacity: isChecked ? 0.5 : 1,
                        transition: "all 0.2s ease",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--ink-3)",
                        marginTop: "2px",
                      }}
                    >
                      {item.hint}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

