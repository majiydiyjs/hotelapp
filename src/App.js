import React from "react";
import Header from "./Header";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const info = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];

  return (
    <div className="App">
      <Header />
      <Bookings />
      <TouristInfoCards />
      <Footer info={info} />
    </div>
  );
};

export default App;
