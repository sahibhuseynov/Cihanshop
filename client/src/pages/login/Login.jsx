import React from 'react'
import './Login.scss'
import CommonSection from './../../components/UI/CommonSection/CommonSection';
import { Link,useNavigate} from 'react-router-dom';
import loginCommon from '../../assets/image/common.webp'
import Helmet from '../../components/Helmet/Helmet';
import { useState } from 'react';
import { login } from './../../axios/index';
import { useSelector,useDispatch } from 'react-redux';
import { addUser } from '../../redux/slices/userSlice';
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {

const [formData,setFormData] = useState({
  email:"",
  password:"",

})
const navigate = useNavigate()
const dispatch = useDispatch();
const user = useSelector((state) => state.user)


  return (
  <Helmet title={'Login'}>
        <CommonSection title={'Account'} img={loginCommon}/>
        <section className='login'>
          <Toaster />
            <form 
            onSubmit={(e) => {
              e.preventDefault();
              login(formData).then((res) => {
                localStorage.setItem('user',JSON.stringify((res.data.user)))
                dispatch(addUser(res.data.user))
                navigate("/")
                
              })
              .catch((err) => toast.error(err.response.data.message))
            }}
            className="context">
                <h2>Login</h2>
                <input
                onChange={(e) => setFormData({...formData,email: e.target.value})}
                type="email" placeholder='Email' />
                <input
                onChange={(e) => setFormData({...formData,password: e.target.value})}
                type="password" placeholder='Password' />
                <p>Forgot your password?</p>
                <button disabled={formData.email == '' || formData.password == ''} type='submit'>SIGN IN</button>
                <Link className='link' to='/register'><span>Create account </span></Link>
            </form>
        </section>
  </Helmet>
  )
}

export default Login