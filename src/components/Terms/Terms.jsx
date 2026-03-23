import Banner from '../../assets/images/Banner-ATO.svg';

import './Terms.scss';

const Terms = () => {
    return (
        <section id='terms' className='terms'>

            <a href="/#home" className='legal-banner'>
                <img
                    src={Banner}
                    alt="Avenir Toiture Ouest Logo"
                />
            </a>

            <h1 className='terms-title'>
                Mentions légales
            </h1>

            <p className='terms-text'>
                Dernière mise à jour : 23.03.2026
            </p>

            <h2 className='terms-subtitle'>
                Éditeur du site
            </h2>

            <p className='terms-text'>
                Le présent site internet est édité par :
            </p>

            <ul className='terms-list'>
                <li><strong>Dylan Grall</strong></li>
                <li>Artisan couvreur - Toiture par éléments</li>
                <li>Avenir Toiture Ouest</li>
            </ul>

            <p className='terms-text'>
                Adresse :
                <br />
                6, Kernanvel
                <br />
                22160 Carnoët
                <br />
                France
            </p>

            <p className='terms-text'>
                Téléphone : 07 80 62 70 64
                <br />
                Email : contact@avenirtoitureouest.fr
            </p>

            <p className='terms-text'>
                Directeur de la publication :
                <br />
                Dylan Grall
            </p>

            <h2 className='terms-subtitle'>
                Création du site
            </h2>

            <p className='terms-text'>
                Site internet conçu et développé par :
            </p>

            <ul className='terms-list'>
                <li><strong>Charli Russell</strong></li>
                <li>Fusion Digital</li>
            </ul>

            <p className='terms-text'>
                Adresse :
                <br />
                6, Kernanvel
                <br />
                22160 Carnoët
                <br />
                France
            </p>

            <p className='terms-text'>
                Email : charli@fusiondigital.fr
            </p>

            <h2 className='terms-subtitle'>
                Hébergement
            </h2>

            <p className='terms-text'>
                Le site est hébergé par :
            </p>

            <p className='terms-text'>
                Netlify, Inc.
                <br />
                44 Montgomery Street, Suite 300
                <br />
                San Francisco, California 94104
                <br />
                États-Unis
            </p>

            <p className='terms-text'>
                Site :
                <br />
                https://app.netlify.com
            </p>

            <h2 className='terms-subtitle'>
                Nom de domaine
            </h2>

            <p className='terms-text'>
                Le nom de domaine a été enregistré auprès de :
            </p>

            <p className='terms-text'>
                GoDaddy.com, LLC
            </p>

            <h2 className='terms-subtitle'>
                Activité
            </h2>

            <p className='terms-text'>
                Le site a pour objet de présenter les services proposés par :
                <strong> Avenir Toiture Ouest</strong>, artisan couvreur spécialisé dans :
            </p>

            <ul className='terms-list'>
                <li>Révision de toiture</li>
                <li>Réparation et entretien de toiture</li>
                <li>Travaux de zinguerie</li>
                <li>Pose et remplacement d’ardoises</li>
                <li>Entretien et rénovation de toiture</li>
            </ul>

            <p className='terms-text'>
                Intervention principalement en :
            </p>

            <ul className='terms-list'>
                <li>Carhaix-Plouguer et ses alentours</li>
                <li>Centre Bretagne</li>
                <li>Côtes-d'Armor</li>
                <li>Finistère</li>
            </ul>

            <h2 className='terms-subtitle'>
                Propriété intellectuelle
            </h2>

            <p className='terms-text'>
                L'ensemble des contenus présents sur ce site, notamment :
            </p>

            <ul className='terms-list'>
                <li>textes</li>
                <li>images</li>
                <li>logos</li>
                <li>photographies</li>
                <li>graphismes</li>
                <li>design</li>
            </ul>

            <p className='terms-text'>
                sont protégés par le droit de la propriété intellectuelle.
            </p>

            <p className='terms-text'>
                Toute reproduction ou utilisation sans autorisation préalable est interdite.
            </p>

            <h2 className='terms-subtitle'>
                Responsabilité
            </h2>

            <p className='terms-text'>
                Les informations présentes sur ce site sont fournies à titre indicatif.
            </p>

            <p className='terms-text'>
                L'éditeur s'efforce d'assurer l'exactitude des informations mais ne peut garantir :
            </p>

            <ul className='terms-list'>
                <li>leur exactitude</li>
                <li>leur complétude</li>
                <li>leur actualisation</li>
            </ul>

            <p className='terms-text'>
                L'utilisateur utilise ces informations sous sa responsabilité.
            </p>

            <h2 className='terms-subtitle'>
                Droit applicable
            </h2>

            <p className='terms-text'>
                Le présent site est soumis au droit français.
            </p>

        </section>
    )
}

export default Terms;