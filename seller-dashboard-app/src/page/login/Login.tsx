import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./login.css"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/authStore';
import { login } from '../../redux/reducer/authSlice';
type userType = {
    userName : string,
    password : string
}
const initUser = {
    userName : '',
    password : ''
}

const Login = () => {
    const [user,setUser] = useState<userType>(initUser);
    const dispatchAuth = useDispatch();
    const isAuthenticated = useSelector((state : RootState) => {
        return state.auth.isAuthenticated
    })
    const nav = useNavigate();

    useEffect(() => {
        if(isAuthenticated) {
            nav('/home')
        }
    },[isAuthenticated])

    const handleOnSubmit = (e : React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const isValidated = validator()
        // walidacja w przyslosci i wyswietlanie error msg 
        dispatchAuth(login())
    }
    const validator = () => {
        if(!user) {
            return false
        }
        const isValidaPassword= user.password.length >= 5;
        const isValidaUserName = user.userName.length >= 5;

        return isValidaPassword && isValidaUserName
    }
    
    return (
        <div className='login-container'>
            <form className='form-container'>
                <h2>
                    Login
                </h2>
                <div className='form-group-user'>
                    <label id="user">
                        User
                    </label>
                    <input
                        id='user'
                        name='user'
                        type='text'
                        value={user.userName}
                        onChange={(e) => setUser({...user, userName : e.target.value})}
                    />
                </div>
                <div className='form-group-password'>
                    <label htmlFor='password'>
                        Password
                    </label>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                </div>
                <button onClick={handleOnSubmit}>
                    ZALOGUJ
                </button>
            </form>
        </div>
    )
}

export default Login