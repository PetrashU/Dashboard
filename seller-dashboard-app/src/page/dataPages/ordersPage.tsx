import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../AppContext';
import UnderConstruction from './component/UnderConstruction';

const OrdersPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') || 'UNPAID';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const { language } = useAppContext();

  const translate = (category: string) => {
    switch (category) {
      case 'UNPAID':
        return 'NIEOPŁACONE';
      case 'NOT MAILED':
        return 'NIEWYSŁANE';
      case 'RETURNED':
        return 'ZWRÓCONE';
      default:
        return category;
    }
  };

  useEffect(() => {
    navigate(`?category=${selectedCategory}`, { replace: true });
  }, [selectedCategory, navigate]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const categories = ['UNPAID', 'NOT MAILED', 'RETURNED'];

  return (
    <div>
      <h1>{language === 'English' ? 'Orders' : 'Zamówienia'}</h1>
      <div className="categories-menu">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {language === 'English' ? category : translate(category)}
          </button>
        ))}
      </div>
      <UnderConstruction />
    </div>
  );
};

export default OrdersPage;
