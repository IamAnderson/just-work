import React from 'react'
import { AiOutlineComment } from 'react-icons/ai'
import { BiCalendar } from 'react-icons/bi'
import { Fade } from 'react-awesome-reveal'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import img from "../../assets/img5.png"
import Heading from '../labels/Heading'
import Title2 from '../labels/Title2'


const Main = styled.div`
  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar{
    display: none;
  }
`


const NewsComponent = () => {
  return (
    <>
        <div className='DESKTOP hidden lg:flex items-start justify-between gap-2 w-full'>
            <NavLink to={``}>
                <Fade cascade down>
                <div className='flex items-start w-full h-full'>
                    <div className='flex-[0.30] flex items-start w-full'>
                        <img src={img} alt="" className='w-full h-[325.16px] object-cover' />
                    </div>

                    <div className='flex-[0.60] flex flex-col gap-4 pt-8 pb-4'>
                        <div className='flex flex-col gap-4 px-4 w-full'>
                            <div>
                                <Title2 text={"Optimaztion"} light />
                            </div>
                            <div className=''>
                                <Heading text1={"Black Woman Rejoices"} posiStart txtSm txtSmValue={18} />
                            </div>
                            <div className='flex flex-wrap items-center justify-between gap-2 w-full '>
                                <span className='text-[#A5A5A5] text-[12px] leading-[24px] capitalize'> {"Globally"} </span>
                                <span className='text-[#A5A5A5] text-[12px] leading-[24px] capitalize'> {"Maintain"} </span>
                                <span className='text-[#A5A5A5] text-[12px] leading-[24px] capitalize'> {"Emerging"} </span>
                                <span className='text-[#A5A5A5] text-[12px] leading-[24px] capitalize'> {"Process"} </span>
                                <span className='text-[#A5A5A5] text-[12px] leading-[24px] capitalize'> {"Improvements."} </span>
                            </div>
                            <div className='flex items-center gap-2 w-full justify-start'>
                                <img src={img} alt="" className='h-[31px] w-[31px] object-cover rounded-full' />
                                <span className='text-[#333333] text-[11.63px] font-semibold leading-[14.17px] capitalize'> {"Jane Doe"} </span>
                            </div>
                        </div>

                        <div className='h-[2px] w-full bg-[#A5A5A5]' />

                        <div className='flex items-center justify-between gap-2 w-full px-4'>
                            <span className='flex items-center gap-2 w-full text-[12px] text-[#a5a5a5] leading-[12px]'> <BiCalendar color='#A5A5A5' size={"20"} /> {"February 10, 2023"} </span>
                            <span className='flex items-center gap-2 w-full text-[12px] text-[#a5a5a5] leading-[12px]'> <AiOutlineComment color='#A5A5A5' size={"20"} /> {"3"} Comments </span>
                        </div>
                    </div>
                </div>
            </Fade>
            </NavLink>

            <NavLink to={``}>
                <Fade cascade down>
                <div className='news_comp__box_shadow flex items-start w-full'>
                    <div className='flex-[0.30] flex items-start w-full'>
                        <img src={img} alt="" className='w-full h-[325.16px] object-cover' />
                    </div>

                    <div className='flex-[0.60] flex flex-col gap-4 pt-8'>
                        <div className='flex flex-col gap-4 px-4 w-full'>
                            <div>
                                <Title2 text={"Optimaztion"} light={false} />
                            </div>
                            <div className=''>
                                <Heading text1={"Black Woman Rejoices"} posiStart txtSm txtSmValue={18} />
                            </div>
                            <div className='flex flex-wrap items-center justify-between gap-2 w-full '>
                                <span className='text-[#A5A5A5] text-[12px] leading-[24px] capitalize'> {"Globally"} </span>
                                <span className='text-[#A5A5A5] text-[12px] leading-[24px] capitalize'> {"Maintain"} </span>
                                <span className='text-[#A5A5A5] text-[12px] leading-[24px] capitalize'> {"Emerging"} </span>
                                <span className='text-[#A5A5A5] text-[12px] leading-[24px] capitalize'> {"Process"} </span>
                                <span className='text-[#A5A5A5] text-[12px] leading-[24px] capitalize'> {"Improvements."} </span>
                            </div>
                            <div className='flex items-center gap-2 w-full justify-start'>
                                <img src={img} alt="" className='h-[31px] w-[31px] object-cover rounded-full' />
                                <span className='text-[#333333] text-[11.63px] font-semibold leading-[14.17px] capitalize'> {"Jane Doe"} </span>
                            </div>
                        </div>

                        <div className='h-[2px] w-full bg-[#A5A5A5]' />

                        <div className='flex items-center justify-between gap-2 w-full px-4'>
                            <span className='flex items-center gap-2 w-full text-[12px] text-[#a5a5a5] leading-[12px]'> <BiCalendar color='#A5A5A5' size={"20"} /> {"February 10, 2023"} </span>
                            <span className='flex items-center gap-2 w-full text-[12px] text-[#a5a5a5] leading-[12px]'> <AiOutlineComment color='#A5A5A5' size={"20"} /> {"3"} Comments </span>
                        </div>
                    </div>
                </div>
            </Fade>
            </NavLink>
        </div>

        {/* Mobile */}
        <Main id='slider__' className='block w-[100%] lg:hidden'>
            <div className='flex items-start justify-start gap-6 w-[180vw] sm:w-[100vw]'>
                <NavLink to={``}>
                    <Fade cascade down>
                    <div className='flex items-start w-[100%] border-[0.5px] border-[#C4C4C4] rounded-[10px]'>
                        <div className='flex-[0.40] flex items-start w-full'>
                            <img src={img} alt="" className='h-[190px] object-contain' />
                        </div>

                        <div className='flex-[0.60] flex flex-col gap-2 pt-4 pb-1'>
                            <div className='flex flex-col gap-2 px-4 w-full'>
                                <div>
                                    <Title2 text={"Optimaztion"} light />
                                </div>
                                <div className=''>
                                    <Heading text1={"Black Woman Rejoices"} posiStart txtSm txtSmValue={9} />
                                </div>
                                <div className='flex flex-wrap items-center justify-between gap-1 w-full '>
                                    <span className='text-[#A5A5A5] text-[6.01px] lg:text-[12px] leading-[12.02px] lg:leading-[24px] capitalize'> {"Globally"} </span>
                                    <span className='text-[#A5A5A5] text-[6.01px] lg:text-[12px] leading-[12.02px] lg:leading-[24px] capitalize'> {"Maintain"} </span>
                                    <span className='text-[#A5A5A5] text-[6.01px] lg:text-[12px] leading-[12.02px] lg:leading-[24px] capitalize'> {"Emerging"} </span>
                                    <span className='text-[#A5A5A5] text-[6.01px] lg:text-[12px] leading-[12.02px] lg:leading-[24px] capitalize'> {"Process"} </span>
                                    <span className='text-[#A5A5A5] text-[6.01px] lg:text-[12px] leading-[12.02px] lg:leading-[24px] capitalize'> {"Improvements."} </span>
                                </div>
                                <div className='flex items-center gap-1 w-full justify-start'>
                                    <img src={img} alt="" className='h-[15.53px] lg:h-[31px] w-[15.53px] lg:w-[31px] object-cover rounded-full' />
                                    <span className='text-[#333333] text-[5.82px] lg:text-[11.63px] font-semibold leading-[14.17px] capitalize'> {"Jane Doe"} </span>
                                </div>
                            </div>

                            <div className='h-[2px] w-full bg-[#A5A5A5]' />

                            <div className='flex items-center justify-between gap-2 w-full px-4'>
                                <span className='flex items-center gap-2 w-full text-[6.01px] lg:text-[12px] text-[#a5a5a5] leading-[12px]'> <BiCalendar color='#A5A5A5' size={"18.5"} /> {"February 10, 2023"} </span>
                                <span className='flex items-center gap-2 w-full text-[6.01px] lg:text-[12px] text-[#a5a5a5] leading-[12px]'> <AiOutlineComment color='#A5A5A5' size={"18.5"} /> {"3"} Comments </span>
                            </div>
                        </div>
                    </div>
                </Fade>
                </NavLink>

                <NavLink to={``}>
                    <Fade cascade down>
                    <div className='flex items-start w-[100%] border-[0.5px] border-[#C4C4C4] rounded-[10px]'>
                        <div className='flex-[0.40] flex items-start w-full'>
                            <img src={img} alt="" className='h-[190px] object-contain' />
                        </div>

                        <div className='flex-[0.60] flex flex-col gap-2 pt-4 pb-1'>
                            <div className='flex flex-col gap-2 px-4 w-full'>
                                <div>
                                    <Title2 text={"Optimaztion"} light />
                                </div>
                                <div className=''>
                                    <Heading text1={"Black Woman Rejoices"} posiStart txtSm txtSmValue={9} />
                                </div>
                                <div className='flex flex-wrap items-center justify-between gap-1 w-full '>
                                    <span className='text-[#A5A5A5] text-[6.01px] lg:text-[12px] leading-[12.02px] lg:leading-[24px] capitalize'> {"Globally"} </span>
                                    <span className='text-[#A5A5A5] text-[6.01px] lg:text-[12px] leading-[12.02px] lg:leading-[24px] capitalize'> {"Maintain"} </span>
                                    <span className='text-[#A5A5A5] text-[6.01px] lg:text-[12px] leading-[12.02px] lg:leading-[24px] capitalize'> {"Emerging"} </span>
                                    <span className='text-[#A5A5A5] text-[6.01px] lg:text-[12px] leading-[12.02px] lg:leading-[24px] capitalize'> {"Process"} </span>
                                    <span className='text-[#A5A5A5] text-[6.01px] lg:text-[12px] leading-[12.02px] lg:leading-[24px] capitalize'> {"Improvements."} </span>
                                </div>
                                <div className='flex items-center gap-1 w-full justify-start'>
                                    <img src={img} alt="" className='h-[15.53px] lg:h-[31px] w-[15.53px] lg:w-[31px] object-cover rounded-full' />
                                    <span className='text-[#333333] text-[5.82px] lg:text-[11.63px] font-semibold leading-[14.17px] capitalize'> {"Jane Doe"} </span>
                                </div>
                            </div>

                            <div className='h-[2px] w-full bg-[#A5A5A5]' />

                            <div className='flex items-center justify-between gap-2 w-full px-4'>
                                <span className='flex items-center gap-2 w-full text-[6.01px] lg:text-[12px] text-[#a5a5a5] leading-[12px]'> <BiCalendar color='#A5A5A5' size={"18.5"} /> {"February 10, 2023"} </span>
                                <span className='flex items-center gap-2 w-full text-[6.01px] lg:text-[12px] text-[#a5a5a5] leading-[12px]'> <AiOutlineComment color='#A5A5A5' size={"18.5"} /> {"3"} Comments </span>
                            </div>
                        </div>
                    </div>
                </Fade>
                </NavLink>
            </div>
        </Main>
    </>
  )
}

export default NewsComponent