import React from 'react'
import BrandHeader from './BrandHeader'
import Wrapper from '../Wrapper'
import DesktopsideBar from './DesktopsideBar'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import styles from '../../styles/requirments.module.css'
import ProgressBar from "@ramonak/react-progress-bar";

const Targets = () => {
  return (
    <div className=''>
      <BrandHeader />

      <div className='md:flex'>
        <div className=''>
          <DesktopsideBar />
        </div>
        <Wrapper>
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 md:py-24 mx-auto">
              <div className="-my-8 divide-y-2 divide-gray-100">
                <div className="py-3 md:py-0 flex flex-wrap md:flex-nowrap">

                  <div className="md:flex-grow">
                    <h2 className="text-[#000000] text-[20px] md:text-[36px] leading-[54px] font-medium font-sans">Choose your target audience</h2>
                    <div>
                      <p className='md:pb-5 text-[#000000] w-[300px] md:w-[820px] text-[14px] md:text-[16px] md:leading-[24px] font-normal font-sans opacity-70'>Target audience basis their age, location & language, this will help you launch a campaign easily</p>
                      <h2 className='mb-2 md:pb-3 text-[#000000] text-[25px] leading-[38px] font-medium font-sans opacity-90'>Age range: 1 Yr to 100 Yrs</h2>

                      {/* <div className={styles.progress}>
                        <ProgressBar completed={60}
                          className={styles.progressBar}
                        />
                      </div> */}

                      <div>
                        <div class="w-[648px] h-[6px] bg-[#E7E7E7] rounded-full  mb-4 dark:bg-gray-700">
                          <div class="bg-[#114067] h-1.5 rounded-full flex justify-between" style={{ width: '25%' }} >


                          </div>
                          <div className="mt-2 flex md:justify-between gap-16">
                            <p className='text-[#000000] text-[18px] leading-[27px] font-normal font-sans '>Min: 1 yr</p>
                            <p className='text-[#000000] text-[18px] leading-[27px] font-normal font-sans '>Max: 100 Yrs</p>
                          </div>

                        </div>
                      </div>
                      {/* gender */}
                      <div className='pt-10'>
                        <h3 class="mb-2 text-[#000000] text-[25px] leading-[37px] font-bold ">Gender</h3>
                        <ul class=" flex gap-3">
                          <li class="md:w-[96px] borde">
                            <div class="flex items-center gap-2 ">
                              <input id="default-checkbox" type="checkbox" value="" class="w-[21px] h-[21px] rounded" />
                              <label for="vue-checkbox-list" class="text-[#000000] text-[20px] leading-[30px] font-normal">Male</label>
                            </div>
                          </li>
                          <li class="md:w-[121px] ">
                            <div class="flex items-center gap-2 ">
                              <input id="default-checkbox" type="checkbox" value="" class="w-[21px] h-[21px] rounded" />
                              <label for="vue-checkbox-list" class="text-[#000000] text-[20px] leading-[30px] font-normal">Female</label>
                            </div>
                          </li>
                          <li class="md:w-[114px] borde">
                            <div class="flex items-center gap-2 ">
                              <input id="default-checkbox" type="checkbox" value="" class="w-[21px] h-[21px] rounded" />
                              <label for="vue-checkbox-list" class="text-[#000000] text-[20px] leading-[30px] font-normal">Others</label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* gender */}

                      {/* language */}
                      <div className="pt-5">
                        <h6 className='text-[#000000] opacity-80 text-[25px] leading-[37px] font-medium font-sans '>Languages</h6>
                        <p className='md:mb-8 mb-5 md:w-[601px] w-[300px] text-[#000000] opacity-70 text-[14px] md:text-[16px] leading-[24px] font-normal font-sans '>This will help us generate a rough estimation of the target audience</p>
                      </div>
                      {/* language */}

                    </div>


                  </div>
                </div>
              </div>
              {/* language button */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-5'>
                <div class="cursor-pointer flex md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:w-[183px] w-[120px] md:h-[55px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                  <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                    Hindi
                  </p>
                </div>
                <div class="cursor-pointer flex md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:w-[183px] w-[120px] md:h-[55px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                  <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                    Hindi
                  </p>
                </div>
                <div class="cursor-pointer flex md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:w-[183px] w-[120px] md:h-[55px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                  <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                    Hindi
                  </p>
                </div>
                <div class="cursor-pointer flex md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:w-[183px] w-[120px] md:h-[55px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                  <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                    Hindi
                  </p>
                </div>
                <div class="cursor-pointer flex md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:w-[183px] w-[120px] md:h-[55px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                  <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                    Hindi
                  </p>
                </div>
                <div class="cursor-pointer flex md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:w-[183px] w-[120px] md:h-[55px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                  <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                    Hindi
                  </p>
                </div>
                <div class="cursor-pointer flex md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:w-[183px] w-[120px] md:h-[55px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                  <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                    Hindi
                  </p>
                </div>
                <div class="cursor-pointer flex md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:w-[183px] w-[120px] md:h-[55px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full">
                  <p className='md:text-[18px] text-[#000000] opacity-80 leading-[27px] '>
                    Hindi
                  </p>
                </div>
              </div>

              {/* language button */}

              <div class="  mt-5">
                <div class="flex items-center gap-2 ">
                  <input id="default-checkbox" type="checkbox" value="" class="w-[21px] h-[21px] rounded" />
                  <label for="vue-checkbox-list" class="text-[#000000] opacity-90 text-[20px] leading-[30px] font-normal">Select all</label>
                </div>
              </div>


              {/* dropdown */}
              <div>
                
              </div>
              {/* Dropdown end */}
              {/* butto Start */}
              <div className="flex  mt-5 gap-4  md:gap-10 pb-10 md:pb-0" onClick={() => router.push('/grow/requirments')} >
                <div className='w-[55px] h-[50px] border-[1px] border-[#114067] rounded-[5px] flex justify-center items-center '>

                  <AiOutlineArrowLeft />
                </div>
                <button type="submit" className="text-[#0F3D68] text-[20px] leading-[24px] font-medium rounded-[5px] border-[#114067] border-[1px] w-[221px] h-[50px] " onClick={() => router.push('objective')} >Next</button>
              </div>
              {/* butto End */}
            </div>
          </section>
        </Wrapper>
      </div>

    </div>
  )
}

export default Targets