import { createSlice, isRejectedWithValue } from '@reduxjs/toolkit';

type InitStateType = {
  error: string;
};

const initialState: InitStateType = {
  error: ''
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(isRejectedWithValue, (state, action) => {
      const message = action.payload as string;
      if (message) state.error = message;
    });
  }
});

export const appReducer = slice.reducer;
