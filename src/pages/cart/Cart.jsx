import React from 'react'
import CommonSection from '../../components/UI/CommonSection/CommonSection'
import './Cart.scss'
import cartcommon from '../../assets/image/common.webp'
import { useSelector,useDispatch } from 'react-redux'
import CartItem from './../../components/CartItem/CartItem';
import Helmet from './../../components/Helmet/Helmet';
const Cart = () => {
  const cart = useSelector((state) => state.cart.totalQuantity)
  console.log(cart)
  const dispatch = useDispatch();

  return (
    <Helmet title={'Cart'}>
        <CommonSection title='Your cart' img={cartcommon} />
            <section id={cart===0 ? 'cart' : ''}>
               {
                cart === 0 ?<div className="context">
                <h2>Your cart</h2>
                <p>Your cart is currently empty.</p>
                <button>CONTINUE SHOPPING</button>
            </div>  : 

                  <div className="cartItems">
                    <CartItem />
                  </div>
               }
            </section>
    </Helmet>
    
  )
}

export default Cart