import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "skills.frontend": "Front-end",
      "skills.mobile": "Mobile",
      "skills.tools": "Tools",
      "skills.soft": "Soft Skills",
      
      "experience.dev": "Mobile Developer",
      "experience.stage": "Intern at Polpa de Fruta Ideal",
      
      "projects.realEstate": "Real Estate",
      "projects.eventApp": "Event App",
      "projects.spa": "Massage Spa",
      "projects.courses": "Online Courses Platform",
    }
  },
  pt: {
    translation: {
      "skills.frontend": "Front-end",
      "skills.mobile": "Mobile",
      "skills.tools": "Ferramentas",
      "skills.soft": "Soft Skills",
      
      "experience.dev": "Desenvolvedor Mobile",
      "experience.stage": "Estágio Polpa de Fruta Ideal",
      
      "projects.realEstate": "Imobiliária",
      "projects.eventApp": "App de Eventos",
      "projects.spa": "Casa de Massagem",
      "projects.courses": "Plataforma de Cursos",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
