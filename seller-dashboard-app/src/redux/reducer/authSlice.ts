import { createSlice } from "@reduxjs/toolkit";
import { loginService, logoutService, reLoginService } from "../service/loginService";
export type AuthType = {
    isAuthenticated : boolean,
    profiles : string[],
    user : string
}

const initAuth : AuthType= {
    isAuthenticated : false,
    profiles : ["Robert#1", "Janusz#2"],
    user : "John"
}

export const authSlice = createSlice({
    name : "auth",
    initialState : initAuth,
    reducers : {
        login : (state : AuthType) => {
            loginService(state)
        },
        reLogin : (state : AuthType) => {
            reLoginService(state);
        },
        logout : (state : AuthType) => {
            logoutService(state)
        }
    }
}) 

export const { login, reLogin, logout } = authSlice.actions
export default authSlice.reducer 