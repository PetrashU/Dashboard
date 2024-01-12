import Login from './page/login/Login';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Dashboard from './page/dashboard/Dashboard';
import ReviewsPage from './page/dataPages/reviewsPage';
import QualityAspectsPage from './page/dataPages/QualityAspectsPage';
import { HOME_PAGE_URL, LOGIN_PAGE_URL, SALES_PAGE_URL } from './data/urls';

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
        }]
      },
      {
      path : "/reviews",
      element: <ReviewsPage/>
      }
    ])

    return (
        <RouterProvider router={routes}/>
    );
}

export default App;
