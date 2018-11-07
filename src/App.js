import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import L from 'leaflet';

class App extends Component {
  render() {
    return <div id="mapid" />;
  }

  componentDidMount() {
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer(
      'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoianVsaWFuYmVpZ2h0b25keWtlcyIsImEiOiJjam83OWswZmYwYmJpM3FwN3M2NHFld2x1In0.PDZj9MvL5YOKm_wE5PIB3A',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'
      }
    ).addTo(mymap);
  }
}

export default App;
