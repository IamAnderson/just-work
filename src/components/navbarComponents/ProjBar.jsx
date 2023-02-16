import React from 'react'
import { BsFillTriangleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ProjBar = ({ closeProjBar }) => {
  return (
    <div className='absolute top-[4.5rem] left-[-180px]' onMouseLeave={closeProjBar}>
        <div className='relative w-[402px] h-full bg-[#fff] rounded-[20px]'>
            <span className='absolute top-[-20px] left-[50%] right-[50%]'> <BsFillTriangleFill color='#fff' size={"22"} /> </span>

            <div className='flex items-start justify-between w-full pt-8 pb-8 px-8'>
                <div className='flex flex-col items-start gap-4 w-full'>
                    <span className='text-[#333333] text-[14px] font-bold leading-[40px]'> Project Category </span>
                    <Link to={``}>
                        <span className='text-[#333333] text-[12px] font-bold leading-[40px]'> Data Analytics </span>
                    </Link>
                    <Link to={``}>
                        <span className='text-[#333333] text-[12px] font-bold leading-[40px]'> Sales Analytics </span>
                    </Link>
                    <Link to={``}>
                        <span className='text-[#333333] text-[12px] font-bold leading-[40px]'> Supply Chain Analytics </span>
                    </Link>
                    
                    <Link to="/projects" reloadDocument>
                        <div className='news_btn__gradient flex items-center justify-center gap-2 text-[#fff] text-[10px] font-[Inter] h-[33px] w-[110px] px-2'> View  More </div>
                    </Link>
                </div>

                <div className='flex justify-end w-full'>
                    <div className='flex flex-col items-start gap-4'>
                        <span className='text-[#333333] text-[14px] font-bold leading-[40px]'> Project Path </span>
                        <Link to={``}>
                            <span className='text-[#333333] text-[12px] font-bold leading-[40px]'> Beginner </span>
                        </Link>
                        <Link to={``}>
                            <span className='text-[#333333] text-[12px] font-bold leading-[40px]'> Intermediate </span>
                        </Link>
                        <Link to={``}>
                            <span className='text-[#333333] text-[12px] font-bold leading-[40px]'> Advanced </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjBar