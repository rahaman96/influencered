import React, { useState } from 'react'
import styles from '../../../styles/BrandPage.module.css'
const Location = () => {
    const [imageClicked, setImageClicked] = useState({
        first: false,
        second: false,
        ground: true
    });
    const onClickHandler = (order) => {
        setImageClicked((prevState) => ({
            ...prevState,
            [order]: !prevState[order]
        }));
    };
    return (
        <div className="px-10">
            <div className='flex flex-wrap justify-between'>
                <div onClick={() => onClickHandler("ground")} className="ground">
                    Ground Floor
                </div>
                <div>
                    {imageClicked.ground && <img src="../image/brandsness/card1.svg" alt="ground" />}
                </div>
            </div>
            <div className='flex flex-wrap justify-between'>
                <div onClick={() => onClickHandler("first")} className="ground">
                    First Floor
                </div>
                <div>
                    {imageClicked.first && <img src="../image/brandsness/dashboard.svg" alt="first" />}
                </div>
            </div>
            <div className='flex flex-wrap justify-between'>
                <div onClick={() => onClickHandler("second")} className="ground">
                    Second Floor
                </div>
                <div>
                    {imageClicked.second && <img src="../image/brandsness/card1.svg" alt="second" />}

                </div>
            </div>
            {/* <div className="image">
            </div> */}
        </div>
    );
};

export default Location;