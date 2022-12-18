import React from 'react'
import CommonSection from '../../components/UI/CommonSection/CommonSection'
import './Cart.scss'
import cartcommon from '../../assets/image/common.webp'
const Cart = () => {
  return (
    <>
        <CommonSection title='Your cart' img={cartcommon} />
            <section className='cart'>
                <div className="context">
                    <h2>Your cart</h2>
                    <p>Your cart is currently empty.</p>
                    <button>CONTINUE SHOPPING</button>
                </div>
            </section>
    </>
    
  )
}

export default Cart