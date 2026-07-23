import { NavLink } from "react-router-dom";
import style from './home.module.css';
import styles from "../../Components/Layouts/Navbar/navbar.module.css";
import NeonGlow from "../../Components/neonblade-ui/neon-glow";

function Home() {
    
    return (
        <div className={style.hero}>
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
        </div>
    );
}

export default Home;