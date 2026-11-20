import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import HomePage from "./pages/HomePage";

const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));

function App() {
  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const response = await fetch("https://ipinfo.io/json");

        if (!response.ok) {
          throw new Error("Failed to fetch IP location");
        }

        const data = await response.json();

        const address = `This is approximate location Based On Users IP Address
IP: ${data.ip || "Not available"}
City: ${data.city || "Not available"}
State: ${data.region || "Not available"}
Country: ${data.country || "Not available"}`;

        window.user_address = address;

        console.log("User Location:", address);
      } catch (error) {
        console.error("IP location error:", error);
        window.user_address = null;
      }
    };

    fetchUserLocation();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/highlight" element={<Navigate to="/#highlights" replace />} />
          <Route path="/price" element={<Navigate to="/#price" replace />} />
          <Route path="/amenities" element={<Navigate to="/#amenities" replace />} />
          <Route path="/floorplan" element={<Navigate to="/#floorplan" replace />} />
          <Route path="/location" element={<Navigate to="/#location" replace />} />
          <Route path="/gallery" element={<Navigate to="/#gallery" replace />} />

          <Route
            path="/privacy"
            element={
              <Suspense fallback={<div className="min-h-screen bg-white" />}>
                <PrivacyPage />
              </Suspense>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;