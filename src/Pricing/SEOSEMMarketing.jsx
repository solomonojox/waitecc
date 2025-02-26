import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";

const pricingPlans = [
    {
        title: "Basic Plan",
        price: 650000,
        duration: "/month",
        features: [
            "On-page SEO optimization",
            "Keyword research & competitor analysis",
            "Meta tag and URL optimization",
            "Monthly performance report"
        ],
        bgColor: "bg-blue-100",
        buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
        title: "Standard Plan",
        price: 1200000,
        duration: "/month",
        features: [
            "Everything in Basic",
            "Backlink strategy & implementation",
            "Local SEO optimization for Google My Business",
            "Image & content optimization for better rankings",
            "Bi-weekly SEO performance reports"
        ],
        bgColor: "bg-blue-100",
        buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
        title: "Premium Plan",
        price: 2000000,
        duration: "/month",
        features: [
            "Everything in Standard",
            "Comprehensive SEO audit & strategy",
            "Google Ads campaign setup & management",
            "Technical SEO & site speed optimization",
            "AI-driven keyword ranking insights",
            "Weekly reports with actionable recommendations"
        ],
        bgColor: "bg-blue-100",
        buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
];

const SEOSEMMarketingPricing = () => {
    const [currency, setCurrency] = useState("₦");
    const [conversionRate, setConversionRate] = useState(1);

    const formatAmount = (amt) =>
        amt
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    useEffect(() => {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
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
            <h1 className='text-[3vmax] md:text-[2vmax] font-semibold'>SEO & SEM Marketing Pricing</h1>
            <div className="flex justify-center flex-wrap gap-4 px-4 py-8">
                {pricingPlans.map((plan, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className={`rounded-md shadow-md lg:w-[300px] overflow-hidden hover:border-blue-500 bg-white`}
                    >
                        <div className={`${plan.bgColor} p-6 text-center`}>
                            <h2 className="text-2xl font-semibold">{plan.title}</h2>
                        </div>
                        <div className="bg-white p-6">
                            <p className="text-3xl font-bold text-blue-600 mb-6">
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
                            <button className={`${plan.buttonColor} text-white px-6 py-2 rounded-lg transition-colors`}>Choose Plan</button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default SEOSEMMarketingPricing;
