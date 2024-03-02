import React, { useEffect, useState } from 'react';
import {RouterProvider} from "react-router-dom";
import {createBrowserRouter,} from "react-router-dom";
import Layout from './layout/Layout.jsx';
import Login from './components/web/login/Login.jsx';
import Register from './components/web/register/Register.jsx';
import Categories from './components/web/categories/Categories.jsx';
import CategoriesDashboard from './components/dashboard/categories/Categories.jsx';
import HomeDashboard from './components/dashboard/home/Home.jsx';
import Home from './components/web/home/Home.jsx';
import DashboardLayout from './layout/DashboardLayout.jsx';
import { jwtDecode } from 'jwt-decode';
import CategoriesDetails from './components/web/categories/CategoriesDetails.jsx';
import Product from './components/web/Product/Product.jsx';
import { CartContextProvider } from './components/web/context/Cart.jsx';



function App() {

  const [user,setUser] = useState(null);

  const saveCurrentUser = ()=>{
    const token = localStorage.getItem("userToken");
    const decoded = jwtDecode(token);
    setUser(decoded)    
  }

  useEffect(()=>{
    if(localStorage.getItem("userToken"))
    {
      saveCurrentUser();
    }
  },[]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout user={user} setUser={setUser}/>,
    children : [
      {
        path: "/login",
        element: <Login saveCurrentUser={saveCurrentUser} />
      },
      {
          path: "/register",
          element: <Register/>
      },
      {
        path: "/",
        element: <Home/> 
      },
      {
        path: "/categories",
        element: <Categories/> 
      },
      {
        path: `/products/category/:categoryId`,
        element: <CategoriesDetails/> 
      },
      {
        path: `/products/:productId`,
        element: <Product/> 
        
      },
      {
        path:"*",
        element: <h2>404-Page Not Found</h2>,
      }
      
      
    ]
  }

  ,{
    path: "/dashboard",
    element: <DashboardLayout/>,
    children:[
      {
        path: "*",
        element: <h2>404-Page Not Found -- Dashboard</h2>,

      },
      {
        path: "/dashboard/home",
        element: <HomeDashboard />,
        
      },
      {
        path: "/dashboard/categories",
        element: <CategoriesDashboard />,
      }
    ]
  }
]);

  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
      
    
    
  )
}

export default App
