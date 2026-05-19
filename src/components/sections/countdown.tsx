"use client";

import { motion } from "framer-motion";
import useCountdown from "@/hooks/use-countdown";
import { useEffect, useState } from "react";

const universities = [
  "UNET ESGIS",
  "UNET ESAG",
  "EAMAU",
  "ESA",
  "ENA",
  "FORMATEC",
  "ISDI",
  "UET-UCAO",
];

export default function CountdownSection() {
  const [mounted, setMounted] = useState(false);
  const { days, hours, minutes, seconds } = useCountdown("2026-07-04T05:00:00");

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const units = [
    { label: "Jours", value: days },
    { label: "Heures", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Secondes", value: seconds },
  ];

  return (
    <section
      style={{
        background: "var(--bg-dark)",
        overflow: "hidden",
        paddingBlock: "clamp(4rem, 9vw, 7rem)",
        position: "relative",
      }}
    >
      {/* Subtle grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      {/* Glow orb */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(26,63,204,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span
            className="badge"
            style={{
              background: "rgba(26,63,204,0.2)",
              color: "#7a9fff",
              marginBottom: "20px",
            }}
          >
            Compte à rebours
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              color: "#fff",
              marginTop: "16px",
            }}
          >
            Le départ approche
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", marginTop: "12px", fontSize: "15px" }}>
            04 juillet 2026 · 05h00 · Kpalimé
          </p>
        </motion.div>

        {/* Countdown */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
            maxWidth: "700px",
            margin: "0 auto",
            background: "rgba(255,255,255,0.06)",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{
                padding: "40px 16px",
                textAlign: "center",
                background: "rgba(0,0,0,0.3)",
                position: "relative",
              }}
            >
              {/* Separator */}
              {i < 3 && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "1px",
                    height: "40%",
                    background: "rgba(255,255,255,0.08)",
                  }}
                />
              )}

              <motion.div
                key={unit.value}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(44px, 7vw, 72px)",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                {String(unit.value).padStart(2, "0")}
              </motion.div>

              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.3)",
                  marginTop: "14px",
                }}
              >
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA sous le countdown */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "40px" }}
        >
          <a
            href="https://wa.me/23560749264?text=Bonjour%20je%20souhaite%20réserver%20ma%20place%20pour%20l'excursion%20Kpalimé%202026"
            target="_blank"
            className="btn btn-secondary"
          >
            Réserver ma place — 12 500 F
          </a>
        </motion.div>

      </div>

      {/* Universities marquee — pleine largeur */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        style={{
          marginTop: "80px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "24px 0",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Fade edges */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, var(--bg-dark) 0%, transparent 12%, transparent 88%, var(--bg-dark) 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div
          className="animate-marquee"
          style={{ display: "flex", minWidth: "max-content", gap: "0" }}
        >
          {[...universities, ...universities].map((uni, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0",
                padding: "0 48px",
                borderRight: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Dot */}
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "var(--primary)",
                  display: "inline-block",
                  marginRight: "16px",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.75)",
                  whiteSpace: "nowrap",
                }}
              >
                {uni}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}