import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as $script from "scriptjs";
// import esri from 'esri';
// import Map from 'esri/Map'

import MapComponent from '../components/Map';

class MapPage extends React.Component {

  componentDidMount () {
    let dojoConfig={
        baseUrl: '/',
        packages: [{
          name: 'dgrid',
          location: 'bower_components/dgrid',
        }, {
          name: 'dijit',
          location: 'bower_components/dijit',
        }, {
          name: 'dojo',
          location: 'bower_components/dojo',
        }, {
          name: 'dojox',
          location: 'bower_components/dojox',
        }, {
          name: 'dstore',
          location: 'bower_components/dstore',
        }, {
          name: 'esri',
          location: 'bower_components/arcgis-js-api',
        }, {
          name: 'put-selector',
          location: 'bower_components/put-selector',
        }, {
          name: 'xstyle',
          location: 'bower_components/xstyle',
        }]
    }

    // let $script = require("scriptjs");
    // $script(['https://js.arcgis.com/3.16/'], function () {});
    require([
      "arcgis-js-api/map"
    ], function (map) {
      console.log(Map);
      var map = new Map("map", {
        center: [-118, 34.5],
        zoom: 8,
        basemap: "topo"
      });
    });

  }

  render () {
    return (
      <div>
        <link rel="stylesheet" href="https://js.arcgis.com/3.16/esri/css/esri.css"/>
        <script src="https://js.arcgis.com/3.16/"></script>
        <div id='viewDiv'></div>
        <MapComponent/>
      </div>
    );
  }
}

export default MapPage;
