import HomeImg from '../../assets/images/Home_Background.webp';

import './Home.scss';

const Home = () => {
    return (
        <section className='home'>
            <img className='home-img' src={HomeImg} alt='home background' />
            <div className='home-content'>
                <h1 className='header'>Votre couvreur en Bretagne</h1>
                <p className='header-paragraph'><span>Avenir Toiture Ouest</span> - Artisan couvreur à votre service pour tous vos travaux de toiture : réparation, zinguerie, entretien et pose de gouttières à Carhaix-Plouguer et aux alentours.</p>
            <div className='home-buttons'>
                <button className='small-button'>Devis Gratuit</button>
                <button className='phone'><a href='tel:0780627064'></a>07 80 62 70 64</button>
                <button className='services'>Nos Services</button>
            </div>
            </div>
        </section>
    )
}

export default Home;

