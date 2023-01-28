import styled from 'styled-components';
import React from 'react'
import { Weathericons } from '../App';
import { WeatherI } from '../App';

const Weathercondition = styled.div`
display:flex;
flex-direction:row;
width:100%;
margin: 30px auto;
align-items:center;
justify-content:space-between;
`;
const Condition = styled.span`
margin:20px auto;
font-size:14px;
& span{
  font-size:28px;
}

`;
const Weatherlogo= styled.img`
width:100px;
height:100px;
margin : 5px auto;

`;
const Location = styled.span`
font-size:28px;
font-weight:bold;
`;
const Weatherinfo = styled.span`
font-size:14px;
font-weight:bold;
margin:20px 25px 10px;
text-align:start;
width:90%;
`;
const Weatherinfocontainer = styled.div`
display:flex;
width:90%;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
flex-wrap:wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const Infoicon = styled.img`
  width: 36px;
  height: 36px;
`;
const Infolabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;
const Weatherinfocomponent = (props)=>{
const {name,value} = props;
  return(
    <InfoContainer>
      <Infoicon src={Weathericons[name]}/>
      <Infolabel>
        {value}
        <span>{name}</span>

      </Infolabel>
    </InfoContainer>
  );
}
const Weathercomponent = (props)=>{
  
  const {weather} = props;
  
  const isday = weather?.weather[3]?.icon?.includes('d');
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
}
     
 
  return <> 
  <Weathercondition>
    <Condition><span>{`${Math.floor(weather?.main?.temp - 273)}°C`} c</span> | {weather?.weather[0]?.description}</Condition>
    <Weatherlogo src={WeatherI[weather.weather[0].icon]}></Weatherlogo>
  </Weathercondition>
  <Location>{`${weather?.name},${weather?.sys?.country}`}</Location>
  <Weatherinfo>Weather Info</Weatherinfo>
  <Weatherinfocontainer>
    <Weatherinfocomponent value={`${getTime(weather?.sys[isday ? "sunset" : "sunrise"])}`}  name={isday?"Sunset":"Sunrise"}/>
    <Weatherinfocomponent value={weather?.main?.humidity}  name="Humidity" />
    <Weatherinfocomponent value={weather?.wind?.speed} name="Wind" />
    <Weatherinfocomponent value={weather?.main?.pressure}  name="Pressure" />
    
  </Weatherinfocontainer>
  
  </>
}
export default Weathercomponent;