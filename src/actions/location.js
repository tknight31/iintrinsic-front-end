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
