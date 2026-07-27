import React, { useState } from 'react';
import style from './carousel.module.css';
import "../../Common/spacing.css"
import "../../Common/colors.css"
import "../../Common/typography.css"

interface CarouselProps {
    children: React.ReactNode[];
}

export function Carousel({ children }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? children.length - 1 : prevIndex - 1
        );
    };

    const next = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === children.length - 1 ? 0 : prevIndex + 1
        );
    };

    if (!children || children.length === 0) return null;

    return (
        <div className={style.carouselContainer}>
            <div className={style.carouselStage}>
                <div className={style.carouselViewport}>
                    <div
                        className={style.carouselTrack}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {children.map((child, index) => (
                            <div className={style.carouselSlide} key={index}>
                                {child}
                            </div>
                        ))}
                    </div>
                </div>

                <button className={`${style.navButton} ${style.prev}`} onClick={prev} aria-label="Précédent">‹</button>
                <button className={`${style.navButton} ${style.next}`} onClick={next} aria-label="Suivant">›</button>
            </div>

            <div className={style.dots}>
                {children.map((_, index) => (
                    <button
                        key={index}
                        className={`${style.dot} ${index === currentIndex ? style.activeDot : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Aller à la slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}