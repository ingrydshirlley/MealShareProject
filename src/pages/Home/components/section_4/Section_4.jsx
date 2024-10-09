import React from "react";
import "./Section_4.css";
import doadores from "../../assets/doadores.svg"
import pessoas from "../../assets/pessoas.svg"
import restaurantes from "../../assets/restaurantes.svg"

function Section_4() {
    return (
        <div className="container-section-4">
            <div className="texts">
                <h1>quem nós alcançamos?</h1>
            </div>

            <div className="container-cards">
                <div className="card">
                    <img src={doadores} alt="Doadores" />
                    <div className="card-text">
                        <h2>Doadores</h2>
                        <button>Saiba mais</button>
                    </div>
                </div>

                <div className="card">
                    <img src={pessoas} alt="Pessoas em Vulnerabilidade" />
                    <div className="card-text">
                        <h2>Pessoas em Vulnerabilidade</h2>
                        <button>Saiba mais</button>
                    </div>
                </div>

                <div className="card">
                    <img src={restaurantes} alt="Restaurantes" />
                    <div className="card-text">
                        <h2>Restaurantes</h2>
                        <button>Saiba mais</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section_4;
