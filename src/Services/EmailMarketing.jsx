import { FaUsersCog, FaEnvelopeOpenText, FaFlask, FaRetweet } from "react-icons/fa";
import WhatsApp from "../Components/WhatsApp";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import assets from "../Assets/assets";
import { useEffect } from "react";

export default function EmailMarketing() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>

            <div className="bg-gray-100 py-6 ">
                {/* Header Section */}
                <div
                    className="relative bg-cover bg-center h-64 flex items-center justify-center text-white text-center px-4"
                    style={{ backgroundImage: `url(${assets.email})` }}
                >
                    <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                        <h1 className="text-4xl font-bold">Email Marketing</h1>
                        <p className="text-lg mt-2">Maximizing ROI through strategic email campaigns.</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-5xl mx-6 mt-12">
                    <p className="text-lg text-gray-700 text-center">
                        Email marketing delivers an <span className="font-bold text-blue-600">ROI of $42 for every $1 spent</span>, making it one of the most effective digital marketing strategies.
                    </p>

                    {/* Features Section */}
                    <div className="grid md:grid-cols-2 gap-8 mt-10">
                        {/* Feature 1 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaUsersCog className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">AI-Driven Audience Segmentation</h2>
                                <p className="text-gray-600">Increases open rates by <span className="font-bold text-blue-600">35%</span>.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaEnvelopeOpenText className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">Personalized Email Automation</h2>
                                <p className="text-gray-600">Boosts click-through rates by <span className="font-bold text-blue-600">25%</span>.</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaFlask className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">A/B Testing for Optimization</h2>
                                <p className="text-gray-600">Improves conversion rates by <span className="font-bold text-blue-600">20%</span>.</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaRetweet className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">Drip Campaigns for Lead Nurturing</h2>
                                <p className="text-gray-600">Reduces customer churn by <span className="font-bold text-blue-600">30%</span>.</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12 text-center">
                        <WhatsApp />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
