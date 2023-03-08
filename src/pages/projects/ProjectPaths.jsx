import React, { useEffect, useState } from 'react'
import { AiFillCaretRight, AiFillCaretDown } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import Footer from '../../components/Footer'
import HeaderComponent1 from '../../components/HeaderComponent1'
import HeaderTitle from '../../components/labels/HeaderTitle'
import LinkHeaderText from '../../components/labels/LinkHeaderText'
import Navbar from '../../components/Navbar'
import ProjectDiv from '../../components/projectPage/ProjectDiv'

const ProjectPaths = () => {

    const [ showSearchProp, setShowSearchProp ] = useState(false);
    const [ showSearch1, setShowSearch1 ] = useState(false);
    const [ showSearch2, setShowSearch2 ] = useState(false);

    const [searchedProject, setSearchedProject] = useState("");

    const [ tabIndex, setTabIndex ] = useState(1);


    const changeTab = (index) => {
        setTabIndex(index)
    };

    useEffect(() => {
        
        if(tabIndex === 2){
            console.log("tabIndex 2 activated!!")
        }
    },[tabIndex])

  return (
    <>
        <Navbar />

        <>
            <HeaderComponent1 text={"All Projects"} text_={"Projects"} text1={"Advance to the Next Level in your Career by Attempting Projects Based on Your Skill Level"} />
          
            <div className='text-[#A5A5A5] lg:text-[#fff] bg-[#fff] w-full pb-8 lg:py-24 lg:px-16'>
                <div className='flex flex-col lg:flex-row items-start gap-8 lg:bg-[#124832] border lg:border-[#B1FD55] rounded-[20px] w-full lg:py-12 lg:px-8'>
                    <>
                        {/* DESKTOP */}
                        <div className='DESKTOP hidden flex-[0.3] lg:flex flex-col gap-8 justify-start items-start w-full'>
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
                                <span className='text-[14px] font-bold leading-[17.07px]'> Search Project by Field </span>

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

                            <div className='project_path__search_box__shadow flex flex-col items-start justify-start gap-4 bg-[#14744C80] w-full py-6 px-4'>
                                <span className='text-[14px] font-bold leading-[17.07px]'> Search Project by Tools </span>

                                <div className='flex flex-col items-start justify-start gap-2 w-full'>
                                    <span className='bg-[#14744C] cursor-pointer w-full px-2 py-3'> Python, Excel </span>
                                    <span className='bg-[#14744C] cursor-pointer w-full px-2 py-3'> Power BI </span>
                                    <span className='bg-[#14744C] cursor-pointer w-full px-2 py-3'>  Tableau </span>
                                    <span className='bg-[#14744C] cursor-pointer w-full px-2 py-3'> PostgresSQL </span>
                                    <span className='bg-[#14744C] cursor-pointer w-full px-2 py-3'> Power Apps </span>
                                    <span className='bg-[#14744C] cursor-pointer w-full px-2 py-3'> Power Automate </span>
                                    <span className='bg-[#14744C] cursor-pointer w-full px-2 py-3'> Share Point </span>
                                    <span className='bg-[#14744C] cursor-pointer w-full px-2 py-3'> Power Virtual Agent </span>
                                </div>
                            </div>
                        </div>
                        
                        {/* MOBILE */}
                        <>
                            {showSearchProp && (
                                <>
                                    <div className='MOBILE flex flex-col gap-8 justify-start text-[#fff] bg-[#124832] items-start w-full pt-8 pb-16 px-4 lg:hidden'>
                                        <div className='project_path__search_box__shadow flex flex-col items-start justify-start gap-4 bg-[#14744C80] w-full rounded-[4px] pt-8 pb-6 px-8'>
                                            <span className='text-[14px] font-bold leading-[17.07px]'> Search Here </span>
                                            <div className='flex items-center justify-start gap-2 border border-[#fff] bg-[#14744C] w-full pr-2'>
                                                <input type="text" placeholder='Search For Project' onChange={e => setSearchedProject(e.target.value)} 
                                                    className='placeholder:text-[#fff] text-[14px] text-[#fff] bg-[#14744C] focus:outline-none pl-2 w-full h-[37px]' 
                                                />
                                                <BsSearch color='#fff' size={"13"} />
                                            </div>
                                        </div>

                                        <div className='project_path__search_box__shadow flex flex-col items-center bg-[#14744C80] w-full rounded-[10px]'>
                                            <div className='flex flex-col items-start justify-start gap-4 w-full py-6 px-8'>
                                                <span className='flex items-center gap-4 w-full text-[14px] font-bold leading-[17.07px]' onClick={() => setShowSearch1(!showSearch1)}> Search Project by Field <> { showSearch1 ? <AiFillCaretDown size={"13"} color="#fff" /> : <AiFillCaretRight size={"13"} color="#fff" /> } </> </span>
                                                
                                                {showSearch1 && (
                                                    <>
                                                        <div className='flex flex-col items-start justify-start gap-3 w-full'>
                                                            <span className='bg-[#14744C] cursor-pointer w-full px-3 py-3 rounded-[4px]'> Data Analytics </span>
                                                            <span className='bg-[#14744C] cursor-pointer w-full px-3 py-3 rounded-[4px]'> Sales Analytics </span>
                                                            <span className='bg-[#14744C] cursor-pointer w-full px-3 py-3 rounded-[4px]'> Supply Chain Analytics </span>
                                                            <span className='bg-[#14744C] cursor-pointer w-full px-3 py-3 rounded-[4px]'> Financial Analytics </span>
                                                            <span className='bg-[#14744C] cursor-pointer w-full px-3 py-3 rounded-[4px]'> HR Analytics </span>
                                                            <span className='bg-[#14744C] cursor-pointer w-full px-3 py-3 rounded-[4px]'> Data Science and Machine Learning </span>
                                                            <span className='bg-[#14744C] cursor-pointer w-full px-3 py-3 rounded-[4px]'> Data Engineering </span>
                                                            <span className='bg-[#14744C] cursor-pointer w-full px-3 py-3 rounded-[4px]'> Power Platform Developer </span>
                                                            <span className='bg-[#14744C] cursor-pointer w-full px-3 py-3 rounded-[4px]'> Artificial Intelligence </span>
                                                        </div>
                                                    </>
                                                )}
                                            </div>

                                            <div className='flex flex-col items-start justify-start gap-4 w-full py-6 px-8'>
                                                <span className='flex items-center gap-4 w-full text-[14px] font-bold leading-[17.07px]' onClick={() => setShowSearch2(!showSearch2)}> Search Project by Tools <> { showSearch2 ? <AiFillCaretDown size={"13"} color="#fff" /> : <AiFillCaretRight size={"13"} color="#fff" /> } </></span>

                                                {showSearch2 && (
                                                    <>
                                                        <div className='flex flex-col items-start justify-start gap-3 w-full'>
                                                            <span className='bg-[#14744C] cursor-pointer w-full px-3 py-3 rounded-[4px]'> Python, Excel </span>
                                                            <span className='bg-[#14744C] cursor-pointer w-full px-3 py-3 rounded-[4px]'> Power BI </span>
                                                            <span className='bg-[#14744C] cursor-pointer w-full px-3 py-3 rounded-[4px]'>  Tableau </span>
                                                            <span className='bg-[#14744C] cursor-pointer w-full px-3 py-3 rounded-[4px]'> PostgresSQL </span>
                                                            <span className='bg-[#14744C] cursor-pointer w-full px-3 py-3 rounded-[4px]'> Power Apps </span>
                                                            <span className='bg-[#14744C] cursor-pointer w-full px-3 py-3 rounded-[4px]'> Power Automate </span>
                                                            <span className='bg-[#14744C] cursor-pointer w-full px-3 py-3 rounded-[4px]'> Share Point </span>
                                                            <span className='bg-[#14744C] cursor-pointer w-full px-3 py-3 rounded-[4px]'> Power Virtual Agent </span>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </>
                    </>

                    <div className='lg:flex-[0.7] flex flex-col justify-start items-center lg:items-start gap-6 w-full'>
                      <div className='flex items-start justify-between w-full gap-x-4 lg:gap-x-0 border-b border-[#C4C4C4] lg:bg-[#14744C] h-[57px] px-4 lg:px-0'>
                        <span className={`flex items-center justify-center w-[25%] text-[14px] font-bold leading-[17.07px] ${tabIndex === 1 && "lg:bg-[#B1FD55] border-b-2 border-[#14744C] lg:border-[#B1FD55] text-[#14744C] lg:text-[#000]"}  h-full cursor-pointer`} onClick={() => changeTab(1)}>
                            All 
                        </span>
                        <span className={`flex items-center justify-center w-[25%] text-[14px] font-bold leading-[17.07px] ${tabIndex === 2 && "lg:bg-[#B1FD55] border-b-2 border-[#14744C] lg:border-[#B1FD55] text-[#14744C] lg:text-[#000]"} h-full cursor-pointer`} onClick={() => changeTab(2)}>
                            Beginners 
                        </span>
                        <span className={`flex items-center justify-center w-[25%] text-[14px] font-bold leading-[17.07px] ${tabIndex === 3 && "lg:bg-[#B1FD55] border-b-2 border-[#14744C] lg:border-[#B1FD55] text-[#14744C] lg:text-[#000]"} h-full cursor-pointer`} onClick={() => changeTab(3)}>
                            Intermediate 
                        </span>
                        <span className={`flex items-center justify-center w-[25%] text-[14px] font-bold leading-[17.07px] ${tabIndex === 4 && "lg:bg-[#B1FD55] border-b-2 border-[#14744C] lg:border-[#B1FD55] text-[#14744C] lg:text-[#000]"} h-full cursor-pointer`} onClick={() => changeTab(4)}>
                            Advanced
                        </span>
                        <span className={`flex items-center justify-center w-[25%] h-full cursor-pointer lg:hidden`}>
                            <div className='flex items-center justify-center w-[40px] h-[40px] border border-[#c4c4c4] rounded-full' onClick={() => setShowSearchProp(!showSearchProp)}>
                                <FaSearch color='#C4C4C4' size={"17.5"} />
                            </div>
                        </span>
                      </div>

                       {tabIndex === 1 && (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full px-4 lg:px-0'>
                                {/* Map project array filtered off difficulty level */}
                                {/* Remember... When filtering difficulty level in category already filtered by field or tool, you need to change the difficulty filter to refilter the already filtered data before rendering */}
                                <ProjectDiv />
                                <ProjectDiv />
                                <ProjectDiv />
                            </div>
                       )}                                 
                    </div>
                </div>
            </div>
        </>

        <Footer />
    </>
  )
}

export default ProjectPaths