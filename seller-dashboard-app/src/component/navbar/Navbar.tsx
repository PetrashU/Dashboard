import React, { useState } from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown';

const Navbar = () => {
    const dropdownAcc: string[] = ["Account#1", "Account#2", "Account#3"]
    const dropdownLang: string[] = ["Ang", "Pol"]
    const nav = useNavigate();
    const handleLogout = () => {
        //logout
        nav('/')
    }
    return (
        <div className='navbar'>
            <div className='left-side-nav'>
                <p className='logged-user'>Logged user</p>
                <Dropdown 
                    dropdownContent={dropdownAcc}
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
                <button onClick={handleLogout}>
                    Wyloguj
                </button>
            </div>
        </div>
    )
}

export default Navbar