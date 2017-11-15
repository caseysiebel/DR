import React from 'react';
import './style.scss';

import img from '../../assets/waiting.jpg';

class Gallery extends React.Component {
    render() {
        return (
            <svg className='gallery'>
                <defs>
                    <rect className='trapizoid'/>
                    <rect className='middle'/>
                    <rect className='bottom'/>
                    <rect className='right'/>
                </defs>
            </svg>
        );
    } 
}

export default Gallery;
