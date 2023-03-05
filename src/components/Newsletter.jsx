import React from 'react'
import { Zoom } from 'react-reveal'
import Heading from './labels/Heading'

const Newsletter = () => {
  return (
    <div className='bg-[#F2F2FF] w-full py-8 px-8 lg:px-56'>
        <Zoom cascade bottom>
            <div className='flex flex-col items-center gap-4 w-full'>
                <span className='text-[#146374] text-[8px] lg:text-[16px] font-extrabold mb-2'> Stay in the Know </span>
                <Zoom>
                    <div className='hidden lg:block'>
                        <Heading text1={"Get the best resources to build your portfolio delivered"} text2={"to your mailbox"} txtSm txtSmValue={24} />
                    </div>
                    <div className='block lg:hidden'>
                        <Heading text1={"Get the best resources to build your portfolio delivered to your mailbox"} text2={""} txtSm txtSmValue={11} txtcenter />
                    </div>
                </Zoom>

                <div className='w-full lg:w-[600px] flex items-center justify-start border border-[#dbdbe1] rounded-[2rem] h-[48px] lg:h-[64px] overflow-hidden'>
                    <input type="email" placeholder='Your Email' className='placeholder:text-[#333333] text-[5.23px] lg:text-[14px] text-[#333333] border-none focus:outline-none bg-[#F2F2FF] w-[70%] px-4' />
                    <div className='news_btn__gradient flex items-center justify-center text-[#fff] text-[5.23px] lg:text-[14px] font-medium h-full w-[30%] px-6'>
                        <button>
                            Get Started for Free
                        </button>
                    </div>
                </div>
            </div>
        </Zoom>
    </div>
  )
}

export default Newsletter