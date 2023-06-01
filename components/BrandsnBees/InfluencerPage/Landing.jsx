import React, { useState, useEffect } from 'react'
import Wrapper from '@/components/Wrapper'
import DesktopMenu from '@/components/Header/DesktopMenu'
import MobileMenu from '@/components/Header/MobileMenu'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { TbMathGreater } from 'react-icons/tb'
import { AiOutlineMenu } from 'react-icons/ai'
import SignupModal from '@/components/Modalcomponents/SignupModal'
import SignuoModalContent from '@/components/Modalcomponents/SignuoModalContent'
const Landing = () => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const [showCatMenu, setshowCatMenu] = useState(false)
    const [show, setShow] = useState("translate-y-0")
    const [lastScrollY, setLastScrollY] = useState(0)
    const [showModal, setShowModal] = useState(false);

    const router = useRouter()
    return (
        <>
            <header className={`w-ful  z-20  top-0 transition-transform duration-300 ${show}`}>
                <div className="py-10 bg-[#F2FFEF] md:w-[1349px] md:h-[759px]  h-[700px] w-[450px]">
                    <SignupModal
                        onClose={() => setShowModal(false)}
                        show={showModal}

                    >
                    <SignuoModalContent/>
                    </SignupModal>

                    <Wrapper className='flex  justify-between'>
                        {/* Mobile menu start */}
                        <div className='md:hidden visible w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-cente items-center hover:bg-black/[0.05] cursor-pointer relative'>
                            {mobileMenu ? (
                                <VscChromeClose
                                    className='text-[16px] #0F3D68 -mt-10 md:-mt-0'
                                    onClick={() => setMobileMenu(false)}
                                />
                            ) : (
                                <AiOutlineMenu
                                    className='text-[20px] #0F3D68'
                                    onClick={() => setMobileMenu(true)}
                                />
                            )}
                        </div>


                        <div className="text-[#0F3D68] text-[27px] leading-[33px] md:text-[42px] md:leading-[51px] font-semibold ">
                            <Link href='/'>
                                Logo
                            </Link>
                        </div>


                        <div className='flex gap-6'>

                            <DesktopMenu
                                showCatMenu={showCatMenu}
                                setshowCatMenu={setshowCatMenu}
                            />
                            {mobileMenu && (
                                <MobileMenu
                                    showCatMenu={showCatMenu}
                                    setshowCatMenu={setshowCatMenu}
                                    setMobileMenu={setMobileMenu}
                                />
                            )}
                            {/* Icon start */}
                            <div className="flex items-cente gap-10 text-black">
                                <div className='text-[#000000] text-[14px] leading-[17px] md:text-[18px] md:leading-[22px]   font-medium font-sans md:pt-3 pt-3 cursor-pointer' onClick={() => router.push('grow/personaldetails')}>
                                    Login
                                </div>

                                <div className='text-[#000000] mt-2 md:mt-0 text-[14px] md:text-[18px] md:leading-[22px]  leading-[17px] font-medium font-sans border-[1px] border-[#000000] md:w-[177px] md:h-[50px] w-[91px] h-[31px] flex items-center justify-center cursor-pointer ' onClick={() => setShowModal(true)}>
                                    Signup
                                </div>
                                {/* BsCart icon end */}

                            </div>
                            {/* Icon End */}
                        </div>
                    </Wrapper>

                    <Wrapper>
                        <div>
                            <div className="mx-aut flex py- md:flex-row flex-col">
                                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-s">
                                    <h1 className="mt-10 text-[35px] leading-[47px] md:text-[64px] md:leading-[79px] font-bold font-sans text-[#000000] md:w-[594px] md:h-[237px] ">
                                        {/* Elevating Your {"Brand's"} Presence and Impact */}
                                        Collaborate with the Brands you Love
                                    </h1>

                                    <div className="mt-10 flex gap-6">
                                        <button className="w-[177px] h-[38px] md:w-[178px] md:h-[50px] border-[1px] border-[#5A914D] text-[#5A914D] text-[16px] leading-[20px] md:text-[20px] md:leading-[24px] font-medium font-sans rounded-[5px] ">
                                            Try for free
                                        </button>

                                        <button className="w-[177px] h-[38px] md:w-[178px] md:h-[50px] border-[1px] border-[#5A914D] text-[#FFFFFF] bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] text-[16px] leading-[20px] md:text-[20px] md:leading-[24px] font-medium font-sans rounded-[5px] ">
                                            Sign up
                                        </button>
                                    </div>
                                </div>
                                {/* Image Section Start */}


                                <div className=' md:w-[591px] w-full mx-auto  ml-6 md:ml-0 -mt-10 md:-mt-0 '>

                                    <div>
                                        <img src="../image/landing/h.svg" alt="Hhero"
                                            className='md:w-[100px] w-[60px] h-[130px] md:pt-7 pt-20'
                                        />
                                    </div>
                                    <div className='flex gap-3'>
                                        <img src="../image/landing/h1.svg" alt="hero"
                                            className='md:w-[80px] w-[10px] h-full md:h-[130px] md:-mt-8 -mt-2'
                                        />
                                        <img src="../image/landing/1.svg" alt="hero"
                                            className='md:w-[80px] w-[50px] h-[100px h-full md:h-[130px] '
                                        />

                                        {/* cap image start */}
                                        <div>
                                            <img src="../image/landing/2.svg" alt="cap"
                                                className='md:w-[99px] w-[50px] h-[90px] md:h-[118px] -mt-10'
                                            />

                                            <div className="flex gap-2 md:gap-0 -mt-4 md:-mt-0 -ml-2 md:-ml-0">
                                                <img src="../image/landing/5.svg" alt="heroBoy"
                                                    className='md:w-[52px] w-[50px] h-[85px h-full md:h-[85px] pt-2'
                                                />
                                                <img src="../image/landing/6.svg" alt="BeautyQueen"
                                                    className='md:w-[161px] w-[70px] h-[85px h-full md:h-[193px] pt-2'
                                                />
                                            </div>

                                        </div>

                                        {/* cap image end */}

                                        {/* 3 no Image/Two Lady stRT */}

                                        <img src="../image/landing/3.svg" alt="twoLady"
                                            className='md:w-[94px] w-[50px] h-full md:h-[70px] -ml-10 md:-ml-[114px] '
                                        />

                                        {/* 3 no Image/Two Lady end */}

                                        {/* Right Side H Image Start */}
                                        <div className='-mt-[52px] md:-mt-[20px]'>
                                            <img src="../image/landing/h1.svg" alt="hero"
                                                className='md:w-[20px] w-[10px] h- md:h- ml-4 '
                                            />
                                            <img src="../image/landing/4.svg" alt="hero"
                                                className='md:w-[64px] w-[50px] md:h-[70px] mt-1 md:mt-0 mb-1 md:mb-0 md:ml- '
                                            />

                                            <img src="../image/landing/wh.svg" alt="hero"
                                                className='md:w-[100px] w-[60px] md:ml- mb-1 md:mb-0'
                                            />

                                            {/* <img src="image/landing/2.svg" alt="cap"
                        className='md:w-[60px] w-[50px] h-[90px] md:h-[120px]'
                      /> */}

                                            <img src="../image/landing/2.svg" alt="hero"
                                                className='md:w-[64px] w-[50px] md:h-[90px] '
                                            />
                                            {/* right last camera boy start */}
                                            <div className="flex md:-ml-[150px] -ml-[85px] md:-ml- gap-2 ">
                                                <img src="../image/landing/9.svg" alt="heroBoy"
                                                    className='md:w-[64px] w-[50px] h-[60px] h-ful -mt- md:-mt-0 md:h-[95px] pt-'
                                                />
                                                <img src="../image/landing/5.svg" alt="heroBoy"
                                                    className='md:w-[85px] w-[50px] h-[65px] md:h-[125px] mt-1 md:mt-0'
                                                />
                                                <img src="../image/landing/10.svg" alt="hero"
                                                    className='md:w-[64px] w-[50px] md:h-[142px] h-[80px] mt-1 md:mt-0 -ml-4 md:-ml-0 '
                                                />
                                            </div>
                                            {/* right last camera boy start */}

                                        </div>

                                        {/* Right Side H Image End */}

                                    </div>

                                    {/* cvbn */}
                                    <div className=' md:-mt-[300px] mt-[80px]'>
                                        <img src="../image/landing/4.svg" alt="hero"
                                            className='md:w-[64px] w-[50px] -mt-[240px] md:-mt-0 mb-2 md:mb-0 -ml-8 h-full md:h-[70px] md:ml-4 '
                                        />

                                        <div>
                                            <div className='flex -mt-[200px md:-mt-0'>
                                                <img src="../image/landing/v.svg" alt="hero"
                                                    className='md:w-[60px] w-[50px] h-[70px]  md:h-[171px] -ml-[52px] md:-ml-2'
                                                />
                                                <img src="../image/landing/3.svg" alt="hero"
                                                    className='md:w-[192px] w-[90px] md:h-[145px] -ml-4 md:-ml-3'
                                                />
                                            </div>

                                        </div>

                                        <div className="flex gap-2 -mt-5">
                                            <img src="../image/landing/ho.svg" alt="hero"
                                                className='md:w-[100px] w-[60px] md:mt- -ml-[30px] md:-ml-[60px]'
                                            />
                                            <img src="../image/landing/8.svg" alt="smartBoy"
                                                className='md:w-[107px] w-[50px] md:h-[162px mt-[22px] md:mt-0 -ml-'
                                            />
                                            <img src="../image/landing/1.svg" alt="hero"
                                                className='md:w-[49px] w-[50px] h-full -mt-6 md:-mt-0'
                                            />

                                        </div>

                                    </div>


                                </div>

                                {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative mt-10">
                  <img src="image/ziczac.svg" alt="" />

                  <img
                    className="absolute md:-top-4 md:left-9 -top-2 left-3 object-cover object-center rounded"
                    alt="hero" src="image/headerimg.svg" />
                </div> */}


                                {/* Image Section End */}

                            </div>
                        </div>
                    </Wrapper>
                    {/* Powerfull End */}

                    {/* Powerfull End */}

                </div>

            </header>
        </>
    )
}

export default Landing;