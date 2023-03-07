import React from 'react'
import { NavLink } from 'react-router-dom'

const GetStartedBtn = () => {
  return (
    <>
        <NavLink to="/signup" reloadDocument>
            <span className='navbar_signup__gradient text-[6.23px] lg:text-[10px] text-[#fff] font-medium lg:font-bold font-[Inter] py-3 px-3 rounded-[4px]'>
                GET STARTED
            </span>
        </NavLink>
    </>
  )
}

export default GetStartedBtn