import React, { Component } from "react";
//import "./mapquest.js";
//import "./mapquest.css";

class MapQuestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    const mapStyle = {
      height: this.state.height,
      width: this.state.width
    };
    return (
      <div id="map" style={mapStyle}>
        <p style={{ textAlign: "center" }}>Map loading...</p>
      </div>
    );
  }

  componentDidMount() {
    let L = window.L;
    console.log(L);
    L.mapquest.key = this.state.apiKey;

    L.mapquest.map("map", {
      center: this.state.center,
      layers: L.mapquest.tileLayer(this.state.baseLayer),
      zoom: this.state.zoom
    });

    L.mapquest
      .textMarker([33.579703, -111.924051], {
        icon: {
          primaryColor: "#333333",
          secondaryColor: "#333333",
          size: "sm"
        },
        draggable: false,
        text: "Maverik Coffee",
        position: "right",
        subtext: "yum",
        type: "marker"
      })
      .addTo(L.mapquest.Map.getMap());

    L.mapquest
      .textMarker([33.557774, -111.88919], {
        icon: {
          primaryColor: "#333333",
          secondaryColor: "#333333",
          size: "sm"
        },
        draggable: false,
        text: "Woz U",
        position: "right",
        subtext: "The place to be!",
        type: "marker"
      })
      .addTo(L.mapquest.Map.getMap());
  }
}

export default MapQuestComponent;
