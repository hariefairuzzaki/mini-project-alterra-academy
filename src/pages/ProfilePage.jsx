import React from "react";
import Footer from "../components/Footer";
import Navibar from "../components/Navibar";
import Navs from "../components/Profile/Navs";
import Profile from "../components/Profile/Profile";

export default function ProfilePage() {
  return (
    <>
      <Navibar />
      <Navs />
      <Profile />
      <Footer />
    </>
  );
}
