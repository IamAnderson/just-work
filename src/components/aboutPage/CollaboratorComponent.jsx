import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CollaboratorComponent = ({ item }) => {
  return (
    <div className='flex flex-col gap-4 w-full md:w-[338.68px]'>
        <img src={item.img} alt="" className='w-full md:w-[338.68px] h-[429px] object-contain rounded-[4px]' />

        <div className='flex justify-between w-full px-6 md:px-0'>
            <div className='flex items-center gap-2 w-full'>
                <span className='h-[2px] w-[39px] bg-[#14744C]' />
                <span className='text-[16px] text-[#14744C] font-medium leading-[19.5px] uppercase'> {item.name} </span>
            </div>

            <div className='flex items-center gap-2'>
                <Link to={{ pathname: `` }} target="_blank">
                    <span className='flex items-center justify-center rounded-[4px] h-[24px] w-[24px] bg-[#14744C]'>
                        <BsTwitter color='#fff' size={"14.75"} />
                    </span>
                </Link>
                <Link to={{ pathname: `` }} target="_blank">
                    <span className='flex items-center justify-center rounded-[4px] h-[24px] w-[24px] bg-[#14744C]'>
                        <FaLinkedinIn color='#fff' size={"14.75"} />
                    </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CollaboratorComponent