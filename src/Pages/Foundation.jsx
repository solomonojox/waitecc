import React, { useState } from 'react';
import { Heart, BookOpen, Home, Utensils, Truck, Users, Globe, Star, ChevronRight, Play } from 'lucide-react';
import Navbar from '../Components/Navbar';
import { donationImage, donationBg } from '../Assets/donation/donationImage';
import assets from '../Assets/assets';

const Foundation = () => {
    console.log(donationImage)
    const [activeProject, setActiveProject] = useState(0);

    const projects = [
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Digital Learning Without Limits",
            description: "Solar-powered offline libraries bringing thousands of books, videos, and STEM resources to children in underserved communities.",
            color: "from-blue-500 to-purple-600"
        },
        {
            icon: <Home className="w-8 h-8" />,
            title: "The School Project",
            description: "Creating digital learning hubs, training teachers, and building classrooms that inspire dreams.",
            color: "from-green-500 to-teal-600"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Safe Housing for Growing Minds",
            description: "Building shelters and dormitories that offer comfort, safety, and stability for vulnerable children.",
            color: "from-orange-500 to-red-600"
        },
        {
            icon: <Utensils className="w-8 h-8" />,
            title: "Feeding the Future",
            description: "Ensuring children in remote areas get access to nutritious meals every day.",
            color: "from-yellow-500 to-orange-600"
        },
        {
            icon: <Truck className="w-8 h-8" />,
            title: "Utility Vehicles for Outreach",
            description: "Delivering materials and reaching forgotten areas to expand our impact across regions.",
            color: "from-purple-500 to-pink-600"
        }
    ];

    const needs = [
        { icon: <BookOpen className="w-6 h-6" />, title: "Educational Materials", desc: "Books to digital tools" },
        { icon: <Utensils className="w-6 h-6" />, title: "Nutritious Food Items", desc: "Daily meals for children" },
        { icon: <Home className="w-6 h-6" />, title: "Housing Project Funding", desc: "Safety and peace" },
        { icon: <Truck className="w-6 h-6" />, title: "Vehicles & Equipment", desc: "Reach deeper, serve faster" }
    ];

    const handlePaystackRedirect = () => {
        window.open('https://paystack.shop/pay/redtqnozka', '_blank');
    };

    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: `url(${donationBg})`, backgroundPosition: 'center' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-yellow-500 to-orange-700 opacity-70"></div>
                    <div className="absolute inset-0">
                        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
                        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-1000"></div>
                        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-500"></div>
                    </div>

                    <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
                        <div className="mb-8">
                            <div className="w-32 h-32 mx-auto mb-4 animate-fade-in rounded-full overflow-hidden">
                                <img src={assets.girldream} alt="letgirldream"  className='w-full h-full object-contain' />
                            </div>
                            <h1 className="text-6xl md:text-8xl font-bold mb-2 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent animate-fade-in">
                                Let a Girl Dream
                            </h1>
                            <h2 className="text-2xl md:text-4xl font-light mb-2 opacity-90">
                                Empowering Africa's Future, One Child at a Time
                            </h2>
                        </div>

                        <p className="text-xl md:text-2xl mb-4 leading-relaxed max-w-4xl mx-auto font-light">
                            Every child deserves the right to <span className="font-bold text-yellow-200">dream, learn, and lead</span>,
                            regardless of their background or location.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <button
                                onClick={handlePaystackRedirect}
                                className="group bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                            >
                                <Heart className="w-6 h-6 group-hover:text-red-500 transition-colors" />
                                Donate Now
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center gap-3">
                                <Play className="w-6 h-6" />
                                Watch Our Story
                            </button>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Breaking Barriers. Building Futures.</h2>
                            <p className="md:text-xl text-gray-600 w-full md:max-w-3xl mx-auto leading-relaxed">
                                We're more than just a school initiative. We're a movement dedicated to empowering young African children
                                with the education, resources, and support they need to rise above limitations and change their world.
                            </p>
                        </div>

                        {/* Children Images Placeholders */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                            {donationImage?.map((i, index) => (
                                <div key={index} className="relative group overflow-hidden rounded-lg h-96 md:w-96">
                                    <img src={i} alt="" className='object-cover w-full h-full' />
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                                        <Star className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                                <Globe className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">Technology</h3>
                                <p className="text-gray-600">Bringing digital learning to the most remote communities</p>
                            </div>
                            <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                                <BookOpen className="w-16 h-16 text-green-600 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">Education</h3>
                                <p className="text-gray-600">Quality learning experiences that inspire and empower</p>
                            </div>
                            <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                                <Heart className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">Community</h3>
                                <p className="text-gray-600">Building support networks that nurture growth</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-bold text-gray-800 mb-6">Our Impact Projects</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Each project is designed to create lasting change in the lives of African children
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                {projects.map((project, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setActiveProject(index)}
                                        className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${activeProject === index
                                            ? 'bg-white shadow-2xl scale-105'
                                            : 'bg-white/50 hover:bg-white hover:shadow-lg'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} text-white`}>
                                                {project.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-gray-800 mb-1">{project.title}</h3>
                                                <p className="text-gray-600 text-sm">{project.description}</p>
                                            </div>
                                            <ChevronRight className={`w-6 h-6 text-gray-400 transition-transform ${activeProject === index ? 'rotate-90' : ''
                                                }`} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white rounded-3xl shadow-2xl p-8">
                                <div className={`h-64 rounded-2xl bg-gradient-to-br ${projects[activeProject].color} mb-6 flex items-center justify-center`}>
                                    <div className="text-white text-center">
                                        {projects[activeProject].icon}
                                        <h4 className="text-2xl font-bold mt-4">{projects[activeProject].title}</h4>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    {projects[activeProject].description}
                                </p>
                                <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105" onClick={handlePaystackRedirect}>
                                    Support This Project
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Need Section */}
                <section className="py-20 bg-gradient-to-br from-orange-600 to-yellow-600">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-bold text-white mb-6">What We Need Today</h2>
                            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                                Your support helps us reach more children and create lasting impact
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {needs.map((need, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                                    <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                        {need.icon}
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-2">{need.title}</h3>
                                    <p className="text-orange-100 text-sm">{need.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto text-center px-6">
                        <h2 className="text-5xl font-bold text-gray-800 mb-6">Join the Movement</h2>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                            Let's create a world where every child, no matter where they live,
                            has the tools to dream big and grow boldly.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                            <button
                                onClick={handlePaystackRedirect}
                                className="group bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                            >
                                <Heart className="w-7 h-7 group-hover:animate-pulse" />
                                Make a Donation
                                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="group border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-full font-bold text-xl hover:border-orange-500 hover:text-orange-500 transition-all duration-300 flex items-center gap-3" onClick={handlePaystackRedirect}>
                                <Users className="w-7 h-7" />
                                Become a Volunteer
                            </button>
                        </div>

                        <div className="text-center">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
                                Let a Girl Dream. Let Africa Rise.
                            </h3>
                            <p className="text-lg text-gray-600">
                                Together, we can make sure <strong>no child is left behind</strong>.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Foundation;