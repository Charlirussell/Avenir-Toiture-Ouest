import { useState } from 'react';

import './Contact.scss';

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "71c4e7cb-b605-43e9-aa4f-3a4f8fe61a0d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Votre message a bien été envoyé. Nous vous contacterons prochainement." : "Erreur, message non envoyé. Veuillez réessayer.");
  };

    return (
        <section id='contact' className='contact'>
            <h2 className='contact-title'>Contactez-nous pour un devis gratuit</h2>
            <form className='contact-form' onSubmit={onSubmit}>
                <input type='text' name='name' placeholder='Nom' required />
                <input type='email' name='email' placeholder='Email' required />
                <input type='tel' name='phone' placeholder='Numéro' />
                <textarea name='message' placeholder='Veuillez indiquer les services requis' required></textarea>
                <button type='submit'>Demander un devis gratuit</button>
                {result && <p className='contact-result'>{result}</p>}
            </form>
        </section>
    )
}

export default Contact;