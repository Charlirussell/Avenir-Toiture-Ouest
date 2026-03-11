import HomeImg from '../../assets/images/Home_Background.webp';

import './Home.scss';

const Home = () => {
    return (
        <div className='home-main'>
            <img src={HomeImg} alt='home-img' />
        </div>
    )
}

export default Home;