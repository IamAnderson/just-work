import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import logo1 from "../assets/logo2.png";

const Footer = () => {
  return (
    <Fade>
        <div className='bg-[#14744C] text-[#fff] w-full py-12 lg:pt-16 lg:pb-8 '>
            <div className='flex flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-between gap-8 lg:gap-0 w-full px-8 lg:px-24'>
                <Fade cascade bottom>
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
                        <span className='text-[14px] lg:text-[16px] font-extrabold leading-[] lg:leading-[19.5px]'> Projects </span>
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
                        <span className='text-[14px] lg:text-[16px] font-extrabold leading-[] lg:leading-[19.5px]'> Quicklinks </span>
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

                    <div className='flex flex-col items-center lg:items-start gap-4 lg:gap-6 w-full lg:w-[129px]'>
                        <span className='text-[14px] lg:text-[16px] font-extrabold leading-[] lg:leading-[19.5px]'> Contact Us </span>
                        <div className='flex flex-col justify-start items-center lg:items-start gap-2 w-full'>
                            <li className='text-[10px] lg:text-[14px] leading-[24px]'> Address </li>
                            <li className='text-[10px] lg:text-[14px] leading-[24px]'> info@amdari.io </li>
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-4 w-full lg:hidden'>
                        <Link to="">
                            <span className='flex items-center justify-center w-[24px] h-[24px] bg-[#fff] rounded-[4px]'> <FaTwitter color="#000066" size={"14"} /> </span>
                        </Link>

                        <Link to="">
                            <span className='flex items-center justify-center w-[24px] h-[24px] bg-[#fff] rounded-[4px]'> <FaFacebookF color="#000066" size={"14"} /> </span>
                        </Link>

                        <Link to="">
                            <span className='flex items-center justify-center w-[24px] h-[24px] bg-[#fff] rounded-[4px]'> <BsInstagram color="#000066" size={"14"} /> </span>
                        </Link>

                        <Link to="">
                            <span className='flex items-center justify-center w-[24px] h-[24px] bg-[#fff] rounded-[4px]'> <FaLinkedinIn color="#000066" size={"14"} /> </span>
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
    </Fade>
  )
}

export default Footer