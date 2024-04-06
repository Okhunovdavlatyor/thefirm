import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/navbar";
import IndexPage from "./indexpage/indexpage";

import Footer from "./navbar/footer";
import CaseDetailPage from "./detailpage/casedetailpage";

import SolutionPage from "./solutions/solutionpage";
import AboutComp from "./about/about";



const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/solutions" element={< SolutionPage />} />
        <Route path="/cases" element={<CaseDetailPage />} />
        <Route path="/about" element={<AboutComp/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouterComponent;
