import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Waitecc</h3>
          <p className="text-gray-400">
            Elevate Your Brand with Cutting-Edge AI-Powered Digital Solutions. Let’s build your brand’s digital dominance, one strategy at a time!
          </p>
          <div className="mt-4 space-y-2">
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +234-810-582-6279, +234-807-799-3190
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> waiteccng@outlook.com
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Lagos, Nigeria
            </p>
            <p className="flex items-center gap-2">
              <FaGlobe /> <a href="https://www.waitecc.com.ng" className="hover:underline">www.waitecc.com.ng</a>
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:text-white">Home</a>
            </li>
            <li>
              <a href="/services" className="text-gray-400 hover:text-white">Services</a>
            </li>
            <li>
              <a href="/pricing" className="text-gray-400 hover:text-white">Pricing</a>
            </li>
            <li>
              <a href="/team" className="text-gray-400 hover:text-white">Meet the Team</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get a Free Consultation!</h3>
          <p className="text-gray-400 mb-4">
            Let's discuss your brand's needs today and find solutions that drive success.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
            Contact Us
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Waitecc. All rights reserved.</p>
      </div>
    </footer>
  );
}
