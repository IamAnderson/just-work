import React from 'react'
import Title from '../labels/Title'
import img1 from "../../assets/google.png";
import img2 from "../../assets/amazon.png";
import img3 from "../../assets/windows.png";
import img4 from "../../assets/img3.png";
import img5 from "../../assets/img4.png";
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';


const Main = styled.div`
  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar{
    display: none;
  }
`


const InstructorsWorkComponent = () => {
  return (
    <div className='news_comp__box_shadow flex flex-col items-center justify-start gap-8 bg-[#fff] w-full lg:w-[80%] py-6 px-4 lg:px-24'>
        <>
            <Title widthVar widthNum={495} text={"Where our instructors and students work"} />
        </>

        <Main className='flex items-center justify-between w-full'>
            <Fade cascade damping={0.4}>
            <div className='flex items-center w-full border-r-[3px] mr-4 pr-4 lg:pr-0 lg:mr-16 border-[#eeeded]'>
                <img src={img1} alt="" className='w-[31.89px] lg:w-[55px] h-[31.89px] lg:h-[55px] object-cover' />
                {/* <div className='h-[31.89px] lg:h-[55px] w-[2px] bg-[#eeeded]' /> */}
            </div>
            
            <div className='flex items-center w-full border-r-[3px] mr-4 pr-4 lg:pr-0 lg:mr-16 border-[#eeeded]'>
                <img src={img2} alt="" className='w-[31.89px] lg:w-[55px] h-[31.89px] lg:h-[55px] object-cover' />
                {/* <div className='h-[31.89px] lg:h-[55px] w-[2px] bg-[#eeeded]' /> */}
            </div>
            
            <div className='flex items-center w-full border-r-[3px] mr-4 pr-4 lg:pr-0 lg:mr-16 border-[#eeeded]'>
                <img src={img3} alt="" className='w-[31.89px] lg:w-[55px] h-[31.89px] lg:h-[55px] object-cover' />
                {/* <div className='h-[31.89px] lg:h-[55px] w-[2px] bg-[#eeeded]' /> */}
            </div>
            
            <div className='flex items-center w-full border-r-[3px] mr-4 pr-4 lg:pr-0 lg:mr-16 border-[#eeeded]'>
                <img src={img4} alt="" className='w-[31.89px] lg:w-[55px] h-[31.89px] lg:h-[55px] object-cover' />
                {/* <div className='h-[31.89px] lg:h-[55px] w-[2px] bg-[#eeeded]' /> */}
            </div>
            
            <div className='flex items-center w-full'>
                <img src={img5} alt="" className='w-[31.89px] lg:w-[55px] h-[31.89px] lg:h-[55px] object-cover' />
                {/* <div className='h-[31.89px] lg:h-[55px] w-[2px] bg-[#eeeded]' /> */}
            </div>
            </Fade>
        </Main>


        {/* <div className='flex items-center justify-between flex-wrap gap-2 lg:w-full border-r-[3px] mr-4 pr-4 lg:pr-0 lg:mr-16 border-[#eeeded]'>
            {partnersComponentData.map((item, index) => (
                <PartnersComponent item={item} key={index} />
            ))}
        </div> */}
    </div>
  )
}

export default InstructorsWorkComponent