import React from 'react'
import HeaderTitle from './labels/HeaderTitle'
import LinkHeaderText from './labels/LinkHeaderText'

const HeaderComponent1 = ({ text, text_, text1 }) => {
  return (
    <>
        <div className='relative flex flex-col bg-[#fff] w-full'>
            <div className='header_bg__img flex items-center justify-center h-[400px] w-full'>
                <div className='flex flex-col items-center justify-start gap-4 w-full'>
                    <div className='flex flex-col items-center gap-1 w-full'>
                        <div>
                            <HeaderTitle text={text} />
                        </div>
                        <div>
                            <LinkHeaderText txtLight text={text_} />
                        </div>
                    </div>
                    <div className='text-[18px] text-[#fff] text-center font-[Montserrat] font-medium leading-[40px] w-[520px]'>
                        {text1}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeaderComponent1