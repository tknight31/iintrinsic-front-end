class Auth {
  static login(userParams) {
    const userJSON = JSON.stringify(userParams)
    return fetch('http://localhost:3000/api/v1/login',{
      method: 'post',
      body: userJSON,
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
      .then(res => res.json())
  }

  static signup(userParams) {
    const userObject = {user: userParams}
    const userJSON = JSON.stringify(userObject)
    return fetch('http://localhost:3000/api/v1/users',{
      method: 'post',
      body: userJSON,
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
      .then(res => res.json())
  }

  static me() {
    const jwtToken = localStorage.getItem("token")
    return fetch('http://localhost:3000/api/v1/me',{
      headers:{
        "Authorization":`Bearer ${jwtToken}`,
        "Accept":"application/json"
      }
    })
    .then(res => res.json())
  }


  static logOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
  }
}


export default Auth
