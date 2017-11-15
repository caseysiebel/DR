import React from 'react'; 

import { applyRouterMiddleware, browserHistory, Router, Route } from 'react-router';
import { useScroll } from 'react-router-scroll';

import Nav from '../Nav';

import Header from '../Header';
import Story from '../Story';
import Gallery from '../Gallery';
import Music from '../Music';
import Events from '../Events';
import Contact from '../Contact';


import './style.scss';

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Header />
                <Nav />
                <Story />
                <Music />
                <Events />
                <Contact />
            </div>
        );
    }
}

export default App;
