import React from "react";
import {Redirect} from 'react-router-dom';
import MapGL, {Marker, Popup, NavigationControl, FullscreenControl} from "react-map-gl";
import AnimalPin from "./AnimalPin";
import AnimalInfo from "./AnimalInfo";
import Animals from "../data/sample.json";
import '../style/Map.css';

const fullscreenControlStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px"
};

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 34.885931,
        longitude: -23.543526,
        zoom: 2.5,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null
    };

    window.test = () => {
      this.setState({
        ...this.state,
        viewport: {
          ...this.state.viewport,
          zoom: this.state.viewport.zoom === 5 ? 1 : 5
        }
      });
    };
  }

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  _renderCityMarker = (animal, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={animal.longitude}
        latitude={animal.latitude}
      >
        <AnimalPin size={20} color={animal.color} onClick={() => this.setState({ popupInfo: animal })} />
      </Marker>
    );
  };

  _renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          className="container"
          tipSize={1}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <AnimalInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const { viewport } = this.state;
    const key = localStorage.getItem("key");
    return (
        <>
        {this.props.user !== null ?   
            <MapGL
                {...viewport}
                width="100vw"
                height="100vh"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={this._updateViewport}
                mapboxApiAccessToken={key}
            >
                {Animals.map(this._renderCityMarker)}

                {this._renderPopup()}

                <div className="fullscreen" style={fullscreenControlStyle}>
                <FullscreenControl />
                </div>
                <div className="nav" style={navStyle}>
                <NavigationControl />
                </div>
            </MapGL>
        :
        <Redirect to="/"/>
        }
        </>
    );
  }
}
export default Map
