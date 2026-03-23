import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Reviews.scss';

const reviewsData = [
    {
        id: 1,
        name: 'Philip Larbalestier',
        Location: 'Carnoët',
        rating: 5,
        text: 'Great work from Dylan! He removed all the ivy from the roof, replaced the broken slates, and fixed a leak coming from the gable. Everything was completed efficiently and to a high standard. Professional, reliable, and easy to deal with. I highly recommend him for any roofing work.',

    },
    {
       id: 2,
        name: 'Alexis Lr',
        Location: 'Plounévézel',
        rating: 5,
        text: "Je suis très content de la prestation effectuée pour une réparation de fuite avec remplacement d'ardoises et de plusieurs tuiles faîtière , je recommande cette entreprise grandement.",

    },
];

const Reviews = () => {
     
    return (
        <section id='reviews' className='reviews'>
            <h2 className='reviews-title'>Avis de Nos Clients</h2>
        </section>
    )
}

export default Reviews;