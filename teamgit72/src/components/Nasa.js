import React, { useEffect } from 'react';


const key = 'VCgAOyrgEClw3lBf7jhqldaehMPVmFSjU5cSFNmV'

const Nasa = () => {

    useEffect (()=>{
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;

            fetch(
            //    ` api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=imperial`
              )
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
                 
                  })
                });
        })
      




    
    
  return (
    <div>
        
    </div> 

  );
};

export default Nasa;