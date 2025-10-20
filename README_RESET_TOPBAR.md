# Add Reset Persona UX in App Top Bar

This replaces `src/App.tsx` with a version that:
- Renders a lightweight top bar showing the **active persona id** from `localStorage.r72_persona`
- Provides a **Reset Persona** button that clears the key and **reloads** the page
- Adds a quick link to `/debug/personas`

It does **not** modify your `SurvivorCardPreview` component.

## Upload (GitHub web, branch: `feature/m2-persona-assign`)
1. Extract this ZIP.
2. In GitHub, click **Add file → Upload files**.
3. Drag **`src/App.tsx`** and commit with:
   `feat(debug): add active persona top bar + reset in App`

## Test locally
- `git fetch origin && git reset --hard origin/feature/m2-persona-assign`
- `npm run dev`
- Open `http://localhost:5173/` (or whichever port Vite printed)
- Verify the top bar shows Active persona and Reset works.
