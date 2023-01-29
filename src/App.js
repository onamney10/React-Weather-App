
import React,{useState} from "react";
import styled from "styled-components";
import Citycomponent from "./modules/Citycomponent";
import Weathercomponent from "./modules/Weathercomponent";


export const Weathericons = {
  Sunrise:"/React-Weather-App/icons/temp.svg",
  Sunset:"/React-Weather-App/icons/temp.svg",
  Humidity:"/React-Weather-App/icons/humidity.svg",
  Wind:"/React-Weather-App/icons/wind.svg",
  Pressure:"/React-Weather-App/icons/pressure.svg",
}

export const WeatherI = {
  "01d": "/React-Weather-App/icons/sunny.svg",
  "01n": "/React-Weather-App/icons/night.svg",
  "02d": "/React-Weather-App/icons/day.svg",
  "02n": "/React-Weather-App/icons/cloudy-night.svg",
  "03d": "/React-Weather-App/icons/cloudy.svg",
  "03n": "/React-Weather-App/icons/cloudy.svg",
  "04d": "/React-Weather-App/icons/perfect-day.svg",
  "04n": "/React-Weather-App/icons/cloudy-night.svg",
  "09d": "/React-Weather-App/icons/rain.svg",
  "09n": "/React-Weather-App/icons/rain-night.svg",
  "10d": "/React-Weather-App/icons/rain.svg",
  "10n": "/React-Weather-App/icons/rain-night.svg",
  "11d": "/React-Weather-App/icons/storm.svg",
  "11n": "/React-Weather-App/icons/storm.svg",
  "13d":"/React-Weather-App/icons/sunny.svg",
  "13n":"/React-Weather-App/icons/night.svg",
  "50d":"/React-Weather-App/icons/storm.svg",
  "50n":"/React-Weather-App/icons/storm.svg",
};

const AppContainer = styled.div`
display:flex;
flex-direction:column;
margin: auto;
align-items:center;
width:380px;
border:solid 1px;
padding: 20px 10px;
border-radius:4px;
box-shadow: 0 3px 6px #555;
backgroud:white;
font-family:Montserrat;

`;
const AppLabel = styled.span`
color:black;
font-size:18px; 
font-weight:bold;
`;


const apikey = "318bd52da61a4062b9369f6493206b49";

function App() {

const [city,updatecity] =  useState("");
 const [weather,updateweather] = useState("");


 const fetchweather=async(e)=>{
  e.preventDefault();
  const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
  const data =  await response.json();
  updateweather(data);
  }


return (
    <AppContainer>
      <AppLabel>React weather App</AppLabel>
      {weather?<Weathercomponent weather={weather}/>
      :<Citycomponent updatecity={updatecity} fetchweather={fetchweather}/>}
     
    
    </AppContainer>
  );
}

export default App;
