import React from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik';
import { registerSchema } from '../validate/validate.js';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function Register() {

    const initialValues ={
        userName : '',
        email : '',
        password : '',
        image : '',
    }
    const handelFieldChange = (event) => {
        formik.setFieldValue('image',event.target.files[0]);
    }

    const onSubmit = async users=>{
            const formData = new FormData();
            formData.append("userName",users.userName);
            formData.append("email",users.email);
            formData.append("password",users.password);
            formData.append("image",users.image);
        const {data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`, formData);
        console.log(data);  
        if(data.message=="success") {
            formik.resetForm();
            toast.success('account created successfuly , plz confirm your email', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

        }
    }

    const formik = useFormik({
        initialValues ,
        onSubmit ,
        validationSchema:registerSchema ,
        
    })

    const inputs = [
        {
            id : 'userName',
            type : 'text',
            placeholder:'UserName',
            name : 'userName',
            title :'User Name',
            value: formik.values.userName,
        },
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
        {
            id : 'image',
            type : 'file',
            placeholder:'image',
            name : 'image',
            title : 'image',
            onChange : handelFieldChange,
        }
    ];

    const renderInputs = inputs.map((input,index)=>
        <Input
         id={input.id}
         type={input.type} 
         title={input.title}
         value={input.value}
         placeholder={input.placeholder} 
         key={index} 
         onChange={input.onChange || formik.handleChange} 
         name={input.name}
         errors={formik.errors}
         onBlur={formik.handleBlur}
         touched={formik.touched} />
    );
  return (
      <div className='container'>
          <h2>Create Account</h2>
          <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            {renderInputs}
            <button type='submit' disabled={!formik.isValid}>Register</button>
          </form>

      </div>
  )
}

export default Register