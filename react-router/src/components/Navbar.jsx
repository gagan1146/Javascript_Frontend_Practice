import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/home" className={({isActive})=> isActive ? "active" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive})=> isActive ? "active" : ""}>About</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({isActive})=> isActive ? "active" : ""}>Login</NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({isActive})=> isActive ? "active" : ""}>Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={({isActive})=> isActive ? "active" : ""}>Dashboard</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
