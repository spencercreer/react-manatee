import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import Company from "./pages/Company";
import Prospects from "./pages/Prospects";
import ProspectAdd from "./pages/ProspectAdd";
import CompanyProfile from "./pages/CompanyProfile";
import ProspectCampaign from "./pages/ProspectCampaign";
import ProspectContacts from "./pages/ProspectContacts";
import ProspectSequence from "./pages/ProspectSequence";
import ProspectSequenceFlow from "./pages/ProspectSequenceFlow";
import Step from "./pages/Step";
import BuildWorkflow from "./pages/BuildWorkflow";
import TodaysActivities from "./pages/TodaysActivities";
import AddCustomer from "./pages/AddCustomer";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/company" element={<Prospects />} />
        <Route path="/company/add" element={<ProspectAdd />} />
        <Route path="/customer/add" element={<AddCustomer />} />
        <Route path="/company/:companyId" element={<CompanyProfile />} />
        <Route
          path="/company/campaign/:companyId"
          element={<ProspectCampaign />}
        />
        <Route path="/prospect/contacts" element={<ProspectContacts />} />
        <Route path="/workflow/template" element={<BuildWorkflow />} />
        <Route path="/activities" element={<TodaysActivities />} />
        <Route path="/step/:stepId" element={<Step />} />
        <Route path="/prospect/sequence" element={<ProspectSequence />} />
        <Route
          path="/prospect/sequence/flow"
          element={<ProspectSequenceFlow />}
        />
        <Route path="/company" element={<Company />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
