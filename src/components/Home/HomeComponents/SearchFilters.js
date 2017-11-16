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
        <a title="Plus de filtres..." className="btn-floating btn-large waves-effect waves-light red mb" onClick={this.onClick}><i className="material-icons">add</i></a>
        <div className={`scale-transition ${this.state.showFilters ? '' : 'scale-out'}`}>
          <form>
            <div className="col s12 mb">
              <select className="browser-default">
                <option value={'selected'}>Choisissez la catégorie...</option>
                <optgroup label="Equipement">
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
            <div className="col s12 mb">
              <select className="browser-default col s5" id="upgrade_min">
                <option value={'selected'}>Choisissez le niveau minimum "d'upgrade"...</option>
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
              <div className="col s2 valign-wrapper center-align">
                ~
              </div>
              <select className="browser-default col s5" id="upgrade_max">
                <option value={'selected'}>Choisissez le niveau maximum "d'upgrade"...</option>
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
            <div className="col s12 mb">
              <div className="input-field col s5">
                <input placeholder="Prix minimum..." id="price_min" type="text" />
              </div>
              <div className="col s2 valign-wrapper center-align">
                ~
              </div>
              <div className="input-field col s5">
                <input placeholder="Prix maximum..." id="price_max" type="text" />
              </div>
            </div>
            <div className="col s12 mb">
              <div className="col s6">Montrer les derniers articles datant de</div>
              <select className="browser-default col s6" id="date_saled">
                  <option value="1" >7 jours</option>
                  <option value="2" >30 jours</option>
                  <option value="3" >3 mois</option>
                  <option value="4" >6 mois</option>
              </select>
            </div>
            <div className="col s12 mb">
              <select className="browser-default col s3" id="date_saled">
                <option value={'selected'}>Items sans card insérée...</option>
                  <option value="1">Oui</option>
                  <option value="2">Non</option>
              </select>
            </div>
            <div className="col s12 mb">
              <a className="waves-effect waves-light btn-large">Chercher</a>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchFilters;
