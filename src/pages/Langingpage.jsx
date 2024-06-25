import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Langingpage() {
  return (
    <div>
      <Navbar />
      <Gallery />
      <Footer />

      <button>
        <Link to={"./Login"}>Login</Link>
      </button>
      <button>
        <Link to={"./profile"}>profile</Link>
      </button>
    </div>
  );
}
