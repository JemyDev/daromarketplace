import 'normalize.css/normalize.css';
import 'styles/App.css';

import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Home from './Home/Home';
import ShopList from './Shop/ShopList';
import ShopDetail from './Shop/ShopDetail';

class AppComponent extends React.Component {

  render() {

    const DefaultLayout = ({component: Component, ...rest}) => {
      return(
        <Route {...rest} render={matchProps => (
          <div>
            <Header/>
            <Component {...matchProps} />
            <Footer/>
          </div>
        )} />
      );
    };

    return (
      <Router>
        <div className="container">
          <Switch>
            <DefaultLayout path="/" component={Home} />
          </Switch>
          <Switch>
            <DefaultLayout path="/shop_list" component={ShopList} />
          </Switch>
          <Switch>
            <DefaultLayout path="/shop_detail:id" component={ShopDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
