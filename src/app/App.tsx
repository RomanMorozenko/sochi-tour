import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {RootLayout} from "./RootLayout/RootLayout.tsx";
import {MainPage} from "../pages/MainPage/MainPage.tsx";
import {MainPageSideSectionContainer} from "../pages/MainPage/MainPageSection/MainPageSideSectionContainer.tsx";
import {getDataFromDB} from '../utils/loaders.ts';
import {ExcursionItemPage} from "../pages/ItemPage/ExcursionItemPage/ExcursionItemPage.tsx";
import {OrderFormPage} from "../pages/OrderFormPage/OrderFormPage.tsx";
import {setExcursions} from "../pages/excursions-reducer.ts";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {setTours} from "../pages/tours-reducer.ts";
import {MainPageMainSectionContainer} from "../pages/MainPage/MainPageSection/MainPageMainSectionContainer.tsx";
import {TourItemPage} from "../pages/ItemPage/TourItemPage/TourItemPage.tsx";


function App() {

    const dispatch = useAppDispatch()

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<RootLayout/>}>
                <Route element={<MainPage/>}>
                    <Route
                        loader={() => getDataFromDB(dispatch,setTours, setExcursions)}
                        path='/'
                        element={<MainPageMainSectionContainer title='Главная'/>}
                    />
                    <Route
                        // loader={() => getDataFromDB(dispatch, setTours)}
                        path='/:section'
                        element={<MainPageSideSectionContainer/>}
                    />
                    {/* <Route
                        // loader={() => getDataFromDB(dispatch, setExcursions)}
                        path='/:section'
                        element={<MainPageSideSectionContainer title='Экскурсии'/>}
                    />
                    <Route
                        // loader={() => getDataFromDB(dispatch, setExcursions)}
                        path='/:section'
                        element={<MainPageSideSectionContainer title='Букинг'/>}
                    /> */}
                </Route>

                <Route
                    loader={() => getDataFromDB(dispatch,setTours, setExcursions)}
                    path='/excursions/:id'
                    element={<ExcursionItemPage/>}
                />
                <Route
                    loader={() => getDataFromDB(dispatch,setTours, setExcursions)}
                    path='/tours/:id'
                    element={<TourItemPage/>}
                />
                <Route
                    // loader={() => getDataFromDB(dispatch, setExcursions)}
                    path='/:section/:id/orderform'
                    element={<OrderFormPage/>}
                />

                {/*<Route path='registration' element={<Registration/>}/>*/}
                {/*<Route path='login' element={<Login/>}/>*/}
            </Route>
        )
    )

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <RouterProvider router={router}/>
        </LocalizationProvider>
    )
}

export default App

