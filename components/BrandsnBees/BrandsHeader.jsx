import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineMenu } from 'react-icons/ai'
import { VscChromeClose } from "react-icons/vsc";
import { TbMathGreater } from 'react-icons/tb'
import styles from '../../styles/headerPage.module.css'
import DesktopMenu from '../Header/DesktopMenu'
import MobileMenu from '../Header/MobileMenu'
import Wrapper from '../Wrapper'
import BradnessDesktopMenu from './BradnessDesktopMenu';
import BradnessMobileMenu from './BradnessMobileMenu';
import SignupModal from '../Modalcomponents/SignupModal';
import SignuoModalContent from '../Modalcomponents/SignuoModalContent';

const BrandsHeader = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [showCatMenu, setshowCatMenu] = useState(false)
    const [show, setShow] = useState("translate-y-0")
    const [lastScrollY, setLastScrollY] = useState(0)
    const [showModal, setShowModal] = useState(false);

    const router = useRouter()

    return (
        <>
            <header className={`w-full  z-20  top-0 transition-transform duration-300 ${show}`}>
                <div className="py-10 bg-[#EDFFE9] md:h-[700px]  h-[750px] min-h-ful">
                    <SignupModal
                        onClose={() => setShowModal(false)}
                        show={showModal}
                    >
                        <SignuoModalContent />
                    </SignupModal>

                    <Wrapper className='flex  justify-between'>
                        {/* Mobile menu start */}
                        <div className='md:hidden visible w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-cente items-center hover:bg-black/[0.05] cursor-pointer relative'>
                            {mobileMenu ? (
                                <VscChromeClose
                                    className='text-[16px] text-[#114067] -mt-10 md:-mt-0'
                                    onClick={() => setMobileMenu(false)}
                                />
                            ) : (
                                <AiOutlineMenu
                                    className='text-[20px] text-[#114067]'
                                    onClick={() => setMobileMenu(true)}
                                />
                            )}
                        </div>


                        <div className="text-[#114067] text-[12px] leading-[33px] md:text-[42px] md:leading-[51px] font-semibold mt-1 md:mt-0 ">
                            <Link href='/'>
                                BrandsnBees
                            </Link>
                        </div>


                        <div className='flex gap-6'>

                            <BradnessDesktopMenu
                                showCatMenu={showCatMenu}
                                setshowCatMenu={setshowCatMenu}
                            />
                            {mobileMenu && (
                                <BradnessMobileMenu
                                    showCatMenu={showCatMenu}
                                    setshowCatMenu={setshowCatMenu}
                                    setMobileMenu={setMobileMenu}
                                />
                            )}
                            {/* Icon start */}
                            <div className="flex items-cente gap-10 text-black">
                                <div className='text-[#000000] opacity-80 text-[14px] leading-[17px] md:text-[18px] md:leading-[22px]   font-medium font-sans md:pt-3 pt-3 cursor-pointer' onClick={() => router.push('grow/personaldetails')}>
                                    Login
                                </div>

                                <div className='text-[#000000] opacity-80 mt-2 md:mt-0 text-[14px] md:text-[18px] md:leading-[22px]  leading-[17px] font-medium font-sans border-[1px] border-[#000000] border-opacity-80 md:w-[177px] md:h-[50px] w-[91px] h-[31px] flex items-center justify-center cursor-pointer' onClick={() => setShowModal(true)}>
                                    Signup
                                </div>
                                {/* BsCart icon end */}

                            </div>
                            {/* Icon End */}
                        </div>
                    </Wrapper>
                    {/* Powerfull start */}
                    <Wrapper>
                        <div className='fle'>
                            <div className="mx-aut flex py-10 md:flex-row flex-col">
                                <div className="md:w-[711px] lg:pr-24 md:pr-16 flex flex-col md:items-s">
                                    <h1 className="md:w-[757px] text-[35px] leading-[47px] md:text-[64px] md:leading-[79px] font-semibold font-sans text-[#000000]  ">
                                        Helping brands grow with niche influencers.
                                    </h1>
                                    <div>
                                        <div className="flex gap-2 mt-4">
                                            <TbMathGreater
                                                className='text-[#0F3D68] md:mt-3 mt-1'
                                            />
                                            <p className='text-[#0F3D68] text-[14px] leading-[21px] md:text-[24px] md:leading-[36px] font-normal font-sans '>Choose your brand ambassadors</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <TbMathGreater
                                                className='text-[#0F3D68] md:mt-3 mt-1'

                                            />
                                            <p className='text-[#0F3D68] text-[14px] leading-[21px] md:text-[24px] md:leading-[36px] font-normal font-sans '>Influencers with 1k to 100 Mn followers</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <TbMathGreater
                                                className='text-[#0F3D68] md:mt-3 mt-1'

                                            />
                                            <p className='text-[#0F3D68] text-[14px] leading-[21px] md:text-[24px] md:leading-[36px] font-normal font-sans '>Laser targeted audience</p>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <button className="w-[170px] h-[38px] md:w-[177px] md:h-[50px] border-[1px] border-[#5A914D] rounded-[5px] text-[#5A914D] text-[16px] leading-[20px] md:text-[20px] md:leading-[24px] font-medium font-sans ">
                                            Start a campaign
                                        </button>
                                    </div>
                                </div>
                                <div className='md:w-[500px] mt-5'>
                                    <img src="../image/brandHeader.svg" alt="brandHeader" />
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                    {/* Powerfull End */}

                </div>

            </header>
        </>
    )
}

export default BrandsHeader;