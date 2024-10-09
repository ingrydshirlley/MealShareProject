import "./Section_3.css"
import Vector2 from "../../assets/Vector2.svg"
function Section_3() {
    return (
        <>

            <div className="img">
                <img src={Vector2} alt="" />
            </div>
            
            <section className='section3'>

                <div className='sobre-transparencia'>
                    <div className='transparencia'>
                        <h1>TRANSPARÊNCIA</h1>
                        <p>A ética e a transparência regem as nossas ações. Com foco <br />
                            nisto, estruturamos um Código de Ética e Conduta que <br />
                            inicia o nosso Programa de Integridade e permeia todas as <br />
                            nossas ações. A adesão a este programa é condição para o <br />
                            grupo de associados, conselheiros, cofundadores,<br />
                            colaboradores e terceiros.</p>
                    </div>
                    <div className='btn-transparencia'>
                        <button id='btn-estatuto'>Estatuto Social</button>
                        <button id='btn-praticas'>Práticas de Compliance</button>
                        <button id='btn-codigo'>Código de Ética</button>
                    </div>
                </div>
                <div className="sobre-relatorio">
                    <div className='relatorio-anual'>
                        <h1>RELATÓRIO <br />ANUAL <br /> 2024</h1>
                        <p>Esse material é reflexo do nosso <strong>compromisso de <br /> transparência com nossos parceiros, parcerias e com a <br /> sociedade.</strong> Leia o relatório anual completo e conheça de <br /> perto o impacto do nosso trabalho.</p>
                        <div className='btn-relatorio'>
                            <button>Acesse</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section_3;
