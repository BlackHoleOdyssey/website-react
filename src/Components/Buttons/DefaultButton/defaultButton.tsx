import style from './defaultButton.module.css'
import {NavLink} from "react-router-dom";
import NeonGlow from "../../neonblade-ui/neon-glow";

interface DefaultButtonProps {
    to: string;
    label: string;
    titleColor: string;
}

function DefaultButton({to, label, titleColor}: DefaultButtonProps) {
    const isExternal = /^https?:\/\//.test(to);

    const content = (
        <>
            <span className={style.buttonText}>{label}</span>
            <div className={style.glowWrapper}>
                <NeonGlow colors={titleColor}>
                    {label}
                </NeonGlow>
            </div>
        </>
    );

    if (isExternal) {
        return (
            <a
                href = {to}
                className = {style.buttonContainer}
                target = "_blank"
                rel = "noopener noreferrer">
                {content}
            </a>
        );
    }

    return (
        <NavLink to={to} className={style.buttonContainer}>
            {content}
        </NavLink>
    );
}

export default DefaultButton;