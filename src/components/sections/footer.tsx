"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Calendar, Users } from "lucide-react";

const contacts = [
  { name: "Commission UETT", role: "Organisateur principal", phone: "+23560749264" },
  { name: "Commission UETT", role: "Inscriptions & paiements", phone: "+22872336246" },
  { name: "Commission UETT", role: "Informations générales", phone: "+22899225656" },
];

const infos = [
  { icon: Calendar, label: "Date", value: "04 – 05 Juillet 2026" },
  { icon: MapPin, label: "Destination", value: "Kpalimé, Togo" },
  { icon: Users, label: "Participants", value: "8 universités" },
];

export default function FooterSection() {
  return (
    <footer
      style={{
        background: "#080808",
        color: "#fff",
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
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(200,56,42,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* ── CTA principal ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            paddingTop: "clamp(4rem, 9vw, 7rem)",
            paddingBottom: "64px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            textAlign: "center",
          }}
        >
          <span
            className="badge"
            style={{ background: "rgba(200,56,42,0.18)", color: "#f47a72", marginBottom: "28px" }}
          >
            Places limitées
          </span>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8vw, 88px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              marginBottom: "24px",
            }}
          >
            Rejoins<br />l'aventure
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "16px",
              maxWidth: "420px",
              lineHeight: 1.75,
              margin: "0 auto 40px",
            }}
          >
            Réserve ta place dès maintenant. Les inscriptions ferment
            dès que le bus est complet.
          </p>
          <a
          
            href="https://wa.me/22872336246?text=Bonjour%20je%20souhaite%20réserver%20ma%20place%20pour%20l'excursion%20Kpalimé%202026"
            target="_blank"
            className="btn btn-secondary"
            style={{ fontSize: "16px", padding: "18px 40px" }}
          >
            <MessageCircle size={18} />
            Réserver ma place — 12 500 F
          </a>

          {/* Infos rapides sous le CTA */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0",
              marginTop: "48px",
              flexWrap: "wrap",
            }}
          >
            {infos.map((info, i) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "0 32px",
                    borderRight: i < infos.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  }}
                >
                  <Icon size={15} color="rgba(255,255,255,0.3)" />
                  <div>
                    <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.3)", marginBottom: "2px" }}>
                      {info.label}
                    </div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 600, color: "#fff" }}>
                      {info.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Contacts ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          style={{ paddingTop: "56px", paddingBottom: "56px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.25)",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Nous contacter
            </p>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {contacts.map((c, i) => (
              <motion.div
                key={c.phone}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                style={{
                  padding: "24px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "var(--radius-md)",
                  transition: "border-color 0.2s ease",
                }}
              >
                <div style={{ marginBottom: "16px" }}>
                  <div
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      color: "rgba(255,255,255,0.3)",
                      marginBottom: "4px",
                    }}
                  >
                    {c.role}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    {c.phone}
                  </div>
                </div>

                <div style={{ display: "flex", gap: "8px" }}>
                  <a
                    href={`https://wa.me/${c.phone.replace("+", "")}`}
                    target="_blank"
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "7px",
                      padding: "10px 12px",
                      background: "rgba(22,163,74,0.15)",
                      border: "1px solid rgba(22,163,74,0.25)",
                      borderRadius: "8px",
                      color: "#4ade80",
                      fontSize: "13px",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "background 0.2s ease",
                    }}
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${c.phone}`}
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "7px",
                      padding: "10px 12px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "13px",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "background 0.2s ease",
                    }}
                  >
                    <Phone size={14} />
                    Appeler
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "24px",
            paddingBottom: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "18px",
                color: "#fff",
                letterSpacing: "-0.01em",
              }}
            >
              UETT
            </span>
            <span style={{ width: "1px", height: "16px", background: "rgba(255,255,255,0.12)" }} />
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
              Union des Étudiants du Togo
            </span>
          </div>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
            Excursion Kpalimé · Juillet 2026
          </span>
        </div>
      </div>
    </footer>
  );
}