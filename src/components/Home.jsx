import React, { useEffect, useState } from "react";

const Home = () => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const fetchCurrentLocation = () =>  {
    navigator.geolocation.watchPosition((pos) => {
          setLocation({latitude: pos.coords.latitude, longitude:  pos.coords.longitude});
      })

  }

  useEffect(() => {
    fetchCurrentLocation()
  }, [])
  return (
    <div className="fixed top-20 w-full flex justify-center z-10 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl font-semibold mb-2">Your Location: Longitude: {location.longitude}, Latitude:  {location.latitude}</h1>

        <p className="text-sm text-gray-700">
          {/* search button here probably */}
          {/* then todays weather or forecase */}
        </p>
      </div>
    </div>
  );
};

export default Home;
