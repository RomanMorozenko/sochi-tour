import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ToursCollectionResponseType} from "../utils/loaders.ts";

// export type ExcursionItemType = {}
// export type ExcursionsStateType = []

const initialState:ToursCollectionResponseType = []



const slice = createSlice({
    name:'tours',
    initialState,
    reducers:{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setTours:(state:ExcursionsStateType,action:PayloadAction<{tours:[]}>)=> {
            return action.payload
        }
    }
})

export const toursReducer = slice.reducer;
export const {setTours} = slice.actions;