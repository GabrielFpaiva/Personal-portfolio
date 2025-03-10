import React from "react";
import "./MobileNav.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageSwitcher from "../Language/Language";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const handleScroll = (sectionId) => {
    if (isOpen) toggleMenu();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className="mobile-menu-container" onClick={(e) => e.stopPropagation()}>
        <img className="logo" src="./assets/images/logo.svg" alt="Logo" />

        <ul>
          <li>
            <a onClick={() => handleScroll("hero")} className="menu-item">
              Início
            </a>
          </li>
          <li>
            <a onClick={() => handleScroll("skills")} className="menu-item">
              Habilidades
            </a>
          </li>
          <li>
            <a onClick={() => handleScroll("work-exp")} className="menu-item">
              Experiências
            </a>
          </li>
          <li>
            <a onClick={() => handleScroll("projects-section")} className="menu-item">
              Projetos
            </a>
          </li>
          <li>
            <a onClick={() => handleScroll("social-media")} className="menu-item">
              Redes Sociais
            </a>
          </li>
        </ul>

        <div className="mobile-controls">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
