import React from 'react';

import './style.scss';

import logo from '../../assets/dr-logo-01.svg';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <img src={ logo }/>
            </div>
        );
    } 
}

export default Header;
