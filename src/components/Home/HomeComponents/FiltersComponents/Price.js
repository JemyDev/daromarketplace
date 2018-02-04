import React from 'react';
import Slider from 'material-ui/Slider';

class Price extends React.Component {

  constructor(props) {
    super(props);
    this.power = 12;
    this.min = 0;
    this.max = Math.pow(10, 9);
    this.state = { slider: this.min };
  }

  handleSlider = (event, value) => this.setState({slider: this.transform(value)});

  transform = value => {return Math.round((Math.exp(this.power * value / this.max) - 1) / (Math.exp(this.power) -1) * this.max)};

  reverse = value => {return (1 / this.power) * Math.log(((Math.exp(this.power) - 1) * value / this.max) + 1) * this.max};

  render() {

    let labelPrice;

    if(this.props.name == 'price_min'){
      labelPrice = 'Prix minimum : ';
    } else {
      labelPrice = 'Prix maximum : ';
    }

    return(
      <div>
        <Slider
          name={this.props.name}
          min={this.min}
          max={this.max}
          step={100}
          value={this.reverse(this.state.slider)}
          onChange={this.handleSlider}
        />
        <p>
          <span className="price_value">
            {labelPrice} {this.state.slider} zenys
          </span>
        </p>
      </div>
    )
  }

}

export default Price;
