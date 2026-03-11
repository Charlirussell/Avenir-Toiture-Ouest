import HomeImg from '../../assets/images/Home_Background.webp';

import './Home.scss';

const Home = () => {
    return (
        <div className='home-main'>
            <img className='home-img' src={HomeImg} alt='home background' />
        </div>
    )
}

export default Home;