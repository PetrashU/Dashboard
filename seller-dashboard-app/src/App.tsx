import React from 'react';
import Login from './page/login/Login';
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './page/dashboard/Dashboard';

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
