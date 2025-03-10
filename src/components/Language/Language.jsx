import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Language.css";

const languages = [
  { code: "pt", label: "🇧🇷 PT", flag: "./assets/images/br.png"},
  { code: "en", label: "🇺🇸 EN", flag: "./assets/images/usa.png" },
  { code: "es", label: "🇪🇸 ES", flag: "./assets/images/es.png" },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem("language") || "pt");

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="language-switcher">
      <button className="language-button" onClick={() => setOpen(!open)}>
        <img
          src={languages.find((lang) => lang.code === currentLanguage)?.flag}
          alt={currentLanguage}
          className="language-flag"
        />
      </button>

      {open && (
        <ul className="language-dropdown">
          {languages.map((lang) => (
            <li key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
              <img src={lang.flag} alt={lang.code} className="dropdown-flag" />
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;
