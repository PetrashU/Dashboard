import React from 'react';
import underConstructionImage from './page-under-construction.jpg';
import { useAppContext } from '../../../AppContext';

const UnderConstruction = () => {
    const {language} = useAppContext();
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>
                {language === 'English' ? "This page is under construction. Coming soon!" : "Budujemy tę stronę. Wkrótce się pojawi!"}
                
                </h2>
            <img src={underConstructionImage} alt="Under Construction" style={{ maxWidth: '50%', maxHeight: '50%' }} />
        </div>
    );
};

export default UnderConstruction;
