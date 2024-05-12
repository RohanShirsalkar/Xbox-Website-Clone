import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import "./Utility.scss"
import SigninPage from './components/SigninPage/SigninPage.jsx'
import Homepage from './components/Homepage/Homepage.jsx'
import AllProductsPage from './components/AllProductsPage/AllProductsPage'
import ProductPage from './components/ProductPage/ProductPage'
import CartPage from './components/CartPage/CartPage'
import OrderSummaryPage from './components/OrderSummaryPage/OrderSummaryPage.jsx'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/signin",
        element: <SigninPage />
      },
      {
        path: "/register",
        element: <SigninPage />
      },
      {
        path: "/all-products",
        element: <AllProductsPage />
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/summary/:order_id",
        element: <OrderSummaryPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
