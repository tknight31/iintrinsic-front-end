function projectsReducer(state = {list:[], isLoading:false}, action){


  switch (action.type) {
      case "FETCHING_PROJECTS":
        return Object.assign({}, state, {isLoading: true})
      case "FETCHED_PROJECTS":
        return Object.assign({}, state, {list: action.payload, isLoading: false})
      default:
        return state
    }

}

export default projectsReducer
