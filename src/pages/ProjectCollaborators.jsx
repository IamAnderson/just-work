import React from 'react'
import Footer from '../components/Footer'
import HeaderComponent1 from '../components/HeaderComponent1'
import Navbar from '../components/Navbar'

const ProjectCollaborators = () => {
  return (
    <>
        <Navbar />
        
        <div className='flex flex-col gap-24 w-full pb-24'>
            <div className='relative flex flex-col bg-[#fff] w-full'>
              <HeaderComponent1 text={"About Us"} text_={"About Us"} />
            </div>
        
            <div className='px-4 lg:px-32'>
              hh  
            </div>
        </div>

        <Footer />
    </>
  )
}

export default ProjectCollaborators