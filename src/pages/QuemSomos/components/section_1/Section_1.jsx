import "./Section_1.css"
import Vector from "../../assets/Vector.svg"

function Section_1() {
    return (
        <>
            <section className='section1'>
                <div className='texts'>
                    <h1>Criando um ciclo positivo<br /> de impacto social.</h1>
                    <hr className='linha-hr' />
                    <p>Somos uma plataforma que conecta pessoas em situação de <br />
                        vulnerabilidade alimentar com restaurantes e doadores <br />
                        dispostos a ajudar. Qualquer pessoa pode fazer uma doação de <br />
                        uma quantia qualquer ou pagar por refeições em restaurantes <br />
                        parceiros, que serão destinadas a quem mais precisa.</p>
                    <button>SAIBA MAIS</button>
                </div>
            </section>

            <div className="img">
                <img src={Vector} alt="" />
            </div>



            
        </>
    )
}

export default Section_1;
