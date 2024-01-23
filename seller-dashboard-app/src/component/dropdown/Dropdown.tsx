import React, { useState } from 'react'
import "./dropdown.css"
type DropdownType = {
    dropdownContent: string[]
    dropdownTitle: string
    onHandleLangChange: (value: string) => void
    onHandleAccChange : (value: string) => void
    dropdownType : string
}
const Dropdown = ({ dropdownContent, dropdownTitle, onHandleLangChange, onHandleAccChange, dropdownType }: DropdownType) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleItemClick = (item: string) => {
        if(dropdownType === 'langChange') {
            if (item === 'Angielski') {
                item = 'English'
            } else if (item === 'Polski'){
                item = 'Polish'
            }
            onHandleLangChange(item);
            setIsOpen(false);
        } else if(dropdownType === 'accChange') {
            onHandleAccChange(item);
            setIsOpen(false);
        }

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