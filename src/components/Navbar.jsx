import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi"
import { RiMenu2Fill } from "react-icons/ri"
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo2.png";
import GetStartedBtn from '../sub-component/GetStartedBtn';
import ProjBar from './navbarComponents/ProjBar';


let activeNav = {
    backgroundColor: "#B1FD5533",
    borderBottom: "2px solid #B1FD55",
    height: "100%",
};


const Navbar = () => {

    const [showProjBar, setShowProjBar] = useState(false);

  return (
    <div className='fixed top-0 flex items-center justify-between lg:justify-start w-full bg-[#006D44] border-b border-[#fff] h-[64px] px-8 lg:px-16 z-30'>
        <div className="lg:flex-[0.15] flex items-center justify-center lg:border-r border-[#fff] h-full">
            <span className='h-[12px] lg:h-[14px] lg:pr-8'>
                <img src={logo} alt="" className='h-full w-full object-cover' />
            </span>
        </div>

        <>
            <div className="hidden flex-[0.6]  lg:flex justify-start items-center gap-8 px-8">
                <div>
                    <NavLink to="/projects" reloadDocument>
                        <span className='flex items-center justify-center h-[26px] w-[26px] border border-[#fff] rounded-full cursor-pointer'>
                            <FaBars color='#fff' size={"13.85"} />
                        </span>
                    </NavLink>
                </div>

                <div className='flex items-center justify-between w-full h-[64px]'>
                    <NavLink to="/" style={({ isActive }) => isActive ? activeNav : undefined}>
                        <span className='flex items-center gap-2 text-[#fff] text-[10px] font-[Inter] h-full px-2' onMouseEnter={() => setShowProjBar(false)}> Home <AiOutlineDown color='#fff' size={"8"} /> </span>
                    </NavLink>
                    
                    {/* <div className='relative'>
                        <span className={`flex items-center gap-2 text-[#fff] text-[10px] font-[Inter] h-full px-2 cursor-pointer ${showProjBar && "bg-[#00A2FD33] border-2 border-[#179DE9] h-[64px]"}`} onMouseEnter={() => setShowProjBar(true)}> Projects <AiOutlineDown color='#fff' size={"8"} /> </span>
                        <>
                            {showProjBar && (
                                <ProjBar closeProjBar={() => setShowProjBar(false)} />
                            )}
                        </>
                    </div> */}

                    <NavLink to="/project-paths" reloadDocument style={({ isActive }) => isActive ? activeNav : undefined}>
                        <span className='flex items-center gap-2 text-[#fff] text-[10px] font-[Inter] h-full px-2' onMouseEnter={() => setShowProjBar(false)}> Projects <AiOutlineDown color='#fff' size={"8"} /> </span>
                    </NavLink>
                    <NavLink to="/about" reloadDocument style={({ isActive }) => isActive ? activeNav : undefined}>
                        <span className='flex items-center gap-2 text-[#fff] text-[10px] font-[Inter] h-full px-2' onMouseEnter={() => setShowProjBar(false)}> About Us <AiOutlineDown color='#fff' size={"8"} /> </span>
                    </NavLink>
                    <NavLink to="/project-contribution" style={({ isActive }) => isActive ? activeNav : undefined}>
                        <span className='flex items-center gap-2 text-[#fff] text-[10px] font-[Inter] h-full px-2'> Project Contribution <AiOutlineDown color='#fff' size={"8"} /> </span>
                    </NavLink>
                    <NavLink to="/pricing" reloadDocument style={({ isActive }) => isActive ? activeNav : undefined}>
                        <span className='flex items-center gap-2 text-[#fff] text-[10px] font-[Inter] h-full px-2'> Pricing <AiOutlineDown color='#fff' size={"8"} /> </span>
                    </NavLink>
                    <NavLink to="/success-stories" style={({ isActive }) => isActive ? activeNav : undefined}>
                        <span className='flex items-center gap-2 text-[#fff] text-[10px] font-[Inter] h-full px-2'> Success Stories <AiOutlineDown color='#fff' size={"8"} /> </span>
                    </NavLink>
                    <NavLink to="/resources" style={({ isActive }) => isActive ? activeNav : undefined}>
                        <span className='flex items-center gap-2 text-[#fff] text-[10px] font-[Inter] h-full px-2'> Resources <AiOutlineDown color='#fff' size={"8"} /> </span>
                    </NavLink>
                </div>
            </div>
            
            <div className="hidden flex-[0.25] lg:flex items-center justify-end w-full gap-8 border-l border-[#fff] h-full px-8">
                <div>
                    <span className='flex items-center justify-center h-[26px] w-[26px] border border-[#fff] rounded-full cursor-pointer'>
                        <BiSearchAlt2 color='#fff' size={"15"} />
                    </span>
                </div>

                <div className='flex items-center justify-center w-full'>
                    <NavLink to="/login" reloadDocument>
                        <span className='text-[10px] text-[#fff] font-bold font-[Inter] py-2 px-5 border border-[#fff] rounded-[4px] mr-6'>
                            LOGIN
                        </span>
                    </NavLink>
                    <GetStartedBtn />
                </div>
            </div>
        </>

        <div className='block lg:hidden'>
            <div>
                <RiMenu2Fill color='#fff' size={"30"} />
            </div>
        </div>

    </div>
  )
}

export default Navbar