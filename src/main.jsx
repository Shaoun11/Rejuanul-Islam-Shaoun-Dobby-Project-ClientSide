import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/LogIn/Login.jsx'
import Register from './Components/Register/Register.jsx'

const routes=createBrowserRouter([{
  path:"/",
  element:<MainLayout></MainLayout>,
  children:[{
    path:"/home",
    element:<Home></Home>,
    loader: () => fetch('https://server-internshala.vercel.app/images')

  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:"/",
    element:<Login></Login>
  },
  {
    path:"/register",
    element:<Register></Register>
  }

]

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
<RouterProvider router={routes} ></RouterProvider>
  </React.StrictMode>,
)
