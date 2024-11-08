import React, { useState } from 'react';
import '../../../components/globalLojas.css';
import pao from "../../../assets/pao.svg";
import Modal from '../Modal/modal.jsx';
import Modal2 from '../Modal/modal2.jsx';
import Modal3 from '../Modal/modal3.jsx';



function FirstSection({ restaurantName, imgRestaurante }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [secondModalIsOpen, setSecondModalIsOpen] = useState(false)
    const [thirdyModalIsOpen, setThirdyModalIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true);
    }

    function openSecondModal() {
        setSecondModalIsOpen(true);
    }

    function openThirdyModal() {
        setThirdyModalIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function closeSecondModal() {
        setSecondModalIsOpen(false);
    }

    function closeThirdyModal() {
        setThirdyModalIsOpen(false);
    }

    return (
        <div className="FirstSectionContainer">

            <div className='restaurante'>
            <img className='img-capa-restaurante' src={imgRestaurante} alt="Restaurante" />
                <h1>{restaurantName}</h1>
            </div>

            <div className='vouchers'>

                <div className='text-vouchers'>
                    <h1>Solicitações e Vouchers:</h1>
                </div>

                <div className='background-vouchers'>

                    <div className='voucher-card'>
                        <h2 className='pessoa'>Ingryd Shirlley</h2>
                        <h2 className='pedido'>Pedido #44</h2>
                        <h2 className='valor'>Valor total: R$35,00</h2>
                        <h2 className='arrecadado'>Valor arrecadado: R$15,00</h2>
                        <button onClick={openModal} className='doar'>DOAR</button>
                    </div>

                    <div className='voucher-card'>
                        <h2 className='pessoa'>Ingryd Shirlley</h2>
                        <h2 className='pedido'>Pedido #44</h2>
                        <h2 className='valor'>Valor total: R$35,00</h2>
                        <h2 className='arrecadado'>Valor arrecadado: R$15,00</h2>
                        <button onClick={openModal} className='doar'>DOAR</button>
                    </div>

                    <div className='voucher-card cardreivindicar'>
                        <h2 className='aberto'>Voucher aberto</h2>
                        <h2 className='refeicao'>Refeição:</h2>
                        <h2 className='nomerefeicao'>Hamburguer</h2>
                        <h2 className='preco'>Valor: R$35,00</h2>
                        <button onClick={openThirdyModal} className='reivindicar'>REIVINDICAR</button>
                    </div>

                    <div className='voucher-card cardreivindicar'>
                        <h2 className='aberto'>Voucher aberto</h2>
                        <h2 className='refeicao'>Refeição:</h2>
                        <h2 className='nomerefeicao'>Hamburguer</h2>
                        <h2 className='preco'>Valor: R$35,00</h2>
                        <button onClick={openThirdyModal} className='reivindicar'>REIVINDICAR</button>
                    </div>

                    <div className='voucher-card'>
                        <h2 className='pessoa'>Ingryd Shirlley</h2>
                        <h2 className='pedido'>Pedido #44</h2>
                        <h2 className='valor'>Valor total: R$35,00</h2>
                        <h2 className='arrecadado'>Valor arrecadado: R$15,00</h2>
                        <button onClick={openModal} className='doar'>DOAR</button>
                    </div>

                    <div className='voucher-card cardreivindicar'>
                        <h2 className='aberto'>Voucher aberto</h2>
                        <h2 className='refeicao'>Refeição:</h2>
                        <h2 className='nomerefeicao'>Hamburguer</h2>
                        <h2 className='preco'>Valor: R$35,00</h2>
                        <button onClick={openThirdyModal} className='reivindicar'>REIVINDICAR</button>
                    </div>

                </div>

            </div>

            <div className='cardapioetext'>
                <div className='text-cardapio'>
                    <h1>Refeições:</h1>
                </div>

                <div className='container-cardapio'>

                    <div className='cardCardapio'>
                        <div className='infos'>
                            <h2 className='nome'>Pão de Queijo com molho e mussarela</h2>
                            <h2 className='desc'>
                                Uma combinação deliciosa do clássico pão de <br />
                                queijo com um toque especial de molho <br />
                                cremoso de mussarela. Ideal para um café da <br />
                                manhã saboroso ou um lanche da tarde.
                            </h2>

                            <div className="precoDoacao">
                                <h2 className='precoRef'>R$7,90</h2>
                                <button onClick={openSecondModal} className='doar2'>DOAR</button>
                            </div>
                        </div>

                        <div className='img-pao'> <img src={pao} alt="Restaurante" /></div>

                    </div>

                    <div className='cardCardapio'>
                        <div className='infos'>
                            <h2 className='nome'>Pão de Queijo com molho e mussarela</h2>
                            <h2 className='desc'>
                                Uma combinação deliciosa do clássico pão de <br />
                                queijo com um toque especial de molho <br />
                                cremoso de mussarela. Ideal para um café da <br />
                                manhã saboroso ou um lanche da tarde.
                            </h2>

                            <div className="precoDoacao">
                                <h2 className='precoRef'>R$7,90</h2>
                                <button onClick={openSecondModal} className='doar2'>DOAR</button>
                            </div>
                        </div>

                        <div className='img-pao'> <img src={pao} alt="Restaurante" /></div>

                    </div>

                    <div className='cardCardapio'>
                        <div className='infos'>
                            <h2 className='nome'>Pão de Queijo com molho e mussarela</h2>
                            <h2 className='desc'>
                                Uma combinação deliciosa do clássico pão de <br />
                                queijo com um toque especial de molho <br />
                                cremoso de mussarela. Ideal para um café da <br />
                                manhã saboroso ou um lanche da tarde.
                            </h2>

                            <div className="precoDoacao">
                                <h2 className='precoRef'>R$7,90</h2>
                                <button onClick={openSecondModal} className='doar2'>DOAR</button>
                            </div>
                        </div>

                        <div className='img-pao'> <img src={pao} alt="Restaurante" /></div>

                    </div>

                    <div className='cardCardapio'>
                        <div className='infos'>
                            <h2 className='nome'>Pão de Queijo com molho e mussarela</h2>
                            <h2 className='desc'>
                                Uma combinação deliciosa do clássico pão de <br />
                                queijo com um toque especial de molho <br />
                                cremoso de mussarela. Ideal para um café da <br />
                                manhã saboroso ou um lanche da tarde.
                            </h2>

                            <div className="precoDoacao">
                                <h2 className='precoRef'>R$7,90</h2>
                                <button onClick={openSecondModal} className='doar2'>DOAR</button>
                            </div>
                        </div>

                        <div className='img-pao'> <img src={pao} alt="Restaurante" /></div>

                    </div>

                    <div className='cardCardapio'>
                        <div className='infos'>
                            <h2 className='nome'>Pão de Queijo com molho e mussarela</h2>
                            <h2 className='desc'>
                                Uma combinação deliciosa do clássico pão de <br />
                                queijo com um toque especial de molho <br />
                                cremoso de mussarela. Ideal para um café da <br />
                                manhã saboroso ou um lanche da tarde.
                            </h2>

                            <div className="precoDoacao">
                                <h2 className='precoRef'>R$7,90</h2>
                                <button onClick={openSecondModal} className='doar2'>DOAR</button>
                            </div>
                        </div>

                        <div className='img-pao'> <img src={pao} alt="Restaurante" /></div>

                    </div>

                    <div className='cardCardapio'>
                        <div className='infos'>
                            <h2 className='nome'>Pão de Queijo com molho e mussarela</h2>
                            <h2 className='desc'>
                                Uma combinação deliciosa do clássico pão de <br />
                                queijo com um toque especial de molho <br />
                                cremoso de mussarela. Ideal para um café da <br />
                                manhã saboroso ou um lanche da tarde.
                            </h2>

                            <div className="precoDoacao">
                                <h2 className='precoRef'>R$7,90</h2>
                                <button onClick={openSecondModal} className='doar2'>DOAR</button>
                            </div>
                        </div>

                        <div className='img-pao'> <img src={pao} alt="Restaurante" /></div>

                    </div>

                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} />
                    <Modal2 isOpen={secondModalIsOpen} onRequestClose={closeSecondModal} />
                    <Modal3 isOpen={thirdyModalIsOpen} onRequestClose={closeThirdyModal} />

                </div>

            </div>

        </div>

    );
}

export default FirstSection;