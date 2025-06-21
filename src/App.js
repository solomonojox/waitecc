import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

// Components
import LandingPage from './Pages/Landing';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';
import Pricing from './Pages/Pricing';

import Team from './Pages/Team.jsx'
import Ai from './Services/Ai.jsx';
import BrandSocialMediaManagement from './Services/BSM.jsx';
import EmailMarketing from './Services/EmailMarketing.jsx';
import ContentCreation from './Services/ContentCreation.jsx';
import SeoSemMarketing from './Services/SeoSemMarketing.jsx';
import VideoProduction from './Services/VideoProduction.jsx';
import WebAppDevelopment from './Services/WebAppDevelopment.jsx';
import MarketResearch from './Services/MarketResearch.jsx';
import BlogPage from './Pages/BlogPage.jsx';
import AiAgentPage from './Pages/AiAgent.jsx';
import AIAutomationServicesPage from './Pages/AIAutomationServicesPage.jsx';
import Foundation from './Pages/Foundation.jsx';
import TheSchoolProject from './Components/Foundation/TheSchoolProject.jsx';
import SafeHousing from './Components/Foundation/SafeHousing.jsx';
import FeedingTheFuture from './Components/Foundation/FeedingTheFuture.jsx';
import UtilityVehicles from './Components/Foundation/UtilityVehicles.jsx';
import FoundationAboutUs from './Components/Foundation/FoundationAboutUs.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ai-agent" element={<AiAgentPage />} />
          <Route path="/ai-automation" element={<AIAutomationServicesPage />} />
          <Route path="/let-a-girl-dream" element={<Foundation />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team/>}/>
          <Route path="/blog" element={<BlogPage/>}/>

          <Route path="/services/ai" element={<Ai />} />
          <Route path="/services/brand&socialmanagement" element={<BrandSocialMediaManagement />} />
          <Route path="/services/emailmarketing" element={<EmailMarketing />} />
          <Route path="/services/ContentCreation" element={<ContentCreation />} />
          <Route path="/services/SeoSemMarketing" element={<SeoSemMarketing />} />
          <Route path="/services/VideoProduction" element={<VideoProduction />} />
          <Route path="/services/WebAppDevelopment" element={<WebAppDevelopment />} />
          <Route path="/services/MarketResearch" element={<MarketResearch />} />
          <Route path="/services/CopywritingTechnicalWriting" element={<MarketResearch />} />

          <Route path="/let-a-girl-dream/digital-learning" element={<MarketResearch />} />
          <Route path="/let-a-girl-dream/school-project" element={<TheSchoolProject />} />
          <Route path="/let-a-girl-dream/safe-housing" element={<SafeHousing />} />
          <Route path="/let-a-girl-dream/feeding-future" element={<FeedingTheFuture />} />
          <Route path="/let-a-girl-dream/utility-vehicles" element={<UtilityVehicles />} />
          <Route path="/let-a-girl-dream/about-us" element={<FoundationAboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
