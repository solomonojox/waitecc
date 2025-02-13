import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

// Components
import LandingPage from './Pages/Landing';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';
import Pricing from './Pages/Pricing';

import Team from './Pages/Team.jsx'
import ServiceDetailsPage from './Pages/ServiceDetailsPage.jsx';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:servce" element={<ServiceDetailsPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
