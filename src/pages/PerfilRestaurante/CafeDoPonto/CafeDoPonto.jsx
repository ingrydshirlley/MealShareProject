import React from "react";
import imagem_restaurante2 from "../assets/cafe.jpg";
import FirstSection from "../components/components/section_1/FirstSection";


function CafeDoPonto() {
  return (
    <>
      <FirstSection 
                restaurantName="Café Do Ponto" 
                imgRestaurante={imagem_restaurante2} 
            />
    </>
  );
}

export default CafeDoPonto;