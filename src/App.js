import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addQueueArray } from "./components/Queue";
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addQueueArray(jsonUtil.getAllSongs(data)));
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content">
        <LeftPanel />
        <main>
          {albums.map((album, i) => (
            <Album key={i} name={album} />
          ))}
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
        </main>
      </div>
      <Player />
    </div>
  );
}

export default App;
