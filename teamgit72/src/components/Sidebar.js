import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom'
import Home from './Home';
// import Weather from './Weather';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/Home'>Home</Link></li>
                    {/* <li><Link to='/Location'>Location</Link></li> */}
                    {/* <li><Link to='/Weather'>Weather</Link></li> */}

                </ul>
            </div>
        <div className='sidebar-route'>
            <Route exact path='/Home'><Home /></Route>
            {/* <Route exact path='/Location'><Location /></Route> */}
            {/* <Route exact path='/Weather'><Weather /></Route> */}

        </div>
    </div>
    )
};

export default Sidebar;