import React, { useState } from "react";
import "./Price.css";
import axios from "axios";

const Price = () => {
  const [date, setDate] = useState("");
  const [eventName, setEventName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [roomCategoryCode, setRoomCategoryCode] = useState("");
  const [numberOfOccupents, setNumberOfOccupents] = useState("");
  const [eventLocationCode, setEventLocationCode] = useState("");
  const [eventType, setEventType] = useState("");
  const [demographyType, setDemographyType] = useState("");
  const [showTimes, setShowTimes] = useState("");
  const [roomPrice, setRoomPrice] = useState(null);

  const handleRoomCategoryChange = (event) => {
    setRoomCategoryCode(event.target.value);
  };

  const handleNumberOfOccupentsChange = (event) => {
    setNumberOfOccupents(event.target.value);
  };

  const handleEventLocationCodeChange = (event) => {
    setEventLocationCode(event.target.value);
  };

  const handleRoomTypeChange = (event) => {
    setRoomType(event.target.value);
  };

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleDemographyTypeChange = (event) => {
    setDemographyType(event.target.value);
  };

  const handleShowTimesChange = (event) => {
    setShowTimes(event.target.value);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Predicting the price
    const month = new Date(date).getMonth();
    const dayOfWeek = new Date(date).getDay();
    const req = {
      "RoomTypeCode": roomType,
      "NumberOfOccupents": numberOfOccupents,
      "RoomCategoryCode": roomCategoryCode,
      "EventTypeCode": eventType,
      "DemographyCode": demographyType,
      "ShowTimeCode": showTimes,
      "EventLocationcode": eventLocationCode,
      "month": month,
      "day_of_week": dayOfWeek
  }
   try{
    console.log(req)
    const response = await axios.post("http://localhost:8000/api/events/get_best_room_rates/", req)
    console.log(response)
    if(response.status  = 200) {
      
      setRoomPrice(response.data.optimum_rate);
    }
   } catch (e) {
    setRoomPrice("Can not Predict Rate. ")
   }
    
    console.log("Predicting price...",req );
  };

  return (
    <form className="my-form">
      <div className="form-row">
        <div className="form-col">
        <label>Date: </label>
        </div>
        <div className="form-col">
        <input
          className="text"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        </div>
        </div>
        <div className="form-row">
        <div className="form-col">
        <label>RoomType: </label>
        </div>
        <div className="form-col">
        <select value={roomType} onChange={handleRoomTypeChange}>
          <option value="">Select room type</option>
          <option value="1">Superior Twin Room</option>
          <option value="2">Superior King Room</option>
          <option value="3">Premium Double Room</option>
          <option value="4">Executive Room</option>
          <option value="5">Cilantro Suite</option>
        </select>
      </div>
      </div>
      <div className="form-row">
        <div className="form-col">
        <label>RoomCategory: </label>
        </div>
        <div className="form-col">
        <select value={roomCategoryCode} onChange={handleRoomCategoryChange}>
          <option value="">Select room category</option>
          <option value="1">Single</option>
          <option value="2">Double</option>
          <option value="3">Family</option>
          <option value="4">Business</option>
          <option value="5">Luxury</option>
        </select>
      </div>
      </div>
      <div className="form-row">
        <div className="form-col">
        <label>Number Of Occupants: </label>
        </div>
        <div className="form-col">
        <select value={numberOfOccupents} onChange={handleNumberOfOccupentsChange}>
          <option value="">Select occupancy</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
      </div>
      <div className="form-row">
        <div className="form-col">
        <label>Event Name: </label>
        </div>
        <div className="form-col">
        <input
          type="text"
          className = "text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />
      </div>
      </div>
      <div className="form-row">
        <div className="form-col">
      <label>
        Event Type:
        </label>
        </div>
        <div className="form-col">
        <select value={eventType} onChange={handleEventTypeChange}>
          <option value="">Select event type</option>
          <option value="2">Food Festival</option>
          <option value="3">Musical Show</option>
          <option value="4">Seasonal</option>
        </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-col">
      <label>
        Event Location:
        </label>
        </div>
        <div className="form-col">
        <select value={eventLocationCode} onChange={handleEventLocationCodeChange}>
          <option value="">Select event location</option>
          <option value="1">Domestic</option>
          <option value="2">In Hotel</option>
          <option value="3">Port City</option>
        </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-col">
      <label>
        Demography Type:
      </label>
      </div>
      <div className="form-col">
        <select value={demographyType} onChange={handleDemographyTypeChange}>
          <option value="">Select demography type</option>
          <option value="1">All</option>
          <option value="2">Young Adults</option>
          <option value="seniors">Seniors</option>
        </select>
      </div>
      </div>
      <div className="form-row">
        <div className="form-col">
      <label>
        Show Times:
        </label>
        </div>
        <div className="form-col">
        <select value={showTimes} onChange={handleShowTimesChange}>
          <option value="">Select Event show times</option>
          <option value="1">All Day</option>
          <option value="2">Morning</option>
          <option value="3">Night</option>
        </select>
      </div>
      </div>
      {roomPrice ?
        <div className="form-row">
          <div className="form-col">
        <label>
          The Best rate for above event {eventName}
          </label>
          </div>
          <div className="form-col">
            <h3>{roomPrice}</h3>
          </div>
        </div>
        :null
      }
        <div className="Price__Btn" onClick={e=>handleSubmit(e)}>Predict Price</div>
      </form>
  );
};

export default Price;
