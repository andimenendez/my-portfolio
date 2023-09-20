import React, { useRef } from 'react';
import styles from './contact.module.css';
import ig from '../../assets/001-instagram.png';
import fb from '../../assets/002-facebook.png';
// import wsp from '../../assets/003-whatsaap.png';
import gitHub from '../../assets/github.png';
import ln from '../../assets/linkedin.png';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ilv9ii4', 'template_1o1nx3i', form.current, '986EMhr0qbkq5Yj-H')
      .then((result) => {
        alert('email Enviado');
        
      }, (error) => {
        console.log(error.text);
        alert('error al enviar mensaje')
      });
      form.current.reset()
  };

  return (
    <section className={styles.contactPage} id='contact'>
      <div className={styles.contact}>
        <h1 className={styles.title}>CONTACTO</h1>
        <span className={styles.description}>Por favor complete el siguiente formulario para discutir cualquier oportunidad de trabajo</span>
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <input type="text" className={styles.name} placeholder='Tu Nombre' name='from_name' />
          <input type="email" className={styles.email} placeholder='Tu Email' name='from_email' />
          <textarea name="message" rows="5" placeholder='Tu mensaje' className={styles.message}></textarea>
          <button type='submit' className={styles.btn} value='enviar'>enviar</button>
          <div className={styles.links}>
            <a href="https://www.facebook.com/andreaveronicamenendez1" target='_blank'><img src={fb} alt="facebook" className={styles.icon} /></a>
            <a href="https://www.instagram.com/andi.menendez/" target='_blank'>
              <img src={ig} alt="instagram" className={styles.icon} />
            </a>
            <a href="https://github.com/andimenendez" target='_blank'> <img src={gitHub} alt="github" className={styles.icon} /></a>
            {/* <img src={wsp} alt="" /> */}
            <a href="https://www.linkedin.com/in/andreav-menendez" target='_blank'><img src={ln} alt="linkedin" className={styles.icon} /></a>

          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact