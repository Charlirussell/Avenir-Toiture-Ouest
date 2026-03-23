import './Privacy.scss';

const Privacy = () => {
    return (
        <section id='privacy' className='privacy'>
            <h1 className='privacy-title'>
                Politique de confidentialité
            </h1>

            <p className='privacy-text'>
                Dernière mise à jour : 23.03.2026
            </p>

            <p className='privacy-text'>
                La protection de vos données personnelles est une priorité pour
                <strong> Avenir Toiture Ouest</strong>.
                Cette politique de confidentialité explique quelles données sont collectées,
                comment elles sont utilisées et quels sont vos droits.
            </p>

            <h2 className='privacy-subtitle'>
                1. Données collectées
            </h2>

            <p className='privacy-text'>
                Nous collectons uniquement les données nécessaires lorsque vous utilisez
                notre formulaire de contact.
            </p>

            <ul className='privacy-list'>
                <li>Nom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Message</li>
            </ul>

            <h2 className='privacy-subtitle'>
                2. Finalité de la collecte
            </h2>

            <p className='privacy-text'>
                Les données collectées sont utilisées uniquement pour :
            </p>

            <ul className='privacy-list'>
                <li>Répondre à votre demande</li>
                <li>Établir un devis</li>
                <li>Vous contacter</li>
                <li>Assurer le suivi client</li>
            </ul>

            <h2 className='privacy-subtitle'>
                3. Durée de conservation
            </h2>

            <p className='privacy-text'>
                Vos données sont conservées pendant une durée maximale de
                <strong> 3 ans </strong>
                après le dernier contact.
            </p>

            <h2 className='privacy-subtitle'>
                4. Sécurité des données
            </h2>

            <p className='privacy-text'>
                Nous mettons en œuvre des mesures techniques et organisationnelles
                pour protéger vos données contre :
            </p>

            <ul className='privacy-list'>
                <li>L'accès non autorisé</li>
                <li>La perte</li>
                <li>La modification</li>
                <li>La divulgation</li>
            </ul>

            <h2 className='privacy-subtitle'>
                5. Vos droits
            </h2>

            <p className='privacy-text'>
                Conformément au Règlement Général sur la Protection des Données (RGPD),
                vous disposez des droits suivants :
            </p>

            <ul className='privacy-list'>
                <li>Droit d'accès</li>
                <li>Droit de rectification</li>
                <li>Droit de suppression</li>
                <li>Droit d'opposition</li>
                <li>Droit à la limitation du traitement</li>
            </ul>

            <p className='privacy-text'>
                Vous pouvez exercer ces droits en contactant :
            </p>

            <p className='privacy-text'>
                Email : contact@avenirtoitureouest.fr
            </p>

            <h2 className='privacy-subtitle'>
                6. Cookies
            </h2>

            <p className='privacy-text'>
                Le site peut utiliser des cookies afin d'améliorer l'expérience utilisateur
                et mesurer la fréquentation du site.
                Vous pouvez refuser les cookies via les paramètres de votre navigateur.
            </p>
        </section>
    )
}

export default Privacy;