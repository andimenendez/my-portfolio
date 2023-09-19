import React from 'react'
import logo from '../../assets/codigo-de-la-computadora-portatil.png'
import contacto from '../../assets/gmail.png'
import {Link} from 'react-scroll'
import styles from './navBar.module.css'

const Navbar = () => {
  return (
    <>
        <nav className={styles.navbar}>
            <img src={logo} alt="logo" className={styles.logo}/>
            <div className="desktopMenu">
                 <ul>
                    <a className={styles.menuListItem}>Home</a>
                    <a className={styles.menuListItem}>Sobre mi</a>
                    <a className={styles.menuListItem}>Habilidades</a>
                    <a className={styles.menuListItem}>Portfolio</a>
                 </ul>
            </div>
            <div className={styles.menuBtn}>
                <img src={contacto} alt="logo de gmail" className={styles.gmail} /> Contactame
            </div>
        </nav>
    </>
  )
}

export default Navbar