import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { connect } from 'react-redux'
import * as UserActions from '../actions/users'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

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

    setTimeout(this.props.setCurrentUserLocation(crd.latitude, crd.longitude), 2000)

  }

  error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
  };


  currentUsersWithPositions = () => {
    return this.props.users.filter(user => !user["ghost_mode"] && user.latitude && user.id !== parseInt(localStorage.getItem("id")))
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

    const userMarkers = this.currentUsersWithPositions().map((user, index) => <Marker key={index} onClick={this.onMarkerClick} userId={user.id} firstName={user['first_name']} lastName={user['last_name']} email={user['email']} role={user['role']} title={`${user.first_name} ${user.last_name}`} position={{lat: user['latitude'], lng: user['longitude']}} />)


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
              {this.state.selectedPlace.firstName && this.state.selectedPlace.lastName ? <h2>{this.state.selectedPlace.firstName} {this.state.selectedPlace.lastName}</h2> :  <h2>Me</h2>}
              <h4>{this.state.selectedPlace.role}</h4>
              <p><a href="#">{this.state.selectedPlace.email}</a></p>
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
     users: state.users.list,
     currentUser: state.users.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: ("AIzaSyAJkAGk6ZQrwqduLPv9tNcM8aFqWMHRIdU")
})(MapContainer))
