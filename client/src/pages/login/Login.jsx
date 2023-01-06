import React from 'react'
import './Login.scss'
import CommonSection from './../../components/UI/CommonSection/CommonSection';
import { Link } from 'react-router-dom';
import loginCommon from '../../assets/image/common.webp'
import Helmet from '../../components/Helmet/Helmet';
const Login = () => {
  return (
  <Helmet title={'Login'}>
        <CommonSection title={'Account'} img={loginCommon}/>
        <section className='login'>
            <div className="context">
                <h2>Login</h2>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <p>Forgot your password?</p>
                <button>SIGN IN</button>
                <Link className='link' to='/register'><span>Create account </span></Link>
            </div>
        </section>
  </Helmet>
  )
}

export default Login