import { useAppContext } from '../../AppContext';

const OrdersPage = () => {
  const {language, isDarkModeOn} = useAppContext();
  return (
    <div>OrdersPage</div>
  )
}

export default OrdersPage