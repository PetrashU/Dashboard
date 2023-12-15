import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./login.css"

const Login = () => {
    const [user,setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const nav = useNavigate();

    const handleOnSubmit = (e : any) => {
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
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleOnSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Login