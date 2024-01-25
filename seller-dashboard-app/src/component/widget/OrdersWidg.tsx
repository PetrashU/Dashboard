import { ordersStats } from '../../data/fakedata';
import './widgets.css';
import { useAppContext } from '../../AppContext';

const OrdersWidg = () => {

  const { language, isDarkModeOn } = useAppContext();

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
                <td>{language === 'English' ? order.category : translate(order.category)}</td>
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