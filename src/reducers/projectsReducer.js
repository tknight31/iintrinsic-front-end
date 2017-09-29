function projectsReducer(state = {list:[], users:[], userCreatedProjects:[], isLoading:false, displayedProject:{}, displayedGoals:[], projectImage:"https://res.cloudinary.com/tkjvwptc/image/upload/v1506612198/gdl1a9tahf5oja8za0py.jpg"}, action){


  switch (action.type) {
      case "FETCHING_PROJECTS":
        return Object.assign({}, state, {isLoading: true})
      case "FETCHED_PROJECTS":
        return Object.assign({}, state, {list: action.payload, isLoading: false})
      case "FETCHING_PROJECT":
        return Object.assign({}, state, {isLoading: true})
      case "FETCHED_PROJECT":
        return Object.assign({}, state, {displayedProject: action.payload, displayedGoals: action.payload.goals, projectImage: action.payload.project_image, isLoading: false})
      case "FETCHED_PROJECT_USERS":
        return Object.assign({}, state, {users: action.payload, isLoading: false})
      case "FETCHED_USER_CREATED_PROJECTS":
          return Object.assign({}, state, {userCreatedProjects: action.payload, isLoading: false})
      case "UPDATE_PRODUCT_IMAGE":
          return Object.assign({}, state, {projectImage: action.payload, isLoading: false})
      case "FETCHED_GOALS":
          return Object.assign({}, state, {displayedGoals: action.payload, isLoading: false})
      default:
        return state
    }

}

export default projectsReducer
