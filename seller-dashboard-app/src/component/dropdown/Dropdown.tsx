import React, { useState } from 'react'
import "./dropdown.css"
type DropdownType = {
    dropdownContent: string[]
    dropdownTitle: string
    onSelect: (value: string) => void
}
const Dropdown = ({ dropdownContent, dropdownTitle, onSelect }: DropdownType) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleItemClick = (item: string) => {
        if (item === 'Angielski') {
            item = 'English'
        } else if (item === 'Polski'){
            item = 'Polish'
        }
        onSelect(item);
        setIsOpen(false);
    };
    return (
        <div className='dropdown'>
            <div className="dropdown-title" onClick={toggleDropdown}>
                {dropdownTitle}
                <span className={`caret ${isOpen ? 'open' : ''}`}></span>
            </div>
            {isOpen && (
                <div className='dropdown-content'>
                    {dropdownContent.map((elem: string) => (
                        <div className="dropdown-element" key={elem} onClick={() => handleItemClick(elem)}>
                            {elem}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown