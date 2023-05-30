import React, { useState } from 'react'
import Link from 'next/link'
import Wrapper from '../Wrapper'
import DesktopMenu from '../Header/DesktopMenu'
import MobileMenu from '../Header/MobileMenu'
import { useRouter } from 'next/router'

import { BiMenuAltRight } from "react-icons/bi";
import {AiOutlineMenu} from 'react-icons/ai'
import { VscChromeClose } from "react-icons/vsc";

const ElevatingHeader = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [showCatMenu, setshowCatMenu] = useState(false)
    const [show, setShow] = useState("translate-y-0")
    const [lastScrollY, setLastScrollY] = useState(0)
    const router = useRouter()
    return (
        <>
            <header className={`w-full  z-20  top-0 transition-transform duration-300 ${show}`}>
                <div className="py-10 bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] md:h-[367px]  h-[711px">
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
                                <div className='text-white text-[14px] leading-[17px] md:text-[18px] md:leading-[22px]   font-medium font-sans md:pt-3 pt-3 cursor-pointer' onClick={() => router.push('grow/personaldetails')}>
                                    Login
                                </div>

                                <div className='text-white mt-2 md:mt-0 text-[14px] md:text-[18px] md:leading-[22px]  leading-[17px] font-medium font-sans border-[1px] border-[#FFFFFF] md:w-[177px] md:h-[50px] w-[91px] h-[31px] flex items-center justify-center cursor-pointer ' onClick={() => router.push('ecommerce/hero')}>
                                    Signup
                                </div>
                                {/* BsCart icon end */}

                            </div>
                            {/* Icon End */}
                        </div>
                    </Wrapper>

                    <Wrapper>
                        <div className='md:mt-16 mt-5'>
                            <h6 className='text-[#FFFFFF] md:text-[64px] md:leading-[79px] md:w-[1155px] md:h-[158px] font-bold '>Elevating Your {"Brand's"} Presence and Impact</h6>
                        </div>
                    </Wrapper>
                </div>
            </header>
        </>
    )
}

export default ElevatingHeader;