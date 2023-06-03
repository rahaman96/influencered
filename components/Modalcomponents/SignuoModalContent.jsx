import React, { useState } from 'react'
import Wrapper from '../Wrapper'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import SuccessModalContent from './SuccessModalContent';
import SignupSuccessfull from './SignUpSuccessful';

const SignuoModalContent = () => {
    const [successModal, setSuccessModal] = useState(false)

    // Validation Start
    const [formData, setFormData] = useState({
        phonenumber: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        let errors = {};

        if (!formData.phonenumber) {
            errors.phonenumber = 'Name is required';
        }

        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email format';
        }

        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }

        if (!formData.confirmPassword) {
            errors.confirmPassword = 'Confirm password is required';
        } else if (formData.confirmPassword !== formData.password) {
            errors.confirmPassword = 'Passwords do not match';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
            // Form validation successful, perform further actions
            console.log('Form submitted:', formData);
        } else {
            setErrors(validationErrors);
        }
    };


    // function handleConfirmPassword(event) {
    //     setConfirmPassword(event.target.value);
    // }

    // function handlePhoneNumber(event) {
    //     setPhoneNumber(event.target.value)
    // }
    // function handleEmailChange(event) {
    //     setEmail(event.target.value);
    // }

    // function handlePassword(event) {
    //     setPassword(event.target.value)
    // }

    // function validateForm() {
    //     const errors = {};

    //     // Validate username
    //     // if (username.trim() === '') {
    //     //     errors.username = 'Username is required.';
    //     // }

    //     if (phoneNumber === '') {
    //         errors.phoneNumber = 'Phone Number is required.';
    //     } else if (phoneNumber.length > 11) {
    //         errors.phoneNumber = 'Invalid Phone Number.';
    //     }
    //     // Validate email
    //     if (email.trim() === '') {
    //         errors.email = 'Email is required.';
    //     } else if (!/\S+@\S+\.\S+/.test(email)) {
    //         errors.email = 'Invalid email format.';
    //     }

    //     if (password.trim() === '') {
    //         errors.password = 'Password is required'
    //     } else if (password.length < 6) {
    //         errors.password = 'Password must be at least 6 characters long'
    //     }

    //     if (confirmPassword.trim() === '') {
    //         errors.confirmPassword = 'Confirm password is required'
    //     } else if (confirmPassword !== password) {
    //         errors.confirmPassword = 'Passwords do not match';
    //     }

    //     return errors;
    // }


    // function handleSubmit(event) {
    //     event.preventDefault();

    //     const validationErrors = validateForm();

    //     if (Object.keys(validationErrors).length === 0) {
    //     } else {
    //         setErrors(validationErrors);
    //     }
    // }
    //   Validation End

    return (
        <>

            <SignupSuccessfull
                onClose={() => setSuccessModal(false)}
                show={successModal}
            >
                <SuccessModalContent />

            </SignupSuccessfull>
            <Wrapper className='md:mx-auto flex md:justify-center '>
                <div className=''>
                    <h6 className='mb-6 text-[#000000] text-[36px] leading-[54px] font-medium font-sans md:w-[351px] h-[54px] '>Sign up to continue</h6>
                    <form onSubmit={handleSubmit}>
                        <div className="flex md:grid-cols-2 md:gap-6 gap-4 md:w-[805px] justify-between">
                            <div className="relative z-0 md:w-[374px] w-full  mb-4 group">
                                <input
                                    type="text"
                                    name={formData.email}
                                    onChange={handleOnChange}
                                    className="block py-1 mt-3 px-0 w-full text-sm  border-0 border-b-[1px] border-[#000000] opacity-60 appearance-none   focus:outline-none peer"

                                />
                                {errors.email && <p className='text-red-500 '>{errors.email}</p>}
                                <label for="Email" className=" absolute  duration-300 top-3 origin-[0] peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-4 text-[#000000] text-[14px]  md:text-[20px] font-normal font-sans opacity-60 leading-[27px] ">Email ID *</label>
                            </div>
                            <div className="relative z-0 md:w-[374px] w-full  mb-4 group">
                                <input
                                    type="password"
                                    name={formData.password}
                                    onChange={handleOnChange}
                                    // id="Password "
                                    className="block py-1 mt-3 px-0 w-full text-sm  border-0 border-b-[1px] border-[#000000] opacity-60 appearance-none   focus:outline-none peer"
                                />
                                {errors.password && <p className='text-red-500'>{errors.password}</p>}
                                <label for="Password " className=" absolute  duration-300 top-3 origin-[0] peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-4 text-[#000000] text-[14px] md:text-[20px] font-normal font-sans opacity-60 leading-[27px] ">Password *</label>
                            </div>
                        </div>
                        <div className='flex gap-1 md:w-[367px] w-full mb-4'>
                            <p className='text-[#000000] text-[14px] md:text-[16px] leading-[21px] font-sans font-normal '>Note</p>
                            <p className='text-[#000000] text-[14px] md:text-[20px] leading-[21px] font-sans font-normal '>:</p>
                            <p className='md:pt-[2px] text-[#000000] opacity-60 text-[14px] md:text-[16px] leading-[21px] font-sans font-normal '> This email ID will be used for verification</p>
                        </div>
                        <div className="flex md:grid-cols-2 md:gap-6 gap-4 md:w-[805px] justify-between">
                            <div className="relative z-0 md:w-[374px]  w-full mb-4 group">
                                <input
                                    type="number"
                                    name={formData.phonenumber}
                                    onChange={handleOnChange}
                                    className="block py-1 mt-3 px-0 w-full text-sm  border-0 border-b-[1px] border-[#000000] opacity-60 appearance-none   focus:outline-none peer"
                                />
                                {errors.phonenumber && <p className='text-red-500'>{errors.phonenumber}</p>}
                                <label for="Phone Number" className=" absolute  duration-300 top-3 origin-[0] peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-4 text-[#000000] text-[14px] md:text-[20px] font-normal font-sans opacity-60 leading-[27px] ">Phone Number*</label>
                            </div>
                            <div className="relative z-0 md:w-[374px] w-full  mb-4 group">
                                <input
                                    type="password"
                                    name={formData.confirmPassword}
                                    onChange={handleOnChange}
                                    className="block py-1 mt-3 px-0 w-full text-sm  border-0 border-b-[1px] border-[#000000] opacity-60 appearance-none   focus:outline-none peer"

                                />
                                {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword}</p>}
                                <label for="Re-enter Password" className=" absolute  duration-300 top-3 origin-[0] peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-4 text-[#000000] text-[14px] md:text-[20px] font-normal font-sans opacity-60 leading-[27px] ">Re-enter Password *</label>
                            </div>
                        </div>
                        <div className='flex md:w-[719px]  h-[44px] gap-1'>
                            <p className='text-[#000000]  text-[14px] md:text-[20px] leading-[21px] font-sans font-normal'>Note </p>
                            <p className='text-[#000000] opacity- text-[14px] md:text-[20px] leading-[21px] font-sans font-normal'>:</p>
                            <p className='pt-[2px] text-[#000000] opacity-60 text-[14px] md:text-[16px] leading-[21px] font-sans font-normal '>
                                Passwords must contain at least  8 characters, including at least 1 uppercase letter,
                                1 lowercase letter, 1 number and 1 special character.
                            </p>
                        </div>
                        <div className="flex gap-4 py-14 md:gap-10 pb-10 md:pb-0 justify-cente"

                        >
                            <div className='w-[55px] h-[50px] border-[1px] border-[#114067] rounded-[5px] flex justify-center items-center '>
                                <AiOutlineArrowLeft />
                            </div>
                            <button type="submit" className="text-[#FFFFFF] text-[20px] leading-[24px] font-medium rounded-[5px] bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] w-[221px] h-[50px] "
                            onClick={() => setSuccessModal(true)}
                            >Next</button>
                        </div>
                    </form>
                </div>
            </Wrapper>
        </>
    )
}

export default SignuoModalContent