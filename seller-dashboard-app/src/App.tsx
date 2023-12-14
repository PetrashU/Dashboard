import React from 'react';
import Login from './page/login/Login';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './page/dashboard/Dashboard';

function App() {
    const router = createBrowserRouter([
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
      <BrowserRouter>
        <Login/>
      </BrowserRouter>
    );
}

export default App;
