import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import ScrollToTop from "../helpers/scrollToTop.js";
import ToastConfig from "./components/notifications/ToastConfig.jsx";
import Spinner from "./components/loading-spinner/Spinner.jsx";
import About from "./components/about/About.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

function App() {

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          {/* <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> */}
        </Routes>
        <ToastConfig />
        {/* <Footer /> */}
      </Suspense>
    </Router>
  );
}

export default App
