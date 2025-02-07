import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Components
import LandingPage from './Pages/Landing';
import Team from './Pages/Team.jsx'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/team" element={<Team/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
