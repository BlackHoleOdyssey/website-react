import styles from "./homeCard.module.css";
import type {HomeCard}  from "../../../Types/model.ts";

interface GameCardProps {
    game: HomeCard;
}

function GameCard({game}: GameCardProps) {
    return (
        <div className={styles.card}>
            <img src={game.coverImage} alt="" className={styles.coverImage} />
            <div className={styles.overlay} />
            <div className={styles.content}>
                <h3 className={styles.title}>{game.title}</h3>
                <p className={styles.subtitle}>{game.subtitle}</p>
            </div>
        </div>
    )
}

export default GameCard;