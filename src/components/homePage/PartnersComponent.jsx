import React from 'react'

const PartnersComponent = ({ item }) => {
  return (
    <div className='border border-[#C4C4C4] py-3 px-5 rounded-[10px]'>
        <img src={item.img} alt="" className='w-[38.26px] lg:w-[90px] h-[38.26px] lg:h-[90px] object-cover' />
    </div>
  )
}

export default PartnersComponent