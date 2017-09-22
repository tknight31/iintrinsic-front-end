function usersReducer(state = {list:[], isLoading:false}, action){

  switch (action.type) {
      case "FETCHING_USERS":
        return Object.assign({}, state, {isLoading: true})
      case "FETCHED_USERS":
        return Object.assign({}, state, {list: action.payload, isLoading: false})
      default:
        return state
    }

}

export default usersReducer
