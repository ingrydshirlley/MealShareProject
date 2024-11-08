import React from "react";
import "./FirstSection.css";
import Vector from "../../assets/Vector.svg";

function FirstSection() {
  return (

    <>
    <div className="container-main_doeAgora">
      <div className="texts">
        <h1>No Brasil do futuro, a fome <br />faz parte do passado.</h1>
        <h2>ESSA É A HISTÓRIA QUE QUEREMOS ESCREVER COM VOCÊ.</h2>
        <p>Se você deseja saber mais sobre como podemos, criar um impacto real na <br />
          luta contra a fome ou tem alguma sugestão para melhorar nossa<br />
          plataforma, entre em contato conosco. Sua voz é essencial para tornar essa<br />
          visão uma realidade.<br />
        </p>
        <button>SAIBA MAIS</button>
      </div>
    </div>
    
    <div className="vector">
        <img src={Vector} alt="" />
    </div>
    </>
  )
}

export default FirstSection;
