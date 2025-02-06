import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Components
import LandingPage from './Pages/Landing';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
