import React, { useState } from 'react'
import AwarenessHeader from './AwarenessHeader'
import HeroNav from './HeroNav'
import Wrapper from '../Wrapper'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import About from '../Home/About';
import Footer from '../Home/Footer';
const EPersonalDetails = () => {
    const router = useRouter()
    const headerData = router.query.name


    // Validation Start

    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('');
    const [companyname, setCompanyname] = useState('')
    const [errors, setErrors] = useState({});



    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePhoneNumber(event) {
        setPhoneNumber(event.target.value)
    }
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleCompanyName(event) {
        setCompanyname(event.target.value)
    }

    function validateForm() {
        const errors = {};

        // Validate username
        if (username.trim() === '') {
            errors.username = 'Username is required.';
        }

        if (phoneNumber === '') {
            errors.phoneNumber = 'Phone Number is required.';
        } else if (phoneNumber.length > 11) {
            errors.phoneNumber = 'Invalid Phone Number.';
        }
        // Validate email
        if (email.trim() === '') {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email format.';
        }

        if (companyname.trim() === '') {
            errors.companyname = 'Company Name is required'
        }
        return errors;
    }


    function handleSubmit(event) {
        event.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {

            router.push({ pathname: 'erequirment', query: { name: headerData, eData: 'first' } })
        } else {
            setErrors(validationErrors);
        }
    }
    //   Validation End

    return (
        <>
            <div>
                <AwarenessHeader headerData={headerData} />
                <HeroNav />

                {/* lets stareted start */}
                <Wrapper>
                    <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 md:py-24 mx-auto flex justify-center ">
                            <div className="-my-8 divide-y-2 divide-gray-100">
                                <div className="py-3 md:py-0 flex flex-wrap md:flex-nowrap">

                                    <div className="md:flex-grow">
                                        <h2 className="text-[#000000] text-[20px] md:text-[36px] leading-[54px] font-medium font-sans md:mb-2 pt-4">Lets get you started</h2>
                                        <div className='md:mt-8'>
                                            <form onSubmit={handleSubmit}>
                                                <div className="grid md:grid-cols-2 md:gap-6 md:w-[545px]">
                                                    <div className="relative z-0 w-full mb-6 group">
                                                        <input
                                                            type="text"
                                                            value={username}
                                                            onChange={handleUsernameChange}
                                                            className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer"

                                                        />
                                                        {errors.username && <p className='text-red-500 mt-2'>{errors.username}</p>}
                                                        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">What’s your name*</label>
                                                    </div>
                                                    <div className="relative z-0 w-full mb-6 group">
                                                        <input
                                                            type="number"
                                                            value={phoneNumber}
                                                            onChange={handlePhoneNumber}
                                                            className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer"
                                                        />
                                                        {errors.phoneNumber && <p className='text-red-500 mt-2'>{errors.phoneNumber}</p>}
                                                        <label for="phone_number" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Phone Number*</label>
                                                    </div>
                                                </div>
                                                <div className="grid md:grid-cols-2 md:gap-6">
                                                    <div className="relative z-0 w-full mb-6 group">
                                                        <input
                                                            type="email"
                                                            value={email}
                                                            onChange={handleEmailChange}
                                                            className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer"
                                                        />
                                                        {errors.email && <p className='text-red-500 mt-2'>{errors.email}</p>}
                                                        {/* <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer" placeholder=" " required /> */}
                                                        <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Work Email*</label>
                                                    </div>
                                                    <div className="relative z-0 w-full mb-6 group">
                                                        <input
                                                            type="text"
                                                            value={companyname}
                                                            onChange={handleCompanyName}
                                                            className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer"

                                                        />
                                                        {errors.companyname && <p className='text-red-500 mt-2'>{errors.companyname}</p>}
                                                        <label for="companyname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Company Name*</label>
                                                    </div>
                                                </div>
                                                {/* butto Start */}
                                                <div className="flex gap-4 py-14 md:gap-10 pb-10 md:pb-0 justify-center"
                                                // onClick={() => router.push({ pathname: 'erequirment', query: { name: headerData, eData: 'first' } })}
                                                >
                                                    <div className='w-[55px] h-[50px] border-[1px] border-[#114067] rounded-[5px] flex justify-center items-center '>
                                                        <AiOutlineArrowLeft />
                                                    </div>
                                                    <button type="submit" className="text-[#FFFFFF] text-[20px] leading-[24px] font-medium rounded-[5px] bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] w-[221px] h-[50px] ">Next</button>
                                                </div>
                                                {/* butto End */}
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Wrapper>
                {/* lets stareted end */}

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

export default EPersonalDetails