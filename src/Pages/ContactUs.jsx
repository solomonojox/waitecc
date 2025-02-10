import { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import assets from '../Assets/assets';

import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineAttachEmail, MdOutlinePhoneAndroid } from "react-icons/md";


const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <div className="">
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>

            <div className="bg-white flex">
                {/* Left Side with Info */}
                <div className="hidden w-2/5 h-[100dvh] p-8 bg-blue-50 lg:flex flex-col justify-between"
                    style={{
                        backgroundImage: `url(${assets.contact_us})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                    <div>

                    </div>
                    <div className="flex space-x-4 mt-8">
                        <FaTwitter className="text-white hover:bg-gray-500 text-5xl cursor-pointer bg-black transition-colors p-2" />
                        <FaLinkedin className="text-white hover:bg-gray-500 text-5xl bg-black transition-colors p-2 cursor-pointer" />
                        <FaFacebook className="text-white hover:bg-gray-500 text-5xl bg-black transition-colors p-2 cursor-pointer" />
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="lg:w-3/5 w-full h-[100dvh] flex flex-col justify-center items-center py-8 px-4 lg:px-16 bg-white rounded-r-2xl">
                    <div className='w-full'>
                        <h1 className="text-2xl font-bold mb-4">GET IN TOUCH</h1>
                        <p className="text-gray-700 mb-8">
                            24/7 We will answer your questions and problems.
                        </p>
                    </div>
                    <form className="space-y-4 w-full">
                        <div className="flex space-x-4">
                            <div className='relative w-1/2'>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full border-2 border-gray-300 py-4 pl-10 pr-3 rounded focus:outline-none focus:border-2 focus:border-blue-300"
                                />
                                <FaRegUser className='absolute top-4 left-2 text-gray-600 text-2xl' />
                            </div>
                            <div className='relative w-1/2'>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="border-2 border-gray-300 py-4 pl-10 pr-3 rounded focus:outline-none focus:border-2 focus:border-blue-300 w-full"
                                />
                                <FaRegUser className='absolute top-4 left-2 text-gray-600 text-2xl' />
                            </div>
                        </div>
                        <div className='relative'>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border-2 border-gray-300 py-4 pl-10 pr-3 rounded focus:outline-none focus:border-2 focus:border-blue-300"
                            />
                            <MdOutlineAttachEmail className='absolute top-5 left-2 text-gray-600 text-2xl' />
                        </div>
                        <div className='relative'>
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full border-2 border-gray-300 py-4 pl-10 pr-3 rounded focus:outline-none focus:border-2 focus:border-blue-300"
                            />
                            <MdOutlinePhoneAndroid className='absolute top-5 left-2 text-gray-600 text-2xl' />
                        </div>
                        <textarea
                            placeholder="Describe your issue"
                            rows="5"
                            className="w-full border-2 border-gray-300 p-3 rounded focus:outline-none focus:border-2 focus:border-blue-300"
                        />
                        <button
                            type="submit"
                            className="w-full bg-gray-600 text-white p-3 rounded hover:bg-gray-700 transition-colors"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ContactUs;