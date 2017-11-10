import React from 'react';
//import { Link } from 'react-router';

import './style/tiles.scss';

import MusicTile from './MusicTile';

class Tiles extends React.Component {
    render() {
        return (
            <div className='tiles'>
                <MusicTile />
                <MusicTile />
                <MusicTile />
            </div>
        );
    } 
}

export default Tiles;
