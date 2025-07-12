// App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import PrivacyPolicy from "./Pages/PrivacyPolicyPage";
/**
 * App Component
 * Renders the main Homepage component
 */
const App: React.FC = () => {
  return (
    <Routes>
      {/* redirect old landing */}
      <Route path="/" element={<Homepage />} />
       <Route
        path="/privacypolicy"
        element={<PrivacyPolicy/>}
      />
    </Routes>
  );
};

export default App;
