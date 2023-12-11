import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider
} from 'react-router-dom';
import { RootLayout } from './RootLayout/RootLayout';
import { MainPage } from '../pages/MainPage/MainPage';
import { MainPageContainer } from '../pages/MainPage/MainPageContainer';
import { ExcursionItemPage } from '../pages/ItemPage/ExcursionItemPage/ExcursionItemPage';
import { TourItemPage } from '../pages/ItemPage/TourItemPage/TourItemPage';
import { OrderFormPage } from '../pages/OrderFormPage/OrderFormPage';
import { SignUp } from '../pages/SignUp';
import { SignIn } from '../pages/SignIn';
import { getDataFromDB } from '../utils/loaders';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { setTours } from '../pages/tours-reducer';
import { setExcursions } from '../pages/excursions-reducer';
import { ProfilePage } from '../pages/Profile/profile';

export const WithRouter = () => {
  const dispatch = useAppDispatch();

  const Routes: RouteObject[] = [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <MainPage />,
          children: [
            {
              path: '/',
              element: <MainPageContainer />
            },
            {
              path: '/:section',
              element: <MainPageContainer />
            }
          ]
        },
        {
          path: 'excursions/:id',
          element: <ExcursionItemPage />,
          loader: () => getDataFromDB(dispatch, setTours, setExcursions)
        },
        {
          path: '/tours/:id',
          element: <TourItemPage />,
          loader: () => getDataFromDB(dispatch, setTours, setExcursions)
        },
        {
          path: '/:section/:id/orderform',
          element: <OrderFormPage />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path: '/signin',
          element: <SignIn />
        },
        {
          path: '/profile',
          element: <PrivateRoutes />,
          children: [
            {
              path: '',
              element: <ProfilePage />
            }
          ]
        }
      ]
    }
  ];

  const router = createBrowserRouter([
    ...Routes,
    {
      path: '*',
      element: <div>error</div>
    }
  ]);

  function PrivateRoutes() {
    //   if (isLoading)
    //     return (
    //       <Loader
    //         style={{
    //           height: '95vh'
    //         }}
    //       />
    //     );

    const isAuthenticated = true;

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  }

  return <RouterProvider router={router} />;
};
