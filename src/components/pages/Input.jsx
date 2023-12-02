import React from 'react'

function Input(props) {
  return (
    <div>
     <div className="input-group mb-3">
        <label htmlFor={props.id}>{props.title}</label>
      <input 
      type={props.type} 
      className={props.className} 
      name={props.name} 
      placeholder={props.placeholder} 
      value={props.value} 
      onChange={props.onChange}
      onBlur={props.onBlur} />
      {props.touched[props.name]&& props.errors[props.name]&& <p className='text text-danger'>{props.errors[props.name]}</p>}
      
     </div>
    </div>
  )
}

export default Input