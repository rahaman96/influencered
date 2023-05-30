import React, { useEffect, useState } from 'react'
import 'flowbite';
import { TfiLocationPin } from "react-icons/tfi";
import Dropdown from 'react-dropdown';
const DropdownItem = () => {
    const [countries, setCountries] = useState(null)
    const [selected, setSelected] = useState('')
    const [open, setOpen] = useState(false)
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,flags")
            .then((res) => res.json())
            .then((data) => {
                console.log('data', data)
                setCountries(data)
            })
    }, [])
    return (
        <>
            <div className='md:w-[503px] w-full h-60 mt-10 z-10'>
                <div className='bg-white w-full gap-1  flex items-center justify-cente border-b-[1px] border-[#000000] border-opacity-60'
                    onClick={() => setOpen(!open)}
                >
                    <TfiLocationPin className='w-[20px] h-[23px] mt-[12px text-[#666666]" size={20}' size={20} />
                    <div className="flex justify-between items-center md:w-[503px] w-full">
                        <div className='text-[#000000] opacity-60 text-[20px] leading-[27px] font-sans font-normal '>
                            {selected ? selected : 'Location'}
                        </div>
                        <svg className="w-14 h-7 ml-2 text-[#000000] opacity-60 " aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
                <ul className={`bg-[#FFFFFF] mt-4 rounded-[5px] shadow-lg z-10 overflow-y-auto md:w-[500px]  h-[175px] ${open ? 'max-h-60' : 'max-h-0'} `}>
                    {
                        countries?.map((country) => (
                            <li key={country?.name?.common} className='p-2 px-5 text-[14px] text-[#0A0A0A] leading-[18px]  hover:bg-[#CEC7B9] hover:opacity-20 hover:text-[#0A0A0A] hover:z-10 cursor-pointer'
                                onClick={() => {
                                    setSelected(country?.name?.common)
                                    setOpen(false)
                                }}
                            >
                                {country?.name?.common}
                            </li>
                        ))
                    }


                </ul>

            </div>
        </>
    )
}

export default DropdownItem