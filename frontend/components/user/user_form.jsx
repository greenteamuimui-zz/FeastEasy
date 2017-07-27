import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'feasteasypics';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/greenteamuimui/image/upload';


class UserForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      uploadedFileCloudinaryUrl: ''
    };
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
        this.props.updateUser(this.props.currentUser.id, response.body.secure_url);
      }
    });
  }


  render () {
    console.log(this.props);
    return(
      <div>
        <div className="pic-form">
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
        </div>
        <div>
         {this.state.uploadedFileCloudinaryUrl === '' ? null :
         <div>
           <p>{this.state.uploadedFile.name}</p>
           <img src={this.state.uploadedFileCloudinaryUrl} />
         </div>}
        </div>
      </div>
    );
  }

}

export default UserForm;
