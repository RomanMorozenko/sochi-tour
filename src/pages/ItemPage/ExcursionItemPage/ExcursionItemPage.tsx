import s from './excursionItemPage.module.css';
import {PhotosFrame} from "../PhotosFrame/PhotoFrame.tsx";
import {ItemInfoModal} from "../../../components/ItemInfoModal/ItemInfoModal.tsx";
import {OrderModal} from "../../../components/OrderModal/OrderModal.tsx";
import {
    ExcursionCollectionResponseItemType,
    ExcursionsCollectionResponseType,
    ExcursionsReviewsCollectionResponseType
} from "../../../utils/loaders.ts";
import {Tag} from "../../../components/Tag/Tag.tsx";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store.ts";
import {OtherExcursion} from "../../../components/OtherExcursion/OtherExcursion.tsx";
import {useState} from "react";
import {PhotosModal} from "../../../components/PhotosModal/PhotosModal.tsx";
import {useMediaQuery} from "../../../hooks/useMediaQuery.ts";
import {SingleItemSlider} from "../../../components/SingleItemSlider/SingleItemSlider.tsx";


export type ExcursionsDataType = {
    mainInfoRes: ExcursionsCollectionResponseType
    reviewsRes: ExcursionsReviewsCollectionResponseType
}

export const ExcursionItemPage = () => {

    const [modalIsActive,setModalIsActive] = useState(false);
    const matches = useMediaQuery('(max-width: 428px)')

    const handleSetModal = () => {
        setModalIsActive(!modalIsActive)
    }

    // const idData = useParams()
    //
    // const id = idData.id || ''

    const excursionsData: ExcursionsCollectionResponseType = useSelector((state: AppRootStateType) => state.excursions)
    const excursion: ExcursionCollectionResponseItemType = excursionsData[0]


    return <div className='wrapper'>
        <h1 className={s.pageTitle}>{excursion.title}</h1>
        <div className={s.gridContainer}>
            <ItemInfoModal rating={4.8} visitors={101} reviewsCount={34}/>
            {
                matches
                && <SingleItemSlider/>
            }
            <PhotosFrame callback={handleSetModal}/>
            <PhotosModal active={modalIsActive} setActive={handleSetModal}/>
            <OrderModal
                rating={(Math.trunc(excursion.totalPoints / excursion.visitors)).toString()}
                duration={excursion.duration}
                peopleCount={excursion.visitors.toString()}
                startingPrice={excursion.price.toString()}
                description={excursion.priceDescription}
            />
            <section className={s.description}>
                <h2>Описание:</h2>
                {
                    excursion.description.map((item, index) => {
                        return <section key={index} className={s.sectionParagraph}>{item}</section>
                    })
                }
            </section>
            <section className={s.details}>
                <h2>Организационные детали:</h2>
                <ul>
                    {
                        excursion.details.map((detail, index) => {
                            return <li key={index}>{detail}</li>
                        })
                    }
                </ul>
            </section>
            {/* <section className={s.reviews} id='reviews'>
                <h2>Отзывы: </h2>
                <section className={s.tags}>
                    {
                        excursion.tags.map((tag, index) => {
                            return <Tag key={index} name={tag} callback={() => alert('clicked')}/>
                        })
                    }
                </section>
            </section> */}
        </div>
        <h2>Другие экскурсии:</h2>
        <div className={s.otherInfo}>
            <OtherExcursion/>
            <OtherExcursion/>
            <OtherExcursion/>
            <OtherExcursion/>
        </div>
    </div>
}






