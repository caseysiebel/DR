import React from 'react';

import Tab from '../Tab';

import './style.scss';

import { Link } from 'react-router';

class Nav extends React.Component {
    render() {
        return (
            <div className='nav'>
                <Tab route='story' display='Our Story' />
                <Tab route='music' display='Music' />
                <Tab route='events' display='Upcoming Events' />
                <Tab route='contact' display='Get In Touch' />
            </div>
        );
    } 
}

export default Nav;
