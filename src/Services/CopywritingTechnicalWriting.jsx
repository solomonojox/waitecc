import { FaPenFancy, FaSearch, FaFileAlt, FaBookOpen } from "react-icons/fa";
import WhatsApp from "../Components/WhatsApp";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import assets from "../Assets/assets";
import { useEffect } from "react";

export default function CopywritingTechnicalWriting() {
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
                    style={{ backgroundImage: `url(${assets.writing})` }}
                >
                    <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                        <h1 className="text-4xl font-bold">Copywriting & Technical Writing</h1>
                        <p className="text-lg mt-2">Crafting compelling content that drives engagement and conversions.</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-5xl mx-auto mt-12">
                    <p className="text-lg text-gray-700 text-center">
                        Well-crafted content increases **conversions by 113%** and significantly enhances **brand credibility**.
                    </p>

                    {/* Features Section */}
                    <div className="grid md:grid-cols-2 gap-8 mt-10">
                        {/* Feature 1 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaPenFancy className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">Persuasive Sales Copywriting</h2>
                                <p className="text-gray-600">Boosts conversion rates by <span className="font-bold text-blue-600">50%</span>.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaSearch className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">SEO-Driven Blog & Article Writing</h2>
                                <p className="text-gray-600">Increases organic traffic by <span className="font-bold text-blue-600">70%</span>.</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaFileAlt className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">Whitepapers & Case Studies</h2>
                                <p className="text-gray-600">Establishes thought leadership with <span className="font-bold text-blue-600">40%</span> more engagement.</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaBookOpen className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">Technical Documentation & Manuals</h2>
                                <p className="text-gray-600">Improves user comprehension by <span className="font-bold text-blue-600">60%</span>.</p>
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