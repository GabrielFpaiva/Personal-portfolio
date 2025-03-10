import { useTranslation } from "react-i18next";

export const SKILLS = () => {
  const { t } = useTranslation();
  
  return [
    {
      title: t("skills.frontend"),
      icon: "./assets/images/frontend-icon.png",
      skills: [
        { skill: "HTML5 & CSS3", percentage: "100%" },
        { skill: "JavaScript", percentage: "100%" },
        { skill: "React", percentage: "100%" },
      ],
    },
    {
      title: t("skills.mobile"),
      icon: "./assets/images/backend-icon.png",
      skills: [
        { skill: "Flutter", percentage: "100%" },
        { skill: "React Native", percentage: "85%" },
        { skill: "Java & Kotlin", percentage: "60%" },
      ],
    },
    {
      title: t("skills.tools"),
      icon: "./assets/images/tools-icon.png",
      skills: [
        { skill: "Git & GitHub", percentage: "100%" },
        { skill: "VS Code", percentage: "100%" },
        { skill: "Design Responsivo", percentage: "90%" },
      ],
    },
    {
      title: t("skills.soft"),
      icon: "./assets/images/soft-skills-icon.png",
      skills: [
        { skill: "Solução de problemas", percentage: "90%" },
        { skill: "Colaboração", percentage: "95%" },
        { skill: "Atenção aos detalhes", percentage: "85%" },
        { skill: "Persistente", percentage: "100%" },
      ],
    },
  ];
};

export const WORK_EXPERIENCE = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("experience.dev"),
      date: "Janeiro 2023 - Atualmente",
      responsibilities: [
        "Desenvolvimento de aplicativos mobile usando Flutter",
        "Aplicativo para ingressos de eventos, convites e controle de acesso.",
        "Aprendi a trabalhar com uma equipe multidisciplinar.",
      ],
    },
    {
      title: t("experience.stage"),
      date: "Janeiro 2023 - Agosto 2023",
      responsibilities: [
        "Aplicação de conhecimentos adquiridos na graduação em Ciência da Computação.",
        "Implementação de novas funcionalidades usando Inteligência Artificial.",
        "Estudo de rotas para entrega otimizadas.",
      ],
    },
  ];
};

export const PROJECTS = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      name: t("projects.realEstate"),
      description: "Landing page para imobiliária com HTML, CSS e Javascript.",
      image: "./assets/images/project1.png",
      link: "https://ds-imoveis.vercel.app",
    },
    {
      id: 2,
      name: t("projects.eventApp"),
      description: "Aplicativo mobile para ingressos de eventos com Flutter.",
      image: "./assets/images/mobile-app.png",
      link: "https://acessvip.com",
    },
    {
      id: 3,
      name: t("projects.spa"),
      description: "Website feito para um SPA e casa de massagem com HTML, CSS e Javascript.",
      image: "./assets/images/project3.png",
      link: "https://www.oaspa.com.br",
    },
    {
      id: 4,
      name: t("projects.courses"),
      description: "Plataforma de cursos online com React e Node.js.",
      image: "./assets/images/project4.png",
      link: "#",
    },
  ];
};
