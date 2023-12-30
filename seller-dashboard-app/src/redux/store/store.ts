import { configureStore } from "@reduxjs/toolkit";
import  authReducer  from "../reducer/authSlice";
import darkModeReducer from "../reducer/darkModeSlice";
import languageReducer from "../reducer/languageSlice";


export const store = configureStore({
    reducer : {
         auth : authReducer,
         darkMode: darkModeReducer,
         language: languageReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch