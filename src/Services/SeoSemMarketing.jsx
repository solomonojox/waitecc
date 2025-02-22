import { FaSearch, FaLink, FaBullhorn, FaMapMarkerAlt } from "react-icons/fa";
import assets from "../Assets/assets";
import WhatsApp from "../Components/WhatsApp";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useEffect } from "react";
import SEOSEMMarketingPricing from "../Pricing/SEOSEMMarketing";

export default function SeoSemMarketing() {
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
                    style={{ backgroundImage: `url(${assets.seo})` }}
                >
                    <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                        <h1 className="text-4xl font-bold">SEO/SEM Marketing</h1>
                        <p className="text-lg mt-2">Maximizing visibility & lead generation through strategic search marketing.</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-5xl mx-auto mt-12">
                    <p className="text-lg text-gray-700 text-center">
                        With 90% of search traffic going to first-page results, our SEO & paid search strategies ensure maximum visibility and lead generation.
                    </p>

                    {/* Features Section */}
                    <div className="grid md:grid-cols-2 gap-8 mt-10">
                        {/* Feature 1 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaSearch className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">Keyword Research & On-Page Optimization</h2>
                                <p className="text-gray-600">Boosts organic rankings by <span className="font-bold text-blue-600">70%</span>.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaLink className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">Link-Building & Domain Authority Growth</h2>
                                <p className="text-gray-600">Increases domain authority by <span className="font-bold text-blue-600">40%</span>.</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaBullhorn className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">PPC Campaign Setup & Management</h2>
                                <p className="text-gray-600">Lowers cost-per-acquisition by <span className="font-bold text-blue-600">25%</span>.</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
                            <FaMapMarkerAlt className="text-blue-600 text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">Local SEO & Google My Business Optimization</h2>
                                <p className="text-gray-600">Enhances local search presence by <span className="font-bold text-blue-600">50%</span>.</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12 text-center">
                        <WhatsApp />
                    </div>
                </div>
            </div>

            <SEOSEMMarketingPricing/>

            <Footer />
        </div>
    );
}