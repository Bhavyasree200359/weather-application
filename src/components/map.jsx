import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default marker icons
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const SimpleMap = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default position
  const [apiResponse, setApiResponse] = useState(null); // State to store API response

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);

          // Fetch API response based on live location
          fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
            .then((response) => response.json())
            .then((data) => {
              setApiResponse(data); // Store the API response
              console.log("API Response:", data); // Log the API response
            })
            .catch((err) => console.error("Error fetching API:", err));
        },
        (err) => {
          console.error("Error getting location", err);
        }
      );
    } else {
      console.error("Geolocation not supported by this browser.");
    }
  }, []);

  return (
    <MapContainer style={{ height: "100vh", width: "100%" }} center={position} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Your Live Location
          <br />
          {apiResponse
            ? `Weather: ${apiResponse.current_weather.temperature}°C`
            : "Loading weather..."}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default SimpleMap;
