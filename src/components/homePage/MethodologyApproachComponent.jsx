import React from 'react'
import img4 from "../../assets/ellipse1.png";
import img5 from "../../assets/ellipse2.png";
import img6 from "../../assets/ellipse3.png";
import img7 from "../../assets/ellipse4.png";
import line from "../../assets/line1.png"
import line1 from "../../assets/line3.png"
import line2 from "../../assets/line4.png"

const MethodologyApproachComponent = () => {
  return (
    <div className='flex sm:grid grid-cols-2 sm:gap-8 lg:flex flex-col lg:flex-row lg:items-start items-center gap-8 lg:gap-4 w-full'>
        <div className='flex flex-row lg:flex-col items-start lg:items-center gap-4 '>
            <>
                <div className='relative hidden lg:flex justify-center items-center gap-2 w-full'>
                    <img src={img4} alt="" className='w-[24.23px] lg:w-[50px] h-[24.23px] lg:h-[50px] object-cover' />
                    <img src={line} alt="" className="absolute left-[155px] w-[190px] h-[5px] object-cover"/>
                </div>
                <div className='relative flex flex-col items-center w-full lg:hidden'>
                    <img src={img4} alt="" className='w-[24.23px] lg:w-[50px] h-[24.23px] lg:h-[50px] object-cover' />
                    {/* <div className='absolute'>
                        <img src={line1} alt="" className="w-[300px] h-[1px] object-cover rotate-90"/>
                    </div> */}
                </div>
            </>

            <div className='flex flex-col items-start lg:items-center gap-4'>
                <div className='text-[#333333] text-[12px] lg:text-[14px] font-bold leading-[14.63px] lg:leading-[17.07px]'>
                    {"Sign up for Free"}
                </div>
                <div className='text-[#878787] text-[10px] lg:text-[14px] text-start lg:text-center leading-[24px] w-[242px]'>
                    {"Create your account to gain access to all projects from your dashboard."}
                </div>
            </div>
        </div>

        <div className='flex flex-row lg:flex-col items-start lg:items-center gap-4 '>
            <>
                <div className='relative hidden lg:flex justify-center items-center gap-2 w-full'>
                    <img src={img5} alt="" className='w-[24.23px] lg:w-[50px] h-[24.23px] lg:h-[50px] object-cover' />
                    <img src={line} alt="" className="absolute left-[155px] w-[190px] h-[5px] object-cover"/>
                </div>
                <div className='relative flex flex-col items-center w-full lg:hidden'>
                    <img src={img4} alt="" className='w-[24.23px] lg:w-[50px] h-[24.23px] lg:h-[50px] object-cover' />
                    {/* <div className='absolute'>
                        <img src={line1} alt="" className="w-[300px] h-[1px] object-cover rotate-90"/>
                    </div> */}
                </div>
            </>
            <div className='flex flex-col items-start lg:items-center gap-4'>
                <div className='text-[#333333] text-[12px] lg:text-[14px] font-bold leading-[14.63px] lg:leading-[17.07px]'>
                    {"Select Project Path"}
                </div>
                <div className='text-[#878787] text-[10px] lg:text-[14px] text-start lg:text-center leading-[24px] w-[242px]'>
                    {"Select a project based on your skill level. Beginner, Intermediate, Advanced. "}
                </div>
            </div>
        </div>

        <div className='flex flex-row lg:flex-col items-start lg:items-center gap-4 '>
            <>
                <div className='relative hidden lg:flex justify-center items-center gap-2 w-full'>
                    <img src={img6} alt="" className='w-[24.23px] lg:w-[50px] h-[24.23px] lg:h-[50px] object-cover' />
                    <img src={line} alt="" className="absolute left-[155px] w-[190px] h-[5px] object-cover"/>
                </div>
                <div className='relative flex flex-col items-center w-full lg:hidden'>
                    <img src={img4} alt="" className='w-[24.23px] lg:w-[50px] h-[24.23px] lg:h-[50px] object-cover' />
                    {/* <div className='absolute'>
                        <img src={line1} alt="" className="w-[300px] h-[1px] object-cover rotate-90"/>
                    </div> */}
                </div>
            </>
            <div className='flex flex-col items-start lg:items-center gap-4'>
                <div className='text-[#333333] text-[12px] lg:text-[14px] font-bold leading-[14.63px] lg:leading-[17.07px]'>
                    {"Attempt Free Projects"}
                </div>
                <div className='text-[#878787] text-[10px] lg:text-[14px] text-start lg:text-center leading-[24px] w-[242px]'>
                    {"You can get started with the projects available on our free plan or subscribe to access more projects"}
                </div>
            </div>
        </div>

        <div className='flex flex-row lg:flex-col items-start lg:items-center gap-4 '>
            <>
                <div className='relative hidden lg:flex justify-center items-center gap-2 w-full'>
                    <img src={img7} alt="" className='w-[24.23px] lg:w-[50px] h-[24.23px] lg:h-[50px] object-cover' />
                </div>
                <div className='relative flex flex-col items-center w-full lg:hidden'>
                    <img src={img4} alt="" className='w-[24.23px] lg:w-[50px] h-[24.23px] lg:h-[50px] object-cover' />
                    {/* <div className='absolute'>
                        <img src={line1} alt="" className="w-[300px] h-[1px] object-cover rotate-90"/>
                    </div> */}
                </div>
            </>
            <div className='flex flex-col items-start lg:items-center gap-4'>
                <div className='text-[#333333] text-[12px] lg:text-[14px] font-bold leading-[14.63px] lg:leading-[17.07px]'>
                    {"Download Solutions"}
                </div>
                <div className='text-[#878787] text-[10px] lg:text-[14px] text-start lg:text-center leading-[24px] w-[242px]'>
                    {"Download all material needed to work on the project as well as solutions in video format and document."}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MethodologyApproachComponent