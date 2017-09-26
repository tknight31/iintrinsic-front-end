import React from 'react'
import ProjectUser from './ProjectUser'


class ProjectUserList extends React.Component {

  render() {
    console.log(userItems);

    const userItems = this.props.users.map((user) => <ProjectUser key={user.id} user={user}/>)

      return (
        <div className="project-user-list">
            {userItems}
        </div>
      )
    }
}



export default ProjectUserList
