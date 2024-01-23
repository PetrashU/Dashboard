import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { changeAcc, logout } from '../../redux/reducer/authSlice';
import { RootState } from '../../redux/store/store';
import { toggleDarkMode } from '../../redux/reducer/darkModeSlice';
import { changeLanguage } from '../../redux/reducer/languageSlice';

const Navbar = () => {
    const { isAuthenticated, profiles, user } = useSelector((state: RootState) => {
        return state.auth;
    })
    const { isDarkModeOn } = useSelector((state: RootState) => {
        return state.darkMode;
    })
    const language = useSelector((state: RootState) => {
        return state.language.currentLanguage;
    })
    const dispatch = useDispatch();

    const nav = useNavigate();
    const dropdownLang: Record<string,string[]> = {
        English: ['Polish', 'English'],
        Polish: ['Angielski', 'Polski'],
    };

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

    const handleLanguageChange = (newlanguage:string) => {
        dispatch(changeLanguage(newlanguage));
    }
    const handleAccountChange = (acc : string) => {
        dispatch(changeAcc(acc))
    }

    return (
        <div className='navbar'>
            <div className='left-side-nav'>
                <p className='logged-user'>{user}</p>
                <Dropdown
                    dropdownContent={profiles}
                    dropdownTitle={language === 'English' ? 'Account' : 'Konto'}
                    onHandleLangChange={handleLanguageChange}
                    onHandleAccChange={handleAccountChange}
                    dropdownType="accChange"
                />
                <Dropdown
                    dropdownContent={dropdownLang[language]}
                    dropdownTitle={language === 'English' ? 'Language' : 'Język'}
                    onHandleLangChange={handleLanguageChange}
                    onHandleAccChange={handleAccountChange}
                    dropdownType="langChange"
                />
            </div>
            <div className='right-side-nav'>
                <button className="mode-toggle" onClick={handleModeChange}>
                    {isDarkModeOn ? '☽' : '☼'}
                </button>
                <button onClick={handleLogout} className='logout-button'>
                    {language === 'English' ? 'Log out' : 'Wyloguj'}
                </button>
            </div>
        </div>
    )
}

export default Navbar