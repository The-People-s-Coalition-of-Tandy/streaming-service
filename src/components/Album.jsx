import React from "react";
import { data } from "../list.js";
import * as jsonUtil from "../util.js";
import Song from "./Song.jsx";

function Album({ name }) {
  const songs = jsonUtil.getAlbum(data, name);

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <img
          width={50}
          height={50}
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
