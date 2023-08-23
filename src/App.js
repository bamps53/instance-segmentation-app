import React from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload';
import AnnotateImage from './components/AnnotateImage';

function App() {
  return (
    <div className="App">
      <h1>Image Annotation Tool</h1>
      <ImageUpload />
      {/* あとで適切な画像を指定する */}
      <AnnotateImage src="path_to_image" />
    </div>
  );
}

export default App;
