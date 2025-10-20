import React from "react";
import TelemetryHUD from "./TelemetryHUD";
import SurvivorCardPreview from "./SurvivorCardPreview";

/**
 * Minimal shell to preview the current wireframe during M1/M2.
 * Left: Telemetry HUD — Right: Survivor portrait (live)
 */
export default function WireframeShell() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="px-6 py-4 flex items-center justify-between border-b border-neutral-800">
        <h1 className="text-xl font-semibold tracking-tight">Ready72 — Wireframe Preview</h1>
        <nav className="text-sm space-x-4">
          <a href="/wireframe" className="hover:underline">Wireframe</a>
          <a href="/select" className="hover:underline">Select Persona</a>
          <a href="/card-preview" className="hover:underline">Card Preview</a>
        </nav>
      </header>

      <main className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4">
            <h2 className="text-lg font-semibold mb-3">Telemetry</h2>
            {/* Safe baseline values */}
            <TelemetryHUD mss={0} morale={50} fatigue={10} distance={0} cycle="T3" />
          </section>

          <section className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4">
            <h2 className="text-lg font-semibold mb-3">Persona Card (Live Portrait)</h2>
            {/* Reuse the working portrait preview inside the shell */}
            <div className="rounded-xl border border-neutral-800 overflow-hidden">
              <SurvivorCardPreview />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
