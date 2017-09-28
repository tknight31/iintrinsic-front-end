function usersReducer(state = {list:[], isLoading:false, ghostMode:false, currentUser:{}, displayedUser:{}}, action){

  switch (action.type) {
      case "FETCHING_USERS":
        return Object.assign({}, state, {isLoading: true})
      case "FETCHED_USERS":
        return Object.assign({}, state, {list: action.payload, isLoading: false})
      case "FETCHING_USER":
        return Object.assign({}, state, {isLoading: true})
      case "FETCHED_CURRENT_USER":
        return Object.assign({}, state, {currentUser: action.payload, isLoading: false, ghostMode: action.payload.ghost_mode})
      case "FETCHED_USER":
        return Object.assign({}, state, {displayedUser: action.payload, isLoading: false})
      case "SWITCH_GHOST_MODE":
        console.log(action.payload, "payload");
        return Object.assign({}, state, {ghostMode: action.payload, isLoading: false})
      default:
        return state
    }

}

export default usersReducer
