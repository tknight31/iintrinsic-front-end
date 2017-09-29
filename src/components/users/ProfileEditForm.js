import React from 'react'
import UploadPhotoDrop from './UploadPhotoDrop'


class ProfileEditForm extends React.Component {

    state = {
      first_name: this.props.currentUser.first_name,
      last_name: this.props.currentUser.last_name,
      role: this.props.currentUser.role,
      bio: this.props.currentUser.bio
    }

    handleSubmit = (event) => {
      event.preventDefault()


      this.props.updateUserInfo(this.state)
      this.props.history.replace("/dashboard/home")


    }

    handleInputChange = (event) => {
      const currInput = event.target.name
      this.setState({
        [currInput] : event.target.value
      })
    }


  render() {

    const imgStyle = this.props.userImage ? {backgroundImage: 'url(' + this.props.userImage + ')'} : null

    return (
      <div>

        <div className="dash-main-head">
          <h2>Edit Profile</h2>
        </div>

        <div className="edit-wrapper">
          <div className="edit-image-upload">
            <div className="profile-image-border">
              <div style={imgStyle} className="large-avatar profile-image"></div>
            </div>
            <UploadPhotoDrop/>
          </div>
          <div className="edit-form">

              <form onSubmit={this.handleSubmit}>
                <div>
                  <label>First Name</label><input type="text" name="first_name" onChange={this.handleInputChange} value={this.state["first_name"]} required/>
                  <label>Last Name</label><input type="text" name="last_name" onChange={this.handleInputChange} value={this.state["last_name"]} required/>
                </div>

                <div>
                  <label>Choose Your Role</label>
                  <select name="role" value={this.state.role} onChange={this.handleInputChange}>
                    <option value="engineer">Engineer</option>
                    <option value="designer">Designer</option>
                    <option value="visionary">Visionary</option>
                  </select>
                </div>
                <div><label>Tell Us a Little About yourself</label><textarea name="bio" onChange={this.handleInputChange} value={this.state.bio}></textarea></div>


                <input className="button" type="submit" value="Edit"/>
              </form>

          </div>

        </div>


      </div>
    )

  }
}



export default ProfileEditForm
