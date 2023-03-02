import React from 'react'

const HeaderTitle = ({ text, txtClr }) => {
  return (
    <div className={`text-[15.51px] lg:text-[36px] ${txtClr ? `text-[#14744C]` : "text-[#fff]"} font-medium font-[Montserrat Alternates] leading-[18.91px] lg:leading-[43.88px]`}>
        {text}
    </div>
  )
}

export default HeaderTitle