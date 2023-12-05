import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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

export const signInThunk = createAsyncThunk<any, any, any>('user/logIn', async (args, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, args.email, args.password);
    const user = userCredential.user;
    dispatch(setUser(user.email || ''));
    return true;
  } catch (err: any) {
    rejectWithValue(null);
    return false;
  }
});
