import React from 'react'
import { Link } from 'react-router-dom'

const LinkHeaderText = ({ text, txtLight }) => {
  return (
    <div className={`text-[15.51px] lg:text-[18px] ${txtLight ? "text-[#B1FD55]" : "text-[#333333C7]"} font-medium leading-[18.91px] lg:leading-[40px]`}>
        <Link to="/" reloadDocument>Home</Link> {">"} {text}
    </div>                
  )
}

export default LinkHeaderText