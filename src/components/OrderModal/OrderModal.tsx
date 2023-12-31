import s from './orderModal.module.scss';
import { ActionButton } from '../ActionButton/ActionButton.tsx';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { pickDate } from '../../state/orderSlice/order-reducer.ts';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Tooltip from '@mui/material/Tooltip';
import { getDates } from '../../state/datesSlice/datesSlice.ts';
import { useAppSelector } from '../../hooks/useAppSelector.ts';

type OrderModalPropsType = {
  startingPrice: string;
  peopleCount: string;
  duration: string;
  description: string;
};
export const OrderModal = ({ startingPrice, description }: OrderModalPropsType) => {
  const dispatch = useAppDispatch();
  const date = Date.now();
  const [value, setValue] = useState<Dayjs | null>(dayjs(date));
  const bookedDates = useAppSelector((state) => state.dates);
  const [bookedDayjsDates, setBookedDayjsDates] = useState<any>([]);
  //const bookedDayjsDates = bookedDates.map((date) => dayjs(date, 'DD.MM.YYYY'));
  console.log(bookedDayjsDates);

  useEffect(() => {
    dispatch(getDates({}));
  }, [dispatch]);

  useEffect(() => {
    setBookedDayjsDates(bookedDates.map((date) => dayjs(date, 'DD.MM.YYYY')));
  }, [bookedDates]);

  const handleButtonClick = () => {
    const day = value?.toDate().getDate();
    const month = value && value.toDate().getMonth() + 1;
    const year = value?.toDate().getFullYear();
    const orderDate = day + '.' + month + '.' + year;
    dispatch(pickDate({ date: orderDate }));
  };

  return (
    <div className={s.module}>
      <div className={s.moduleTitle}>Заказ экскурсии:</div>
      <div className={s.moduleDatePicker}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            shouldDisableDate={(date) =>
              bookedDayjsDates.some((bookedDate: any) => bookedDate.isSame(date, 'day'))
            }
            className={s.dateInput}
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </LocalizationProvider>
        <Tooltip title="Выберите дату">
          <HelpOutlineIcon className={s.datePickerInfo} />
        </Tooltip>
      </div>
      <div className={s.priceContainer}>
        <span>Итого:</span>
        <span>{startingPrice} рублей</span>
      </div>
      <ActionButton onClick={handleButtonClick} />
      <p className={s.description}>{description}</p>
    </div>
  );
};
