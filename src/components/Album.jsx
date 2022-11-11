import React from "react";
import { data } from "../list.js";
import * as jsonUtil from "../util.js";
import Song from "./Song.jsx";
import "./album.css";

function Album({ name }) {
  const songs = jsonUtil.getAlbum(data, name);

  return (
    <div>
      <div className="bgColor">
        <h1 className="albumName">{name}</h1>
        <img
          className="albumCover"
          width={100}
          height={100}
          src={`./Media/Music/${songs[0].artist}/${songs[0].album}/cover.jpeg`}
        />
      </div>
      {songs.map((song, i) => (
        <Song key={i} name={song.title} url={song.url} songData={song}>
          {song.title}
        </Song>
      ))}
    </div>
  );
}

export default Album;
