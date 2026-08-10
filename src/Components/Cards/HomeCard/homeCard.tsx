import styles from "./homeCard.module.css";
import type {ProjectData} from "../../../Types/model.ts";
import "../../../Common/colors.css";
import "../../../Common/spacing.css";
import "../../../Common/typography.css";

interface GameCardProps {
    game: ProjectData;
}

function GameCard({game}: GameCardProps) {
    return (
        <div className={styles.card}>
            <img src={game.coverImage} alt="" className={styles.coverImage}/>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <h3 className={styles.title}>{game.title}</h3>
                    <p className={styles.subtitle}>{game.status}</p>
                </div>
                <a href={game.link} target="_blank" rel="noopener noreferrer">
                    <img className={styles.platformIcon} src={game.platformBadge} alt="platform" />
                </a>
            </div>
        </div>
    )
}

export default GameCard;