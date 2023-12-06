import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthArgsType } from './userSlice.types';
import { FirebaseError } from '@firebase/util';

type UserType = {
  email: string;
};

const initialState: UserType = {
  email: ''
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    clearUser(state) {
      state.email = '';
    }
  }
});

export const { setUser, clearUser } = slice.actions;

export const userReducer = slice.reducer;

export const signInThunk = createAsyncThunk<any, AuthArgsType, any>(
  'user/logIn',
  async ({ email, password }, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
      const auth = getAuth();
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      const user = response.user;
      dispatch(setUser(user.email || ''));
    } catch (err: any) {
      if (err instanceof FirebaseError) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue('Произошла ошибкаб попробуйте позже');
    }
  }
);

export const signUpThunk = createAsyncThunk<any, AuthArgsType, any>(
  'user/signUp',
  async ({ email, password }, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
      const auth = getAuth();
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      const user = response.user;
      dispatch(setUser(user.email || ''));
    } catch (err: any) {
      if (err instanceof FirebaseError) {
        console.log(err.message);
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue('Произошла ошибка попробуйте позже');
      }
    }
  }
);
