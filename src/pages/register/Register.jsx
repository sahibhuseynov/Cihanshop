import React from 'react'
import CommonSection from '../../components/UI/CommonSection/CommonSection'
import './Register.scss'
import registerCommon from '../../assets/image/common.webp'
const Register = () => {
  return (
   <>
        <CommonSection title='Create Account' img={registerCommon}/>
        <section className='register'>

            <div className="context">
                <h2>Create Account</h2>
                <input type="text"  placeholder='First Name'/>
                <input type="text"  placeholder='Last Name'/>
                <input type="email"  placeholder='Email'/>
                <input type="password" placeholder='Password' />
                <button>CREATE</button>
            </div>
        </section>
   </>
  )
}

export default Register