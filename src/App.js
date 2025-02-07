import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Components
import LandingPage from './Pages/Landing';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';
import Pricing from './Pages/Pricing';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
