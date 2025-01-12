import { useRef, useState, useEffect } from 'react';
import './App.css';
import { uploadFile } from './services/api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const fileInputRef = useRef();
  const logo = 'https://images.pexels.com/photos/2261166/pexels-photo-2261166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])
  const onUploadClick = () => {
    fileInputRef.current.click();
  }
  console.log(file);
  return (
    <div className='container'>
      <img src={logo} alt="banner" />
      <div className='wrapper'>
        <h1>Simple File Sharing</h1>
        <p>Upload and share the download link</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input type='file'
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <a href={result} target="_blank">{result}</a>
      </div>
    </div>
  );
}

export default App;
