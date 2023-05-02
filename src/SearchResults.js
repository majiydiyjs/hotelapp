import { React, useState } from "react";
import FakeBookings from "./data/fakeBookings.json";
function SearchResults() {
  const [data, setData] = useState(FakeBookings);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">CheckIn Date</th>
            <th scope="col">CheckOut Date</th>
            <th scope="col">Number Of Nights</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.firstName}</td>
              <td>{item.surname}</td>
              <td>{item.email}</td>
              <td>{item.roomId}</td>
              <td>{item.checkInDate}</td>
              <td>{item.checkOutDate}</td>
              <td>{item.noofNight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
