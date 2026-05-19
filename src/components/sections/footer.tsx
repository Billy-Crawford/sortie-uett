"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const contacts = [
  { name: "Commission UETT", phone: "+23560749264" },
  { name: "Commission UETT", phone: "+22872336246" },
  { name: "Commission UETT", phone: "+22899225656" },
];

export default function FooterSection() {
  return (
    <footer
      style={{
        background: "var(--bg-dark)",
        color: "#fff",
        paddingTop: "clamp(4rem, 9vw, 7rem)",
        paddingBottom: "40px",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "48px",
            flexWrap: "wrap",
            paddingBottom: "56px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div>
            <span
              className="badge"
              style={{ background: "rgba(200,56,42,0.2)", color: "#f47a72" }}
            >
              Places limitées
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 800,
                color: "#fff",
                marginTop: "20px",
                marginBottom: "16px",
                lineHeight: 1.05,
              }}
            >
              Rejoins<br />l'aventure
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "15px",
                maxWidth: "400px",
                lineHeight: 1.7,
              }}
            >
              Réserve ta place dès maintenant. Les inscriptions ferment
              dès que le bus est complet.
            </p>
          </div>

          <a
            href="https://wa.me/22872336246?text=Bonjour%20je%20souhaite%20réserver%20ma%20place%20pour%20l'excursion%20Kpalimé%202026"
            target="_blank"
            className="btn btn-secondary"
            style={{ whiteSpace: "nowrap", fontSize: "16px", padding: "18px 36px" }}
          >
            <MessageCircle size={18} />
            Réserver — 12 500 F
          </a>
        </motion.div>

        {/* Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          style={{ paddingTop: "48px", paddingBottom: "56px" }}
        >
          <p
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.35)",
              marginBottom: "24px",
              fontWeight: 500,
            }}
          >
            Contacts
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
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
                  padding: "20px 24px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                    color: "rgba(255,255,255,0.35)",
                    marginBottom: "6px",
                  }}
                >
                  {c.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "16px",
                  }}
                >
                  {c.phone}
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
                      gap: "6px",
                      padding: "9px 12px",
                      background: "#16a34a",
                      borderRadius: "8px",
                      color: "#fff",
                      fontSize: "13px",
                      fontWeight: 500,
                      textDecoration: "none",
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
                      gap: "6px",
                      padding: "9px 12px",
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                      color: "#fff",
                      fontSize: "13px",
                      fontWeight: 500,
                      textDecoration: "none",
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

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "16px",
              color: "#fff",
            }}
          >
            UETT
          </span>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>
            Excursion Kpalimé · Juillet 2026
          </span>
        </div>
      </div>
    </footer>
  );
}

