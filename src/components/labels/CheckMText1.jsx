import React from 'react'
import { FaCheck } from 'react-icons/fa'

const CheckMText1 = ({ txtNull, text }) => {
  return (
    <div className='flex items-start gap-2 w-full'>
        <span className={`flex items-center justify-center w-[25px] h-[25px] ${txtNull ? "bg-[#E6E6E6]" : "pricing_checkmark__gradient"} rounded-full overflow-hidden`}> <FaCheck color='#fff' size={"12.75"} /> </span>
        <span className={`text-[12px] ${txtNull && "line-through"} ${txtNull ? "text-[#C4C4C4]" : "text-[#878787]"} leading-[24px]`}> {text} </span>
    </div>
  )
}

export default CheckMText1