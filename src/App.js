import React from 'react';
import './App.css';
import AlbumFeature from 'features/Album';

function App() {

  const colorList  =['red', 'green', 'blue'];
  return (
  <div className="App">
    {/* <TodoFeature /> */}
    <AlbumFeature />
  </div>
  );
}

export default App;
