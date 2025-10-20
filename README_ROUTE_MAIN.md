# Add `/debug/personas` route in `src/main.tsx`

This file defines routes using `react-router-dom`:
- `/` → `App` (your current app entry)
- `/debug/personas` → `DebugPersonaGallery` (new debug view)
- `*` → fallback to `App`

## Upload steps (GitHub web, branch: `feature/m2-persona-assign`)

1. Extract this ZIP.
2. In your repo on GitHub, click **Add file → Upload files**.
3. Drag **`src/main.tsx`** and **Commit** with message:
   `feat(debug): add /debug/personas route in main.tsx`

## Local test
- Update local copy: `git fetch origin && git reset --hard origin/feature/m2-persona-assign`
- Start dev: `npm run dev`
- Open: `http://localhost:5173/debug/personas`
