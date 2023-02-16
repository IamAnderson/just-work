import React from 'react'
import { NavLink } from 'react-router-dom'
import CheckMText from '../labels/CheckMText'
import Title from '../labels/Title'
import img6 from "../../assets/img1.png"
import img7 from "../../assets/thread2.png"

const AboutComponent = () => {
  return (
    <>
        <div className='DESKTOP hidden lg:lock'>
            <div className='flex justify-center items-center w-full lg:block pt-8 px-56'>
            <Title text={"ABOUT AMDARI"} />
            </div>

            <div className='flex items-start justify-between w-full pt-20 pl-56 pr-28'>
            <div className='flex flex-col items-start gap-5 w-[100%]'>
                <span className='text-[#333333] text-[24px] font-extrabold leading-[29.26px] capitalize w-[438px]'> Designed to give you quality real-life experience  in the tech space. </span>
                <span className='text-[#878787] text-[12px] leading-[24px] w-[466px]'> At Amdari, our goal is to get you closer to career success with our ready-made project solutions. Our end-to-end portfolio projects are designed to help you increase your chances of landing a Data Science job. </span>
                <div className='grid grid-cols-2 gap-4 w-[450px]'>
                <CheckMText text={"Build your data science portfolio"} variant={false} />
                <CheckMText text={"Become job ready"} variant={false} />
                <CheckMText text={"Accelerate your career"} variant={false} />
                <CheckMText text={"Get real-world experience"} variant={false} />
                </div>
                <div className='rm__gradient text-[14px] text-[#fff] py-2 px-8 rounded-[4px]'>
                <NavLink to="about" reloadDocument>
                    Read more
                </NavLink>
                </div>
            </div>

            <div className='relative w-full'>
                <img src={img6} alt="" className='w-[452px] h-[242px] object-cover' />
                <div className='absolute bottom-[-30px] -left-5 w-[501.83px]'>
                <img src={img7} alt="" className='w-full h-full object-cover' />
            </div>
            </div>
            </div>
        </div>

        <div className='MOBILE block lg:hidden'>
            <>
                <div className='flex justify-center items-center w-full lg:block pt-8 px-8 lg:px-56'>
                <Title text={"ABOUT AMDARI"} />
                </div>

                <div className='flex flex-col items-center justify-start w-full pt-8 lg:pt-20 px-8 lg:pl-56 lg:pr-28'>
                <div className='flex flex-col items-start gap-5 w-[100%]'>
                    <div>
                    <img src={img6} alt="" className='w-full h-full object-cover' />
                    </div>

                    <span className='text-[#333333] text-[14px] lg:text-[24px] font-extrabold leading-[29.26px] capitalize w-full'> Designed to give you quality real-life experience  in the tech space. </span>
                    <span className='text-[#878787] text-[10px] lg:text-[12px] leading-[24px] w-full lg:w-[466px]'> At Amdari, our goal is to get you closer to career success with our ready-made project solutions. Our end-to-end portfolio projects are designed to help you increase your chances of landing a Data Science job. </span>
                    <div className='flex flex-col items-start gap-4 w-full'>
                    <CheckMText text={"Build Your Data Science Portfolio"} variant={false} />
                    <CheckMText text={"Become Job Ready"} variant={false} />
                    <CheckMText text={"Accelerate Your Career"} variant={false} />
                    <CheckMText text={"Get Real-World Experience"} variant={false} />
                    </div>
                    <div className='rm__gradient text-[8.3px] lg:text-[14px] text-[#fff] py-1 lg:py-2 px-4 lg:px-8 rounded-[4px]'>
                    <NavLink to="about">
                        Read more
                    </NavLink>
                    </div>
                </div>
                </div>
            </>
        </div>
    </>
  )
}

export default AboutComponent