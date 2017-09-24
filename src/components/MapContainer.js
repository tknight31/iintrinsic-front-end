import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      latitude: undefined,
      longitude: undefined
    }
  }

  componentDidMount() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    navigator.geolocation.getCurrentPosition(this.success, this.error, options)
  }

  success = (pos) => {
  var crd = pos.coords;

    this.setState({
      latitude: crd.latitude,
      longitude: crd.longitude
    })

    console.log('Your current position is:')
    console.log(`Latitude : ${crd.latitude}`)
    console.log(`Longitude: ${crd.longitude}`)
    console.log(`More or less ${crd.accuracy} meters.`)
  }

  error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  onMapClicked = (props) => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
}


render() {
    const style = {
    width: '100%',
    height: '100%'
    }

    if (this.state.latitude && this.state.longitude) {
      return (
        <Map
          google={this.props.google}
          zoom={14}
          style={style}
          initialCenter={{
              lat: this.state.latitude,
              lng: this.state.longitude
            }}
          >

          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose} visible={this.state.showingInfoWindow}>
              <div>
              <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      )
    } else {
      return (
        <div>Loading</div>
      )
    }



  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAJkAGk6ZQrwqduLPv9tNcM8aFqWMHRIdU")
})(MapContainer)
