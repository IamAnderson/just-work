import React from 'react'
import Title from '../labels/Title'
import img1 from "../../assets/google.png";
import img2 from "../../assets/amazon.png";
import img3 from "../../assets/windows.png";
import img4 from "../../assets/img3.png";
import img5 from "../../assets/img4.png";

const InstructorsWorkComponent = () => {
  return (
    <div className='news_comp__box_shadow flex flex-col items-center justify-start gap-8 bg-[#fff] w-full lg:w-[80%] py-6 px-4 lg:px-24'>
        <>
            <Title widthVar widthNum={495} text={"Where our instructors and students work"} />
        </>

        <div className='flex items-center justify-between w-full lg:ml-16'>
            <div className='flex items-center w-full border-r-[3px] mr-16 border-[#eeeded]'>
                <img src={img1} alt="" className='w-[38.26px] lg:w-[55px] h-[38.26px] lg:h-[55px] object-cover' />
                {/* <div className='h-[38.26px] lg:h-[55px] w-[2px] bg-[#eeeded]' /> */}
            </div>
            
            <div className='flex items-center w-full border-r-[3px] mr-16 border-[#eeeded]'>
                <img src={img2} alt="" className='w-[38.26px] lg:w-[55px] h-[38.26px] lg:h-[55px] object-cover' />
                {/* <div className='h-[38.26px] lg:h-[55px] w-[2px] bg-[#eeeded]' /> */}
            </div>
            
            <div className='flex items-center w-full border-r-[3px] mr-16 border-[#eeeded]'>
                <img src={img3} alt="" className='w-[38.26px] lg:w-[55px] h-[38.26px] lg:h-[55px] object-cover' />
                {/* <div className='h-[38.26px] lg:h-[55px] w-[2px] bg-[#eeeded]' /> */}
            </div>
            
            <div className='flex items-center w-full border-r-[3px] mr-16 border-[#eeeded]'>
                <img src={img4} alt="" className='w-[38.26px] lg:w-[55px] h-[38.26px] lg:h-[55px] object-cover' />
                {/* <div className='h-[38.26px] lg:h-[55px] w-[2px] bg-[#eeeded]' /> */}
            </div>
            
            <div className='flex items-center w-full'>
                <img src={img5} alt="" className='w-[38.26px] lg:w-[55px] h-[38.26px] lg:h-[55px] object-cover' />
                {/* <div className='h-[38.26px] lg:h-[55px] w-[2px] bg-[#eeeded]' /> */}
            </div>
        </div>


        {/* <div className='flex items-center justify-between flex-wrap gap-2 lg:w-full border-r-[3px] mr-16 border-[#eeeded]'>
            {partnersComponentData.map((item, index) => (
                <PartnersComponent item={item} key={index} />
            ))}
        </div> */}
    </div>
  )
}

export default InstructorsWorkComponent