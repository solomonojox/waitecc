import React from 'react';
import { BookOpen, Cpu, WifiOff, Users, Globe, Battery, Download, Code, Rocket, School } from 'lucide-react';
import { schoolprojectImage } from '../../Assets/donation/donationImage';
import Navbar from '../Navbar';

const TheSchoolProject = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${schoolprojectImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                
                <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
                        The School Project
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-light mb-8">
                        Nurturing Minds, Building Futures
                    </h2>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">What is the C3 Micro-Cloud?</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            The C3 Micro-Cloud, or "Classroom in the Cloud," is a compact, digital education server designed to deliver high-quality educational resources to areas without reliable internet. It functions as a self-contained content hub, allowing students and teachers to access thousands of books, videos, apps, and interactive learning tools offline.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mt-4">
                            This solution is lightweight, cost-effective, and easy to maintain, making it perfect for rural schools, remote learning centers, refugee camps, and other low-resource environments.
                        </p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features of the C3 Micro-Cloud</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: <WifiOff className="w-8 h-8" />, title: "Offline-First Design", desc: "Operates without internet, preloaded with open-source educational content" },
                                { icon: <Download className="w-8 h-8" />, title: "Plug-and-Play Setup", desc: "Simple installation requiring minimal technical knowledge" },
                                { icon: <Users className="w-8 h-8" />, title: "Multi-User Support", desc: "Connects to laptops, tablets, or phones via Wi-Fi" },
                                { icon: <BookOpen className="w-8 h-8" />, title: "Curated Content Libraries", desc: "Includes resources from Wikipedia, Khan Academy, CK-12, TED Talks" },
                                { icon: <Globe className="w-8 h-8" />, title: "Customizability", desc: "Supports addition of local curriculum and languages" },
                                { icon: <Battery className="w-8 h-8" />, title: "Low Power Consumption", desc: "Can be powered by solar energy or standard battery packs" }
                            ].map((feature, index) => (
                                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                                    <div className="text-orange-500 mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Partnership Section */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Partnership with Funlings</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Funlings, a leading edtech initiative, is transforming how children engage with technology by making robotics, coding, and AI fun and accessible. Our mission is to democratize access to critical 21st-century skills, ensuring that even children in under-resourced communities can become the innovators of tomorrow.
                        </p>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <School className="w-6 h-6 text-orange-500" />
                                    Impact in East Africa: A Proven Model
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Funlings has already established a powerful footprint by partnering with organizations like the Lewa Education Program in Kenya. Through this collaboration, they have successfully extended our educational reach to underserved regions, demonstrating the profound impact of our approach.
                                </p>
                                <p className="text-gray-600">
                                    They provide custom, child-friendly coding, robotics, and AI content, tailored for ages 6 to 17, featuring interactive lessons and gamified modules.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <Globe className="w-6 h-6 text-orange-500" />
                                    Expanding Our Reach: Bringing Innovation to West Africa
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    The Let a Girl Dream Foundation, in partnership with Funlings Entertainment and Boakye Digital, are joining forces to deploy our impactful educational solutions across the region.
                                </p>
                                <p className="text-gray-600">
                                    Our goal is clear: to equip underserved students in West Africa with the foundational knowledge and skills they need to thrive in a rapidly evolving digital world.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Role and Contributions */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Role and Contributions</h2>
                        <div className="space-y-8">
                            {[
                                { 
                                    icon: <Code className="w-8 h-8" />, 
                                    title: "Content Integration", 
                                    desc: "We provide custom, child-friendly coding, robotics, and AI learning content for the C3 Micro-Cloud system. This content is tailored for kids aged 6 to 17, offering interactive lessons, visual explanations, local language support, and gamified learning modules."
                                },
                                { 
                                    icon: <Cpu className="w-8 h-8" />, 
                                    title: "Deployment Partnership", 
                                    desc: "In collaboration with the Lewa Education Program, Funlings has assisted in deploying the C3 Micro-Cloud across eight schools in Lewa, Kenya. They ensure these micro-clouds are equipped with both national curriculum resources and STEM innovation material."
                                },
                                { 
                                    icon: <Users className="w-8 h-8" />, 
                                    title: "Teacher Training & Onboarding", 
                                    desc: "We conduct workshops to train educators on effective micro-cloud usage, content navigation, and integration into lesson planning. This empowers local teachers to become digital facilitators."
                                },
                                { 
                                    icon: <Rocket className="w-8 h-8" />,
                                    title: "Student-Centered Approach", 
                                    desc: "We design our modules to ignite curiosity, creativity, and critical thinking, even without access to high-end devices or fast internet. Children learn foundational coding for games, understand AI ethics, build basic robots, and apply design thinking."
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-6">
                                    <div className="text-orange-500 mt-1">{item.icon}</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">About Let a Girl Dream Foundation</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Why African Children Need Empowerment</h3>
                            <p className="text-gray-600 mb-4">
                                In Sub-Saharan Africa, 32 million children of primary school age remain out of school, while millions more attend but learn very little. By grade 4, 90% of African children cannot read and understand a simple story. These statistics represent not just educational failure, but a crisis of human potential.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Yet the digital divide is even more staggering - while 60% of the global population uses the internet, in Africa this drops to just 28%. In rural areas, it's less than 10%. This technological exclusion means African children are being prepared for yesterday's world, not tomorrow's.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Our work addresses these gaps through three pillars: <strong>access</strong> (bringing technology to where children are), <strong>relevance</strong> (content that connects to local contexts), and <strong>empowerment</strong> (skills that unlock opportunities).
                            </p>
                            <p className="text-gray-600">
                                Under the leadership of President and Co-founder Rebecca Samuel, we've proven that when given the right tools, African children not only catch up - they lead. Our students in Kenya using the C3 Micro-Cloud system show 3x improvement in digital literacy within 6 months, and 68% better retention of STEM concepts.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Vision for Digital Education</h3>
                            <p className="text-gray-600 mb-4">
                                We envision an Africa where every child, regardless of location or economic background, can access world-class digital education. Where a girl in rural Ghana has the same learning opportunities as a boy in Silicon Valley. Where limitations become launchpads for innovation.
                            </p>
                            <p className="text-gray-600 mb-4">
                                The C3 Micro-Cloud represents more than technology - it's a bridge across the digital divide. Each unit we deploy creates a ripple effect:
                            </p>
                            <ul className="text-gray-600 mb-6 space-y-3">
                                <li className="flex items-start gap-2"><span className="text-orange-500">•</span> <span>50-100 children gain immediate access to digital learning</span></li>
                                <li className="flex items-start gap-2"><span className="text-orange-500">•</span> <span>Teachers transform into digital facilitators</span></li>
                                <li className="flex items-start gap-2"><span className="text-orange-500">•</span> <span>Communities develop local tech ecosystems</span></li>
                                <li className="flex items-start gap-2"><span className="text-orange-500">•</span> <span>Students become creators, not just consumers of technology</span></li>
                            </ul>
                            <p className="text-gray-600">
                                This is how we're rewriting Africa's educational narrative - one micro-cloud, one school, one child at a time. The future isn't something we wait for - it's something we build together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TheSchoolProject;