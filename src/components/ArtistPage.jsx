import React from "react";
import { artists } from "../list.js";
import { getAlbumsByArtist } from "../util";
import Album from "./Album";
import "./artistPage.css";

function ArtistPage({ artist }) {
  const artistData = artists.filter((obj) => {
    return obj.name === artist;
  })[0];
  const albums = getAlbumsByArtist(artist);

  return (
    <div className="artist-container">
      <h2>{artistData.name}</h2>
      <p>{artistData.bio}</p>
      {albums && albums.map((album, i) => <Album key={i} name={album} />)}
    </div>
  );
}

export default ArtistPage;
