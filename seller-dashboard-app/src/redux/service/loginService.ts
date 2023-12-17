import { AuthType } from "../reducer/authSlice"


export const loginService = (state : AuthType) => {
    state.isAuthenticated = true;
    localStorage.setItem("user", JSON.stringify(state))
}
export const reLoginService = (state : AuthType) => {
    const user = localStorage.getItem("user")
    if(user) {
        state = JSON.parse(user)
    }
}
export const logoutService = (state : AuthType) => {
    state.isAuthenticated = false;
    localStorage.removeItem("user")
}