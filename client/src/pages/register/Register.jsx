import React from 'react'
import CommonSection from '../../components/UI/CommonSection/CommonSection'
import './Register.scss'
import registerCommon from '../../assets/image/common.webp'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Helmet from '../../components/Helmet/Helmet';
import { useState } from 'react';
import { signup } from '../../axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  fullname: yup.string().required('Adınız 1 ilə 32 simvol arasında olmalıdır!'),
  lastname: yup.string().required('Adınız 1 ilə 32 simvol arasında olmalıdır!'),
  email: yup.string().email('E-mail ünvanı səhvdir!').required('Email xanasi doldurulmayib!'),
  password: yup.string().required('Sifre xanasi doldurulmayib!  ').min(8, 'Şifrə çox qısadır. Minimal şifrənin uzunluğu: 8 simvol.'),
})
.required();

const Register = () => {
  const navigate = useNavigate();
  const {register,handleSubmit,formState:{errors}} = useForm({resolver:yupResolver(schema)})

   const onSubmit = data => signup(data).then((res) =>{
     toast.success(res.data.message)
     //burda ele elemey lazimdiki message gorsensin sora navigate olsun
     navigate('/signin')
     
   })
   .catch((err) => toast.error(err.response.data.message))
    
   

  

  

  
  
  return (
    
   <Helmet title={'Register'}>
        <CommonSection title='Create Account' img={registerCommon}/>
        <section className='register'>
  <Toaster />
            <div className="context">
                <h2>Create Account</h2>
                <form id='form' onSubmit={handleSubmit(onSubmit)}>
                {errors.fullname && (
                    <span className='err_msg'>{errors.fullname.message}</span>
                   )}
                  <input type="text" 
                   placeholder='First Name'
                   {...register('fullname',{required:true})}
                   />

                    {errors.lastname && (
                    <span className='err_msg'>{errors.lastname.message}</span>
                   )}
                 
                  <input type="text" 
                   {...register('lastname')}
                  placeholder='Last Name'
                  />
                  {errors.email && (
                    <span className='err_msg'>{errors.email.message}</span>
                   )}
                  <input type="email"
                   {...register('email')}
                    placeholder='Email'
                  />
                  
                  {errors.password && (
                    <span className='err_msg'>{errors.password.message}</span>
                   )}
                   
                  <input type="password"
                   {...register('password',{required:true,maxLength:8})}
                   placeholder='Password'
                   />
                 
                   
                  <button type='submit'>CREATE</button>
                </form>
            </div>
        </section>
   </Helmet>
  )
}

export default Register