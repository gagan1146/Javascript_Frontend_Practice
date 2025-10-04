import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Profile from './components/Profile.jsx'
import Dashboard from './components/Dashboard.jsx'
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'
import Tests from './components/Tests.jsx'
import Courses from './components/Courses.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<div><Navbar/><App/></div>
  },
  {
    path:"/home",
    element:<div><Navbar/><Home/></div>
  },
  {
    path:"/about",
    element:<div><Navbar/><About/></div>
  },
  {
    path:"/login",
    element:<div><Navbar/><Login/></div>
  },
  {
    path:"/profile",
    element:<div><Navbar/><Profile/></div>
  },
  {
    path:"/dashboard",
    element:<div><Navbar/><Dashboard/></div>,
    children:[
      {
        path:"courses",
        element:<div><Courses/></div>
      },
      {
        path:"tests",
        element:<div><Tests/></div>
      }
    ]
  },
  {
    path:"*",
    element:<div><Navbar/><h1>404 - Not Found</h1></div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
