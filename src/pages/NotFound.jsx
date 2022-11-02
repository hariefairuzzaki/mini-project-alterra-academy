import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navibar from "../components/Navibar";

export default function NotFound() {
  return (
    <div>
      <Navibar />
      <div className="text-center mt-5 pt-5">
        <h4>We can't find the page you are looking for. Sorry for the inconvenience.</h4>
        <Button as={Link} to="/" variant="dark" className="mt-4">
          Go back home
        </Button>
      </div>
      <Footer />
    </div>
  );
}
