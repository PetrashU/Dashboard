import React from 'react'
import "./dropdown.css"
type DropdownType = {
    dropdownContent : string[]
    dropdownTitle : string
}
const Dropdown = ({ dropdownContent, dropdownTitle }: DropdownType) => {

    return (
        <div className='dropdown'>
            { dropdownTitle }            
            <div className='dropdown-content'>  
                { 
                    dropdownContent.map((elem : string) => (
                        <div key={elem}>
                            { elem }
                        </div>                                 
                    ))
                }
            </div>
        </div>
    )
}

export default Dropdown