import React from "react";
import imagem_restaurante from "../assets/restaurante-italiano.jpeg"
import FirstSection from "../components/components/section_1/FirstSection";

function BellaVita() {
  return (
    <>
      <FirstSection 
                restaurantName="Bella Vitta" 
                imgRestaurante={imagem_restaurante} 
            />
    </>
  );
}

export default BellaVita;
