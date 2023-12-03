import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { excursionsReducer } from '../pages/excursions-reducer.ts';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import { toursReducer } from '../pages/tours-reducer.ts';
import { orderReducer } from '../pages/order-reducer.ts';
import { userReducer } from '../state/userSlice.ts';

const rootReducer = combineReducers({
  excursions: excursionsReducer,
  tours: toursReducer,
  order: orderReducer,
  user: userReducer
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
