import {AiOutlineHome,AiOutlineShopping,AiOutlineInfoCircle,AiFillShop, AiOutlineUser} from "react-icons/ai";
import {MdOutlineContactSupport} from 'react-icons/md'

const Menu = [
    {
        display: "Dashboard",
        path: '/',
        icon:<AiOutlineHome />
    },
    {
        display: "Shop",
        path: '/product',
        icon:<AiFillShop/>
    },
   
    {
        display: "Cart",
        path: '/cart',
        icon:<AiOutlineShopping  />
    },
    {
        display: "About",
        path: '/about',
        icon:<AiOutlineInfoCircle  />
    },
    {
        display: "Contact",
        path: '/contact',
        icon:<MdOutlineContactSupport  />
    },
    {
        display: "Sign In",
        path: '/signin',
        icon:<AiOutlineUser  />
    },
   
]

export default Menu;