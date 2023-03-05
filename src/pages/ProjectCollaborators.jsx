import React from 'react'
import CollaboratorComponent from '../components/aboutPage/CollaboratorComponent'
import Footer from '../components/Footer'
import HeaderComponent1 from '../components/HeaderComponent1'
import Title from '../components/labels/Title'
import Navbar from '../components/Navbar'
import { collaboratorsDetailsData } from '../data/data'

const ProjectCollaborators = () => {
  return (
    <>
        <Navbar />
        
        <div className='flex flex-col gap-24 w-full pb-24'>
            <div className='relative flex flex-col bg-[#fff] w-full'>
              <HeaderComponent1 text={"About Us"} text_={"About Us"} />
            </div>
        
            <div className='flex flex-col items-center w-full px-4 lg:px-32'>
              <div className='mb-8'>
                <Title text={"Our Industry Experts"} />
              </div>

              <div className='grid justify-items-center gap-x-4 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full'>
                {collaboratorsDetailsData.map((item, index) => (
                  <CollaboratorComponent item={item} key={index} />
                ))}
              </div>
            </div>
        </div>

        <Footer />
    </>
  )
}

export default ProjectCollaborators