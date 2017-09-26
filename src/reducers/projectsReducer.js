function projectsReducer(state = {list:[], users:[], isLoading:false, displayedProject:{}}, action){


  switch (action.type) {
      case "FETCHING_PROJECTS":
        return Object.assign({}, state, {isLoading: true})
      case "FETCHED_PROJECTS":
        return Object.assign({}, state, {list: action.payload, isLoading: false})
      case "FETCHING_PROJECT":
        return Object.assign({}, state, {isLoading: true})
      case "FETCHED_PROJECT":
        return Object.assign({}, state, {displayedProject: action.payload, isLoading: false})
      case "FETCHED_PROJECT_USERS":
        return Object.assign({}, state, {users: action.payload, isLoading: false})
      default:
        return state
    }

}

export default projectsReducer
