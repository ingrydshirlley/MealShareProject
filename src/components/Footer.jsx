import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>Sobre Nós</h2>
                    <p>
                        Somos uma organização comprometida com a erradicação da fome global e a promoção de uma
                        agricultura sustentável. Junte-se a nós e faça a diferença!
                    </p>
                </div>
                <div className="footer-section links">
                    <h2>Links Rápidos</h2>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/quem-somos">Quem Somos</a></li>
                        <li><a href="/doe-agora">Doe Agora</a></li>
                        <li><a href="/contato">Contato</a></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h2>Siga-nos</h2>
                    <div className="social-links">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 MealShare. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
