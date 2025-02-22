import { FaCalendarCheck, FaUsers, FaBullseye, FaChartLine } from "react-icons/fa";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import WhatsApp from "../Components/WhatsApp";
import BrandSocialMediaManagement from "../Pricing/BrandSocialMediaManagement";
import assets from "../Assets/assets";
import { useEffect } from "react";

export default function BSM() {
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
        <div className="relative bg-cover bg-center h-64 flex items-center justify-center text-white text-center px-4"
          style={{ backgroundImage: `url(${assets.sm})` }}>
          <div className="bg-black bg-opacity-50 p-6 rounded-lg">
            <h1 className="text-4xl font-bold">Brand & Social Media Management</h1>
            <p className="text-lg mt-2">Helping businesses grow through strategic online engagement.</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto mt-12">
          <p className="text-lg text-gray-700 text-center">
            With <span className="font-bold text-blue-600">90% of consumers</span> engaging with brands on social media, we ensure your business maintains a <span className="font-bold text-blue-600">strong, engaging, and results-driven presence.</span>
          </p>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Feature 1 */}
            <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
              <FaCalendarCheck className="text-blue-600 text-4xl" />
              <div>
                <h2 className="text-xl font-semibold">Content Calendar Planning</h2>
                <p className="text-gray-600">Ensures consistency, increasing engagement by <span className="font-bold text-blue-600">40%</span>.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
              <FaUsers className="text-blue-600 text-4xl" />
              <div>
                <h2 className="text-xl font-semibold">Community Management</h2>
                <p className="text-gray-600">Boosts audience interaction by <span className="font-bold text-blue-600">60%</span>.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
              <FaBullseye className="text-blue-600 text-4xl" />
              <div>
                <h2 className="text-xl font-semibold">Social Media Advertising</h2>
                <p className="text-gray-600">Lowers cost-per-click by <span className="font-bold text-blue-600">35%</span>.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white shadow-md p-6 rounded-lg flex items-center gap-4">
              <FaChartLine className="text-blue-600 text-4xl" />
              <div>
                <h2 className="text-xl font-semibold">Analytics-Driven Optimization</h2>
                <p className="text-gray-600">Improves ad effectiveness by <span className="font-bold text-blue-600">50%</span>.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <WhatsApp />
          </div>
        </div>
      </div>

      <BrandSocialMediaManagement />

      <Footer />
    </div>
  );
}