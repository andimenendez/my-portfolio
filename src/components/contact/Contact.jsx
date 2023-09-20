import React, { useRef } from 'react';
import styles from './contact.module.css';
import fb from '../../assets/002-facebook.png';
import wsp from '../../assets/whatsapp.png'
import gitHub from '../../assets/github.png';
import ln from '../../assets/linkedin.png';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ilv9ii4', 'template_1o1nx3i', form.current, '986EMhr0qbkq5Yj-h')
      .then((result) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El mensaje fue enviado',
          showConfirmButton: false,
          timer: 3500
        })

      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salio mal al anviar el mail',
          footer: '<a href="http://wa.me/+543814725808" target="_blank"> prueba contactactandote a mi whatsapp </a>'
        })
      });
    form.current.reset()
  };

  return (
    <section className={styles.contactPage} id='contact'>
      <div className={styles.contact}>
        <h1 className={styles.title}>CONTACTO</h1>
        <span className={styles.description}>Por favor complete el siguiente formulario para discutir cualquier oportunidad de trabajo</span>
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <input type="text" className={styles.name} placeholder='Tu Nombre' name='from_name' required />
          <input type="email" className={styles.email} placeholder='Tu Email' name='from_email' required />
          <textarea name="message" rows="5" placeholder='Tu mensaje' className={styles.message} required></textarea>
          <button type='submit' className={styles.btn} value='enviar'>enviar</button>
          <div className={styles.links}>
            <a href="https://www.facebook.com/andreaveronicamenendez1" target='_blank'><img src={fb} alt="facebook" className={styles.icon} /></a>
            <a href="http://wa.me/+543814725808" target='_blank'>
              <img src={wsp} alt="whatsapp" className={styles.icon} />
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