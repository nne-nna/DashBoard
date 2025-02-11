import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './routes/Layout'
import DashboardPage from './routes/dashboard/Page';
import Analytics from './routes/Analytics';
import ReportsPage from './routes/ReportsPage';
import CustomersPage from './routes/CustomersPage';
import NewCustomersPage from './routes/NewCustomersPage';
import VerifiedCustomersPage from './routes/VerifiedCustomersPage';
import ProductsPage from './routes/ProductsPage';
import NewProductPage from './routes/NewProductPage';
import InventoryPage from './routes/InventoryPage';
import { Settings } from 'lucide-react';
import SettingsPage from './routes/SettingsPage';

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
          element: <Analytics />,
        },
        {  
          path: 'reports',
          element: <ReportsPage />,
        },
        {  
          path: 'customers',
          element: <CustomersPage />,
        },
        {  
          path: 'new-customer',
          element: <NewCustomersPage />,
        },
        {  
          path: 'verified-customers',
          element: <VerifiedCustomersPage />,
        },
        {  
          path: 'products',
          element: <ProductsPage />,
        },
        {  
          path: 'new-product',
          element: <NewProductPage />,
        },
        {  
          path: 'inventory',
          element: <InventoryPage />,
        },
        {  
          path: 'settings',
          element: < SettingsPage />
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