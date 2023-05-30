import React from 'react'
import styles from '../../../styles/BrandPage.module.css'
const Testimonials = () => {
    return (
        <>
            <div className='md:px-10 '>
                <div className='bg-[#EDFFE9] md:w-[1240px] w-[450px]  md:h-[750px]  h-[550px] mb-10  rounded-[10px] z-10 p-6 md:p-0 '>

                    <h6 className='text-[#000000] mb-5 md:text-[74px] md:leading-[111px] text-[30px] leading-[45px] font-sans font-medium text-center'>
                        <span>Brand </span>
                        <span className='text-[#5A914D]'>Testimonials</span>
                    </h6>
                    {/* Card Section start */}
                    <div className='relative'>
                        {/* card 1 start */}
                        <div className='mx-auto flex justify-center'>
                            <div class="flex gap-2 md:gap-6 w-[260px] h-[140px] md:w-[447px] md:h-[200px] p-4 md:p-6 bg-white  rounded-[14px] shadow  z-20">
                                <img class="w-[20px] h-[20px] md:w-[57px] md:h-[57px] rounded-full" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="Rounded avatar" />
                                <div>
                                    <h5 class=" text-[#000000] md:text-[22px] w-[84px] h-[7px] text-[9px] leading-[7px] md:w-[152px] md:h-[30px] md:leading-[30px] font-semibold font-sans ">Martin Goutry</h5>
                                    <p className='mt-2 md:mt-0 text-[#B9B9B9] text-[8px] leading-[10px] md:text-[13px] md:leading-[18px] w-[119px] h-[28px] md:w-[209px] md:h-[18px] font-normal font-sans' >Back-end developer at MyDodow</p>
                                    <p className='md:mt-3 -mt-2 md:w-[294px] md:h-[72px] text-[10px] leading-[14px] md:text-[10px] md:leading-[18px] font-normal md:font-bold font-sans'>Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising!</p>
                                    <div className="flex gap-2 mt-2 md:mt-0">
                                        <img src="../image/brandsness/test.svg" alt="test"
                                            className='w-[12px] h-[4p]'
                                        />
                                        <p className='md:w-[151px] md:h-[20px] text-[10px] leading-[14px] md:text-[14px] md:leading-[20px] font-medium font-sans '>Dico user, 2021.03.02</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card 1 end */}

                        {/* card 2 start */}

                        <div className='md:px absolute top-[130px] -left-[15px] md:left-[110px] md:top-[160px] z-10'>
                            <div class={`flex gap-2 md:gap-6  w-[240px] h-[140px] md:w-[408px] md:h-[196px] p-4 md:p-6   rounded-[14px] s ${styles.cardTwo} `}>
                                <img class="w-[20px] h-[20px] md:w-[57px] md:h-[57px] rounded-full" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="Rounded avatar" />
                                <div>
                                    <h5 class="text-[#000000] text-[9px] leading-[12px] md:text-[22px] md:w-[169px] md:h-[30px] md:leading-[30px] font-semibold font-sans ">Theo Champion</h5>
                                    <span className='text-[#B9B9B9] text-[9px] leading-[12px] md:text-[12px] md:leading-[16px] md:w-[191px] md:h-[16px] font-normal font-sans ' >Back-end developer at MyDodow</span>
                                    <p className='md:mt-3 text-[10px] leading-[14px] md:w-[269px] md:h-[64px] md:text-[12px] md:leading-[16px] font-normal font-sans ' >Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising!</p>
                                    <div className="flex gap-2 mt-2 md:mt-0">
                                        <img src="../image/brandsness/test.svg" alt="test"
                                            className='w-[12px] h-[4p]'
                                        />
                                        <p className='md:w-[151px] text-[10px] leading-[14px] md:h-[20px] md:text-[14px] md:leading-[20px] font-medium font-sans '>Dico user, 2021.03.02</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card 2 end  */}
                        {/* card 3 start */}

                        <div className='flex justify-end absolute top-[125px] left-[140px] md:left-[510px] md:top-[190px] z-20'>
                            <div class={`flex gap-2 md:gap-6  w-[250px] h-[150px] md:w-[502px] md:h-[220px] p-6 bg-white rounded-[14px] s ${styles.cardThree} `}>
                                <img class="w-[20px] h-[20px]  md:w-[57px] md:h-[57px] rounded-full" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="Rounded avatar" />
                                <div>
                                    <h5 class="text-[#000000] text-[9px] leading-[12px] md:text-[22px] md:w-[135px] md:h-[30px] md:leading-[30px] font-semibold font-sans ">Agnes Remi</h5>
                                    <span className='text-[#B9B9B9] text-[9px] leading-[12px] md:text-[14px] md:leading-[20px] md:w-[235px] md:h-[20px] font-medium font-sans ' >Back-end developer at MyDodow</span>
                                    <p className='md:mt-3 text-[10px] leading-[14px] md:w-[330px] md:h-[80px] md:text-[11px] md:leading-[15px] font-normal md:font-bold font-sans ' >Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising!</p>
                                    <div className="flex gap-2 mt-2 md:mt-0">
                                        <img src="../image/brandsness/test.svg" alt="test"
                                            className='w-[12px] h-[12p]'
                                        />
                                        <p className='md:w-[151px] text-[10px] leading-[14px] md:h-[20px] md:text-[14px] md:leading-[20px] font-medium font-sans '>Dico user, 2021.03.02</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card 3 end */}


                        {/* card 4 start */}

                        <div className=' absolute top-[260px] left-[20px] md:left-[170px] md:top-[340px] z-'>
                            <div class={`flex gap-2 md:gap-6  w-[240px] h-[140px] md:w-[387px] md:h-[186px] p-4 md:p-6 bg-[#9EA1A8]  rounded-lg shadow ${styles.cardFour} `}>
                                <img class="w-[20px] h-[20px] md:w-[57px] md:h-[57px] rounded-full" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="Rounded avatar" />
                                <div>
                                    <h5 class="text-[#000000] text-[9px] leading-[12px] md:text-[22px] md:w-[152px] md:h-[30px] md:leading-[30px] font-semibold font-sans ">Agnes Remi</h5>
                                    <span className='text-[#B9B9B9] text-[9px] leading-[12px] md:text-[11px] md:leading-[15px] md:w-[181px] md:h-[15px] font-semibold font-sans ' >Back-end developer at MyDodow</span>
                                    <p className='text-[#1A1B1D] text-[10px] leading-[14px] md:mt-3 md:w-[255px] md:h-[60px] md:text-[8px] md:leading-[12px] font-normal md:font-bold font-sans ' >Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising!</p>
                                    <div className="flex gap-2 mt-2 md:mt-0">
                                        <img src="../image/brandsness/test.svg" alt="test"
                                            className='w-[12px] h-[4p]'
                                        />
                                        <p className='text-[#B9B9B9]  text-[10px] leading-[14px] md:w-[151px] md:h-[20px] md:text-[14px] md:leading-[20px] font-medium font-sans '>Dico user, 2021.03.02</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card 4 end */}


                        {/* card 5 start */}

                        <div className=' absolute top-[270px] left-[150px] md:left-[370px] md:top-[390px] z-'>
                            <div class={`flex gap-6  w-[220px] h-[160px] md:w-[360px] md:h-[173px] p-4 md:p-6  rounded-[14px]  ${styles.cardFive} `}>
                                <img class="w-[20px] h-[20px] md:w-[57px] md:h-[57px] rounded-full" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="Rounded avatar" />
                                <div>
                                    <h5 class="text-[#000000] text-[9px] leading-[12px] md:text-[22px] md:w-[175px] md:h-[30px] md:leading-[30px] font-semibold font-sans ">Roman Atwoods</h5>
                                    <span className='text-[#B9B9B9] text-[9px] leading-[12px] md:text-[13px] md:leading-[18px] md:w-[169px] md:h-[14px] font-normal font-sans ' >Back-end developer at MyDodow</span>
                                    <p className='text-[#1A1B1D] text-[10px] leading-[14px] md:w-[237px] md:h-[56px] md:text-[7px] md:leading-[11px] font-normal md:font-bold font-sans ' >Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising!</p>
                                    <div className="flex gap-2 mt-2 md:mt-0">
                                        <img src="../image/brandsness/test.svg" alt="test"
                                            className='w-[12px] h-[4p]'
                                        />
                                        <p className='text-[#B9B9B9] text-[10px] leading-[14px] md:w-[151px] md:h-[20px] md:text-[14px] md:leading-[20px] font-medium font-sans '>Dico user, 2021.03.02</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card 5 end */}

                    </div>

                    {/* Card Section start */}

                </div>
            </div>
        </>
    )
}

export default Testimonials