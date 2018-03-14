import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import marketplaceApp from './stores/MarketplaceStore';
import {BrowserRouter as Router} from 'react-router-dom';
import AppContainer from './components/Main';

let store = createStore(marketplaceApp);

// Render the main component into the dom
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppContainer />
        </Router>
    </Provider>
  , document.getElementById('app'));
