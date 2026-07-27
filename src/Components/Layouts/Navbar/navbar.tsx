import {useState, useEffect} from 'react';
import {useCssVar} from "../../../Scripts/useCssVar";
import {NavLink} from 'react-router-dom';
import styles from './navbar.module.css';
import commonStyles from "../../../Common/common.module.css";
import "../../../Common/colors.css";
import "../../../Common/spacing.css";
import "../../../Common/typography.css";
import NeonGlow from "../../neonblade-ui/neon-glow";
import BurgerMenu from '../BurgerMenu/burgermenu';

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const titleColor = useCssVar("--color-text-primary");

    const openMenu = () => {
        setClosing(false);
        setOpen(true);
    };

    const closeMenu = () => {
        setClosing(true);
        setTimeout(() => {
            setOpen(false);
            setClosing(false);
        }, 300);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const closeOnDesktop = () => {
            if (window.innerWidth > 768) {
                setOpen(false);
                setClosing(false);
            }
        };

        window.addEventListener("resize", closeOnDesktop);
        closeOnDesktop();

        return () => window.removeEventListener("resize", closeOnDesktop);
    }, []);

    return (
        <header className={isScrolled ? styles.navbar + ' ' + styles.navbarScrolled : styles.navbar}>
            <NeonGlow
                colors={titleColor}
                className={styles.title}
            >
                <h1>
                    Black Hole Odyssey
                </h1>
            </NeonGlow>
            <nav>
                <div className={styles.desktopMenu}>
                    <NavLink to="/" end className={({ isActive }) => isActive ? `${commonStyles.navLink} ${commonStyles.navLinkActive}` : commonStyles.navLink}>
                        Home
                    </NavLink>
                    <NavLink to="/games" className={({ isActive }) => isActive ? `${commonStyles.navLink} ${commonStyles.navLinkActive}` : commonStyles.navLink}>
                        Games
                    </NavLink>
                    <NavLink to="/packages" className={({ isActive }) => isActive ? `${commonStyles.navLink} ${commonStyles.navLinkActive}` : commonStyles.navLink}>
                        Packages
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? `${commonStyles.navLink} ${commonStyles.navLinkActive}` : commonStyles.navLink}>
                        About
                    </NavLink>
                </div>

                <button className={styles.burgerButton} onClick={() => (open ? closeMenu() : openMenu())}>
                    ☰
                </button>

                {(open || closing) && (
                    <>
                        <div
                            className={`${styles.mobileOverlay} ${closing ? styles.mobileOverlayClosing : ""}`}
                            onClick={closeMenu}
                        />
                        <div className={styles.mobileMenu}>
                            <BurgerMenu onClose={closeMenu} isClosing={closing} />
                        </div>
                    </>
                )}
            </nav>
        </header>
    );
}

export default NavBar;