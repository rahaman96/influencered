import React from 'react'
import Wrapper from '../Wrapper'
import Image from 'next/image'
const HeroExtra = () => {
    return (
        <div>
            <Wrapper>
                <ul
                    data-te-stepper-init
                    class="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
                    <li
                        data-te-stepper-step-ref
                        data-te-stepper-step-active
                        class="w-[4.5rem] flex-auto">
                        <div
                            data-te-stepper-head-ref
                            class="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                            <Image
                                width={40}
                                height={40}
                                alt=''
                                src='image/userlogo.svg'
                            />

                        </div>

                    </li>

                    <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
                        <div
                            data-te-stepper-head-ref
                            class="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                            <Image
                                width={40}
                                height={40}
                                alt=''
                                src='image/userlogo.svg'
                            />

                        </div>

                    </li>

                    <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
                        <div
                            data-te-stepper-head-ref
                            class="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                            <Image
                                width={40}
                                height={40}
                                alt=''
                                src='image/userlogo.svg'
                            />

                        </div>

                    </li>

                    <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
                        <div
                            data-te-stepper-head-ref
                            class="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                            <Image
                                width={40}
                                height={40}
                                alt=''
                                src='image/userlogo.svg'
                            />

                        </div>

                    </li>

                    <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
                        <div
                            data-te-stepper-head-ref
                            class="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                            <Image
                                width={40}
                                height={40}
                                alt=''
                                src='image/userlogo.svg'
                            />

                        </div>

                    </li>
                </ul>
            </Wrapper>
        </div>
    )
}

export default HeroExtra



// import { TfiLocationPin } from "react-icons/tfi";

// export default function LocationDropDown() {
//   return (
//     <>
//       <div className="m-10">
//         <select className="absolute w-[360px] h-[46px] pl-14 block  py-2 px-3 border  border-gray-300 bg-white rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
//           <option>India</option>
//           <option>US</option>
//           <option>Australia</option>
//           <option>Japan</option>
//           <option>Srilanka</option