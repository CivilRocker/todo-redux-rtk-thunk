import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"


export const rtkStore=configureStore({
    reducer:{
        todo:todoReducer
    }
})