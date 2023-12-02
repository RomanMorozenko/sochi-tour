import s from "../MainPageSection/mainPageSection.module.css";
import {FaHeart, FaStar} from "react-icons/fa";
import {NavLink} from "react-router-dom";

type MainPageSectionItemPropsType = {
    id:string
    title:string
    rating:number
    price:number
    param:string
}

export const MainPageSectionItem  = (props:MainPageSectionItemPropsType) => {

    const requestParam = `/${props.param}/${props.id}`

    return <div className={s.flexItem}>
        <div className={s.itemCard}>
            <FaHeart className={s.heartIcon}/>
            <NavLink className={s.navlink} to={requestParam}>
                <img
                    className={s.itemImage}
                    src='src/assets/image.jpeg'
                    alt="image"/>
            </NavLink>
            <NavLink className={s.navlink} to={requestParam}> <h4 className={s.itemTitle}>{props.title}</h4>
            </NavLink>
            <div className={s.itemRating}>
                <FaStar style={{color:'gold',fontSize:'18px'}}/>
                <FaStar style={{color:'gold',fontSize:'18px'}}/>
                <FaStar style={{color:'gold',fontSize:'18px'}}/>
                <FaStar style={{color:'gold',fontSize:'18px'}}/>
                <FaStar style={{color:'gold',fontSize:'18px'}}/>
                {props.rating} (111 отзывов)
            </div>
            <div className={s.itemPrice}>От {props.price} рублей</div>
        </div>
    </div>
}