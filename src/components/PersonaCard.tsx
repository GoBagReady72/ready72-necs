type Props = {
  persona: { role: string; sex: 'M'|'F'; ethnicity: 'AA'|'LAT'|'CAU'|'ASN'; name: string }
  mss: number
  morale: number
}

export function PersonaCard({ persona, mss, morale }: Props) {
  return (
    <div className="rounded-2xl border border-neutral-800 p-4 bg-neutral-900/60">
      <div className="flex items-center gap-3">
        <div className="size-12 rounded-xl bg-neutral-800" />
        <div>
          <div className="text-sm text-neutral-400">Persona</div>
          <div className="font-semibold text-neutral-100">
            {persona.role} · {persona.sex}/{persona.ethnicity}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
        <div className="rounded-xl border border-neutral-800 px-3 py-2">
          <div className="text-neutral-500 text-xs">MSS%</div>
          <div className="text-neutral-100 font-medium">{mss}</div>
        </div>
        <div className="rounded-xl border border-neutral-800 px-3 py-2">
          <div className="text-neutral-500 text-xs">Morale</div>
          <div className="text-neutral-100 font-medium">{morale}</div>
        </div>
      </div>
    </div>
  )
}