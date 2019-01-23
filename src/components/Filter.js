import React, {Component} from "react";
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <input type="text" onKeyUp={this.props.action}/>
      </div>
    );
  }
}

Filter.propTypes = {
  action: PropTypes.func.isRequired
};

export default Filter;