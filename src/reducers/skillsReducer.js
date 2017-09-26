function skillsReducer(state = {list:[], isLoading:false}, action){


  switch (action.type) {
      case "FETCHING_SKILLS":
        return Object.assign({}, state, {isLoading: true})
      case "FETCHED_SKILLS":
        return Object.assign({}, state, {list: action.payload, isLoading: false})
      default:
        return state
    }

}

export default skillsReducer
