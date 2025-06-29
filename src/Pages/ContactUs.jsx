import { useEffect, useState, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import assets from '../Assets/assets';

import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineAttachEmail, MdOutlinePhoneAndroid } from "react-icons/md";
import { useForm, ValidationError } from '@formspree/react';

const ContactUs = () => {
    const [state, handleSubmit] = useForm('manjaqae'); // your Formspree ID
    const [showModal, setShowModal] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (state.succeeded) {
            setShowModal(true);
            if (formRef.current) {
                formRef.current.reset();
            }
        }
    }, [state.succeeded]);

    return (
        <div className="">
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>

            <div className="bg-white flex">
                {/* Left Panel */}
                <div
                    className="hidden w-2/5 h-[100dvh] p-8 bg-blue-50 lg:flex flex-col justify-between"
                    style={{
                        backgroundImage: `url(${assets.contact_us})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div></div>
                    <div className="flex space-x-4 mt-8">
                        <FaTwitter className="text-white hover:bg-gray-500 text-5xl cursor-pointer bg-black transition-colors p-2" />
                        <FaLinkedin className="text-white hover:bg-gray-500 text-5xl bg-black transition-colors p-2 cursor-pointer" />
                        <FaFacebook className="text-white hover:bg-gray-500 text-5xl bg-black transition-colors p-2 cursor-pointer" />
                    </div>
                </div>

                {/* Right Panel with Form */}
                <div className="lg:w-3/5 w-full h-[100dvh] flex flex-col justify-center items-center py-8 px-4 lg:px-16 bg-white rounded-r-2xl">
                    <div className="w-full">
                        <h1 className="text-2xl font-bold mb-4">GET IN TOUCH</h1>
                        <p className="text-gray-700 mb-8">
                            24/7 We will answer your questions and problems.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 w-full" ref={formRef}>
                        {/* First Name */}
                        <div className="relative">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Full Name"
                                required
                                className="w-full border-2 border-gray-300 py-4 pl-10 pr-3 rounded"
                            />
                            <FaRegUser className="absolute top-4 left-3 text-gray-500 text-xl" />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                className="w-full border-2 border-gray-300 py-4 pl-10 pr-3 rounded"
                            />
                            <MdOutlineAttachEmail className="absolute top-4 left-3 text-gray-500 text-xl" />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>

                        {/* Phone */}
                        <div className="relative">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                className="w-full border-2 border-gray-300 py-4 pl-10 pr-3 rounded"
                            />
                            <MdOutlinePhoneAndroid className="absolute top-4 left-3 text-gray-500 text-xl" />
                        </div>

                        {/* Message */}
                        <div className="relative">
                            <textarea
                                name="message"
                                placeholder="Describe your issue"
                                rows="5"
                                required
                                className="w-full border-2 border-gray-300 p-3 pl-4 rounded"
                            />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className={`w-full flex items-center justify-center gap-2 bg-gray-600 text-white p-3 rounded transition-colors ${state.submitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-700'
                                }`}
                        >
                            {state.submitting && (
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    ></path>
                                </svg>
                            )}
                            {state.submitting ? 'Sending...' : 'Send'}
                        </button>
                    </form>
                </div>
            </div>

            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center relative">
                        <h2 className="text-2xl font-bold mb-4 text-green-600">🎉 Thank you!</h2>
                        <p className="text-gray-700 mb-6">
                            Your message has been sent successfully. We’ll get back to you shortly.
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default ContactUs;