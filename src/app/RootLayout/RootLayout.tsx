import {Header} from "../../components/Header/Header.jsx";
import {Outlet} from "react-router-dom";
import s from './rootLayout.module.css'
import { getDataFromDB } from "../../utils/loaders.js";
import { useAppDispatch } from "../../hooks/useAppDispatch.js";
import {setTours} from "../../pages/tours-reducer.js";
import {setExcursions} from "../../pages/excursions-reducer.js";
import { useEffect } from "react";


export const RootLayout = () => {
    const dispatch = useAppDispatch()

    useEffect(()=>{
        getDataFromDB(dispatch, setTours, setExcursions)
    },[])
    
    return (
        <div style={{display:'flex',flexDirection:'column',minHeight:'100vh'}}>
            <Header />
            <main style={{flexGrow:'1'}}>
                <Outlet/>
            </main>
            <footer className={s.footer}>
                <div className='wrapper'>

                </div>
            </footer>
        </div>
    )
}