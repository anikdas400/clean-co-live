import {
    createBrowserRouter,
   
  } from "react-router-dom";
import App from "../App";
import About from "../page/About";
import Contact from "../page/Contact";
import Login from "../page/Login";
import Register from "../page/Register";
import Adminlayout from "../components/layout/Adminlayout";
import AddService from "../page/AddService";
import Home from "../page/Home";

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
          index:true,
          element:<Home></Home>
        },
        {
          path:"about",
          element:<About></About>
        },
        {
          path:"contact",
          element:<Contact></Contact>
        },
        

      ]
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/register",
      element:<Register></Register>
    },
    {
      path:"/admin",
      element:<Adminlayout></Adminlayout>,
      children:[
        {
          path:"addService",
          element:<AddService></AddService>
        }
      ]
    }
    

  ]);
  export default routes