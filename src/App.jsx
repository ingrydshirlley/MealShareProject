import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import DoeAgora from "./pages/DoeAgora";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/doe-agora" element={<DoeAgora />} />
      </Routes>
    </Router>
  );
}

export default App;
