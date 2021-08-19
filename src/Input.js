import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from "./Card";

import "react-toastify/dist/ReactToastify.css";
// import "./input.css";

const Input = () => {
  // States and Url

  const [city, setCity] = useState("");
  const [details, setDetails] = useState("");
  const api_key = "d3bf7bc3cb2996b63d81f421775a6d12";
  const url = `https://api.openweathermap.org/data/2.5/weather`;

  // Fetch details from api

  const fetchdetails = async () => {
    const { data } = await Axios.get(url, {
      params: {
        q: city,
        appid: api_key,
      },
    });
    const mydata = {
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      temp: data.main.temp,
      temp_max: data.main.temp_max,
      temp_min: data.main.temp_min,
      cityName: data.name,
      country: data.sys.country,
      weather_main: data.weather[0].main,
      weather_id: data.weather[0].id,
    };
    setDetails(mydata);
    console.log(mydata);
  };

  useEffect(() => {
    fetchdetails();
  }, []);

  return (
    <div className="container">
      <h1 className="offset-md-5 pt-5 mb-4">Weather App</h1>
      <div className="row">
        <div className="">
          <input
            className="col-md-4 offset-md-4 mt-5"
            type="search"
            id="city"
            style={{ outline: "none", fontFamily: "cursive", height: "2rem" }}
            placeholder="Type Your City Name Here..."
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <button
            type="button"
            className="btn-sm btn-warning  "
            onClick={fetchdetails}
          >
            Search
          </button>
        </div>
      </div>
      <Card mydata={details} />
    </div>
  );
};

export default Input;
