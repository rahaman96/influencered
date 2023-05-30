import React from 'react'
import { BsChevronDown } from "react-icons/bs";
import Link from 'next/link';
const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About us", url: "/about" },
    { id: 3, name: "Solutions", subMenu: true },
];

const MobileMenu = ({ showCatMenu, setshowCatMenu, setMobileMenu }) => {
    return (
        <>
            <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100-50px)] bg-white border-t text-black w-[450px'>
                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            {!!item?.subMenu ? (
                                <li className='cursor-pointer py-4 px-5 border-b flex flex-col relative '
                                  onClick={()=>setshowCatMenu(!showCatMenu)}
                                >
                                    <div className='flex justify-between items-center '>
                                        {item?.name}
                                    </div>                               
                                </li>
                            ) : (
                                <li className='py-4 px-5 border-b' >
                                    <Link href={item?.url} onClick={() => setMobileMenu(false)} >
                                        {item.name}
                                    </Link>
                                </li>
                            )}
                        </div>
                    )
                })}

            </ul>
        </>
    )
}

export default MobileMenu;