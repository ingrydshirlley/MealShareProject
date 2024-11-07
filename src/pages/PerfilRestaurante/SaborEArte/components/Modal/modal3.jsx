import React from 'react';
import './Modal3.css';


function Modal3({ isOpen, onRequestClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay3">
            <div className="modal-container3">
                <div className="modal-content3">
                    <div className='itenstext'>
                        <h2 className='vouchergerado'>O voucher foi gerado com <br /> sucesso! Você tem até 2 dias para <br />resgatar sua refeição.</h2>
                        <h2 className='codevoucher'>Seu voucher é: <span> #29742749</span></h2>
                        <button onClick={onRequestClose} className='btnvoltar'>VOLTAR</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Modal3;
