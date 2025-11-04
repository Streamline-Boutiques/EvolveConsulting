import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import TechnicalAdvisory from './pages/TechnicalAdvisory';
import BusinessDevelopment from './pages/BusinessDevelopment';
import LeadershipCounseling from './pages/LeadershipCounseling';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App">
      {/* 👇 Added basename for GitHub Pages */}
      <BrowserRouter basename="/EvolveConsulting">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technical-advisory" element={<TechnicalAdvisory />} />
          <Route path="/business-development" element={<BusinessDevelopment />} />
          <Route path="/leadership-counseling" element={<LeadershipCounseling />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
