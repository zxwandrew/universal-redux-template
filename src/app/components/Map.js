import React, { PropTypes } from 'react';

// const {Map} = esri;

class MapComponent extends React.Component {
  componentWillMount () {
  };

  render () {
    return (
      <div>
        <div>im a map</div>
        <div id='mapDiv'></div>
      </div>
    );
  }
}

export default MapComponent;
