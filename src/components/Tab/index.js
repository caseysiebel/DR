import React from 'react';

import './style.scss';

import { Link } from 'react-router';

class Tab extends React.Component {
    render() {
        return (
            <div className='tab'>
                <Link to={ this.props.route }>{ this.props.display }</Link>
            </div>
        );
    } 
}

export default Tab;
