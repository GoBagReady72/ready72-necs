import { motion } from 'framer-motion';
import { setPersona, type PreparednessLevel, type Gender } from '../state/survivor';

type Option = { preparedness: PreparednessLevel; gender: Gender; label: string; desc: string };

const OPTIONS: Option[] = [
  { preparedness: 'civilian', gender: 'female', label: 'Civilian — Female', desc: 'Everyday baseline' },
  { preparedness: 'civilian', gender: 'male',   label: 'Civilian — Male',   desc: 'Everyday baseline' },
  { preparedness: 'prepper',  gender: 'female', label: 'Prepper — Female',  desc: 'Prepared mindset' },
  { preparedness: 'prepper',  gender: 'male',   label: 'Prepper — Male',    desc: 'Prepared mindset' },
];

function navigateWireframe() {
  if (typeof window !== 'undefined') {
    window.location.href = '/wireframe';
  }
}

export default function PersonaSelect() {
  const handlePick = (opt: Option) => {
    setPersona({ preparedness: opt.preparedness, gender: opt.gender });
    navigateWireframe();
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-6">
      <div className="mb-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Select Your Survivor</h1>
        <p className="text-gray-500 mt-1">Choose preparedness level and gender. Ethnicity is assigned randomly.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {OPTIONS.map((opt) => (
          <motion.button
            key={opt.label}
            onClick={() => handlePick(opt)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group rounded-2xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-lg md:text-xl font-semibold text-gray-900">{opt.label}</div>
                <div className="text-sm text-gray-500">{opt.desc}</div>
              </div>
              <div className="text-gray-400 group-hover:text-gray-600 transition-colors">→</div>
            </div>
            <div className="mt-4 text-xs text-gray-400">
              Saved locally; you can change this later from the wireframe screen.
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
