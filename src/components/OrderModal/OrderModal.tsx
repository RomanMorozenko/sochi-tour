import s from './orderModal.module.css';
import {ActionButton} from "../ActionButton/ActionButton.tsx";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {useState} from "react";
import dayjs, {Dayjs} from "dayjs";
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { pickDate } from '../../pages/order-reducer.ts';



type OrderModalPropsType = {
    rating:string
    startingPrice:string
    peopleCount:string
    duration:string
    description:string
}
export const OrderModal = (props:OrderModalPropsType) => {

    const dispatch = useAppDispatch()
    const date = Date.now()
    const [value, setValue] = useState<Dayjs | null>(dayjs(date));

    const handleButtonClick = () => {
        const day = value?.toDate().getDate();
        const month = value && value.toDate().getMonth()+1
        const year = value?.toDate().getFullYear()
        const orderDate = day + '.' + month  + '.' + year
        dispatch(pickDate({date:orderDate}))
    }

    return <div className={s.module}>
        <div className={s.text}>
            Стоимость экскурсии:
            <div className={s.price}>{props.startingPrice} рублей</div>
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                />
            </LocalizationProvider>
        <ActionButton onClick={handleButtonClick} />
        <p className={s.description}>
            {props.description}
        </p>
    </div>
}

