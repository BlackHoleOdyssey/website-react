import type {ProjectData} from "../../../Types/model.ts";
import style from './projectCard.module.css';
import React from "react";
import {Carousel} from "../../Carousel/carousel.tsx";
import DefaultButton from "../../Buttons/DefaultButton/defaultButton.tsx";
import {useCssVar} from "../../../Scripts/useCssVar.tsx";

interface ProjectCardProps {
    project: ProjectData;
    reversed?: boolean;
}

const getStatusClass = (status: string) => {
    const normalized = status.toLowerCase();

    switch (normalized) {
        case 'released':
            return style.statusReleased;
        case 'in-progress':
            return style.statusInProgress;
        case 'prototype':
            return style.statusPrototype;
        default:
            return style.statusReleased;
    }
};

function ProjectCard({project, reversed = false}: ProjectCardProps) {
    const statusClass = getStatusClass(project.status);

    const imagesToDisplay = project.screenshot && project.screenshot.length > 0
        ? project.screenshot
        : (project.coverImage ? [project.coverImage] : []);
    
    const titleColor = useCssVar("--color-text-primary");
    
    // @ts-ignore
    return (
        <section className={`${style.projectContainer} ${reversed ? style.reversed : ''}`}>
            <div className={style.coverImage}>
                {imagesToDisplay.length > 1 ? (
                    <Carousel>
                        {imagesToDisplay.map((imgSrc, index) => (
                            <img
                                key={index}
                                src={imgSrc}
                                alt={`${project.title} screenshot ${index + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        ))}
                    </Carousel>
                ) : (
                    <img
                        src={imagesToDisplay[0] || project.coverImage}
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                )}
            </div>
            
            <div className={style.projectInformation}>
                <h3 className={style.projectTitle}>{project.title}</h3>
                <div className={style.projectGenre}>
                    {project.genre && project.genre.length > 0 && (
                        <div className={style.projectGenre}>
                            {project.genre.map((g, index) => (
                                <span key={index} className={style.genreItem}>
                                    {g}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                <p className={style.projectDescription}>{project.description}</p>
                <hr className={style.separator}></hr>
                <div className={style.projectCardFooterContainer}>
                    <div className={style.projectCardFooter}>
                        <p className={`${style.status} ${statusClass}`}>
                            {project.status}
                        </p>
                        <div className={style.iconContainer}>
                        <span
                            className={style.icon}
                            style={{ '--icon-url': `url(${import.meta.env.BASE_URL}icons/calendar-white.svg)` } as React.CSSProperties}
                            aria-hidden="true"
                        ></span>
                            <p className={style.iconText}>{project.releaseDate}</p>
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img className={style.platformIcon} src={project.platformLogo} alt="platform" />
                        </a>
                    </div>
                    <div className={style.playButton}>
                        <DefaultButton to={project.link} label="Play Now" titleColor={titleColor} />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default ProjectCard;