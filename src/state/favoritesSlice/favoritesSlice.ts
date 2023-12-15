import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateFavorite } from '../../utils/setters';

type InitStateType = {
  favoriteExcursions: Array<string>;
  favoriteTours: Array<string>;
};

const initialState: InitStateType = {
  favoriteExcursions: [],
  favoriteTours: []
};

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites(state, action: PayloadAction<any[]>) {
      console.log(action);
      state.favoriteExcursions = action.payload[0];
    }
  }
});

export const favoritesReducer = slice.reducer;

export const { setFavorites } = slice.actions;

export const addFavorite = createAsyncThunk<any, AddFavoriteArgTypes, any>(
  'favorites/addFavorite',
  async ({ id, field, newValue }, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
      const response = await updateFavorite(id, field, newValue);
      console.log(response);
    } catch (err) {
      return rejectWithValue(null);
    }
  }
);

type AddFavoriteArgTypes = {
  id: string;
  field: string;
  newValue: string;
};
