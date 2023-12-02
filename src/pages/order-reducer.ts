import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    date:string,
    excursion:string,
    name:string,
    phone:string
}

const initialState:initialStateType = {
    date:'',
    excursion:'',
    name:'',
    phone:''
}

const slice = createSlice({
    name:'order',
    initialState,
    reducers:{
        pickDate(state,action:PayloadAction<{date:string}>){
            state.date = action.payload.date
        }
    }
})

export const {pickDate} = slice.actions;
export const orderReducer = slice.reducer;