import React from 'react';
import './Modal.css';
import logoPerfil from "../../../assets/logoPerfil.svg";

function Modal({ isOpen, onRequestClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-content">
                    <h2 className='pedido'>Pedido #44</h2>

                    <div className='solicitafoto'>
                        <h2 className='solicitacao'><span className='orangeText'>Solicitação: </span>1 Hambúrguer </h2>
                        <div className='imgCircle'>
                            <img className="logoPerfil" src={logoPerfil} alt="LogoPefil" />
                        </div>
                    </div>

                    <div className='boxnomeid'>
                        <h2 className='nameid'><span className='textBold'>Nome: </span>Ingryd Shirlley</h2>
                        <h2 className='nameid'><span className='textBold'>ID: </span>5789090</h2>
                    </div>

                    <div className='belownameid'>
                        <h2 className='valorTot'><span className='orangeText2'>Valor total: </span>R$35,00</h2>
                        <progress className='progress' value="80" max="100"></progress>
                        <h2 className='valorTot'><span className='orangeText2'>Valor arrecadado: </span>R$25,00</h2>
                    </div>

                    <div className='boxFooter'>
                        <h2 className='cifrao'>R$</h2>
                        <div className='boxValor'>
                            <h2>5,00</h2>
                        </div>
                        <div>
                        <button className="btndoar" onClick={onRequestClose}>DOAR</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
