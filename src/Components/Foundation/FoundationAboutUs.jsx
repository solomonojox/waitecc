import React from 'react';
import { BookOpen, Home, Utensils, Cpu, Users, Globe, Star } from 'lucide-react';
import Navbar from '../Navbar';
import { coFounderImage } from '../../Assets/donation/donationImage';

const FoundationAboutUs = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>

            {/* Hero Section */}
            <section className="relative py-32 flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-50">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
                        About <span className="text-orange-500">Let a Girl Dream</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Empowering Africa's future through education, safety, and opportunity
                    </p>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                At The Let a Girl Dream Foundation, we envision an Africa where every child, regardless of their circumstances, has the opportunity to unlock their full potential and shape a brighter future.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We are driven by the urgent need to address the systemic challenges that prevent millions of children from accessing quality education, safety, and basic necessities.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl overflow-hidden h-full">
                            <div className="aspect-w-16 aspect-h-9 w-full h-full min-h-[300px] bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                                <Globe className="w-24 h-24 text-orange-400 opacity-50" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenges Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Why African Children Need Our Support</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The unseen potential and the barriers holding it back
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: <BookOpen className="w-8 h-8 text-orange-500" />,
                                title: "Educational Disparity",
                                content: "Sub-Saharan Africa has the highest rates of education exclusion. Over one-fifth of children aged 6-11 are out of school, widening for girls and rural areas."
                            },
                            {
                                icon: <Home className="w-8 h-8 text-orange-500" />,
                                title: "Vulnerability and Insecurity",
                                content: "Millions face inadequate housing and safety risks. Stable environments are essential for cognitive and emotional development."
                            },
                            {
                                icon: <Utensils className="w-8 h-8 text-orange-500" />,
                                title: "Malnutrition",
                                content: "Impacts cognitive development and health, directly hindering a child's ability to learn and thrive."
                            },
                            {
                                icon: <Cpu className="w-8 h-8 text-orange-500" />,
                                title: "Limited Access to Technology",
                                content: "The digital divide prevents children from acquiring crucial tech skills, leaving them unprepared for future job markets."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Leadership</h2>
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Rebecca Samuel</h3>
                                <p className="text-orange-500 font-medium mb-4">President & Co-Founder</p>
                                <p className="text-gray-600 mb-4">
                                    Rebecca's visionary leadership drives our mission to create systemic change in African education and child welfare.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Chukwudumebi Boakye Nwosu</h3>
                                <p className="text-orange-500 font-medium mb-4">Co-Founder</p>
                                <p className="text-gray-600">
                                    With expertise in technology and community development, Chukwudumebi ensures our solutions are both innovative and sustainable.
                                </p>
                            </div>
                        </div>
                        <div className="order-2 lg:order-1 flex justify-center">
                            <div className="relative w-full max-w-md">
                                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                                    <img 
                                        src={coFounderImage} 
                                        alt="Let a Girl Dream Foundation Co-Founders"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-6 py-2 rounded-full shadow-lg">
                                    <span className="font-bold">Meet Our Team</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="py-20 bg-gradient-to-br from-orange-600 to-yellow-600 text-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-8">Our Commitment</h2>
                    <p className="text-xl mb-8 leading-relaxed max-w-4xl">
                        Fueling Dreams, Building Futures: Transforming statistics into stories of success
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                            <h3 className="text-2xl font-bold mb-4">Sustainable Solutions</h3>
                            <p className="mb-6">
                                We don't just provide aid; we build sustainable solutions. By creating digital learning hubs powered by technologies like the C3 Micro-Cloud, training local teachers, and ensuring access to safe housing and nutritious meals.
                            </p>
                            <div className="flex items-center gap-2 text-orange-200">
                                <Star className="w-5 h-5" />
                                <span className="font-medium">Investing in African brilliance</span>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                            <h3 className="text-2xl font-bold mb-4">Comprehensive Approach</h3>
                            <p className="mb-6">
                                We address core challenges through programs in education, safe housing, nutrition, and outreach to empower the next generation of African leaders, innovators, and world-changers.
                            </p>
                            <div className="flex items-center gap-2 text-orange-200">
                                <Users className="w-5 h-5" />
                                <span className="font-medium">Reaching forgotten communities</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Join Our Movement</h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Help us nurture dreams and build a future where every African child can shine brightly
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
                        <Star className="w-6 h-6" />
                        Get Involved Today
                    </button>
                </div>
            </section>
        </div>
    );
};

export default FoundationAboutUs;