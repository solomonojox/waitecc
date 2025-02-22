import { FaChartLine, FaUsers, FaLightbulb, FaShieldAlt } from "react-icons/fa";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import WhatsApp from "../Components/WhatsApp";
import assets from "../Assets/assets";
import { useEffect } from "react";

export default function MarketResearch() {
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
                    style={{ backgroundImage: `url(${assets.research})` }}
                >
                    <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                        <h1 className="text-4xl font-bold">Market Research</h1>
                        <p className="text-lg mt-2">Making data-driven decisions for business growth and market dominance.</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-5xl mx-auto mt-12">
                    <p className="text-lg text-gray-700 text-center">
                        Businesses that leverage data-driven decision-making are <span className="font-bold text-blue-600">23x</span> more likely to outperform competitors and <span className="font-bold text-blue-600">6x</span> more likely to retain customers.
                    </p>

                    {/* Features Section */}
                    <div className="grid md:grid-cols-2 gap-8 mt-10">
                        {/* Feature 1 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaChartLine className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">Competitor Analysis & Industry Trends</h2>
                                <p className="text-gray-600">Provides strategic insights with <span className="font-bold text-blue-600">90% accuracy</span>.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaUsers className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">Consumer Behavior Studies</h2>
                                <p className="text-gray-600">Improves customer targeting by <span className="font-bold text-blue-600">50%</span>.</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaLightbulb className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">Data-Driven Product Positioning</h2>
                                <p className="text-gray-600">Enhances market penetration by <span className="font-bold text-blue-600">40%</span>.</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaShieldAlt className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">Risk Assessment & Forecasting</h2>
                                <p className="text-gray-600">Reduces business risks by <span className="font-bold text-blue-600">30%</span>.</p>
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