import React from 'react'
import Footer from '../components/Footer'
import HeaderTitle from '../components/labels/HeaderTitle'
import LinkHeaderText from '../components/labels/LinkHeaderText'
import Navbar from '../components/Navbar'
import img from "../assets/img6.png"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { BsArrowDownShort } from 'react-icons/bs'


const Faqs = () => {

    const onSubmit = e => {
        e.preventDefault();
    }

  return (
    <>
        <Navbar />

        <div className='flex flex-col gap-24 w-full pb-24'>
            <div className='relative flex flex-col bg-[#fff] w-full'>
              <div className='header_bg__img flex items-center justify-center h-[400px] lg:h-[600px] w-full'>
                <div className='flex flex-col items-center justify-start gap-8 w-full'>
                  <div className='flex flex-col items-center gap-1 w-full'>
                    <div>
                        <HeaderTitle text={"FAQS"} />
                    </div>
                    <div>
                        <LinkHeaderText text={"FAQS"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex items-start gap-8 w-full px-4 lg:px-56'>
                <div className='flex-[0.5] flex items-start w-full'>
                    <Accordion allowZeroExpanded={true}>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#02106A] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> Do I need to download any software to assess and download projects on Amdari? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                                    Yes. You can download both complete and incomplete projects to add to your GitHub or any other personal portfolio.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#02106A] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> Can I share my completed projects? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                                    Yes. You can download both complete and incomplete projects to add to your GitHub or any other personal portfolio.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#02106A] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> How does the Amdari subscription work? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                                    Yes. You can download both complete and incomplete projects to add to your GitHub or any other personal portfolio.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#02106A] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> What is inside each project ? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                                    Yes. You can download both complete and incomplete projects to add to your GitHub or any other personal portfolio.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#02106A] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> Is the subscription fee only for a specific project? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                                    Yes. You can download both complete and incomplete projects to add to your GitHub or any other personal portfolio.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#02106A] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> Can I get some more information about your company and team ? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                                    Yes. You can download both complete and incomplete projects to add to your GitHub or any other personal portfolio.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#02106A] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> What do you mean by end-to-end projects ? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                                    Yes. You can download both complete and incomplete projects to add to your GitHub or any other personal portfolio.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#02106A] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> Who is implementing these projects ? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                                    Yes. You can download both complete and incomplete projects to add to your GitHub or any other personal portfolio.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#02106A] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> Once I enroll, do I get access to all new projects that you add ? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                                    Yes. You can download both complete and incomplete projects to add to your GitHub or any other personal portfolio.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#02106A] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> How does this help in my job interviews and current projects ? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                                    Yes. You can download both complete and incomplete projects to add to your GitHub or any other personal portfolio.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#02106A] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> What are the prerequisites ? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                                    Yes. You can download both complete and incomplete projects to add to your GitHub or any other personal portfolio.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#02106A] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> Do you provide technical support? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                                    Yes. You can download both complete and incomplete projects to add to your GitHub or any other personal portfolio.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#02106A] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> How are these projects better than doing a course? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                                    Yes. You can download both complete and incomplete projects to add to your GitHub or any other personal portfolio.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#02106A] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> Can I cancel my plan? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                                    Yes. You can download both complete and incomplete projects to add to your GitHub or any other personal portfolio.
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>

                    {/* <Accordion allowZeroExpanded={true}>
                        <h3 className="font-medium mb-2 text-xl">Popular Questions for Actors</h3>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How can I sign up on cast.i.ng platform?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    By clicking on the Get Started button on the website,
                                    you will be redirected to a page where you can sign-up
                                    for free or pay for premium packages.


                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion> */}
                </div>

                <div className='flex-[0.5]'>
                    <img src={img} alt="" className='w-full h-full object-cover' />
                </div>
            </div>

            <div className='flex items-start gap-8 w-full px-4 lg:px-56'>
                <div className='flex-[0.5] flex flex-col gap-12 justify-start w-full'>
                    <span className='text-[#102137] text-[27.13px] font-bold leading-[33.07px]'> Do You Have Any Questions </span>

                    <form className='flex flex-col gap-8 items-start w-full' onSubmit={onSubmit}>
                        <div className='flex items-center justify-between gap-4 w-full'>
                            <input type="text" placeholder='Name'
                            className='flex items-center text-[#ABABAB] text-[12px] leading-[14.63px] border border-[#E5E5E5] rounded-[10px] w-full h-[46px] px-4 focus:outline-none' />

                            <input type="email" placeholder='Email'
                            className='flex items-center text-[#ABABAB] text-[12px] leading-[14.63px] border border-[#E5E5E5] rounded-[10px] w-full h-[46px] px-4 focus:outline-none' />
                        </div>

                        <div className='flex items-center justify-between gap-4 w-full'>
                            <input type="number" placeholder='Phone Number'
                            className='flex items-center text-[#ABABAB] text-[12px] leading-[14.63px] border border-[#E5E5E5] rounded-[10px] w-full h-[46px] px-4 focus:outline-none' />

                            <input type="text" placeholder='Subject'
                            className='flex items-center text-[#ABABAB] text-[12px] leading-[14.63px] border border-[#E5E5E5] rounded-[10px] w-full h-[46px] px-4 focus:outline-none' />
                        </div>

                        <div className='w-full'>
                            <textarea placeholder='Your Message' 
                            className='flex items-start text-[#ABABAB] text-[12px] leading-[14.63px] border border-[#E5E5E5] rounded-[10px] resize-none w-full h-[78px] py-4 px-4 focus:outline-none' /  >
                        </div>

                        <button className='flex items-center justify-center w-full'>
                            <div className='text-[#fff] text-[13.82px] font-[Inter] font-medium bg-[#02106A] rounded-[10px] py-2 px-12'>
                                Send Message
                            </div>
                        </button>
                    </form>
                </div>
                
                <div className='flex-[0.5]' />
            </div>
        </div>

        <Footer />
    </>
  )
}

export default Faqs