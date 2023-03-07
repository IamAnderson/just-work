import React from 'react'
import img1 from "../../assets/pricingStripe.png"
import CheckMText1 from '../labels/CheckMText1'

const PricingComponent = () => {
  return (
    <div className='flex flex-col justify-start w-full'>
        <div className='flex items-start justify-between w-full text-[#fff] bg-[#333333] rounded-t-[10px] pl-4 pb-4 h-[207px]'>
            <div className='flex flex-col justify-end gap-2 h-full'>
                <span className='flex items-end gap-1 w-full text-[40px] font-semibold leading-[24px]'> {"0"}$ <p className='text-[12px] leading-[24px] capitalize'> /{"free"} </p> </span>
                <span className='text-[14px] font-bold leading-[24px] w-[122px]'> {"Basic"} Package </span>
            </div>

            <div className='flex items-start w-full'>
                <img src={img1} alt="" className='w-full h-full object-contain' />
            </div>
        </div>

        <div className='flex flex-col justify-start gap-4 w-full border border-[#C4C4C4] rounded-b-[10px] py-4 px-2'>
            <div className='flex flex-col justify-start gap-4 w-full'>
                <CheckMText1 text={"Access to 50+ projects"} />
                <CheckMText1 text={"Over 50+ hours of videos"} />
                <CheckMText1 text={"200+ of verified downloadable projects"} />
                <CheckMText1 txtNull text={"Access to new projects added every month"} />
                <CheckMText1 txtNull text={"Learning Paths 1-to-1 sessions for Mock Interview"} />
                <CheckMText1 txtNull text={"Resume Prep"} />
                <CheckMText1 txtNull text={"Email Technical Support"} />
            </div>

            <button>
                <div className='flex items-center justify-center w-full py-2 bg-[#EBEBEB] text-[#000] text-[14px] leading-[17.07px] rounded-[4px]'>
                    Choose  Plan
                </div>
            </button>
        </div>
    </div>
  )
}

export default PricingComponent