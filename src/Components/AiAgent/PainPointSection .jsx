/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react';
import imageAsset from '../../Assets/imageAsset';

const PainPointSection = () => {
  const [isVisible, setIsVisible] = useState({
    image1: false,
    image2: false,
    image3: false,
    image4: false
  });

  // Animation effect for scroll reveal
  useEffect(() => {
    const handleScroll = () => {
      const elements = [
        { id: 'image1', offset: 0 },
        { id: 'image2', offset: 150 },
        { id: 'image3', offset: 300 },
        { id: 'image4', offset: 450 }
      ];

      elements.forEach(({ id, offset }) => {
        const element = document.getElementById(id);
        if (element) {
          const position = element.getBoundingClientRect();
          if (position.top - offset < window.innerHeight) {
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        }
      });
    };

    // Set initial visibility after a short delay
    setTimeout(() => {
      handleScroll();
    }, 500);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const painPoints = [
    {
      id: 'image1',
      title: "Missed Sales After Hours",
      description: "Customers message when you're sleeping, and by morning, they've gone to your competitor.",
      position: 'right'
    },
    {
      id: 'image2',
      title: "Overwhelmed by DMs",
      description: "You can't respond to every WhatsApp message and Instagram DM fast enough, losing potential customers.",
      position: 'left'
    },
    {
      id: 'image3',
      title: "No Time for Follow-ups",
      description: "Hot leads go cold because you're too busy to nurture every prospect with personalized messages.",
      position: 'right'
    },
    {
      id: 'image4',
      title: "Losing Track of Conversations",
      description: "Important customer inquiries get buried in your inbox, leading to missed opportunities.",
      position: 'left'
    }
  ];

  return (
    <div className="w-full py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
            Say Goodbye to These Business Headaches
          </h2>
          <p className="text-sm text-charcoal max-w-3xl mx-auto">
            Gistly solves the biggest pain points that keep Nigerian business owners up at night
          </p>
        </div>

        <div className="relative space-y-10 container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-start items-center gap-6">
            <img src={imageAsset.bom1} alt="" className="w-full lg:w-[700px]" />
            <p className="text-charcoal text-2xl md:text-3xl italic mb-4">
              Lost Leads. Missed Messages. Sleepless Nights?
            </p>
          </div>

          <div className="flex flex-col-reverse md:flex-row justify-end items-center gap-6">
            <p className="text-charcoal text-2xl md:text-3xl italic mb-4">
              Over 40% of leads are lost by Nigerian SMEs due to slow responses and scattered
              inboxes. Gistli solves this with one AI-powered command center.
            </p>
            <img src={imageAsset.bom2} alt="" className="w-full lg:w-[700px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainPointSection;