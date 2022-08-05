import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PhotoGrid from './components/PhotoGrid';
import Modal from './components/Modal';

function App(props) {

  const [photos, setPhotos] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});

  const changeState = () => {
    if (modal === true) {
      setModal(false)
    }
  }


 
useEffect(() => {
  (async () => {
    try {
      const response = await axios.get('https://photo-blog-backend.herokuapp.com/photos')
      const data = await response.data
      setPhotos(data);
    } catch (error) {
      console.error(error)
    }
})()
}, []);

  return (
    <div className="app-container" onClick={changeState}>
      <header className="header">
        <h1 id="header-title">AFBELARDI</h1> 
          <h3>A photo blog of my travels.</h3>
      </header>
      <PhotoGrid 
        data={photos} 
        setPhotos={setPhotos}  
        setModal={setModal} 
        changeState={changeState}
        setSelectedPhoto={setSelectedPhoto}
      />
      {
        modal ? 
          <Modal 
          data={photos} 
          setPhotos={setPhotos}
          selectedPhoto={selectedPhoto}
          />
        : ''
      }
    </div>
  );
}

export default App;
