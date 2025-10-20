import { useSyncExternalStore, useMemo } from 'react';
import {
  getPersona,
  subscribe,
  hasPersona,
  type SurvivorPersona,
  type PreparednessLevel,
  type Gender,
  setPersona,
  clearPersona,
  getPortraitKey,
} from '../state/survivor';

/**
 * React hook to access the survivor persona with proper subscription semantics.
 */
export function usePersona(): SurvivorPersona | null {
  return useSyncExternalStore(
    (listener) => subscribe(listener),
    () => getPersona(),
    () => null // SSR fallback
  );
}

/** Convenience boolean hook. */
export function useHasPersona(): boolean {
  return useSyncExternalStore(
    (listener) => subscribe(listener),
    () => hasPersona(),
    () => false
  );
}

/** Handy helpers surfaced alongside the hook (typed re-exports). */
export { setPersona, clearPersona, getPortraitKey };
export type { SurvivorPersona, PreparednessLevel, Gender };

/**
 * Stable computed values derived from persona (example).
 * Extend as needed without re-computing in components.
 */
export function usePortraitKey(): string | null {
  const persona = usePersona();
  return useMemo(() => (persona ? getPortraitKey(persona) : null), [persona]);
}
