import React, { useState } from 'react';

const key ='2d4e8af8fa1dda677bedfb6c84f23700'

const Weather = () => {
    const [results, setResults] = useState('');
    const [description, setDescription] = useState('');
    const [unit, setUnit] = useState('imperial');
    const fetchResults = () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=41.0748313&lon=-85.3032709&appid=2d4e8af8fa1dda677bedfb6c84f23700&units=${unit}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setResults(Math.round(data.main.temp))
                setDescription(data.weather[0].description)
                console.log(data)
            })
            .catch(err => console.log(err))
    };
    const toggleUnit = () => {
        unit === 'imperial' ? setUnit('metric') : setUnit('imperial');
    }
    fetchResults();
    return (
        <div className="weather">
            <div>
                <h1>Your Local Weather</h1>
                <p>It is currently {results} degrees with {description}</p>
                <button onClick={toggleUnit}>Click for Fahrenheit/Celsius</button>
            </div>
        </div>
    );
};




export default Weather;

