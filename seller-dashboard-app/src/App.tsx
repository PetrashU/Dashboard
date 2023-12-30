import React, { useEffect } from 'react';
import Login from './page/login/Login';
import { RouterProvider, createBrowserRouter, useNavigate, useSearchParams } from 'react-router-dom';
import Dashboard from './page/dashboard/Dashboard';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store/store';
import { reLogin } from './redux/reducer/authSlice';

function App() {
    const routes = createBrowserRouter([
      {
        path: "/",
        element : <Login/>
      },
      {
        path : "/home",
        element: <Dashboard/>
      }
    ])

    return (
        <RouterProvider router={routes}/>
    );
}

export default App;
