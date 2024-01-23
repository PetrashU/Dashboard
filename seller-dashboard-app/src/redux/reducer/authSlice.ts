import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginService, logoutService, reLoginService } from "../service/loginService";

export type AuthType = {
    isAuthenticated : boolean,
    profiles : string[],
    user : string
}

const initAuth : AuthType= {
    isAuthenticated : false,
    profiles : ["Robert#1", "Janusz#2"],
    user : "Robert#1"
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
        },
        changeAcc : (state : AuthType, action : PayloadAction<string>) => {
            state.user = action.payload
        }
    }
}) 

export const { login, reLogin, logout, changeAcc } = authSlice.actions
export default authSlice.reducer 