import React, { useEffect } from 'react'
import HeroSection from '../Components/AiAgent/HeroSection'
import SolutionSection from '../Components/AiAgent/SolutionSection'
import BottomCTAWithAnimations from '../Components/AiAgent/BottomCTASection'
import TestimonialSection from '../Components/AiAgent/TestimonialSection'
import WhyGistly from '../Components/AiAgent/WhyGistly'
import HowGistliWorksSection from '../Components/AiAgent/HowGistliWorksSection'
import PainPointSection from '../Components/AiAgent/PainPointSection '
import Navbar from '../Components/Navbar'

const AiAgentPage
  = () => {
    useEffect(() => {
      window.scrollTo({
        top: 0,
      });
    }, []);
    return (
      <div >
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <HeroSection />
        <PainPointSection />
        <SolutionSection />
        <HowGistliWorksSection />
        <WhyGistly />
        <TestimonialSection />
        <BottomCTAWithAnimations />
      </div>
    )
  }

export default AiAgentPage
