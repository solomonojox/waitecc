import { FaPenNib, FaChartLine, FaPalette, FaBrush } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WhatsApp from "../Components/WhatsApp";
import ContentCreationGraphicDesign from "../Pricing/ContentCreationGraphicDesign";
import assets from "../Assets/assets";
import { useEffect } from "react";

export default function ContentCreation() {
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
                    style={{ backgroundImage: `url(${assets.content})` }}
                >
                    <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                        <h1 className="text-4xl font-bold">Content Creation & Graphic Design</h1>
                        <p className="text-lg mt-2">Transforming brands with high-quality content and visuals.</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-5xl mx-auto mt-12">
                    <p className="text-lg text-gray-700 text-center">
                        Content marketing generates <span className="font-bold text-blue-600">3x more leads than paid ads</span>, making high-quality content & visuals essential for brand success.
                    </p>

                    {/* Features Section */}
                    <div className="grid md:grid-cols-2 gap-8 mt-10">
                        {/* Feature 1 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaPenNib className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">AI-Enhanced Blog Writing & Storytelling</h2>
                                <p className="text-gray-600">Improves brand trust by <span className="font-bold text-blue-600">45%</span>.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaChartLine className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">SEO-Optimized Articles & Website Content</h2>
                                <p className="text-gray-600">Drives <span className="font-bold text-blue-600">70% more traffic</span>.</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaPalette className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">Custom Infographics & Social Media Visuals</h2>
                                <p className="text-gray-600">Increases shareability by <span className="font-bold text-blue-600">65%</span>.</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaBrush className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">Brand Identity & Marketing Collateral Design</h2>
                                <p className="text-gray-600">Enhances brand recognition by <span className="font-bold text-blue-600">55%</span>.</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12 text-center">
                        <WhatsApp />
                    </div>
                </div>
            </div>

            <ContentCreationGraphicDesign />

            <Footer />
        </div>
    );
}