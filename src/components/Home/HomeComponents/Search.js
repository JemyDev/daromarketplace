import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <form className="col s12">
        <div className="row">
          <div className="input-field col s10">
            <input placeholder="Chercher un item..." id="search-bar" type="text" />
          </div>
          <div className="input-field col s2">
            <button className="btn waves-effect waves-light" type="submit" name="search">Rechercher
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default Search;
