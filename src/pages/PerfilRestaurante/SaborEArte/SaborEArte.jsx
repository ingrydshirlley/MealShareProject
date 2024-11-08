import React from "react";
import imagem_restaurante3 from "../assets/brasileiro.jpg";
import FirstSection from "../components/components/section_1/FirstSection";

function SaborEArte() {
  return (
    <>
      <FirstSection
        restaurantName="Sabor & Arte"
        imgRestaurante={imagem_restaurante3} 
        imgRestaurante3="../assets/brasileiro.jpg"

      />
    </>
  );
}

export default SaborEArte;