import React from 'react'
import CommonSection from '../../components/UI/CommonSection/CommonSection'
import './Register.scss'
import registerCommon from '../../assets/image/common.webp'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Helmet from '../../components/Helmet/Helmet';

const schema = yup.object({
  firstname: yup.string().required('Adınız 1 ilə 32 simvol arasında olmalıdır!'),
  lastname: yup.string().required('Adınız 1 ilə 32 simvol arasında olmalıdır!'),
  email: yup.string().email('E-mail ünvanı səhvdir!').required('Email xanasi doldurulmuyub!'),
  password: yup.string().required('Sifre xanasi doldurulmuyub!  ').min(8, 'Şifrə çox qısadır. Minimal şifrənin uzunluğu: 8 simvol.'),
})
.required();

const Register = () => {
  const {register,handleSubmit,formState:{errors}} = useForm({resolver:yupResolver(schema)})
  const onSubmit = data => console.log(data)
  return (
    
   <Helmet title={'Register'}>
        <CommonSection title='Create Account' img={registerCommon}/>
        <section className='register'>

            <div className="context">
                <h2>Create Account</h2>
                <form id='form' onSubmit={handleSubmit(onSubmit)}>
                {errors.firstname && (
                    <span className='err_msg'>{errors.firstname.message}</span>
                   )}
                  <input type="text" 
                   placeholder='First Name'
                   {...register('firstname',{required:true})}
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