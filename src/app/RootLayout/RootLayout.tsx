import { Header } from '../../components/Header/Header.jsx';
import { Outlet } from 'react-router-dom';
import s from './rootLayout.module.scss';
import { getDataFromDB } from '../../utils/loaders.js';
import { useAppDispatch } from '../../hooks/useAppDispatch.js';
import { setTours } from '../../state/toursSlice/toursSlice.js';
import { setExcursions } from '../../state/excursionsSlice/excursionsSlice.js';
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector.js';
import { toast } from 'react-toastify';
import { Toast } from '../../components/Toast';

export const RootLayout = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.app.error);

  useEffect(() => {
    if (error) {
      toast(error);
    }
  }, [error]);

  useEffect(() => {
    getDataFromDB(dispatch, setTours, setExcursions);
  }, [dispatch]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flexGrow: '1' }}>
        {error && <Toast />}
        <Outlet />
      </main>
      <footer className={s.footer}>
        <div className="wrapper"></div>
      </footer>
    </div>
  );
};
