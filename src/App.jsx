import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route
            path="/highlight"
            element={<Navigate to="/#highlights" replace />}
          />
          <Route path="/price" element={<Navigate to="/#price" replace />} />
          <Route
            path="/amenities"
            element={<Navigate to="/#amenities" replace />}
          />
          <Route
            path="/floorplan"
            element={<Navigate to="/#floorplan" replace />}
          />
          <Route
            path="/location"
            element={<Navigate to="/#location" replace />}
          />
          <Route
            path="/gallery"
            element={<Navigate to="/#gallery" replace />}
          />

          <Route path="/privacy" element={<PrivacyPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
