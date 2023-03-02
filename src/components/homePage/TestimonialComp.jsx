import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import quote from "../../assets/quote.png"

const TestimonialComp = ({ item }) => {
  return (
    <>
        <div className='DESKTOP hidden lg:flex items-start justify-between gap-4 w-full'>
            <div className='flex flex-col items-start text-[#fff] pt-4 pb-6 px-4 w-[505px]'>
                <div className='flex items-center justify-start gap-2 w-full bg-[#14744CA8] p-6'>
                    <img src={item.img} alt="" className='w-[64px] h-[64px] object-cover rounded-full' />
                    <span className='text-[24px] font-extrabold leading-[29.26px]'> {item.name} </span>
                </div>

                <div className='testimonial_comp__gradient flex flex-col gap-6 p-6'>
                    <div className='text-start text-[12px] leading-[24px]'>
                        {item.desc}
                    </div>

                    <div className='flex items-end justify-between w-full'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-2'>
                                <BsFillStarFill color='#FFCE31' size={"13"} />
                                <BsFillStarFill color='#FFCE31' size={"13"} />
                                <BsFillStarFill color='#FFCE31' size={"13"} />
                                <BsFillStarFill color='#FFCE31' size={"13"} />
                                <BsFillStarFill color='#FFCE31' size={"13"} />
                            </div>
                            <span className='text-[14px] leading-[24px]'> {item.location} </span>
                        </div>

                        <img src={quote} alt="" />

                    </div>
                </div>
            </div>

            <div className='flex flex-col items-start text-[#fff] pt-4 pb-6 px-4 w-[505px]'>
                <div className='flex items-center justify-start gap-2 w-full bg-[#14744CA8] p-6'>
                    <img src={item.img1} alt="" className='w-[64px] h-[64px] object-cover rounded-full' />
                    <span className='text-[24px] font-extrabold leading-[29.26px]'> {item.name1} </span>
                </div>

                <div className='testimonial_comp__gradient flex flex-col gap-6 p-6'>
                    <div className='text-start text-[12px] leading-[24px]'>
                        {item.desc1}
                    </div>

                    <div className='flex items-end justify-between w-full'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-2'>
                                <BsFillStarFill color='#FFCE31' size={"13"} />
                                <BsFillStarFill color='#FFCE31' size={"13"} />
                                <BsFillStarFill color='#FFCE31' size={"13"} />
                                <BsFillStarFill color='#FFCE31' size={"13"} />
                                <BsFillStarFill color='#FFCE31' size={"13"} />
                            </div>
                            <span className='text-[14px] leading-[24px]'> {item.location1} </span>
                        </div>
                        <img src={quote} alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className='flex items-start justify-between gap-4 w-full lg:hidden'>
            <div className='flex flex-col items-start text-[#fff] pt-4 pb-6 px-4 w-[100%]'>
                <div className='flex items-center justify-start gap-2 w-full bg-[#14744CA8] p-6'>
                    <img src={item.img} alt="" className='w-[34.42px] h-[34.42px] object-cover rounded-full' />
                    <span className='text-[12.91px] font-extrabold leading-[15.73px]'> {item.name} </span>
                </div>

                <div className='testimonial_comp__gradient flex flex-col gap-6 p-6'>
                    <div className='text-start text-[8px] leading-[12.91px]'>
                        {item.desc}
                    </div>

                    <div className='flex items-end justify-between w-full'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-1'>
                                <BsFillStarFill color='#FFCE31' size={"11"} />
                                <BsFillStarFill color='#FFCE31' size={"11"} />
                                <BsFillStarFill color='#FFCE31' size={"11"} />
                                <BsFillStarFill color='#FFCE31' size={"11"} />
                                <BsFillStarFill color='#FFCE31' size={"11"} />
                            </div>
                            <span className='text-[7.53px] leading-[12.91px]'> {item.location} </span>
                        </div>

                        <img src={quote} alt="" />

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TestimonialComp