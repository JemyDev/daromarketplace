require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Home from './Home/Home'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <Home/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
