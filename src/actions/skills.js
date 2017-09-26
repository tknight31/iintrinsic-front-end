export function addSkill(skillName) {

  const skillJSON = JSON.stringify({
    name: skillName
  })

  const jwtToken = localStorage.getItem("token")

  return function (dispatch) {
    dispatch({type:"FETCHING_SKILLS"})
    fetch('http://localhost:3000/api/v1/skills',{
          method: 'POST',
          body: skillJSON,
          headers: {
            "Authorization":`Bearer ${jwtToken}`,
            "Content-Type":"application/json",
            "Accept":"application/json"
          }
    })
      .then((res) => res.json())
      .then(skills => {
        dispatch({type:"FETCHED_SKILLS", payload: skills})
      })
  }

}


export function removeSkill(name) {
  const jwtToken = localStorage.getItem("token")

  return {
    type:"REMOVE_PROJECT",
    payload: name
  }
}


export function fetchSkills(id) {
  const jwtToken = localStorage.getItem("token")

  return function (dispatch) {
    dispatch({type:"FETCHING_SKILLS"})
    fetch(`http://localhost:3000/api/v1/skills/${id}`,{
      headers: {
        "Authorization":`Bearer ${jwtToken}`,
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
      .then((res) => res.json())
      .then(skills => {
        dispatch({type:"FETCHED_SKILLS", payload: skills})
      })
  }
}
