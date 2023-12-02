import {FaStar} from "react-icons/fa";
import s from './reviewItem.module.css'

export type ReviewItemProps = {
    date:string
    text:string
    customerName:string
}
export const ReviewItem = (props:ReviewItemProps) => {
    return <div className={s.reviewItem}>
        <div>
            <FaStar style={{color:'gold',fontSize:'18px'}}/>
            <FaStar style={{color:'gold',fontSize:'18px'}}/>
            <FaStar style={{color:'gold',fontSize:'18px'}}/>
            <FaStar style={{color:'gold',fontSize:'18px'}}/>
            <FaStar style={{color:'gold',fontSize:'18px'}}/>
        </div>
        <span>{props.date}</span>
        <p>{props.text}</p>
        <p>{props.customerName}</p>
    </div>
}