import { ordersStats } from '../../data/fakedata';
import './widgets.css';
import { useAppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';

const OrdersWidg = () => {

  const { language, isDarkModeOn } = useAppContext();
  const navigate = useNavigate();

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

  const handleCategoryClick = (category: string) => {
    navigate(`/home/orders?category=${category}`);
  };

  return (
    <div className="orders-widget">
      <div className='widget-title'>
        {language === 'English' ? ' Orders' : 'Zamówienia'}
      </div>
      <div className='orders-table-container'>
        <table className={isDarkModeOn ? "orders-table-dark" : "orders-table"}>
          <thead>
            <tr>
              <th>{language === 'English' ? 'CATEGORY' : 'KATEGORIA'}</th>
              <th>{language === 'English' ? 'NUMBER OF ORDERS' : 'LICZBA ZAMÓWIEŃ'}</th>
            </tr>
          </thead>
          <tbody>
            {ordersStats.map(order => (
              <tr key={order.id}>
                <td>
                  <a href="#" onClick={() => handleCategoryClick(order.category)} style = {{color: 'inherit'}}>
                    {language === 'English' ? order.category : translate(order.category)}
                  </a>
                </td>
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