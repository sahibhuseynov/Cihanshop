import React, { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import "./sass/index.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import loadable from '@loadable/component'
import Home from "./pages/home/Home";
import { useSelector } from "react-redux";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Register from './pages/register/Register';
import ErrorPage from './pages/error/ErrorPage';
import ProductDetail from "./pages/productDetail/ProductDetail";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
const  Contact = React.lazy(() => import( './pages/contact/Contact'));
const  Product = React.lazy(() => import('./pages/product/Product') ) 
const About = loadable(() => import('./pages/about/About'));
/** 3 / 45 requests
2.7 MB / 3.4 MB transferred
11.5 MB / 12.2 MB resources */
const Layout = () => {

  const mode = useSelector((state) => state.dark.darkmode)
  
  return (
   <div className={`theme-${mode ? 'dark': 'light'} ` }>
      <ScrollToTop>
        <Navbar />
        <Outlet />
        <Footer />
      </ScrollToTop>
      
   </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      
      {
        path:'/cart',
        element: <Cart />
      },
      {
        path:'/signin',
        element:<Login />
      },
      {
        path:'/register',
        element:<Register />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/product',
        element:<Product />
      },
      {
        path:'/product/:id',
        element:<ProductDetail />
      },
      {
        path:'*',
        element:<ErrorPage />
      }

    ]
  },
]);

function App() {

  
  return (
    <div >
      
        <Suspense fallback={<p>Loading...</p>}><RouterProvider router={router} /></Suspense>
        
    </div>
  );
}

export default App;
