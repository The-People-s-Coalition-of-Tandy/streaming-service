import React from "react";
import Album from "./components/Album";
import { data } from "./list.js";
import * as jsonUtil from "./util.js";
import "./App.css";
import Player from "./components/Player";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";

function App() {
  const albums = jsonUtil.getAllAlbums(data);
  const artists = jsonUtil.getAllArtists(data);
  console.log(albums);

  return (
    <div className="App">
      <Header />
      <LeftPanel />
      {albums.map((album, i) => (
        <Album key={i} name={album} />
      ))}
      <Player />
    </div>
  );
}

export default App;
