import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=27.2621&longitude=-80.3835&term=restaurants';
const key = 'Y8zpxPXSXajjNLu6SfG9R-pG-SRgMrZb6AscnnGtyDmFpqfh8sXxLgIXaysKjDJ_WwySh_xbYXsbrHmr5TVcAzoNRN7jZ_yJIQAHjfY5p3uf0p1CCzEguv74S6-WYHYx';
const clientId = 'Y79Zqjg2Dpu6BpD7nVtFrQ';

const GetYelp = () => {
    // const response = await axios.get()
    const [city, setCity] = useState("");
    const [state, setState] = useState('');
    const [address, setAddress] = useState('');
    const [nextFive, setNextFive] = useState('');
    const [prevFive, setPrevFive] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            const [restaurantList, setRestaurantList] = useState(null);
            const fetchResults = () => {
                let url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${long}&term=restaurants`;
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data)
                            .then(function (response) {
                                return response.json()
                            })
                            .then(function (json) {
                                console.log(json)
                            })
                        fetchResults();
                        return (
                            <div>
                                <div className="row mb-3">
                                    <div className="col-12">

                                    </div>
                                    <div className="col-12 text-justify">
                                        <h2>
                                            {city}, {country}
                                        </h2>
                                        <p>
                                            <b>Restaurants</b>
                                        </p>
                                    </div>
                                </div>
                                <button className="btn btn-primary mb-2" onClick={handleClick}>
                                    {button}
                                </button>
                            </div>
                        );
                    });
            };
        })
    })
}
       
         export default GetYelp;