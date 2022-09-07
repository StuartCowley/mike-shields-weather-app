import "../styles/App.css";
import React from "react";
import PropTypes from "prop-types";

function App({ data }) {
  console.log({ data });
  return (
    <div className="App">
      <h1>Weather App</h1>
    </div>
  );
}

App.propTypes = {
  data: PropTypes.shape({
    location: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
    }),
    forecasts: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.number,
        temperature: PropTypes.shape({
          max: PropTypes.number,
          min: PropTypes.number,
        }),
        wind: PropTypes.shape({
          speed: PropTypes.number,
          direction: PropTypes.string,
        }),
        humidity: PropTypes.number,
        description: PropTypes.string,
        icon: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default App;
