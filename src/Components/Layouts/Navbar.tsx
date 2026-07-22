import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import NeonGlow from "../neonblade-ui/neon-glow";


function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={isScrolled ? 'navbar navbar-scrolled' : 'navbar'}>
            <NeonGlow
                colors="#ffffff"
                glowIntensity={"subtle"}
                className="title"
            >
                <h1>
                    Black Hole Odyssey
                </h1>
            </NeonGlow>
            <nav className="nav-links">
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/games">
                    Games
                </NavLink>
                <NavLink to="/packages">
                    Packages
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/contact" id="contact-link">
                    Contact
                </NavLink>
            </nav>
        </header>
    );
}

export default NavBar;