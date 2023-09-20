import React, { useState } from 'react'
import logo from '../../assets/codigo-de-la-computadora-portatil.png'
import contacto from '../../assets/gmail.png'
import { Link } from 'react-scroll'
import styles from './navBar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.desktopMenu}>
          <Link activeClass='active' className={styles.menuListItem} to='intro' spy={true} smooth={true} offset={-50} duration={500}>Sobre mi</Link>
          <Link activeClass='active' className={styles.menuListItem} to='skills' spy={true} smooth={true} offset={-50} duration={500}>Habilidades</Link>
          <Link activeClass='active' className={styles.menuListItem} to='projects' spy={true} smooth={true} offset={-50} duration={500}>Portfolio</Link>
        </div>
        <button className={styles.menuBtn} onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
        }}>
          <img src={contacto} alt="logo de gmail" className={styles.gmail} /> Contactame
        </button>

        <GiHamburgerMenu className={styles.iconMenu} onClick={() => setShowMenu(!showMenu)} />
        <div className={styles.navMenu} style={{ display: showMenu ? 'flex' : 'none' }} >
          <Link activeClass='active' className={styles.listItem} to='intro' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>Sobre mi</Link>
          <Link activeClass='active' className={styles.listItem} to='skills' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>Habilidades</Link>
          <Link activeClass='active' className={styles.listItem} to='projects' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>Portfolio</Link>
          <Link activeClass='active' className={styles.listItem} to='contact' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>contacto</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar