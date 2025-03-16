import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";

const pricingPlans = [
    { title: "Basic Plan", price: 500000, duration: "/month", features: ["Social media scheduling & content curation", "Basic engagement tracking", "Monthly performance overview", "Access to standard templates for posts"], bgColor: "bg-blue-100", buttonColor: "bg-blue-600 hover:bg-blue-700" },
    { title: "Standard Plan", price: 1500000, duration: "/month", features: ["Everything in Basic", "Audience targeting & segmentation", "Bi-weekly performance reports with insights", "Custom graphics and branding support", "AI-powered analytics for content optimization"], bgColor: "bg-blue-100", buttonColor: "bg-blue-600 hover:bg-blue-700" },
    { title: "Premium Plan", price: 5000000, duration: "/month", features: ["Everything in Standard", "Advanced AI insights for trend prediction", "Automated content scheduling & performance monitoring", "Dedicated ad management & A/B testing", "Influencer marketing strategy implementation", "Weekly detailed analytics reports"], bgColor: "bg-blue-100", buttonColor: "bg-blue-600 hover:bg-blue-700" },
    { title: "Customized Plan", price: "Contact us for a tailored solution", duration: "", features: ["Personalized strategy based on your brand’s needs", "Exclusive AI tools for high-converting campaigns", "Specialized campaign execution with ongoing adjustments", "Dedicated account manager", "Access to priority support and additional custom services"], bgColor: "bg-green-100", buttonColor: "bg-green-600 hover:bg-green-700" }
];

const AiDigitalContentMarketing = () => {
    const [currency, setCurrency] = useState("₦");
    const [conversionRate, setConversionRate] = useState(1);

    const formatAmount = (amt) =>
        amt
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    useEffect(() => {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        console.log(timeZone)
        if (timeZone.includes("Europe")) {
            setCurrency("£");
            setConversionRate(1 / 800);
        } else if (timeZone !== "Africa/Lagos") {
            setCurrency("$");
            setConversionRate(1 / 800);
        }
    }, []);

    return (
        <div className='flex flex-col items-center flex-wrap gap-4 py-8'>
            <h1 className='text-[4vmax] md:text-[2vmax] font-semibold text-center'>AI-Powered Digital & Content Marketing</h1>
            <div className="flex justify-center flex-wrap gap-8 md:gap-4 px-4 py-8">
                {pricingPlans.map((plan, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.05 }} className={`rounded-md shadow-md lg:w-[280px] overflow-hidden hover:border-blue-500 bg-white`}>
                        <div className={`${plan.bgColor} p-6 text-center`}>
                            <h2 className="text-2xl font-semibold">{plan.title}</h2>
                        </div>
                        <div className="bg-white p-4">
                            <p className="text-2xl font-bold text-blue-600 mb-6">
                                {typeof plan.price === "number" ? `${currency}${formatAmount(plan.price * conversionRate)}` : plan.price}
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

export default AiDigitalContentMarketing;
