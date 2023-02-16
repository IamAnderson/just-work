import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import img9 from "../../assets/thread3.png"

const StatsComponent = ({ showAll }) => {
  return (
    <div className='relative text-[#fff] mb-20 lg:mb-36 px-8 lg:px-56'>
        <div className='stats_bg__frame flex flex-col lg:flex-row items-center justify-start lg:justify-between w-full rounded-[20px] pt-16 pb-16 lg:pb-6 px-10 lg:px-24'>
            <div className='flex flex-col justify-start'>
                <span className='explore_component__gradient1 hidden lg:flex items-center justify-center h-[30px] w-[30px] rounded-full'> <BsStarFill size={"14 "} color="#fff" /> </span>
                <span className='text-[64px] leading-[78.02px] font-extrabold'> {"40+"} </span>
                <span className='text-[16px] leading-[19.5px]'> {"end-to-end projects."} </span>
            </div>

            <div className='flex items-center w-full my-8 lg:hidden'>
                <div className='h-[10px] w-[10px] bg-[#fff] rounded-full' />
                <div className='h-[2px] w-[100%] bg-[#fff]' />
                <div className='h-[10px] w-[10px] bg-[#fff] rounded-full' />
            </div>

            <div className='flex flex-col justify-start'>
                <span className='explore_component__gradient1 hidden lg:flex items-center justify-center h-[30px] w-[30px] rounded-full'> <BsStarFill size={"14 "} color="#fff" /> </span>
                <span className='text-[64px] leading-[78.02px] font-extrabold'> {"200+"} </span>
                <span className='text-[16px] leading-[19.5px]'> {"members"} </span>
            </div>

            <div className='flex items-center w-full my-8 lg:hidden'>
                <div className='h-[10px] w-[10px] bg-[#fff] rounded-full' />
                <div className='h-[2px] w-[100%] bg-[#fff]' />
                <div className='h-[10px] w-[10px] bg-[#fff] rounded-full' />
            </div>

            <div className='flex flex-col justify-start'>
                <span className='explore_component__gradient1 hidden lg:flex items-center justify-center h-[30px] w-[30px] rounded-full'> <BsStarFill size={"14 "} color="#fff" /> </span>
                <span className='text-[64px] leading-[78.02px] font-extrabold'> {"50+"} </span>
                <span className='text-[16px] leading-[19.5px]'> {"free resources"} </span>
            </div>
            
            <>
                {showAll && (
                    <div className='flex flex-col justify-start'>
                        <span className='explore_component__gradient1 hidden lg:flex items-center justify-center h-[30px] w-[30px] rounded-full'> <BsStarFill size={"14 "} color="#fff" /> </span>
                        <span className='text-[64px] leading-[78.02px] font-extrabold'> {"20+"} </span>
                        <span className='text-[16px] leading-[19.5px]'> {"Countries"} </span>
                    </div>
                )}
            </>
        </div>

        <img src={img9} alt="" className='absolute hidden lg:block top-[-120px] left-0 w-full h-full object-cover' />
    </div>
  )
}

export default StatsComponent