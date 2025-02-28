import React, { useRef } from "react";
import "./WorkExperience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { WORK_EXPERIENCE } from "../../utils/data";
import Slider from "react-slick";

const WorkExperience = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Verifica se WORK_EXPERIENCE é uma função ou já é um array
  const workExperienceData = Array.isArray(WORK_EXPERIENCE) ? WORK_EXPERIENCE : WORK_EXPERIENCE();

  return (
    <section id="work-exp" className="experience-container">
      <h5>Trabalhos</h5>

      <div className="experience-content">
        <button className="arrow-left" onClick={() => sliderRef.current?.slickPrev()}>
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        <Slider ref={sliderRef} {...settings}>
          {workExperienceData.length > 0 ? (
            workExperienceData.map((item) => (
              <ExperienceCard key={item.title} details={item} />
            ))
          ) : (
            <p>Nenhuma experiência disponível.</p>
          )}
        </Slider>

        <button className="arrow-right" onClick={() => sliderRef.current?.slickNext()}>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </section>
  );
};

export default WorkExperience;
