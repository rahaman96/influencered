import React, { useState } from 'react'
import HeroNav from './HeroNav'
import Wrapper from '../Wrapper'
import ProgressBar from "@ramonak/react-progress-bar";
import styles from '../../styles/requirments.module.css'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import About from '../Home/About';
import Footer from '../Home/Footer';
import { useRouter } from 'next/router'
import AwarenessHeader from './AwarenessHeader';
import MultiRangeSliderPage from './MultipleRangeSlider';
import ToggleButton from './ToggleButton';

const ERequirments = () => {
    const router = useRouter()
    const [toggle, setToggle] = useState(false)
    const handleToggleChane = () => {
        setToggle(!toggle)
    };
    const headerData = router.query.name

    const [sliderValue, setSliderValue] = useState(10000);

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    return (
        <>
            <div>
                <AwarenessHeader headerData={headerData} />
                <HeroNav />

                <Wrapper>
                    <section className="text-gray-600 body-font overflow-hidden">
                        <div className="containe flex justify-center px- py-10 md:py-24 mx-auto">
                            <div className="-my-8 divide-y-2 divide-gray-100">
                                <div className="py-3 md:py-0 flex flex-wrap md:flex-nowrap">
                                    <div className="md:flex-grow">
                                        <h2 className="text-[#000000] text-[20px] md:text-[36px] leading-[54px] font-medium font-sans">Fill your requirements</h2>
                                        <div>
                                            <p className='md:pb-5 text-[#000000] text-[14px] md:text-[16px] md:leading-[24px] font-normal font-sans opacity-70'>Let us help you and plan tour campaign better</p>
                                            <h2 className='mb-2 text-[#000000] text-[25px] leading-[38px] font-medium font-sans opacity-90'>Budget:10,000</h2>
                                            <p className='mb- text-[#000000] text-[14px] md:text-[16px] md:leading-[24px] font-normal font-sans opacity-70 md:w-[607px]'>This wil help you to suggest optimal number of influencers and deliverables
                                                to achieve your object
                                            </p>



                                            {/* Multi Range Slider start */}
                                            {/* <div className='mb-10'>
                                                <MultiRangeSliderPage
                                                    min={10000}
                                                    max={20000}
                                                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                                                />
                                            </div> */}


                                            <input
                                                className="md:w-[648px] w-full h-[6px] rounded  bg-gradient-to-t  [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[24px] [&::-webkit-slider-thumb]:w-[24px] [&::-webkit-slider-thumb]:rounded-full appearance-none [&::-webkit-slider-thumb]:bg-gradient-to-t from-[#5A914D] to-[#0F3D68]"
                                                type="range"
                                                min="10000"
                                                max="20000"
                                                value={sliderValue}
                                                onChange={handleSliderChange}
                                                // onInput={(e) => {
                                                //     const value = e.target.value;
                                                //     e.target.style.background = `linear-gradient(to right, #34675a 0%, #34675a ${value}%, #bbcabc ${value}%, #bbcabc 100%)`;
                                                // }}
                                            />
                                            <div className="tooltip">{sliderValue}</div>

                                            {/* <div className='flex justify-between mt-2 md:w-[648px]'>
                                                <p className='text-[#000000] text-[18px] leading-[27px] font-normal font-sans '>Min: 10000</p>
                                                <p className='text-[#000000] text-[18px] leading-[27px] font-normal font-sans '>Max: {sliderValue}</p>
                                            </div> */}
                                            {/* Multi Range Slider End*/}

                                        </div>
                                        <div className='md:mt-8'>
                                            <form>
                                                <div className="grid md:grid-cols-2 md:gap-6">
                                                    <div className="relative z-0 w-full mb-6 group">
                                                        <input type="text" name="link" id="link" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#000000] opacity-60 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                                        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Link Your Website*</label>
                                                    </div>

                                                </div>
                                            </form>

                                        </div>

                                        <div class='pb-10 md:pb-0'>
                                            <p className='mb-4 text-[#000000] text-[16px] md:text-[25px] md:leading-[38px] leading-[24px] font-medium font-sans'>
                                                Are you executing a campaign for the first time?*
                                            </p>

                                            <div className={`${styles.toggleMain}`} >
                                                <div className={!toggle ? `${styles.no}` : `${styles.yes}`} onClick={() => setToggle(false)}>
                                                    No
                                                </div>
                                                <div className={toggle ? `${styles.no}` : `${styles.yes}`} onClick={() => setToggle(true)}>
                                                    Yes
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 md:mb-16 md:gap-10 md:mt-10  mt-5 pb-10 md:pb-0  mx-auto  justify-center"
                                            onClick={() => router.push({ pathname: 'ecategory', query: { name: headerData, eData: 'second' } })}
                                        >
                                            <div className='w-[55px] h-[50px] border-[1px] border-[#114067] rounded-[5px] flex justify-center items-center '>
                                                <AiOutlineArrowLeft />
                                            </div>
                                            <button type="submit" className="text-[#FFFFFF] text-[20px] leading-[24px] font-medium rounded-[5px]  bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] w-[221px] h-[50px] ">Next</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Wrapper>
                {/* Last Section start */}
                <div>
                    <About />
                    <Footer />
                </div>
                {/* Last Section end */}
            </div>
        </>
    )
}

export default ERequirments