import React from 'react'
import Heading from '../labels/Heading'
import { MdOutlineArrowRightAlt } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const ExploreComponent = ({ item }) => {
  return (
    <div className='flex flex-col items-center gap-6 pt-8 pb-6 px-4 border border-[#C4C4C4] rounded-[10px] w-[181.83px] lg:w-[286px] h-[315.19px] lg:h-[436px]'>
        <div className='mb-2'>
            <img src={item.img} alt="" className='w-[50px] lg:w-[80px] h-[55px] lg:h-[90px] object-cover' />
        </div>

        <Heading text1={item.title} text2={""} txtcenter />

        <div className='flex items-center justify-center text-center text-[7.63px] lg:text-[12px] text-[#878787] leading-[15.26px] lg:leading-[24px] h-[120px] w-full'>
            {item.text}
        </div>

        <NavLink to={`/project-details/${item.title}`}>
            <div className='flex items-center gap-2'>
                <div className='relative explore_component__gradient1 flex items-center justify-start w-[15.26px] lg:w-[24px] h-[15.26px] lg:h-[24px] object-cover rounded-full'>
                    <MdOutlineArrowRightAlt color="#fff" size="20" className='absolute left-[-3px]' />
                </div>

                <span className='text-[7.63px] lg:text-[12px] text-[#146374] font-semibold'>
                    View Project Details    
                </span>
            </div>
        </NavLink>
    </div>
  )
}

export default ExploreComponent