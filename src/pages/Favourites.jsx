import React from "react";
import Favourite from "../components/Favourite/Favourite";
import Footer from "../components/Footer";
import Navibar from "../components/Navibar";

export default function Favourites() {
  return (
    <div>
      <Navibar />
      <Favourite />
      <Footer />
    </div>
  );
}
