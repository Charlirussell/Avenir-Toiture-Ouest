import ServicesOne from '../../assets/icons/gutters-icon.svg';
import ServicesTwo from '../../assets/icons/repairs-icon.svg';
import ServicesThree from '../../assets/icons/maintenance-icon.svg';

import './Services.scss';

const Services = () => {
    return (
        <section id='services' className='services'>
            <div className='services-content'>
                <h1 className='services-header'>Nos Services</h1>
                <p className='services-paragraph'>Basée à Carhaix-Plouguer, Avenir Toiture Ouest réalise vos travaux de toiture et de zinguerie en Bretagne : révision, réparation et entretien de toitures en ardoise, ainsi que pose et réparation de gouttières.</p>
            <div className='services-icons'>
                <img className='services-one' src={ServicesOne} alt="repairs icon" />
                <img className='services-two' src={ServicesTwo} alt="gutters icon" />
                <img className='services-three' src={ServicesThree} alt="maintenance icon" />
            </div>
            </div>
        </section>
    )
}

export default Services;