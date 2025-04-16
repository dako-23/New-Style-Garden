import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import ScrollToTop from "./helpers/scrollToTop.js";
import ToastConfig from "./components/notifications/ToastConfig.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import FloatingButtons from "./components/floating-buttons/FloatingButtons.jsx";
import FadeSpinner from "./components/loading-spinner/FadeSpinner.jsx";

const Home = lazy(() => import('./components/home/Home.jsx'));
const Gallery = lazy(() => import('./components/gallery/Gallery.jsx'));
const Services = lazy(() => import('./components/services-page/Services.jsx'));
const IrrigationServices = lazy(() => import('./components/irrigation/IrrigationServices.jsx'));
const GardenCareServices = lazy(() => import('./components/garden-care/GardenCareServices.jsx'));
const LandscapingServices = lazy(() => import('./components/landscaping/LandscapingServices.jsx'));
const Prices = lazy(() => import('./components/prices/Prices.jsx'));
const About = lazy(() => import('./components/About/About.jsx'));
const PrivacyPolicy = lazy(() => import('./components/privacy-policy/PrivacyPolicy.jsx'));
const ThankYou = lazy(() => import('./components/notifications/ThankYou.jsx'));
const NotFound = lazy(() => import('./components/notifications/NotFound.jsx'));

function App() {

  return (
    <Router>
      <Suspense fallback={<FadeSpinner />}>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/irrigation" element={<IrrigationServices />} />
          <Route path="/services/garden-care" element={<GardenCareServices />} />
          <Route path="/services/landscaping" element={<LandscapingServices />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastConfig />
        <FloatingButtons />
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App
