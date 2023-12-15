import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { excursionsReducer } from '../state/excursionsSlice/excursionsSlice.ts';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import { toursReducer } from '../state/toursSlice/toursSlice.ts';
import { orderReducer } from '../state/orderSlice/order-reducer.ts';
import { userReducer } from '../state/userSlice/userSlice.ts';
import { appReducer } from '../state/appSlice/appSlice.ts';
import { datesReducer } from '../state/datesSlice/datesSlice.ts';
import { favoritesReducer } from '../state/favoritesSlice/favoritesSlice.ts';

const rootReducer = combineReducers({
  app: appReducer,
  excursions: excursionsReducer,
  tours: toursReducer,
  order: orderReducer,
  user: userReducer,
  dates: datesReducer,
  favorites: favoritesReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)
});

export type AppRootStateType = ReturnType<typeof store.getState> & { [key: string]: any };

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = store;
