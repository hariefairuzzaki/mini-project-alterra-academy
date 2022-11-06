import React from "react";
import ShoesFilter from "../components/Filter/ShoesFilter";
import Footer from "../components/Footer";
import Navibar from "../components/Navibar";

export default function ShoesPage() {
  return (
    <>
      <Navibar />
      <ShoesFilter />
      <Footer />
    </>
  );
}
