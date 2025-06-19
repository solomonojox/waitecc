import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";

const pricingPlans = [
    {
        title: "Basic Website",
        price: 350000,
        duration: "(1-3 Pages)",
        features: [
            "Custom design tailored to your brand",
            "Up to 3 pages (e.g., Home, About Us, Contact)",
            "Mobile-responsive design (optimized for mobile and tablet)",
            "Basic contact form for easy customer inquiries",
            "Social media links integration",
            "Basic security features (SSL encryption)",
            "Content management system (CMS) for easy updates"
        ],
        bgColor: "bg-blue-100",
        buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
        title: "Standard Website",
        price: 450000,
        duration: "(5-10 Pages with Basic SEO)",
        features: [
            "Custom website design and layout based on your branding",
            "Up to 10 pages (e.g., Home, About Us, Services, Blog, Contact, etc.)",
            "Basic SEO optimization (on-page SEO for better visibility in search engines)",
            "Integration with Google Analytics to track site performance",
            "Mobile-responsive and optimized design",
            "Contact form with CAPTCHA for spam protection",
            "Integration with social media platforms (e.g., Facebook, Instagram)",
            "Basic security features (SSL encryption)",
            "CMS (Content Management System) for easy content updates"
        ],
        bgColor: "bg-blue-100",
        buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
        title: "E-commerce Website",
        price: 2500000,
        duration: "(Full Store Setup & Payment Integration)",
        features: [
            "Fully customized e-commerce store design",
            "Product catalog setup (up to 50 products initially)",
            "Payment gateway integration (Paystack, Flutterwave, etc.)",
            "Secure checkout process (SSL encryption)",
            "Shopping cart functionality with inventory management",
            "Order tracking and email notifications",
            "Customer account creation for easy reordering",
            "Basic SEO optimization for product pages",
            "Mobile-responsive design",
            "Content Management System (CMS) to easily manage products, orders, and content",
            "Integration with social media for product sharing",
            "Basic security measures to protect customer data"
        ],
        bgColor: "bg-blue-100",
        buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
        title: "Mobile App",
        price: "Contact us for a tailored solution",
        duration: "",
        features: [
            "Native mobile app development (for iOS and/or Android)",
            "User-friendly interface (UI) design tailored to your brand",
            "User authentication (sign-up, login, password recovery)",
            "Integration with backend systems for data syncing",
            "Push notifications for user engagement",
            "Integration with payment gateways for transactions (if required)",
            "Mobile-responsive features",
            "Basic security features to protect user data",
            "App store submission (Google Play Store, Apple App Store)",
            "Maintenance and updates for a specified period after launch"
        ],
        bgColor: "bg-green-100",
        buttonColor: "bg-green-600 hover:bg-green-700",
    },
];

const WebsiteMobileAppDevelopmentPricing = () => {
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
            <h1 className='text-[3vmax] md:text-[2vmax] font-semibold text-center'>Website & Mobile App Development Pricing</h1>
            <div className="flex justify-center flex-wrap gap-4 px-4 lg:px-0 py-8">
                {pricingPlans.map((plan, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.05 }} className={`rounded-md shadow-md md:w-[280px] overflow-hidden hover:border-blue-500 bg-white`}>
                        <div className={`${plan.bgColor} p-6 text-center`}>
                            <h2 className="text-2xl font-semibold">{plan.title}</h2>
                        </div>
                        <div className="bg-white p-6">
                            <p className="text-3xl font-bold text-blue-600 mb-6">
                                {typeof plan.price === "number" ? `${currency}${formatAmount(plan.price * conversionRate)}` : plan.price}
                                <span className="text-lg font-normal"> {plan.duration}</span>
                            </p>
                            <ul className="text-left space-y-2 mb-6">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <FaCircleCheck className="mr-2 text-blue-600 w-[10%]" />
                                        <span className='w-[90%]'>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`${plan.buttonColor} text-white px-6 py-2 rounded-lg transition-colors`} onClick={() =>window.open("https://forms.gle/fr2Pi23Dco3sbySCA", "_blank")}>
                                {plan.title === "Mobile App" ? "Contact Us" : "Choose Plan"}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default WebsiteMobileAppDevelopmentPricing;
