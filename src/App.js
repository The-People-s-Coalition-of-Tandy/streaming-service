import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQueueArray } from "./components/Queue";
import { updateData } from "./components/dataSlice";
import * as jsonUtil from "./util.js";
import "./App.css";
import Player from "./components/Player";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import HomePage from "./components/HomePage";
import ArtistPage from "./components/ArtistPage";
import ArtistList from "./components/ArtistList";
import { selectPage } from "./components/pageSlice";
import { useGetAllSongsQuery } from './components/apiSlice';
import { selectData } from "./components/dataSlice";

function App() {

  const { data } = useGetAllSongsQuery();
  const currentPage = useSelector(selectPage);

  const dataReady = useSelector(selectData)


  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(updateData(data));
      dispatch(addQueueArray(jsonUtil.getAllSongs(data.albums)));
      console.log(data);
    }
  }, [data]);

  const routePage = () => {
    const albums = jsonUtil.getAllAlbums(data.albums);
    switch (currentPage.page) {
      case "Home":
        return <HomePage albums={albums} />;
      case "Artist":
        return <ArtistPage artist={currentPage.artist} />;
      case "AllArtists":
        return <ArtistList />;
      default:
        return <HomePage albums={albums} />; 
    }
  };

  return (
    <div className="App">
      {dataReady && 
      <>
      <Header />
      <div className="content">
        <LeftPanel />
        <main>{routePage()}</main>
      </div>
      <Player />
      </>
      }
    </div>
  );
}

export default App;
