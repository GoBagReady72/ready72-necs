import { useEffect, useMemo, useState } from 'react'
import { TelemetryHUD } from './components/TelemetryHUD'
import { PersonaCard } from './components/PersonaCard'

type MSS = {
  water: number; food: number; clothing: number; shelter: number;
  comms_nav: number; health: number; sustainability: number; special: number;
}

type Persona = { role: string; sex: 'M'|'F'; ethnicity: 'AA'|'LAT'|'CAU'|'ASN'; name: string }

export default function App() {
  // --- M0 Foundation: minimal global-ish state scaffold ---
  const [seed] = useState(() => {
    const s = crypto.randomUUID()
    return s
  })

  const [mss, setMss] = useState<MSS>({
    water: 0, food: 0, clothing: 0, shelter: 0,
    comms_nav: 0, health: 0, sustainability: 0, special: 0,
  })

  const [morale, setMorale] = useState(50)
  const [fatigue, setFatigue] = useState(10)
  const [distance, setDistance] = useState(0)
  const [cycle, setCycle] = useState({ phase: 'T', idx: 3 as number })

  const [persona] = useState<Persona>({
    role: 'Everyday', sex: 'F', ethnicity: 'AA', name: 'EC_F_AA'
  })

  const mssCompliance = useMemo(() => {
    const vals = Object.values(mss)
    return Math.round(vals.reduce((a,b)=>a+b,0) / vals.length)
  }, [mss])

  useEffect(() => {
    // Canonical seed log for QA
    // eslint-disable-next-line no-console
    console.log('Ready72 M0 Foundation — Seed:', seed)
  }, [seed])

  return (
    <div className="p-4 md:p-8">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Ready72 — <span className="text-[var(--ready72)]">NE Coastal Southeast</span>
          <span className="ml-3 text-sm font-medium px-2 py-1 rounded bg-neutral-800 text-neutral-300">M0 · Foundation</span>
        </h1>
        <p className="text-neutral-400 mt-2 max-w-3xl">
          Scaffold + Tailwind + baseline state. This slice logs a deterministic seed and renders HUD and PersonaCard stubs.
        </p>
      </header>

      <section className="grid md:grid-cols-[1fr,360px] gap-6 items-start">
        <div className="rounded-2xl border border-neutral-800 p-4 bg-neutral-900/50">
          <div className="h-28 rounded-xl ready72-gradient mb-4"></div>
          <p className="text-sm text-neutral-300">
            This is an M0 placeholder area. Next slices (A–G) will replace this with Persona Select, Decision Loop, Campfire, and Debrief.
          </p>
        </div>

        <aside className="space-y-4">
          <TelemetryHUD
            mss={mssCompliance}
            morale={morale}
            fatigue={fatigue}
            distance={distance}
            cycle={`${cycle.phase}${cycle.idx}`}
          />
          <PersonaCard
            persona={persona}
            mss={mssCompliance}
            morale={morale}
          />
        </aside>
      </section>

      <footer className="mt-10 text-xs text-neutral-500">
        Seed is logged in the console. No console errors is a M0 pass criterion.
      </footer>
    </div>
  )
}