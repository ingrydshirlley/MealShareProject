import React from "react";
import "./Section_3.css";
import ods from "../../assets/ods.svg";
import Vector from "../../assets/Vector.svg";

function Section_3() {
    return (
        <>
            <div className="container-section-3">
                <div className="texts">
                    <h1>ODS2: UM OBJETIVO para<br />ERRADICAR A FOME GLOBAL.</h1>

                    <p>O Objetivo de Desenvolvimento Sustentável 2 (ODS2) busca
                        "Acabar com a fome, alcançar a segurança alimentar e
                        melhoria da nutrição e promover a agricultura sustentável."
                        Esse objetivo pretende resolver o problema da fome e da
                        insegurança alimentar no mundo, que afeta milhões de
                        pessoas, principalmente em regiões vulneráveis.</p>
                </div>

                <div className="container_img">
                    <img src={ods} alt="ODS 2" />
                </div>
            </div>

            <div className="img">
                <img src={Vector} alt="" />
            </div>
        </>
    );
}

export default Section_3;