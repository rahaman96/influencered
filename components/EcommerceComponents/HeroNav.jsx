import React, { useState } from 'react'
import Wrapper from '../Wrapper'
import styles from '../EcommerceComponents/HeroNav.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const HeroNav = () => {
    const router = useRouter()

    const [active, setActive] = useState()

    const handleClick = (data) => {
        console.log('data', data);
        setActive(data);
    };
    const [imageClicked, setImageClicked] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
        ground: true
    });

    const onClickHandler = (order) => {
        setImageClicked((prevState) => ({
            // ...prevState,
            [order]: !prevState[order],
            [!order]: prevState[order],
            [!order]: prevState[order]
        }));
    };

    useEffect(() => {
        setActive(router.query.eData)
    }, [router.query.eData])
    return (
        <>
            <div className='bg-[#F9F9F9] '>
                {/* <Wrapper> */}
                <div className="h-[100px] md:h-[170px] gap-2 px-1 md:px- mx-auto flex flex-wra md:justify-between items-center md:w-[1020px] w-[320px w-fll">
                    <p
                        className={`text-[9px] md:text-[18px] md:leading-[27px] font-semibold font-sans cursor-pointer ${active === 'ground' ? styles.navText : ""}`}
                        onClick={() => { handleClick('ground'); onClickHandler("ground") }}
                    >Personal Details
                    </p>
                    <p
                        className={`text-[9px] md:text-[18px] md:leading-[27px] font-semibold font-sans cursor-pointer ${active === 'first' ? styles.navText : ""}`}
                        onClick={() => { handleClick('first'); onClickHandler("first") }}
                    >Requirements</p>
                    <p
                        className={`text-[9px] md:text-[18px] md:leading-[27px] font-semibold font-sans cursor-pointer ${active === 'second' ? styles.navText : ""}`}
                        onClick={() => { handleClick('second'); onClickHandler("second") }}
                    >Select categories</p>
                    <p
                        className={`text-[9px] md:text-[18px] md:leading-[27px] font-semibold font-sans cursor-pointer ${active === 'third' ? styles.navText : ""}`}
                        onClick={() => { handleClick('third'); onClickHandler("third") }}
                    >Target audience</p>
                    <p
                        className={`text-[9px] md:text-[18px] md:leading-[27px] font-semibold font-sans cursor-pointer ${active === 'fourth' ? styles.navText : ""}`}
                        onClick={() => { handleClick('fourth'); onClickHandler("fourth") }}
                    >Customize</p>

                </div>
                {/* </Wrapper> */}
            </div>
        </>
    )
}

export default HeroNav