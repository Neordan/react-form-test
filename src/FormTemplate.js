import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormTemplate = () => {
    // Crée une référence au formulaire
    const form = useRef();

    // Fonction pour envoyer l'email
    const sendEmail = (e) => {
        e.preventDefault();
        const formMess = document.querySelector('.form-message');

        // Envoie le formulaire via EmailJS en utilisant la référence du formulaire
        emailjs
            .sendForm('service_jiwg0tn', 'template_pqn415f', form.current, 'z0M5yTmtGUHErJ_2E')
            .then((result) => {
                console.log(result.text);

                // remise à 0 du formulaire
                form.current.reset();

                // Affichage du message de succès 
                formMess.innerHTML = "<p class='Success'> Message envoyé ! </p>";
                
                // Fonction qui supprime le message dans un temps imparti 
                setTimeout(() => {
                    formMess.innerHTML = "";
                }, 2500)
                
            }, (error) => {
                console.log(error.text);
                formMess.innerHTML = "<p class='error'> Une erreur est survenue, veuillez réessayer </p> ! </p>";
            });
    };

    return (
        <div className="form-container">
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" required autoComplete="off" />
                <label>Email</label>
                <input type="email" name="email" required autoComplete="off" />
                <label>Message</label>
                <textarea name="message" required />
                <button type="submit">Envoyer</button>
            </form>
            <div className="form-message"></div>
        </div>
    );
};

export default FormTemplate;
