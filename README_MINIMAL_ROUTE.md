# Wire /debug/personas without adding router deps

This package replaces `src/App.tsx` with a tiny, dependency‑free switch:

- If the current pathname is `/debug/personas`, it renders `DebugPersonaGallery`.
- Otherwise, it renders your existing `SurvivorCardPreview`.

## Upload steps (GitHub web)

1. Extract this ZIP.
2. On GitHub (branch: `feature/m2-persona-assign`), click **Add file → Upload files**.
3. Drag **`src/App.tsx`** here and **Commit** with message:
   `feat(debug): wire /debug/personas (no-router switch)`

## Test locally

- `npm run dev`
- Open: `http://localhost:5173/debug/personas`

You should see the gallery, search, Set active / Reset using `localStorage.r72_persona`.
