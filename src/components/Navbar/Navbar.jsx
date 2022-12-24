import { Link } from "react-router-dom";
import { BiUser ,} from "react-icons/bi";
import { BsBagCheck,BsMoon,BsSun,BsSearch} from "react-icons/bs";
import { AiOutlineHeart,AiOutlineHome,AiOutlineShopping,AiOutlineInfoCircle, AiOutlineUser} from "react-icons/ai";
import {GrContact} from 'react-icons/gr'
import "./Navbar.scss";
import { useState,useRef,useEffect } from "react";
import { motion } from "framer-motion";
import Hamburger from 'hamburger-react'
import { useDispatch } from "react-redux";
import { on } from "../../redux/slices/darkSlice";
import { useSelector } from "react-redux";
import personImg1 from "../../assets/image/person1.webp";
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
  const headerRef = useRef(null)
  const mode = useSelector((state) => state.dark.darkmode)
  const totalQuantity = useSelector((state) => state.cart.totalQuantity )
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
 
  const dispatch = useDispatch();

  const toogleMode = () => {
    dispatch(on())
  }

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 360  || document.documentElement.scrollTop
      > 360  ){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunc()
    return () => window.removeEventListener('scroll',stickyHeaderFunc())
  },[])

  return (
    <div className="navbar " ref={headerRef}>
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
                mode ?  <BsSun size={35} /> : <BsMoon size={35} />
               }
            </motion.div>
            <div>
        <Hamburger  toggled={isOpen} toggle={setIsOpen}  />
        </div>
        </div>
        
        </div>
       
      </div>
        
     
     
       
          <div className={isOpen ? 'sidebar__menu active': 'sidebar__menu'}>
          <div className="menu__header">
              <div className="user__img">
                <img src={personImg1} alt="" />
              </div>
              <div className="user__about">
                <h4>SAHIB HUSEYNOV</h4>
                <span>sahib@demo.com</span>
              </div>
          </div>

          <div className="menu__navigation">
            <div className="item">
              <BsSearch />
              <input type="text" placeholder="Search..."/>
            </div>
            <div className="item">
              <AiOutlineHome />
              <span>Dashboard</span>
            </div>
            <div className="item">
              <AiOutlineShopping />
              <span>Shop</span>
            </div>
            <div className="item">
              <AiOutlineInfoCircle />
              <span>About</span>
            </div>
            <div className="item">
              <GrContact />
              <span>Contact</span>
            </div>
            <div className="item">
              <AiOutlineUser />
              <span>Sign In</span>
            </div>
            <div className="item"></div>
          </div>
  
          
        </div>
       
       
      
     
      
    </div>
    
  );
};

export default Navbar;
