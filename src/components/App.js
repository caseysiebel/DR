import React from 'react'; 

import { applyRouterMiddleware, browserHistory, Router, Route } from 'react-router';
import { useScroll } from 'react-router-scroll';

import Nav from './Nav';

import Header from './Header';
import Story from './Story';

import './style/app.scss';

const routes = [
    <Route exact path='/' component={Header}/>,
    <Route path='/story' component={Story}/>
]; 
class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Nav />
                <Router
                    history={browserHistory}
                    routes={routes}
                    render={applyRouterMiddleware(useScroll())}
                />
            </div>
        );
    }
}

export default App;
