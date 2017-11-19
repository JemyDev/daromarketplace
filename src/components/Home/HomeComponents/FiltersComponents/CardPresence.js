import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import {GridList, GridTile} from 'material-ui/GridList';

class CardPresence extends React.Component {

  render() {
    return(
      <div className="root-child mb">
        <GridList cols={12} cellHeight={50} className="gridList">
          <GridTile cols={3}>
            <h3>Items basiques</h3>
          </GridTile>
          <GridTile cols={9}>
            <Checkbox label={this.props.label} />
          </GridTile>
        </GridList>
      </div>
    )
  }

}

export default CardPresence;
