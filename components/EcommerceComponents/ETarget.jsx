import React, { useState } from 'react'
import HeroHeader from './HeroHeader'
import HeroNav from './HeroNav'
import Wrapper from '../Wrapper'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import About from '../Home/About';
import Footer from '../Home/Footer';
import AwarenessHeader from './AwarenessHeader';
import { TfiLocationPin } from "react-icons/tfi";
import DropdownItem from './Dropdown';
import EtargetRangeSlider from './ETargetRangeSlider';
import styles from './SelectCategories.module.css'
// import EtargetRangeSlider from './MultipleRangeSlider';

const Language = [
    { id: 1, name: 'English' },
    { id: 2, name: 'Hindi' },
    { id: 3, name: 'Kannada' },
    { id: 4, name: 'Bengali' },
    { id: 5, name: 'Marati' },
    { id: 6, name: 'Telegu' },
    { id: 7, name: 'Malayalam' },
    { id: 8, name: 'Tamil' },
    { id: 9, name: 'Gujrati' },
    { id: 10, name: 'Urdu' },
    { id: 11, name: 'Odia' },
    { id: 12, name: 'Punjabi' },

]
const ETarget = () => {
    const router = useRouter()
    const [id, setId] = useState([])
    const [gender,setGender]=useState()

    const handleClick = (newId) => {
        console.log('newId', newId);
        if (id.includes(newId)) {
            setId(id.filter(d => d != newId))
        } else {
            setId([...id, newId])
        }

    }


    const handleSelectAll=(e)=>{
        if(e.target.checked){
           let a=[]
           Language.forEach(d=>{
            a.push(d.id)
           })
           setId(a)
        }else{
            setId([])
        }
        
        // setId(Language)

    }


    const headerData = router.query.name
    return (
        <>
            <div>
                <AwarenessHeader headerData={headerData} />
                <HeroNav />

                <Wrapper>
                    <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-10 md:py-24 flex justify-center mx-auto">
                            <div className="-my-8 divide-y-2 divide-gray-100">
                                <div className="py-3 md:py-0 flex flex-wrap md:flex-nowrap">

                                    <div className="md:flex-grow">
                                        <h2 className="pb-3 md:w-[684px] text-[#000000] text-[20px] md:text-[36px] leading-[27px] md:leading-[54px] font-medium font-sans">Choose your target audience</h2>
                                        <div>
                                            <p className='mb-5 md:w-[728px]  text-[#000000] text-[14px] md:text-[16px] md:leading-[24px] font-normal font-sans opacity-70'>Target audience basis their age, location & language, this will help you launch a campaign easily</p>
                                        </div>

                                        <div className=''>
                                            <h6 className='mb-3 text-[25px] leading-[37px] font-medium font-sans text-[#000000] md:w-[308px] marker:'>Age range: 1 Yr to 100 Yrs</h6>
                                            {/* <div className="md:w-[648px] h-[6px] bg-[#E7E7E7] rounded-full  mb-4 dark:bg-gray-700">
                                                <div className="bg-[#114067] h-1.5 rounded-full flex justify-between" style={{ width: '25%' }} >
                                                </div>
                                                <div className="mt-2 mb-10 flex md:justify-between gap-16">
                                                    <p className='text-[#000000] text-[18px] leading-[27px] font-normal font-sans '>Min: 1 yr</p>
                                                    <p className='text-[#000000] text-[18px] leading-[27px] font-normal font-sans '>Max: 100 Yrs</p>
                                                </div>

                                            </div> */}

                                            {/* Range Slider start */}

                                            {/* <input
                                                className="md:w-[648px] w-full h-[6px] rounded  bg-gradient-to-t  [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[24px] [&::-webkit-slider-thumb]:w-[24px] [&::-webkit-slider-thumb]:rounded-full appearance-none [&::-webkit-slider-thumb]:bg-gradient-to-t from-[#5A914D] to-[#0F3D68]"
                                                type="range"
                                                id="vol"
                                                name="vol"
                                                min="0"
                                                max="100"
                                                onInput={(e) => {
                                                    const value = e.target.value;
                                                    e.target.style.background = `linear-gradient(to right, #34675a 0%, #34675a ${value}%, #bbcabc ${value}%, #bbcabc 100%)`;
                                                }}
                                            />
                                            <div className='flex justify-between mt-2 md:w-[648px]'>
                                                <p className='text-[#000000] text-[18px] leading-[27px] font-normal font-sans '>Min: 1 yr</p>
                                                <p className='text-[#000000] text-[18px] leading-[27px] font-normal font-sans '>Max: 100 yrs</p>
                                            </div> */}


                                            <div className='mb-10'>
                                                <EtargetRangeSlider
                                                    min={1}
                                                    max={100}
                                                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                                                />
                                            </div>
                                            {/* Range Slider End */}


                                            {/* gender */}
                                            <div className='pt-10'>
                                                <h3 className="mb-2 text-[#000000] text-[25px] leading-[37px] font-bold ">Gender</h3>
                                                <ul className=" flex gap-3">
                                                    <li className="md:w-[96px] borde">
                                                        <div className="flex items-center gap-2 ">
                                                            <input id="default-checkbox" type="checkbox" value="" checked={gender==="male" ?true :false} className="w-[21px] h-[21px] rounded" onClick={()=>setGender("male")} />
                                                            <label for="vue-checkbox-list" className="text-[#000000] text-[20px] leading-[30px] font-normal">Male</label>
                                                        </div>
                                                    </li>
                                                    <li className="md:w-[121px] ">
                                                        <div className="flex items-center gap-2 ">
                                                            <input id="default-checkbox" type="checkbox" value="" checked={gender==="female" ?true :false} className="w-[21px] h-[21px] rounded"  onClick={()=>setGender("female")} />
                                                            <label for="vue-checkbox-list" className="text-[#000000] text-[20px] leading-[30px] font-normal">Female</label>
                                                        </div>
                                                    </li>
                                                    <li className="md:w-[114px] borde">
                                                        <div className="flex items-center gap-2 ">
                                                            <input id="default-checkbox" type="checkbox" value="" checked={gender==="other" ?true :false} className="w-[21px] h-[21px] rounded"  onClick={()=>setGender("other")} />
                                                            <label for="vue-checkbox-list" className="text-[#000000] text-[20px] leading-[30px] font-normal">Others</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* gender */}


                                            {/* language */}
                                            <div className="pt-5">
                                                <h6 className='text-[#000000] opacity-80 text-[25px] leading-[37px] font-medium font-sans '>Languages</h6>
                                                <p className='md:mb-8 mb-5 md:w-[601px] w-[300px] text-[#000000] opacity-70 text-[14px] md:text-[16px] leading-[24px] font-normal font-sans '>This will help us generate a rough estimation of the target audience</p>
                                            </div>
                                            {/* language */}


                                        </div>
                                        {/* Button start */}
                                        <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                                            {Language.map((data) => {
                                                return (
                                                    <div className={`cursor-pointer flex justify-cente md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:[236px] md:h-[56px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full hover:bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] group-hover:text-white ${id.includes(data.id) ? styles.categories : ""}`}
                                                        onClick={() => handleClick(data.id)}
                                                    >

                                                        <p className={`md:text-[18px] text-[#000000] opacity-80 leading-[27px] hover:text-white ${id.includes(data.id) ? styles.textSeclect : ""}`}>
                                                            {data.name}
                                                        </p>
                                                    </div>
                                                )
                                            })}

                                        </div>
                                        <div className="  mt-5">
                                            <div className="flex items-center gap-2 " >
                                                <input id="default-checkbox" type="checkbox" value="" checked={(id.length == Language.length)} className="w-[21px] h-[21px] rounded" onClick={handleSelectAll}/>
                                                <label for="vue-checkbox-list" className="text-[#000000] opacity-90 text-[20px] leading-[30px] font-normal">Select all</label>
                                            </div>
                                        </div>

                                        {/* <div className="mt-5">
                                            <div className={`flex items-center gap-2  ${id.includes(Language.id) ? styles.categories : ""}`} onClick={handleClick}>
                                                <input id="default-checkbox"
                                                    type="checkbox"
                                                    checked={id.includes(Language)}
                                                    onChange={() => handleClick(Language)}
                                                    className={`w-[21px] h-[21px] rounded ${id.includes(Language.id) ? styles.categories : ""}`}/>
                                                <label for="vue-checkbox-list" className="text-[#000000] opacity-90 text-[20px] leading-[30px] font-normal">Select all</label>
                                            </div>
                                        </div> */}
                                        {/*new Dropdown Start */}
                                        <div>
                                            <DropdownItem />
                                        </div>
                                        {/*new Dropdown Start */}

                                        {/* 
                                        <div className="mt-10 mb-10">
                                            <select className="absolute w-[360px] h-[46px] pl-6   block  py-2 px-3 border-b-[1px]  border-[#000000] border-opacity-60 bg-white   focus:outline-none focus:ring-[#000000] focus:border-[#000000] text-[20px] text-[#000000] opacity-60 font-normal font-sans ">
                                                <option>India</option>
                                                <option>US</option>
                                                <option>Australia</option>
                                                <option>Japan</option>
                                                <option>Srilanka</option>
                                            </select>
                                            <TfiLocationPin className="relative ml- top-2.5 w-[16px] h-[23px] text-[#666666]" size={20} />
                                        </div> */}

                                        {/* butto Start */}
                                        <div className="flex gap-4 py-10 mb-16 md:gap-10 pb-10 md:pb-0 justify-center"
                                            onClick={() => router.push({ pathname: 'ecampain', query: { name: headerData, eData: 'fourth' } })}

                                        >
                                            <div className='w-[55px] h-[50px] border-[1px] border-[#114067] rounded-[5px] flex justify-center items-center '>
                                                <AiOutlineArrowLeft />
                                            </div>
                                            <button type="submit" className="text-[#FFFFFF] text-[20px] leading-[24px] font-medium rounded-[5px] bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] w-[221px] h-[50px] ">Next</button>
                                        </div>
                                        {/* butto End */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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

export default ETarget