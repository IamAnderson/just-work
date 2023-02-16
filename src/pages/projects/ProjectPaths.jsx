import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Footer from '../../components/Footer'
import HeaderTitle from '../../components/Labels/HeaderTitle'
import LinkHeaderText1 from '../../components/Labels/LinkHeaderText1'
import Navbar from '../../components/Navbar'

const ProjectPaths = () => {

    const [searchedProject, setSearchedProject] = useState("");

  return (
    <>
        <Navbar />

        <>
            <div className='relative flex flex-col bg-[#fff] w-full '>
              <div className='header_bg__img flex items-center justify-center h-[400px] lg:h-[600px] w-full'>
                <div className='flex flex-col items-center justify-start gap-8 w-full'>
                  <div className='flex flex-col items-center gap-1 w-full'>
                    <div>
                      <HeaderTitle text={"All Projects"} />
                    </div>
                    <div>
                      <LinkHeaderText1 text={"Projects"} link1={"/projects"} text1={"Project Path"} />
                    </div>
                    <span className='text-[15.51px] lg:text-[18px] text-[#fff] font-medium font-[Montserrat Alternates] text-center leading-[18.91px] lg:leading-[40px] w-full lg:w-[615px]'> Advance to the Next Level in your Career by Attempting Projects Based on Your Skill Level </span>
                  </div>
                </div>
              </div>
            </div>

            <div className='text-[#fff] bg-[#000050] w-full lg:pt-20 lg:pb-24 lg:px-16'>
                <div className='flex items-start gap-8 bg-[#000066] border border-[#00A2FD] rounded-[20px] w-full lg:py-12 lg:px-8'>
                    <div className='flex-[0.3] flex flex-col gap-8 justify-start items-start w-full'>
                        <div className='project_path__search_box__shadow flex flex-col items-start justify-start gap-4 bg-[#00004A80] w-full pt-8 pb-6 px-4'>
                            <span className='text-[14px] font-bold leading-[17.07px]'> Search Here </span>
                            <div className='flex items-center justify-start gap-2 border border-[#fff] bg-[#02106A] w-full pr-2'>
                                <input type="text" placeholder='Search For Project' onChange={e => setSearchedProject(e.target.value)} 
                                    className='placeholder:text-[#fff] text-[14px] text-[#fff] bg-[#02106A] focus:outline-none pl-2 w-full h-[37px]' 
                                />
                                <BsSearch color='#fff' size={"13"} />
                            </div>
                        </div>

                        <div className='project_path__search_box__shadow flex flex-col items-start justify-start gap-4 bg-[#00004A80] w-full py-6 px-4'>
                            <span className='text-[14px] font-bold leading-[17.07px]'> Search Here </span>

                            <div className='flex flex-col items-start justify-start gap-2 w-full'>
                                <span className='bg-[#02106A] cursor-pointer w-full px-2 py-3'> Data Analytics </span>
                                <span className='bg-[#02106A] cursor-pointer w-full px-2 py-3'> Sales Analytics </span>
                                <span className='bg-[#02106A] cursor-pointer w-full px-2 py-3'> Supply Chain Analytics </span>
                                <span className='bg-[#02106A] cursor-pointer w-full px-2 py-3'> Financial Analytics </span>
                                <span className='bg-[#02106A] cursor-pointer w-full px-2 py-3'> HR Analytics </span>
                                <span className='bg-[#02106A] cursor-pointer w-full px-2 py-3'> Data Science and Machine Learning </span>
                                <span className='bg-[#02106A] cursor-pointer w-full px-2 py-3'> Data Engineering </span>
                                <span className='bg-[#02106A] cursor-pointer w-full px-2 py-3'> Power Platform Developer </span>
                                <span className='bg-[#02106A] cursor-pointer w-full px-2 py-3'> Artificial Intelligence </span>
                            </div>
                        </div>
                    </div>

                    <div className='flex-[0.7]'>
                        hh
                    </div>
                </div>
            </div>
        </>

        <Footer />
    </>
  )
}

export default ProjectPaths