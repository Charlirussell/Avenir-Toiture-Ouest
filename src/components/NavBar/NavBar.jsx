import { useEffect, useState } from 'react';
import Banner from '../../assets/images/Banner-ATO.svg';

import './NavBar.scss';

const BREAKPOINT =768;

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);
    
    const handleLinkClick = () => {
        if (window.innerWidth <= BREAKPOINT) closeMenu();
    };

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth > BREAKPOINT) closeMenu();
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className='navbar-wrap'>
            <a href="#home" className='banner' onClick={handleLinkClick}>
                <img src={Banner} alt="Avenir Toiture Ouest Logo" />
            </a>

            <nav className='navbar'>
                <button
                    type='button'
                    className='hamburger'
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? 'close menu' : 'open menu'}
                >
                    ☰
                </button>

                <div className={`navlinks ${isOpen ? 'is-open' : ''}`}>
                    <a href="#home" className="menu" onClick={handleLinkClick}>Accueil</a>
                    <a href="#services" className="menu" onClick={handleLinkClick}>Nos Services</a>
                    <a href="#reviews" className="menu" onClick={handleLinkClick}>Avis</a>
                    <a href="#contact" className="small-button" onClick={handleLinkClick}>Contact</a>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;