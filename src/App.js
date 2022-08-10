import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PhotoGrid from './components/PhotoGrid';
import Modal from './components/Modal';
// import { Button } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
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
    <div className={theme ? "app-container-dark-mode" : "app-container"} onClick={changeState}>
      <header className="header">
        <h1 id={theme ? "header-title-dark-mode" : "header-title"}>AFBELARDI</h1> 
          <h3 id={theme ? "header-subtitle-dark-mode" : "header-subtitle"}>A photo blog of my travels.</h3>
          <BootstrapSwitchButton 
          width={100}
          onstyle="outline-primary"
          offstyle="outline-secondary"
          onlabel="Dark"
          offlabel="Light"
          checked={false}
          onChange={(e) => {changeTheme()}}/>
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
