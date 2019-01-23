import React, {Component} from "react";
import PropTypes from 'prop-types';

class PaletteCard extends Component {
  render() {
    const {name, colors} = this.props;
    return (
      <div className="card">
        <h2 className="card__name">{name}</h2>
        <ul className="card__colors">
          {colors.map((color, index)=>{
            return (
              <li className="card__color" style={{'backgroundColor': `#${color}`}} key={index}></li>
            );
          })}
        </ul>
      </div>
    );
  }
}

PaletteCard.propTypes = {
  name: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PaletteCard;