import React from 'react';
import Header from './HomeComponents/Header';
import Search from './HomeComponents/Search';
import SearchFilters from './HomeComponents/SearchFilters';
import Footer from './HomeComponents/Footer';

class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <Header/>
        <Search/>
        <SearchFilters/>
        <Footer/>
      </div>
    )
  }
}

export default Home;
