import React from 'react'
import { Link } from 'react-router-dom'

const LinkHeaderText1 = ({ text, text1, link1 }) => {
  return (
    <div className='text-[15.51px] lg:text-[18px] text-[#FBC609] font-medium leading-[18.91px] lg:leading-[40px]'>
        <Link to="/" reloadDocument>Home</Link> {">"} <Link to={link1} reloadDocument>{text}</Link> {">"} {text1}
    </div>                
  )
}

export default LinkHeaderText1