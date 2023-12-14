import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./login.css"

const Login = () => {
    const [user,setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // const nav = useNavigate();

    const handleOnSubmit = () => {
        //autentykacja tutaj
        // nav('/home')
    }
    
    return (
        <div className='login-container'>
             Login
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
            <label id='password'>
                Password
            </label>
            <input
                id='password'
                name='password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleOnSubmit}/>
        </div>
    )
}

export default Login