import React, { useState } from 'react'
import { storage } from './Firebase/firebase'

function App() {

  const allInputs = { imgUrl: '' }
  const [imageAsFile, setImageAsFile] = useState('')
  const [imageAsUrl, setImageAsUrl] = useState(allInputs)

  console.log(imageAsFile)
  const handleImageAsFile = (e) => {
    const image = e.target.files[0]
    console.log(image)

    handleFireBaseUpload(image)
    // setImageAsFile(imageFile => (image))
  }

  const handleFireBaseUpload = (img) => {
    // e.preventDefault()
    console.log('start of upload')
    // async magic goes here...
    // if (imageAsFile === '') {
    //   console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
    // }
    const uploadTask = storage.ref(`/images/${img.name}`).put(img)
    //initiates the firebase side uploading 
    uploadTask.on('state_changed',
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot)
      }, (err) => {
        //catches the errors
        console.log(err, 'here is error occured')
      }, () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage.ref('images').child(img.name).getDownloadURL()
          .then(fireBaseUrl => {
            console.log(fireBaseUrl)
            // setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }))
          })
      })
  }

  return (

    <div className="App">
      <h1>blank and ready for image upload.</h1>
      <form onSubmit={handleFireBaseUpload}>
        <input value={imageAsFile} onChange={(e) => handleImageAsFile(e)} type="file" /><br />
        <button>upload to firebase</button>
      </form>
      <img src={imageAsUrl.imgUrl} alt="upload pic" />
    </div>
  );
}

export default App;
