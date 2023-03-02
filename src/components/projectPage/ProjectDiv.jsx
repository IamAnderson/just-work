import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../assets/chart.png"


let text = "Analyzing website visitor data using heat maps and session replay Analyzing website visitor data using heat maps and session replay"

const ProjectDiv = () => {
  return (
    <>
        <Link to={``}>
            <div className='flex items-start gap-4 text-[#fff] bg-[#14744C] border border-[#B1FD55] rounded-[10px] h-[153px] w-full p-4'>
                <div className='flex-[0.35] flex items-center justify-center w-full rounded-[10px] bg-[#124832] h-full'>
                    <img src={img} alt="" className='lg:h-[50px] lg:w-[50px] object-cover' />
                </div>

                <div className='flex-[0.65] flex flex-col gap-4 w-full'>
                    <div className='flex items-center justify-between w-full'>
                        <span className='text-[10px] font-light leading-[12.19px] w-[79px]'> {"Data Analytics"} </span>
                        <span className={`text-[10px] font-light leading-[12.19px] ${"bg-[#FBC609C7]"} rounded-[4px] p-2`}> {"Beginners"} </span>
                    </div>

                    <div className='text-[14px] font-bold leading-[17.07px]'>
                        {text.length < 120 ? text : `${text.substring(0, 120)}...`}
                    </div>
                </div>
            </div>
        </Link>
    </>
  )
}

export default ProjectDiv