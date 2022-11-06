import React from "react";
import Footer from "../components/Footer";
import Navibar from "../components/Navibar";
import Navs from "../components/Profile/Navs";
import Orders from "../components/Profile/Orders";

export default function OrdersPage() {
  return (
    <>
      <Navibar />
      <Navs />
      <Orders />
      <Footer />
    </>
  );
}
