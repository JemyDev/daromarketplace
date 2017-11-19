import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';

class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  onClick(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form id="general-search" className="mb-2 root">
        <GridList cellHeight='auto' className="gridList" cols={12}>
          <GridTile cols={10}>
            <div className="mr-1">
              <TextField
                hintText="Entrez un mot clé..."
                fullWidth={true}
              />
            </div>
          </GridTile>
          <GridTile cols={2}>
            <div>
              <RaisedButton
                label="Rechercher"
                primary={true}
                fullWidth={true}
              />
            </div>
          </GridTile>
        </GridList>
      </form>
    )
  }
}

export default Search;
