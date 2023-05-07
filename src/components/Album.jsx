import React from "react";
import * as jsonUtil from "../util.js";
import Song from "./Song.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectData } from "../components/dataSlice";
import { setPage, setArtist } from "./pageSlice";
import "./album.css";

function Album({ name }) {
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  const songs = jsonUtil.getAlbum(data.albums, name);

  return (
    <div>
      <div className="bgColor">
        <h1 className="albumName">{name}</h1>
        <button
          onClick={() => {
            dispatch(setArtist(songs[0].artist));
            dispatch(setPage("Artist"));
          }}
          className="album__artist-name-button"
        >
          <h2 className="album__artist-name">{songs[0].artist}</h2>
        </button>
        <div className="flexWrap">
          <button
            className="artist-link"
            onClick={() => {
              dispatch(setArtist(songs[0].artist));
              dispatch(setPage("Artist"));
            }}
          >
            <img
              className="albumCover"
              width={100}
              height={100}
              src={songs[0].cover}
            />
          </button>
          <div className="songsFlex">
            {songs.map((song, i) => (
              <Song key={i} name={song.title} url={song.url} songData={song}>
                {song.title}
              </Song>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Album;
