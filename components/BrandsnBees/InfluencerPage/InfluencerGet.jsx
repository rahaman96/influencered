import React,{useState} from 'react'
import styles from '../../../styles/BrandPage.module.css'
const InfluencerGet = () => {
    const [active, setActive] = useState('ground');

    const handleClick = (data) => {
        console.log('data', data);
        setActive(data);
    };

    const [imageClicked, setImageClicked] = useState({
        first: false,
        second: false,
        third:false,
        fourth:false,
        fifth:false,
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
    return (
        <div className='md:px-10 px-6'>
            {/* <Wrapper> */}
            <div className='md:w-[1240px] w-[422px]   w-[364px md:h-[708px]  h-[928px rounded-[10px] z-10 '>
                <h6 className='flex gap-2 md:gap-4 text-[#000000] text-[30px] leading-[45px] md:text-[74px] md:leading-[105px] font-medium font-sans ' >
                    <span>What</span>
                    <span className='text-[#5A914D] '>you will get</span>

                </h6>
                <div className="md:px-10 md:mt-10 ">
                    <div className={`flex flex-wrap md:px-10  mx-auto items-center justify-between gap-6 md:gap-0    md:overflow-y-scrol overflow-y-none `}>

                        {/* <div className="flex flex-wrap md:px-10  mx-auto items-center justify-between gap-6 md:gap-0 md:border-l-[1px]"> */}
                        <div className={` overflow-x-hidden scrollbar-thin scrollbar-thumb-[#5A914D]  scrollbar-track-[#000000]  md:overflow-y-scroll overflow-y-hidden  ${styles.scrollbar_features}`}>


                            <div className={`md:w-[502px] h-full md:h-[515px] pr- ${styles.features} `}>
                                <div className='md:ml-12'>
                                    <div className='md:w-[420px] md:h-[126px] w-[422px] h-[123px]  cursor-pointer'  onClick={() => { handleClick('ground'); onClickHandler("ground")}}>
                                        <h6 className='md:text-[#000000] text-[#5A914D] text-[31px] leading-[47px] md:text-[32px] md:leading-[48px] h-[47px] font-medium font-sans md:border-b-[0px] border-b-[4px] border-[#5A914D] border-b-w-[65px]  mb-3'>Exclusive app</h6>

                                        <p className='text-[#000000] opacity-70 text-[17px] leading-[28px] w-[410px] md:w-[420px] md:text-[18px] md:leading-[28px]  font-normal '>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        </p>
                                    </div>

                                    <div className='md:w-[420px] md:h-[126px] w-[422px] h-[123px] cursor-pointer '  onClick={() => { handleClick('first'); onClickHandler("first")}}>
                                        <h6 className='md:text-[#000000] text-[#5A914D] text-[31px] leading-[47px] md:text-[32px] md:leading-[48px] h-[47px] font-medium font-sans md:border-b-[0px] border-b-[4px] border-[#5A914D] border-b-w-[65px]  mb-3'>Track your campaigns</h6>

                                        <p className='text-[#000000] opacity-70 text-[17px] leading-[28px] w-[410px] md:w-[420px] md:text-[18px] md:leading-[28px]  font-normal '>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        </p>
                                    </div>


                                    <div className='md:w-[420px] md:h-[126px] w-[422px] h-[123px] cursor-pointer'  onClick={() => { handleClick('second'); onClickHandler("second")}}>
                                        <h6 className='text-[#000000] text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans'>Chat with your collaborators</h6>
                                        <p className='text-[#000000] opacity-70 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] '>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        </p>
                                    </div>


                                    <div className='md:w-[420px] md:h-[126px] w-[422px] h-[123px] cursor-pointer'  onClick={() => { handleClick('third'); onClickHandler("third")}}>
                                        <h6 className='text-[#000000] text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans'>Sales report</h6>
                                        <p className='text-[#000000] opacity-70 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] '>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        </p>
                                    </div>
                                    <div className='md:w-[420px] md:h-[126px] w-[422px] h-[123px] cursor-pointer'  onClick={() => { handleClick('fourth'); onClickHandler("fourth")}}>
                                        <h6 className='text-[#000000] text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans'>Amount spent</h6>
                                        <p className='text-[#000000] opacity-70 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] '>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        </p>
                                    </div>

                                    {/* extra data start */}
                                    <div className='md:w-[420px] md:h-[126px] w-[422px] h-[123px] cursor-pointer'  onClick={() => { handleClick('fifth'); onClickHandler("fifth")}}>
                                        <h6 className='text-[#000000] text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans'>Track your campaigns</h6>
                                        <p className='text-[#000000] opacity-70 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] '>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        </p>
                                    </div>
                                    <div className='md:w-[420px] md:h-[126px] w-[422px] h-[123px] cursor-pointer'>
                                        <h6 className='text-[#000000] text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans'>Track your campaigns</h6>
                                        <p className='text-[#000000] opacity-70 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] '>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        </p>
                                    </div>
                                    <div className='md:w-[420px] md:h-[126px] w-[422px] h-[123px] cursor-pointer'>
                                        <h6 className='text-[#000000] text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans'>Track your campaigns</h6>
                                        <p className='text-[#000000] opacity-70 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] '>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        </p>
                                    </div>
                                    <div className='md:w-[420px] md:h-[126px] w-[422px] h-[123px] cursor-pointer'>
                                        <h6 className='text-[#000000] text-[23px] leading-[35px] md:text-[32px] md:leading-[48px] font-medium font-sans'>Track your campaigns</h6>
                                        <p className='text-[#000000] opacity-70 text-[11px] leading-[18px] md:text-[16px] md:leading-[25px] '>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        </p>
                                    </div>
                                    {/* extra data end */}

                                </div>
                            </div>
                        </div>

                        <div className='md:w-[455px] md:h-[520px] w-[370px] h-[339px] bg-[#EDFFE9]'>
                            {imageClicked.ground && <img src="../image/brandsness/card1.svg" alt="ground" />}
                            {imageClicked.first && <img src="../image/brandsness/dashboard.svg" alt="first" />}
                            {imageClicked.third && <img src="../image/brandsness/card1.svg" alt="third" />}
                            {imageClicked.fourth && <img src="../image/brandsness/ziczac.svg" alt="fourth" />}
                            {imageClicked.fifth && <img src="../image/brandsness/card1.svg" alt="fifth" />}
                            {imageClicked.second && !imageClicked.ground && <img src="../image/brandsness/ziczac.svg" alt="second" />}
                        </div>
                    </div>
                </div>
            </div>
            {/* </Wrapper> */}
        </div>
    )
}

export default InfluencerGet;