import s from './actionButton.module.css';
import {NavLink} from "react-router-dom";

type ActionButtonPropsType = {
    id?:string
    name?:string
    onClick:()=>void
    // type?:'"button" | "submit" | "reset" | undefined'
}

export const ActionButton = (props:ActionButtonPropsType) => {

    return <NavLink to={`orderform`}>
        <button type='submit' className={s.actionButton} onClick={props.onClick}>
            {props.name?props.name:'Заказать'}
        </button>
    </NavLink>
}