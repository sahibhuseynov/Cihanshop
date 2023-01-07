import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { BsBagCheck, BsMoon, BsSun } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

import "./Navbar.scss";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import { useDispatch } from "react-redux";
import { on } from "../../redux/slices/darkSlice";
import { useSelector } from "react-redux";

import SideBar from "./../UI/SideBar/SideBar";
import { addUser } from "../../redux/slices/userSlice";




const Navbar = () => {
  console.log("Navbar render oldu");
  const headerRef = useRef(null);
  const mode = useSelector((state) => state.dark.darkmode);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const toogleMode = () => {
    dispatch(on());
  };

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 360 ||
        document.documentElement.scrollTop > 360
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc());
  }, []);


  const user = useSelector((state) => state.user)
  const clearUser = () => {
    
    dispatch(addUser(null))
    localStorage.removeItem('user')
    console.log(user)
  }
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

          <motion.div
            whileTap={{ scale: 1.7 }}
            className="item itemdark"
            onClick={toogleMode}
          >
            {mode ? <BsSun /> : <BsMoon />}
          </motion.div>
        </div>
        <div className="center">
          {/* logo img gelmelidi */}
          <Link className="link" to="/">
            {" "}
            <span>CIHANSHOP</span>
          </Link>
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
                  {
                    //user null problem 
                    user.user ? <Link className="link" onClick={clearUser}>Sign out</Link> : <Link className="link" to='/signin'>Sign in</Link>
                   
                  }
                  
                   <Link className="link"  to='/register'>Create</Link> 
                </ul>
              </motion.div>
            )}
          </div>
          <div className="item">
            <AiOutlineHeart />
            <span>WISHLIST</span>
          </div>
          <Link className="link" to="/cart">
            <div className="item">
              <BsBagCheck />
              <span>CART ({totalQuantity})</span>
            </div>
          </Link>
        </div>

        <div className="mobile__menu">
          <div className="mobile__content">
            <motion.div
              whileTap={{ scale: 1.7 }}
              className="item itemdark"
              onClick={toogleMode}
            >
              {mode ? <BsSun size={35} /> : <BsMoon size={35} />}
            </motion.div>
            <div>
              <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sidebar__menu "
            animate={{ x: 350 }}
            transition={{
              delay: 0,
              x: { duration: 0.7 },
              default: { ease: "linear" },
            }}
            exit={{ x: -300 }}
          >
            <SideBar />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
