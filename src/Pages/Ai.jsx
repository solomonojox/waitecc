import { useLocation } from "react-router-dom"
import Navbar from "../Components/Navbar"

import { FaWhatsapp } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import AiDigitalContentMarketing from "../Pricing/AiDigitalContentMarketing";

const Ai = () => {
  const location = useLocation()
  const info = location.state
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="bg-gray-100 text-gray-900 flex items-center justify-center">
        <div className="w-full p-6">
          <div className="lg:p-8">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
              Harness AI-Driven Marketing
            </h1>
            <p className="text-lg text-center mb-6">
              Personalize, automate, and optimize campaigns, increasing conversions by up to
              <span className="font-semibold text-green-600"> 50% </span> and engagement by
              <span className="font-semibold text-green-600"> 80% </span>. Our data-backed approach ensures that your brand reaches the right audience at the right time.
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features & Measurable Results:</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4 bg-blue-50 p-4 rounded-lg">
                  <span className="text-blue-600 text-xl">✔</span>
                  <span className="text-lg">
                    AI-powered content generation <span className="text-green-600 font-semibold">(increases efficiency by 60%)</span>
                  </span>
                </li>
                <li className="flex items-start space-x-4 bg-green-50 p-4 rounded-lg">
                  <span className="text-green-600 text-xl">✔</span>
                  <span className="text-lg">
                    Predictive analytics for audience targeting <span className="text-green-600 font-semibold">(boosts ad ROI by 30%)</span>
                  </span>
                </li>
                <li className="flex items-start space-x-4 bg-yellow-50 p-4 rounded-lg">
                  <span className="text-yellow-600 text-xl">✔</span>
                  <span className="text-lg">
                    Automated social media and email campaigns <span className="text-green-600 font-semibold">(saves up to 20+ hours per week)</span>
                  </span>
                </li>
                <li className="flex items-start space-x-4 bg-red-50 p-4 rounded-lg">
                  <span className="text-red-600 text-xl">✔</span>
                  <span className="text-lg">
                    Sentiment analysis for better brand positioning <span className="text-green-600 font-semibold">(improves customer perception by 35%)</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <AiDigitalContentMarketing/>
    </div>
  )
}

export default Ai