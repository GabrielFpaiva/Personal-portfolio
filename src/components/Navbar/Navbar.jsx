import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageSwitcher from "../Language/Language";

function NavBar() {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul>
          <li>
            <Link activeClass="active" to="hero" smooth spy offset={-80} className="menu-item">
              {t("Início")}
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="skills" smooth spy offset={-120} className="menu-item">
              {t("Habilidades")}
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="work-exp" smooth spy offset={-100} className="menu-item">
              {t("Experiência")}
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="projects-section" smooth spy offset={-100} className="menu-item">
              {t("Projetos")}
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="social-media" smooth spy offset={-100} className="menu-item">
              {t("Social")}
            </Link>
          </li>
        </ul>

        <div className="controls">
          <div className="control-item">
            <ThemeToggle />
          </div>
          <div className="control-item">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
