import React from 'react'
import Wrapper from '../Wrapper'
const DesktopsideBar = () => {
    return (

        <>
            {/* side bar start */}
            <div className='bg-[#F5F5F5] h-full'>
                <div className="md:w-[284px] md:mb-0 mb-10 md:py-5 flex-shrink-0 flex flex-col ">
                    <ul
                        className="relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
                        data-te-stepper-init
                        data-te-stepper-type="vertical">
                        <li
                            data-te-stepper-step-ref
                            className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.64rem] after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0]">
                            <div
                                data-te-stepper-head-ref
                                className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-['']">
                                <span
                                    data-te-stepper-head-icon-ref
                                    className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full border-[1px] border-[#0F3D68]  text-[20px] font-normal leading-[24px] text-[#000000] opacity-70">
                                    1
                                </span>
                                <span
                                    data-te-stepper-head-text-ref
                                    className="text-[#0000000] opacity-80 text-[25px] leading-[38px] font-normal font-sans">
                                    Personal Details
                                </span>
                            </div>

                        </li>

                        <li
                            data-te-stepper-step-ref
                            className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
                            <div
                                data-te-stepper-head-ref
                                className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-['']">
                                <span
                                    data-te-stepper-head-icon-ref
                                    className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full border-[1px] border-[#0F3D68]  text-[20px] font-normal leading-[24px] text-[#000000] opacity-70">
                                    2
                                </span>
                                <span
                                    data-te-stepper-head-text-ref
                                    className="text-[#0000000] opacity-80 text-[25px] leading-[38px] font-normal font-sans">
                                    Requirments
                                </span>
                            </div>

                        </li>


                        <li
                            data-te-stepper-step-ref
                            className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
                            <div
                                data-te-stepper-head-ref
                                className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-['']">
                                <span
                                    data-te-stepper-head-icon-ref
                                    className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full border-[1px] border-[#0F3D68]  text-[20px] font-normal leading-[24px] text-[#000000] opacity-70">
                                    3
                                </span>
                                <span
                                    data-te-stepper-head-text-ref
                                    className="text-[#0000000] opacity-80 text-[25px] leading-[38px] font-normal font-sans">
                                    Select Categories
                                </span>
                            </div>

                        </li>
                        <li
                            data-te-stepper-step-ref
                            className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
                            <div
                                data-te-stepper-head-ref
                                className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-['']">
                                <span
                                    data-te-stepper-head-icon-ref
                                    className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full border-[1px] border-[#0F3D68]  text-[20px] font-normal leading-[24px] text-[#000000] opacity-70">
                                    4
                                </span>
                                <span
                                    data-te-stepper-head-text-ref
                                    className="text-[#0000000] opacity-80 text-[25px] leading-[38px] font-normal font-sans">
                                    Objective
                                </span>
                            </div>

                        </li>

                        <li
                            data-te-stepper-step-ref
                            className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
                            <div
                                data-te-stepper-head-ref
                                className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-['']">
                                <span
                                    data-te-stepper-head-icon-ref
                                    className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full border-[1px] border-[#0F3D68]  text-[20px] font-normal leading-[24px] text-[#000000] opacity-70">
                                    5
                                </span>
                                <span
                                    data-te-stepper-head-text-ref
                                    className="text-[#0000000] opacity-80 text-[25px] leading-[38px] font-normal font-sans">
                                    Target audience
                                </span>
                            </div>

                        </li>
                        <li data-te-stepper-step-ref className="relative h-fit">
                            <div
                                data-te-stepper-head-ref
                                className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-['']">
                                <span
                                    data-te-stepper-head-icon-ref
                                    className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full border-[1px] border-[#0F3D68]  text-[20px] font-normal leading-[24px] text-[#000000] opacity-70">
                                    6
                                </span>
                                <span
                                    data-te-stepper-head-text-ref
                                    className="text-[#0000000] opacity-80 text-[25px] leading-[38px] font-normal font-sans">
                                    {/* // className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"> */}
                                    Customize
                                </span>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
            {/* side bar end */}
        </>

    )
}

export default DesktopsideBar