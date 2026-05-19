// src/components/map/trip-map.tsx

"use client";

import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
} from "react-leaflet";

const positions: [number, number][] = [
  [6.1375, 1.2123], // Lomé
  [6.9, 0.6333], // Château Vial
  [6.95, 0.65], // Cascade Kpégah
  [6.9, 0.633], // Hôtel
];

export default function TripMap() {
  return (
    <MapContainer
      center={[6.85, 0.65]}
      zoom={9}
      scrollWheelZoom={false}
      className="h-[500px] w-full rounded-3xl"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Route */}
      <Polyline positions={positions} />

      {/* Lomé */}
      <Marker position={[6.1375, 1.2123]}>
        <Popup>
          <strong>Lomé</strong>
          <br />
          Point de rassemblement et départ des bus.
        </Popup>
      </Marker>

      {/* Château Vial */}
      <Marker position={[6.9, 0.6333]}>
        <Popup>
          <strong>Château Vial</strong>
          <br />
          Première escale historique.
        </Popup>
      </Marker>

      {/* Cascade */}
      <Marker position={[6.95, 0.65]}>
        <Popup>
          <strong>Cascade de Kpégah</strong>
          <br />
          Pause fraîcheur et baignade.
        </Popup>
      </Marker>

      {/* Hôtel */}
      <Marker position={[6.9, 0.633]}>
        <Popup>
          <strong>Hôtel</strong>
          <br />
          Installation, dîner et nuitée.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

