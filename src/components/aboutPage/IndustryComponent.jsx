import React from 'react'
import Heading from '../labels/Heading'
import Title from '../labels/Title'
import img1 from "../../assets/industry1.png"
import img2 from "../../assets/industry2.png"
import img3 from "../../assets/industry3.png"
import img4 from "../../assets/industry4.png"
import img5 from "../../assets/industry5.png"
import img6 from "../../assets/industry6.png"
import img7 from "../../assets/industry7.png"

const IndustryComponent = () => {
  return (
            <div className='flex flex-col items-center justify-start gap-8 w-full px-4 lg:px-56'>
                <>
                    <Title text={"INDUSTRIES WE SERVE"} />
                </>

                <>
                    <Heading text1={"We serve People in Different Industries"} />
                </>

                <div className='flex flex-col items-center gap-6 w-full'>
                    <div className='flex items-center justify-between w-full'>
                        <span className='flex items-center gap-2 text-[#333333] text-[12px] font-bold leading-[24px]'> <img src={img1} alt="" className='w-[30px] h-[25px] object-cover' /> Media & Entertainment </span>
                        <span className='flex items-center gap-2 text-[#333333] text-[12px] font-bold leading-[24px]'> <img src={img2} alt="" className='w-[30px] h-[25px] object-cover' /> Financials & Banking </span>
                        <span className='flex items-center gap-2 text-[#333333] text-[12px] font-bold leading-[24px]'> <img src={img3} alt="" className='w-[30px] h-[25px] object-cover' /> Advertising & Marketing </span>
                        <span className='flex items-center gap-2 text-[#333333] text-[12px] font-bold leading-[24px]'> <img src={img4} alt="" className='w-[30px] h-[25px] object-cover' /> Health Tech </span>
                    </div>

                    <div className='flex items-center justify-evenly w-full'>
                        <span className='flex items-center gap-2 text-[#333333] text-[12px] font-bold leading-[24px]'> <img src={img5} alt="" className='w-[30px] h-[25px] object-cover' /> Healthcare & Medicine </span>
                        <span className='flex items-center gap-2 text-[#333333] text-[12px] font-bold leading-[24px]'> <img src={img6} alt="" className='w-[30px] h-[25px] object-cover' /> Travel & Hospitality </span>
                        <span className='flex items-center gap-2 text-[#333333] text-[12px] font-bold leading-[24px]'> <img src={img7} alt="" className='w-[30px] h-[25px] object-cover' /> Fintech </span>
                    </div>
                </div>
            </div>
  )
}

export default IndustryComponent