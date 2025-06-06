import React, { useEffect, useState } from "react";

const Home = () => {
  const [location, setLocation] = useState({ latitude: "null", longitude: "null" });
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
        <h1 className="text-2xl font-semibold mb-2">Your Location: Longitude: {location.longitude}, Latitude:  {location.latitude}</h1>

        <div className="text-sm text-gray-700 space-y-8">
          {/* search button here probably */}
          {/* then todays weather or forecase */}

          <form className="flex flex-col justify-center mt-24 text-2xl space-y-6">
          <label>Enter the place name</label>
          <input type="text" className="bg-blue-50 w-54 h-12 mx-auto shadow-md rounded-2xl text-center"/>
          <input type="submit" className="bg-black text-white w-24 p-1 rounded-2xl hover:shadow-2xl hover:cursor-pointer mx-auto"/>
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
