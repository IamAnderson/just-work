import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'

const CheckMText = ({ variant, text, blueClr }) => {
  return (
    <span className={variant ? `flex items-center gap-2 text-[#fff] text-[12px] lg:text-[14px] text-start font-normal leading-[24px]` : `flex items-center gap-2 text-[#333333] text-[12px] font-bold leading-[24px] capitalize`}> 
        <AiOutlineCheck size={"19"} color={blueClr ? "#179DE9" : "#B1FD55"} /> 
        {text}
    </span>
  )
}

export default CheckMText