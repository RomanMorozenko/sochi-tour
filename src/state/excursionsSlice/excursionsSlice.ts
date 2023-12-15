import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExcursionsCollectionResponseType } from '../../utils/loaders.ts';

// export type ExcursionItemType = {}
// export type ExcursionsStateType = []

const initialState: ExcursionsCollectionResponseType = [];

const slice = createSlice({
  name: 'excursions',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setExcursions: (state: ExcursionsStateType, action: PayloadAction<{ excursions: [] }>) => {
      return action.payload;
    }
  }
});

export const excursionsReducer = slice.reducer;
export const { setExcursions } = slice.actions;
