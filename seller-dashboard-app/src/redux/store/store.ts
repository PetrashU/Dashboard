import { configureStore } from "@reduxjs/toolkit";
import  authReducer  from "../reducer/authSlice";
import DarkModeReducer from "../reducer/darkModeSlice";


export const store = configureStore({
    reducer : {
         auth : authReducer,
         darkMode: DarkModeReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch