import {Link, NavLink} from "react-router-dom";
import style from './home.module.css';
import styles from "../../Components/Layouts/Navbar/navbar.module.css";
import NeonGlow from "../../Components/neonblade-ui/neon-glow";
import GameCard from "../../Components/Cards/HomeCard/homeCard";
import {mockGame, mockPackage} from "../../Data/cardData";
import "../../Common/colors.css";
import "../../Common/spacing.css";
import "../../Common/typography.css";
import "../../Common/effects.css";

function Home() {

    return (
        <section>
            <section className={style.hero}>
                <NeonGlow
                    colors="#ffffff"
                    glowIntensity={"subtle"}
                    className={styles.title}
                >
                    <h1 className={style.title}>
                        Black Hole Odyssey
                    </h1>
                </NeonGlow>
                <p className={style.description}>
                    Independent Studio - Games and Packages on Unity
                </p>
                <div className={style.buttonContainer}>
                    <NavLink to="/games" className={style.viewGames}>
                        <span className={style.buttonText}>View Games</span>
                        <div className={style.glowWrapper}>
                            <NeonGlow colors="#ffffff" glowIntensity="subtle">
                                View Games
                            </NeonGlow>
                        </div>
                    </NavLink>
                    <NavLink to="/packages" className={style.viewGames}>
                        <span className={style.buttonText}>View Packages</span>
                        <div className={style.glowWrapper}>
                            <NeonGlow colors="#ffffff" glowIntensity="subtle">
                                View Packages
                            </NeonGlow>
                        </div>
                    </NavLink>
                </div>
            </section>
            <section className={style.gameSection}>
                <NeonGlow colors="#ffffff" glowIntensity="subtle">
                <p className={style.sectionLabel}>Games</p>
                </NeonGlow>
                <div className={style.cardsGrid}>
                    {mockGame.map((game) => (
                        <GameCard key={game.id} game={game}/>
                    ))}
                </div>
            </section>
            <section className={style.gameSection}>
                <NeonGlow colors="#ffffff" glowIntensity="subtle">
                    <p className={style.sectionLabel}>Packages</p>
                </NeonGlow>
                <div className={style.cardsGrid}>
                    {mockPackage.map((pkg) => (
                        <GameCard key={pkg.id} game={pkg}/>
                    ))}
                </div>
            </section>
            <div className={style.line}></div>
            <section className={style.gameSection}>
                <NeonGlow colors="#ffffff" glowIntensity="subtle">
                    <p className={style.sectionLabel}>About Black Hole Odyssey</p>
                </NeonGlow>
                <div className={style.aboutContainer}>
                    <p className={style.aboutText}>
                        Black Hole Odyssey is an independent video game studio founded in 2026. The studio was founded by Cédric Roux, a developer who has been passionate about video games since he was a child.
                    </p>
                    <p className={style.aboutText}>
                        The games are primarily developed using the Unity game engine. In addition to games, the studio develops public packages.
                    </p>
                    <p className={style.aboutText}>
                        All of our{' '}
                        <Link to="/games" className={style.link}>games</Link> and{' '}
                        <Link to="/packages" className={style.link}>packages</Link>{' '}
                        can be found on the website. To learn more about Black Hole Odyssey,{' '}
                        <Link to="/about" className={style.link}>click here</Link>.
                    </p>
                </div>
            </section>
        </section>
    );
}

export default Home;