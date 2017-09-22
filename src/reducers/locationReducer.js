function locationReducer(state = {location:[], isLoading:false}, action){


  switch (action.type) {
      case "GETTING_LOCATION":
        return Object.assign({}, state, {isLoading: true})
      case "CURRENT_LOCATION":
        return Object.assign({}, state, {location: action.payload, isLoading: false})
      default:
        return state
    }

}

export default locationReducer
