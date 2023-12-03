import { TypedUseSelectorHook } from 'react-redux';
import { AppRootStateType } from '../app/store';
import { useSelector } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
