import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./login.css"

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
    const nav = useNavigate();

    const handleOnSubmit = (e : React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        //autentykacja tutaj
        nav('/home')
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