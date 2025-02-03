import React from "react";
// import { Link } from "react-router-dom";
import Footer2 from "../Components/Footer";
import Header from "../Components/Navbar";

// import academicHero from '../Assets/academicHero.webp';
// import { FaHandshake } from "react-icons/fa";
// import { IoSchool } from "react-icons/io5";
// import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import assets from "../Assets/assets";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Header />
            </div>
            <div className="font-sans text-gray-800 z-10">
                {/* Hero Section */}
                <div class="bg-gradient-to-r from-blue-600 to-purple-700 text-white pt-10 lg:py-16">
                    <div class="max-w-7xl mx-auto  lg:px-8">
                        <div class="lg:flex items-center gap-1 justify-between">
                            {/* Text Content */}
                            <div class="lg:w-1/2 text-center lg:text-left px-4">
                                <h1 class="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                                    Elevate Your Brand with Cutting-Edge AI-Powered Digital Solutions
                                </h1>
                                <p class="text-lg mb-8">
                                    At <span class="font-semibold">Waitecc</span>, we blend human creativity with AI-driven digital tools to deliver high-performance marketing strategies that grow your brand, increase engagement, and drive conversions. Whether it's SEO optimization, content marketing, brand management, or social media strategy, we help businesses stay ahead in the digital age.
                                </p>
                                <a href="mailto:waiteccng@outlook.com" class="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-100 transition">
                                    📌 Get a Free Consultation!
                                </a>
                                <div class="mt-8 text-sm">
                                    <p>📞 Call us today: +234-810-582-6279, +234-807-799-3190</p>
                                    <p>📩 Email: <a href="mailto:waiteccng@outlook.com" class="underline">waiteccng@outlook.com</a></p>
                                </div>
                            </div>

                            {/* Illustration */}
                            <div class="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
                                <img src={assets.hero2} alt="AI Solutions" class="w-full shadow-lg lg:w-full lg:rounded-2xl" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Services */}
                <section class="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 class="text-4xl font-extrabold text-gray-800 text-center mb-12">Our Services</h2>
                        <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Service Card  */}
                            <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                                <div class="flex items-center mb-4">
                                    <div class="bg-blue-100 p-3 rounded-full">
                                        <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3 9H7a1 1 0 010-2h6a1 1 0 110 2z" />
                                        </svg>
                                    </div>
                                    <h3 class="ml-4 text-2xl font-semibold text-blue-600">AI-Powered Digital & Content Marketing</h3>
                                </div>
                                <p class="text-gray-600">Leverage the power of AI-driven insights to automate, personalize, and optimize your digital marketing campaigns for maximum impact.</p>
                            </div>

                            <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                                <div class="flex items-center mb-4">
                                    <div class="bg-blue-100 p-3 rounded-full">
                                        <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M17.293 7.293a1 1 0 00-1.414 0L10 13.172 4.121 7.293a1 1 0 10-1.414 1.414l6 6a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                                        </svg>
                                    </div>
                                    <h3 class="ml-4 text-2xl font-semibold text-blue-600">Brand & Social Media Management</h3>
                                </div>
                                <p class="text-gray-600">From content curation to community engagement, we manage your social media presence with data-backed strategies to enhance brand visibility.</p>
                            </div>

                            <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                                <div class="flex items-center mb-4">
                                    <div class="bg-blue-100 p-3 rounded-full">
                                        <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M4 4a3 3 0 100 6h12a3 3 0 100-6H4zm0 8a3 3 0 000 6h12a3 3 0 100-6H4z" />
                                        </svg>
                                    </div>
                                    <h3 class="ml-4 text-2xl font-semibold text-blue-600">Email Marketing</h3>
                                </div>
                                <p class="text-gray-600">Boost customer retention and sales with personalized, AI-optimized email campaigns that drive engagement.</p>
                            </div>

                            <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                                <div class="flex items-center mb-4">
                                    <div class="bg-blue-100 p-3 rounded-full">
                                        <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3 9a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h7a1 1 0 010 2H4a1 1 0 01-1-1z" />
                                        </svg>
                                    </div>
                                    <h3 class="ml-4 text-2xl font-semibold text-blue-600">SEO/SEM Marketing</h3>
                                </div>
                                <p class="text-gray-600">Rank higher and attract organic traffic with search engine optimization (SEO) and pay-per-click (PPC) strategies tailored to your business.</p>
                            </div>

                            <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                                <div class="flex items-center mb-4">
                                    <div class="bg-blue-100 p-3 rounded-full">
                                        <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M8 2a4 4 0 100 8 4 4 0 000-8zm8 14a8 8 0 10-16 0h2a6 6 0 1112 0h2z" />
                                        </svg>
                                    </div>
                                    <h3 class="ml-4 text-2xl font-semibold text-blue-600">Video Production</h3>
                                </div>
                                <p class="text-gray-600">Engage your audience with high-quality, professional video content that tells your brand’s story effectively.</p>
                            </div>

                            <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                                <div class="flex items-center mb-4">
                                    <div class="bg-blue-100 p-3 rounded-full">
                                        <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.5 7a1.5 1.5 0 100 3h15a1.5 1.5 0 100-3h-15z" />
                                        </svg>
                                    </div>
                                    <h3 class="ml-4 text-2xl font-semibold text-blue-600">Content Creation & Graphic Design</h3>
                                </div>
                                <p class="text-gray-600">Captivate your audience with AI-enhanced, SEO-rich content and visually compelling designs that align with your brand identity.</p>
                            </div>
                        </div>

                        <div class="mt-12 text-center">
                            <Link to="#" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition">
                                📌 Let's discuss your needs today!
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="py-6 lg:py-16 px-4 md:px-8 ">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-8">
                        <div className="flex flex-col justify-center md:w-[400px] lg:w-[600px] h-auto md:h-[500px]">
                            <h2 className="text-[7vw] md:text-[3vw] lg:text-[2.725rem] font-bold mb-4">Key Benefits</h2>
                            <ul className="list-disc list-inside space-y-4 text-[4vw] md:text-[1.2vw] font-medium text-gray-600 ">
                                <p className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-primary" /><span>Global accreditation from a recognized institution.</span></p>
                                <p className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-primary" /><span>Specialized courses tailored for professionals and diplomats.</span></p>
                                <p className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-primary" /><span>Flexible online learning to suit busy schedules.</span></p>
                                <p className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-primary" /><span>Access to international networks of experts and peers.</span></p>
                            </ul>
                        </div>
                        <div>
                            <img
                                src={assets.woman1}
                                alt="Key Benefits"
                                className="rounded-lg shadow-lg md:w-[80%] lg:w-[600px] lg:h-[500px] object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Course Categories */}
                <section id="courses" className="py-16 lg:px-8 bg-gray-100">
                    <div className="mx-2 md:mx-8 flex flex-col items-center">
                        <h2 className="text-2xl font-bold mb-8 text-center">Our Courses</h2>
                        <div className="container lg:px-10">
                            {/* Short Courses */}
                            <div className="mb-12 ">
                                <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">Short Courses by International Business School The Hague</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* Individual Additional Courses */}
                                    <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
                                        <img src={assets.business} alt="diplomacy" className="h-[250px] w-full object-cover" />
                                        <h3 className="text-xl font-bold mb-2">Strategy and Executive Management</h3>
                                        <p className="text-gray-600 mb-4">Enhance your strategic thinking and executive decision-making skills.</p>
                                        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-hoverPrimary">Learn More</button>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
                                        <img src={assets.leadership} alt="diplomacy" className="h-[250px] w-full object-cover" />
                                        <h3 className="text-xl font-bold mb-2">Maintenance Management</h3>
                                        <p className="text-gray-600 mb-4">Learn effective strategies for managing maintenance operations.</p>
                                        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-hoverPrimary">Learn More</button>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
                                        <img src={assets.finance} alt="diplomacy" className="h-[250px] w-full object-cover" />
                                        <h3 className="text-xl font-bold mb-2">Sustainable Finance</h3>
                                        <p className="text-gray-600 mb-4">Understand financial strategies to support sustainability goals.</p>
                                        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-hoverPrimary">Learn More</button>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
                                        <img src={assets.health} alt="project" className="h-[250px] w-full object-cover" />
                                        <h3 className="text-xl font-bold mb-2">Healthcare Management</h3>
                                        <p className="text-gray-600 mb-4">Gain insights into managing healthcare systems and services efficiently.</p>
                                        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-hoverPrimary">Learn More</button>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
                                        <img src={assets.conflict} alt="project" className="h-[250px] w-full object-cover" />
                                        <h3 className="text-xl font-bold mb-2">Project Management</h3>
                                        <p className="text-gray-600 mb-4">Master essential project management skills for successful project delivery.</p>
                                        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-hoverPrimary">Learn More</button>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
                                        <img src={assets.marketing} alt="social media" className="h-[250px] w-full object-cover" />
                                        <h3 className="text-xl font-bold mb-2">Social Media and Online Marketing</h3>
                                        <p className="text-gray-600 mb-4">Learn to create impactful social media campaigns and online marketing strategies.</p>
                                        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-hoverPrimary">Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why should enrol */}
                <div className="bg-white py-12">
                    <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
                        <h1 className="text-3xl font-bold text-center md:mb-8 ">Who Should Enroll?</h1>

                        {/* Professionals Section */}
                        <div className="md:px-20 lg:px-0">
                            <div className="bg-gray-100 rounded-lg shadow-md p-4 md:p-6 h-auto lg:h-[400px]">
                                <h2 className="text-lg font-semibold text-gray-700 mb-2">Professionals</h2>
                                <p className="text-gray-600 mb-4 lg:text-[1.2vw]">
                                    This program is ideal for professionals seeking career advancement through short courses. Whether you are transitioning to a leadership role, updating your skills in marketing, or pursuing executive management strategies, these courses will empower you to achieve your career goals.
                                </p>
                                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-hoverPrimary">Explore Courses</button>
                            </div>
                        </div>

                        {/* Diplomats Section */}
                        <div className="md:px-20 lg:px-0">
                            <div className="bg-gray-100 rounded-lg shadow-md p-4 md:p-6 lg:h-[400px]" >
                                <h2 className="text-lg font-semibold text-gray-700 mb-2">Diplomats, Ambassadors, and Senior Government Officials</h2>
                                <p className="text-gray-600 mb-4 lg:text-[1.2vw]">
                                    Designed for diplomats, ambassadors, and senior government officials, these courses provide specialized knowledge to enhance expertise in diplomacy, global governance, and protocol. Strengthen your leadership skills and gain the insights necessary to excel in international and governmental roles.
                                </p>
                                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-hoverPrimary">Explore Courses</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <section className="py-16 md:px-8 bg-white">
                    <div className="md:px-4">
                        <h1 className="text-3xl font-bold text-center mb-8">Testimonials</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Testimonial 1 */}
                            <div className="p-6 flex flex-col items-center text-center">
                                <div className="w-60 h-60 mx-auto mb-4 rounded-full overflow-hidden">
                                    <img src={assets.testimony1} alt="testimony img" className="w-full h-full object-cover" />
                                </div>
                                <h2 className="text-[8vw] md:text-[2vw] font-semibold text-primary">John Doe</h2>
                                <p className="text-[5.2vw] md:text-[1.2vw] text-gray-500">United States</p>
                                <hr className="w-40 my-4 border-2 border-black" />
                                <p className="text-gray-600 text-[4.2vw] md:text-[1.6vw]">"This course has significantly improved my skills and provided me with tools to excel in my career. Highly recommended!"</p>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="p-6 flex flex-col items-center text-center">
                                <div className="w-60 h-60 mx-auto mb-4 rounded-full overflow-hidden">
                                    <img src={assets.testimony2} alt="testimony img" className="w-full h-full object-cover" />
                                </div>
                                <h2 className="text-[8vw] md:text-[2vw] font-semibold text-primary">Jane Smith</h2>
                                <p className="text-[5.2vw] md:text-[1.2vw] text-gray-500">United Kingdom</p>
                                <hr className="my-4 w-40 border-2 border-black" />
                                <p className="text-gray-600 text-[4.2vw] md:text-[1.6vw]">"The leadership and management course was transformative. I gained insights that are directly applicable to my role."</p>
                            </div>

                            {/* Testimonial 3 */}
                            <div className="p-6 flex flex-col items-center text-center">
                                <div className="w-60 h-60 mx-auto mb-4 rounded-full overflow-hidden">
                                    <img src={assets.testimony3} alt="testimony img" className="w-full h-full object-cover" />
                                </div>
                                <h2 className="text-[8vw] md:text-[2vw] font-semibold text-primary">Ahmed Khan</h2>
                                <p className="text-[5.2vw] md:text-[1.2vw] text-gray-500">United Arab Emirates</p>
                                <hr className="my-4 w-40 border-2 border-black" />
                                <p className="text-gray-600 text-[4.2vw] md:text-[1.6vw]">"A fantastic learning experience! The courses are practical, insightful, and well-structured."</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Enrollment Process */}
                <section id="enroll" className="py-16 px-8 bg-primary text-white">
                    <div className="max-w-4xl mx-auto ">
                        <h2 className="text-2xl font-bold mb-4">How to Enroll</h2>
                        <p className="text-lg mb-8">Follow these simple steps to begin your journey:</p>
                        <div className="flex flex-col md:flex-row gap-10">
                            <div className="flex items-center gap-2 rounded-lg border p-6"><span className="text-[100px] font-black ">1</span><p>Visit our course catalog and choose a program.</p></div>
                            <div className="flex items-center gap-2 rounded-lg border p-6"><span className="text-[100px] font-black ">2</span><p>Complete the registration form with your details.</p></div>
                            <div className="flex items-center gap-2 rounded-lg border p-6"><span className="text-[100px] font-black ">3</span><p>Submit your application and receive confirmation.</p></div>
                        </div>
                    </div>
                </section>

                {/* Partners */}
                <section className="py-16 px-8 bg-white">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
                        <p className="text-lg mb-8">
                            We collaborate with leading institutions to deliver exceptional education.
                        </p>
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                                <img
                                    src={assets.ibsh}
                                    alt="Partner Logo"
                                    className="h-24 mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bg-gray-200 py-12">
                    <div className="container mx-auto px-4">
                        <h1 className="text-3xl font-bold text-center mb-8 text-primary">Contact Us</h1>
                        <div className="max-w-lg mx-auto bg-gray-50 rounded-lg shadow-md p-6">
                            <form className="space-y-6">
                                {/* Name Input */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full border-gray-300 rounded-lg shadow-sm outline-none border focus:ring-primary focus:border-primary p-3"
                                        placeholder="Your Name"
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full border-gray-300 rounded-lg shadow-sm outline-none border focus:ring-primary focus:border-primary p-3"
                                        placeholder="Your Email"
                                    />
                                </div>

                                {/* Message Input */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="w-full border-gray-300 rounded-lg shadow-sm outline-none border focus:ring-primary focus:border-primary p-3"
                                        placeholder="Your Message"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-hoverPrimary"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <Footer2 />
        </div>
    );
};

export default LandingPage;