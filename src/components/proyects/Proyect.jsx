import React from 'react';
import styles from './proyect.module.css';
import img from '../../assets/Proyect-Image/amCreaciones.png';
import { BiLogoGithub } from 'react-icons/bi';
import { TbWorldCode } from 'react-icons/tb';
const Proyect = () => {

    const projects = [
        {
            title: 'Mundo oculto de Sabrina',
            description: 'pagina web creada con html y css como trabajo para la facultad',
            img: 'https://res.cloudinary.com/am-creaciones/image/upload/v1695086681/Mis-proyectos/portfolioWeb_zxkyhh.png',
            github: 'https://github.com/andimenendez/Sabrina-web',
            netlify: 'https://mundoocultodesabrina.netlify.app/',
        },
        {
            title: 'Portfolio',
            description: 'Pagina web personal, creada con react',
            img: 'https://res.cloudinary.com/am-creaciones/image/upload/v1695086681/Mis-proyectos/portfolioWeb_zxkyhh.png',
            github: 'https://github.com/andimenendez/my-portfolio.git',
            netlify: 'https://am-creaciones.netlify.app/',
        },
        {
            title: 'E-commerce',
            description: 'Proyecto final grupal, del curso de Rolling Code, se trata de un sitio web para un emprendimiento creada con react, node js',
            img: 'https://res.cloudinary.com/am-creaciones/image/upload/v1695086817/Mis-proyectos/proyectofinalRolling_dkoykh.png',
            github: 'https://github.com/andimenendez/AM-FRONT-PF.git',
            netlify: 'https://am-creaciones.netlify.app/',
        },
        {
            title: 'Proximo',
            description: 'Trabajando en un nuevo proyecto',
            img: img,
            github: '',
            netlify: '',
        },
 
    ]

    return (

        <section className={styles.section} id='projects'>
            <h1 className={styles.h1}>PROYECTOS</h1>
            <div className={styles.container}>
                {projects.map((projects, index) =>
                    <figure key={index} className={styles.figure}>
                        <img src={projects.img} alt={projects.description} className={styles.img} />
                        <div className={styles.capa}>
                            <h3 className={styles.title}>{projects.title}</h3>
                            <div className={styles.paragraph}>
                                <p> {projects.description}</p>
                                <li className={styles.desktopIcons}>
                                    <a href={projects.github} target="_blank"><BiLogoGithub /></a>
                                    <a href={projects.netlify} target="_blank"><TbWorldCode /></a>
                                </li>
                                <li className={styles.mobIcons}>
                                    <a href={projects.github} target="_blank" className={styles.mobLink}><BiLogoGithub /> Codigo</a>
                                    <a href={projects.netlify} target="_blank" className={styles.mobLink}><TbWorldCode /> Demo</a>
                                </li>
                            </div>

                        </div>
                    </figure>
                )}
            </div>
        </section>

    )
}

export default Proyect