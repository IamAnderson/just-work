import React from 'react'
import { Fade } from 'react-awesome-reveal'

const ToolsComponent = ({ item }) => {
  return (
    <div className='border border-[#C4C4C4] py-3 px-5 rounded-[10px]'>
      <Fade duration={500}>
          <img src={item.img} alt="" className='w-[38.26px] lg:w-[90px] h-[38.26px] lg:h-[90px] object-cover' />
      </Fade>
    </div>
  )
}

export default ToolsComponent