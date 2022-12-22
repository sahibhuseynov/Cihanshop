import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import "./sass/index.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import { useSelector } from "react-redux";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Register from './pages/register/Register';
import About from "./pages/about/About";
import Contact from './pages/contact/Contact';
import Product from './pages/product/Product';
import ProductDetail from "./pages/productDetail/ProductDetail";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
const Layout = () => {

  const mode = useSelector((state) => state.dark.darkmode)
  
  return (
   <div className={`theme-${mode ? 'dark': 'light'}`}>
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
        path:'/login',
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
      }

    ]
  },
]);

function App() {

  
  return (
    <div >
      
        <RouterProvider router={router} />
        
    </div>
  );
}

export default App;
