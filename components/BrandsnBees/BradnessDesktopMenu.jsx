
import React from 'react'
import { BsChevronDown } from "react-icons/bs";  
import { useRouter } from 'next/router';
const BradnessDesktopMenu = ({ showCatMenu, setshowCatMenu }) => {
    const router = useRouter()
    return (
        <>
            <ul className='hidden md:pt-3 text-[#000000] opacity-80 md:flex items-cente md:text-[18px] md:leading-[22px]  gap-8 font-medium cursor-pointer'>
                <li >Home</li>
                <li>For brands</li>
                <li>For Influencers</li>
            </ul>
        </>
    )
}

export default BradnessDesktopMenu;