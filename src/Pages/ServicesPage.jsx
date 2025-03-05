import React from 'react';
import assets from '../Assets/assets';

const services = [
  {
    title: "AI-Powered Digital & Content Marketing",
    description: "Leverage AI-driven digital marketing strategies to automate and personalize your campaigns. Businesses using AI marketing automation have seen up to a 30% increase in revenue and 50% reduction in advertising costs due to improved customer targeting and efficiency.",
    cta: "Speak with a consultants",
    image: assets.ai
  },
  {
    title: "Brand & Social Media Management",
    description: "We optimize your social media marketing strategy with AI-driven insights to enhance brand awareness and audience engagement. AI-powered content marketing has led to a 40% higher conversion rate and improved customer interactions.",
    cta: "Speak with a consultants",
    image: assets.sm
  },
  {
    title: "Email Marketing",
    description: "Enhance email marketing automation with AI to maximize customer retention and sales conversion rates. AI-driven email marketing improves targeted email segmentation, resulting in a 41% higher open rate and 3x more revenue per campaign.",
    cta: "Speak with a consultants",
    image: assets.email
  },
  {
    title: "SEO/SEM Marketing",
    description: "Optimize your website’s SEO strategy and search engine marketing (SEM) with AI-enhanced analytics. Businesses using AI-driven keyword optimization experience a 30% faster increase in organic traffic.",
    cta: "Speak with a consultants",
    image: assets.seo
  },
  {
    title: "Video Production",
    description: "AI-powered video marketing strategies boost conversion rates by 80%, with businesses experiencing 49% faster growth when integrating high-quality video content into their digital advertising campaigns.",
    cta: "Speak with a consultants",
    image: assets.video
  },
  {
    title: "Content Creation & Graphic Design",
    description: "Create high-quality digital content and AI-enhanced graphic designs that improve brand visibility and engagement. AI-powered content marketing automation increases engagement by 37%.",
    cta: "Speak with a consultants",
    image: assets.content
  },
  {
    title: "Website & Mobile App Development",
    description: "Develop a high-converting website and mobile app optimized for SEO and user experience (UX). AI-driven web development solutions increase user retention rates by 60%.",
    cta: "Speak with a consultants",
    image: assets.web
  },
  {
    title: "Market Research",
    description: "Make data-driven business decisions with AI-powered market research tools. Companies utilizing AI-driven consumer behavior analysis experience a 40% decrease in decision-making errors.",
    cta: "Speak with a consultants",
    image: assets.research
  },
  {
    title: "Copywriting & Technical Writing",
    description: "AI-assisted copywriting and content writing enhance brand messaging and increase conversion rates. Businesses using AI-generated sales copy report a 35% improvement in content effectiveness.",
    cta: "Speak with a consultants",
    image: assets.writing
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href='https://forms.gle/yDjwCxPE2hBTahAo6' // Replace with your link
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  {service.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;