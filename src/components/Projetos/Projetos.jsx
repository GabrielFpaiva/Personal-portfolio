import React, { useState } from "react";
import "./Projetos.css";
import { PROJECTS } from "../../utils/data";

const Projetos = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Verifica se PROJECTS é uma função ou já é um array
  const projectsData = Array.isArray(PROJECTS) ? PROJECTS : PROJECTS();

  return (
    <section className="projects-section">
      <h2>Meus Projetos</h2>
      <div className="projects-grid">
        {projectsData.length > 0 ? (
          projectsData.map((project) => {
            const isSelected = selectedProject === project.id;

            return (
              <div
                key={project.id}
                className={`project-card ${isSelected ? "selected" : ""}`}
                onClick={() => setSelectedProject(isSelected ? null : project.id)}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="project-content">
                  <h3>{project.name}</h3>
                  {isSelected && (
                    <>
                      <p>{project.description}</p>
                      <button className="view-more-btn">Ver mais</button>
                    </>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p>Nenhum projeto disponível.</p>
        )}
      </div>
    </section>
  );
};

export default Projetos;
