import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
render() {
    const style = {
    width: '100%',
    height: '100%'
    }
    return (
      <Map google={this.props.google} zoom={14} style={style}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>PLace</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAJkAGk6ZQrwqduLPv9tNcM8aFqWMHRIdU")
})(MapContainer)
