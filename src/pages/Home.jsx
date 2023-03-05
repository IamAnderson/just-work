import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import img2 from "../assets/pc.png"
import img3 from "../assets/chart.png"
import img4 from "../assets/document.png"
import img5 from "../assets/thread1.png"
import img8 from "../assets/img2.png"
import bgImg from "../assets/bgImg1.png"
import GetStartedBtn from '../sub-component/GetStartedBtn'
import { BsPlayCircle } from 'react-icons/bs'
import Title from '../components/labels/Title'
import { NavLink } from 'react-router-dom'
import Heading from '../components/labels/Heading'
import Title1 from '../components/labels/Title1'
import CheckMText from '../components/labels/CheckMText'
import ExploreComponent from '../components/homePage/ExploreComponent'

import { commentSlideData, exploreComponentData, partnersComponentData, TestimonialData, toolsComponentData } from '../data/data'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"

import MethodologyApproachComponent from '../components/homePage/MethodologyApproachComponent'
import PartnersComponent from '../components/homePage/PartnersComponent'
import TestimonialComp from '../components/homePage/TestimonialComp'
import Heading1 from '../components/labels/Heading1'
import NewsComponent from '../components/homePage/NewsComponent'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import styled from 'styled-components'
import AboutComponent from '../components/homePage/AboutComponent'
import StatsComponent from '../components/homePage/StatsComponent'
import ToolsComponent from '../components/homePage/ToolsComponent'
import ApproachComponent from '../components/homePage/ApproachComponent'
import { Fade, Zoom } from 'react-awesome-reveal'
import PopUpComponent from '../components/PopUpComponent'
import InstructorsWorkComponent from '../components/homePage/InstructorsWorkComponent'

const Main = styled.div`
  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar{
    display: none;
  }
`

const Home = () => {

  const [showPopup, setShowPopup] = useState(false);

  const [showBgImg, setShowBgImg] = useState(false);

  const [currentFrame, setCurrentFrame] = useState(0);
  const lengthOfFrame = commentSlideData.length;

  const [current, setCurrent] = useState(0);
  const length = TestimonialData.length;

  // TestimonialComponent Slide
  const prevBtn = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextBtn = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };


  // ExploreComponent Slide
  const slideLeft = () => {
    var slider = document.getElementById("slider__");
    slider.scrollLeft = slider.scrollLeft - 950;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider__");
    slider.scrollLeft = slider.scrollLeft + 950;
  };


  // HeaderComment Toggle
  const nextFrame = () => {
    setCurrentFrame(currentFrame === lengthOfFrame - 1 ? 0 : currentFrame + 1);
  };

  const autoToggle = true;
  let setIntervalTime


  function auto() {
    setIntervalTime = setInterval (nextFrame, 3000)
  };


  useEffect(() => {
    if(autoToggle) {
        auto ()
    } 

    return () => clearInterval (setIntervalTime)
  }, [currentFrame]);


  // PopUpComponent Trigger
  useEffect(() => {
    let pop_status = localStorage.getItem('pop_status');
    if(!pop_status){
      setTimeout(() => 
        setShowPopup(true), 4500
      );
      localStorage.setItem('pop_status', 1);
    }
  }, [])


  //showBgImg Trigger
  useEffect(() => {
    setTimeout(() =>
      setShowBgImg(true), 1500
    );
  }, [])

  return (
    <>
        <Navbar />

        <>
          {showPopup && (
            <PopUpComponent closePopUp={() => setShowPopup(false)} />
          )}
        </>
        
        
        <div className='flex flex-col gap-24 w-full'>
            <div className='relative flex flex-col bg-[#fff] w-full'>
                <div className='relative header_bg__img_ flex flex-col lg:flex-row items-center lg:items-start justify-center lg:pt-8 h-[830px] lg:h-[750px] w-full px-4 lg:px-16'>
                  <div className='lg:flex-[0.5] flex flex-col items-start justify-start gap-8 w-full pt-24 lg:pt-[180px]'>
                    <Fade cascade>
                      <div className='flex flex-col items-center lg:items-start gap-1 w-full'>
                        <span className='text-[15.51px] lg:text-[32px] text-[#fff] font-bold font-[Montserrat Alternates] leading-[18.91px] lg:leading-[50px] capitalize'> Thrive in the Era of Tech by Working </span>
                        <span className='text-[15.51px] lg:text-[32px] text-[#fff] font-bold leading-[18.91px] lg:leading-[50px] capitalize'> on Real-World Problems Using a </span>
                        <span className='text-[15.51px] lg:text-[32px] text-[#fff] font-bold leading-[18.91px] lg:leading-[50px] capitalize'> Variety of Tools to Build your </span>
                        <span className='flex items-center gap-2 text-[15.51px] lg:text-[32px] text-[#fff] font-bold leading-[18.91px] lg:leading-[50px] capitalize'> Portfolio In <span className='text-[#B1FD55] font-black'> DATA SCIENCE </span> </span>
                      </div>
                    </Fade>
                    <Fade>
                      <div className='flex items-center lg:justify-start justify-center gap-4 w-full'>
                        <GetStartedBtn />

                        <div className='flex items-center gap-2 text-[#fff]'>
                          <span className='block cursor-pointer lg:hidden'><BsPlayCircle size={"15"} /></span>
                          <span className='hidden lg:block cursor-pointer'><BsPlayCircle size={"30"} /></span>
                          <span className='text-[6.23px] lg:text-[14px] font-[Inter] font-medium leading-[16.94px]'> How it works </span>
                        </div>
                      </div>
                    </Fade>
                  </div>

                  <div className={`flex-[0.5] relative flex items-center justify-end w-full ${showBgImg ? "show_bg__img" : "opacity-0"}`}>
                      <div className='relative rounded-t-full rounded-b-full overflow-hidden mt-4 lg:mt-24'>
                        <img src={bgImg} alt="" className='w-[100%] lg:w-[300px] h-[400px] lg:h-[500px] object-cover' />
                      </div>

                      <>
                      <div className='header_comment__calc flex flex-col gap-4 w-full'>
                        {commentSlideData.map((item, index) => (
                          <>
                            <div className={currentFrame !== index && "frame__animation"} key={index}>
                              <img src={item.img} alt="" className={`w-[187.55px] lg:w-[378px] h-[53.59px] lg:h-[108px] object-cover ${currentFrame === index && "opacity-[1]"}`} />
                            </div>
                          </>
                        ))}
                        </div>
                      </>
                  </div>

                  {/* */}
                  <div className='DESKTOP hidden lg:flex absolute -bottom-24 items-center justify-center w-full'>
                    <InstructorsWorkComponent />
                  </div>
                </div>
                
                  {/* */}
                  <div className='MOBILE block w-full lg:hidden'>
                    <InstructorsWorkComponent />
                  </div>

                {/* about amdari */}
                <Fade>
                  <div className='DESKTOP spiral2_bg__img hidden lg:block h-[551.18px] w-full mt-48'>
                    <div className='pt-8'>
                      <AboutComponent checkBlue />
                    </div>
                  </div>

                  <div className='MOBILE block w-full lg:hidden mt-16'>
                    <AboutComponent />
                  </div>
                </Fade>
            </div>


          <div className='flex flex-col justify-start w-full'>
              {/* explore projects */}
              <Fade down>
                <div className='flex flex-col items-center gap-8 w-full bg-[#fff] lg:pt-12 px-8 lg:pl-56 mb-20 lg:mb-24'>
                  <div className='flex justify-center items-center w-full lg:pr-56'>
                    <Title text={"EXPLORE PROJECTS"} />
                  </div>
                  
                  <>
                    <div className='hidden lg:block pr-56'>
                      <Heading text1={"Gain hands-on experience by solving real-world"} text2={"problems with hundreds of projects"} />
                    </div>
                    
                    <div className='flex justify-center items-center w-full lg:hidden'>
                      <Heading text1={"Gain hands-on experience by solving real-world problems with hundreds of projects"} />
                    </div>
                  </>
                  

                  <div className='w-full lg:pr-48'>
                      <div className='relative w-full'>
                        <div className='hidden lg:block'>
                          <div className='explore_content_arrow_box__shadow absolute top-[45%] left-[-50px] h-[30px] w-[30px] flex items-center justify-center bg-[#F5F5F5] rounded-full cursor-pointer' onClick={slideLeft}> <HiOutlineArrowNarrowLeft color="#00A2FD" size="20" /> </div>
                          <div className='explore_content_arrow_box__shadow absolute top-[45%] right-[-40px] h-[30px] w-[30px] flex items-center justify-center bg-[#F5F5F5] rounded-full cursor-pointer' onClick={slideRight}> <MdOutlineArrowRightAlt color="#00A2FD" size="20" /> </div>
                        </div>

                        <Main id='slider__' className='w-[100%]'>
                          <div className='flex items-center gap-4 lg:gap-8 w-[400vw] sm:w-[200vw] lg:w-[185vw]'>
                            {exploreComponentData.map((item, index) => (
                              <ExploreComponent item={item} key={index} />
                            ))}
                          </div>
                        </Main>
                      </div>
                  </div>
                </div>
              </Fade>

              {/* 10x better section */}
              <div className='bg_frame__1 w-full'>
                <div className='flex flex-col lg:flex-row items-start gap-24 lg:gap-0 pt-8'>
                    <div className='lg:flex-[0.4] pt-16 px-8 lg:pl-56'>
                      <Fade down>
                        <div className='mb-4 lg:mb-20'>
                          <Title1 text={"Become 10x Better"} />
                        </div>
                        <div className='flex flex-col items-start gap-6'>
                          <div>
                            <Heading text1={"How our Projects Set you Up for "} text2={"Career Success"} colorWhite posiStart />
                          </div>
                          <div className='flex flex-col items-start gap-4 lg:gap-6'>
                            <CheckMText variant text={"You can get a job by building a project portfolio with our reusable projects."} />
                            <CheckMText variant text={"We connect you to experienced mentors for career guidance."} />
                            <CheckMText variant text={"You get work done faster with our ready-made solution templates."} />
                            <CheckMText variant text={"Get ideas for PoCs from our sample use-cases"} />
                            <CheckMText variant text={"You gain access to 50+ enterprise-grade projects."} />
                            <CheckMText variant text={"We build your confidence to build real world projects by learning from real industry experts."} />
                          </div>    
                          <NavLink to="/signup" reloadDocument>
                            <div className='rm__gradient flex items-center justify-center w-[101.72px] lg:w-[183px] h-[19.79px] lg:h-[36px] text-[7.7px] lg:text-[14px] text-[#fff] font-medium'>
                              Get started for free
                            </div>                  
                          </NavLink>
                        </div>
                      </Fade>
                    </div>
                    <Fade right>
                      <div className='lg:flex-[0.6]'>
                        <img src={img8} alt="" className='w-full lg:w-[839px] h-[100%] object-cover' />
                      </div>
                    </Fade>
                </div>   
              </div>

              {/* Our approach section */}
              <div className='pt-24 mb-24 lg:mb-52'>
                <ApproachComponent />
              </div>

              {/* {stats} */}
              <>
                <StatsComponent  />
              </>

              {/* our partners section */}
              {/* <div className='flex flex-col items-center gap-8 w-full px-8 lg:px-0 mb-36'>
                <div className='flex justify-center items-center w-full lg:block lg:px-56'>
                   <Title text={'Our Partners'} />
                </div>
                
                <>
                  <div className='hidden lg:block mb-8 lg:px-56'>
                    <Heading text1={"Our industry ready projects are created by industry"} text2={"experts from top organizations"} />
                  </div>
                
                  <div className='block lg:hidden mb-8'>
                    <Heading text1={"Our industry ready projects are created by industry experts from top organizations"} txtcenter />
                  </div>
                </>

                <div className='flex items-center justify-between flex-wrap gap-2 lg:gap-4 w-full px-8 lg:px-56'>
                  {partnersComponentData.map((item, index) => (
                    <PartnersComponent item={item} key={index} />
                  ))}
                </div>
              </div> */}


              {/* tools covered section */}
              <Fade>
                <div className='flex flex-col items-center gap-8 w-full px-8 lg:px-0 mb-36'>
                  <div className='flex justify-center items-center w-full lg:px-56'>
                    <Title text={'Tools Covered'} />
                  </div>

                  <div className='flex items-center justify-between flex-wrap gap-2 lg:gap-4 w-full px-8 lg:px-56'>
                    {toolsComponentData.map((item, index) => (
                      <ToolsComponent item={item} key={index} />
                    ))}
                  </div>
                </div>
              </Fade>


              {/* testimonials section */}
              <Fade down>
                <div className='bg_frame__1 w-full mb-28'>
                  <Zoom cascade down>
                    <div className='flex flex-col items-center gap-16 w-full py-20 px-8 lg:px-20'>
                        <div>
                          <Title1 text={"What people have to say"} />
                        </div>
                        <div className='hidden lg:block'>
                          <Heading text1={" Loved by learners and professionals from "} text2={"hundreds of companies"} colorWhite />
                        </div>

                        <div className='block lg:hidden'>
                          <Heading text1={" Loved by learners and professionals"} text2={"from hundreds of companies"} colorWhite />
                        </div>

                        <div className='relative border border-[#00A2FD] py-16 lg:px-8 w-full rounded-[20px]'>
                          <div>
                            <div className='explore_content_arrow_box__shadow absolute top-[45%] left-[-20px] h-[30px] w-[30px] flex items-center justify-center bg-[transparent] border border-[#fff] rounded-full cursor-pointer' onClick={prevBtn}> <HiOutlineArrowNarrowLeft color="#fff" size="20" /> </div>
                            <div className='explore_content_arrow_box__shadow absolute top-[45%] right-[-20px] h-[30px] w-[30px] flex items-center justify-center bg-[#F5F5F5] rounded-full cursor-pointer' onClick={nextBtn}> <MdOutlineArrowRightAlt color="#00A2FD" size="20" /> </div>
                          </div>

                          <div className='flex items-start justify-center w-full mb-8'>
                            {
                              TestimonialData.map((item, index) => {
                                  return (
                                      <>
                                          <div className={current === index ? 'sLide active' : 'sLide'}>
                                              {current === index && (
                                                  <TestimonialComp item={item} key={index} />
                                              )}
                                          </div>
                                      </>
                                  )
                              })
                            }
                          </div>

                          <div className='flex justify-center items-center gap-2 lg:gap-4'>
                              <span className={`h-[7px] lg:h-[14px] w-[7px] lg:w-[14px] rounded-full ${current === 0 ? "dot_title__component lg:h-[10px] w-[10px]" : "bg-[#fff]"}`} onClick={() => setCurrent(0)}/>
                              <span className={`h-[7px] lg:h-[14px] w-[7px] lg:w-[14px] rounded-full ${current === 1 ? "dot_title__component lg:h-[10px] w-[10px]" : "bg-[#fff]"}`} onClick={() => setCurrent(1)} />
                              <span className={`h-[7px] lg:h-[14px] w-[7px] lg:w-[14px] rounded-full ${current === 2 ? "dot_title__component lg:h-[10px] w-[10px]" : "bg-[#fff]"}`} onClick={() => setCurrent(2)}/>
                          </div>
                        </div>
                    </div>
                  </Zoom>
                </div> 
              </Fade>

              {/* news section */}
              <Zoom cascade down>
                <div className='flex flex-col items-start gap-4 lg:gap-8 w-full px-8 lg:pl-56 mb-20 lg:mb-32'>
                  <div className='flex justify-start lg:justify-center items-center w-full lg:block '>
                    <Title text={"Our Blog"} />
                  </div>

                  <div>
                    <Heading1 text1={"Our Latest News"} />
                  </div>

                  <div className='flex items-start w-full lg:pr-24'>
                    <NewsComponent />
                  </div>
                </div>
              </Zoom>
              
              {/* newsletter */}
              <div className='mb-20 lg:mb-0'>
                <Newsletter />
              </div>

              <>
                <Footer />
              </>
          </div>
        </div>
    </>
  )
}

export default Home