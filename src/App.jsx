import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Footer from "./components/Footer/Footer";
import Social from "./components/Social/Social";
import ProjectsSection from "./components/Projetos/Projetos";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero/>
        <Skills/>
        <WorkExperience/>
        <ProjectsSection />
        <Social/>
  
      </div>

      <Footer />
    </>
  );
};

export default App;
