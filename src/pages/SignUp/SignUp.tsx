import { z } from 'zod';
import s from './signup.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  return (
    <div className={s.formContainer}>
      <h1 className={s.formTitle}>Новый пользователь:</h1>
      <RegistrationForm />
    </div>
  );
};

const loginSchema = z
  .object({
    email: z.string().email('Введите правильный email'),
    password: z.string().min(6, 'Пароль должен быть длиннее 6 символов'),
    confirmPassword: z.string()
  })
  .refine(
    (data: { password: string; confirmPassword: string }) => data.password === data.confirmPassword,
    {
      message: 'Пароли не совпадают',
      path: ['confirmPassword']
    }
  );

type FormValues = z.infer<typeof loginSchema>;

export const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const navigate = useNavigate();

  const handleSubmitForm = async (data: Omit<FormValues, 'confirmPassword'>) => {
    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      console.log(user);
      reset();
      navigate('/');
    } catch (err: any) {
      const errorMessage = err.message;
      console.log(errorMessage);
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
      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <TextField label="Подтвердите пароль" variant="outlined" {...field} />
            {errors.confirmPassword && (
              <p className={s.errorText}>{errors.confirmPassword.message}</p>
            )}
          </>
        )}
      />
      <Button variant="contained" type="submit">
        Отправить
      </Button>
    </form>
  );
};
