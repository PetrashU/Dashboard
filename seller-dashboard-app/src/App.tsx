import Login from './page/login/Login';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Dashboard from './page/dashboard/Dashboard';
import ReviewsPage from './page/dataPages/reviewsPage';
import QualityAspectsPage from './page/dataPages/qualityAspectsPage';
import { CHART_PAGE_URL, HOME_PAGE_URL, LOGIN_PAGE_URL, SALES_PAGE_URL, REVIEWS_PAGE_URL, ORDERS_PAGE_URL } from './data/urls';
import ChartPage from './page/dataPages/ChartPage';
import OrdersPage from './page/dataPages/ordersPage';

function App() {
    const routes = createBrowserRouter([
      {
        path: LOGIN_PAGE_URL,
        element : <Login/>
      },
      {
        path : HOME_PAGE_URL,
        element: <Dashboard/>,
        children : [{
          path : SALES_PAGE_URL,
          element : <QualityAspectsPage/>
        },
        {
          path : CHART_PAGE_URL,
          element : <ChartPage/>
        },
        {
          path : REVIEWS_PAGE_URL,
          element : <ReviewsPage/>
        },
        {
          path : ORDERS_PAGE_URL,
          element : <OrdersPage/>
        }
      ]
      },
     
    ])

    return (
        <RouterProvider router={routes}/>
    );
}

export default App;
