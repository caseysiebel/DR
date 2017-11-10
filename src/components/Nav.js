import React from 'react';

import './style/nav.scss';

import { Link } from 'react-router';

class Nav extends React.Component {
    render() {
        return (
            <div className='nav'>
                <Link to='/story'>Our Story</Link>
                <Link to='/music'>Music</Link>
                <Link to='/events'>Upcoming Events</Link>
                <Link to='/contact'>Get In Touch</Link>
            </div>
        );
    } 
}

export default Nav;
