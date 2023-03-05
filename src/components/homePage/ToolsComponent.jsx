import React from 'react'
import { Zoom } from 'react-reveal'

const ToolsComponent = ({ item }) => {
  return (
    <Zoom cascade right>
      <div className='border border-[#C4C4C4] py-3 px-5 rounded-[10px]'>
          <img src={item.img} alt="" className='w-[38.26px] lg:w-[90px] h-[38.26px] lg:h-[90px] object-cover' />
      </div>
    </Zoom>
  )
}

export default ToolsComponent