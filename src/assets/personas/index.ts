import type { SurvivorPersona } from '../../state/survivor';
import { PERSONAS } from '../../data/personas';

/**
 * Picks a portrait deterministically from PERSONAS based on
 * the survivor’s gender and (softly) their ethnicity.
 */
export function pickPortraitFor(persona: SurvivorPersona): string {
  const matches = PERSONAS.filter(p => p.gender === persona.gender);

  // Try to find best-fit ethnicity match first
  const preferred = matches.filter(p =>
    p.suggestedEthnicities.includes(persona.ethnicity)
  );
  if (preferred.length > 0) return preferred[0].image;

  // Otherwise, fall back to any in-gender pool (stable by ID hash)
  const index = Math.abs([...persona.id].reduce((a, c) => a + c.charCodeAt(0), 0)) % matches.length;
  return matches[index].image;
}

/** Convenience function for gender-only lookups. */
export function pickByGender(gender: 'female' | 'male'): string {
  const pool = PERSONAS.filter(p => p.gender === gender);
  const i = Math.floor(Math.random() * pool.length);
  return pool[i].image;
}
