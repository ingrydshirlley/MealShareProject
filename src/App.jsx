import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import QuemSomos from "./pages/QuemSomos/QuemSomos";
import DoeAgora from "./pages/DoeAgora/DoeAgora";
import Header from "./components/Header";
import PerfilRestaurante from "./pages/PerfilRestaurante/PerfilRestaurante";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/PerfilRestaurante" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/doe-agora" element={<DoeAgora />} />
        <Route path="/lojas" element={<PerfilRestaurante />} />
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
