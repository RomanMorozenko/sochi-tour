import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

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
