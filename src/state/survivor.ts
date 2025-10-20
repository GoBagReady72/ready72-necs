/**
 * Ready72 — Survivor Persona State
 * M2: Persona Assignment (Civilian/Prepper + Female/Male → random ethnicity)
 * Persisted to localStorage; lightweight observable for UI updates.
 */

export type PreparednessLevel = 'civilian' | 'prepper';
export type Gender = 'female' | 'male';

/**
 * Ethnicity list is intentionally generic and extensible.
 * If you later want weighted selection or region-sensitive pools,
 * adjust ETHNICITIES or replace pickRandomEthnicity().
 */
export type Ethnicity =
  | 'black'
  | 'white'
  | 'asian'
  | 'latino'
  | 'native'
  | 'middle_eastern'
  | 'pacific_islander'
  | 'multiracial';

export interface SurvivorPersona {
  id: string; // stable across session until cleared/re-assigned
  preparedness: PreparednessLevel;
  gender: Gender;
  ethnicity: Ethnicity;
  assignedAt: string; // ISO timestamp
}

export interface PersonaSelectionInput {
  preparedness: PreparednessLevel;
  gender: Gender;
  /** Optional override; if omitted we assign randomly. */
  ethnicity?: Ethnicity;
}

const STORAGE_KEY = 'ready72.survivor.persona.v1';

const ETHNICITIES: Ethnicity[] = [
  'black',
  'white',
  'asian',
  'latino',
  'native',
  'middle_eastern',
  'pacific_islander',
  'multiracial',
];

// ---------- Utilities ----------

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}

function nowISO(): string {
  return new Date().toISOString();
}

function uuid(): string {
  // Prefer crypto.randomUUID when available.
  try {
    // @ts-ignore
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      // @ts-ignore
      return crypto.randomUUID();
    }
  } catch {}
  return 'id_' + Math.random().toString(36).slice(2) + '_' + Date.now().toString(36);
}

function pickRandomEthnicity(): Ethnicity {
  const idx = Math.floor(Math.random() * ETHNICITIES.length);
  return ETHNICITIES[idx];
}

function saveToStorage(persona: SurvivorPersona | null): void {
  if (!isBrowser()) return;
  try {
    if (persona) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(persona));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    // Swallow storage errors (quota/denied).
  }
}

function loadFromStorage(): SurvivorPersona | null {
  if (!isBrowser()) return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Minimal shape validation:
    if (
      parsed &&
      typeof parsed.id === 'string' &&
      (parsed.preparedness === 'civilian' || parsed.preparedness === 'prepper') &&
      (parsed.gender === 'female' || parsed.gender === 'male') &&
      ETHNICITIES.includes(parsed.ethnicity) &&
      typeof parsed.assignedAt === 'string'
    ) {
      return parsed as SurvivorPersona;
    }
  } catch {
    // ignore parse errors
  }
  return null;
}

// ---------- Tiny observable store ----------

type Listener = (persona: SurvivorPersona | null) => void;
const listeners = new Set<Listener>();

let current: SurvivorPersona | null = loadFromStorage();

function notify() {
  for (const l of Array.from(listeners)) {
    try {
      l(current);
    } catch {
      // isolate listener failures
    }
  }
}

/**
 * Assign/override persona from user selections.
 * If ethnicity not supplied, it is assigned randomly.
 */
export function setPersona(input: PersonaSelectionInput): SurvivorPersona {
  const ethnicity = input.ethnicity ?? pickRandomEthnicity();
  const persona: SurvivorPersona = {
    id: current?.id ?? uuid(),
    preparedness: input.preparedness,
    gender: input.gender,
    ethnicity,
    assignedAt: nowISO(),
  };
  current = persona;
  saveToStorage(persona);
  notify();
  return persona;
}

/** Read current persona (may be null if not assigned yet). */
export function getPersona(): SurvivorPersona | null {
  return current;
}

/** Clear persona selection. */
export function clearPersona(): void {
  current = null;
  saveToStorage(null);
  notify();
}

/**
 * Subscribe to persona changes. Returns an unsubscribe function.
 * Safe to call multiple times; listeners are held weakly via Set.
 */
export function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  // Fire once immediately so UI can sync on mount.
  try {
    listener(current);
  } catch {}
  return () => {
    listeners.delete(listener);
  };
}

// ---------- Optional helpers for UI wiring ----------

/**
 * Return a stable portrait key the UI can map to an image asset.
 * Example convention: "{preparedness}_{gender}_{ethnicity}"
 * e.g., "civilian_female_latino"
 */
export function getPortraitKey(p: SurvivorPersona): string {
  return `${p.preparedness}_${p.gender}_${p.ethnicity}`;
}

/**
 * Quick guard to tell if a persona is assigned.
 */
export function hasPersona(): boolean {
  return current != null;
}
