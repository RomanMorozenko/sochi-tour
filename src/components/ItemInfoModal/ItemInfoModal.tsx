import s from './itemInfoModal.module.css'
import { FaStar} from "react-icons/fa";
import {HashLink} from "react-router-hash-link";

type ItemInfoModalPropsType = {
    visitors: number,
    rating: number,
    reviewsCount: number
}

export const ItemInfoModal = (props: ItemInfoModalPropsType) => {
    return <div className={s.itemInfoModal}>
        <div>
            <FaStar style={{color:'gold',fontSize:'18px'}}/>
            <FaStar style={{color:'gold',fontSize:'18px'}}/>
            <FaStar style={{color:'gold',fontSize:'18px'}}/>
            <FaStar style={{color:'gold',fontSize:'18px'}}/>
            <FaStar style={{color:'gold',fontSize:'18px'}}/>
        </div>
        <div className={s.rating}>{props.rating} / 5</div>
        <HashLink to={'/:id#reviews'}>
            <div>{props.reviewsCount} отзывов</div>
        </HashLink>
    </div>
}