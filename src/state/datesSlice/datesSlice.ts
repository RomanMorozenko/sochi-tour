import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FirebaseError } from 'firebase/app';
import { excursionsDatesLoader } from '../../utils/loaders';

type initialStateType = string[];

const initialState: initialStateType = [];

const slice = createSlice({
  name: 'dates',
  initialState,
  reducers: {
    setDates(_, action: PayloadAction<string[]>) {
      return action.payload;
    }
  }
});

export const datesReducer = slice.reducer;

const { setDates } = slice.actions;

export const getDates = createAsyncThunk<any, any, any>('dates/getDates', async (_, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    const dates = await excursionsDatesLoader();
    dispatch(setDates(dates));
  } catch (err: any) {
    if (err instanceof FirebaseError) {
      return rejectWithValue('Произошла ошибка попробуйте позже');
    }
    return rejectWithValue('Произошла ошибка попробуйте позже');
  }
});
