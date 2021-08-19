import React from "react";
import WeatherIcon from "react-icons-weather";
const Card = (props) => {
  const details = props.mydata;
  const {
    humidity,
    pressure,
    temp,
    temp_max,
    temp_min,
    cityName,
    country,
    weather_main,
    weather_id,
  } = details;

  var date = new Date();
  switch (date.getDay()) {
    case 1:
      var day = "Mon";

      break;
    case 2:
      var day = "Tue";
      break;
    case 3:
      var day = "Wed";
      break;
    case 4:
      var day = "Thu";
      break;
    case 5:
      var day = "Fri";
      break;
    case 6:
      var day = "Sat";
      break;
    case 7:
      var day = "Sun";
      break;
  }
  switch (date.getMonth()) {
    case 0:
      var month = "Jan";

      break;
    case 1:
      var month = "Feb";
      break;
    case 2:
      var month = "Mar";
      break;
    case 3:
      var month = "Apr";
      break;
    case 4:
      var month = "May";
      break;
    case 5:
      var month = "Jun";
      break;
    case 6:
      var month = "Jul";
      break;
    case 7:
      var month = "Aug";
      break;
    case 8:
      var month = "Sep";
      break;
    case 9:
      var month = "Oct";
      break;
    case 10:
      var month = "Nov";
      break;
    case 11:
      var month = "Dec";
      break;
  }

  var cel = String(temp - 273.15).substring(0, 2);

  return (
    <div>
      <div
        class="card text-dark bg-light mb-3 offset-md-3 mt-5 "
        style={{ width: "45rem" }}
      >
        <div class="card-body">
          <h2>
            <div className="card-header " style={{ textAlign: "center" }}>
              {(cityName, country ? cityName + ", " + country : "")}
            </div>
          </h2>
          <div class="d-flex justify-content-between mt-4">
            <div
              class="card text-dark bg-info mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <h5>
                <div class="card-header">Date and Time</div>
              </h5>
              <div class="card-body">
                <h3 class="card-title">
                  {date.getHours() + ":" + date.getMinutes()}
                  <br />

                  <h5>{day + "," + date.getDate() + " " + month}</h5>
                </h3>
                <p class="card-text"></p>
              </div>
            </div>{" "}
            <div
              class="card text-dark bg-warning mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <h5>
                <div class="card-header">Weather and Temperature</div>
              </h5>
              <div class="card-body">
                <h3 class="card-title">
                  Temp:{"  "}
                  {cel !== "Na" ? cel : " "}{" "}
                  <span>
                    {" "}
                    {"  "}&#8451; {"  "}
                  </span>
                  {weather_id ? (
                    <WeatherIcon name="owm" iconId={weather_id} />
                  ) : (
                    ""
                  )}
                  {weather_main}
                </h3>
              </div>
            </div>
            <div
              class="card text-light bg-success mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <h5>
                <div class="card-header">Humidity and Pressure</div>
              </h5>
              <div class="card-body">
                <h5 class="card-title">
                  Humidity :{humidity ? " " + humidity + " %" : ""} <br />
                  Pressure :{pressure ? " " + pressure + " mbar" : " "}
                </h5>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
