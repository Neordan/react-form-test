import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormTemplate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4nd5qvo', 'template_pqn415f', form.current, 'z0M5yTmtGUHErJ_2E')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" required/>
      <label>Email</label>
      <input type="email" name="email" required/>
      <label>Message</label>
      <textarea name="message" required/>
      <input type="submit" value="Envoyer" />
    </form>
  );
};
export default FormTemplate;