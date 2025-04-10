import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import ScrollToTop from "../helpers/scrollToTop.js";
import ToastConfig from "./components/notifications/ToastConfig.jsx";
import Spinner from "./components/loading-spinner/Spinner.jsx";
import About from "./components/about/About.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import Services from "./components/services-page/Services.jsx";
import Prices from "./components/prices/Prices.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/home/Home.jsx";
import ServicesIrrigation from "./components/services-page/ServicesIrrigation.jsx";

function App() {

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/irrigation" element={<ServicesIrrigation />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          {/* <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> */}
        </Routes>
        <ToastConfig />
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App
