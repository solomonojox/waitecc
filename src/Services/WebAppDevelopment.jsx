import { FaMobileAlt, FaSearch, FaShoppingCart, FaPaintBrush } from "react-icons/fa";
import WhatsApp from "../Components/WhatsApp";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import assets from "../Assets/assets";
import { useEffect } from "react";
import WebsiteMobileAppDevelopmentPricing from "../Pricing/WebsiteMobileAppDevelopmentPricing";

export default function WebAppDevelopment() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>

            <div className="bg-gray-100 py-6">
                {/* Header Section */}
                <div
                    className="relative bg-cover bg-center h-72 flex items-center justify-center text-white text-center px-4"
                    style={{ backgroundImage: `url(${assets.web})` }}
                >
                    <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                        <h1 className="text-4xl font-bold">Website & Mobile App Development</h1>
                        <p className="text-lg mt-2">Building high-performance websites and apps for seamless user experiences.</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-5xl mx-6 md:mx-auto mt-12">
                    <p className="text-lg text-gray-700 text-center">
                        A well-optimized website increases conversions by <span className="font-bold text-blue-600">200-400%</span>, and <span className="font-bold text-blue-600">73%</span> of mobile users expect seamless app experiences.
                    </p>

                    {/* Features Section */}
                    <div className="grid md:grid-cols-2 gap-8 mt-10">
                        {/* Feature 1 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaMobileAlt className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">Mobile-Responsive Website Design</h2>
                                <p className="text-gray-600">Improves mobile traffic by <span className="font-bold text-blue-600">50%</span>.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaSearch className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">SEO-Friendly Site Structure</h2>
                                <p className="text-gray-600">Boosts organic search traffic by <span className="font-bold text-blue-600">80%</span>.</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaShoppingCart className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">E-Commerce & Payment Gateway Integration</h2>
                                <p className="text-gray-600">Increases online sales by <span className="font-bold text-blue-600">60%</span>.</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaPaintBrush className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">Custom App Development with UI/UX Optimization</h2>
                                <p className="text-gray-600">Enhances user engagement by <span className="font-bold text-blue-600">70%</span>.</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12 text-center">
                        <WhatsApp />
                    </div>
                </div>
            </div>

            <WebsiteMobileAppDevelopmentPricing/>

            <Footer />
        </div>
    );
}