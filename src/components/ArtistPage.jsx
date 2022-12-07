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

      <div className="artistBio-container">
        <div className="biography-title">
          {/* <h2>Meet The Artist</h2> */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 500 75"
            preserveAspectRatio="xMinYMid meet"
          >
            <text x="40" y="65" fontSize="75" fill="black">
              Meet The Artist
            </text>
          </svg>
        </div>

        <p className="artistBio">{artistData.bio}</p>
      </div>

      <div className="discography-container">
        {/* <div className="discography-title">
          <h2>Discography</h2>
        </div> */}
        {albums && albums.map((album, i) => <Album key={i} name={album} />)}
      </div>
    </div>
  );
}

export default ArtistPage;
