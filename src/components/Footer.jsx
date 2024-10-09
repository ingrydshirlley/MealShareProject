import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo-footer">
                    <img src="MealShareFooter.svg" alt="MealShare Logo" className="logo-img" />
                </div>

                <div className="footer-section">
                    <div>
                        <h2>Contato para Imprensa</h2>
                        <p>imprensa@mealshare.org</p>
                    </div>

                    <div className="footer-social">
                    <h2>Redes Sociais</h2>
                    <div className="social-links">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
                </div>
            </div >

            <div className="footer-bottom">
                <p>&copy; 2024 MealShare. Todos os direitos reservados.</p>
            </div>
        </footer >
    );
}

export default Footer;
