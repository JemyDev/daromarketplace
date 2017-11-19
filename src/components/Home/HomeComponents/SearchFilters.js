import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';

import CategoryList from './FiltersComponents/CategoryList';
import RefineList from './FiltersComponents/RefineList';
import Price from './FiltersComponents/Price';
import HistorySaled from './FiltersComponents/HistorySaled';
import CardPresence from './FiltersComponents/CardPresence';

class SearchFilters extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showFilters: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ showFilters: !this.state.showFilters });
  }

  render() {
    return (
      <div>
        <div className="center-align">
          <FloatingActionButton secondary={true} onClick={this.onClick}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
        <form className={`root animate ${this.state.showFilters ? 'active' : ''}`}>
          <GridList cellHeight={150} cols={12} className="gridList">
            <GridTile cols={6}>
              <CategoryList />
            </GridTile>
            <GridTile cols={6}>
              <div className="root-child mb">
                <RefineList id="upgrade_min" label="Upgrade min" />
                <div className="wave-separator">
                  <span>~</span>
                </div>
                <RefineList id="upgrade_max" label="Upgrade max" />
              </div>
            </GridTile>
            <GridTile cols={12}>
              <div className="root-child mb">
                <GridList cols={9} className="gridList-price">
                  <GridTile cols={4} className="slider-price">
                    <Price name="price_min" />
                  </GridTile>
                  <GridTile cols={1}>
                    <div className="wave-separator center-align">
                      <span>~</span>
                    </div>
                  </GridTile>
                  <GridTile cols={4} className="slider-price">
                    <Price name="price_max" />
                  </GridTile>
                </GridList>
              </div>
            </GridTile>
            <GridTile cols={6}>
              <HistorySaled label="Montrer les derniers articles datant de" />
            </GridTile>
            <GridTile cols={6}>
              <CardPresence label="seulement les items sans cards insérées" />
            </GridTile>
          </GridList>
          <div>
            <RaisedButton
              label="Chercher"
              primary={true}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchFilters;
