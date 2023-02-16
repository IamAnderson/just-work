import React from 'react'


const SignupImg = ({ img }) => {
  return (
    <>
        <div>
            <img src={img} alt="" className='w-full  h-full lg:h-[700px] object-cover' />
        </div>
    </>
  )
}

export default SignupImg