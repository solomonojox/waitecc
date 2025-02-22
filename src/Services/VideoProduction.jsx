import { FaVideo, FaFilm, FaBullhorn, FaYoutube } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WhatsApp from "../Components/WhatsApp";
import assets from "../Assets/assets";
import { useEffect } from "react";
import VideoProductionPricing from "../Pricing/VideoProductionPricing";

export default function VideoProduction() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>

            <div className="bg-gray-100 py-6 px-6">
                {/* Header Section */}
                <div
                    className="relative bg-cover bg-center h-64 flex items-center justify-center text-white text-center px-4"
                    style={{ backgroundImage: `url(${assets.video})` }}
                >
                    <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                        <h1 className="text-4xl font-bold">Video Production</h1>
                        <p className="text-lg mt-2">Engaging videos that drive conversions and maximize audience impact.</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-5xl mx-auto mt-12">
                    <p className="text-lg text-gray-700 text-center">
                        Video content generates <span className="font-bold text-blue-600">1200%</span> more shares than text and images combined, making it essential for engagement and conversions.
                    </p>

                    {/* Features Section */}
                    <div className="grid md:grid-cols-2 gap-8 mt-10">
                        {/* Feature 1 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaVideo className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">High-Quality Video Scripting & Production</h2>
                                <p className="text-gray-600">Increases audience retention by <span className="font-bold text-blue-600">85%</span>.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaFilm className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">Animated Explainer Videos</h2>
                                <p className="text-gray-600">Boosts conversion rates by <span className="font-bold text-blue-600">30%</span>.</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaBullhorn className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">Social Media Video Marketing</h2>
                                <p className="text-gray-600">Improves ad performance by <span className="font-bold text-blue-600">50%</span>.</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaYoutube className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">YouTube SEO & Video Optimization</h2>
                                <p className="text-gray-600">Enhances video reach by <span className="font-bold text-blue-600">40%</span>.</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12 text-center">
                        <WhatsApp />
                    </div>
                </div>
            </div>

            <VideoProductionPricing />

            <Footer />
        </div>
    );
}