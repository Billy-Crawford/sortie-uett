"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  { src: "/images/cascade3.jpg", alt: "Cascades de Kpalimé" },
  { src: "/images/cascade4.jpg", alt: "Défis sportifs" },
  { src: "/images/cascade1.jpg", alt: "La communauté UETT" },
  { src: "/images/cascade2.jpg", alt: "La communauté UETT" },
  { src: "/images/cascade5.jpg", alt: "La communauté UETT" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="hero-dark relative flex min-h-screen flex-col justify-end overflow-hidden"
      style={{ background: "#0f0f0f" }}
    >
      {/* Slideshow background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${slides[current].src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.88) 100%)",
          zIndex: 1,
        }}
      />

      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            height: "106px",
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <img
            src="/logo/logo-uett.jpg"
            alt="UETT"
            style={{ height: "100%", width: "auto", objectFit: "contain" }}
          />
        </div>

        {/* Badge */}
        <span className="badge badge-secondary" style={{ fontSize: "11px" }}>
          Kpalimé · 04–05 Juil 2026
        </span>
      </motion.div>

      {/* Slide dots */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "16px",
          transform: "translateY(-50%)",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: "6px",
              height: i === current ? "24px" : "6px",
              borderRadius: "99px",
              background: i === current ? "#fff" : "rgba(255,255,255,0.35)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div
        className="relative container section-py"
        style={{ zIndex: 10 }}
      >
        <div style={{ maxWidth: "680px" }}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "16px",
            }}
          >
            UETT · Excursion 2026 · 1e Edition
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 10vw, 96px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
          >
            Unité &amp;
            <br />
            Aventure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "rgba(255,255,255,0.72)",
              maxWidth: "480px",
              lineHeight: 1.65,
              marginBottom: "32px",
            }}
          >
            Une seule famille, une grande aventure. Deux jours de découvertes,
            de sport et de souvenirs inoubliables entre étudiants de 8
            universités du Togo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <a
            
              href="https://wa.me/23560749264?text=Bonjour%20je%20souhaite%20réserver%20ma%20place%20pour%20l'excursion%20Kpalimé%202026"
              target="_blank"
              className="btn btn-secondary"
              style={{ fontSize: "14px", padding: "13px 22px" }}
            >
              <MessageCircle size={16} />
              Réserver — 12 500 F
            </a>
            <a
            
              href="#programme"
              className="btn btn-outline"
              style={{ fontSize: "14px", padding: "13px 22px" }}
            >
              Voir le programme
            </a>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.12)",
            borderRadius: "14px",
            overflow: "hidden",
            marginTop: "48px",
            maxWidth: "480px",
          }}
        >
          {[
            { value: "8+", label: "Universités" },
            { value: "2", label: "Jours" },
            { value: "100%", label: "Ambiance" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "rgba(0,0,0,0.35)",
                backdropFilter: "blur(12px)",
                padding: "16px 12px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(22px, 5vw, 38px)",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.55)",
                  marginTop: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator — caché sur mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden sm:flex"
        style={{
          position: "absolute",
          bottom: "32px",
          right: "40px",
          zIndex: 20,
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          color: "rgba(255,255,255,0.45)",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}