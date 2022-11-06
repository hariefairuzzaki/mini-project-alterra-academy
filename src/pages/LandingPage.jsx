import React from "react";
import Banner from "../components/LandingPage/Banner";
import Footer from "../components/Footer";
import Hero from "../components/LandingPage/Hero";
import MoreNike from "../components/LandingPage/MoreNike";
import Navibar from "../components/Navibar";
import Clothing from "../components/LandingPage/Clothing";
import Shoes from "../components/LandingPage/Shoes";

export default function LandingPage() {
  return (
    <>
      <Navibar />
      <Hero />
      <Clothing />
      <Banner />
      <Shoes />
      <MoreNike />
      <Footer />
    </>
  );
}
