import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css';


function Navbar({user,setUser}) {

  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem('userToken');
    setUser(null);
    navigate('/home');
  }
  return (
    <>
    <div className='top-header'>
      <div className='container'>
        <p className='mb-0'>Welcome to Our shop J-shop</p>
      </div>
    </div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
      <a className="navbar-brand" href="#">J-shop</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
         
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>


          <li className="nav-item">
            <a className="nav-link" href="#">Categories</a>
          </li>


          <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        {user&&<li className="nav-item">
          <a className="nav-link" href="#">Cart</a>
        </li>}
       
       
        </ul>
        <ul className="navbar-nav">
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <ul className="dropdown-menu ">
          {!user?<>
          <li><Link className="dropdown-item" to='/register'>register</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link className="dropdown-item" to='/login'>login</Link></li>
          </>
          :
          <>
          <li><Link className="dropdown-item" to='/register'>Profile</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link className="dropdown-item" onClick={logout}>logout</Link></li> 
          </>}
        </ul>
      </li>
        </ul>
     
      </div>
    </div>
  </nav>
</>

    
  )
}

export default Navbar