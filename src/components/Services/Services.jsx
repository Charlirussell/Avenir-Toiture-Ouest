import ServicesOne from '../../assets/icons/maintenance-icon.svg';
import ServicesTwo from '../../assets/icons/repairs-icon.svg';
import ServicesThree from '../../assets/icons/gutters-icon.svg';

import './Services.scss';

const Services = () => {
    return (
        <section id='services' className='services'>
            <div className='services-content'>
                <h1 className='services-header'>Nos Services</h1>
                <p className='services-paragraph'>Basée à Carhaix-Plouguer, Avenir Toiture Ouest réalise vos travaux de toiture et de zinguerie en Bretagne : révision, réparation et entretien de toitures en ardoise, ainsi que pose et réparation de gouttières.</p>
                <div className='services-cards'>
                    <article className='services-card'>
                        <img className='services-one' src={ServicesOne} alt="repairs icon" />
                        <h3 className='services-title'>Révision de Toiture</h3>
                        <p className='services-text'>Révision complète ou partielle de votre toiture en ardoise naturelle</p>
                    </article>
                    <article className='services-card'>
                        <img className='services-two' src={ServicesTwo} alt="gutters icon" />
                        <h3 className='services-title'>Réparation et Entretien</h3>
                        <p className='services-text'>Recherche de fuites, réparation de toiture, démoussage et entretien.</p>
                    </article>
                    <article className='services-card'>
                        <img className='services-three' src={ServicesThree} alt="maintenance icon" />
                        <h3 className='services-title'>Travaux de Zinguerie</h3>
                        <p className='services-text'>Pose et réparation de gouttières, descentes et habillage de cheminées en zinc.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Services;