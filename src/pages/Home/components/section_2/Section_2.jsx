import React from "react";
import "./Section_2.css";
import img_brasil from "../../assets/brasil_img.svg";

function Section_2() {
    return (
        <div className="container-section-2">
            <div className="texts">
                <h1>Com fome não dá para<br />sonhar com um<br />futuro melhor.</h1>

                <p>No Brasil, a fome diminuiu nos últimos cinco anos, mas ainda está
                acima dos níveis de 2013. Em 2023, 27,6% dos lares brasileiros
                enfrentavam insegurança alimentar, afetando cerca de 64 milhões
                de pessoas que não tinham acesso adequado a alimentos. Em 4,1% desses
                lares, aproximadamente 8,6 milhões de brasileiros, incluindo crianças,
                conviviam com a fome de forma severa.</p>

                <button>CONHEÇA NOSSA ATUAÇÃO</button>
            </div>

            <div className="container_img">
                <img src={img_brasil} alt="Mapa do Brasil com alimentos" />
                <div className="circle-stat">
                    <span>64M de pessoas<br />têm acesso<br />restrito à comida.</span>
                </div>
            </div>
        </div>
    );
}

export default Section_2;
