import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
        <nav className='navbar'>
            {/*Hamburger Buttoon*/}
            <button
                type='button'
                className='hamburger'
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-label={isOpen ? 'close' : 'open'}
            >
                ☰
            </button>
            <div className={`navlinks ${isOpen ? 'is-open' : ''}`}>
                <NavLink to="/"className={({ isActive }) =>isActive ? "menu menu--active" : "menu"}onClick={handleLinkClick}>Accueil</NavLink>
                <NavLink to="/services"className={({ isActive }) =>isActive ? "menu menu--active" : "menu"}onClick={handleLinkClick}>Nos Services</NavLink>
                <NavLink to="/realisations"className={({ isActive }) =>isActive ? "menu menu--active" : "menu"}onClick={handleLinkClick}>Réalisations</NavLink>
                <NavLink to="/reviews"className={({ isActive }) =>isActive ? "menu menu--active" : "menu"}onClick={handleLinkClick}>Avis</NavLink>
                <NavLink to="/contact" className="small-button" onClick={handleLinkClick}>Contact</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;