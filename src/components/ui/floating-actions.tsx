// src/components/ui/floating-actions.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ImageIcon, MessageCircle, ChevronUp } from "lucide-react";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "28px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      {/* Actions dépliées */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
            }}
          >
            {/* Affiche personnalisée */}

            <a
        
              href="https://forms.gle/vcjbSvvJ9ABi1dCp9"
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 22px",
                background: "#fff",
                borderRadius: "99px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                textDecoration: "none",
                whiteSpace: "nowrap",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "var(--primary-dim)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ImageIcon size={16} color="var(--primary)" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--ink)",
                    lineHeight: 1.2,
                  }}
                >
                  Obtenir mon affiche
                </div>
                <div
                
                  style={{
                    fontSize: "11px",
                    color: "var(--ink-3)",
                    marginTop: "2px",
                  }}
                >
                  Je veux mon affiche "J'Y SERAI"
                </div>
              </div>
            </a>

            {/* Réserver */}
            <a
              href="https://wa.me/22872336246?text=Bonjour%20je%20souhaite%20réserver%20ma%20place%20pour%20l'excursion%20Kpalimé%202026"
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 22px",
                background: "var(--secondary)",
                borderRadius: "99px",
                boxShadow: "0 8px 32px rgba(200,56,42,0.35)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MessageCircle size={16} color="#fff" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.2,
                  }}
                >
                  Réserver ma place
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.7)",
                    marginTop: "2px",
                  }}
                >
                  12 500 F · Via WhatsApp
                </div>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton principal */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "14px 24px",
          background: open ? "var(--ink)" : "var(--secondary)",
          borderRadius: "99px",
          border: "none",
          cursor: "pointer",
          boxShadow: open
            ? "0 8px 32px rgba(0,0,0,0.25)"
            : "0 8px 32px rgba(200,56,42,0.4)",
          transition: "background 0.25s ease, box-shadow 0.25s ease",
        }}
      >
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          {open ? (
            <X size={18} color="#fff" />
          ) : (
            <ChevronUp size={18} color="#fff" />
          )}
        </motion.div>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "14px",
            fontWeight: 700,
            color: "#fff",
            whiteSpace: "nowrap",
          }}
        >
          {open ? "Fermer" : "Participer"}
        </span>
      </motion.button>
    </div>
  );
}
