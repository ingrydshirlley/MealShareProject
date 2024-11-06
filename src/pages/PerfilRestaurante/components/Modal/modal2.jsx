import React from 'react';
import './Modal2.css';
import menos from '../../assets/menos.svg'
import mais from '../../assets/mais.svg'

function Modal2({ isOpen, onRequestClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay2">
            <div className="modal-container2">
                <div className="modal-content2">
                    
                    <div className='itensCentro'>
                        <h2 className='nomeRefeicao'>Pão de queijo com molho e <br />mussarela</h2>
                           <div className='contador'>
                                <img className="iconContador" src={menos} alt="ContadorMenos" />
                                    <div className='boxNumeroContador'>
                                        <h2>5</h2>
                                    </div>
                                <img className="iconContador" src={mais} alt="ContadorMais" /> 
                           </div>
                           <div className='totalContador'><span>Total: </span>R$35,00</div>

                           <div className='container-buttons'>
                                <button className='deixarAberto'>Deixar voucher aberto</button>
                                <button className='ativarSoli'>Ativar um solicitante</button>
                           </div>
                            <div className='buttonDoar3'>
                            <button onClick={onRequestClose}className='doar3'>DOAR</button>
                            </div>
                           
                    </div>

                </div>
            </div>
        </div>
        
    );
}

export default Modal2;
