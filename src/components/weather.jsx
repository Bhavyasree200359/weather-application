


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Weather() {
  const api = {
    key: "2d8f4848c77410c6ed177c3a2bb65245",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [search, setSearch] = useState(""); // To store the search input
  const [weather,setWeather]=useState({

  });
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/map")
    
  }

  const searchPressed = () => {
   fetch(`${api.base}weather?q=${search}&units=metrics&APPID=${api.key}`)
   .then(res=>res.json())
   .then((result)=>{
    console.log(result);
    setWeather(result);
   })
  };



  const timezoneOffset = weather.timezone; 
  
const currentDate = new Date(); 
const localDate = new Date(currentDate.getTime() + timezoneOffset * 1000);
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const getDayText = (index) => {
  const currentIndex = localDate.getDay(); 
  const targetIndex = (currentIndex - index + 7) % 7; 
  
  if (index === 0) return `Today (${days[targetIndex]})`;
  
  return`${days[targetIndex]}` ;
};


  return (
    <div className="main-div">
      {/* Navigation Section */}
      <div className="div1">
        <div className="title">Weather Application</div>
        <div className="div11">
          <img
            className="weather-img"
            src="https://cdn-icons-png.flaticon.com/512/1555/1555512.png"
            alt="img"
          />
          <div>Weather</div>
        </div>
        <div className="div12">
          <img
            className="city-img"
            src="https://cdn-icons-png.flaticon.com/512/2942/2942076.png"
            alt="img"
          />
          <div>Cities</div>
        </div>
        <div onClick={handleClick} className="div13">
          <img
            className="map-img"
            src="https://cdn-icons-png.flaticon.com/512/592/592245.png"
            alt="img"style={{
                  display:"flex",
                  alignItems:"center"
                }}
          />
          <div>Map</div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="div2">
        <div className="div21">
          <div className="input-div">
          <input
    className="search-class"
    type="text"
    placeholder="Search for cities..."
    onChange={(e) => setSearch(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        searchPressed();
      }
    }}
  />
          </div>
        {typeof weather.main!="undefined" ?
 <div className="name-temp-type-div">
 <div className="name-temp-div">
   <div className="name-div">
     <p className="cityname-class">{weather.name}, Country: {weather.sys.country}</p>
     <p className="humidity-text-class">Humidity: {weather.main.humidity}%</p>
   </div>
   <div className="temp1-div">{(weather.main.temp - 273.15).toFixed(2)}°C
   </div>
 </div>
 <div className="type-div">
 {(() => {
   const tempK = weather.main?.temp; // Temperature in Kelvin
   const tempC = tempK - 273.15; // Convert to Celsius

   if (tempC < 0) {
     return <img style={{
      width:"100px",
      height:"100px"
     }}src="https://cdn-icons-png.flaticon.com/512/1553/1553358.png" alt="Snowy" />; // Display snowy image
   } else if (tempC >= 0 && tempC <= 15) {
     return <img style={{
      width:"100px",
      height:"100px"
     }}src="https://cdn-icons-png.flaticon.com/512/2242/2242879.png" alt="Cloudy" />; // Display cloudy image
   } else if (tempC > 15 && tempC <= 30) {
     return <img style={{
      width:"100px",
      height:"100px"
     }}src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="Sunny" />; // Display sunny image
   } else {
     return <img style={{
      width:"100px",
      height:"100px"
     }}src="https://cdn-icons-png.flaticon.com/512/4724/4724094.png" alt="Rainy" />; // Display rainy image
   }
 })()}
</div>


</div>
        :
        <div className="error-message">{weather.message}</div>
       }
        



  
        
        
        
        
        
        
        
        
        
        
        
        </div>























        <div className="div22">
          <div className="forecast-text">TODAY'S FORECAST (Dummy Data)</div>
          <div className="div222">
            <div className="sixam-div">
            <div className="sixam-text">6:00 AM</div>
            <div className="sixam-type">cloudy</div>
            <div className="sixam-temp">25°C</div>
            </div>
            <div className="nineam-div">
            <div className="nineam-text">9:00 AM</div>
            <div className="nineam-type">sunny</div>
            <div className="nineam-temp">30°C</div>
            </div>
            <div className="twelvepm-div">
            <div className="twelvepm-text">12:00 PM</div>
            <div className="twelvepm-type">sunny</div>
            <div className="twelvepm-temp">31°C</div>
            </div>
            <div className="threepm-div">
            <div className="threepm-text">3:00 PM</div>
            <div className="threepm-type">rainy</div>
            <div className="threepm-temp">23°C</div>
            </div>
            <div className="sixpm-div">
            <div className="sixpm-text">6:00 PM</div>
            <div className="sixpm-type">cloudy</div>
            <div className="sixpm-temp">26°C</div>
            </div>
            <div className="ninepm-div">
            <div className="ninepm-text">9:00 PM</div>
            <div className="ninepm-type">sunny</div>
            <div className="ninepm-temp">28°C</div>
            </div>
















          </div>
        </div>
































        <div className="div23">
          <div className="heading-seemore-button">
            <div className="heading"> AIR CONDITIONS</div>
            <button className="seemore-button">See More</button>
          </div>
          <div className="air-condition-content">
            <div className="temp-rain-div">
              <div className="temp-div">
                <p style={{
                  display:"flex",
                  alignItems:"center"
                }}><span><img src="https://cdn-icons-png.flaticon.com/512/3815/3815449.png"  style={{
      width:"30px",
      height:"30px"
     }}alt="img"></img></span>Real Feel</p>
                <p style={{
  fontSize: "20px",
  paddingLeft: "10px"
}}>
  {weather.main?.temp_max && weather.main?.temp_min
    ? (((weather.main.temp_max + weather.main.temp_min) / 2) - 273.15).toFixed(1)
    : "0"}
</p>

              </div>
              <div className="rain-div">
                <p style={{
                  display:"flex",
                  alignItems:"center"
                }}><span><img src="https://cdn-icons-png.flaticon.com/128/427/427112.png" style={{
      width:"30px",
      height:"30px"
     }}alt="img"></img></span>Chance of rain</p>
                <p style={{
  fontSize: "20px",
  paddingLeft: "10px"
}}>
  {weather.clouds?.all && weather.main?.humidity && weather.weather?.[0]?.description
    ? (() => {
        const clouds = weather.clouds.all; // Cloud percentage
        const humidity = weather.main.humidity; // Humidity percentage
        const description = weather.weather[0].description.toLowerCase(); // Weather description

        const rainDescriptionFactor = description.includes("rain") || description.includes("thunderstorm")
          ? 1.0
          : description.includes("cloud") || description.includes("overcast")
          ? 0.4
          : 0.2; // Factor based on description

        const chanceOfRain = (clouds / 100 * 50) + (humidity / 100 * 30) + (rainDescriptionFactor * 20);

        return `${Math.min(Math.max(chanceOfRain, 0), 100).toFixed(1)}%`;
      })()
    : "0%"}
</p>

              </div>
            </div>
            <div className="wind-uv-div">
              <div className="wind-div">
                <p style={{
                  display:"flex",
                  alignItems:"center"
                }}><span><img src="https://cdn-icons-png.flaticon.com/128/9231/9231936.png" style={{
      width:"30px",
      height:"30px"
     }} alt="img"></img></span>Wind</p>
                <p style={{
  fontSize: "20px",
  paddingLeft: "10px"
}}>
  {(weather.wind?.speed ? (weather.wind.speed * 3.6).toFixed(1) : "0")} km/h
</p>

              </div>
              <div className="uv-div">
                <p style={{
                  display:"flex",
                  alignItems:"center"
                }}><span><img src="https://cdn-icons-png.flaticon.com/512/4005/4005885.png" style={{
      width:"30px",
      height:"30px"
     }} alt="img"></img></span>UV Index</p>
                <p style={{ fontSize: "20px", paddingLeft: "10px" }}>
  {weather.clouds?.all <= 10
    ? "High(8-10)"
    : weather.clouds?.all <= 50
    ? "Medium(4-7)"
    : "Low(0-3)" }
</p>

              </div>
            </div>

          </div>
        </div>
      </div>
















      <div className="div3">
        <div className="day-forecast-div">7-DAYFORECAST</div>
        <div className="forecast-details-div">
          <div className="detail-1div">
            <div className="day-text">{getDayText(0)} 
</div>

            <div className="day-type"><p style={{
                  display:"flex",
                  alignItems:"center"
                }}><span>
            



            {(() => {
   const tempK = weather.main?.temp; // Temperature in Kelvin
   const tempC = tempK - 273.15; // Convert to Celsius

   if (tempC < 0) {
     return <img style={{
      width:"30px",
      height:"30px"
     }}src="https://cdn-icons-png.flaticon.com/512/1553/1553358.png" alt="Snowy" />; // Display snowy image
   } else if (tempC >= 0 && tempC <= 15) {
     return <img style={{
      width:"30px",
      height:"30px"
     }}src="https://cdn-icons-png.flaticon.com/512/2242/2242879.png" alt="Cloudy" />; // Display cloudy image
   } else if (tempC > 15 && tempC <= 30) {
     return <img style={{
      width:"30px",
      height:"30px"
     }}src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="Sunny" />; // Display sunny image
   } else {
     return <img style={{
      width:"30px",
      height:"30px"
     }}src="https://cdn-icons-png.flaticon.com/512/4724/4724094.png" alt="Rainy" />; // Display rainy image
   }
 })()}

 </span>
            
            
            
            
            
            
            
            {(() => {
   const tempK = weather.main?.temp; // Temperature in Kelvin
   const tempC = tempK - 273.15; // Convert to Celsius

   if (tempC < 0) {
     return "Snowy"; 
   } else if (tempC >= 0 && tempC <= 15) {
     return "Cloudy"; // Display cloudy image
   } else if (tempC > 15 && tempC <= 30) {
     return "Sunny";
     } 
     else{
     return "Rainy"; // Display rainy image
   }
 })()}
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            </p></div>
            <div className="day-index">36/22</div>
          </div>
          <div className="detail-2div">
            <div className="day-text">{getDayText(1)}</div>
            <div className="day-type"><p style={{
                  display:"flex",
                  alignItems:"center"
                }}><span><img style={{
      width:"30px",
      height:"30px"
     }}src="https://cdn-icons-png.flaticon.com/512/4724/4724094.png" alt="Rainy" /></span>Rainy</p></div>
            <div className="day-index">32/22</div>
          </div>
          <div className="detail-3div">
            <div className="day-text">{getDayText(2)}</div>
            <div className="day-type"><p style={{
                  display:"flex",
                  alignItems:"center"
                }}><span><img style={{
      width:"30px",
      height:"30px"
     }}src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="Sunny" /></span>Sunny</p></div>
            <div className="day-index">34/24</div>
          </div>
          <div className="detail-4div">
            <div className="day-text">{getDayText(3)}</div>
            <div className="day-type"><p style={{
                  display:"flex",
                  alignItems:"center"
                }}><span> <img style={{
      width:"30px",
      height:"30px"
     }}src="https://cdn-icons-png.flaticon.com/512/2242/2242879.png" alt="Cloudy" /></span>Cloudy</p></div>
            <div className="day-index">34/25</div>
          </div>
          <div className="detail-5div">
            <div className="day-text">{getDayText(4)}</div>
            <div className="day-type"><p style={{
                  display:"flex",
                  alignItems:"center"
                }}><span><img style={{
      width:"30px",
      height:"30px"
     }}src="https://cdn-icons-png.flaticon.com/512/4724/4724094.png" alt="Rainy" /></span>Rainy</p></div>
            <div className="day-index">36/20</div>
          </div>
          <div className="detail-6div">
            <div className="day-text">{getDayText(5)}</div>
            <div className="day-type"><p style={{
                  display:"flex",
                  alignItems:"center"
                }}><span><img style={{
      width:"30px",
      height:"30px"
     }}src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="Sunny" /></span>Sunny</p></div>
            <div className="day-index">35/28</div>
          </div>
          <div className="detail-7div">
            <div className="day-text">{getDayText(6)}</div>
            <div className="day-type"><p style={{
                  display:"flex",
                  alignItems:"center"
                }}><span><img style={{
      width:"30px",
      height:"30px"
     }}src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="Sunny" /></span>Sunny</p></div>
            <div className="day-index">30/21</div>
          </div>
        </div>
      </div>























    </div>
  );
}

export default Weather;
