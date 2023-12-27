import React, { useState } from 'react'
import "./dropdown.css"
type DropdownType = {
    dropdownContent : string[]
    dropdownTitle : string
}
const Dropdown = ({ dropdownContent, dropdownTitle }: DropdownType) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    return (
        <div className='dropdown'>
            <div className="dropdown-title" onClick={toggleDropdown}>
                {dropdownTitle}
                <span className={`caret ${isOpen ? 'open' : ''}`}></span>
            </div>
            { isOpen && (
                <div className='dropdown-content'>  
                    {dropdownContent.map((elem: string) => (
                        <div className="dropdown-element" key={elem}>
                            {elem}
                        </div>                                 
                    ))}
            </div>
            )}
        </div>
    )
}

export default Dropdown