import React from 'react'

const Heading = ({ text1, text2, posiStart, colorWhite, txtSm, txtSmValue, txtcenter }) => {
  return (
    <div className={`flex flex-col gap-0 lg:gap-2 ${posiStart ? "items-start" : "items-center"}`}>
        <span className={`${colorWhite ? "text-[#fff]" : "text-[#333333]"} ${txtSm ? `text-[${txtSmValue}px]` : "text-[14px] lg:text-[24px]"} ${txtcenter && "text-center"} font-extrabold leading-[14.95px] lg:leading-[29.26px] capitalize`}> {text1} </span>
        <span className={`${colorWhite ? "text-[#fff]" : "text-[#333333]"} ${txtSm ? `text-[${txtSmValue}px]` : "text-[14px] lg:text-[24px]"} ${txtcenter && "text-center"} font-extrabold leading-[14.95px] lg:leading-[29.26px] capitalize`}> {text2} </span>
    </div>
  )
}

export default Heading