"use client";

import { motion } from "framer-motion";
import { Dumbbell, Hotel, MapPinned, Trophy } from "lucide-react";

const activities = [
  {
    icon: MapPinned,
    tag: "Jour 1",
    title: "Visite guidée",
    description:
      "Découverte du Château Vial et des cascades de Kpalimé — un cadre naturel exceptionnel.",
    image: "/images/visite-guidee.jpg",
  },
  {
    icon: Dumbbell,
    tag: "Jour 1",
    title: "Défis sportifs",
    description:
      "Tir à la corde, course en sac, relais inter-universités. L'esprit de corps avant tout.",
    image: "/images/course-sac.jpg",
  },
  {
    icon: Trophy,
    tag: "Jour 1",
    title: "Tournoi bras de fer",
    description:
      "Championnat inter-universités dans une ambiance électrique. Qui soulèvera le trophée ?",
    image: "/images/bras-de-fer.jpg",
  },
  {
    icon: Hotel,
    tag: "Nuit",
    title: "Hébergement & dîner",
    description:
      "Installation à l'hôtel, dîner convivial, soirée libre entre étudiants.",
    image: "/images/feu-de-camp.jpg",
  },
  {
    icon: Dumbbell,
    tag: "Jour 1",
    title: "Tir à la corde",
    description:
      "Universités contre universités — force, cohésion et détermination dans une atmosphère enflammée.",
    image: "/images/tir-corde.jpg",
  },
  {
    icon: MapPinned,
    tag: "Jour 2",
    title: "Baignade aux cascades",
    description:
      "Plongée dans les eaux cristallines des cascades de Kpalimé. Le clou du séjour.",
    image: "/images/cascade6.jpg",
  },
];

export default function ProgrammeSection() {
  return (
    <section id="programme" className="section-tinted section-py">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "64px" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            <span className="badge badge-primary">Programme</span>
            <div
              style={{
                height: "1px",
                flex: 1,
                background:
                  "linear-gradient(to right, var(--border-md), transparent)",
              }}
            />
            <span
              style={{
                fontSize: "12px",
                fontWeight: 500,
                color: "var(--ink-3)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              04 – 05 Juillet 2026
            </span>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "end",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 5.5vw, 64px)",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
              }}
            >
              2 jours,
              <br />
              <span style={{ color: "var(--primary)" }}>une</span> aventure
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p
                style={{
                  color: "var(--ink-2)",
                  fontSize: "16px",
                  lineHeight: 1.75,
                  marginBottom: "28px",
                }}
              >
                Deux jours construits pour mêler découverte culturelle,
                compétition sportive et liens entre étudiants de 8 universités
                du Togo.
              </p>

              {/* Stats inline */}
              <div style={{ display: "flex", gap: "32px" }}>
                {[
                  { value: "6+", label: "Activités" },
                  { value: "8+", label: "Universités" },
                  { value: "2", label: "Jours" },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "28px",
                        fontWeight: 800,
                        color: "var(--ink)",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--ink-3)",
                        marginTop: "4px",
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {activities.map((act, i) => {
            const Icon = act.icon;
            return (
              <motion.div
                key={act.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{
                  position: "relative",
                  borderRadius: "22px",
                  overflow: "hidden",
                  height: "420px",
                  cursor: "default",
                }}
              >
                {/* Background image */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url('${act.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.6s ease",
                  }}
                  className="card-img"
                />

                {/* Overlay gradient — léger en haut, dense en bas */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.88) 100%)",
                  }}
                />

                {/* Content */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "24px",
                  }}
                >
                  {/* Top — tag + icon */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "11px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "rgba(255,255,255,0.7)",
                        background: "rgba(255,255,255,0.12)",
                        backdropFilter: "blur(8px)",
                        padding: "5px 12px",
                        borderRadius: "99px",
                        border: "1px solid rgba(255,255,255,0.15)",
                      }}
                    >
                      {act.tag}
                    </span>

                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "12px",
                        background: "rgba(255,255,255,0.12)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={18} color="#fff" />
                    </div>
                  </div>

                  {/* Bottom — title + description */}
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "24px",
                        fontWeight: 800,
                        color: "#fff",
                        marginBottom: "10px",
                        lineHeight: 1.15,
                      }}
                    >
                      {act.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.72)",
                        lineHeight: 1.6,
                      }}
                    >
                      {act.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Hover zoom effect */}
      <style>{`
        .card-img { transform: scale(1); }
        *:hover > .card-img { transform: scale(1.05); }
      `}</style>
    </section>
  );
}


