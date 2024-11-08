import React, { useState } from 'react';
import './Modal2.css';
import menos from "../../../assets/menos.svg";
import mais from "../../../assets/mais.svg";

function Modal2({ isOpen, onRequestClose }) {
    const [quantity, setQuantity] = useState(1); 
    const [donated, setDonated] = useState(false);  
    const pricePerItem = 7.9;
    const totalPrice = quantity * pricePerItem;

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleVoucherOpen = () => {
        alert("Voucher deixado aberto.");
    };

    const handleActivateRequester = () => {
        alert("Um solicitante foi ativado.");
    };

    const handleDonate = () => {
        alert("Obrigado por doar! Sua generosidade faz a diferença.");
        setQuantity(1);
        setDonated(true);
        onRequestClose();
    };

  
    React.useEffect(() => {
        if (donated) {
            const timer = setTimeout(() => {
                setDonated(false);
            }, 3000); 
            return () => clearTimeout(timer); 
        }
    }, [donated]);

    if (!isOpen) return null;
    return (
        <div className="modal-overlay2">
            <div className="modal-container2">
                <div className="modal-content2">
                    <button className="close-button" onClick={onRequestClose}>
                        <span style={{ fontSize: '15px', fontWeight: '900', color: '#262727ae' }}>X</span>
                    </button>

                    <div className='itensCentro'>
                        <h2 className='nomeRefeicao'>Pão de queijo com molho e <br />mussarela</h2>

                        <div className='contador'>
                            <img className="iconContador" src={menos} alt="ContadorMenos" onClick={decrementQuantity} />
                            <div className='boxNumeroContador'>
                                <h2>{quantity}</h2>
                            </div>
                            <img className="iconContador" src={mais} alt="ContadorMais" onClick={incrementQuantity} />
                        </div>

                        <div className='totalContador'><span>Total: </span>R${totalPrice.toFixed(2)}</div>

                        <div className='container-buttons'>
                            <button className='deixarAberto' onClick={handleVoucherOpen}>Deixar voucher aberto</button>
                            <button className='ativarSoli' onClick={handleActivateRequester}>Ativar um solicitante</button>
                        </div>

                        <div className='buttonDoar3'>
                            <button onClick={() => { handleDonate(); onRequestClose(); }} className='doar3'>DOAR</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal2;
