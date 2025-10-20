import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import DebugPersonaGallery from "./components/DebugPersonaGallery";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Default app entry */}
        <Route path="/" element={<App />} />
        {/* Debug persona gallery */}
        <Route path="/debug/personas" element={<DebugPersonaGallery />} />
        {/* Fallback to App for any other path */}
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
