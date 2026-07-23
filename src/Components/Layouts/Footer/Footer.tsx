import styles from './Footer.module.css'
import NeonGlow from "../../neonblade-ui/neon-glow";
import {NavLink} from "react-router-dom";
import commonStyles from "../../common.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.footerContent}>
                <div className={styles.footerInfo}>
                    <div>
                        <NeonGlow colors="#ffffff" glowIntensity={"subtle"}>
                            <p className={styles.title}>Black Hole Odyssey</p>
                        </NeonGlow>
                        <p className={styles.description}>
                            An independent studio that creates games and packages for Unity.
                        </p>
                    </div>

                    <div>
                        <p className={styles.copyright}>© 2026 Black Hole Odyssey. All rights reserved.</p>
                    </div>

                </div>

                <div className={styles.footerNav}>
                    <div className={styles.footerExplorer}>
                        <p className={styles.footerHeading}>Explorer</p>
                        <NavLink to="/games"
                                 className={({isActive}) => isActive ? `${commonStyles.navLink} ${commonStyles.navLinkActive}` : commonStyles.navLink}>
                            Games
                        </NavLink>
                        <NavLink to="/packages"
                                 className={({isActive}) => isActive ? `${commonStyles.navLink} ${commonStyles.navLinkActive}` : commonStyles.navLink}>
                            Packages
                        </NavLink>
                        <NavLink to="/about"
                                 className={({isActive}) => isActive ? `${commonStyles.navLink} ${commonStyles.navLinkActive}` : commonStyles.navLink}>
                            About
                        </NavLink>
                        <NavLink to="/contact"
                                 className={({isActive}) => isActive ? `${commonStyles.navLink} ${commonStyles.navLinkActive}` : commonStyles.navLink}>
                            Contact
                        </NavLink>
                    </div>
                </div>

                <div className={styles.footerSocial}>
                    <p className={styles.footerHeading}>Social</p>
                    <a href="https://www.linkedin.com/in/cedric-roux-4a171b253/" target="_blank"
                       rel="noopener noreferrer">
                        <img
                            className={styles.socialIcon}
                            src={`${import.meta.env.BASE_URL}icons/linkedin-in-white.png`}
                            alt="LinkedIn"
                        />
                    </a>
                    <a href="https://cedricoo.itch.io/" target="_blank" rel="noopener noreferrer">
                        <img
                            className={styles.socialIcon}
                            src={`${import.meta.env.BASE_URL}icons/itchio-white.svg`}
                            alt="itch.io"
                        />
                    </a>
                    <a href="https://github.com/Cedricoooo" target="_blank" rel="noopener noreferrer">
                        <img
                            className={styles.socialIcon}
                            src={`${import.meta.env.BASE_URL}icons/github-white.svg`}
                            alt="GitHub"
                        />
                    </a>
                    <a href="https://discord.gg/6CYUMAx65X" target="_blank" rel="noopener noreferrer">
                        <img
                            className={styles.socialIcon}
                            src={`${import.meta.env.BASE_URL}icons/discord-white.svg`}
                            alt="Discord"
                        />
                    </a>
                </div>
            </section>
        </footer>
    )
}

export default Footer