import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";

const pricingPlans = [
    {
        title: "15-Second Video",
        price: 25000,
        duration: "",
        features: [
            "High-quality short-form video",
            "Basic animations & transitions",
            "Standard background music",
            "1 revision included",
        ],
        bgColor: "bg-blue-100",
        buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
        title: "20-Second Video",
        price: 35000,
        duration: "",
        features: [
            "Everything in 15-second video",
            "Custom branding elements",
            "2 revisions included",
        ],
        bgColor: "bg-blue-100",
        buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
        title: "30-Second Video",
        price: 45000,
        duration: "",
        features: [
            "Everything in 20-second video",
            "Professional voice-over (optional)",
            "Advanced editing & effects",
            "3 revisions included",
        ],
        bgColor: "bg-blue-100",
        buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
        title: "1-Minute Video",
        price: 50000,
        duration: "",
        features: [
            "Everything in 30-second video",
            "Scriptwriting assistance",
            "Multiple scene transitions",
            "5 revisions included",
        ],
        bgColor: "bg-green-100",
        buttonColor: "bg-green-600 hover:bg-green-700",
    },
];

const VideoProductionPricing = () => {
    const [currency, setCurrency] = useState("₦");
    const [exchangeRate, setExchangeRate] = useState(1);

    const formatAmount = (amt) =>
        amt
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await fetch("https://ipapi.co/json/");
                const data = await response.json();
                const country = data.country_name;

                if (country === "Nigeria") {
                    setCurrency("₦");
                    setExchangeRate(1);
                } else if (["United Kingdom", "Germany", "France", "Spain", "Italy", "Netherlands", "Belgium"].includes(country)) {
                    setCurrency("£");
                    setExchangeRate(1 / 800);
                } else {
                    setCurrency("$");
                    setExchangeRate(1 / 800);
                }
            } catch (error) {
                console.error("Error fetching location:", error);
            }
        };

        fetchCountry();
    }, []);

    return (
        <div className="flex flex-col items-center flex-wrap gap-4 py-8">
            <h1 className="text-[3vmax] md:text-[2vmax] font-semibold">
                Video Production Pricing
            </h1>
            <div className="flex justify-center flex-wrap gap-4 px-4 py-8">
                {pricingPlans.map((plan, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className={`rounded-md shadow-md w-full md:w-[280px] overflow-hidden hover:border-blue-500 bg-white`}
                    >
                        <div className={`${plan.bgColor} p-6 text-center`}>
                            <h2 className="text-2xl font-semibold">{plan.title}</h2>
                        </div>
                        <div className="bg-white p-4">
                            <p className="text-3xl font-bold text-blue-600 mb-6">
                                {currency} {formatAmount(plan.price * exchangeRate)}
                                <span className="text-lg font-normal">{plan.duration}</span>
                            </p>
                            <ul className="text-left space-y-2 mb-6">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <FaCircleCheck className="mr-2 text-blue-600 w-[10%]" />
                                        <span className="w-[90%]">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`${plan.buttonColor} text-white px-6 py-2 rounded-lg transition-colors`}
                                onClick={() =>window.open("https://forms.gle/fr2Pi23Dco3sbySCA", "_blank")}
                            >
                                Choose Plan
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default VideoProductionPricing;
