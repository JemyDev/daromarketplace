import React from 'react';
import {Route, Link} from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const daroAPI = keyword => `https://daro.fr/api/api.php?m=shop&filtre=${keyword}`;

class ShopList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      copied: false,
      shopData: []
    }
  }

  searchShops(event) {
    event.preventDefault();

  }

  componentDidMount(props) {
    const keyword = this.props.location.query.keyword;
    console.log(keyword);
    this.setState({loading: false});
    fetch(daroAPI(keyword))
    .then(res => res.json())
    .then(res => {
      this.setState({
        shopData: res
      });
    })
  }

  render() {

    if(this.state.loading) {
      return (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      );
    }

    const shopList = this.state.shops.map((shop, index) => {

      let item = {
        name: shop.name.replace(/_/g, ' '),
        price: shop.prix.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
      }

      return (
        <tr key={index}>
          <td>{shop.title}</td>
          <td>{item.name}</td>
          <td>{item.price} z</td>
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
