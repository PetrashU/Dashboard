import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/reducer/authSlice';
import { RootState } from '../../redux/store/authStore';

const Navbar = () => {
    const { isAuthenticated, profiles, user } = useSelector((state : RootState) => {
        return state.auth;
    })
    const dispatchAuth = useDispatch();

    const nav = useNavigate();
    const dropdownLang: string[] = ["Ang", "Pol"]

    useEffect(() => {
        if(!isAuthenticated) {
            nav("/")
        }
    },[isAuthenticated])

    const handleLogout = () => {
        dispatchAuth(logout())
    }
    return (
        <div className='navbar'>
            <div className='left-side-nav'>
                <p className='logged-user'>{ user }</p>
                <Dropdown 
                    dropdownContent={profiles}
                    dropdownTitle='Account'
                />
                <Dropdown 
                    dropdownContent={dropdownLang}
                    dropdownTitle='Language'
                />
            </div>
            <div className='right-side-nav'>
                <div>
                    Ksiezyc/slonce
                </div>
                <button onClick={handleLogout} className='logout-button'>
                    Wyloguj
                </button>
            </div>
        </div>
    )
}

export default Navbar