import s from './tourItemPage.module.css';
import {PhotosFrame} from "../PhotosFrame/PhotoFrame.tsx";
import {ItemInfoModal} from "../../../components/ItemInfoModal/ItemInfoModal.tsx";
import {OrderModal} from "../../../components/OrderModal/OrderModal.tsx";
import { ToursCollectionResponseItemType, ToursCollectionResponseType } from "../../../utils/loaders.ts";
import {Tag} from "../../../components/Tag/Tag.tsx";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store.ts";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {OtherExcursion} from "../../../components/OtherExcursion/OtherExcursion.tsx";
import {PhotosModal} from "../../../components/PhotosModal/PhotosModal.tsx";
import {useState} from "react";
import {useMediaQuery} from "../../../hooks/useMediaQuery.ts";
import {SingleItemSlider} from "../../../components/SingleItemSlider/SingleItemSlider.tsx";
// import {useParams} from "react-router-dom";


export const TourItemPage = () => {
    const toursData: ToursCollectionResponseType = useSelector((state: AppRootStateType) => state.tours)
    const tour: ToursCollectionResponseItemType = toursData[0]
    const [modalIsActive,setModalIsActive] = useState(false)
    const matches = useMediaQuery('(max-width: 428px)')

    const handleSetModal = () => {
        setModalIsActive(!modalIsActive)
    }

    // const idData = useParams();
    //
    // const id = idData.id || '';

    return <div className='wrapper'>
        <h1 className={s.pageTitle}>{tour.title}</h1>
        <div className={s.gridContainer}>
            <ItemInfoModal rating={4.8} visitors={101} reviewsCount={34}/>
            {
                matches
                && <SingleItemSlider/>
            }
            <PhotosFrame callback={handleSetModal}/>
            <OrderModal
                rating={(Math.trunc(tour.totalPoints / tour.visitors)).toString()}
                duration={tour.duration}
                peopleCount={tour.visitors.toString()}
                startingPrice={tour.price.toString()}
                description={tour.priceDescription}
            />
            <PhotosModal active={modalIsActive} setActive={handleSetModal} />
            <section className={s.description}>
                <h2>Описание:</h2>
                <BasicAccordion description={tour.description} />
            </section>
            <section className={s.details}>
                <h2>Организационные детали:</h2>
                <ul>
                    {
                        tour.details.map((detail, index) => {
                            return <li key={index}>{detail}</li>
                        })
                    }
                </ul>
            </section>
            <section className={s.reviews} id='reviews'>
                <h2>Отзывы: </h2>
                <section className={s.tags}>
                    {
                        tour.tags.map((tag, index) => {
                            return <Tag key={index} name={tag} callback={() => alert('clicked')}/>
                        })
                    }
                </section>
            </section>
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



export type BasicAccordionPropsType = {
    description:{[key:string]:any}
}
export default function BasicAccordion(props:BasicAccordionPropsType) {
    const daysToRender = []
    for ( const item in props.description) {
        daysToRender.push(props.description[item])
    }
    return (
        <div>
            {
                daysToRender.map((item,index)=> {
                    return <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h2>День {index+1}</h2>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                {item}
                            </p>
                        </AccordionDetails>
                    </Accordion>
                })
            }
        </div>
    );
}










