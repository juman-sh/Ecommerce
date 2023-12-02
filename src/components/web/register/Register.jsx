import React from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik';
import { validate } from '../validate/validate.js';
function Register() {

    const initialValues ={
        userName : '',
        email : '',
        password : '',
    }

    const onSubmit = values=>{
            console.log(values);
        }

    const formik = useFormik({
        initialValues ,
        onSubmit ,
        validate ,
    })

    const inputs = [
        {
            id : 'userName',
            type : 'text',
            placeholder:'UserName',
            name : 'userName',
            title :'User Name',
            value: formik.values.userName,
            onChange : formik.handleChange,
        },
        {
            id : 'Email',
            type : 'email',
            placeholder:'UserEmail',
            name : 'email',
            title :'User Email',
            value: formik.values.email,
            onChange : formik.handleChange,

        },
        {
            id : 'password',
            type : 'password',
            placeholder:'UserPassword',
            name : 'password',
            title : 'Password',
            value: formik.values.password,
            onChange : formik.handleChange,

        },
        {
            id : 'Submit',
            type : 'submit',
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
         onChange={input.onChange} 
         name={input.name}
         errors={formik.errors}
         onBlur={formik.handleBlur}
         touched={formik.touched} />
    );
  return (
      <div className='container'>
          <h2>Create Account</h2>
          <form onSubmit={formik.handleSubmit}>
            {renderInputs}
          </form>

      </div>
  )
}

export default Register