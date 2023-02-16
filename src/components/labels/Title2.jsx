import React from 'react'

const Title2 = ({ light, text }) => {
  return (
    <div className={`flex items-center justify-center ${light ? "bg-[#F8F8F8]" :"news_comp__gradient"} w-[49.6px] lg:w-[99px] py-2 lg:py-4 rounded-[40px]`}>
        <div className='flex items-center gap-2'>
            <span className={`${light ? "text-[#333333]" : "text-[#fff]"} text-[5.01px] lg:text-[10px] lg:font-bold leading-[6.11px] lg:leading-[12.19px]`}> {text} </span>
        </div>
    </div>
  )
}

export default Title2