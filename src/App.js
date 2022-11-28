import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQueueArray } from "./components/Queue";
import { data } from "./list.js";
import * as jsonUtil from "./util.js";
import "./App.css";
import Player from "./components/Player";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import AlbumsPage from "./components/AlbumsPage";
import ArtistPage from "./components/ArtistPage";
import ArtistList from "./components/ArtistList";
import { selectPage } from "./components/pageSlice";

function App() {
  const albums = jsonUtil.getAllAlbums(data);
  // const artists = jsonUtil.getAllArtists(data);
  const currentPage = useSelector(selectPage);
  // const [showPage, setShowPage] = useState("Albums");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addQueueArray(jsonUtil.getAllSongs(data)));
  }, []);

  const routePage = () => {
    switch (currentPage.page) {
      case "Albums":
        return <AlbumsPage albums={albums} />;
        break;
      case "Artist":
        return <ArtistPage artist={currentPage.artist} />;
      case "AllArtists":
        return <ArtistList />;
      default:
        return <AlbumsPage albums={albums} />;
        break;
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <LeftPanel />
        <main>{routePage()}</main>
      </div>
      <Player />
    </div>
  );
}

export default App;
