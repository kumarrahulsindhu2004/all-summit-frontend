import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout/AppLayout'
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import Contact from './Components/pages/Contact'
import MyPhoto from './Components/pages/MyPhoto'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {path:"/",element:<Home/>},
        {path:"/about",element:<About/>},
        {path:"/contact",element:<Contact/>},
        {path:"/my-photo",element:<MyPhoto/>}
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App