import { z } from 'zod';
import s from './signup.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

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
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(3, 'Password mus be at least 3 characters'),
    confirmPassword: z.string().min(3, 'Password mus be at least 3 characters')
  })
  .refine(
    (data: { password: string; confirmPassword: string }) => data.password === data.confirmPassword,
    {
      message: "Passwords don't match",
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

  const handleSubmitForm = async (data: Omit<FormValues, 'confirmPassword'>) => {
    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      console.log(user);
      reset();
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
      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField label="Подтвердите пароль" variant="outlined" {...field} />
        )}
      />
      <Button variant="contained" type="submit">
        Отправить
      </Button>
    </form>
  );
};
