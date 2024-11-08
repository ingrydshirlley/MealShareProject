import React, { useState } from 'react';
import './Modal.css';
import logoPerfil from "../../../assets/logoPerfil.svg";

function Modal({ isOpen, onRequestClose }) {
    const valorTotal = 35;
    const [valorArrecadado, setValorArrecadado] = useState(25); 
    const [valorDoacao, setValorDoacao] = useState(0); 
    const [mensagemSucesso, setMensagemSucesso] = useState(false);

    if (!isOpen) return null;

    const handleDonation = () => {
        const novoValorArrecadado = valorArrecadado + parseFloat(valorDoacao);
        setValorArrecadado(novoValorArrecadado);

        if (novoValorArrecadado >= valorTotal) {
            setMensagemSucesso(true);
        }

        setValorDoacao(0);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="close-button" onClick={onRequestClose}>X</button>
                <div className="modal-content">
                    <h2 className='pedido'>Pedido #44</h2>

                    <div className='solicitafoto'>
                        <h2 className='solicitacao'><span className='orangeText'>Solicitação: </span>1 Hambúrguer </h2>
                        <div className='imgCircle'>
                            <img className="logoPerfil" src={logoPerfil} alt="LogoPerfil" />
                        </div>
                    </div>

                    <div className='boxnomeid'>
                        <h2 className='nameid'><span className='textBold'>Nome: </span>Ingryd Shirlley</h2>
                        <h2 className='nameid'><span className='textBold'>ID: </span>5789090</h2>
                    </div>

                    <div className='belownameid'>
                        <h2 className='valorTot'><span className='orangeText2'>Valor total: </span>R${valorTotal},00</h2>
                        <progress className='progress' value={valorArrecadado} max={valorTotal}></progress>
                        <h2 className='valorTot'><span className='orangeText2'>Valor arrecadado: </span>R${valorArrecadado.toFixed(2)}</h2>
                    </div>

                    <div className='boxFooter'>
                        <h2 className='cifrao'>R$</h2>
                        <input 
                            type="number"
                            className="inputValor"
                            value={valorDoacao}
                            onChange={(e) => setValorDoacao(e.target.value)}
                            placeholder="Digite o valor"
                        />
                        <button className="btndoar" onClick={handleDonation}>DOAR</button>
                    </div>

                    {/* Mensagem de sucesso */}
                    {mensagemSucesso && (
                        <p className="mensagem-sucesso">Doação feita com sucesso! Valor total atingido.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Modal;
