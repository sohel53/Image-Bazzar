import './App.css';
import React, {useState} from 'react';
import SearchBar from './Components/SearchBar';
import ImageList from './Components/ImageList';

const App = () => {
  let [images, setImages] = useState([]);

  console.log(images);

  return (
    <div className='App'>
      <SearchBar addImages = {setImages} />
      <ImageList images = {images} />
  
    </div>
  )
}

export default App;
