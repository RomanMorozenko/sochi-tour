import s from "./mainPageSection.module.css";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../../app/store.ts";
import { ExcursionCollectionResponseItemType, ExcursionsCollectionResponseType } from "../../../utils/loaders.ts";
import { MainPageSectionItem } from "../MainPageSectionItem/MainPageSectionItem.tsx";
import { useParams } from "react-router-dom";

type MainPageSideSectionContainerContainerPropsType = {
}
export const MainPageSideSectionContainer = (props: MainPageSideSectionContainerContainerPropsType) => {
    const currentSection = useParams().section;
    const title = currentSection === 'tours'
        ? 'Авторские Туры'
        : currentSection === 'excursions'
            ? 'Экскурсии'
            : currentSection === 'booking'
                ? 'Букинг'
                : 'Главная'
    if (!currentSection) return
    return <MainPageSideSection param={currentSection} title={title} />
}

type MainPageSideSectionPropsType = {
    title: string
    param: string
}
export const MainPageSideSection = (props: MainPageSideSectionPropsType) => {
    const excursions: ExcursionsCollectionResponseType = useSelector((state: AppRootStateType) => state[props.param])

    return <div className='wrapper'>
        <h2 className={s.sectionTitle}>{props.title}</h2>
        <div className={s.flexContainer}>
            {
                excursions.map((item: ExcursionCollectionResponseItemType, index) => {
                    return <MainPageSectionItem
                        key={index}
                        id={item.id}
                        title={item.title}
                        rating={+(item.totalPoints / item.visitors).toFixed(1)}
                        price={item.price}
                        param={props.param}
                    />
                })
            }
        </div>
    </div>
}


