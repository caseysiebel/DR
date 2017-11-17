import React from 'react';

import './style.scss';

class Tab extends React.Component {
    render() {
        return (
            <div className='tab'>
                <div to={ this.props.route }>{ this.props.display }</div>
            </div>
        );
    } 
}

export default Tab;
