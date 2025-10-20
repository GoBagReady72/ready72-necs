import React from "react";
import Aaliyah from "../assets/personas/Aaliyah Brooks.png";
import Diego from "../assets/personas/Diego Santos.png";
import Hana from "../assets/personas/Hana Ito.png";
import Jack from "../assets/personas/Jack Tanner.png";

/**
 * Per-image focal offsets if a face sits too low/high.
 * Tailwind arbitrary values for object-position: object-[50%_30%]
 */
const focal: Record<string, string> = {
  "Aaliyah Brooks": "object-[50%_30%]",
  "Diego Santos":   "object-[50%_30%]",
  "Hana Ito":       "object-[50%_30%]",
  "Jack Tanner":    "object-[50%_30%]",
};

const personas = [
  { name: "Aaliyah Brooks", file: Aaliyah },
  { name: "Diego Santos",   file: Diego },
  { name: "Hana Ito",       file: Hana },
  { name: "Jack Tanner",    file: Jack },
];

export default function PersonaGrid() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 tracking-tight">Ready72 — Survivor Lineup (v1)</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
        {personas.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/50 overflow-hidden shadow-lg"
            title={p.name}
          >
            <div className="relative h-72 w-full overflow-hidden">
              {/* Face-first crop; solid bottom mask hides any baked-in nameplate */}
              <img
                src={p.file}
                alt={p.name}
                className={"h-full w-full object-cover " + (focal[p.name] || "")}
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-neutral-950" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-neutral-950/60 to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
