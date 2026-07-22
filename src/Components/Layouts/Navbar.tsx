import {NavLink} from 'react-router-dom';
import './Navbar.css';

function NavBar() {
    return (
        <header className="navbar">
            <h1 className="title">Black Hole Odyssey</h1>
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
                <NavLink to="/contact">
                    Contact
                </NavLink>
            </nav>
        </header>
    );
}

export default NavBar;