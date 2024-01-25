import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./login.css"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { login } from '../../redux/reducer/authSlice';
import { useAppContext } from '../../AppContext';
type userType = {
    userName: string,
    password: string
}
const initUser = {
    userName: '',
    password: ''
}

const Login = () => {
    const { language, isDarkModeOn } = useAppContext();

    const [user, setUser] = useState<userType>(initUser);
    const dispatchAuth = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => {
        return state.auth.isAuthenticated
    })
    const nav = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            nav('/home')
        }
    }, [isAuthenticated, nav])

    const handleOnSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatchAuth(login())
    }

    return (
        <div className='login-container'>
            <form className='form-container'>
                <h2>
                    Login
                </h2>
                <div className='form-group-user'>
                    <label id="user">
                        {language === 'English' ? 'User' : 'Użytkownik'}
                    </label>
                    <input
                        id='user'
                        name='user'
                        type='text'
                        value={user.userName}
                        onChange={(e) => setUser({ ...user, userName: e.target.value })}
                    />
                </div>
                <div className='form-group-password'>
                    <label htmlFor='password'>
                        {language === 'English' ? 'Password' : 'Hasło'}
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
                    {language === 'English' ? 'LOGIN' : 'ZALOGUJ'}
                </button>
            </form>
        </div>
    )
}

export default Login