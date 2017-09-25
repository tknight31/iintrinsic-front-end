import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { connect } from 'react-redux'
import * as UserActions from '../actions/users'
import { bindActionCreators } from 'redux'

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


  currentUsersWithPositions = () => {
    return this.props.users.filter(user => !user["ghost_mode"] && user.latitude)
  }


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

    console.log(this.currentUsersWithPositions());

    const userMarkers = this.currentUsersWithPositions().map((user, index) => <Marker key={index} onClick={this.onMarkerClick} title={`${user['first_name']} ${user['last_name']}`} position={{lat: user['latitude'], lng: user['longitude']}} />)


    if (this.state.latitude && this.state.longitude) {
      return (
        <Map
          google={this.props.google}
          zoom={14}
          onClick={this.onMapClicked}
          style={style}
          initialCenter={{
              lat: this.state.latitude,
              lng: this.state.longitude
            }}
          >

          <Marker onClick={this.onMarkerClick} name={'Current location'} />
          {userMarkers}

          <InfoWindow
            marker={this.state.activeMarker}
            onClose={this.onMapClicked}
            visible={this.state.showingInfoWindow}>
              <div>
              <h1>USer</h1>
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

function mapStateToProps(state) {
  return {
     users: state.users.list
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: ("AIzaSyAJkAGk6ZQrwqduLPv9tNcM8aFqWMHRIdU")
})(MapContainer))
