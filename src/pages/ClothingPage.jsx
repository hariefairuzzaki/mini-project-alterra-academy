import React from "react";
import ClothingFilter from "../components/Filter/ClothingFilter";
import Footer from "../components/Footer";
import Navibar from "../components/Navibar";

export default function ClothingPage() {
  return (
    <>
      <Navibar />
      <ClothingFilter />
      <Footer />
    </>
  );
}
