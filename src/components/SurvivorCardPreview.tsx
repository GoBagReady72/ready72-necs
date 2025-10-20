import { motion } from 'framer-motion';
import { usePersona } from '../hooks/usePersona';
import { pickPortraitFor } from '../assets/personas';
import type { SurvivorPersona } from '../state/survivor';

function Portrait({ persona }: { persona: SurvivorPersona }) {
  const url = pickPortraitFor(persona);
  return (
    <div className="bg-neutral-950">
      <img
        src={url}
        alt="Survivor portrait"
        className="w-full h-auto object-cover"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}

export default function SurvivorCardPreview() {
  const persona = usePersona();

  if (!persona) {
    return (
      <div className="p-6 md:p-8 bg-neutral-900/50 text-neutral-200">
        <div className="text-lg font-semibold mb-2">No persona selected</div>
        <p className="text-sm text-neutral-400">
          Choose a survivor to see their portrait here.
        </p>
        <a
          href="/select"
          className="inline-block mt-4 rounded-xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800"
        >
          Select Persona →
        </a>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0.0, y: 8 }}
      animate={{ opacity: 1.0, y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-neutral-950"
    >
      <Portrait persona={persona} />
    </motion.div>
  );
}
