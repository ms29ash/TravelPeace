import React from "react";
import Header from "./Header";
import Places from "./Places";
import About from "./About";
import Offer from "./Offer";
import Form from "./Form";
import Reviews from "./Reviews";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />
      <Places />
      <About />
      <Offer />
      <Reviews />
      <Form />
      <Footer />
    </>
  );
}

export default Home