import React, { useState } from 'react'
import { storage } from './Firebase/firebase'

function App() {

  const allInputs = { imgUrl: '' }
  const [imgAsFile, setImgAsFile] = useState('')
  const [imgAsUrl, setImgAsUrl] = useState(allInputs)

  console.log(imgAsFile)
  const handleImgAsFile = (e) => {
    const image = e.target.files[0]
    setImgAsFile(imageFile => (image))
  }

  return (
    <div className="App">
      <h1>blank and ready for image upload.</h1>
      <form>
        <input type="file" />
      </form>
    </div>
  );
}

export default App;
