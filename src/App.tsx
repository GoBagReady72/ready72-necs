import DebugPersonaGallery from "./components/DebugPersonaGallery";
import SurvivorCardPreview from "./components/SurvivorCardPreview";

/**
 * Minimal, dependency‑free route switch.
 * If the URL path is "/debug/personas", we render the debug gallery.
 * Otherwise, we render the current app entry (SurvivorCardPreview).
 *
 * No react-router-dom required. Clean and reversible.
 */
export default function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";
  if (path === "/debug/personas") {
    return <DebugPersonaGallery />;
  }
  return <SurvivorCardPreview />;
}
