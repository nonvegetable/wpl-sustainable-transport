import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CarbonFootprint from './pages/CarbonFootprint/CarbonFootprint';
import PublicTransport from './pages/PublicTransport/PublicTransport';
import ElectricVehicles from './pages/ElectricVehicles/ElectricVehicles';
import SustainablePractices from './pages/SustainablePractices/SustainablePractices';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Forum from './pages/Forum/Forum';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carbon-footprint" element={<CarbonFootprint />} />
        <Route path="/public-transport" element={<PublicTransport />} />
        <Route path="/electric-vehicles" element={<ElectricVehicles />} />
        <Route path="/sustainable-practices" element={<SustainablePractices />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  );
}

export default App;