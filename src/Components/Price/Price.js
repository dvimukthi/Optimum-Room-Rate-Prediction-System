import React, { useState } from "react";
import "./Price.css";

const Price = () => {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [roomType, setRoomType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Predicting the price
    console.log("Predicting price...");
  };

  return (
    <div className="Price__Container">
      <form className="Price__Form" onSubmit={handleSubmit}>
        <label>Date: </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Event Name: </label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />

        <label>Event Location: </label>
        <input
          type="text"
          value={eventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
          required
        />

        <label>Room Type: </label>
        <input
          type="text"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          required
        />

        <div type="Price__Btn">Predict Price</div>
      </form>
    </div>
  );
};

export default Price;
