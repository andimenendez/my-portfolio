import React from "react";
import styles from "./intro.module.css";
import imagen from "../../assets/Andrea2.png";
import contrato from "../../assets/contrato.png";
import { Link } from "react-scroll";
const Intro = () => {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.introContent}>
          <span className={styles.greet}> Hello,</span>
          <span className={styles.text}>
            Soy <span className={styles.name}>Andrea Menéndez</span> <br/> Full
            Stack Developer
          </span>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            iure. <br /> Cumque dignissimos vel culpa sequi debitis, recusandae
            eveniet vitae eligendi voluptate.
          </p>
          <Link>
            <button className={styles.btn}>
              <img src={contrato} alt="" className={styles.btnImg} /> hola
            </button>
          </Link>
        </div>
        <img src={imagen} alt="" className={styles.imagen} />
      </section>
    </>
  );
};

export default Intro;
