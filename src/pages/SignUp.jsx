import React, { useState } from 'react'
import Heading2 from '../components/labels/Heading2'
import Title3 from '../components/labels/Title3'
import Navbar1 from '../components/Navbar1'
import SignupImg from '../components/signupPageComp/SignupImg'
import img1 from "../assets/img7.png"
import img2 from "../assets/img8.png"
import img3 from "../assets/img9.png"
import img4 from "../assets/img10.png"

const SignUp = () => {

    const [tabIndex, setTabIndex] = useState(1);
    const nextTab = (index) => {
        setTabIndex(index);
    }; 

    const [formData, setFormData] = useState({});
      const { firstName, lastName, email, phoneNumber, iwantto, jobTitle, companyName, projectInterest, skillLevel, location, gender, password, password2 } = formData;
        
      
    const handleChange = e => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    console.log(formData)

     const onSubmit = e => {
        e.preventDeafult();

        if(password != password2){
            alert("Password do not match")
        }
     }   
    // console.log(formData)

  return (
    <>
        <div className='bg-[#fff] w-full'>
            <Navbar1 />
        </div>

        <div className='bg-[#fff] h-full w-full'>
            <div className='flex items-start w-full pl-40'>
                <div className='flex-[0.4] flex flex-col items-start gap-6 w-full border-r border-[#A5A5A5] h-full py-4 pr-16'>
                    <div className='flex flex-col items-start w-full'>
                        <div>
                            <Title3 text={"Sign Up"} />
                        </div>
                        <div>
                            <Heading2 text={"To get started"} />
                        </div>
                    </div>
                    
                    <>
                        <form onSubmit={onSubmit} className='flex flex-col items-start gap-4 w-full'>
                            {tabIndex === 1 && (
                                <>
                                    <div className='flex flex-col items-start gap-0 w-full'>
                                        <span className='text-[#878787] text-[11.43px] leading-[34.29px] capitalize'> First Name </span>
                                        <input type="text" name='firstName' onChange={handleChange}
                                        className='bg-[#F0F0F0] focus:outline-none h-[63.58px] w-full rounded-[5.72px] px-4' />
                                    </div>

                                    <div className='flex flex-col items-start gap-0 w-full'>
                                        <span className='text-[#878787] text-[11.43px] leading-[34.29px] capitalize'> Last Name </span>
                                        <input type="text" name='lastName' onChange={handleChange}
                                        className='bg-[#F0F0F0] focus:outline-none h-[63.58px] w-full rounded-[5.72px] px-4' />
                                    </div>

                                    <div className='flex flex-col items-start gap-0 w-full'>
                                        <span className='text-[#878787] text-[11.43px] leading-[34.29px] capitalize'> Email </span>
                                        <input type="email" name='email' onChange={handleChange}
                                        className='bg-[#F0F0F0] focus:outline-none h-[63.58px] w-full rounded-[5.72px] px-4' />
                                    </div>

                                    <div className='flex flex-col items-start gap-0 w-full'>
                                        <span className='text-[#878787] text-[11.43px] leading-[34.29px] capitalize'> Phone Number </span>
                                        <input type="number" placeholder='+234' name='phoneNumber' onChange={handleChange}
                                        className='bg-[#F0F0F0] focus:outline-none h-[63.58px] w-full rounded-[5.72px] px-4' />
                                    </div>

                                    <div className='flex items-center justify-center text-[17.15px] text-[#fff] bg-[#124832] cursor-pointer rounded-[5.72px] h-[64px] w-full mt-8' 
                                        onClick={() => {
                                            if(!firstName || !lastName || !email || !phoneNumber){
                                                return alert("Fill in the required form")
                                            }
                                            nextTab(2)
                                        }}>
                                        Next
                                    </div>
                                </>
                            )}

                            {tabIndex === 2 && (
                                <>
                                    <div className='flex flex-col items-start gap-0 w-full'>
                                        <span className='text-[#878787] text-[11.43px] leading-[34.29px] capitalize'> Help us know you better so that we can help you personalize your experience </span>
                                        <div className='bg-[#F0F0F0] h-[63.58px] w-full rounded-[5.72px] px-4'>
                                            <select name='iwantto' onChange={handleChange} 
                                                className='focus:outline-none bg-[#F0F0F0] h-[63.58px] w-full rounded-[5.72px]'>
                                                <option aria-disabled className='cursor-pointer'> I want to </option>
                                                <option className='cursor-pointer'> lorem 1 </option>
                                                <option className='cursor-pointer'> lorem 2 </option>
                                                <option className='cursor-pointer'> lorem 3 </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-start gap-0 w-full'>
                                        <span className='text-[#878787] text-[11.43px] leading-[34.29px] capitalize'> Your current job title </span>
                                        <div className='bg-[#F0F0F0] h-[63.58px] w-full rounded-[5.72px] px-4'>
                                            <select name='jobTitle' onChange={handleChange}
                                            className='focus:outline-none bg-[#F0F0F0] h-[63.58px] w-full rounded-[5.72px]'>
                                                <option aria-disabled className='cursor-pointer'> Select </option>
                                                <option className='cursor-pointer'> lorem 1 </option>
                                                <option className='cursor-pointer'> lorem 2 </option>
                                                <option className='cursor-pointer'> lorem 3 </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-start gap-0 w-full'>
                                        <span className='text-[#878787] text-[11.43px] leading-[34.29px] capitalize'> Company Name </span>
                                        <input type="text" name='companyName' onChange={handleChange}
                                        className='bg-[#F0F0F0] focus:outline-none h-[63.58px] w-full rounded-[5.72px] px-4' />
                                    </div>

                                    <div className='flex items-center justify-center text-[17.15px] text-[#fff] bg-[#124832] cursor-pointer rounded-[5.72px] h-[64px] w-full mt-8' 
                                        onClick={() => {
                                            if(!iwantto || !jobTitle || !companyName ){
                                                return alert("Fill in the required form")
                                            }
                                            nextTab(3)
                                        }}>
                                        Next
                                    </div>
                                </>
                            )}

                            {tabIndex === 3 && (
                                <>
                                    <div className='flex flex-col items-start gap-0 w-full'>
                                        <span className='text-[#878787] text-[11.43px] leading-[34.29px] capitalize'> Which project are you interested in? </span>
                                        <div className='bg-[#F0F0F0] h-[63.58px] w-full rounded-[5.72px] px-4'>
                                            <select name='projectInterest' onChange={handleChange} 
                                                className='focus:outline-none bg-[#F0F0F0] h-[63.58px] w-full rounded-[5.72px]'>
                                                <option aria-disabled className='cursor-pointer'> Select </option>
                                                <option className='cursor-pointer'> lorem 1 </option>
                                                <option className='cursor-pointer'> lorem 2 </option>
                                                <option className='cursor-pointer'> lorem 3 </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-start gap-0 w-full'>
                                        <span className='text-[#878787] text-[11.43px] leading-[34.29px] capitalize'> Your skill level </span>
                                        <div className='bg-[#F0F0F0] h-[63.58px] w-full rounded-[5.72px] px-4'>
                                            <select name='skillLevel' onChange={handleChange}
                                            className='focus:outline-none bg-[#F0F0F0] h-[63.58px] w-full rounded-[5.72px]'>
                                                <option aria-disabled className='cursor-pointer'> Select </option>
                                                <option className='cursor-pointer'> lorem 1 </option>
                                                <option className='cursor-pointer'> lorem 2 </option>
                                                <option className='cursor-pointer'> lorem 3 </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-start gap-0 w-full'>
                                        <span className='text-[#878787] text-[11.43px] leading-[34.29px] capitalize'> Location </span>
                                        <input type="text" name='location' onChange={handleChange}
                                        className='bg-[#F0F0F0] focus:outline-none h-[63.58px] w-full rounded-[5.72px] px-4' />
                                    </div>

                                    <div className='flex flex-col items-start gap-0 w-full'>
                                        <span className='text-[#878787] text-[11.43px] leading-[34.29px] capitalize'> Gender </span>
                                        <div className='bg-[#F0F0F0] h-[63.58px] w-full rounded-[5.72px] px-4'>
                                            <select name='gender' onChange={handleChange}
                                            className='focus:outline-none bg-[#F0F0F0] h-[63.58px] w-full rounded-[5.72px]'>
                                                <option aria-disabled className='cursor-pointer'> Select </option>
                                                <option className='cursor-pointer'> Male </option>
                                                <option className='cursor-pointer'> Female </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='flex items-center justify-center text-[17.15px] text-[#fff] bg-[#124832] cursor-pointer rounded-[5.72px] h-[64px] w-full mt-8' 
                                        onClick={() => {
                                            if(!projectInterest || !skillLevel || !location || !gender ){
                                                return alert("Fill in the required form")
                                            }
                                            nextTab(4)
                                        }}>
                                        Next
                                    </div>
                                </>
                            )}

                            {tabIndex === 4 && (
                                <>
                                    <div className='flex flex-col items-start gap-0 w-full'>
                                        <span className='text-[#878787] text-[11.43px] leading-[34.29px] capitalize'> Create Password </span>
                                        <input type="password" required name='password' onChange={handleChange}
                                        className='bg-[#F0F0F0] focus:outline-none h-[63.58px] w-full rounded-[5.72px] px-4' />
                                    </div>

                                    <div className='flex flex-col items-start gap-0 w-full'>
                                        <span className='text-[#878787] text-[11.43px] leading-[34.29px] capitalize'> Confirm Password </span>
                                        <input type="password" required name='password2' onChange={handleChange}
                                        className='bg-[#F0F0F0] focus:outline-none h-[63.58px] w-full rounded-[5.72px] px-4' />
                                    </div>

                                    <button className='flex items-center justify-center text-[17.15px] text-[#fff] bg-[#124832] cursor-pointer rounded-[5.72px] h-[64px] w-full mt-8'>
                                        Submit
                                    </button>
                                </>
                            )}
                        </form>
                    </>
                </div>

                <div className='flex-[0.6] flex items-end justify-start pl-0 lg:h-[108vh] w-full'>
                    {tabIndex === 1 && (
                        <>
                            <SignupImg img={img1} />
                        </>
                    )}

                    {tabIndex === 2 && (
                        <>
                            <SignupImg img={img2} />
                        </>
                    )}

                    {tabIndex === 3 && (
                        <>
                            <SignupImg img={img3} />
                        </>
                    )}

                    {tabIndex === 4 && (
                        <>
                            <SignupImg img={img4} />
                        </>
                    )}
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp