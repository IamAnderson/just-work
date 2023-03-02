import React from 'react'
import Title from '../labels/Title'

const MissionPage = () => {
  return (
    <div className='flex items-start gap-8 w-full px-4 lg:px-56'>
        <div className='flex-[0.5]'>
            <img src="" alt="" className='w-full h-full object-contain' />
        </div>

        <div className='flex-[0.5] flex flex-col gap-8 w-full items-start'>
            <Title text={"OUR MISSION"} />

            <div className='flex flex-col justify-start gap-4 w-full'>
                <span className='text-[24px] text-[#333333] font-extrabold leading-[29.26px]'> We Have Been Thriving in the Tech Space for Over 10 Years </span>
                <span className='text-[12px] text-[#878787] leading-[29.26px]'> At Amdari, we believe everyone deserves access to high-quality teachings and tech skill development for a more secure future. As part of our mission to democratize tech skills for everyone, we have always provided unlimited access to projects for professionals, serving more than 2,000 professionals around the world. We've also partnered with more than 20 industry experts to create end-to-end projects on real world cases. </span>
            </div>
        </div>
    </div>
  )
}

export default MissionPage