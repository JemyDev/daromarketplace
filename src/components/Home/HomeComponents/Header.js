import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open : false};
  }

  handleToggle = () => this.setState({ open: !this.state.open});

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <AppBar
          title="DARO Marketplace"
          onLeftIconButtonTouchTap={this.handleToggle}
          className="mb-2"
        />

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
            <MenuItem onClick={this.handleClose}>Item 1</MenuItem>
            <MenuItem onClick={this.handleClose}>Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default Header;
