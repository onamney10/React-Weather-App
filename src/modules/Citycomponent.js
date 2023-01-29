import React from 'react'
import styled from 'styled-components'



const Weatherlogo = styled.img`
width:140px;
height:140px;
margin : 40px auto;
`;

const Citylabellogo = styled.span`
color:black;
font-size:18px;
font-weight:bold;
margin: 10px auto;
`;

const Searchcity = styled.form`

display:flex;
flex-direction: row;
color:black;
border:black solid 1px;
border-radius:2px;
margin: 20px auto;
& input{
  padding:10px;
  font-size:14px;
  border:none;
  outline:none;
  font-weight:bold;
}
& button {
  padding:10px;
  color: white;
  background:black;
  font-size:14px;
  border:none;
  outline:none;
  font-weight:bold;
  cursor:pointer;

}
`;
function Citycomponent(props) {
  const {updatecity,fetchweather} = props;

  const updatecityhandler=(e)=>{
    updatecity(e.target.value);

  }
  const updateweatherhandler=(e)=>{
    
    fetchweather(e);
  }

    return (
    <>
      <Weatherlogo  src="/React-Weather-App/icons/perfect-day.svg" ></Weatherlogo>
      <Citylabellogo>Find  Weather of your City</Citylabellogo>
      <Searchcity onSubmit={updateweatherhandler}>
        <input type="text" placeholder="city" onChange={updatecityhandler} ></input>
        <button type='submit'> Search</button>
      </Searchcity>
      
    </>
  )
}

export default Citycomponent
