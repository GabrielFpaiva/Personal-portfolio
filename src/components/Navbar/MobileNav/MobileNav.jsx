import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  
  const handleScroll = (sectionId) => {
    if(isOpen) toggleMenu();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="./assets/images/logo.svg" alt="" />

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
              <a onClick={() => handleScroll("social-media")} className="menu-item">
                Redes Sociais
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
