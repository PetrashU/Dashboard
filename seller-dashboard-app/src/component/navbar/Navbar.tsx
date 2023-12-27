import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/reducer/authSlice';
import { RootState } from '../../redux/store/store';
import { toggleDarkMode } from '../../redux/reducer/darkModeSlice';

const Navbar = () => {
    const { isAuthenticated, profiles, user } = useSelector((state: RootState) => {
        return state.auth;
    })
    const { isDarkModeOn } = useSelector((state: RootState) => {
        return state.darkMode;
    })
    const dispatch = useDispatch();

    const nav = useNavigate();
    const dropdownLang: string[] = ["English", "Polish"]

    useEffect(() => {
        if (!isAuthenticated) {
            nav("/")
        }
    }, [isAuthenticated])

    const handleLogout = () => {
        dispatch(logout())
    }

    const handleModeChange = () => {
        dispatch(toggleDarkMode());
    }

    return (
        <div className='navbar'>
            <div className='left-side-nav'>
                <p className='logged-user'>{user}</p>
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
                <button className="mode-toggle" onClick={handleModeChange}>
                    {isDarkModeOn ? '☽' : '☼'}
                </button>
                <button onClick={handleLogout} className='logout-button'>
                    Log out
                </button>
            </div>
        </div>
    )
}

export default Navbar