import React from 'react'
import CommonSection from '../../components/UI/CommonSection/CommonSection'
import './Register.scss'
import registerCommon from '../../assets/image/common.webp'
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/* bura calismir form hook */
const schema = zod.object({
  lastName:zod.string(),
})
const Register = () => {
  const { register, handleSubmit, errors} = useForm({
    resolver: zodResolver(schema),
    
  });
  const onSubmit = (data) => {
    console.log(data, 'heyyy')
  }
  return (
    
   <>
        <CommonSection title='Create Account' img={registerCommon}/>
        <section className='register'>

            <div className="context">
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input type="text" name='firstName' 
                   placeholder='First Name'
                   />
                  <input type="text" name='lastName'  placeholder='Last Name'
                  {...register('test', { required: true })}/>
                  <input type="email" name='email' id='email'   placeholder='Email'
                  {...register('test', { required: true })}/>
                  <input type="password" id='password' placeholder='Password'
                  {...register('test', { required: true })} />
                  <button type='submit'>CREATE</button>
                </form>
            </div>
        </section>
   </>
  )
}

export default Register