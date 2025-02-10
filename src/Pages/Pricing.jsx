import {useEffect} from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// Components
import AiDigitalContentMarketing from '../Pricing/AiDigitalContentMarketing';
import BrandSocialMediaManagement from '../Pricing/BrandSocialMediaManagement';
import ContentCreationGraphicDesign from '../Pricing/ContentCreationGraphicDesign';

const Pricing = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>

            <div>
                <AiDigitalContentMarketing />
                <BrandSocialMediaManagement />
                <ContentCreationGraphicDesign />
            </div>

            <Footer />
        </div>
    );
};

export default Pricing;
