import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class CategoryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return(
      <div className="mb">
        <SelectField
          id="category_list"
          floatingLabelText="Catégories"
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth={true}
        >
          <MenuItem value={0} primaryText="Choisissez la catégorie..." />
          <MenuItem value={null} disabled={true} primaryText="Equipements" />
          <MenuItem value={11} primaryText="Autres" />
          <MenuItem value={1} primaryText="Chapeau" />
          <MenuItem value={2} primaryText="Armure" />
          <MenuItem value={3} primaryText="Manteau" />
          <MenuItem value={4} primaryText="Chaussures" />
          <MenuItem value={5} primaryText="Bouclier" />
          <MenuItem value={6} primaryText="Armes" />
          <MenuItem value={7} primaryText="Accessoires" />
          <MenuItem value={null} disabled={true} primaryText="Items" />
          <MenuItem value={8} primaryText="Utilisable" />
          <MenuItem value={9} primaryText="Cartes" />
          <MenuItem value={10} primaryText="Autres" />
        </SelectField>
      </div>
    )
  }

}

export default CategoryList;
