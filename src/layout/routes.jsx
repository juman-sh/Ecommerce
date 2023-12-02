import Categories from "../components/web/categories/Categories.jsx";
import Home from "../components/web/home/Home.jsx";
import DashboardLayout from "./DashboardLayout.jsx";
import Layout from "./Layout.jsx";
import HomeDashboard from '../components/dashboard/home/Home.jsx';
import CategoriesDashboard from '../components/dashboard/categories/Categories.jsx';
import {createBrowserRouter,} from "react-router-dom";
import Register from "../components/web/register/Register.jsx";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children : [
        {
            path: "/register",
            element: <Register/>
        },
        {
          path: "/home",
          element: <Home/> 
        },
        {
          path: "/categories",
          element: <Categories/> 
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