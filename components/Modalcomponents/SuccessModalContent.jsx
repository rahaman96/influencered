import React from 'react'
import Wrapper from '../Wrapper'
import styles from './SuccessModal.module.css'
const SuccessModalContent = () => {
    return (
        <>
            <Wrapper>
                <div className="mx-auto  flex-wrap items-center justify-center  ">
                    <div className='flex mb-10 h- mt-[60px] items-center justify-center'>
                        <div className={`${styles.image}`}>
                            <div className={`${styles.ok}`}>
                                <img src="../image/ok.svg" alt="OK"/>
                            </div>
                            <div className={`${styles.check}`}>
                                <img src="../image/Check.svg" alt="Check" />
                            </div>
                        </div>
                    </div>
                    <div className=' flex items-center justify-center'>
                        <h6 className='text-[#000000] text-[36px] leading-[50px] text-center  font-medium md:w-[811px]'>You have successfully signed up with your campaign details will reach you soon</h6>

                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default SuccessModalContent