import React from "react";
import styles from "./intro.module.css";
import imagen from "../../assets/Andrea2.png";
import cv from "../../assets/curriculum.png";
import curriculum from '../../assets/andreaMenendez.pdf';

const Intro = () => {
  return (
    <section className={styles.intro} id="intro">
      <div className={styles.introContent}>
        <span className={styles.greet}> Hola,</span>
        <span className={styles.text}>
          Soy <span className={styles.name}>Andrea Menéndez</span> <br /> Full
          Stack Developer
        </span>
        <p className={styles.paragraph}>
          Soy de Argentina, provincia de Tucuman. <br />
          Soy emprendedora y estudiante, actualmente me encuentro cursando la
          carrera de programador universitario en la facultad de Ciencias
          Exactas - UNT. <br /> Soy una apasionada por la tecnologia, me encanta
          aprender algo nuevo todos los dias y poder brindar soluciones.{" "}
        </p>

        <a href={curriculum} target="_blank" download="curriculum-AndreaMenendez" className={styles.btnLink}>
          <button className={styles.btn}>
            <img src={cv} alt="Logo de cv" className={styles.btnImg} /> MI CV
          </button>
        </a>
      </div>
      <img
        src={imagen}
        alt="imagen de Andrea Menendez"
        className={styles.imagen}
      />
    </section>
  );
};

export default Intro;
