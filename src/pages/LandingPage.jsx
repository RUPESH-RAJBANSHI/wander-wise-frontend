import React, { useEffect } from "react";
import Navbar from "../components/landingComponents/Navbar";
import Hero from "../components/landingComponents/Hero";
import Features from "../components/landingComponents/Features";
import Contact from "../components/landingComponents/Contact";
import Footer from "../components/landingComponents/Footer";
import Banner from "../components/landingComponents/Banner";
import FamousTrips from "../components/landingComponents/FamousTrips";
import About from "../components/landingComponents/About";
import Reviews from "../components/landingComponents/Review";
import useAuth from "@/hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const { login, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);

  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <FamousTrips />
      <About />
      <Reviews />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
