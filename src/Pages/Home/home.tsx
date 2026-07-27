import {Link} from "react-router-dom";
import style from './home.module.css';
import styles from "../../Components/Layouts/Navbar/navbar.module.css";
import NeonGlow from "../../Components/neonblade-ui/neon-glow";
import GameCard from "../../Components/Cards/HomeCard/homeCard";
import {mockGame, mockPackage} from "../../Data/cardData";
import {useCssVar} from "../../Scripts/useCssVar";
import "../../Common/colors.css";
import "../../Common/spacing.css";
import "../../Common/typography.css";
import "../../Common/effects.css";
import DefaultButton from "../../Components/Buttons/DefaultButton/defaultButton.tsx";

function Home() {
    const titleColor = useCssVar("--color-text-primary");

    return (
        <section>
            <section className={style.hero}>
                <NeonGlow
                    colors={titleColor}
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
                    <DefaultButton to="/games" label="View Games" titleColor={titleColor} />
                    <DefaultButton to="/packages" label="View Packages" titleColor={titleColor} />
                </div>
            </section>
            <section className={style.gameSection}>
                <NeonGlow colors={titleColor}>
                    <p className={style.sectionLabel}>Games</p>
                </NeonGlow>
                <div className={style.cardsGrid}>
                    {mockGame.map((game) => (
                        <GameCard key={game.id} game={game}/>
                    ))}
                </div>
            </section>
            <section className={style.gameSection}>
                <NeonGlow colors={titleColor}>
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
                <NeonGlow colors={titleColor}>
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