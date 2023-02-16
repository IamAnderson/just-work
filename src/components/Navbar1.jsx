import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo1.png"

const Navbar1 = () => {
  return (
    <div className='flex items-center justify-start w-full py-8 px-8'>
        <NavLink to="/" reloadDocument>
            <div>
                <img src={logo} alt="" className='w-full h-full object-contain' />
            </div>
        </NavLink>
    </div>
  )
}

export default Navbar1