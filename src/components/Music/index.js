import React from 'react';
//import { Link } from 'react-router';

import './style.scss';

import Tiles from '../Tiles';

class Music extends React.Component {
    render() {
        return (
            <div className='music'>
                <h1 className='component-title'>The Music</h1>
                <Tiles />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
        );
    } 
}

export default Music;
