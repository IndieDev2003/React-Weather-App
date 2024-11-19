import { Children, createContext, useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    });
  
  
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()

  const weatherKey = import.meta.env.VITE_WEATHER_KEY;
  const weatherUrl = import.meta.env.VITE_WEATHER_URL;
  const fetchUnit = "&units=metric";
  const value = {};

  useEffect(() => {
    
    // setLatitude(coords.latitude);
    // setLongitude(coords.longitude);
    console.log(coords)

    console.log(`${latitude}`)
  }, [coords,latitude,longitude]);

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
