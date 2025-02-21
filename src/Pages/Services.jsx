import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../Assets/assets';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import { FaBrain, FaBullhorn, FaEnvelope, FaSearchDollar, FaVideo, FaPaintBrush, FaLaptopCode, FaChartLine, FaFileAlt } from "react-icons/fa";

const Services = () => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const services = [
        {
            icon: <FaBrain className="text-blue-500 text-6xl mb-4" />,
            title: "AI-Powered Digital & Content Marketing",
            description: "Leverage the power of AI-driven insights to automate, personalize, and optimize your digital marketing campaigns for maximum impact.",
            furtherInfo: "This is a test1"
        },
        {
            icon: <FaBullhorn className="text-orange-500 text-6xl mb-4" />,
            title: "Brand & Social Media Management",
            description: "From content curation to community engagement, we manage your social media presence with data-backed strategies to enhance brand visibility.",
            furtherInfo: "This is a test2"
        },
        {
            icon: <FaEnvelope className="text-red-500 text-6xl mb-4" />,
            title: "Email Marketing",
            description: "Boost customer retention and sales with personalized, AI-optimized email campaigns that drive engagement.",
            furtherInfo: "This is a test3"
        },
        {
            icon: <FaSearchDollar className="text-green-500 text-6xl mb-4" />,
            title: "SEO/SEM Marketing",
            description: "Rank higher and attract organic traffic with search engine optimization (SEO) and pay-per-click (PPC) strategies tailored to your business.",
            furtherInfo: "This is a test4"
        },
        {
            icon: <FaVideo className="text-purple-500 text-6xl mb-4" />,
            title: "Video Production",
            description: "Engage your audience with high-quality, professional video content that tells your brand’s story effectively.",
            furtherInfo: "This is a test5"
        },
        {
            icon: <FaPaintBrush className="text-pink-500 text-6xl mb-4" />,
            title: "Content Creation & Graphic Design",
            description: "Captivate your audience with AI-enhanced, SEO-rich content and visually compelling designs that align with your brand identity.",
            furtherInfo: "This is a test6"
        },
        {
            icon: <FaLaptopCode className="text-indigo-500 text-6xl mb-4" />,
            title: "Website & Mobile App Development",
            description: "Get a fully responsive, SEO-optimized website or mobile app designed to convert visitors into loyal customers.",
            furtherInfo: "This is a test7"
        },
        {
            icon: <FaChartLine className="text-teal-500 text-6xl mb-4" />,
            title: "Market Research",
            description: "Make data-driven business decisions with in-depth market insights, competitor analysis, and consumer behavior studies.",
            furtherInfo: "This is a test8"
        },
        {
            icon: <FaFileAlt className="text-gray-500 text-6xl mb-4" />,
            title: "Copywriting & Technical Writing",
            description: "From persuasive sales copy to in-depth technical documentation, we craft engaging, high-converting written content tailored to your audience.",
            furtherInfo: "This is a test9"
        }
    ];

    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>

            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center px-4 py-10 lg:px-20 shadow-lg h-[100dvh] bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-900 text-white overflow-hidden">
                <div className="space-y-4 lg:w-[50%]">
                    <p className="text-4xl lg:text-5xl font-semibold leading-tight">
                        Transform Your Brand with AI-Driven Marketing & Creative Solutions
                    </p>
                    <p className="lg:text-[20px]">
                        From AI-powered digital strategies to stunning visual content and seamless web experiences, our services are designed to elevate your business. Whether you're looking to boost engagement, optimize campaigns, or craft compelling brand stories, we've got you covered.
                    </p>
                    <button className="bg-secondary hover:bg-hoverSecondary px-8 py-4 rounded-lg text-white text-lg font-medium transition-colors">
                        View More
                    </button>
                </div>
                <img src={assets.services} alt="headerimg" className="lg:w-[50%] max-w-full mt-6 lg:mt-0 hidden lg:flex" />
            </div>

            {/* Services Section */}
            <div className="flex flex-col items-center justify-center mt-20 py-10 lg:px-20">
                <h1 className="text-[3vmax] text-center mb-10 font-bold">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
                    {services.map((service, index) => (
                        <div key={index} className="rounded-2xl border shadow-md p-6 hover:shadow-xl transition-shadow bg-white text-start">
                            <div className="flex flex-col">
                                {service.icon}
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                                <button className='text-primary font-bold hover:text-hoverPrimary mt-2' onClick={() => navigate(`/services/${encodeURIComponent(service.title)}`, {
                                    state: {
                                        title: service.title,
                                        description: service.description,
                                        furtherInfo: service.furtherInfo
                                    }
                                })}>See more...</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Services;
