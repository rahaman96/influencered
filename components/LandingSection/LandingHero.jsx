import React from 'react'
import Wrapper from '../Wrapper'
import styles from '../../styles/landing.module.css'
import About from '../Home/About'
import Footer from '../Home/Footer'
import { useRouter } from 'next/router'
const LandingHero = () => {
    const router=useRouter()
    return (
        <>
            <div className='py-10'>
                <Wrapper>
                    <div className='mx-auto flex'>
                        <div v className='md:mt mx-auto'>
                            {/* Brand Awareness Start */}
                            <section className="text-gray-600 body-font md:mb-10">
                                <div className="container mx-auto flex  justify-betwee md:flex-row flex-col md:gap-24 cursor-pointer" onClick={() => router.push({pathname: 'ecommerce/edetail',query: {name: 'Brand Awarenes' }})}>
                                    <div className="lg:max-w-lg lg:w-ful md:w-[531px] w-full ">
                                        <div className={`md:w-[562px] w- w-full md:h-[402px] h-[px] ${styles.landing}`}>
                                            <img className="object-cover object-center rounded p-1 md:p-0 w-[550px] mx-auto md:h-[395px]  " alt="hero" src="image/brand.svg" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col mb-4 mt- justify-center md:w-[472px] w-ful ">
                                        <h1 className="mb-2 text-[#114067] text-[18px] leading-[27px] md:text-[39px] md:leading-[59px] font-semibold font-sans mt-5 md:mt-0">Brand Awareness</h1>
                                        <p className="mb-8 text-[#000000] opacity-80 text-[16px] md:text-[18px] leading-[28px] font-medium font-sans ">
                                            Select this option if your campaign objective is to increase brand recognitionSelect this option if your campaign objective Select this option if your campaign objectiveis to increase brand recognition Select this option if your campaign objectiveis to increase brand recognition
                                            is to increase brand recognition
                                        </p>


                                    </div>

                                </div>
                            </section>
                            {/* Brand Awareness End */}


                            {/* Affiliate  Start*/}
                            <section className="text-gray-600 body-font md:mb-10">
                                <div className="container mx-auto flex  md:flex-row flex-col-reverse  justify-betwee md:gap-20 cursor-pointer " onClick={() => router.push({pathname: 'ecommerce/edetail',query: {name: 'Affiliate Marketing' }})}>


                                    <div className="md:w-[472px]  flex flex-col mb-4 mt- justify-center ">
                                        <h1 className="mb-2 text-[#114067] text-[18px] leading-[27px] md:text-[38px] md:leading-[57px] font-semibold font-sans mt-5 md:mt-0">Affiliate marketing</h1>
                                        <p className="mb-8 text-[#000000] opacity-80 text-[16px] md:text-[18px] leading-[28px] font-medium font-sans ">
                                            Select this option if your campaign objective is to increase brand recognitionSelect this option if your campaign objective Select this option if your campaign objectiveis to increase brand recognition Select this option if your campaign objectiveis to increase brand recognition
                                            is to increase brand recognition
                                        </p>


                                    </div>
                                    <div className="lg:max-w-l lg:w-ful md:w-[531px] w-full ">
                                    <div className={`md:w-[562px] w- w-full md:h-[402px] h-[px] ${styles.landing}`}>
                                            <img className="object-cover object-center rounded p-1 md:p-0 w-[550px] mx-auto md:h-[395px]  " alt="hero" src="image/brand.svg" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Affiliate  End*/}


                            {/* Content creation to reuse Start */}
                            <section className="text-gray-600 body-font md:mb-10">
                                <div className="container mx-auto flex  md:flex-row flex-col md:gap-20 cursor-pointer" onClick={() => router.push({pathname: 'ecommerce/edetail',query: {name: 'Content creation to recuse' }})}>
                                    <div className="lg:max-w-lg lg:w-full md:w-[531px] w-full ">
                                    <div className={`md:w-[562px] w- w-full md:h-[402px] h-[px] ${styles.landing}`}>
                                            <img className="object-cover object-center rounded p-1 md:p-0 w-[550px] mx-auto md:h-[395px]  " alt="hero" src="image/contentimg.svg" />
                                        </div>
                                    </div>

                                    <div className="md:w-[472px]  flex flex-col mb-4 mt- justify-center ">
                                        <h1 className="mb-2 text-[#114067] text-[18px] leading-[27px] md:text-[38px] md:leading-[57px] font-semibold font-sans mt-5 md:mt-0">Content creation to reuse</h1>
                                        <p className="mb-8 text-[#000000] opacity-80 text-[16px] md:text-[18px] leading-[28px] font-medium font-sans ">
                                            Select this option if your campaign objective is to increase brand recognitionSelect this option if your campaign objective Select this option if your campaign objectiveis to increase brand recognition Select this option if your campaign objectiveis to increase brand recognition
                                            is to increase brand recognition
                                        </p>


                                    </div>

                                </div>
                            </section>
                            {/* Content creation to reuse End */}


                            {/* Website Traffic  Start*/}
                            <section className="text-gray-600 body-font md:mb-10">
                                <div className="container mx-auto flex  md:flex-row flex-col-reverse md:gap-20 cursor-pointer " onClick={() => router.push({pathname: 'ecommerce/edetail',query: {name: 'Website Traffic' }})}>


                                    <div className="md:w-[472px]  flex flex-col mb-4 mt- justify-center ">
                                        <h1 className="mb-2 text-[#114067] text-[18px] leading-[27px] md:text-[39px] md:leading-[59px] font-semibold font-sans mt-5 md:mt-0">Website Traffic</h1>
                                        <p className="mb-8 text-[#000000] opacity-80 text-[16px] md:text-[18px] leading-[28px] font-medium font-sans ">
                                            Select this option if your campaign objective is to increase brand recognitionSelect this option if your campaign objective Select this option if your campaign objectiveis to increase brand recognition Select this option if your campaign objectiveis to increase brand recognition
                                            is to increase brand recognition
                                        </p>


                                    </div>
                                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full ">
                                    <div className={`md:w-[562px] w- w-full md:h-[402px] h-[px] ${styles.landing}`}>
                                            <img className="object-cover object-center rounded p-1 md:p-0 w-[550px] mx-auto md:h-[395px]  " alt="hero" src="image/brand.svg" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*Website Traffic End*/}

                        </div>
                    </div>
                </Wrapper>
                {/* Last Section start */}
                <div className='mt-10'>
                    <About />
                    <Footer />
                </div>
                {/* Last Section end */}
            </div>
        </>
    )
}

export default LandingHero