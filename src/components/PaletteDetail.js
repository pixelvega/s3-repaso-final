import React, {Component, Fragment} from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class PaletteDetail extends Component {

  render() {
    const {myPalettes} = this.props;

    const paletteId = this.props.match.params.id;

    if (myPalettes.length > 0 && paletteId < myPalettes.length)  {
      const palette = myPalettes[paletteId];


      const {name, colors} = palette;
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
          <Link to="/">Volver</Link>
        </div>
      );

    } else {
      return (
        <Fragment>
          <p>Chato, no tenemos datos :(</p>
          <Link to="/">Volver</Link>
        </Fragment>
        );
    }
    
    
  }
}



export default PaletteDetail;