function usersReducer(state = {list:[], isLoading:false, currentUser:{}, displayedUser:{}}, action){

  switch (action.type) {
      case "FETCHING_USERS":
        return Object.assign({}, state, {isLoading: true})
      case "FETCHED_USERS":
        return Object.assign({}, state, {list: action.payload, isLoading: false})
      case "FETCHING_USER":
        return Object.assign({}, state, {isLoading: true})
      case "FETCHED_CURRENT_USER":
        return Object.assign({}, state, {currentUser: action.payload, isLoading: false})
      case "FETCHED_USER":
        return Object.assign({}, state, {displayedUser: action.payload, isLoading: false})
      default:
        return state
    }

}

export default usersReducer
