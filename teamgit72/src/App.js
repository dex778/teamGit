import React, { useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Location from './components/Location'
import Nasa from './components/Nasa'
import Weather from './components/Weather'
function App() {
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
  },[])


  return (
    <div className="App">
      <Navbar />
      <Nasa lon={longitude} lat={latitude} />
      <Location />
      <Weather />
    </div>
  );
}
export default App;