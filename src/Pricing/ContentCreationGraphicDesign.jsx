import React from "react";
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";

const plans = [
    {
        title: "Basic Plan",
        price: "₦150,000",
        duration: "/month",
        features: [
            "15 custom designs per month (graphics and videos)",
            "Standard social media graphics",
            "Basic revisions included"
        ],
        bgColor: "bg-green-100",
        buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
        title: "Standard Plan",
        price: "₦500,000",
        duration: "/month",
        features: [
            "Everything in Basic (graphics, videos, Infographics, carousels, articles)",
            "20 designs per month",
            "Copywriting included",
            "Priority design revisions"
        ],
        bgColor: "bg-green-100",
        buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
        title: "Premium Plan",
        price: "₦1,200,000",
        duration: "/month",
        features: [
            "30 graphics and video per month(graphics, videos, carousels, Infographics, motion graphics, articles)",
            "Premium content creation",
            "Advanced visual effects & animations",
            "Personalized branding strategy"
        ],
        bgColor: "bg-green-100",
        buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
        title: "Customized Plan",
        price: "Contact us for a custom quote",
        duration: "",
        features: [
            "Fully customized design packages",
            "Dedicated graphic designer support",
            "Specialized branding elements & creative direction"

        ],
        bgColor: "bg-purple-100",
        buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
];

const ContentCreationGraphicDesign = () => {
    return (
        <div className="flex flex-col items-center flex-wrap gap-4 py-8 bg-green-50">
            <h1 className="text-[3vmax] md:text-[2vmax] font-semibold">
                Content Creation & Graphic Design
            </h1>
            <div className="flex justify-center flex-wrap gap-4 py-8">
                {plans.map((plan, index) => (
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
                                        <FaCircleCheck className="mr-2 text-green-600 w-[10%]" />
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
    );
};

export default ContentCreationGraphicDesign;