import React from 'react'
import {TiDeleteOutline} from 'react-icons/ti'
import { useSelector } from 'react-redux'
import './CartItem.scss'
import { IoIosArrowUp,IoIosArrowDown  } from 'react-icons/io';
import { motion } from 'framer-motion';
const CartItem = () => {
    const cart = useSelector((state) => state.cart.cartItems)
  return (
    <div className='CartItem'>
        {
            cart.map((item) => (
                <div className='cart__item'>
                    <div className="left">
                        <TiDeleteOutline size={25}  />
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
                                <motion.div whileTap={{scale:1.7}} className="down">
                                    <IoIosArrowUp />
                                </motion.div>
                                <motion.div whileTap={{scale:1.7}} className="down">
                                    <IoIosArrowDown />
                                </motion.div>
                            </div>
                        </div>

                        <div className="total">
                            $555
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CartItem