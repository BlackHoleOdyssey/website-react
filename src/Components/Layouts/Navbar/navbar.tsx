import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './navbar.module.css';
import commonStyles from "../../../Common/common.module.css";
import NeonGlow from "../../neonblade-ui/neon-glow";
import "../../../Common/colors.css";
import "../../../Common/spacing.css";
import "../../../Common/typography.css";

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
        <header className={isScrolled ? styles.navbar + ' ' + styles.navbarScrolled : styles.navbar}>
            <NeonGlow
                colors="#ffffff"
                glowIntensity={"subtle"}
                className={styles.title}
            >
                <h1>
                    Black Hole Odyssey
                </h1>
            </NeonGlow>
            <nav className={styles.navLinks}>
                <NavLink to="/" end className={({ isActive }) => isActive ? `${commonStyles.navLink} ${commonStyles.navLinkActive}` : commonStyles.navLink}>
                    Home
                </NavLink>
                <NavLink to="/games" className={({ isActive }) => isActive ? `${commonStyles.navLink} ${commonStyles.navLinkActive}` : commonStyles.navLink}>
                    Games
                </NavLink>
                <NavLink to="/packages" className={({ isActive }) => isActive ? `${commonStyles.navLink} ${commonStyles.navLinkActive}` : commonStyles.navLink}>
                    Packages
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? `${commonStyles.navLink} ${commonStyles.navLinkActive}` : commonStyles.navLink}>                    About
                </NavLink>
            </nav>
        </header>
    );
}

export default NavBar;