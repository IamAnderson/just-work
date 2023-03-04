import React from 'react'
import { FaTimes } from 'react-icons/fa'
import img from "../assets/popUpImg.png"

const PopUpComponent = ({ closePopUp }) => {
  return (
    <>
        <div className='fixed z-50 bg-[#00000077] flex items-center justify-center h-[100vh] w-full'>
            <div className='flex items-start bg-[#006D44] text-[#fff] w-[60%] rounded-[25.38px]'>
                <div className='flex-[0.45] pt-16'>
                    <img src={img} alt="" className='w-full h-full object-contain' />
                </div>
                <div className='flex-[0.55] flex flex-col gap-8 w-full py-6 pr-4'>
                    <div className='flex items-center justify-end w-full'>
                        <span className='flex items-center justify-center h-[33.33px] w-[33.33px] bg-[#fff] rounded-full cursor-pointer' onClick={closePopUp}>
                            <FaTimes size={"18.65"} color="#006d44" />
                        </span>
                    </div>

                    <span className='text-[20px] leading-[50.77px] font-bold text-center w-[377px]'>Get the best resources to build your portfolio delivered to your mailbox</span>

                    <form>
                        <div className="flex justify-between items-center gap-4 w-full">
                            <div className='flex flex-col gap-1 w-full'>
                                <span className='text-[11.43px] leading-[34.29px]'> First Name </span>
                                <input type="text" 
                                className='bg-[#F0F0F0] border-none rounded-[5.72px] p-4 h-[46px] w-[100%]' />
                            </div>
                            <div className='flex flex-col gap-1 w-full'>
                                <span className='text-[11.43px] leading-[34.29px]'> Last Name </span>
                                <input type="text" 
                                className='bg-[#F0F0F0] border-none rounded-[5.72px] p-4 h-[46px] w-[100%]' />
                            </div>
                        </div>
                        <div className='flex justify-center items-center w-full mt-8'>
                            <button>
                                <div className='popup_btn__gradient text-[11px] font-[Inter] font-bold leading-[13.31px] rounded-[4.4px] py-3 px-9'>
                                    Submit
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default PopUpComponent