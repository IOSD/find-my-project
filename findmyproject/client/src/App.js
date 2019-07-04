// Libraries
import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

// Components
import Home from './components/home/home';

// Actions

// Utils and others
import store from './store';

class App extends Component{
    render(){
        return(
            <Provider store={store}>
              <Router>
                <Home/>
              </Router>
            </Provider>
        );
    }
}

export default App;