import React, { useState } from 'react';
import './dropdown.css';
import { useAppContext } from '../../AppContext';

type DropdownType = {
  dropdownContent: string[];
  dropdownTitle: string;
  onHandleLangChange: (value: string) => void;
  onHandleAccChange: (value: string) => void;
  dropdownType: string;
};

const Dropdown: React.FC<DropdownType> = ({ dropdownContent, dropdownTitle, onHandleLangChange, onHandleAccChange, dropdownType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const {isDarkModeOn} = useAppContext();

  const handleItemClick = (item: string) => {
    if (dropdownType === 'langChange') {
      const translatedLanguages: Record<string, string> = {
        Angielski: 'English',
        Polski: 'Polish',
      };

      onHandleLangChange(translatedLanguages[item] || item);
    } else if (dropdownType === 'accChange') {
      onHandleAccChange(item);
    }

    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-title" onClick={toggleDropdown}>
        {dropdownTitle}
        <span className={`caret ${isOpen ? 'open' : ''}`}></span>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {dropdownContent.map((elem: string) => (
            <div className={isDarkModeOn ? "dropdown-element-dark" : "dropdown-element"} key={elem} onClick={() => handleItemClick(elem)}>
              {elem}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
