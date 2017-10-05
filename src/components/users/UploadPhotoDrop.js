import React from 'react'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import { connect } from 'react-redux'
import * as UserActions from '../../actions/users'
import { bindActionCreators } from 'redux'

class UploadPhotoDrop extends React.Component {


  handleDrop = files => {
    // Push all the axios request promise into a single array
    const uploaders = files.map(file => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "f6drkwqb"); // Replace the preset name with your own
      formData.append("api_key", "768652889395557"); // Replace API key with your own Cloudinary key
      formData.append("timestamp", (Date.now() / 1000) | 0);

      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios.post("https://api.cloudinary.com/v1_1/tkjvwptc/image/upload", formData, {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      }).then(response => {
        const data = response.data;
        const fileURL = data.secure_url // You should store this URL for future references in your app
        this.props.updateUserImage(fileURL)
      })
    });

    // Once all the files are uploaded
    axios.all(uploaders).then(() => {
      // ... perform after upload is successful operation
      console.log("success");
    });
  }

  render(){
    const dropStyle = {"width": "200px", "height": "200px", "borderWidth": "2px", "textAlign":"center", "borderColor": "rgb(102, 102, 102)", "borderStyle": "dashed", "borderRadius": "5px"}

    return(
      <Dropzone
        onDrop={this.handleDrop}
        multiple
        accept="image/*"
        style={dropStyle}

        >
        <p>Drop your files or click here to upload</p>
      </Dropzone>
    )
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(UserActions, dispatch)
}

export default connect(null, mapDispatchToProps)(UploadPhotoDrop)
