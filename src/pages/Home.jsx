import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import img2 from "../assets/pc.png"
import img3 from "../assets/chart.png"
import img4 from "../assets/document.png"
import img5 from "../assets/thread1.png"
import img8 from "../assets/img2.png"
import GetStartedBtn from '../sub-component/GetStartedBtn'
import { BsPlayCircle } from 'react-icons/bs'
import Title from '../components/labels/Title'
import { NavLink } from 'react-router-dom'
import Heading from '../components/labels/Heading'
import Title1 from '../components/labels/Title1'
import CheckMText from '../components/labels/CheckMText'
import ExploreComponent from '../components/homePage/ExploreComponent'

import { exploreComponentData, partnersComponentData, TestimonialData } from '../data/data'
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

const Main = styled.div`
  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar{
    display: none;
  }
`

const Home = () => {
  const [current, setCurrent] = useState(0);
  const length = TestimonialData.length;

  const prevBtn = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextBtn = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };



  const slideLeft = () => {
    var slider = document.getElementById("slider__");
    slider.scrollLeft = slider.scrollLeft - 950;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider__");
    slider.scrollLeft = slider.scrollLeft + 950;
  };


  return (
    <>
        <Navbar />
        
        <div className='flex flex-col gap-[25rem] w-full'>
          <div className='relative flex flex-col pb-52 bg-[#fff] w-full'>
              <div className='header_bg__img flex items-start justify-center h-[400px] lg:h-[800px] w-full'>
                <div className='flex flex-col items-center justify-start gap-8 w-full pt-32'>
                  <div className='flex flex-col items-center gap-1 w-full'>
                    <span className='text-[15.51px] lg:text-[36px] text-[#fff] font-medium font-[Montserrat Alternates] leading-[18.91px] lg:leading-[43.88px]'> Access a wide range of datasets to </span>
                    <span className='text-[15.51px] lg:text-[36px] text-[#fff] font-medium leading-[18.91px] lg:leading-[43.88px]'> solve real-world problems and accelerate your </span>
                    <span className='flex items-center gap-2 text-[15.51px] lg:text-[36px] text-[#fff] font-medium leading-[18.91px] lg:leading-[43.88px]'> work in <span className='text-[#FBC609] font-bold'> DATA SCIENCE </span> </span>
                  </div>

                  <div className='text-[#fff] text-[10px] lg:text-[18px] leading-[12.91px] lg:leading-[21.94px] font-bold'>
                    Get the skills you need to get ahead with our most end-to-end projects.
                  </div>

                  <div className='flex flex-col lg:flex-row items-center justify-center gap-4'>
                    <GetStartedBtn />

                    <div className='flex items-center gap-2 text-[#fff]'>
                      <span className='block cursor-pointer lg:hidden'><BsPlayCircle size={"15"} /></span>
                      <span className='hidden lg:block cursor-pointer'><BsPlayCircle size={"30"} /></span>
                      <span className='text-[6.23px] lg:text-[14px] font-[Inter] font-medium leading-[16.94px]'> How it works </span>
                    </div>
                  </div>
                </div>
              </div>

              <>
                <div className='DESKTOP hidden lg:block spiral1_bg__img absolute bottom-[200px] right-0 left-0 h-[355px] w-full'> 
                  <div className='relative flex items-start h-full mt-20 px-8 lg:px-56 w-full'>
                    <div className='flex flex-col lg:flex-row lg:items-start justify-start lg:justify-between w-full z-10'>
                      <div className='flex flex-col items-start w-[251px]'>
                        <div className='flex justify-start w-full'>
                          <div className='header_bg__icon_ flex items-center justify-center h-[100px] w-[100px] bg-[#fff] rounded-full'>
                            <div className='header_bg__icon flex items-center justify-center w-[68px] h-[64px] rounded-full'>
                              <img src={img2} alt="" className='w-[22px] h-[20px] object-cover' />
                            </div>
                          </div>
                        </div>

                        <div className='flex flex-col gap-4 items-start w-full'>
                          <span className='text-[#333333] text-[18px] font-extrabold'> Live Hackathon: </span>
                          <span className='text-[#878787] text-[12px] leading-[24px]'> Join live hackathons to test your ability in solving real life business cases with other Data Scientists. </span>
                        </div>
                      </div>

                      <div className='flex flex-col items-start w-[251px]'>
                        <div className='flex justify-start w-full'>
                          <div className='header_bg__icon_ flex items-center justify-center h-[100px] w-[100px] bg-[#fff] rounded-full'>
                            <div className='header_bg__icon flex items-center justify-center w-[68px] h-[64px] rounded-full'>
                              <img src={img3} alt="" className='w-[22px] h-[20px] object-cover' />
                            </div>
                          </div>
                        </div>

                        <div className='flex flex-col gap-4 items-start w-full'>
                          <span className='text-[#333333] text-[18px] font-extrabold'> Industry Grade Projects: </span>
                          <span className='text-[#878787] text-[12px] leading-[24px]'> Get exposed to cutting-edge projects from leading experts. Assess  projects to improve your skill. </span>
                        </div>
                      </div>

                      <div className='flex flex-col items-start w-[251px]'>
                        <div className='flex justify-start w-full'>
                          <div className='header_bg__icon_ flex items-center justify-center h-[100px] w-[100px] bg-[#fff] rounded-full'>
                            <div className='header_bg__icon flex items-center justify-center w-[68px] h-[64px] rounded-full'>
                              <img src={img4} alt="" className='w-[22px] h-[20px] object-cover' />
                            </div>
                          </div>
                        </div>

                        <div className='flex flex-col gap-4 items-start w-full'>
                          <span className='text-[#333333] text-[18px] font-extrabold'> Ready Made Solutions: </span>
                          <span className='text-[#878787] text-[12px] leading-[24px]'> Stop spending weeks building a project from scratch. We have 250+ real business problems solved </span>
                        </div>
                      </div>
                    </div>

                    <div className='absolute top-[-150px] left-0 w-[100%]'>
                      <img src={img5} alt="" className='w-full h-full object-cover' />
                    </div>
                  </div>
                </div>

                <div className='MOBILE block spiral3_bg__img absolute bottom-[-100px] right-0 left-0 h-[355px] w-full lg:hidden'> 
                  <div className='relative flex items-start h-full mt-20 px-8 lg:px-56 w-full'>

                    <div className='flex flex-col sm:flex-row sm:items-start justify-start sm:justify-between gap-8 w-full z-10'>
                      <div className='flex flex-col items-start gap-4 w-[251px]'>
                        <div className='flex justify-start w-full'>
                          <div className='header_bg__icon_ flex items-center justify-center h-[67.69px] w-[67.69px] lg:h-[100px] lg:w-[100px] bg-[#fff] rounded-full'>
                            <div className='header_bg__icon flex items-center justify-center w-[46.03px] lg:w-[68px] h-[43.32px] lg:h-[64px] rounded-full'>
                              <img src={img2} alt="" className='w-[14.89px] lg:w-[22px] h-[13.54px] lg:h-[20px] object-cover' />
                            </div>
                          </div>
                        </div>

                        <div className='flex flex-col gap-4 items-start w-full'>
                          <span className='text-[#333333] text-[14px] lg:text-[18px] font-extrabold'> Live Hackathon: </span>
                          <span className='text-[#878787] text-[12px] leading-[24px]'> Join live hackathons to test your ability in solving real life business cases with other Data Scientists. </span>
                        </div>
                      </div>

                      <div className='flex flex-col items-start gap-4 w-[251px]'>
                        <div className='flex justify-start w-full'>
                          <div className='header_bg__icon_ flex items-center justify-center h-[67.69px] w-[67.69px] lg:h-[100px] lg:w-[100px] bg-[#fff] rounded-full'>
                            <div className='header_bg__icon flex items-center justify-center w-[46.03px] lg:w-[68px] h-[43.32px] lg:h-[64px] rounded-full'>
                              <img src={img3} alt="" className='w-[14.89px] lg:w-[22px] h-[13.54px] lg:h-[20px] object-cover' />
                            </div>
                          </div>
                        </div>

                        <div className='flex flex-col gap-4 items-start w-full'>
                          <span className='text-[#333333] text-[14px] lg:text-[18px] font-extrabold'> Industry Grade Projects: </span>
                          <span className='text-[#878787] text-[12px] leading-[24px]'> Get exposed to cutting-edge projects from leading experts. Assess  projects to improve your skill. </span>
                        </div>
                      </div>

                      <div className='flex flex-col items-start gap-4 w-[251px]'>
                        <div className='flex justify-start w-full'>
                          <div className='header_bg__icon_ flex items-center justify-center h-[67.69px] w-[67.69px] lg:h-[100px] lg:w-[100px] bg-[#fff] rounded-full'>
                            <div className='header_bg__icon flex items-center justify-center w-[46.03px] lg:w-[68px] h-[43.32px] lg:h-[64px] rounded-full'>
                              <img src={img4} alt="" className='w-[14.89px] lg:w-[22px] h-[13.54px] lg:h-[20px] object-cover' />
                            </div>
                          </div>
                        </div>

                        <div className='flex flex-col gap-4 items-start w-full'>
                          <span className='text-[#333333] text-[14px] lg:text-[18px] font-extrabold'> Ready Made Solutions: </span>
                          <span className='text-[#878787] text-[12px] leading-[24px]'> Stop spending weeks building a project from scratch. We have 250+ real business problems solved </span>
                        </div>
                      </div>
                    </div>

                    <div className='absolute top-[-120px] left-0 w-[100%]'>
                      <img src={img5} alt="" className='w-full h-full object-cover' />
                    </div>  
                  </div>
                </div>
              </>

              {/* about amdari */}
              <div className='DESKTOP spiral2_bg__img hidden absolute bottom-[-870px] lg:bottom-[-370px] right-0 left-0 h-[551.18px] w-full lg:pb-28 lg:block'>
                <>
                  <AboutComponent />
                </>
              </div>

              <div className='MOBILE block absolute bottom-[-1200px] sm:bottom-[-750px] right-0 left-0 w-full lg:pb-28 lg:hidden'>
                <AboutComponent />
              </div>
            </div>


          <div className='flex flex-col justify-start w-full'>
              {/* explore projects */}
              <div className='flex flex-col items-center gap-8 w-full bg-[#fff] mt-[56rem] sm:mt-[26rem] lg:mt-0 lg:pt-12 px-8 lg:pl-56 mb-20 lg:mb-24'>
                <div className='flex justify-center items-center w-full lg:block lg:pr-56'>
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

              {/* 10x better section */}
              <div className='bg_frame__1 w-full'>
                <div className='flex flex-col lg:flex-row items-start gap-24 lg:gap-0 pt-8'>
                    <div className='lg:flex-[0.4] pt-16 px-8 lg:pl-56'>
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
                          <div className='flex items-center justify-center w-[101.72px] h-[19.79px] text-[7.7px] text-[#fff] bg-[#FFCE31]  font-medium lg:hidden'>
                            Get started for free
                          </div>                  
                        </NavLink>
                      </div>

                    </div>
                    <div className='lg:flex-[0.6]'>
                      <img src={img8} alt="" className='w-full lg:w-[839px] h-[100%] object-cover' />
                    </div>
                </div>   
              </div>

              {/* Our approach section */}
              <div className='flex flex-col items-center gap-8 pt-24 mb-24 lg:mb-52 pl-8 lg:pl-56'>
                <div className='flex justify-center items-center w-full lg:block pr-8 lg:pr-56'>
                  <Title text={"Our Approach"} />
                </div>

                <div className='pr-8 lg:pr-56'>
                  <Heading text1={"Learning by doing is our proven learning"} text2={"methodology."} />
                </div>

                <div className='flex items-center w-full'>
                    <MethodologyApproachComponent />
                </div>
              </div>

              {/* {stats} */}
              <>
                <StatsComponent  />
              </>

              {/* our partners section */}
              <div className='flex flex-col items-center gap-8 w-full px-8 lg:px-0 mb-36'>
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
              </div>

              {/* testimonials section */}
              <div className='bg_frame__1 w-full mb-28'>
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
                          <span className={`h-[7px] lg:h-[14px] w-[7px] lg:w-[14px] rounded-full ${current === 0 ? "dot_title__component lg:h-[10px] w-[10px]" : "bg-[#fff]"}`} />
                          <span className={`h-[7px] lg:h-[14px] w-[7px] lg:w-[14px] rounded-full ${current === 1 ? "dot_title__component lg:h-[10px] w-[10px]" : "bg-[#fff]"}`} />
                          <span className={`h-[7px] lg:h-[14px] w-[7px] lg:w-[14px] rounded-full ${current === 2 ? "dot_title__component lg:h-[10px] w-[10px]" : "bg-[#fff]"}`} />
                      </div>
                    </div>
                </div>
              </div> 

              {/* news section */}
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