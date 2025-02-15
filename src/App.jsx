import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { NotificationProvider } from './contexts/NotificationContext'
import { SearchProvider } from './contexts/SearchContext'
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
import SettingsPage from './routes/SettingsPage';
import ProfilePage from './routes/ProfilePage'

function App() {
  
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
          element: <SettingsPage />
        },
        {
          path: 'profile',
          element: <ProfilePage />
        }
      ],
    },
  ]);

  return (
    <ThemeProvider storageKey='theme'>
      <NotificationProvider>
        <SearchProvider>
          <RouterProvider router={router} />
        </SearchProvider>
      </NotificationProvider>
    </ThemeProvider>
  )
}

export default App