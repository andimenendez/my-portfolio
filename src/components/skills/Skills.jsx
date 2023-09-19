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
    const skils = [
        {
            tecnologia: 'HTML',
            icono: <DiHtml5 className={styles.skillIcon}/>
        },
        {
            tecnologia: 'CSS',
            icono: <DiCss3 className={styles.skillIcon}/>
        },
        {
            tecnologia: 'JAVASCRIPT',
            icono: <DiJavascript1 className={styles.skillIcon}/>
        },
        {
            tecnologia: 'BOOTSTRAP',
            icono: <DiBootstrap className={styles.skillIcon}/>
        }, {
            tecnologia: 'REACT',
            icono: <DiReact className={styles.skillIcon}/>
        }, 
        {
            tecnologia: 'NEXT JS',
            icono: <TbBrandNextjs className={styles.skillIcon}/>
        }, 
        {
            tecnologia: 'TAILWIND',
            icono: <TbBrandTailwind className={styles.skillIcon}/>
        },
        { 
            tecnologia:'NODE JS',
            icono:<DiNodejsSmall className={styles.skillIcon}/>
        },
        {
            tecnologia: 'MONGO DB',
            icono: <DiMongodb className={styles.skillIcon}/>
        }, 
        {
            tecnologia: 'EXPRESS',
            icono: <SiExpress className={styles.skillIcon}/>
        }];
    return (

            <section className={styles.skillsSection}>
                <h1 className={styles.title}>HABILIDADES</h1>
                <div className={styles.skill}>
                {skils.map((skil,index)=>
                    <div className={styles.item} key={index}>
                    {skil.tecnologia}
                    <p className={styles.skillIcon}>{skil.icono}</p>
                    </div>
                )}
                </div>
            </section>

    )
}

export default Skills