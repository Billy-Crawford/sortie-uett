// src/components/map/trip-map.tsx

"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, Polyline } from "react-leaflet";

// Fix icônes Leaflet en Next.js
const makeIcon = (color: string) =>
  L.divIcon({
    className: "",
    html: `
      <div style="
        width:36px; height:36px; border-radius:50% 50% 50% 0;
        background:${color}; border:3px solid #fff;
        box-shadow:0 2px 8px rgba(0,0,0,0.3);
        transform:rotate(-45deg);
      "></div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -40],
  });

const stops = [
  {
    id: 1,
    label: "Départ",
    name: "Lomé — Place de l'Indépendance",
    position: [6.1375, 1.2123] as [number, number],
    time: "13h00",
    detail: "Rassemblement et départ des bus. Prévoir d'être sur place à 11h45.",
    color: "#1a3fcc",
  },
  {
    id: 2,
    label: "Étape 1",
    name: "Noépé",
    position: [6.5167, 0.9833] as [number, number],
    time: "14h30",
    detail: "Pause rapide. Premier point de ravitaillement sur la route.",
    color: "#1a3fcc",
  },
  {
    id: 3,
    label: "Étape 2 . j2",
    name: "Château Vial — Kpalimé",
    position: [6.9006, 0.6306] as [number, number],
    time: "08h00",
    detail: "Visite guidée du Château Vial, monument historique colonial perché sur les collines.",
    color: "#1a3fcc",
  },
  {
    id: 4,
    label: "Étape 3 . j2",
    name: "Cascade de Kpimé",
    position: [7.0167, 0.5833] as [number, number],
    time: "10h30",
    detail: "Randonnée jusqu'aux cascades. Baignade dans les eaux cristallines.",
    color: "#c8382a",
  },
  {
    id: 5,
    label: "Étape 4 . j2",
    name: "Terrain des jeux — Kpalimé",
    position: [6.8954, 0.6274] as [number, number],
    time: "14h00",
    detail: "Défis sportifs inter-universités : tir à la corde, bras de fer, course en sac.",
    color: "#c8382a",
  },
  {
    id: 6,
    label: "Nuit",
    name: "Hôtel Résidence Kpalimé",
    position: [6.9000, 0.6350] as [number, number],
    time: "18h00",
    detail: "Installation, dîner convivial et soirée libre entre étudiants.",
    color: "#16a34a",
  },
];

const route = stops.map((s) => s.position);

export default function TripMap() {
  return (
    <MapContainer
      center={[6.65, 0.85]}
      zoom={9}
      scrollWheelZoom={false}
      style={{ height: "560px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      {/* Trait de route */}
      <Polyline
        positions={route}
        pathOptions={{ color: "#1a3fcc", weight: 3, dashArray: "8 6", opacity: 0.7 }}
      />

      {stops.map((stop) => (
        <Marker
          key={stop.id}
          position={stop.position}
          icon={makeIcon(stop.color)}
        >
          <Popup>
            <div style={{ fontFamily: "sans-serif", minWidth: "180px" }}>
              <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#7a7a7a", marginBottom: "4px" }}>
                {stop.label} · {stop.time}
              </div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#0f0f0f", marginBottom: "6px" }}>
                {stop.name}
              </div>
              <div style={{ fontSize: "12px", color: "#3d3d3d", lineHeight: 1.5 }}>
                {stop.detail}
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

