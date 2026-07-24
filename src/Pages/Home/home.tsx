import { NavLink } from "react-router-dom";
import style from './home.module.css';
import styles from "../../Components/Layouts/Navbar/navbar.module.css";
import NeonGlow from "../../Components/neonblade-ui/neon-glow";
import GameCard from "../../Components/Cards/HomeCard/homeCard";
import { mockGame, mockPackage } from "../../Data/cardData";

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
                <NavLink to="/games" className={style.viewGames}>
                    <span className={style.buttonText}>View Games</span>
                    <div className={style.glowWrapper}>
                        <NeonGlow colors="#ffffff" glowIntensity="subtle">
                            View Games
                        </NeonGlow>
                    </div>
                </NavLink>
            </section>
            <section className={style.gameSection}> 
                <p className={style.sectionLabel}>Games</p>
                <div className={style.cardsGrid}>
                    {mockGame.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            </section>
            <section className={style.gameSection}>
                <p className={style.sectionLabel}>Packages</p>
                <div className={style.cardsGrid}>
                    {mockPackage.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            </section>
        </section>
    );
}

export default Home;