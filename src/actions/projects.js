export function addProject(project) {

  const projectJSON = JSON.stringify({
    name: project.name,
    category: project.category,
    long_desc: project["long_desc"],
    short_desc: project["short_desc"]
  })

  const jwtToken = localStorage.getItem("token")

  return function (dispatch) {
    dispatch({type:"FETCHING_PROJECTS"})
    fetch('http://localhost:3000/api/v1/projects',{
          method: 'POST',
          body: projectJSON,
          headers: {
            "Authorization":`Bearer ${jwtToken}`,
            "Content-Type":"application/json",
            "Accept":"application/json"
          }
    })
      .then((res) => res.json())
      .then(projects => {
        dispatch({type:"FETCHED_PROJECTS", payload: projects})
      })
  }

}

export function makeRequest(project) {

  const jwtToken = localStorage.getItem("token")
  const projectJSON = JSON.stringify(project)

  return function (dispatch) {
    dispatch({type:"FETCHING_PROJECTS"})
    fetch('http://localhost:3000/api/v1/requests',{
          method: 'POST',
          body: projectJSON,
          headers: {
            "Authorization":`Bearer ${jwtToken}`,
            "Content-Type":"application/json",
            "Accept":"application/json"
          }
    })
      .then((res) => res.json())
      .then(projects => {
        dispatch({type:"FETCHED_PROJECTS", payload: projects})
      })
  }

}

export function getProjectData(id) {
  const jwtToken = localStorage.getItem("token")

  return function (dispatch) {
    dispatch({type:"FETCHING_PROJECT"})
    fetch(`http://localhost:3000/api/v1/projects/${id}`,{
      headers: {
        "Authorization":`Bearer ${jwtToken}`,
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
      .then((res) => res.json())
      .then(project => {
        dispatch({type:"FETCHED_PROJECT", payload: project})
      })
  }
}

export function getProjectUsers(id) {
  const jwtToken = localStorage.getItem("token")

  return function (dispatch) {
    dispatch({type:"FETCHING_PROJECT"})
    fetch(`http://localhost:3000/api/v1/projects/${id}/users`,{
      headers: {
        "Authorization":`Bearer ${jwtToken}`,
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
      .then((res) => res.json())
      .then(users => {
        dispatch({type:"FETCHED_PROJECT_USERS", payload: users})
      })
  }
}


export function removeProject(title) {
  const jwtToken = localStorage.getItem("token")

  return {
    type:"REMOVE_PROJECT",
    payload: title
  }
}


export function fetchProjects() {
  const jwtToken = localStorage.getItem("token")

  return function (dispatch) {
    dispatch({type:"FETCHING_PROJECTS"})
    fetch('http://localhost:3000/api/v1/projects',{
      headers: {
        "Authorization":`Bearer ${jwtToken}`,
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
      .then((res) => res.json())
      .then(projects => {
        dispatch({type:"FETCHED_PROJECTS", payload: projects})
      })
  }
}
