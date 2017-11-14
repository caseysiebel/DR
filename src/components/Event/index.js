import React from 'react';

import './style.scss';

class Event extends React.Component {
    render() {
        return (
            <div className='event'>
                <img className='flyer' />
                <div className='body'>
                    <h1>Name of Party</h1>
                    <p>Date of party</p>
                    <p>Location of party</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button>Buy Tickets</button>
                    <button>Facebook</button>
                </div>
            </div>
        );
    } 
}

export default Event;
