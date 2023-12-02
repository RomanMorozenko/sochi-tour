import s from "./mainPageSection.module.css";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store.ts";
import {
    ExcursionsCollectionResponseType,
    ToursCollectionResponseType
} from "../../../utils/loaders.ts";

type MainPageMainSectionContainerContainerPropsType = {
    title: string
}
export const MainPageMainSectionContainer = (props:MainPageMainSectionContainerContainerPropsType) => {
    return <MainPageMainSection title={props.title}/>
}

type MainPageMainSectionPropsType = {
    title: string
}
export const MainPageMainSection = (props:MainPageMainSectionPropsType) => {
    const excursions:ExcursionsCollectionResponseType = useSelector((state:AppRootStateType)=> state.excursions)
    const tours:ToursCollectionResponseType = useSelector((state:AppRootStateType)=> state.tours)
    // const excursion:ExcursionCollectionResponseItemType = excursions[0]
    //
    // console.log(excursions)

    const excursion = excursions[0];
    const tour = tours[0];

    const excursionsItems = [];
    const toursItems = [];

    for (let i=0;i<=15;i++) {
        excursionsItems.push({...excursion})
    }

    for (let i=0;i<=15;i++) {
        toursItems.push({...tour})
    }

    return <div className='wrapper'>
        <h2 className={s.sectionTitle}>{props.title}</h2>
        <div className={s.flexContainer}>

        </div>
    </div>
}




