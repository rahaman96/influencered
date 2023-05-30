import React, { useState, useEffect } from 'react'
import Wrapper from '../Wrapper'
import Image from 'next/image'
import DesktopMenu from './DesktopMenu'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineMenu } from 'react-icons/ai'
import { VscChromeClose } from "react-icons/vsc";
import { TbMathGreater } from 'react-icons/tb'
import MobileMenu from './MobileMenu'
import styles from '../../styles/headerPage.module.css'
export const HeaderPage = ({ childreen }) => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const [showCatMenu, setshowCatMenu] = useState(false)
    const [show, setShow] = useState("translate-y-0")
    const [lastScrollY, setLastScrollY] = useState(0)
    const router = useRouter()

    // Header hide and show logic start

    // const controlNavBar = () => {
    //     if (window.scrollY > 200) {
    //         if (window.scrollY > lastScrollY && !mobileMenu) {
    //             setShow('-translate-y-[80px]')
    //         } else {
    //             setShow('shadow-lg')
    //         }
    //     } else {
    //         setShow('translate-y-0')
    //     }
    //     setLastScrollY(window.scrollY)
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', controlNavBar);
    //     return () => {
    //         window.removeEventListener('scroll', controlNavBar)
    //     }
    // }, [lastScrollY])


    // Header hide and show logic End

    return (
        <header className={`w-full  z-20  top-0 transition-transform duration-300 ${show}`}>
            <div className="py-10 bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] md:h-[600px]  h-[653px] min-h-ful">
                
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

                            <div className='text-white mt-2 md:mt-0 text-[14px] md:text-[18px] md:leading-[22px]  leading-[17px] font-medium font-sans border-[1px] border-[#FFFFFF] md:w-[177px] md:h-[50px] w-[91px] h-[31px] flex items-center justify-center cursor-pointer ' >
                                Signup
                            </div>
                            {/* BsCart icon end */}

                        </div>
                        {/* Icon End */}
                    </div>
                </Wrapper>
                {/* Powerfull start */}
                <Wrapper>
                    <div>
                        <div className="mx-aut flex py-10 md:flex-row flex-col">
                            <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-s">
                                {/* <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-s"> */}
                                <h1 className="md:w-[668px] text-[35px] leading-[47px] md:text-[64px] md:leading-[79px] font-bold font-sans text-[#FFFFFF]  ">Powerful plug-in for
                                    e-commerce
                                </h1>
                                <div>
                                    <div className="flex gap-2 mt-4">
                                        <TbMathGreater
                                            className='text-[#FFFFFF] md:mt-3 mt-1'
                                        />
                                        <p className='text-[#FFFFFF] text-[14px] leading-[21px] md:text-[24px] md:leading-[36px] font-normal font-sans '>Choose your Ambasadors</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <TbMathGreater
                                            className='text-[#FFFFFF] md:mt-3 mt-1'

                                        />
                                        <p className='text-[#FFFFFF] text-[14px] leading-[21px] md:text-[24px] md:leading-[36px] font-normal font-sans '>Spend nominal</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <TbMathGreater
                                            className='text-[#FFFFFF] md:mt-3 mt-1'

                                        />
                                        <p className='text-[#FFFFFF] text-[14px] leading-[21px] md:text-[24px] md:leading-[36px] font-normal font-sans '>Reach your target audience</p>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <button className="w-[170px] h-[38px] md:w-[221px] md:h-[50px] border-[1px] border-[#FFFFFF] text-[#FFFFFF] text-[16px] leading-[20px] md:text-[20px] md:leading-[24px] font-medium font-sans ">
                                        Know More
                                    </button>
                                </div>
                            </div>
                            {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative mt-10">
                                <img src="image/ziczac.svg" alt="" />

                                <img
                                 className="absolute md:-top-4 md:left-9 -top-2 left-3 object-cover object-center rounded"
                                  alt="hero" src="image/headerimg.svg" />
                            </div> */}
                           <div className={styles.mainImg}>
                           <div className='relative md:mt-[110px] mt-7 md:right-[150px]'>
                                <Image src="image/ziczac.svg"
                                    alt=""
                                    width={500}
                                    height={100}
                                    className='md:w-[500px]'
                                />

                                <Image
                                    className="md:w-[684px] absolute md:-top-[20px] md:left-10 -top-2 left-3   object-cover object-center rounded"
                                    alt="hero" src="image/headerimg.svg" width={684}
                                    height={100} />
                            </div>
                           </div>
                        </div>
                    </div>
                </Wrapper>
                {/* Powerfull End */}

            </div>

        </header>
    )
}
