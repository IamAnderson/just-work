import React from 'react'

const Title = ({ text, widthVar, widthNum }) => {
  return (
    <div className={`title_box__shadow flex items-center justify-center bg-[#fff] ${widthVar ? `w-[${widthNum}px]` : "w-[259px]"} py-4 ${widthVar && "py-4 px-8"} rounded-[40px]`}>
        <div className='flex items-center gap-2'>
            <span className='dot_title__component' />
            <span className='text-[#333333] text-[8px] lg:text-[18px] font-bold leading-[21.94px]'> {text} </span>
            <span className='dot_title__component' />
        </div>
    </div>
  )
}

export default Title