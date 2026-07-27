import style from './games.module.css';
import "../../Common/colors.css";
import "../../Common/spacing.css";
import "../../Common/typography.css";
import "../../Common/effects.css";
import {mockGame} from "../../Data/cardData.ts";
import ProjectCard from "../../Components/Cards/ProjectCard/projectCard.tsx";

function Games() {
    return (
        <section>
            <div className={style.gamesHeader}>
                <h1 className={style.gamesTitle}>Black Hole Odyssey - Games</h1>
                <p className={style.gamesDescription}>
                    Welcome to our games page! This is where it all happens: here, you’ll discover all the games we’ve
                    created. Take a look around, explore a bit—there’s plenty to discover about each one. Are you ready
                    to
                    join the adventure and travel through our games as if time itself were warped?
                </p>
            </div>
            <div className={style.projectCards}>
                {mockGame.map((game, index) => (
                    <ProjectCard key={game.id} project={game} reversed={index % 2 === 1} />
                ))}
            </div>
        </section>
        
    )
}

export default Games;