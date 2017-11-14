import React from 'react';

import './style.scss';

import Event from '../Event';

class Events extends React.Component {
    render() {
        return (
            <div className='events'>
                <h1>Upcoming Events</h1>

                <Event />
                <Event />
            </div>
        );
    } 
}

export default Events;
