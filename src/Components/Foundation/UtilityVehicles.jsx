import React from 'react';
import { Truck, MapPin, Package, Globe, Users, Compass } from 'lucide-react';
import Navbar from '../Navbar';
// import vehiclesBg from '../Assets/vehicles-bg.jpg'; // Replace with your actual image path

const UtilityVehicles = () => {
    const handlePaystackRedirect = () => {
        window.open('https://paystack.shop/pay/redtqnozka', '_blank');
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    // style={{ backgroundImage: `url(${vehiclesBg})` }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                
                <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                        Utility Vehicles for Outreach
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-light mb-8">
                        Expanding Our Impact
                    </h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Reaching the most isolated communities is crucial for our mission.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Mobility That Makes a Difference</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our investment in utility vehicles ensures our programs reach where they're needed most
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="bg-blue-50 rounded-2xl p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-blue-500 text-white p-3 rounded-xl">
                                        <Package className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Delivering to Forgotten Areas</h3>
                                </div>
                                <p className="text-gray-600">
                                    These robust vehicles enable us to transport essential educational materials, food supplies, and other vital resources to remote villages and schools that are often beyond the reach of standard infrastructure.
                                </p>
                            </div>

                            <div className="bg-purple-50 rounded-2xl p-8 mt-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-purple-500 text-white p-3 rounded-xl">
                                        <Globe className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Expanding Regional Impact</h3>
                                </div>
                                <p className="text-gray-600">
                                    By overcoming geographical barriers, our utility vehicles allow us to significantly expand our humanitarian and educational footprint, reaching more underserved students and communities and ensuring no child is left behind.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl overflow-hidden">
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Vehicle Program Impact</h3>
                                <div className="space-y-6">
                                    {[
                                        { icon: <MapPin className="w-6 h-6 text-blue-500" />, text: "Reaching 15+ remote communities previously inaccessible" },
                                        { icon: <Truck className="w-6 h-6 text-blue-500" />, text: "3 specialized vehicles covering 500+ km weekly" },
                                        { icon: <Users className="w-6 h-6 text-blue-500" />, text: "Serving 2,000+ additional children through mobile outreach" },
                                        { icon: <Compass className="w-6 h-6 text-blue-500" />, text: "Mobile digital classrooms reaching nomadic populations" },
                                        { icon: <Package className="w-6 h-6 text-blue-500" />, text: "Delivering 5 tons of supplies monthly" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            {item.icon}
                                            <p className="text-gray-600 flex-1">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Mobility Matters</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Breaking barriers to deliver opportunity where it's needed most
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Remote Education Gap",
                                content: "Over 30% of rural African children lack access to educational resources available in urban centers.",
                                stat: "30%"
                            },
                            {
                                title: "Our Reach Expansion",
                                content: "Each vehicle increases our service area by 200%, reaching previously isolated communities.",
                                stat: "200%"
                            },
                            {
                                title: "Cost Efficiency",
                                content: "Every $1 invested in mobility yields $8 in program effectiveness through expanded reach.",
                                stat: "8x"
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                <div className="text-4xl font-bold text-blue-500 mb-4">{item.stat}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Help Us Go Further</h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Your support keeps our vehicles running and our outreach expanding to reach every child.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto" onClick={handlePaystackRedirect}>
                        <Truck className="w-6 h-6" />
                        Make a donation now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default UtilityVehicles;