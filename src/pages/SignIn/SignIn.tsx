import { z } from 'zod';
import s from '../SignUp/signup.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { signInThunk } from '../../state/userSlice/userSlice';

export const SignIn = () => {
  return (
    <div className={s.formContainer}>
      <h1 className={s.formTitle}>Новый пользователь:</h1>
      <SignInForm />
    </div>
  );
};

const loginSchema = z.object({
  email: z.string().email('Введите правильный Email'),
  password: z.string().min(6, 'Неверный пароль')
});

type FormValues = z.infer<typeof loginSchema>;

export const SignInForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = async (data: Omit<FormValues, 'confirmPassword'>) => {
    const res = await dispatch(signInThunk({ email: data.email, password: data.password }));
    if (!res.payload) {
      reset();
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className={s.signupForm}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <TextField label="Email" variant="outlined" {...field} />
            {errors.email && <p className={s.errorText}>{errors.email.message}</p>}
          </>
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <TextField label="Пароль" variant="outlined" {...field} />
            {errors.password && <p className={s.errorText}>{errors.password.message}</p>}
          </>
        )}
      />
      <Button variant="contained" type="submit">
        Войти
      </Button>
    </form>
  );
};
