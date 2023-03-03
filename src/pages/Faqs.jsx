import React from 'react'
import Footer from '../components/Footer'
import HeaderTitle from '../components/labels/HeaderTitle'
import LinkHeaderText from '../components/labels/LinkHeaderText'
import Navbar from '../components/Navbar'
import img from "../assets/img6.png"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { BsArrowDownShort } from 'react-icons/bs'
import HeaderComponent1 from '../components/HeaderComponent1'


const Faqs = () => {

    const onSubmit = e => {
        e.preventDefault();
    }

  return (
    <>
        <Navbar />

        <div className='flex flex-col gap-24 w-full pb-24'>
            <HeaderComponent1 text={"FAQS"} text_={"FAQS"} text1={"Advance to the Next Level in your Career by Attempting Projects Based on Your Skill Level"} />

            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 w-full px-4 lg:pl-56 lg:pr-32'>
                <div className='flex-[0.6] flex items-start w-full'>
                    <Accordion allowZeroExpanded={true} className='w-full'>
                        <AccordionItem className='w-full'>
                            <AccordionItemHeading className='w-full'>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#14744C] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> Do I need to download any software to assess and download projects on Amdari? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                            No. You can assess all projects on Amdari without having to install any software—all the 
                projects’ solutions can be completed in your browser.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#14744C] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> Can I share my completed projects? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                            Yes. You can download both complete and incomplete projects to add to your 
GitHub or any other personal portfolio.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#14744C] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> How does the Amdari subscription work? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                            Once you subscribe, you will immediately have unlimited access to all projects and 
resources. There’s no limit to the projects you have access to and you can cancel at 
anytime. You also get access to the new projects added to the library every month.

                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#14744C] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> What is inside each project ? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                                <li> Text file </li>
                                <li> Datasets </li>
                                <li> Detailed documentation to help you with the tools </li>
                                <li> Videos explaining the solution </li>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#14744C] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> Is the subscription fee only for a specific project? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                            No - the annual subscription gives you unlimited access to all projects. You will get access 
to all our projects in all categories and learning paths.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#14744C] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> Can I get some more information about your company and team ? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                            Of course, please click here (Link to about page) to read more about our company and our 
mission statement. Our contact information is here (Link to contact page).

                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#14744C] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> What do you mean by end-to-end projects ? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                            <p className='mb-4'>{"For Machine Learning Projects for example, every project under it implements the full life cycle: Sourcing the data -> Exploratory data analysis (EDA) -> Data cleaning -> Data manipulation -> Modeling -> Hyper parameter tuning -> Testing -> Visualization -> Deployment."}</p>
                            <p>
                                {"For Big Data Projects, it implements the full pipeline: Sourcing the data -> Ingestion (batch or streaming) -> Initial data analysis -> Moving to data store -> Complex data analysis -> Moving analyzed data to storage -> Visualization -> Deployment."}
                            </p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#14744C] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> Who is implementing these projects ? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                                All our projects are implemented by industry experts from companies such as DPD Ireland, Munvo, NATS, Keyrock etc. They create projects similar to the live projects they have deployed in their work environments.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#14744C] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> Once I enroll, do I get access to all new projects that you add ? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                            Yes - every month we add 9-10 new projects. You don't have to pay anything extra for this. 
You can even tell us what kind of projects you would like us to add and we will use your 
feedback to prioritize our project's roadmap.

                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#14744C] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> How does this help in my job interviews and current projects ? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                                <li> Demonstrate that you can be useful immediately on live projects - Companies like to 
      hire candidates who don't have to be trained much.</li>
      <li>
Convey your passion and enthusiasm for the domain - Companies like to hire candidates 
      who do extra side projects.</li>
      <li>
Troubleshoot your live projects with our ready-to-use code. </li>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#14744C] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> What are the prerequisites ? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                            We offer learning paths to guide you from beginner to advanced projects. All our projects 
are self contained and come with all the prerequisite materials needed. As long as you 
know coding in any language, these projects will work for you.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#14744C] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> Do you provide technical support? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                            Yes, our technical support team will answer your questions within 24 hours.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#14744C] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> How are these projects better than doing a course? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                            Courses are mostly theoretical with a few projects. What we offer is 100% projects with a 
little bit of theory. No matter how many courses you take, you will get stuck in real industry 
projects. We solve that problem for you and give you confidence to face real industry 
projects.

                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flex items-center justify-between gap-1 w-full border bg-[#14744C] border-[#C4C4C4] py-4 px-2'>
                                    <p className='text-[#fff] text-[12px] font-medium font-[Inter] leading-[14.52px]'> Can I cancel my plan? </p>
                                    <p> <BsArrowDownShort color='#fff' size={"20"} /> </p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion_box__shadow text-[#A5A5A5] text-[12px] leading-[14.52px] font-[Inter] w-full py-4 px-2'>
                            Yes. You can cancel your plan anytime. Your subscription will remain active till the end of 
your subscription period.
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className='faqs_box__shadow flex-[0.4] flex flex-col gap-12 justify-start items-center rounded-[6.37px] p-8 pb-6 w-full'>
                    <span className='text-[#102137] text-[21px] font-bold leading-[33.07px]'> Do You Have Any Questions </span>

                    <form className='flex flex-col gap-6 items-start w-full' onSubmit={onSubmit}>
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
                            <div className='text-[#fff] text-[13.82px] font-[Inter] font-medium bg-[#14744C] rounded-[10px] py-2 px-12'>
                                Send Message
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <Footer />
    </>
  )
}

export default Faqs