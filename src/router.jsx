import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/navbar";
import IndexPage from "./indexpage/indexpage";
import CasesPage from "./solutions/casespage";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/solutions" element={<CasesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
