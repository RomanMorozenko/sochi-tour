// import { useState } from 'react';
// import dayjs, { Dayjs } from 'dayjs';
// import { SubmitHandler, useForm } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
// import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
// import {DatePicker} from "@mui/x-date-pickers/DatePicker";
// import Box from "@mui/material/Box";
// import MenuItem from "@mui/material/MenuItem";
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
import s from './orderForm.module.css';

// interface IFormInput {
//   firstName: string;
//   phoneNumber: number;
//   additional: string | undefined;
//   excursionTitle: string | undefined;
// }

export const OrderForm = (props: { title: string }) => {
  // const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17'));
  // const [callTime, setCallTime] = useState('');

  // const schema = yup.object().shape({
  //   firstName: yup.string().required('Введите имя, пожалуйста'),
  //   phoneNumber: yup.number().required(),
  //   additional: yup.string(),
  //   excursionTitle: yup.string()
  // });

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors }
  // } = useForm<IFormInput>({
  //   resolver: yupResolver(schema)
  // });
  // const handleChange = (value: any) => {
  //   setCallTime(value);
  // };
  // const onSubmit: SubmitHandler<IFormInput> = (data) => {
  //   // console.log({ ...data, date: orderDate, time: callTime })
  // };

  const textFieldStyles = {
    width: '100%',
    marginTop: '5px'
  };

  // const orderDate = value?.toDate().getDate() + '.' + value?.toDate().getMonth() + '.' + value?.toDate().getFullYear()

  return (
    <>
      <h2>{props.title}</h2>
      <form style={{ width: '100%' }} onSubmit={() => ''}>
        <FormControl style={textFieldStyles}>
          {/* <TextField
            type="text"
            {...register('firstName')}
            style={textFieldStyles}
            label={errors.firstName ? errors.firstName.message : 'Имя'}
            variant="standard"
          />
          <TextField
            {...register('phoneNumber')}
            style={textFieldStyles}
            label="Телефон"
            variant="standard"
          />
          <TextField
            type="text"
            {...register('additional')}
            style={textFieldStyles}
            label="Дополнительно"
            variant="standard"
          /> */}
          {/* <h3>Выберите дату:</h3> */}
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                />
            </LocalizationProvider> */}
          {/* <Box sx={{minWidth: 120,marginTop:'5px'}}>
                <FormControl fullWidth>
                    <TextField
                        SelectProps={{
                            autoWidth: true
                        }}
                        select
                        id="callback-time"
                        value={callTime}
                        label="Время обратного звонка"
                        onChange={e => handleChange(e.target.value)}
                    >
                        <MenuItem value={'10:00-11:00'}>10:00-11:00</MenuItem>
                        <MenuItem value={'11:00-12:00'}>11:00-12:00</MenuItem>
                        <MenuItem value={'12:00-13:00'}>12:00-13:00</MenuItem>
                        <MenuItem value={'13:00-14:00'}>13:00-14:00</MenuItem>
                        <MenuItem value={'14:00-15:00'}>14:00-15:00</MenuItem>
                        <MenuItem value={'15:00-16:00'}>15:00-16:00</MenuItem>
                        <MenuItem value={'16:00-17:00'}>16:00-17:00</MenuItem>
                        <MenuItem value={'17:00...'}>17:00...</MenuItem>
                    </TextField>
                </FormControl>
            </Box> */}
          <button className={s.submitBtn} type="submit">
            Отправить
          </button>
        </FormControl>
      </form>
    </>
  );
};
