import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class RefineList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return(
      <SelectField
        id={this.props.id}
        floatingLabelText={this.props.label}
        value={this.state.value}
        onChange={this.handleChange}
      >
          <MenuItem value={0} primaryText="Choisissez le niveau d'upgrade..." />
          <MenuItem value={1} primaryText="+1" />
          <MenuItem value={2} primaryText="+2" />
          <MenuItem value={3} primaryText="+3" />
          <MenuItem value={4} primaryText="+4" />
          <MenuItem value={5} primaryText="+5" />
          <MenuItem value={6} primaryText="+6" />
          <MenuItem value={7} primaryText="+7" />
          <MenuItem value={8} primaryText="+8" />
          <MenuItem value={9} primaryText="+9" />
          <MenuItem value={10} primaryText="+10" />
      </SelectField>
    )
  }

}

export default RefineList;
