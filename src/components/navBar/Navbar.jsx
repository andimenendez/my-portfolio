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
                 <Link>
                    <Link className={styles.menuListItem}>Home</Link>
                    <Link className={styles.menuListItem}>Sobre mi</Link>
                    <Link className={styles.menuListItem}>Habilidades</Link>
                    <Link className={styles.menuListItem}>Portfolio</Link>
                 </Link>
            </div>
            <div className={styles.menuBtn}>
                <img src={contacto} alt="logo de gmail" className={styles.gmail} /> Contactame
            </div>
        </nav>
    </>
  )
}

export default Navbar