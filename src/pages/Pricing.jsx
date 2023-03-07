import React from 'react'
import Footer from '../components/Footer'
import HeaderComponent1 from '../components/HeaderComponent1'
import Navbar from '../components/Navbar'
import PricingComponent from '../components/pricingPage/PricingComponent'
import PricingComponent1 from '../components/pricingPage/PricingComponent1'
import PricingComponent2 from '../components/pricingPage/PricingComponent2'

const Pricing = () => {
  return (
    <>
        <Navbar />
        
        <div className='flex flex-col gap-24 w-full pb-24'>
            <div className='relative flex flex-col bg-[#fff] w-full'>
              <HeaderComponent1 text={"Pricing Plan"} text_={"Pricing Plan"} text1={""} />
            </div>

            <div className='flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-6 w-full px-4 lg:px-56'>
                <PricingComponent />
                <PricingComponent1 />
                <PricingComponent2 />
            </div>
        
        </div>

        <Footer />
    </>
  )
}

export default Pricing