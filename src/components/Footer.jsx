import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import logo1 from "../assets/logo2.png";

const Footer = () => {
  return (
    <>
        <div className='bg-[#14744C] text-[#ABDFFC] w-full py-12 lg:pt-16 lg:pb-8 '>
            <div className='flex flex-col lg:flex-row items-start justify-start lg:justify-between gap-8 lg:gap-0 w-full px-8 lg:px-24'>
                <Fade cascade damping={0.25}>
                    <div className='flex flex-col items-start gap-6 w-[313px]'>
                        <span className='hidden lg:block h-[20px] pr-8'>
                            <img src={logo1} alt="" className='h-full w-full object-contain' />
                        </span>

                        <span className='block h-[12px] pr-8 lg:hidden'>
                            <img src={logo1} alt="" className='h-full w-full object-cover' />
                        </span>


                        <span className='text-[10px] lg:text-[14px] text-center w-[300px] lg:w-full lg:text-start'> At Amdari, our goal is to get you closer to career success with our ready-made project solutions. Our end-to-end portfolio projects are designed to help you increase your chances of landing a Data Science job. </span>
                    
                        <div className='hidden lg:flex items-center gap-4 w-full'>
                            <Link to="">
                                <span className='flex items-center justify-center w-[24px] h-[24px] bg-[#fff] rounded-[4px]'> <FaTwitter color="#14744C" size={"14"} /> </span>
                            </Link>

                            <Link to="">
                                <span className='flex items-center justify-center w-[24px] h-[24px] bg-[#fff] rounded-[4px]'> <FaFacebookF color="#14744C" size={"14"} /> </span>
                            </Link>

                            <Link to="">
                                <span className='flex items-center justify-center w-[24px] h-[24px] bg-[#fff] rounded-[4px]'> <BsInstagram color="#14744C" size={"14"} /> </span>
                            </Link>

                            <Link to="">
                                <span className='flex items-center justify-center w-[24px] h-[24px] bg-[#fff] rounded-[4px]'> <FaLinkedinIn color="#14744C" size={"14"} /> </span>
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-col items-center lg:items-start gap-4 lg:gap-6 w-full lg:w-[211px]'>
                        <span className='text-[14px] lg:text-[16px] font-extrabold text-[#fff] lg:leading-[19.5px]'> Projects </span>
                        <div className='flex flex-col justify-start items-center lg:items-start gap-2 w-full'>
                            <Link to={``}>
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> Data Analytics </li>
                            </Link>
                            <Link to={``}>
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> Sales Analytics </li>
                            </Link>
                            <Link to={``}>
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> Supply Chain Analytics </li>
                            </Link>
                            <Link to={``}>
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> Financial Analytics </li>
                            </Link>
                            <Link to={``}>
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> HR Analytics </li>
                            </Link>
                            <Link to={``}>
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> Data Science And Machine Learning </li>
                            </Link>
                            <Link to={``}>
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> Data Engineering </li>
                            </Link>
                            <Link to={``}>
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> Power Platform Developer </li>
                            </Link>
                            <Link to={``}>
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> Artificial Intelligence </li>
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-col items-center lg:items-start gap-4 lg:gap-6 w-full lg:w-[126px]'>
                        <span className='text-[14px] lg:text-[16px] font-extrabold text-[#fff] lg:leading-[19.5px]'> Quicklinks </span>
                        <div className='flex flex-col justify-start items-center lg:items-start gap-2 w-full'>
                            <Link to="/projects">
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> Projects </li>
                            </Link>
                            <Link to="/testimonial">
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> Testimonial </li>
                            </Link>
                            <Link to="/about">
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> About Us </li>
                            </Link>
                            <Link to="/experts">
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> Experts </li>
                            </Link>
                            <Link to="/success-stories">
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> Success Stories </li>
                            </Link>
                            <Link to="/ebooks">
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> Ebooks </li>
                            </Link>
                            <Link to="/blog">
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> Blog </li>
                            </Link>
                            <Link to="/sitemap">
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> Sitemap </li>
                            </Link>
                            <Link to="/privacy-policy">
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> Privacy Policy </li>
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-col items-start gap-8 lg:gap-0 lg:justify-between lg:h-[320px] w-full'>
                        <div className='flex flex-col items-start gap-4 lg:gap-6 w-full lg:w-[129px]'>
                            <span className='text-[14px] lg:text-[16px] font-extrabold text-[#fff] lg:leading-[19.5px]'> Contact Us </span>
                            <div className='flex flex-col justify-start items-start gap-2 w-full'>
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> Address </li>
                                <li className='text-[10px] lg:text-[14px] leading-[24px]'> info@amdari.io </li>
                            </div>
                        </div>

                        <div className='flex flex-col items-start gap-4 lg:gap-6 w-full lg:w-[129px]'>
                            <span className='text-[14px] lg:text-[16px] font-extrabold text-[#fff] lg:leading-[19.5px] w-[256px]'> Subscribe to Our Newsletter </span>
                            <div>
                                <form 
                                className='flex items-center h-[33px] lg:h-[44px] w-[296px] bg-[#fff] rounded-[40px] overflow-hidden'>
                                    <input type="email" placeholder='Your Email' className='border-none text-[12px] text-[#333333] focus:outline-none leading-[14.63px] h-full w-full px-3' />
                                    <button className='h-full'>
                                        <div className='pricing_checkmark__gradient flex justify-center items-center text-[12px] text-[#fff] leading-[14.63px] w-[88px] h-full rounded-[80px] overflow-hidden'>
                                            Send
                                        </div>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-4 w-full lg:hidden'>
                        <Link to="">
                            <span className='flex items-center justify-center w-[24px] h-[24px] bg-[#fff] rounded-[4px]'> <FaTwitter color="#14744C" size={"14"} /> </span>
                        </Link>

                        <Link to="">
                            <span className='flex items-center justify-center w-[24px] h-[24px] bg-[#fff] rounded-[4px]'> <FaFacebookF color="#14744C" size={"14"} /> </span>
                        </Link>

                        <Link to="">
                            <span className='flex items-center justify-center w-[24px] h-[24px] bg-[#fff] rounded-[4px]'> <BsInstagram color="#14744C" size={"14"} /> </span>
                        </Link>

                        <Link to="">
                            <span className='flex items-center justify-center w-[24px] h-[24px] bg-[#fff] rounded-[4px]'> <FaLinkedinIn color="#14744C" size={"14"} /> </span>
                        </Link>
                    </div>
                </Fade>
            </div>

            <div className='h-[1px] bg-[#B1FD55] w-full mt-16 mb-8' />

            <>
                <div className='hidden lg:block px-56'>
                    <div className='flex justify-center gap-2 items-center text-[13px] leading-[17.73px] text-center w-full'> 
                        © 2023. Amdari. All rights reserved.    |    <span className='font-bold'><Link to="privacy-policy" reloadDocument> Privacy Policy </Link></span>  |  <span className='font-bold'><Link to="terms-of-use" reloadDocument> Terms of Use </Link></span>  |  <span className='font-bold'> <a href="tel:+2348106264012"> Developer </a> </span> 
                    </div>
                </div>

                <div className='block px-8 lg:hidden'>
                    <div className='flex flex-col gap-2 items-center text-[13px] leading-[17.73px] w-full'> 
                        <> © 2023. Amdari. All rights reserved. </>
                        <div className='flex items-center justify-center gap-2 w-full'> <span className='font-bold'><Link to="privacy-policy" reloadDocument> Privacy Policy </Link></span>  |  <span className='font-bold'><Link to="terms-of-use" reloadDocument> Terms of Use </Link></span>  |  <span className='font-bold'> <a href="tel:+2348106264012"> Developer </a> </span> </div> 
                    </div>
                </div>
            </>
            
        </div>
    </>
  )
}

export default Footer