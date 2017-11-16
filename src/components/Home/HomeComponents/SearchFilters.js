import React from 'react';

class SearchFilters extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showFilters: false};

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ showFilters: !this.state.showFilters });
  }

  render() {
    return (
      <div className="col s12 center-align">
        <a title="Plus de filtres..." className="btn-floating btn-large waves-effect waves-light red" onClick={this.onClick}><i className="material-icons">add</i></a>
        <div className={`scale-transition ${this.state.showFilters ? 'scale-out' : null}`}>
          <form>
          <div className="input-field col s12">
            <select>
              <option value="">Choisissez la catégorie...</option>
              <optgroup label="Equipment">
                <option value="11" >Autres</option>
                <option value="1" >Chapeau</option>
                <option value="2" >Armure</option>
                <option value="3" >Manteau</option>
                <option value="4" >Chaussures</option>
                <option value="5" >Bouclier</option>
                <option value="6" >Armes</option>
                <option value="7" >Accessoires</option>
              </optgroup>
              <optgroup label="Items">
                <option value="8" >Utilisable</option>
                <option value="9" >Cartes</option>
                <option value="10" >Autres</option>
              </optgroup>
            </select>
          </div>
          <div className="input-field col s12">
            <select id="min-upgrade">
              <option value="" selected>Choisissez le niveau minimum "d'upgrade"...</option>
                <option value="1" >+1</option>
                <option value="2" >+2</option>
                <option value="3" >+3</option>
                <option value="4" >+4</option>
                <option value="5" >+5</option>
                <option value="6" >+6</option>
                <option value="7" >+7</option>
                <option value="8" >+8</option>
                <option value="9" >+9</option>
                <option value="10" >+10</option>
            </select>
            ~
            <select id="max-upgrade">
              <option value="" selected>Choisissez le niveau maximum "d'upgrade"...</option>
                <option value="1" >+1</option>
                <option value="2" >+2</option>
                <option value="3" >+3</option>
                <option value="4" >+4</option>
                <option value="5" >+5</option>
                <option value="6" >+6</option>
                <option value="7" >+7</option>
                <option value="8" >+8</option>
                <option value="9" >+9</option>
                <option value="10" >+10</option>
            </select>
          </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchFilters;
