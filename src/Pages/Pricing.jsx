import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import { FaCircleCheck } from "react-icons/fa6";

const Pricing = () => {
    return (
        <div>

            <div className='flex justify-center flex-wrap gap-2'>
                {/* Basic Plan */}
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center w-[350px]">
                    <h2 className="text-2xl font-semibold mb-4">Standard Plan</h2>
                    <p className="text-3xl font-bold text-blue-600 mb-6">₦500,000<span className="text-lg font-normal">/month</span></p>
                    <ul className="text-left space-y-2 mb-6">
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-blue-600" />Basic engagement tracking</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-blue-600" />Monthly performance overview</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-blue-600" />Access to standard templates for posts</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-gray-600" />Audience targeting & segmentation</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-gray-600" />Bi-weekly performance reports with insights</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-gray-600" />Custom graphics and branding support</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-gray-600" />AI-powered analytics for content optimization</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-gray-600" />Advanced AI insights for trend prediction</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-gray-600" />Automated content scheduling & performance monitoring</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-gray-600" />Dedicated ad management & A/B testing</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-gray-600" />Influencer marketing strategy implementation</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-gray-600" />Weekly detailed analytics reports</li>
                    </ul>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Choose Plan</button>
                </div>
                {/* Standard Plan */}
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center w-[350px]">
                    <h2 className="text-2xl font-semibold mb-4">Standard Plan</h2>
                    <p className="text-3xl font-bold text-blue-600 mb-6">₦1,500,000<span className="text-lg font-normal">/month</span></p>
                    <ul className="text-left space-y-2 mb-6">
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-blue-600" />Basic engagement tracking</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-blue-600" />Monthly performance overview</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-blue-600" />Access to standard templates for posts</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-blue-600" />Audience targeting & segmentation</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-blue-600" />Bi-weekly performance reports with insights</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-blue-600" />Custom graphics and branding support</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-blue-600" />AI-powered analytics for content optimization</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-gray-600" />Advanced AI insights for trend prediction</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-gray-600" />Automated content scheduling & performance monitoring</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-gray-600" />Dedicated ad management & A/B testing</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-gray-600" />Influencer marketing strategy implementation</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-gray-600" />Weekly detailed analytics reports</li>
                    </ul>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Choose Plan</button>
                </div>

                {/* Premium Plan */}
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center w-[350px]">
                    <h2 className="text-2xl font-semibold mb-4">Premium Plan</h2>
                    <p className="text-3xl font-bold text-purple-600 mb-6">₦5,000,000<span className="text-lg font-normal">/month</span></p>
                    <ul className="text-left space-y-2 mb-6">
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-purple-600" />Basic engagement tracking</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-purple-600" />Monthly performance overview</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-purple-600" />Access to standard templates for posts</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-purple-600" />Audience targeting & segmentation</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-purple-600" />Bi-weekly performance reports with insights</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-purple-600" />Custom graphics and branding support</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-purple-600" />AI-powered analytics for content optimization</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-purple-600" />Advanced AI insights for trend prediction</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-purple-600" />Automated content scheduling & performance monitoring</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-purple-600" />Dedicated ad management & A/B testing</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-purple-600" />Influencer marketing strategy implementation</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-purple-600" />Weekly detailed analytics reports</li>
                    </ul>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">Choose Plan</button>
                </div>

                {/* Customized Plan */}
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center w-[350px]">
                    <h2 className="text-2xl font-semibold mb-4">Customized Plan</h2>
                    <p className="text-3xl font-bold text-red-600 mb-6">Contact us for a tailored solution</p>
                    <ul className="text-left space-y-2 mb-6">
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-red-600" />Personalized strategy based on your brand’s needs</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-red-600" />Exclusive AI tools for high-converting marketing campaigns</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-red-600" />Specialized campaign execution with ongoing adjustments</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-red-600" />Dedicated account manager for seamless coordination</li>
                        <li className="flex items-center"><FaCircleCheck className="mr-2 text-red-600" />Access to priority support and additional custom services</li>
                    </ul>
                    <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Pricing