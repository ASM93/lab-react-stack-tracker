import "./App.css";
import "./index.css";
import Companies from "./companies.json";
import Technologies from "./technologies.json";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  const [companies, setCompanies] = useState([Companies]);
  const [tecnologies, setTechnologies] = useState([Technologies]);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company/:companySlug" element={<CompanyPage />} />
        <Route path="/tech/:techOne" element={<TechnologyPage />} />
      </Routes>
    </div>
  );
}

export default App;
