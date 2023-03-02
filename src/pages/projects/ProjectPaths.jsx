import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Footer from '../../components/Footer'
import HeaderTitle from '../../components/labels/HeaderTitle'
import LinkHeaderText from '../../components/labels/LinkHeaderText'
import Navbar from '../../components/Navbar'
import ProjectDiv from '../../components/projectPage/ProjectDiv'

const ProjectPaths = () => {

    const [searchedProject, setSearchedProject] = useState("");

  return (
    <>
        <Navbar />

        <>
            <div className='relative flex flex-col bg-[#fff] w-full '>
              <div className='project_bg__gradient flex items-center justify-center h-[400px] lg:h-[600px] w-full'>
                <div className='flex flex-col items-center justify-start gap-8 w-full'>
                  <div className='flex flex-col items-center gap-1 w-full'>
                    <div>
                      <HeaderTitle text={"All Projects"} />
                    </div>
                    <div>
                      <LinkHeaderText txtLight={true} text={"Projects"} />
                    </div>
                    <span className='text-[15.51px] lg:text-[18px] text-[#fff] font-medium font-[Montserrat Alternates] text-center leading-[18.91px] lg:leading-[40px] w-full lg:w-[680px] capitalize'> Become a step closer to landing your dream  tech job. Build real world projects created by industry experts and grow your portfolio. </span>
                  </div>
                </div>
              </div>
            </div>

            <div className='text-[#fff] bg-[#124F35] w-full lg:pt-20 lg:pb-24 lg:px-16'>
                <div className='flex items-start gap-8 bg-[#124832] border border-[#B1FD55] rounded-[20px] w-full lg:py-12 lg:px-8'>
                    <div className='flex-[0.3] flex flex-col gap-8 justify-start items-start w-full'>
                        <div className='project_path__search_box__shadow flex flex-col items-start justify-start gap-4 bg-[#14744C80] w-full pt-8 pb-6 px-4'>
                            <span className='text-[14px] font-bold leading-[17.07px]'> Search Here </span>
                            <div className='flex items-center justify-start gap-2 border border-[#fff] bg-[#14744C] w-full pr-2'>
                                <input type="text" placeholder='Search For Project' onChange={e => setSearchedProject(e.target.value)} 
                                    className='placeholder:text-[#fff] text-[14px] text-[#fff] bg-[#14744C] focus:outline-none pl-2 w-full h-[37px]' 
                                />
                                <BsSearch color='#fff' size={"13"} />
                            </div>
                        </div>

                        <div className='project_path__search_box__shadow flex flex-col items-start justify-start gap-4 bg-[#14744C80] w-full py-6 px-4'>
                            <span className='text-[14px] font-bold leading-[17.07px]'> Search Here </span>

                            <div className='flex flex-col items-start justify-start gap-2 w-full'>
                                <span className='bg-[#14744C] cursor-pointer w-full px-2 py-3'> Data Analytics </span>
                                <span className='bg-[#14744C] cursor-pointer w-full px-2 py-3'> Sales Analytics </span>
                                <span className='bg-[#14744C] cursor-pointer w-full px-2 py-3'> Supply Chain Analytics </span>
                                <span className='bg-[#14744C] cursor-pointer w-full px-2 py-3'> Financial Analytics </span>
                                <span className='bg-[#14744C] cursor-pointer w-full px-2 py-3'> HR Analytics </span>
                                <span className='bg-[#14744C] cursor-pointer w-full px-2 py-3'> Data Science and Machine Learning </span>
                                <span className='bg-[#14744C] cursor-pointer w-full px-2 py-3'> Data Engineering </span>
                                <span className='bg-[#14744C] cursor-pointer w-full px-2 py-3'> Power Platform Developer </span>
                                <span className='bg-[#14744C] cursor-pointer w-full px-2 py-3'> Artificial Intelligence </span>
                            </div>
                        </div>
                    </div>

                    <div className='flex-[0.7] flex flex-col justify-start items-start gap-6 w-full'>
                      <div className='flex items-start justify-between w-full bg-[#14744C] h-[57px]'>
                        <span className={`flex items-center justify-center w-[25%] text-[14px] font-bold leading-[17.07px] ${"bg-[#B1FD55] border-b-2 border-[#B1FD55] text-[#000]"}  h-full cursor-pointer`}>
                            All 
                        </span>
                        <span className={`flex items-center justify-center w-[25%] text-[14px] font-bold leading-[17.07px] h-full cursor-pointer`}>
                            Beginners 
                        </span>
                        <span className={`flex items-center justify-center w-[25%] text-[14px] font-bold leading-[17.07px] h-full cursor-pointer`}>
                            Intermediate 
                        </span>
                        <span className={`flex items-center justify-center w-[25%] text-[14px] font-bold leading-[17.07px] h-full cursor-pointer`}>
                            Advanced
                        </span>
                      </div>

                      <div className='grid lg:grid-cols-2 lg:gap-6 w-full'>
                        <ProjectDiv />
                        <ProjectDiv />
                        <ProjectDiv />
                      </div>
                    </div>
                </div>
            </div>
        </>

        <Footer />
    </>
  )
}

export default ProjectPaths