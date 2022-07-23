import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PhotoGrid from './components/PhotoGrid';


function App(props) {

  const [photos, setPhotos] = useState([])


useEffect(() => {
  (async () => {
    try {
      const response = await axios.get('http://localhost:3000/photos')
      const data = await response.data
      setPhotos(data);
    } catch (error) {
      console.error(error)
    }
})()
}, []);

  return (
    <div className="app-container">
      <header className="header">
        <h1 id="header-title">AFBELARDI</h1> 
          <h3>A photo blog of my travels.</h3>
      </header>
      <PhotoGrid data={photos} setPhotos={setPhotos}/>
      
    </div>
  );
}

export default App;
