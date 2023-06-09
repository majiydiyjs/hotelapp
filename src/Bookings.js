import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };
  useEffect(() => {
    console.log("Page has loaded!");
    fetch("https://cyf-react.glitch.me")
      .then((response) => response.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        {/* <Search search={search} />
        <SearchResults results={FakeBookings} /> */}
        <Search setBookings={setBookings} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
