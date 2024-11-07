import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import QuemSomos from "./pages/QuemSomos/QuemSomos";
import DoeAgora from "./pages/DoeAgora/DoeAgora";
import Header from "./components/Header";
import Lojas from "./pages/Lojas/Lojas";
import BellaVita from "./pages/PerfilRestaurante/BellaVita/BellaVita";
import SaborEArte from "./pages/PerfilRestaurante/SaborEArte/SaborEArte";
import CafeDoPonto from "./pages/PerfilRestaurante/CafeDoPonto/CafeDoPonto";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/PerfilRestaurante" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/doe-agora" element={<DoeAgora />} />
        <Route path="/lojas" element={<Lojas />} />
        <Route path="/perfil-restaurante/bella-vita" element={<BellaVita />} />
        <Route path="/perfil-restaurante/sabor-e-arte" element={<SaborEArte />} />
        <Route path="/perfil-restaurante/cafe-do-ponto" element={<CafeDoPonto />} />
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
