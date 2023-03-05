import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Heading from '../labels/Heading'
import Title from '../labels/Title'
import MethodologyApproachComponent from './MethodologyApproachComponent'

const ApproachComponent = () => {
  return (
    <Fade down>
        <div className='flex flex-col items-center gap-8 w-full pl-8 lg:pl-56'>
            <div className='flex justify-center items-center w-full pr-8 lg:pr-56'>
                <Title text={"Our Approach"} />
            </div>

            <div className='pr-8 lg:pr-56'>
                <Heading text1={"Learning by doing is our proven learning"} text2={"methodology."} />
            </div>

            <div className='flex items-center w-full'>
                <MethodologyApproachComponent />
            </div>
        </div>
    </Fade>
  )
}

export default ApproachComponent