import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PhotoGrid from './components/PhotoGrid';
import Modal from './components/Modal';
import { Button } from 'react-bootstrap';
function App(props) {

  const [photos, setPhotos] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [theme, setTheme] = useState(false);

  const changeState = () => {
    if (modal === true) {
      setModal(false)
    }
  }

  const changeTheme = () => {
    if (theme === false) {
      setTheme(true);
    } else {
      setTheme(false)
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
          <Button onClick={() => {changeTheme()}}>Dark Mode</Button>
      </header>
      <PhotoGrid 
        data={photos} 
        setPhotos={setPhotos}  
        setModal={setModal} 
        changeState={changeState}
        setSelectedPhoto={setSelectedPhoto}
        theme={theme}
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
