import s from "./mainPageSection.module.scss";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store.ts";
import {
    ExcursionsCollectionResponseType,
    // ToursCollectionResponseType
} from "../../../utils/loaders.ts";
import { SectionItem } from "./SectionItem/SectionItem.tsx";

export const MainPageMainSection = () => {
    const excursions:ExcursionsCollectionResponseType = useSelector((state:AppRootStateType)=> state.excursions)
    // const tours:ToursCollectionResponseType = useSelector((state:AppRootStateType)=> state.tours)

    return <div className={'wrapper' + " " + s.mainPageSection}>
        <div className={s.mainSectionMenu}>
            <h2 className={s.sectionTitle}>Экскурсии</h2>
            <div className={s.sectionMenuItems}>
                {
                    excursions.map((item,index) => {
                        if (index > 2) return
                        return <SectionItem key={item.id} id={item.id} title={item.title} price={item.price} param="excursions" duration={item.duration} />
                    })
                }
            </div>
        </div>
    </div>
}




