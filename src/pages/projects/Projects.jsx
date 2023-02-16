import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Footer from '../../components/Footer'
import ExploreComponent from '../../components/homePage/ExploreComponent'
import HeaderTitle from '../../components/labels/HeaderTitle'
import LinkHeaderText from '../../components/labels/LinkHeaderText'
import Navbar from '../../components/Navbar'
import { exploreComponentData } from '../../data/data'

const Projects = () => {

    const [searchedProject, setSearchedProject] = useState("");
    // const [projects, setProjects] = useState([]);
    const projectsArr = exploreComponentData;

    const filteredProjects = projectsArr.filter((project) => project.title.toLowerCase().includes(searchedProject.toLowerCase()));

  return (
    <>
        <Navbar />

        <div className='flex flex-col justify-start w-full pb-24'>
            <div className='relative flex flex-col bg-[#fff] w-full mb-20'>
              <div className='header_bg__img flex items-center justify-center h-[400px] lg:h-[600px] w-full'>
                <div className='flex flex-col items-center justify-start gap-8 w-full'>
                  <div className='flex flex-col items-center gap-1 w-full'>
                    <div>
                      <HeaderTitle text={"All Projects"} />
                    </div>
                    <div>
                      <LinkHeaderText text={"Projects"} />
                    </div>
                    <span className='text-[15.51px] lg:text-[18px] text-[#fff] font-medium font-[Montserrat Alternates] text-center leading-[18.91px] lg:leading-[40px] w-full lg:w-[773px]'> Become a step closer to landing your dream tech job. Build real world projects created by industry experts and grow your portfolio. </span>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col items-start gap-8 w-full px-4 lg:px-56'>
                <div className='search_box__shadow flex items-center justify-between h-[77px] w-full lg:w-[435px] p-4'>
                    <span className='text-[14px] text-[#A5A5A5] font-bold leading-[17.07px]'> Search Here </span>
                    <div className='flex items-center justify-start gap-2 border border-[#A5A5A5] bg-[#EBEBEB] pr-2'>
                        <input type="text" placeholder='Search for project' onChange={e => setSearchedProject(e.target.value)} 
                            className='placeholder:text-[#A5A5A5] text-[14px] text-[#A5A5A5] bg-[#EBEBEB] focus:outline-none pl-2 w-full lg:w-[274px] h-[37px]' 
                        />
                        <BsSearch color='#A5A5A5' size={"13"} />
                    </div>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 w-full'>
                    <>
                        {filteredProjects.length === 0 ? (
                            <div className='text-[#333333] text-[24px] font-medium'>
                                Project Category Not Available!
                            </div>
                        ) : (
                        <>
                            {filteredProjects.map((item, index) => (
                            <ExploreComponent item={item} key={index} />
                            ))}
                        </>
                        )}
                    </>
                </div>
            </div>
        </div>

        <Footer />
    </>
  )
}

export default Projects