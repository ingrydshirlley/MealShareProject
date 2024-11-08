import "./Section2_lojas.css"
import imgLoja from "../../assets/loja.png"
import { Link } from "react-router-dom";
function Section_2() {
    return (
        <>
            <section className='section2_lojas'>
                <div className='sobre-loja'>
                    <div className='loja'>
                        <div className="imagem_loja">
                            <img src={imgLoja} alt="" />
                        </div>

                        <div className="texts_loja">
                            <h1>Bella Vita</h1>
                            <p>Com um ambiente aconchegante e culinária <br />
                                italiana autêntica, a Trattoria Bella Vita é mais do <br />
                                que uma referência em massas e risotos. Como<br />
                                parceira da nossa plataforma, contribui para<br />
                                oferecer refeições saborosas e nutritivas a quem<br />
                                mais precisa.
                            </p>


                            <Link to="/perfil-restaurante/bella-vita" className="btn-loja">
                                <button>
                                    Acesse
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="sobre-loja2">
                    <div className='loja2'>
                        <div className="texts_loja2">
                            <h1>Sabor & Arte</h1>
                            <p>Reconhecido por seus pratos variados que vão da <br />
                                culinária brasileira tradicional aos sabores<br />
                                internacionais, o Sabor & Arte se destaca pela<br />
                                qualidade e inovação. Agora, também se orgulha <br />
                                de fazer parte do movimento que combate a fome<br />
                                em nossa comunidade.
                            </p>

                            <Link to="/perfil-restaurante/sabor-e-arte" className="btn-loja2">
                                <button>
                                    Acesse
                                </button>
                            </Link>
                        </div>

                        <div className="imagem_loja">
                            <img src={imgLoja} alt="" />
                        </div>
                    </div>
                </div>

                <div className='sobre-loja'>
                    <div className='loja'>
                        <div className="imagem_loja">
                            <img src={imgLoja} alt="" />
                        </div>

                        <div className="texts_loja">
                            <h1>Café do Ponto</h1>
                            <p>Famoso por seu café aromático e cardápio de <br />
                                lanches e refeições leves, o Café do Ponto alia <br />
                                conforto e propósito. Como parceiro, ajuda a<br />
                                garantir que suas delícias também cheguem a <br />
                                pessoas em situação de vulnerabilidade, <br />
                                espalhando solidariedade uma refeição por vez.
                            </p>

                            <Link to="/perfil-restaurante/cafe-do-ponto" className="btn-loja">
                                <button>
                                    Acesse
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Section_2;
