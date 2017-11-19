import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import {GridList, GridTile} from 'material-ui/GridList';

class HistorySaled extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return(
      <div className="root-child mb">
        <GridList cols={12} cellHeight={80} className="gridList">
          <GridTile cols={7}>
            <Checkbox label={this.props.label} />
          </GridTile>
          <GridTile cols={5}>
            <SelectField id="history_saled"
              floatingLabelText="Historique de l'item"
              value={this.state.value}
              onChange={this.handleChange}
            >
                <MenuItem value={1} primaryText="7 jours" />
                <MenuItem value={2} primaryText="30 jours"/>
                <MenuItem value={3} primaryText="3 mois"/>
                <MenuItem value={4} primaryText="6 mois"/>
            </SelectField>
          </GridTile>
        </GridList>
      </div>
    )
  }

}

export default HistorySaled;
