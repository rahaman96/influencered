import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Wrapper from '../Wrapper'
import DesktopMenu from '../Header/DesktopMenu'
import MobileMenu from '../Header/MobileMenu'
import { useRouter } from 'next/router'

import { AiOutlineMenu } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineArrowLeft } from 'react-icons/ai';

import SignupModal from '../Modalcomponents/SignupModal'
import SignupSuccessfull from '../Modalcomponents/SignUpSuccessful'

const AwarenessHeader = ({ headerData }) => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [showCatMenu, setshowCatMenu] = useState(false)
    const [show, setShow] = useState("translate-y-0")
    const [lastScrollY, setLastScrollY] = useState(0)
    const router = useRouter()
    const [showModal, setShowModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false)
    if (typeof window === "undefined") return null;

    const item = localStorage.getItem("headtext");
    return (
        <>
            <header className={`w-full  z-20  top-0 transition-transform duration-300 ${show}`}>
                <div className="py-10 bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] md:h-[367px]  h-[711px">
                    <SignupModal
                        onClose={() => setShowModal(false)}
                        show={showModal}

                    >
                        <Wrapper className='md:mx-auto flex md:justify-center '>
                            <div className=''>
                                <h6 className='mb-6 text-[#000000] text-[36px] leading-[54px] font-medium font-sans md:w-[351px] h-[54px] '>Sign up to continue</h6>
                                <form >
                                    <div className="flex md:grid-cols-2 md:gap-6 gap-4 md:w-[805px] justify-between">
                                        <div className="relative z-0 md:w-[374px] w-full  mb-4 group">
                                            <input type="text" name="Email" id="Email" className="block py-1 mt-3 px-0 w-full text-sm  border-0 border-b-[1px] border-[#000000] opacity-60 appearance-none   focus:outline-none peer" placeholder=" " required />
                                            <label for="Email" className=" absolute  duration-300 top-3 origin-[0] peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-4 text-[#000000] text-[14px]  md:text-[20px] font-normal font-sans opacity-60 leading-[27px] ">Email ID *</label>
                                        </div>
                                        <div className="relative z-0 md:w-[374px] w-full  mb-4 group">
                                            <input type="text" name="Password " id="Password " className="block py-1 mt-3 px-0 w-full text-sm  border-0 border-b-[1px] border-[#000000] opacity-60 appearance-none   focus:outline-none peer" placeholder=" " required />
                                            <label for="Password " className=" absolute  duration-300 top-3 origin-[0] peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-4 text-[#000000] text-[14px] md:text-[20px] font-normal font-sans opacity-60 leading-[27px] ">Password *</label>
                                        </div>
                                    </div>
                                    <div className='flex gap-1 md:w-[367px] w-full mb-4'>
                                        <p className='text-[#000000] text-[14px] md:text-[16px] leading-[21px] font-sans font-normal '>Note</p>
                                        <p className='text-[#000000] text-[14px] md:text-[20px] leading-[21px] font-sans font-normal '>:</p>
                                        <p className='md:pt-[2px] text-[#000000] opacity-60 text-[14px] md:text-[16px] leading-[21px] font-sans font-normal '> This email ID will be used for verification</p>
                                    </div>
                                    <div className="flex md:grid-cols-2 md:gap-6 gap-4 md:w-[805px] justify-between">
                                        <div className="relative z-0 md:w-[374px]  w-full mb-4 group">
                                            <input type="text" name="Phone Number" id="Phone Number" className="block py-1 mt-3 px-0 w-full text-sm  border-0 border-b-[1px] border-[#000000] opacity-60 appearance-none   focus:outline-none peer" placeholder=" " required />
                                            <label for="Phone Number" className=" absolute  duration-300 top-3 origin-[0] peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-4 text-[#000000] text-[14px] md:text-[20px] font-normal font-sans opacity-60 leading-[27px] ">Phone Number*</label>
                                        </div>
                                        <div className="relative z-0 md:w-[374px] w-full  mb-4 group">
                                            <input type="text" name="Re-enter Password" id="Re-enter Password" className="block py-1 mt-3 px-0 w-full text-sm  border-0 border-b-[1px] border-[#000000] opacity-60 appearance-none   focus:outline-none peer" placeholder=" " required />
                                            <label for="Re-enter Password" className=" absolute  duration-300 top-3 origin-[0] peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-4 text-[#000000] text-[14px] md:text-[20px] font-normal font-sans opacity-60 leading-[27px] ">Re-enter Password *</label>
                                        </div>
                                    </div>
                                    <div className='flex md:w-[719px]  h-[44px] gap-1'>
                                        <p className='text-[#000000]  text-[14px] md:text-[20px] leading-[21px] font-sans font-normal'>Note </p>
                                        <p className='text-[#000000] opacity- text-[14px] md:text-[20px] leading-[21px] font-sans font-normal'>:</p>
                                        <p className='pt-[2px] text-[#000000] opacity-60 text-[14px] md:text-[16px] leading-[21px] font-sans font-normal '>
                                            Passwords must contain at least  8 characters, including at least 1 uppercase letter,
                                            1 lowercase letter, 1 number and 1 special character.
                                        </p>
                                    </div>
                                    <div className="flex gap-4 py-14 md:gap-10 pb-10 md:pb-0 justify-cente"

                                    >
                                        <div className='w-[55px] h-[50px] border-[1px] border-[#114067] rounded-[5px] flex justify-center items-center '>
                                            <AiOutlineArrowLeft />
                                        </div>
                                        <button type="submit" className="text-[#FFFFFF] text-[20px] leading-[24px] font-medium rounded-[5px] bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] w-[221px] h-[50px] " onClick={() => setSuccessModal(true)}>Next</button>
                                    </div>
                                </form>
                            </div>
                        </Wrapper>

                    </SignupModal>


                    {/* SignupSuccessfull Modal Start */}
                    <SignupSuccessfull
                        onClose={() => setSuccessModal(false)}
                        show={successModal}
                    >
                        <Wrapper>
                            <div className="mx-auto  flex-wrap items-center justify-center  ">
                                <div className='flex mb-14 h- mt-[140px] items-center justify-center'>
                                    <AiOutlineArrowLeft />
                                </div>
                                <div className=' flex items-center justify-center'>
                                    <h6 className='text-[#000000] text-[36px] leading-[50px] text-center  font-medium md:w-[811px]'>You have successfully signed up with your campaign details will reach you soon</h6>

                                </div>
                            </div>
                        </Wrapper>
                    </SignupSuccessfull>
                    {/* SignupSuccessfull */}
                    <Wrapper className='flex  justify-between'>
                        {/* Mobile menu start */}
                        <div className='md:hidden visible w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-cente items-center hover:bg-black/[0.05] cursor-pointer relative'>
                            {mobileMenu ? (
                                <VscChromeClose
                                    className='text-[16px] text-white -mt-10 md:-mt-0'
                                    onClick={() => setMobileMenu(false)}
                                />
                            ) : (
                                <AiOutlineMenu
                                    className='text-[20px] text-white'
                                    onClick={() => setMobileMenu(true)}
                                />
                            )}
                        </div>


                        <div className="text-white text-[27px] leading-[33px] md:text-[42px] md:leading-[51px] font-semibold ">
                            <Link href='/'>
                                Logo
                            </Link>
                        </div>


                        <div className='flex gap-6'>

                        <div className='text-white'>
                           <DesktopMenu
                                showCatMenu={showCatMenu}
                                setshowCatMenu={setshowCatMenu}
                            />
                           </div>
                            {mobileMenu && (
                                <MobileMenu
                                    showCatMenu={showCatMenu}
                                    setshowCatMenu={setshowCatMenu}
                                    setMobileMenu={setMobileMenu}
                                />
                            )}
                            {/* Icon start */}
                            <div className="flex items-cente gap-10 text-black">
                                <div className='text-white text-[14px] leading-[17px] md:text-[18px] md:leading-[22px]   font-medium font-sans md:pt-3 pt-3 cursor-pointer' onClick={() => router.push('grow/personaldetails')}>
                                    Login
                                </div>

                                <div className='text-white mt-2 md:mt-0 text-[14px] md:text-[18px] md:leading-[22px]  leading-[17px] font-medium font-sans border-[1px] border-[#FFFFFF] md:w-[177px] md:h-[50px] w-[91px] h-[31px] flex items-center justify-center cursor-pointer ' onClick={() => setShowModal(true)}>
                                    Signup
                                </div>
                                {/* BsCart icon end */}

                            </div>
                            {/* Icon End */}
                        </div>
                    </Wrapper>

                    <Wrapper>
                        <div className='md:mt-16 mt-5'>
                            <h6 className='text-[#FFFFFF] md:text-[52px] md:leading-[71px] md:w-[728px] md:h-[142px]' >{localStorage?.getItem("headtext")}</h6>
                        </div>
                    </Wrapper>
                </div>
            </header>
        </>
    )
}

export default AwarenessHeader;