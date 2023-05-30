import React from 'react'
import Image from 'next/image'
const DEsktopSteper = () => {
    return (
        <div>
            <ul
                data-te-stepper-init
                class=" relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
                <li
                    data-te-stepper-step-ref
                    data-te-stepper-step-active
                    class="w-[4.5rem] flex-auto">
                    <div
                        data-te-stepper-head-ref
                        class="flex cursor-pointer ml-20 items-center leading-[1.3rem] no-underline  after:h-[3px] after:w-full after:flex-1 after:bg-[#424242]">
                        <div className='relative'>
                            <div>
                                <Image
                                    width={85}
                                    height={85}
                                    alt=''
                                    src='image/userlogo.svg'
                                />
                            </div>
                            <div className='absolute bottom-7 left-4'>
                                <Image
                                    src='icon/user.svg'
                                    width={52}
                                    height={28}
                                    alt=''

                                />
                            </div>
                        </div>

                    </div>

                    <div className='text-center text-[#000000] text-[20px] leading-[37px] font-medium font-sans'>
                        1. Loreispumncsan
                    </div>

                </li>

                <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
                    <div
                        data-te-stepper-head-ref
                        class="flex cursor-pointer items-center leading-[1.3rem] no-underline  before:h-[3px] before:w-full before:flex-1 before:bg-[#424242] before:content-['']  after:h-[3px] after:w-full after:flex-1 after:bg-[#424242] after:content-['']">
                        <div className='relative'>
                            <div>
                                <Image
                                    width={85}
                                    height={85}
                                    alt=''
                                    src='image/userlogo.svg'
                                />
                            </div>
                            <div className='absolute bottom-7 left-4'>
                                <Image
                                    src='icon/user.svg'
                                    width={52}
                                    height={28}
                                    alt=''

                                />
                            </div>
                        </div>

                    </div>
                    <div className='text-center text-[#000000] text-[20px] leading-[37px] font-medium font-sans'>
                        2. Loreispumncsan
                    </div>
                </li>

                <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
                    <div
                        data-te-stepper-head-ref
                        class="flex cursor-pointer items-center leading-[1.3rem] no-underline  before:h-[3px] before:w-full before:flex-1 before:bg-[#424242] before:content-['']  after:h-[3px] after:w-full after:flex-1 after:bg-[#424242] after:content-['']">
                        <div className='relative'>
                            <div>
                                <Image
                                    width={85}
                                    height={85}
                                    alt=''
                                    src='image/userlogo.svg'
                                />
                            </div>
                            <div className='absolute bottom-7 left-4'>
                                <Image
                                    src='icon/user.svg'
                                    width={52}
                                    height={28}
                                    alt=''

                                />
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-[#000000] text-[20px] leading-[37px] font-medium font-sans'>
                        3. Loreispumncsan
                    </div>
                </li>

                <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
                    <div
                        data-te-stepper-head-ref
                        class="flex cursor-pointer items-center leading-[1.3rem] no-underline  before:h-[3px] before:w-full before:flex-1 before:bg-[#424242] before:content-['']  after:h-[3px] after:w-full after:flex-1 after:bg-[#424242] after:content-['']">
                        <div className='relative'>
                            <div>
                                <Image
                                    width={85}
                                    height={85}
                                    alt=''
                                    src='image/userlogo.svg'
                                />
                            </div>
                            <div className='absolute bottom-7 left-4'>
                                <Image
                                    src='icon/user.svg'
                                    width={52}
                                    height={28}
                                    alt=''

                                />
                            </div>
                        </div>

                    </div>
                    <div className='text-center text-[#000000] text-[20px] leading-[37px] font-medium font-sans'>
                        4. Loreispumncsan
                    </div>
                </li>

                <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
                    <div
                        data-te-stepper-head-ref
                        class="flex mr-20 cursor-pointer items-center  leading-[1.3rem] no-underline before:h-[3px] before:w-full before:flex-1 before:bg-[#424242] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                        <div className='relative'>
                            <div>
                                <Image
                                    width={85}
                                    height={85}
                                    alt=''
                                    src='image/userlogo.svg'
                                />
                            </div>
                            <div className='absolute bottom-7 left-4'>
                                <Image
                                    src='icon/user.svg'
                                    width={52}
                                    height={28}
                                    alt=''

                                />
                            </div>
                        </div>

                    </div>
                    <div className='text-center text-[#000000] text-[20px] leading-[37px] font-medium font-sans'>
                        5. Loreispumncsan
                    </div>
                </li>
            </ul>

           
        </div>
    )
}

export default DEsktopSteper
