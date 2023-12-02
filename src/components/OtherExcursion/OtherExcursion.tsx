import {useState} from "react";
import s from "./otherExcursion.module.css";

export const OtherExcursion = () => {
    const [isOverlayActive, setIsOverlayActive] = useState(true);

    const enableOverlay = () => setIsOverlayActive(true);
    const disableOverlay = () => setIsOverlayActive(false)

    const className = isOverlayActive
        ? s.overlay
        : s.overlay + ' ' + s.overlayActive;

    return <div onMouseEnter={disableOverlay} onMouseLeave={enableOverlay} className={s.otherExcursion}>
        <div className={className}>
            <button className={s.button}>Подробнее</button>
        </div>
    </div>
}