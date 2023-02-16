import React from 'react'

const Heading1 = ({ text1, text2, posiStart, colorWhite }) => {
  return (
    <div className={`flex flex-col gap-2 ${posiStart ? "items-start" : "items-center"}`}>
        <span className={`${colorWhite ? "text-[#fff]" : "text-[#333333]"} text-[16px] lg:text-[48px] font-extrabold leading-[20.04px] lg:leading-[40px]`}> {text1} </span>
        <span className={`${colorWhite ? "text-[#fff]" : "text-[#333333]"} text-[16px] lg:text-[48px] font-extrabold leading-[20.04px] lg:leading-[40px]`}> {text2} </span>
    </div>
  )
}

export default Heading1