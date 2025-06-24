import React, { useEffect, useState } from "react";

const Home = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [place, setPlace] = useState("");

  const [current, setCurrent] = useState(null);
  const [forecast, setForcast] = useState(null);
  const [loc, setLoc] = useState(null);

  const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=`;

  const fetchCurrentLocation = () => {
    navigator.geolocation.watchPosition((pos) => {
      setLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  };

  const fetchCurrentForecast = async (e) => {
    e.preventDefault();
    const url = `${BASE_URL}${import.meta.env.VITE_API_KEY}&q=${
      location.latitude
    },${location.longitude}`;
    const response = await fetch(url);
    // console.log(await response.json());
    const data = await response.json();
    setCurrent(data.current);
    setForcast(data.forecast);
    setLoc(data.location);
    console.log(data.location);
  };

  // handle the submit for manual search
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${BASE_URL}${import.meta.env.VITE_API_KEY}&q=${place}`;
    const response = await fetch(url);

    const data = await response.json();
    setCurrent(data.current);
    setForcast(data.forecast);
    setLoc(data.location);
    console.log(data);
  };

  useEffect(() => {
    fetchCurrentLocation();
  }, []);

  return (
    <div className="absolute top-20 w-full flex justify-center z-10 px-4 min-h-full">
      <div className="text-center max-w-2xl">
        <h1 className="text-2xl font-semibold mb-2">
          Your Location: Longitude: {location.longitude}, Latitude:{" "}
          {location.latitude}
        </h1>

        <div className="text-sm text-gray-700 space-y-8 mx-auto">
          {/* search button here probably */}
          {/* then todays weather or forecase */}

          <button
            onClick={fetchCurrentForecast}
            className="w-full bg-blue-200 hover:bg-blue-400 hover:cursor-pointer duration-300 hover:transition-all rounded-2xl p-1 mt-4 text-lg"
          >
            Click here to fetch your Current Forecast
          </button>

          <form className="flex flex-col justify-center mt-24 text-2xl space-y-6">
            <label>Search the place name...</label>
            <input
              type="text"
              required
              className="bg-blue-50 w-54 h-12 mx-auto shadow-md rounded-2xl text-center"
              onChange={(e) => setPlace(e.target.value)}
            />
            <input
              type="submit"
              className="bg-black text-white w-24 p-1 rounded-2xl hover:shadow-2xl hover:cursor-pointer mx-auto"
              onClick={handleSubmit}
            />
          </form>

          <div className="space-y-6">
            {/* first div for location */}

            {loc && (
              <div className="flex flex-col space-y-2">
                <h2 className="text-2xl mt-8 font-bold">Location Details</h2>
                <p className="text-xl">
                  {loc.name}, {loc.region}, {loc.country}
                </p>
                <p className="text-xl">{loc.localtime}</p>
                <p className="text-lg">
                  Timezone: <span className="font-thin">{loc.tz_id}</span>
                </p>
              </div>
            )}

            {/* second div for current weather */}
            {current && (
              <div className="flex flex-col space-y-2">
                <h2 className="text-2xl font-bold">Current Weather</h2>
                <section className="flex flex-row gap-4 mx-auto">
                  <p className="text-lg">{current.condition.text}</p>
                  <img
                    src={`https://cdn.weatherapi.com/weather/64x64/day/113.png`}
                    className="size-12"
                  ></img>
                </section>
              </div>
            )}
            {forecast && (
              <div className="flex flex-col space-y-2">
                <h2 className="text-2xl font-bold">Weather Forecast</h2>
                {console.log(forecast.forecastday[0])}

                <div className="flex-col space-y-1.5">
                  <section className="flex gap-4 justify-center">
                    <h3 className="font-bold text-xl">Sunrise</h3>
                    <span className="text-lg">
                      {forecast.forecastday[0].astro.sunrise}
                    </span>
                  </section>

                  <section className="flex gap-4 justify-center">
                    <h3 className="font-bold text-xl">Sunset</h3>
                    <span className="text-lg">
                      {forecast.forecastday[0].astro.sunset}
                    </span>
                  </section>

                  <section className="flex gap-4 justify-center">
                    <h3 className="font-bold text-xl">Moonrise</h3>
                    <span className="text-lg">
                      {forecast.forecastday[0].astro.moonrise}
                    </span>
                  </section>

                  <section className="flex gap-4 justify-center">
                    <h3 className="font-bold text-xl">Moonset</h3>
                    <span className="text-lg">
                      {forecast.forecastday[0].astro.moonset}
                    </span>
                  </section>

                  <section className="flex gap-4 justify-center">
                    <h3 className="font-bold text-xl">Moon phase</h3>
                    <span className="text-lg">
                      {forecast.forecastday[0].astro.moon_phase}
                    </span>
                  </section>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
