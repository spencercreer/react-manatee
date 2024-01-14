import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import Prospects from "./pages/Prospects";
import ProspectAdd from "./pages/ProspectAdd";
import ProspectCampaign from "./pages/ProspectCampaign";
import ProspectSequence from "./pages/ProspectSequence";
import ProspectContacts from "./pages/ProspectContacts";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/prospect" element={<Prospects />} />
        <Route path="/prospect/add" element={<ProspectAdd />} />
        <Route path="/prospect/campaign" element={<ProspectCampaign />} />
        <Route path="/prospect/sequence" element={<ProspectSequence />} />
        <Route path="/prospect/contacts" element={<ProspectContacts />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
