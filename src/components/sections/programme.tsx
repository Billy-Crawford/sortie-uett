"use client";

import { motion } from "framer-motion";
import { Dumbbell, Hotel, MapPinned, Trophy } from "lucide-react";

const activities = [
  {
    icon: MapPinned,
    tag: "Jour 1",
    title: "Visite guidée",
    description: "Découverte du Château Vial et des cascades de Kpalimé — un cadre naturel exceptionnel.",
    image: "/images/visite-guidee.jpg",
  },
  {
    icon: Dumbbell,
    tag: "Jour 1",
    title: "Défis sportifs",
    description: "Tir à la corde, course en sac, relais inter-universités. L'esprit de corps avant tout.",
    image: "/images/course-sac.jpg",
  },
  {
    icon: Trophy,
    tag: "Jour 1",
    title: "Tournoi bras de fer",
    description: "Championnat inter-universités dans une ambiance électrique. Qui soulèvera le trophée ?",
    image: "/images/bras-de-fer.jpg",
  },
  {
    icon: Hotel,
    tag: "Nuit",
    title: "Hébergement & dîner",
    description: "Installation à l'hôtel, dîner convivial, soirée libre entre étudiants.",
    image: "/images/feu-de-camp.jpg",
  },
];

export default function ProgrammeSection() {
  return (
    <section id="programme" className="section-tinted section-py">
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            marginBottom: "56px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="badge badge-primary">Programme</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: 800,
                marginTop: "20px",
              }}
            >
              2 jours,<br />une aventure
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            style={{
              color: "var(--ink-3)",
              fontSize: "15px",
              maxWidth: "320px",
              lineHeight: 1.7,
            }}
          >
            Deux jours construits pour mêler découverte culturelle,
            compétition sportive et liens entre étudiants.
          </motion.p>
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