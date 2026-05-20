// src/components/sections/roadmap.tsx
"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Clock, MapPin } from "lucide-react";

const TripMap = dynamic(() => import("@/components/map/trip-map"), { ssr: false });

const stops = [
  { time: "13h00", name: "Lomé — Départ", color: "#1a3fcc" },
  { time: "14h30", name: "Noépé — Pause", color: "#1a3fcc" },
  { time: "16h00", name: "Installation - Hôtel", color: "#e3d917" },
  { time: "19h00", name: "Feu de camp et soirée", color: "#e3e31e" },
  { time: "08h00", name: "Château Vial", color: "#1a3fcc" },
  { time: "10h30", name: "Cascade de Kpimé", color: "#c8382a" },
  { time: "14h00", name: "Jeux inter-universités", color: "#c8382a" },
  { time: "18h00", name: " Kpalimé — Depart", color: "#16a34a" },
];

export default function RoadmapSection() {
  return (
    <section className="section-white section-py">
      <div className="container">

        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "end",
            marginBottom: "48px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="badge badge-secondary">Itinéraire</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 800,
                marginTop: "20px",
                marginBottom: "16px",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Lomé<br />
              <span style={{ color: "var(--secondary)" }}>→</span> Kpalimé
            </h2>
            <p style={{ color: "var(--ink-3)", fontSize: "15px", lineHeight: 1.7 }}>
              120 km à travers le Togo pour rejoindre l'une des villes les plus
              vertes du pays. Clique sur les marqueurs pour les détails.
            </p>
          </motion.div>

          {/* Timeline verticale */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "0" }}
          >
            {stops.map((stop, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  paddingBlock: "10px",
                  borderBottom: i < stops.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: stop.color,
                    flexShrink: 0,
                  }}
                />
                {/* Time */}
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "var(--ink-2)",
                    minWidth: "48px",
                  }}
                >
                  {stop.time}
                </span>
                {/* Name */}
                <span style={{ fontSize: "13px", color: "var(--ink-3)" }}>
                  {stop.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}
        >
          {[
            { icon: <MapPin size={13} />, text: "Lomé → Kpalimé" },
            { icon: <Clock size={13} />, text: "~2h de route" },
            { icon: <MapPin size={13} />, text: "~120 km" },
            { icon: <Clock size={13} />, text: "Départ 13h00" },
          ].map((chip) => (
            <div
              key={chip.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "7px 14px",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "99px",
                fontSize: "12px",
                fontWeight: 500,
                color: "var(--ink-2)",
              }}
            >
              {chip.icon}
              {chip.text}
            </div>
          ))}
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          viewport={{ once: true }}
          style={{
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            border: "1px solid var(--border-md)",
            boxShadow: "var(--shadow-lift)",
          }}
        >
          <TripMap />
        </motion.div>

      </div>
    </section>
  );
}

