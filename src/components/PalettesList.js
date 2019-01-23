import React, {Component} from "react";
import PaletteCard from './PaletteCard';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class PalettesList extends Component {
  render() {
    return (
      <ul className="app__list">
          {this.props.myPalettes.map(item => {
            return (
              <li className="app__list-item" key={item.id}>
                <Link to={`/palette/${item.id}`}>
                <PaletteCard name={item.name} colors={item.colors} />
                </Link>
              </li>
            );
          })}
        </ul>
    );
  }
}

PalettesList.propTypes = {
  myPalettes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PalettesList;