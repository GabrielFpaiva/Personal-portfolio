import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-scroll";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">

          <ul>
            <li>
              <Link activeClass="active" to="hero" smooth spy offset={-80} className="menu-item">Início</Link>
            </li>

            <li>
              <Link activeClass="active" to="skills" smooth spy offset={-120} className="menu-item">Habilidades</Link>
            </li>

            <li>
              <Link activeClass="active" to="work-exp" smooth spy offset={-100} className="menu-item">Experiências</Link>
            </li>

            <li>
              <Link activeClass="active" to="social-media" smooth spy offset={-100} className="menu-item">Redes Sociais</Link>
            </li>
          </ul>

          <button class="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
