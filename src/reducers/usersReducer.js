function usersReducer(state = {list:[], isLoading:false, ghostMode:false, userImage:"https://res.cloudinary.com/tkjvwptc/image/upload/v1506612198/gdl1a9tahf5oja8za0py.jpg", currentUser:{}, displayedUser:{}}, action){

  switch (action.type) {
      case "FETCHING_USERS":
        return Object.assign({}, state, {isLoading: true})
      case "FETCHED_USERS":
        return Object.assign({}, state, {list: action.payload, isLoading: false})
      case "FETCHING_USER":
        return Object.assign({}, state, {isLoading: true})
      case "FETCHED_CURRENT_USER":
        return Object.assign({}, state, {currentUser: action.payload, isLoading: false, ghostMode: action.payload.ghost_mode, userImage: action.payload.user_image})
      case "FETCHED_USER":
        return Object.assign({}, state, {displayedUser: action.payload, isLoading: false})
      case "SWITCH_GHOST_MODE":
        return Object.assign({}, state, {ghostMode: action.payload, isLoading: false})
      case "UPDATE_IMAGE":
        return Object.assign({}, state, {userImage: action.payload, isLoading: false})
      default:
        return state
    }

}

export default usersReducer
