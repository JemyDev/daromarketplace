import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="col s12">
        <h1 className="center-align card-panel teal lighten-2 white-text">
          <Link to="/">Daro Marketplace</Link>
        </h1>
      </header>
    )
  }
}

export default Header;
