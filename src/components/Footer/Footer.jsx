import './Footer.scss';

const Footer = () => {
    return (
    <footer id='footer' className='footer'>
        <h2 className='footer-title'>Liens</h2>
        <ul className='footer-links'>
            <li><a href="https://www.facebook.com/avenirtoitureouest" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href='#home'>Accueil</a></li>
            <li><a href='#services'>Nos Services</a></li>
            <li><a href='#contact'>Contact</a></li>
            <li><a href='/politique-confidentialite'>Politique de confidentialité</a></li>
            <li><a href='/mentions-legales'>Mentions Legales</a></li>
        </ul>
        <p className="footer-copyright">
        © 2025 All Rights Reserved.{" "}
        <a
            href="https://fusiondigital.fr"
            target="_blank"
            rel="noopener"
        >
            Création site web par Fusion Digital
        </a>
        </p>
    </footer>
    )
}

export default Footer;