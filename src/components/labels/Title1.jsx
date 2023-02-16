import React from 'react'

const Title1 = ({ text }) => {
  return (
    <div className='flex items-center gap-4'>
        <div className='h-[30px] lg:h-[40px] w-[2px] bg-[#00A2FD]' />
        <div className='text-[8px] lg:text-[18px] text-[#fff] font-bold'> {text} </div>
    </div>
  )
}

export default Title1