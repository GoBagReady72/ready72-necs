type Props = {
  mss: number
  morale: number
  fatigue: number
  distance: number
  cycle: string
}

export function TelemetryHUD({ mss, morale, fatigue, distance, cycle }: Props) {
  return (
    <div className="rounded-2xl border border-neutral-800 p-4 bg-neutral-900/60">
      <div className="text-sm font-semibold text-neutral-300 mb-2">Telemetry</div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <Metric label="MSS%" value={mss} />
        <Metric label="Morale" value={morale} />
        <Metric label="Fatigue" value={fatigue} />
        <Metric label="Distance (mi)" value={distance} />
        <Metric label="Cycle" value={cycle} />
      </div>
    </div>
  )
}

function Metric({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-xl border border-neutral-800 px-3 py-2 bg-neutral-950/60">
      <div className="text-neutral-500 text-xs">{label}</div>
      <div className="text-neutral-100 font-medium">{value}</div>
    </div>
  )
}export default TelemetryHUD;
