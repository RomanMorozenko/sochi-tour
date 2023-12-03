import { z } from 'zod';
import s from '../SignUp/signup.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setUser } from '../../state/userSlice';

export const SignIn = () => {
  return (
    <div className={s.formContainer}>
      <h1 className={s.formTitle}>Новый пользователь:</h1>
      <SignInForm />
    </div>
  );
};

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Wrong password')
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
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      dispatch(setUser(user.email || ''));
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
        render={({ field }) => <TextField label="Email" variant="outlined" {...field} />}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField label="Пароль" variant="outlined" {...field} />}
      />
      <Button variant="contained" type="submit">
        Войти
      </Button>
    </form>
  );
};
