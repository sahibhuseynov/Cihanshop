import {AiOutlineHome,AiOutlineShopping,AiOutlineInfoCircle, AiOutlineUser} from "react-icons/ai";
import {MdOutlineContactSupport} from 'react-icons/md'

const Menu = [
    {
        display: "Dashboard",
        path: '/',
        icon:<AiOutlineHome />
    },
    {
        display: "Shop",
        path: '/Shop',
        icon:<AiOutlineShopping />
    },
    {
        display: "About",
        path: '/About',
        icon:<AiOutlineInfoCircle  />
    },
    {
        display: "Contact",
        path: '/About',
        icon:<MdOutlineContactSupport  />
    },
    {
        display: "Sign In",
        path: '/About',
        icon:<AiOutlineUser  />
    },
]

export default Menu;