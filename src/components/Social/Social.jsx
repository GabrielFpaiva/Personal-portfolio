import React from "react";
import "./Social.css";

const Social = () => {
    return (
        <section id="social-media" className="social-media-container">
        <h2>Meus Perfis Sociais</h2>
        <div class="social-content">
            <div class="social-links">
            <a href="https://github.com/GabrielFpaiva" target="_blank" rel="noreferrer">
                <img src="./assets/images/git-icon.png" alt="GitHub"/>
            </a>
            <a href="https://www.linkedin.com/in/gabriel-fernandes-paiva-b948b2209/" target="_blank" rel="noreferrer">
                <img src="./assets/images/linkedin-icon.png" alt="LinkedIn"/>
            </a>
            </div>
            <div class="download-cv">
            <a href="caminho/para/seu-curriculo.pdf" download>Baixar CV</a>
            </div>
        </div>
        </section>
    );
}

export default Social;