import React from "react";
import { data } from "../list.js";
import * as jsonUtil from "../util.js";
import Song from "./Song.jsx";
import { useDispatch } from "react-redux";
import { setPage, setArtist } from "./pageSlice";
import "./album.css";

function Album({ name }) {
  const dispatch = useDispatch();

  const songs = jsonUtil.getAlbum(data, name);

  return (
    <div>
      <div className="bgColor">
        <h1 className="albumName">{name}</h1>
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
              src={`./Media/Music/${songs[0].artist}/${songs[0].album}/cover.jpeg`}
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
