import React, { useState } from 'react'
import Wrapper from '../Wrapper'
import { TbBulb } from 'react-icons/tb'
import About from '../Home/About'
import Footer from '../Home/Footer'
import { useRouter } from 'next/router'
import AffliateHeader from './AffiliateHeader'
import HeroHeader from '../EcommerceComponents/HeroHeader'
import styles from './AffiliateHero.module.css'

const selectData = [
    { id: 1, name: 'Promotional Video ads' },
    { id: 2, name: 'Instagram Posts' },
    { id: 3, name: 'YouTube Posts' },
    { id: 4, name: 'Product unboxing' },
    { id: 5, name: 'Try the product and review' },
    { id: 6, name: 'Short form videos' },
    { id: 7, name: 'Memes' },
    { id: 8, name: 'Pre-release campaigns' },
    { id: 9, name: 'Tips and tricks' },

]
console.log('selectData', selectData);

const AffiliateHero = () => {
    const [cardExpand, setCardExpand] = useState("")
    const [ncardname, setnextcardname] = useState('')
    const handChange = (e, cardName, ncardname) => {
        if (e.target.checked === true) {
            setCardExpand(cardName)
            setnextcardname(ncardname)
        } else {
            setCardExpand("")
        }
        console.log('cardName', cardName);
    }
    const router = useRouter()

    return (
        <>
            <div>
                <HeroHeader />
                <Wrapper>
                    <div className='py-10'>
                        <div className="text-center">
                            <h1 className='mb-4 text-[#000000] md:text-[36px] md:leading-[50px] font-medium font-sans '>Select your Interest and begin.</h1>
                            <p className='text-[#000000] opacity-70 md:text-[16px] md:leading-[24px] font-normal font-sans  '>Help us curate the best media plan. The no of posts will be suggested based on the objective</p>
                        </div>


                        {/* card start */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                            <div
                                className={`hover:border-l-[5px] hover:border-b-[5px] md:w-[394px] md:h-[293px] rounded-[10px] p-4 border-[#114067] border-[1px] bg-[#EDFFE9] ${cardExpand === 'brandAwareness' && 'md:col-span-3 !w-full !h-full row-start-1 row-end-2 hover:border-l-[5px] hover:border-b-[5px]'}`} >
                                {/* // className="hover:col-span-3 hover:w-full hover:row-start-1 hover:row-end-2 border-l-[5px] border-b-[5px] md:w-[394px] md:h-[293px] rounded-[10px] p-4 border-[#114067] border-[1px] bg-[#EDFFE9] " > */}
                                <div className='flex justify-between mb-2'>
                                    <TbBulb className='bg-white border-[1px] border-[#114067] rounded-full w-[75px] h-[75px] py-2 px-2 ' />
                                    <div className='mt-2'>
                                        <input id="helper-checkbox" checked={cardExpand === 'brandAwareness'} aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-[31px] h-[31px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => handChange(e, 'brandAwareness', "Brand Awarness")} />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <h1 className='mb-2 text-[#000000] text-[18px] leading-[27px] font-medium font-sans '>Brand Awareness</h1>
                                    <p className='mb-3 text-[#000000] text-[15px] leading-[22px] font-medium font-sans '>Select this option if your campaign objective
                                        is to increase brand recognition</p>
                                    <h5 className='mb-6 text-[#000000] text-[18px] leading-[27px] font-medium font-sans '>Suggested deliverables</h5>

                                    <div className="grid grid-cols-2 md:grid-cols-6 gap-2  md:gap-6">
                                       
                                            <div>
                                                <p className='bg-[#FFFFFF] text-[12px] md:text-[14px] text-[#114067] leading-[21px] flex justify-center items-center  md:w-[152px] w-[142px] h-[26px]'>1x Instagram posts</p>
                                            </div>
                                            <div className=''>
                                                <p className='bg-[#FFFFFF] text-[12px] md:text-[14px] text-[#114067] leading-[21px] flex justify-center items-center  md:w-[152px] w-[142px] h-[26px]'>1x Instagram Stories</p>

                                            </div>
                                       
                                        {
                                            cardExpand === 'brandAwareness' ? <>
                                                {selectData.map((item) => {

                                                    return (
                                                        <p key={item} className='bg-[#FFFFFF]  text-[12px] md:text-[14px] text-[#114067] leading-[21px] flex justify-center items-center md:w-[172px] w-[142px] h-[26px] cursor-pointer '>{item.name}</p>

                                                    )
                                                })}
                                            </>
                                                : null

                                        }
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`hover:border-l-[5px] hover:border-b-[5px] md:w-[394px] md:h-[293px] rounded-[10px] p-4 border-[#114067] border-[1px] bg-[#EDFFE9] ${cardExpand === 'AffiliateMarketing' && 'md:col-span-3 !h-full !w-full row-start-1 row-end-2 hover:border-l-[5px] hover:border-b-[5px]'}`} >
                                <div className='flex justify-between mb-2'>
                                    <TbBulb className='bg-white border-[1px] border-[#114067] rounded-full w-[75px] h-[75px] py-2 px-2 ' />
                                    <div className='mt-2'>
                                        <input id="helper-checkbox" checked={cardExpand === 'AffiliateMarketing'} aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-[31px] h-[31px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => handChange(e, 'AffiliateMarketing', "Affilite Marketing")} />

                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <h1 className='mb-2 text-[#000000] text-[18px] leading-[27px] font-medium font-sans '>Affiliate Marketing</h1>
                                    <p className='mb-3 text-[#000000] text-[15px] leading-[22px] font-medium font-sans '>Select this option if your campaign objective
                                        is to increase brand recognition</p>
                                    <h5 className='mb-6 text-[#000000] text-[18px] leading-[27px] font-medium font-sans '>Suggested deliverables</h5>

                                    <div className="grid grid-cols-2 md:grid-cols-6 gap-2  md:gap-6">
                                        <p className='bg-[#FFFFFF] text-[12px] md:text-[14px] text-[#114067] leading-[21px] flex justify-center items-center w-[142px] md:w-[152px] h-[26px]'>1x Instagram posts</p>
                                        <p className='bg-[#FFFFFF] text-[12px] md:text-[14px] text-[#114067] leading-[21px] flex justify-center items-center w-[142px] md:w-[152px] h-[26px]'>1x Instagram Stories</p>
                                        {
                                            cardExpand === 'AffiliateMarketing' ? <>
                                                {selectData.map((item) => {

                                                    return (
                                                        <p key={item} className='bg-[#FFFFFF] text-[12px] md:text-[14px] text-[#114067] leading-[21px] flex justify-center items-center md:w-[172px] w-[142px] h-[26px] cursor-pointer '>{item.name}</p>
                                                    )
                                                })}
                                            </>
                                                : null
                                        }
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`hover:border-l-[5px] hover:border-b-[5px] md:w-[394px] md:h-[293px] rounded-[10px] p-4 border-[#114067] border-[1px] bg-[#EDFFE9] ${cardExpand === 'Content' && 'md:col-span-3 !h-full !w-full row-start-1 row-end-2 hover:border-l-[5px] hover:border-b-[5px]'}`} >
                                <div className='flex justify-between mb-2'>
                                    <TbBulb className='bg-white border-[1px] border-[#114067] rounded-full w-[75px] h-[75px] py-2 px-2 ' />
                                    <div className='mt-2'>
                                        <input id="helper-checkbox" checked={cardExpand === 'Content'} aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-[31px] h-[31px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => handChange(e, 'Content', "Content Creation to Reuse")} />

                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <h1 className='mb-2 text-[#000000] text-[18px] leading-[27px] font-medium font-sans '>Content Creation to Reuse</h1>
                                    <p className='mb-3 text-[#000000] text-[15px] leading-[22px] font-medium font-sans '>Select this option if your campaign objective
                                        is to increase brand recognition</p>
                                    <h5 className='mb-6 text-[#000000] text-[18px] leading-[27px] font-medium font-sans '>Suggested deliverables</h5>
                                    <div className="grid grid-cols-2 md:grid-cols-6 gap-2  md:gap-6">
                                        <p className='bg-[#FFFFFF] text-[12px] md:text-[14px] text-[#114067] leading-[21px] flex justify-center items-center  md:w-[152px] w-[142px] h-[26px]'>1x Instagram posts</p>
                                        <p className='bg-[#FFFFFF] text-[12px] md:text-[14px] text-[#114067] leading-[21px] flex justify-center items-center  md:w-[152px] w-[142px] h-[26px]'>1x Instagram Stories</p>
                                        {
                                            cardExpand === 'Content' ? <>
                                                {selectData.map((item) => {

                                                    return (
                                                        <p key={item} className='bg-[#FFFFFF] text-[14px] text-[#114067] leading-[21px] flex justify-center items-center md:w-[172px] w-[142px] h-[26px] cursor-pointer '>{item.name}</p>
                                                    )
                                                })}
                                            </>
                                                : null
                                        }
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`hover:border-l-[5px] hover:border-b-[5px] md:w-[394px] md:h-[293px] rounded-[10px] p-4 border-[#114067] border-[1px] bg-[#EDFFE9] ${cardExpand === 'WebsiteTraffic' && 'md:col-span-3 !h-full !w-full row-start-1 row-end-2'}`} >
                                <div className='flex justify-between mb-2'>
                                    <TbBulb className='bg-white border-[1px] border-[#114067] rounded-full w-[75px] h-[75px] py-2 px-2 ' />
                                    <div className='mt-2'>
                                        <input id="helper-checkbox" checked={cardExpand === 'WebsiteTraffic'} aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-[31px] h-[31px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => handChange(e, 'WebsiteTraffic', 'Website Traffic')} />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <h1 className='mb-2 text-[#000000] text-[18px] leading-[27px] font-medium font-sans '>Website Traffic</h1>
                                    <p className='mb-3 text-[#000000] text-[15px] leading-[22px] font-medium font-sans '>Select this option if your campaign objective
                                        is to increase brand recognition</p>
                                    <h5 className='mb-6 text-[#000000] text-[18px] leading-[27px] font-medium font-sans '>Suggested deliverables</h5>
                                    <div className="grid grid-cols-2 md:grid-cols-6 gap-2  md:gap-6">
                                        <p className='bg-[#FFFFFF] text-[12px] md:text-[14px] text-[#114067] leading-[21px] flex justify-center items-center  w-[142px] md:w-[152px] h-[26px]'>1x Instagram posts</p>
                                        <p className='bg-[#FFFFFF] text-[12px] md:text-[14px] text-[#114067] leading-[21px] flex justify-center items-center  w-[142px] md:w-[152px] h-[26px]'>1x Instagram Stories</p>
                                        {
                                            cardExpand === 'WebsiteTraffic' ? <>
                                                {selectData.map((item) => {

                                                    return (
                                                        <p key={item} className='bg-[#FFFFFF] text-[12px] md:text-[14px] text-[#114067] leading-[21px] flex justify-center items-center md:w-[172px] w-[142px] h-[26px] cursor-pointer '>{item.name}</p>
                                                    )
                                                })}
                                            </>
                                                : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card End */}

                        <div className='flex justify-center py-14 '
                            //  onClick={() => router.push('affiliateinterest')} 
                            onClick={() => router.push({ pathname: 'edetail', query: { name: ncardname, second: 'brand Awer', eData: 'ground' } })}

                        >
                            <button className='text-center  w-[221px] h-[50px] border-[1px border-[#114067 rounded-[5px] bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] text-[#FFFFFF] text-[20px] leading-[24px] font-medium font-sans '>
                                Next
                            </button>
                        </div>
                    </div>
                </Wrapper>
                {/* Last Section start */}
                <div>
                    <About />
                    <Footer />
                </div>
                {/* Last Section end */}
            </div>
        </>
    )
}

export default AffiliateHero;