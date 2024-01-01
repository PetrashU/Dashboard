import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import './widgets.css';

const OrdersWidg = () => {

  const language = useSelector((state: RootState) => {
    return state.language.currentLanguage;
  })

  const ordersData = [
    { id: 1, category: "Unpaid", count: 10 },
    { id: 2, category: "Not Mailed", count: 5 },
    { id: 3, category: "Returned", count: 3 },
  ];

  return (
    <div className="orders-widget">
      <div className='widget-title'>
        {language === 'English' ? ' Orders' : 'Zamówienia'}
      </div>
      <div className='orders-table-container'>
        <table className='orders-table'>
          <thead>
            <tr>
              <th>{language === 'English' ? 'CATEGORIE' : 'KATEGORIA'}</th>
              <th>{language === 'English' ? 'NUMBER OF ORDERS' : 'LICZBA ZAMÓWIEŃ'}</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map(order => (
              <tr key={order.id}>
                <td>{order.category}</td>
                <td>{order.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersWidg