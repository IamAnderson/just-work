import React from 'react'
import IndustryComponent from '../components/aboutPage/IndustryComponent'
import MissionPage from '../components/aboutPage/MissionPage'
import Footer from '../components/Footer'
import HeaderComponent1 from '../components/HeaderComponent1'
import AboutComponent from '../components/homePage/AboutComponent'
import ApproachComponent from '../components/homePage/ApproachComponent'
import StatsComponent from '../components/homePage/StatsComponent'
import Navbar from '../components/Navbar'
import img from "../assets/img11.png"
import Title from '../components/labels/Title'
import Heading from '../components/labels/Heading'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
        <Navbar />
        
        <div className='flex flex-col gap-24 w-full'>
            <HeaderComponent1 text={"About Us"} text_={"About Us"} text1={"Providing you with hands-on experience to solve real-world problems with projects created by industry experts."} />
            
            <>
                <AboutComponent nxtImg showBtn />
            </>

            <>
                <ApproachComponent />
            </>

            <>
                <MissionPage />
            </>

            <div className='lg:mb-28'>
                <IndustryComponent />
            </div>

            <>
                <StatsComponent showAll />
            </>
        </div>
        <>
            <div className='relative flex items-start justify-center bg-[#14744C] h-[300px] mt-40 w-full'>
                <div className='about_team__gradient absolute top-[-13rem] flex items-start gap-16 rounded-[30px] py-6 lg:pl-20'>
                    <div className='flex-[0.4] flex flex-col items-start gap-16 w-full'>
                        <>
                            <Title text={"OUR TEAM"} />
                        </>
                        
                        <>
                            <Heading text1={"The Amdari Team of Experts Making Things Happen"} />
                        </>

                        <Link to="/project-collaborators" reloadDocument>
                            <div className='about_team_btn__gradient text-[14px] text-[#fff] font-medium rounded-[4px] py-2 px-3'>
                                Meet Our Team
                            </div>
                        </Link>
                    </div>

                    <div className='flex-[0.6]'>
                        <img src={img} alt="" className='w-[383px] h-[378px] object-contain' />
                    </div>
                </div>
            </div>  
            <Footer />
        </>
    </>
  )
}

export default About