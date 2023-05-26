import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormTemplate = () => {
  // Crée une référence au formulaire
  const form = useRef();

  // Fonction pour envoyer l'email
  const sendEmail = (e) => {
    e.preventDefault();

    // Envoie le formulaire via EmailJS en utilisant la référence du formulaire
    emailjs
      .sendForm('service_jiwg0tn', 'template_pqn415f', form.current, 'z0M5yTmtGUHErJ_2E')
      .then((result) => {
        console.log(result.text);
        // remise à 0 du formulaire
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" required autoComplete="off" />
      <label>Email</label>
      <input type="email" name="email" required autoComplete="off" />
      <label>Message</label>
      <textarea name="message" required />
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default FormTemplate;
