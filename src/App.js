import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Components
import LandingPage from './Pages/Landing';
import Services from './Pages/Services';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
