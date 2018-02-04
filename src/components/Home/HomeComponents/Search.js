import React from 'react';
import SearchFilters from './SearchFilters';
import ShopList from '../../Shop/ShopList';
import 'whatwg-fetch';

const daroAPI = keyword => `https://daro.fr/api/api.php?m=shop&filtre=${keyword}`;

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showFilters: false,
      keyword: '',
      shopData: []
    };
    this.openSearchFilter = this.openSearchFilter.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchShops = this.searchShops.bind(this);
  }

  openSearchFilter() {
    this.setState({
      showFilters: !this.state.showFilters
    });
  }

  handleChange(event) {
    this.setState({ keyword : event.target.value })
  }

  searchShops(event) {
    event.preventDefault();
    fetch(daroAPI(this.state.keyword))
    .then(res => res.json())
    .then(res => {
      this.setState({
        shopData: res
      });
    })
  }

  render() {
    return (
      <div id="search" className="col s12 center-align">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s10">
              <input placeholder="Chercher un item..." id="search-bar" type="text" onChange={ this.handleChange } />
            </div>
            <div className="input-field col s2">
              <button className="btn waves-effect waves-light" name="search" onClick={ this.searchShops }>Rechercher
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
        <a title="Plus de filtres..." className="btn-floating btn-large waves-effect waves-light mb" onClick={this.openSearchFilter}><i className="material-icons">add</i></a>
        <SearchFilters showFilters={this.state.showFilters} />
        {this.state.shopData.length > 0 ? <ShopList shops={this.state.shopData}  /> : ''}
      </div>
    )
  }
}

export default Search;
