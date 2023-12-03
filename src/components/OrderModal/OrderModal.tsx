import s from './orderModal.module.scss';
import { ActionButton } from '../ActionButton/ActionButton.tsx';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { pickDate } from '../../pages/order-reducer.ts';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Tooltip from '@mui/material/Tooltip';

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
