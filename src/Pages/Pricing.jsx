import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// Components
import AiDigitalContentMarketing from '../Pricing/AiDigitalContentMarketing';
import BrandSocialMediaManagement from '../Pricing/BrandSocialMediaManagement';
import ContentCreationGraphicDesign from '../Pricing/ContentCreationGraphicDesign';

const Pricing = () => {
    return (
        <div>
            <Navbar />
            
            <div>
                <AiDigitalContentMarketing/>
                <BrandSocialMediaManagement/>
                <ContentCreationGraphicDesign/>
            </div>

            <Footer />
        </div>
    );
};

export default Pricing;
