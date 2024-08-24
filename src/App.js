import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';
import DoctorRegistration from './components/registration/DoctorRegistration';
import HospitalRegistration from './components/registration/HospitalRegistration';

function App() {
  const location = useLocation(); // Get the current path

  // Define paths where Navbar and Footer should not be shown
  const noLayoutPaths = ['/sign-up', '/register/doctor', '/register/hospital'];

  return (
    <>
      <GlobalStyles />
      <ScrollToTop />

      {/* Conditionally render Navbar and Footer */}
      {!noLayoutPaths.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/register/doctor" element={<DoctorRegistration />} />
        <Route path="/register/hospital" element={<HospitalRegistration />} />
      </Routes>

      {!noLayoutPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
