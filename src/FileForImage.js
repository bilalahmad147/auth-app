import React, { useState } from 'react'
import { storage } from './Firebase/firebase';

function FileForImage() {

    const allInputs = { imgUrl: '' }
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)
    console.log(imageAsUrl)

    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        console.log(image)
        setImageAsFile(im => (image))
    }

    const handleImageUpload = (e) => {
        e.preventDefault()
        console.log('start of upload')
        const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
        uploadTask.on('state_changed',
            (snapShot) => {
                console.log(snapShot)
            },
            (err) => {
                console.log(err, 'here is error occured')
            },
            () => {
                storage.ref('images').child(imageAsFile.name).getDownloadURL()
                    .then(fireBaseUrl => {
                        console.log(fireBaseUrl)
                        setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }))
                    })
            })
    }


    return (
        <div>
            <h1>Image Uploading</h1>
            <form onSubmit={handleImageUpload}>
                <input type='file' onChange={(e) => { handleImageAsFile(e) }} /><br />
                <button>Upload Image</button>
            </form>
            <br />
            <img width='350' height='auto' alt='imageWasUploaded' src={imageAsUrl.imgUrl} />
        </div>
    )
}

export default FileForImage
