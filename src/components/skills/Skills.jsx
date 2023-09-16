import React from 'react';
import styles from './skills.module.css';
import { DiReact } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiHtml5 } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import { TbBrandTailwind } from 'react-icons/tb';
import { DiMongodb } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import { DiNodejsSmall } from 'react-icons/di';
import { DiBootstrap } from 'react-icons/di';


const Skills = () => {
    return (
        <>
            <section className={styles.skillsSection}>
                <h1 className={styles.title}>Habilidades</h1>
                <div className={styles.skill}>
                    <div className={styles.item}>
                        <DiHtml5 className={styles.skillIcon}/>
                        <p> HTML </p>
                    </div>
                    <div className={styles.item}>
                        <DiCss3 className={styles.skillIcon}/>
                        <p>CSS</p>
                    </div>
                    <div className={styles.item}>
                        <DiJavascript1 className={styles.skillIcon}/>
                        <p>JAVASCRIPT</p>
                    </div>
                    <div className={styles.item}>
                        <DiBootstrap className={styles.skillIcon}/>
                        <p> BOOTSTRAP </p>
                    </div>
                    <div className={styles.item}>
                        <DiReact className={styles.skillIcon}/>
                        <p>REACT</p>
                    </div>
                    <div className={styles.item}>
                        <TbBrandNextjs className={styles.skillIcon}/>
                        <p>NEXT JS</p>
                    </div>
                    <div className={styles.item}>
                        <TbBrandTailwind className={styles.skillIcon}/>
                        <p>TAILWIND</p>
                    </div>
                    <div className={styles.item}>
                        <DiNodejsSmall className={styles.skillIcon}/>
                        <p>NODE JS</p> 
                    </div>
                    <div className={styles.item}>
                        <DiMongodb className={styles.skillIcon}/>
                        <p>mongoDB</p>
                    </div>
                    <div className={styles.item}>
                        <SiExpress className={styles.skillIcon}/>
                        <p>EXPRESS</p>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Skills