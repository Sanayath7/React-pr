import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from './Components/About/About.jsx';
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Root from './Components/Root/Root.jsx';
import Products from './Components/Products/Products.jsx';
import Login from './Components/Login/Login.jsx';
import Registration from './Components/Registration/Registration.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import Order from './Components/Order/Order.jsx';
import AddProducts from './Components/AddProducts/AddProducts.jsx';



const router = createBrowserRouter([

  {
    path: '/',
    Component: Root,
    children:
      [
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/contact',
          element: <Contact />
        },

        {
          path: '/products',
          loader: async () => {
            // return data from here
            return await fetch('http://localhost:3000/products')
          },
          Component: Products
        },

        {
          path: '/login',
          Component: Login
        },
        {
          path: 'register',
          Component: Registration
        },
        {
          path: "/products/:productId",
          loader: async ({ params }) => {
           return await fetch(`http://localhost:3000/products/${params.productId}`)
          },
          Component: ProductDetails,
        },

        {
          path:'/products/order/:orderId',
          loader: async ({ params }) => {
           return await fetch(`http://localhost:3000/products/${params.orderId}`)
          },
          Component: Order
        },
        {
          path:'/addProducts',
          Component:AddProducts
        }

      ]
  },





]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
