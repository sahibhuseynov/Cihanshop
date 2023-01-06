import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import "./CartItem.scss";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { removeItem } from "../../redux/slices/cartSlice";
const CartItem = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <div className="CartItem">
      {cart.map((item) => (
        <div className="cart__item">
          <div className="left">
            <motion.div
              whileHover={{
                scale: 1.8,
                transition: { duration: 1 },
                
              }}
              style={{cursor:'pointer'}}
            >
              <TiDeleteOutline
                size={25}
                onClick={() => dispatch(removeItem(item.id))}
              />
            </motion.div>
            <div className="cart__img">
              <img src={item.imgUrl} alt="" />
            </div>
            <div className="cart__detail">
              <span>{item.productName}</span>
            </div>
          </div>
          <div className="center">
            <span>{item.price}</span>
          </div>
          <div className="right">
            <div className="cart__range">
              <span>{item.quantity}</span>
              <div className="range__box">
                <motion.div whileTap={{ scale: 1.7 }}
                
                className="down">
                  <IoIosArrowUp />
                </motion.div>
                <motion.div whileTap={{ scale: 1.7 }} className="down">
                  <IoIosArrowDown />
                </motion.div>
              </div>
            </div>

            <div className="total">
              <span>{item.totalPrice}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
