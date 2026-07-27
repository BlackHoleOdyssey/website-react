import style from './burgermenu.module.css';
import {NavLink} from 'react-router-dom';
import "../../../Common/colors.css";
import "../../../Common/spacing.css";
import "../../../Common/typography.css";
import commonStyle from "../../../Common/common.module.css";

type BurgerMenuProps = {
    onClose: () => void;
    isClosing: boolean;
};

function BurgerMenu({ onClose, isClosing }: BurgerMenuProps) {
    return (
        <div className={`${style.burgerMenuContainer} ${isClosing ? style.burgerMenuClosing : style.burgerMenuOpen}`}>
            <div className={style.burgerMenuHeader}>
                <p className={style.burgerMenuTitle}>
                    Menu
                </p>
                <button className={style.burgerMenuCloseButton} onClick={onClose}>
                    ✕
                </button>
            </div>
            <div className={style.burgerMenu}>
                <NavLink to="/" end className={commonStyle.navLink} onClick={onClose}>
                    Home
                </NavLink>
                <NavLink to="/games" className={commonStyle.navLink} onClick={onClose}>
                    Games
                </NavLink>
                <NavLink to="/packages" className={commonStyle.navLink} onClick={onClose}>
                    Packages
                </NavLink>
                <NavLink to="/about" className={commonStyle.navLink} onClick={onClose}>
                    About
                </NavLink>
            </div>
        </div>
    );
}

export default BurgerMenu;