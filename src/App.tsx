import SurvivorCardPreview from "./components/SurvivorCardPreview";

const STORAGE_KEY = "r72_persona";

function getActive(): string | null {
  try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
}

function ResetPersonaBar() {
  const active = getActive();
  const reset = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      // Hard reload so any stateful consumers pick up the change
      window.location.reload();
    } catch {}
  };

  return (
    <div className="w-full border-b px-4 py-2 flex items-center justify-between bg-white/70 backdrop-blur">
      <div className="text-sm">
        Active persona:{" "}
        <span className="font-mono">{active ?? "none"}</span>
      </div>
      <div className="flex items-center gap-2">
        <a
          href="/debug/personas"
          className="text-xs border rounded px-2 py-1 hover:shadow-sm"
          title="Open Debug Persona Gallery"
        >
          Open Gallery
        </a>
        <button
          onClick={reset}
          className="text-xs border rounded px-2 py-1 hover:shadow-sm"
          title="Clear active persona (localStorage) and reload"
        >
          Reset Persona
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ResetPersonaBar />
      <div className="flex-1">
        <SurvivorCardPreview />
      </div>
    </div>
  );
}
