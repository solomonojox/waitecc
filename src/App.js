import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Components
import LandingPage from './Pages/Landing';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
