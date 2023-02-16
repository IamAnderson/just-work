import React from 'react'
import { Link } from 'react-router-dom'

const LinkHeaderText = ({ text }) => {
  return (
    <div className='text-[15.51px] lg:text-[18px] text-[#FBC609] font-medium leading-[18.91px] lg:leading-[40px]'>
        <Link to="/" reloadDocument>Home</Link> {">"} {text}
    </div>                
  )
}

export default LinkHeaderText