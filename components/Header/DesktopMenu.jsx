import React from 'react'
import { BsChevronDown } from "react-icons/bs";
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.css'
const DesktopMenu = ({ showCatMenu, setshowCatMenu }) => {
    const router = useRouter()
    return (
        <>
            <ul className={`hidden md:pt-3 md:flex items-cente md:text-[18px] md:leading-[22px]  gap-8 font-medium cursor-pointer ${styles.menu}`}>
                <li >Home</li>
                <li>About Us</li>
                <li>Solutions</li>
            </ul> 
        </>
    )
}

export default DesktopMenu