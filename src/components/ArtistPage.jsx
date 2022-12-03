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
      <div className="artistImage-container">
        <img className="artistImage" src={artistData.artistImage}></img>
      </div>

      <div className="artistName-container">
        <img className="artistNameImage" src="./Media/Images/artistBg1.png" />
        <h2 className="artistName">{artistData.name}</h2>
      </div>

      <p className="artistBio">{artistData.bio}</p>
      <div></div>
      {albums && albums.map((album, i) => <Album key={i} name={album} />)}
    </div>
  );
}

export default ArtistPage;
