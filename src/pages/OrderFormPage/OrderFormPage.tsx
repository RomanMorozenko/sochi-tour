import s from './orderFormPage.module.css';
import { OrderForm } from "./OrderForm/OrderForm.tsx";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../app/store.ts";
import { useParams } from "react-router-dom";
import { ExcursionCollectionResponseItemType, ToursCollectionResponseItemType } from '../../utils/loaders.ts';

export const OrderFormPage = () => {
    const excursions = useSelector((state: AppRootStateType) => state.excursions);
    const tours = useSelector((state: AppRootStateType) => state.tours);
    const date = useSelector((state: AppRootStateType) => state.order.date);
    const { id, section } = useParams();
    let targetItem: ToursCollectionResponseItemType | ExcursionCollectionResponseItemType = {} as ToursCollectionResponseItemType;
    if (section === 'tours') {
        let item = tours.find((tour: ToursCollectionResponseItemType) => tour.id === id);
        if (item) targetItem = item
    } else {
        let item = excursions.find((excursion: ExcursionCollectionResponseItemType) => excursion.id === id);
        if (item) targetItem = item
    }
    console.log(targetItem)

    return <div className={s.formContainer}>
        {/* <h1 className={s.formTitle}>Заказ экскурсии</h1> */}
        <div className={s.formWrapper}>
            <OrderForm title={targetItem.title} />
        </div>
        <div className={s.info}>
            <div>{targetItem.title}</div>
            <div>Дата: {date}</div>
            <div>Стоимость:{targetItem.price}</div>
        </div>
    </div>
}



