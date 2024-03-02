import React from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik';
import { loginSchema } from '../validate/validate.js';
import {  toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login({saveCurrentUser}) {

    const navigate = useNavigate();
    const initialValues ={
        email : '',
        password : '',
    }

    const onSubmit = async users=>{
        const {data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signin`, users);
        console.log(data);  
        if(data.message=="success") {
            localStorage.setItem("userToken",data.token);
            saveCurrentUser();
              toast.success('login successfuly', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        
                navigate('/');
            }
    }

    const formik = useFormik({
        initialValues ,
        onSubmit ,
        validationSchema:loginSchema ,
        
    })

    const inputs = [
        {
            id : 'Email',
            type : 'email',
            placeholder:'UserEmail',
            name : 'email',
            title :'User Email',
            value: formik.values.email,

        },
        {
            id : 'password',
            type : 'password',
            placeholder:'UserPassword',
            name : 'password',
            title : 'Password',
            value: formik.values.password,
        },
    ];

    const renderInputs = inputs.map((input,index)=>
        <Input
         id={input.id}
         type={input.type} 
         title={input.title}
         value={input.value}
         placeholder={input.placeholder} 
         key={index} 
         onChange={formik.handleChange} 
         name={input.name}
         errors={formik.errors}
         onBlur={formik.handleBlur}
         touched={formik.touched} />
    );
  return (
      <div className='container'>
          <h2>Login</h2>
          <form onSubmit={formik.handleSubmit}>
            {renderInputs}
            <button type='submit' disabled={!formik.isValid}>Login</button>
          </form>

      </div>
  )
}

export default Login