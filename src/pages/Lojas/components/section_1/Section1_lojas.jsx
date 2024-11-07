import "./Section1_lojas.css"
import Vector from "../../assets/Vector.svg"

function Section_1() {
    return (
        <>
            <section className='section1'>
                <div className='texts'>
                    <h1>Nossos restaurantes <br /> parceiros:</h1>
                    <hr className='linha-hr' />
                    <p>Estamos orgulhosos de contar com restaurantes <br />
                    comprometidos em fazer a diferença. Juntos, formamos uma <br />
                    rede de solidariedade, onde cada prato servido é um passo em <br />
                    direção a um futuro mais justo e generoso. Conheça os <br />
                    restaurantes que compartilham dessa missão e ajudam a <br />
                    alimentar esperança em nossa comunidade.<br />
                    </p>
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
