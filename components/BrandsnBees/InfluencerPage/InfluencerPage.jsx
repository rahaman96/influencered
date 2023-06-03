import React from 'react'
import Landing from './Landing'
import Earning from './Earning'
import InfluencerCard from './InfluencerCard'
import InfluencerWorks from './InfluencerWorks'
import InfluencerGet from './InfluencerGet'
import InfluencerCollaborators from './InfluencerCollaborators'
import AppPage from './AppPage'
import About from '@/components/Home/About'
import Footer from '@/components/Home/Footer'
import EarningPage from '../MobileView/Influencer/EarningPage'
import InfluencerGetPage from '../MobileView/Influencer/InfluencerGetPage'
import BrandCard from '../BrandPage/BrandCard'
import Helping from '@/components/Home/Helping'
import InfluencerTestimonials from './InfluencerTestimonials'

const InfluencerPage = () => {
    return (
        <>
            <div>
                <div className='w-[450px]'>
                    <Landing />
                </div>
                <Earning />
                <div>
                    <div className='md:visible invisible'>
                        <InfluencerCard />
                    </div>
                    <div className='visible md:hidden md:-mt-0 -mt-[980px]'>
                        <EarningPage />
                    </div>
                </div>
                <InfluencerWorks />
                <div>
                    <div className='md:visible invisible md:w-[1349px] w-[450px]'>
                        <InfluencerGet />
                    </div>
                    <div className='visible md:hidden md:-mt-0 -mt-[1470px] md:w-[1349px] w-[450px]'>
                        <InfluencerGetPage />
                    </div>
                </div>
                <div className='md:w-[1349px] w-[450px]'>

                    {/* <InfluencerCollaborators /> */}
                    <Helping />
                </div>
                <div className=''>
                    <InfluencerTestimonials />
                </div>
                <div className='md:w-[1349px] w-[450px]'>
                    <AppPage />
                </div>
                <div className='md:w-[1349px] w-[450px]'>
                    <About />
                </div>
                <div className='md:w-[1349px] w-[450px]'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default InfluencerPage