import React from "react";
import Header from "../Components/Header";
import Places from "../Components/Places";
import About from "../Components/About";
import Offer from "../Components/Offer";
import Form from "../Components/Form";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";

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