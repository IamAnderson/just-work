import React from 'react'
import HeaderTitle from './labels/HeaderTitle'
import LinkHeaderText from './labels/LinkHeaderText'

const HeaderComponent1 = ({ text, text1 }) => {
  return (
    <>
        <div className='relative flex flex-col bg-[#fff] w-full'>
            <div className='header_bg__img flex items-center justify-center h-[400px] lg:h-[600px] w-full'>
                <div className='flex flex-col items-center justify-start gap-4 w-full'>
                    <div className='flex flex-col items-center gap-1 w-full'>
                        <div>
                            <HeaderTitle txtClr text={text} />
                        </div>
                        <div>
                            <LinkHeaderText text={text} />
                        </div>
                    </div>
                    <div className='text-[18px] text-[#14744C] text-center font-[Montserrat] font-medium leading-[40px] w-[520px]'>
                        {text1}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeaderComponent1