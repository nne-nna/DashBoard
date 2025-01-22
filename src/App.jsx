import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './routes/Layout'
import DashboardPage from './routes/dashboard/Page';

function App () {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {  
          path: 'analytics',
          element: <h1 className='title'>Analytics</h1>
        },
        {  
          path: 'reports',
          element: <h1 className='title'>Reports</h1>
        },
        {  
          path: 'customers',
          element: <h1 className='title'>Customers</h1>
        },
        {  
          path: 'new-customer',
          element: <h1 className='title'>New Customer</h1>
        },
        {  
          path: 'verfied-customer',
          element: <h1 className='title'>Verfied Customer</h1>
        },
        {  
          path: 'products',
          element: <h1 className='title'>Products</h1>
        },
        {  
          path: 'new-product',
          element: <h1 className='title'>New Product</h1>
        },
        {  
          path: 'inventory',
          element: <h1 className='title'>Inventory</h1>
        },
        {  
          path: 'settings',
          element: <h1 className='title'>Settings</h1>
        },
      ],
    },
  ]);

  return (
    <ThemeProvider storageKey='theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App