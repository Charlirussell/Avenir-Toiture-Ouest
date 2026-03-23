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
    
     const settings = {
        dots: true,
        infinite: reviewsData.length > 2,
        speed: 500,
        slidesToShow: reviewsData.length >= 2 ? 2 : 1,
        slidesToScroll: 1,
        arrows: reviewsData.length > 2,
        autoplay: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };

    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    return (
        <section id='reviews' className='reviews'>
            <div className='reviews-container'>
                <h2 className='reviews-title'>Avis de Nos Clients</h2>
                <p className='reviews-subtitle'>
                    La satisfaction de nos clients est notre priorité. Voici quelques témoignages.
                </p>

                <Slider {...settings} className='reviews-slider'>
                    {reviewsData.map((review) => (
                        <div key={review.id} className='review-slide'>
                            <article className='review-card'>
                                <div className='review-stars'>{renderStars(review.rating)}</div>
                                <h3 className='review-name'>{review.name}</h3>
                                <p className='review-location'>{review.location}</p>
                                <p className='review-text'>{review.text}</p>
                            </article>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Reviews;