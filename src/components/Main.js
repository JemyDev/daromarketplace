import 'normalize.css/normalize.css';
import 'styles/App.css';

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Home from './Home/Home';
import ShopList from './Shop/ShopList';
import ShopDetail from './Shop/ShopDetail';

class AppComponent extends React.Component {

  render() {

    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/shops' component={ShopList} />
          <Route path="/shop/:id" component={ShopDetail} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
