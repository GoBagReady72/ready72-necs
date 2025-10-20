# Debug Persona Gallery — Drop-in (Ready72 / Vite + React)

This ZIP contains **one** new file to add via GitHub web UI:

```
src/components/DebugPersonaGallery.tsx
```

## How to upload (your preferred ZIP workflow)
1. Extract this ZIP locally.
2. In GitHub, switch to branch: `feature/m2-persona-assign`.
3. Click **Add file → Upload files**, drag the `src/` folder here, and **Commit directly** to the same branch.
   - Commit message suggestion: `feat(debug): add DebugPersonaGallery component`

## Wire a temporary route (choose ONE approach)

> I’m not guessing your exact router; pick the option that matches your repo and perform a full-file replacement on that file. If unsure, stop here and tell me which file holds your `<Routes>` so I can hand you the exact file.

### Option A — Route lives in `src/App.tsx` (react-router in App)
Replace `src/App.tsx` with this minimal patch (keep your existing imports/layout if needed):
```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DebugPersonaGallery from "./components/DebugPersonaGallery";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/debug/personas" element={<DebugPersonaGallery />} />
        {/* keep your existing routes below */}
      </Routes>
    </BrowserRouter>
  );
}
```

### Option B — Route configured in `src/main.tsx` (simple single-route app)
Replace `src/main.tsx` to mount the debug route while preserving your app:
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import DebugPersonaGallery from "./components/DebugPersonaGallery";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/debug/personas", element: <DebugPersonaGallery /> }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

## Local test
- Start dev: `npm run dev` then open `http://localhost:5173/debug/personas`
- You should see the 16 personas; **Set active** writes `localStorage.r72_persona`; **Reset** clears it.

## Next step
After you upload this file, tell me which router file you use (`App.tsx`, `main.tsx`, or other), and I’ll deliver the exact **full-file replacement** to add `/debug/personas` per your rule: no line edits, one drop-in.
