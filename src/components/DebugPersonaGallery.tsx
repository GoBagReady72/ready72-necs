import { useMemo, useState } from "react";
import { PERSONAS } from "../data/personas";

type Persona = {
  id: string;
  name: string;
  label?: string;
  bio?: string;
  avatarUrl?: string;
};

const STORAGE_KEY = "r72_persona";

export default function DebugPersonaGallery() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState<string | null>(() => {
    try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
  });

  const list: Persona[] = (PERSONAS as Persona[]) ?? [];

  const filtered = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) return list;
    return list.filter(p =>
      [p.id, p.name, p.label, p.bio]
        .filter(Boolean)
        .some(v => String(v).toLowerCase().includes(n))
    );
  }, [q, list]);

  const setActivePersona = (id: string) => {
    try { localStorage.setItem(STORAGE_KEY, id); setActive(id); } catch {}
  };

  const resetPersona = () => {
    try { localStorage.removeItem(STORAGE_KEY); setActive(null); } catch {}
  };

  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto max-w-5xl">
        <header className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Debug Persona Gallery</h1>
            <p className="text-sm opacity-70">Key: <code>{STORAGE_KEY}</code></p>
          </div>
          <div className="flex gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search personas…"
              className="border rounded px-3 py-2 w-56"
            />
            <button onClick={resetPersona} className="border rounded px-3 py-2">Reset</button>
          </div>
        </header>

        <div className="mb-3 text-sm">
          Active: <span className="font-mono">{active ?? "none"}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((p) => (
            <div key={p.id} className={`border rounded p-3 flex flex-col gap-2 ${active===p.id ? "ring-1" : ""}`}>
              <div className="flex items-center gap-3">
                {p.avatarUrl ? (
                  <img src={p.avatarUrl} alt={p.name} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full border grid place-items-center text-xs opacity-70">
                    {(p.name || p.id).split(" ").map(s=>s[0]).join("").slice(0,2) || "?"}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="font-semibold truncate">{p.name || p.id}</div>
                  <div className="text-xs opacity-60 truncate">{p.label ?? p.id}</div>
                </div>
              </div>

              {p.bio && <p className="text-sm opacity-80 line-clamp-3">{p.bio}</p>}

              <div className="mt-auto flex items-center justify-between pt-2">
                <code className="text-xs opacity-60 truncate">{p.id}</code>
                <button
                  onClick={() => setActivePersona(p.id)}
                  className="text-sm border rounded px-3 py-1.5"
                  title={`Set active persona = ${p.id}`}
                >
                  {active === p.id ? "Active" : "Set active"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="opacity-60 text-sm">No personas match “{q}”.</div>
        )}
      </div>
    </div>
  );
}
