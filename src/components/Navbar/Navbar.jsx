import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { BsBagCheck,BsMoon,BsSun} from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import "./Navbar.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import Hamburger from 'hamburger-react'
import { useDispatch } from "react-redux";
import { on } from "../../redux/slices/darkSlice";
import { useSelector } from "react-redux";
const menu = [
      {
        path:'/login',
        display:"SIGN IN", 
      },
      {
        path:'/register',
        display:"CREATE"
      }

];
const Navbar = () => {
  const mode = useSelector((state) => state.dark.darkmode)
  const totalQuantity = useSelector((state) => state.cart.totalQuantity )
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
 
  const dispatch = useDispatch();

  const toogleMode = () => {
    dispatch(on())
  }

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/product">
              SHOP
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </div>

          <motion.div whileTap={{scale:1.7}} className="item itemdark" onClick={toogleMode}>
             {
              mode ?  <BsSun /> : <BsMoon />
             }
          </motion.div>
        </div>
        <div className="center">
          {/* logo img gelmelidi */}
         <Link className="link" to='/'> <span>CIHANSHOP</span></Link>
        </div>
        <div className="right">
          <div className="item" onClick={() => setOpen(!open)}>
            <BiUser />
            <span>ACCOUNT</span>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ y: 5, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="dropdown"
              >
                <ul>
                  {menu.map((item, i) => (
                    <Link className="link" to={item.path}>
                      
                      <li key={i}>{item.display}</li>
                    </Link>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
          <div className="item">
            <AiOutlineHeart />
            <span>WISHLIST</span>
          </div>
          <Link className="link" to='/cart'>
            <div className="item" >
              <BsBagCheck />
              <span>CART ({totalQuantity})</span>
            </div>
          </Link>
        </div>
        
        <div className="mobile__menu">
        <div className="mobile__content">
          <motion.div whileTap={{scale:1.7}} className="item itemdark" onClick={toogleMode}>
               {
                mode ?  <BsSun size={25} /> : <BsMoon size={25} />
               }
            </motion.div>
          <Hamburger  toggled={isOpen} toggle={setIsOpen} />
        </div>
        </div>
       
      </div>

      
    </div>
  );
};

export default Navbar;
