import React from 'react';
import './style.scss';

import flyer from '../../assets/afterburn-flyer.jpg';

class Event extends React.Component {
    render() {
        return (
            <div className='event'>
                <div className='flyer' >
                    <img src={ flyer } />
                </div>
                <div className='body'>
                    <h1>Name of Party</h1>
                    <p>Date of party</p>
                    <p>Location of party</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='buttons'>
                        <button>Buy Tickets</button>
                        <button>Facebook</button>
                    </div>
                </div>
            </div>
        );
    } 
}

export default Event;
