"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const TripMap = dynamic(() => import("@/components/map/trip-map"), { ssr: false });

export default function RoadmapSection() {
  return (
    <section className="section-white section-py">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: "48px" }}
        >
          <span className="badge badge-secondary">Itinéraire</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: 800,
              marginTop: "20px",
              marginBottom: "16px",
            }}
          >
            Lomé → Kpalimé
          </h2>
          <p style={{ color: "var(--ink-3)", fontSize: "15px", maxWidth: "440px" }}>
            120 km de route à travers le Togo pour rejoindre l'une des villes
            les plus vertes du pays.
          </p>
        </motion.div>

        {/* Route info chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "32px",
          }}
        >
          {[
            { label: "Départ", value: "Lomé, Togo" },
            { label: "Arrivée", value: "Kpalimé" },
            { label: "Distance", value: "~120 km" },
            { label: "Durée estimée", value: "2 h" },
          ].map((chip) => (
            <div
              key={chip.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "99px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  color: "var(--ink-3)",
                  fontWeight: 500,
                }}
              >
                {chip.label}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--ink)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {chip.value}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
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

