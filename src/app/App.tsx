import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { RootLayout } from './RootLayout/RootLayout.tsx';
import { MainPage } from '../pages/MainPage/MainPage.tsx';
import { getDataFromDB } from '../utils/loaders.ts';
import { ExcursionItemPage } from '../pages/ItemPage/ExcursionItemPage/ExcursionItemPage.tsx';
import { OrderFormPage } from '../pages/OrderFormPage/OrderFormPage.tsx';
import { setExcursions } from '../pages/excursions-reducer.ts';
import { useAppDispatch } from '../hooks/useAppDispatch.ts';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { setTours } from '../pages/tours-reducer.ts';
import { TourItemPage } from '../pages/ItemPage/TourItemPage/TourItemPage.tsx';
import { MainPageContainer } from '../pages/MainPage/MainPageContainer.tsx';
import { SignUp } from '../pages/SignUp/SignUp.tsx';
import { SignIn } from '../pages/SignIn/SignIn.tsx';

function App() {
  const dispatch = useAppDispatch();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route element={<MainPage />}>
          <Route
            loader={() => getDataFromDB(dispatch, setTours, setExcursions)}
            path="/"
            element={<MainPageContainer />}
          />
          <Route path="/:section" element={<MainPageContainer />} />
        </Route>
        <Route
          loader={() => getDataFromDB(dispatch, setTours, setExcursions)}
          path="/excursions/:id"
          element={<ExcursionItemPage />}
        />
        <Route
          loader={() => getDataFromDB(dispatch, setTours, setExcursions)}
          path="/tours/:id"
          element={<TourItemPage />}
        />
        <Route path="/:section/:id/orderform" element={<OrderFormPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    )
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router} />
    </LocalizationProvider>
  );
}

export default App;
