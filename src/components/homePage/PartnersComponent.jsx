import React from 'react'

const PartnersComponent = ({ item }) => {
  return (
    <div className=''>
        <img src={item.img} alt="" className='w-[38.26px] lg:w-[70px] h-[38.26px] lg:h-[70px] object-cover' />
    </div>
  )
}

export default PartnersComponent