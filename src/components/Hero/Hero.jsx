import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Hero.css";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="hero" className="hero-container" ref={ref}>
      <motion.div
        className="hero-content"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 variants={fadeInUp}>
          Construindo experiências digitais que inspiram
        </motion.h2>
        <motion.p variants={fadeInUp}>
          Desenvolvedor Front-end e Mobile Apaixonado | Transformando Ideias em
          Soluções Web e Mobile Fluidas e Visualmente Impressionantes
        </motion.p>
      </motion.div>

      <motion.div
        className="hero-img"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={fadeInLeft}>
          <div className="left-icon">
            <motion.div className="tech-icon" variants={fadeInUp}>
              <img src="./assets/images/img05.png" alt="" />
            </motion.div>
            <motion.div className="tech-icon" variants={fadeInUp}>
              <img src="./assets/images/img01.png" alt="" />
            </motion.div>
          </div>
          <motion.img
            src="./assets/images/img12.jpeg"
            alt=""
            variants={fadeInUp}
          />
        </motion.div>

        <motion.div variants={fadeInRight}>
          <motion.div className="tech-icon" variants={fadeInUp}>
            <img src="./assets/images/img02.png" alt="" />
          </motion.div>
          <motion.div className="tech-icon" variants={fadeInUp}>
            <img src="./assets/images/img03.png" alt="" />
          </motion.div>
          <motion.div className="tech-icon" variants={fadeInUp}>
            <img src="./assets/images/img04.png" alt="" />
          </motion.div>
          <motion.div className="tech-icon" variants={fadeInUp}>
            <img src="./assets/images/img06.png" alt="" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;