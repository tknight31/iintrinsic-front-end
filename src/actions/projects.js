export function addProject(project) {

  const projectJSON = JSON.stringify({
    name: project.name,
    category: project.category,
    long_desc: project["long_desc"],
    short_desc: project["short_desc"]
  })

  return function (dispatch) {
    dispatch({type:"FETCHING_PROJECTS"})
    fetch('http://localhost:3000/api/v1/projects',{
          method: 'POST',
          body: projectJSON,
          headers: {
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


export function removeProject(title) {
  return {
    type:"REMOVE_PROJECT",
    payload: title
  }
}


export function fetchProjects() {
  return function (dispatch) {
    dispatch({type:"FETCHING_PROJECTS"})
    fetch('http://localhost:3000/api/v1/projects')
      .then((res) => res.json())
      .then(projects => {
        dispatch({type:"FETCHED_PROJECTS", payload: projects})
      })
  }
}
