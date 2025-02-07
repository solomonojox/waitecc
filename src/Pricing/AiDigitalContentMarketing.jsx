import React from 'react';
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";

const pricingPlans = [
    {
        title: "Basic Plan",
        price: "₦500,000",
        duration: "/month",
        features: [
            "Social media scheduling & content curation",
            "Basic engagement tracking",
            "Monthly performance overview",
            "Access to standard templates for posts"
        ],
        bgColor: "bg-blue-100",
        buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
        title: "Standard Plan",
        price: "₦1,500,000",
        duration: "/month",
        features: [
            "Everything in Basic",
            "Audience targeting & segmentation",
            "Bi-weekly performance reports with insights",
            "Custom graphics and branding support",
            "AI-powered analytics for content optimization"
        ],
        bgColor: "bg-blue-100",
        buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
        title: "Premium Plan",
        price: "₦5,000,000",
        duration: "/month",
        features: [
            "Everything in Standard",
            "Advanced AI insights for trend prediction",
            "Automated content scheduling & performance monitoring",
            "Dedicated ad management & A/B testing",
            "Influencer marketing strategy implementation",
            "Weekly detailed analytics reports"

        ],
        bgColor: "bg-blue-100",
        buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
        title: "Customized Plan",
        price: "Contact us for a tailored solution",
        duration: "",
        features: [
            "Personalized strategy based on your brand’s needs",
            "Exclusive AI tools for high-converting campaigns",
            "Specialized campaign execution with ongoing adjustments",
            "Dedicated account manager",
            "Access to priority support and additional custom services",
        ],
        bgColor: "bg-green-100",
        buttonColor: "bg-green-600 hover:bg-green-700",
    },
];

const AiDigitalContentMarketing = () => {
    return (
        <div className='flex flex-col items-center flex-wrap gap-4 py-8'>
            <h1 className='text-[3vmax] md:text-[2vmax] font-semibold'>AI-Powered Digital & Content Marketing</h1>
            <div className="flex justify-center flex-wrap gap-4 py-8">
                {pricingPlans.map((plan, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className={`rounded-md shadow-md w-[300px] overflow-hidden hover:border-blue-500 bg-white`}
                    >
                        <div className={`${plan.bgColor} p-6 text-center`}>
                            <h2 className="text-2xl font-semibold">{plan.title}</h2>
                        </div>
                        <div className="bg-white p-6">
                            <p className="text-3xl font-bold text-blue-600 mb-6">
                                {plan.price}
                                <span className="text-lg font-normal">{plan.duration}</span>
                            </p>
                            <ul className="text-left space-y-2 mb-6">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <FaCircleCheck className="mr-2 text-blue-600 w-[10%]" />
                                        <span className='w-[90%]'>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`${plan.buttonColor} text-white px-6 py-2 rounded-lg transition-colors`}>
                                {plan.title === "Customized Plan" ? "Contact Us" : "Choose Plan"}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default AiDigitalContentMarketing