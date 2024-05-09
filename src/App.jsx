import React from "react";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Faqpage from "./components/Faqpage";
import PrivateRoutes from "./assets/utils/PrivateRoutes";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div style={{ width: "100%" }}>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faq" element={<Faqpage />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
