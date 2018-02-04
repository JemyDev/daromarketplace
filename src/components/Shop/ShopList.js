import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class ShopList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      copied: false
    }
  }

  componentDidMount() {
    this.setState({loading: false});
  }

  render() {

    if(this.state.loading) {
      return (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      );
    }

    const shopList = this.props.shops.map((shop, index) => {
      return (
        <tr key={index}>
          <td>{shop.title}</td>
          <td>{shop.name}</td>
          <td>{shop.prix} z</td>
          <td>
            {shop.map} {shop.x}, {shop.y}
            <CopyToClipboard text={`/navi ${shop.map} ${shop.x}/${shop.y}`} onCopy={() => this.setState({copied: true})}>
              <button className="btn-floating waves-effect waves-light"><i className="material-icons">location_on</i></button>
            </CopyToClipboard>
          </td>
        </tr>
      )
    });
    return (
      <table id="shopList" className="centered highlight">
        <thead>
        <tr>
          <th>Nom du shop</th>
          <th>Nom de l'item</th>
          <th>Prix</th>
          <th>Localisation</th>
        </tr>
        </thead>
        <tbody>
        {shopList}
        </tbody>
      </table>
    )
  }
}

export default ShopList;
