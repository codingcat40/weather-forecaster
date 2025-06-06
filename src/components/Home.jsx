import React, { useEffect, useState } from "react";

const Home = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [place, setPlace] = useState("");
  const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=`

  const fetchCurrentLocation = () => {
    navigator.geolocation.watchPosition((pos) => {
      setLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  };

  const fetchCurrentForecast = async (e) => {
    e.preventDefault()
    const url = `${BASE_URL}${import.meta.env.VITE_API_KEY}&q=${location.latitude},${location.longitude}`;
    const response = await fetch(url);
    console.log(await response.json());
  };

  // handle the submit
  const handleSubmit = async () => {
    // e.preventDefault();
    // URL: https://api.weatherapi.com/v1/current.json?key=8cc6ff6a05c54a0e81660428250306&q=bangalore
  };

  useEffect(() => {
    fetchCurrentLocation();
  }, []);

  return (
    <div className="fixed top-20 w-full flex justify-center z-10 px-4 max-h-fit">
      <div className="text-center max-w-2xl">
        <h1 className="text-2xl font-semibold mb-2">
          Your Location: Longitude: {location.longitude}, Latitude:{" "}
          {location.latitude}
        </h1>

        <div className="text-sm text-gray-700 space-y-8 mx-auto">
          {/* search button here probably */}
          {/* then todays weather or forecase */}

          <button onClick={fetchCurrentForecast} className="w-full bg-blue-200 hover:bg-blue-400 hover:cursor-pointer duration-300 hover:transition-all rounded-2xl p-1 mt-4 text-lg">Click here to fetch your Current Forecast</button>

          <form className="flex flex-col justify-center mt-24 text-2xl space-y-6">
            <label>Search the place name...</label>
            <input
              type="text"
              required
              className="bg-blue-50 w-54 h-12 mx-auto shadow-md rounded-2xl text-center"
            />
            <input
              type="submit"
              className="bg-black text-white w-24 p-1 rounded-2xl hover:shadow-2xl hover:cursor-pointer mx-auto"
              onClick={handleSubmit}
            />
          </form>

          <div className="space-y-6">
            <h3>Weather Forecast</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
