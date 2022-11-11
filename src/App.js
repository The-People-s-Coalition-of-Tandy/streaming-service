import React from 'react';
import Album from './components/Album';
import { data } from './list.js';
import * as jsonUtil from './util.js';
import './App.css';
import Player from './components/Player';

function App() {
  const albums = jsonUtil.getAllAlbums(data);
  const artists = jsonUtil.getAllArtists(data);
  console.log(albums);

  return (
      <div className = "App" >
    <header>BLUE DISH Soothing Music</header>
    {albums.map((album, i) => <Album key={i} name={album} />)}
    <Player />
    </div>
  );
}

export default App;
