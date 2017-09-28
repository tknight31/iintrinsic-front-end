export function fetchUsers() {
  const jwtToken = localStorage.getItem("token")

  return function (dispatch) {
    dispatch({type:"FETCHING_USERS"})
    fetch('http://localhost:3000/api/v1/users',{
      headers: {
        "Authorization":`Bearer ${jwtToken}`,
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
      .then((res) => res.json())
      .then(users => {
        dispatch({type:"FETCHED_USERS", payload: users})
      })
  }
}


export function getUserData(id) {
  const jwtToken = localStorage.getItem("token")

  return function (dispatch) {
    dispatch({type:"FETCHING_USER"})
    fetch(`http://localhost:3000/api/v1/users/${id}`,{
      headers: {
        "Authorization":`Bearer ${jwtToken}`,
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
      .then((res) => res.json())
      .then(user => {
        dispatch({type:"FETCHED_USER", payload: user})
      })
  }
}

export function setCurrentUser() {
  const jwtToken = localStorage.getItem("token")
  const id = localStorage.getItem("id")

  return function (dispatch) {
    dispatch({type:"FETCHING_USER"})
    fetch(`http://localhost:3000/api/v1/users/${id}`,{
      headers: {
        "Authorization":`Bearer ${jwtToken}`,
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
      .then((res) => res.json())
      .then(user => {
        dispatch({type:"FETCHED_CURRENT_USER", payload: user})
      })
  }
}

export function resetUsers() {
  const jwtToken = localStorage.getItem("token")
  const id = localStorage.getItem("id")

  return function (dispatch) {
    dispatch({type:"FETCHING_USER"})
    fetch(`http://localhost:3000/api/v1/users/${id}`,{
      headers: {
        "Authorization":`Bearer ${jwtToken}`,
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
      .then((res) => res.json())
      .then(user => {
        dispatch({type:"FETCHED_CURRENT_USER", payload: user})
      })
  }
}

export function setCurrentUserLocation(lat, long) {
  const jwtToken = localStorage.getItem("token")
  const id = localStorage.getItem("id")
  const latLongJSON = JSON.stringify({
    latitude: lat,
    longitude: long,
  })

  return function (dispatch) {
    dispatch({type:"FETCHING_USER"})
    fetch(`http://localhost:3000/api/v1/users/${id}`,{
      method: 'POST',
      body: latLongJSON,
      headers: {
        "Authorization":`Bearer ${jwtToken}`,
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
  }
}

export function switchGhostMode(ghostMode) {
  const jwtToken = localStorage.getItem("token")
  const id = localStorage.getItem("id")
  const ghostJSON = JSON.stringify({
    ghost_mode: ghostMode
  })

  return function (dispatch) {
    dispatch({type:"FETCHING_USER"})
    fetch(`http://localhost:3000/api/v1/users/${id}/ghost`,{
      method: 'POST',
      body: ghostJSON,
      headers: {
        "Authorization":`Bearer ${jwtToken}`,
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
    .then((res) => res.json())
    .then(ghostMode => {
      dispatch({type:"SWITCH_GHOST_MODE", payload: ghostMode})
    })
  }
}

export function logoutUser() {
  localStorage.removeItem('token')
  localStorage.removeItem('id')

  return function (dispatch) {
    dispatch({type:"USER_LOGOUT"})
  }
}
