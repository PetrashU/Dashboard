import React, { useState } from 'react';
import { productSalesData, ProductSale } from '../../data/fakedata';
import './widgets.css';
import { useAppContext } from '../../AppContext';

const OffersRankWidget = () => {
  const [filter, setFilter] = useState('Most Popular');

  const {language, isDarkModeOn} = useAppContext();

  const sortedData = [...productSalesData].sort((a, b) => {
    if (filter === 'Most Popular') {
      return b.salesNumber - a.salesNumber;
    } else {
      return a.salesNumber - b.salesNumber;
    }
  }).slice(0, 4);

  return (
    <div className="offers-rank-widget">
      <div className='widget-title'>
      {language === 'English' ? ' Offers ranking' : 'Ranking ofert'}
      </div>
      <div className={isDarkModeOn ? "filter-buttons-dark" : "filter-buttons"}>
        <button onClick={() => setFilter('Most Popular')} className={filter === 'Most Popular' ? 'active' : ''}>
        {language === 'English' ? '  MOST POPULAR' : 'NAJCZĘŚCIEJ KUPOWANE'}
         
        </button>
        <button onClick={() => setFilter('Unpopular')} className={filter === 'Unpopular' ? 'active' : ''}>
        {language === 'English' ? ( <>LEAST <br/>POPULAR</>) : 'NAJRZADZIEJ KUPOWANE'}
        </button>
      </div>
      <div className='offers-table-container'>
        <table className={isDarkModeOn ? "offers-table-dark" : "offers-table"}>
          <thead>
            <tr>
              <th>{language === 'English' ? 'NAME' : 'NAZWA'}</th>
              <th>{language === 'English' ? 'SALES' : 'SPRZEDANE'}</th>
              <th>{language === 'English' ? 'REVENUE [PLN]' : 'OBRÓT [PLN]'}</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((product: ProductSale) => (
              <tr key={product.id}>
                <td>{product.productName}</td>
                <td>{product.salesNumber}</td>
                <td>{product.revenue} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OffersRankWidget;
